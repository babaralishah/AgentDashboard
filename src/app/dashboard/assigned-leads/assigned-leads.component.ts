import * as XLSX from "xlsx";
import { JSON2SheetOpts } from "xlsx";
import { Component, OnInit, ViewChild } from "@angular/core";
import { AuthenticationService } from "src/app/services/Authentication/authentication.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { formatDate } from "@angular/common";
import { FormBuilder, FormGroup } from "@angular/forms";
@Component({
  selector: "app-assigned-leads",
  templateUrl: "./assigned-leads.component.html",
  styleUrls: ["./assigned-leads.component.css"],
})
export class AssignedLeadsComponent implements OnInit {
  @ViewChild("content") content: any;
  user: any = [];
  deleteId: any;
  row: any = [];
  key: any;
  reverse: boolean = true;
  p: number = 1;
  data: any = [];
  startDate: String;
  endDate: String;
  minDemand: any;
  maxDemand: any;
  minArea: any;
  maxArea: any;
  area_unit: any;
  cities: any;
  locations: any;
  city: any;
  location: any;

  currentLoginUser: any;
  filterForm: FormGroup;
  cityNames: any = [];
  selectedLocation: any;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private toastr: ToastrService,
    private fb: FormBuilder
  ) {}

  general_search: any;

  options = [
    {
      value: "property_type",
      name: "Filter By Property Type",
      placeholder: "Property Type",
    },
    {
      value: "added_ByName",
      name: "Filter By Added By",
      placeholder: "Added By",
    },
  ];

  options2 = [
    {
      value: "fullname",
      name: "Filter By Name",
      placeholder: "Name",
    },
  ];

  selectedOption = this.options[0].value;
  placeholder = this.options[0].placeholder;
  refId: any;

  selectedOption2 = this.options2[0].value;
  placeholder2 = this.options2[0].placeholder;
  refId2: any;

  ngOnInit(): void {
    this.formdeclare();
    this.tokenization();
    this.getAllList();
    this.getCities();
  }

  async tokenization() {
    const token = await this.authService.getToken();
    const decodedToken = await this.authService.getDecodedToken(token);
    this.currentLoginUser = decodedToken.data;
    console.log(this.currentLoginUser);
  }

  formdeclare() {
    // make a function of declaring reactive form then call it in ngoninit
    this.filterForm = this.fb.group({
      minPrice: [],
      maxPrice: [],
      area: [],
      minArea: [],
      maxArea: [],
      startDate: [],
      endDate: [],
    });
  }

  filter() {
    this.minDemand = this.filterForm.get("minPrice").value;
    this.maxDemand = this.filterForm.get("maxPrice").value;
    this.area_unit = this.filterForm.get("area").value;
    this.minArea = this.filterForm.get("minArea").value;
    this.maxArea = this.filterForm.get("maxArea").value;
    if (this.filterForm.get("startDate").value) {
      this.startDate = formatDate(
        new Date(this.filterForm.get("startDate").value),
        "yyyy-MM-dd",
        "en_US"
      );
    }
    if (this.filterForm.get("endDate").value) {
      this.endDate = formatDate(
        new Date(this.filterForm.get("endDate").value),
        "yyyy-MM-dd",
        "en_US"
      );
    }
  }

  resetFilters() {
    this.filterForm.reset();
    this.minDemand = null;
    this.maxDemand = null;
    this.area_unit = null;
    this.minArea = null;
    this.maxArea = null;
    this.startDate = null;
    this.endDate = null;
  }

  // Function to Get table Data
  getAllList() {
    this.authService.getAllAssignedLeads().subscribe(
      (data) => {
        console.log(data);

        data.forEach((element) => {
          element.assignedTo = [];
          element.added_ByName = element.added_By.fullname;
          element.cityName = element.city[0]?.city;
          element.locationName = [];
          element.SubLocation = [];
          for (let i = 0; i < element.location.length; i++) {
            element.locationName.push(element.location[i]?.location);
            element.SubLocation.push(element.location[i]?.location);
          }
          if (element.demand_price != null) {
            element.demand = element.demand_price;
          } else if (element.max_price) {
            element.demand = element.max_price;
          } else if (element.min_price) {
            element.demand = element.min_price;
          }

          for (let i = 0; i < element.assigned_history?.length; i++) {
            if (element.assigned_history[i]?.fullname === "") continue;
            element.assignedTo[i] = element.assigned_history[i]?.fullname;
          }

          if (this.currentLoginUser.access === "city_admin") {
            element.city.forEach((city) => {
              if (this.currentLoginUser.city.city === city.city) {
                this.user.push(element);
                return;
              }
            });
          } else if (this.currentLoginUser.access === "agent") {
            if (this.currentLoginUser.userId === element.added_By.userId) {
              this.user.push(element);
              return;
            } else {
              element.assigned_history.forEach((history) => {
                if (this.currentLoginUser.userId === history?.userId) {
                  this.user.push(element);
                  return;
                }
              });
            }
          } else {
            this.user.push(element);
          }
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getCities() {
    this.authService.getCities().subscribe(
      (cities) => {
        if (
          this.currentLoginUser?.access === "city_admin" ||
          this.currentLoginUser?.access === "agent"
        ) {
          if (this.currentLoginUser?.city.city == "Islamabad") {
            this.cityNames.push(cities[2]);
            this.cities = this.cityNames;
          } else if (this.currentLoginUser?.city.city == "Rawalpindi") {
            this.cityNames.push(cities[1]);
            this.cities = this.cityNames;
          } else if (this.currentLoginUser?.city.city == "Peshawar") {
            this.cityNames.push(cities[0]);
          }
        } else {
          this.cities = cities;
          console.log(this.cities);
        }
      },
      (err) => {
        console.error(err);
      }
    );
    console.log(this.cities);
  }

  // getCities() {
  //   this.authService.getCities().subscribe(
  //     (data) => {
  //       console.log(data);
  //       this.cities = data;
  //     },
  //     (err) => {
  //       console.error(err);
  //     }
  //   );
  // }
  // Calling Api to get the Locations
  getLocations(selectedCity?) {
    this.authService.getLocations().subscribe(
      (locations) => {
        console.log(locations);
        this.locations = locations;
        if (selectedCity) {
          this.locations = locations.filter((loc) => {
            return loc.cityId == selectedCity;
          });
        }
      },
      (err) => {
        console.error(err);
      }
    );
  }

  changeCity(city: any) {
    this.selectedLocation = null;
    this.locations = [];
    this.location = "";
    this.city = city?.city;
    console.log(this.city);

    this.locations = [];
    if (city) this.getLocations(city._id);
  }
  changeLocation(location: any) {
    this.location = location?.location;
    console.log(this.location);
  }

  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  optionChange(e: any) {
    console.log(e);
    this.placeholder = e.placeholder;
    this.refId = "";
    console.log(this.selectedOption);
  }

  setCurrentRow(user: any) {
    this.row = user;
    let date = new Date(this.row.created);
    console.log(
      date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()
    );
    console.log(this.row.created);
  }

  deleteAssignedLead() {
    console.log(this.deleteId);
    this.authService.deleteAssignedLeads(this.deleteId).subscribe(
      (data) => {
        console.log(data);
        if (data.code === 200) {
          this.toastr.success(data.message, "Success", {
            timeOut: 5000,
          });
          // this.getAllList();
          for (let i = 0; i < this.user.length; i++) {
            if (this.user[i]._id === this.deleteId) {
              this.user.splice(i, 1);
              i--;
            }
          }
        }
      },
      (error) => {
        console.error(error);
        this.toastr.error(error.message, "Error", {
          timeOut: 5000,
        });
      }
    );
  }

  confirmID(id: any) {
    console.log(id);

    this.deleteId = id;
  }
  // Function to Get Excel File of the Data Table
  exportTOExcel() {
    let options: JSON2SheetOpts = { header: [] };
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.user, options);

    var wscols = [
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
    ];

    ws["!cols"] = wscols;
    ws["!cols"][0] = { hidden: true };
    ws["!cols"][1] = { hidden: true };
    ws["!cols"][2] = { hidden: true };
    ws["!cols"][3] = { hidden: true };
    ws["!cols"][4] = { hidden: true };
    ws["!cols"][5] = { hidden: true };

    ws["!cols"][8] = { hidden: true };

    ws["!cols"][25] = { hidden: true };

    ws["!cols"][26] = { hidden: true };
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "All Data Export");
    XLSX.writeFile(wb, "Both.xlsx");
  }

  contentWidthEmitted(value) {
    this.content.nativeElement.style.marginLeft = `${value}px`;
  }
}
