import * as XLSX from "xlsx";
import { JSON2SheetOpts } from "xlsx";
import { Component, OnInit, ViewChild } from "@angular/core";
import { AuthenticationService } from "src/app/services/Authentication/authentication.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { formatDate } from "@angular/common";
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
  city: any;
  location: any;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private toastr: ToastrService
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

  options = [
    // {
    //   value: "cityName",
    //   name: "Filter By City",
    //   placeholder: "City",
    // },
    // {
    //   value: "locationName",
    //   name: "Filter By Location",
    //   placeholder: "Location",
    // },
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

  ngOnInit(): void {
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
        console.log(this.agentList);
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

  //Function to change the city of --ng select city--
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
        this.getInventoryList();
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
