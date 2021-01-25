import * as XLSX from "xlsx";
import { JSON2SheetOpts } from "xlsx";
import { Component, OnInit, ViewChild } from "@angular/core";
import { AuthenticationService } from "src/app/services/Authentication/authentication.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { formatDate } from "@angular/common";

@Component({
  selector: "app-both",
  templateUrl: "./both.component.html",
  styleUrls: ["./both.component.css"],
})
export class BothComponent implements OnInit {
  @ViewChild("content") content: any;
  user: any = [];
  savedId: any;

  withAutofocus = `<button type="button" ngbAutofocus class="btn btn-danger"
      (click)="modal.close('Ok click')">Ok</button>`;
  deleteId: any;
  key: any;
  reverse: boolean = true;
  p: number = 1;
  data: any = [];
  cities: any;
  locations: any;
  city: any;
  location: any;

  currentLoginUser: any;
  agentAssignedName: any;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private toastr: ToastrService
  ) {}
  general_search: any;

  options = [
    {
      value: "property_type",
      name: "Filter By Property Type",
      placeholder: "Property Types",
    },
    {
      value: "added_ByName",
      name: "Filter By Added By",
      placeholder: "Added By",
    },
    {
      value: "assignedTo",
      name: "Filter By Assigned To",
      placeholder: "Assigned To",
    },
  ];
  selectedOption = this.options[0].value;
  placeholder = this.options[0].placeholder;
  refId: any;
  startDate: String;
  endDate: String;
  minDemand: any;
  maxDemand: any;
  agentList: any = [];

  ngOnInit(): void {
    this.tokenization();
    this.getAllList();
    this.getAllUsersList();
    this.getCities();
  }

  async tokenization() {
    const token = await this.authService.getToken();
    const decodedToken = await this.authService.getDecodedToken(token);
    this.currentLoginUser = decodedToken.data;
    console.log(this.currentLoginUser);
  }

  changeStartDate(e: any) {
    this.startDate = formatDate(
      new Date(e.target.value),
      "yyyy-MM-dd",
      "en_US"
    );
    // console.log('Start', this.startDate);
  }
  changeEndDate(e: any) {
    this.endDate = formatDate(new Date(e.target.value), "yyyy-MM-dd", "en_US");
    // console.log('End', this.endDate);
  }
  getAllList() {
    this.authService.getAll().subscribe(
      (data) => {
        // this.user = data.inventories;
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
      },
      (error) => {
        console.error(error);
      }
    );
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

  changeCity(city: any) {
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

  // Calling Api to get the Cities
  getCities() {
    this.authService.getCities().subscribe(
      (data) => {
        console.log(data);
        this.cities = data;
      },
      (err) => {
        console.error(err);
      }
    );
  }
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

  optionChange(e: any) {
    this.placeholder = e.placeholder;
    this.refId = "";
    console.log(this.selectedOption);
  }

  setUserToEdit(user: any) {
    this.authService.setUser(user);
    this.authService.setFormTitle("Both");
    this.router.navigate(["/add", user.form_title]);
  }

  setFormTitle(name: any) {
    this.authService.setFormTitle(name);
    this.router.navigate(["/add", name]);
  }

  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  // Function to delete the single inventory
  deleteLead() {
    console.log(this.deleteId);

    this.authService.deleteInventory(this.deleteId).subscribe((data) => {
      console.log(data);
      if (data.code === 200) {
        this.toastr.success(data.message, "Success", {
          timeOut: 5000,
        });
        this.getAllList();
        //   for ( let i = 0; i < this.user.length; i++){
        //      if ( this.user[i]._id === this.saveID) { this.user.splice(i, 1); i--; }}
      }
    });
  }

  confirmID(id) {
    console.log(id);

    this.deleteId = id;
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
