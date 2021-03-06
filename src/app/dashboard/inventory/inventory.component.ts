import * as XLSX from "xlsx";
import { JSON2SheetOpts } from "xlsx";
import { Component, OnInit, ViewChild } from "@angular/core";
import { AuthenticationService } from "src/app/services/Authentication/authentication.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { formatDate } from "@angular/common";
import { FormBuilder, FormGroup } from "@angular/forms";
@Component({
  selector: "app-inventory",
  templateUrl: "./inventory.component.html",
  styleUrls: ["./inventory.component.css"],
})
export class InventoryComponent implements OnInit {
  @ViewChild("content") content: any;
  user: any = [];
  deleteId: any;
  key: any;
  reverse: boolean = true;
  p: number = 1;
  data: any = [];
  cities: any;
  locations: any;
  cityNames: any = [];
  city: any;
  location: any;
  selectedLocation: any;
  property_type: any;
  property_type2: any;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private toastr: ToastrService,
    private fb: FormBuilder
  ) {}
  search_id: string;
  search_area: string;
  general_search: string;
  search_location: string;
  search_type: string;
  search_demand: string;
  agentList: any = [];
  agentAssignedName: any;

  currentLoginUser: any;
  filterForm: FormGroup;

  options = [
    {
      value: "client_name",
      name: "Filter By Client Name",
      placeholder: "Client Name",
    },
    {
      value: "beds_number",
      name: "Filter By Beds",
      placeholder: "Beds",
    },
  ];
  selectedOption = this.options[0].value;
  placeholder = this.options[0].placeholder;
  refId: any;
  startDate: String;
  endDate: String;
  minDemand: any;
  maxDemand: any;
  minArea: any;
  maxArea: any;
  area_unit: any;

  ngOnInit(): void {
    this.formdeclare();
    this.tokenization();
    this.getInventoryList();
    this.getAllUsersList();
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
    this.property_type = null;
    this.property_type2 = null;
  }

  changeAssignedAgent(agent: any) {
    console.log(agent);
    this.agentAssignedName = agent?.fullname;
    console.log(this.agentAssignedName);
  }
  getAllUsersList() {
    this.authService.getUsers().subscribe(
      (users) => {
        this.agentList = [];
        const data = users;
        data.forEach((element) => {
          if (this.currentLoginUser.access === "city_admin") {
            if (this.currentLoginUser.city.city !== element?.city?.city) {
              return;
            }
          }

          this.agentList.push(element);
        });
        // console.log(this.agentList);
      },
      (err) => {
        console.error(err);
      }
    );
  }

  getInventoryList() {
    this.authService.getInventory().subscribe(
      (data) => {
        data = data.inventories;

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
        console.log("User Get Response", this.user);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  // Calling Api to get the Cities

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

  //Function to change the city of --ng select city--
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
    console.log(location);

    this.location = location?.location;
    console.log(this.location);
  }
  optionChange(e: any) {
    this.placeholder = e.placeholder;
    this.refId = "";
    console.log(this.selectedOption);
  }

  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  public priceConverter(value) {
    return this.authService.priceFilter(value);
  }
  setFormTitle(name: any) {
    this.authService.setFormTitle(name);
    this.router.navigate(["/add", name]);
  }
  confirmID(id: any) {
    this.deleteId = id;
  }

  // Function to delete the single inventory
  deleteInventory() {
    console.log(this.deleteId);

    this.authService.deleteInventory(this.deleteId).subscribe((data) => {
      console.log(data);
      if (data.code === 200) {
        this.toastr.success(data.message, "Success", {
          timeOut: 5000,
        });
        // this.getInventoryList();
        for (let i = 0; i < this.user.length; i++) {
          if (this.user[i]._id === this.deleteId) {
            this.user.splice(i, 1);
            i--;
          }
        }
      }
    });
  }
  // Function to set user in the service in order to perform delete or edit operations later on
  setUserToEdit(user: any) {
    this.authService.setUser(user);

    this.authService.setFormTitle("Inventory");
    // this.router.navigateByUrl("/add-inventories");
    this.router.navigate(["/add", user.form_title]);
  }
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

    ws["!cols"][7] = { hidden: true };
    ws["!cols"][21] = { hidden: true };
    ws["!cols"][22] = { hidden: true };
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "All Data Export");
    XLSX.writeFile(wb, "Inventory.xlsx");
  }

  contentWidthEmitted(value) {
    this.content.nativeElement.style.marginLeft = `${value}px`;
  }
}
