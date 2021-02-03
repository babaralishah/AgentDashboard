import * as XLSX from "xlsx";
import { JSON2SheetOpts } from "xlsx";

import { Component, OnInit, ViewChild } from "@angular/core";
import { AuthenticationService } from "src/app/services/Authentication/authentication.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { FormBuilder, FormGroup } from "@angular/forms";
import { formatDate } from "@angular/common";

@Component({
  selector: "app-leads",
  templateUrl: "./leads.component.html",
  styleUrls: ["./leads.component.css"],
})
export class LeadsComponent implements OnInit {
  @ViewChild("content") content: any;
  userComments: any;
  user: any = [];
  currentUser: any;
  withAutofocus = `<button type="button" ngbAutofocus class="btn btn-danger"
      (click)="modal.close('Ok click')">Ok</button>`;
  deleteId: any;
  agentAssignedForm: FormGroup;
  cityAdminList: any = [];
  agentList = [];
  superAdminList = [];
  token: any;
  assigned_type: any;
  key: any;
  reverse: boolean = true;
  p: number = 1;
  tokendata: any;
  assignLeadData: any = [];
  data: any = [];
  cities: any;
  locations: any;
  city: any;
  location: any;
  startDate: String;
  endDate: String;
  minDemand: any;
  maxDemand: any;
  usersList: any = [];
  agentAssignedName: any;
  minArea: any;
  maxArea: any;
  area_unit: any;
  property_type: any;
  property_type2: any;

  currentLoginUser: any;
  isCheckComment: boolean;

  filterForm: FormGroup;
  selectedLocation: any;
  cityNames: any = [];

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private toastr: ToastrService,
    private fb: FormBuilder
  ) {}
  general_search: string;
  // assigned_to: any;
  selectedUserLocation: any;

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
    {
      value: "assignedTo",
      name: "Filter By Assigned To",
      placeholder: "Assigned To",
    },
  ];
  selectedOption = this.options[0].value;
  placeholder = this.options[0].placeholder;
  refId: any;

  ngOnInit(): void {
    this.formdeclare();
    this.tokenization();
    this.getLeadsList();
    this.getCityAdminList();
    this.getCities();
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

  async tokenization() {
    const token = await this.authService.getToken();
    const decodedToken = await this.authService.getDecodedToken(token);
    this.currentLoginUser = decodedToken.data;
    console.log(this.currentLoginUser);
  }

  isComment() {
    this.isCheckComment = !this.isCheckComment;
  }
  getLeadsList() {
    this.authService.getLeads().subscribe(
      (data) => {
        data = data.leads;
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
              if (element.assigned_history) {
                element?.assigned_history.forEach((history) => {
                  if (this.currentLoginUser.userId === history?.userId) {
                    this.user.push(element);
                    return;
                  }
                });
              }
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
    console.log(this.data);
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
    this.location = location?.location;
    console.log(this.location);
  }
  optionChange(e: any) {
    console.log(e);
    this.placeholder = e.placeholder;
    this.refId = "";
    console.log(this.selectedOption);
  }

  setCurrentUser(user: any) {
    this.currentUser = user;
    let date = new Date(this.currentUser.created);
    console.log(
      date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()
    );
  }

  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  updatingTheComments(event: any) {
    this.userComments = event.target.value;
    console.log(this.userComments);
  }
  assignLeadToAgent() {
    console.log(this.currentUser);
    delete this.currentUser._id;
    delete this.currentUser.SubLocation;
    delete this.currentUser.cityName;
    delete this.currentUser.locationName;
    console.log(this.currentUser);
    this.currentUser.comments = this.userComments;

    this.currentUser["assigned_history"] = this.assignLeadData;
    this.assignLeadData = [];
    this.currentUser[""];

    this.authService.assignLeadToAgent(this.currentUser).subscribe(
      (data: any) => {
        this.toastr.success(data.message, "Success", {
          timeOut: 5000,
        });
        this.router.navigateByUrl("/assigned-leads");
      },
      (error) => {
        console.log(error);

        if (error.error.code == 11000)
          this.toastr.error(error.error.message, "Error", {
            timeOut: 5000,
          });
      }
    );
  }
  editLeadToAgent() {
    this.authService
      .editLeadToAgent(this.currentUser.referenceId, this.currentUser)
      .subscribe(
        (data: any) => {
          console.log(data);
          if (data.code == 200) {
            this.toastr.success(data.message, "Success", {
              timeOut: 5000,
            });
          }
        },
        (error) => {
          console.log(error);

          if (error.error.code == 11000)
            this.toastr.error(
              "This Lead is Already Assigned to Another Agent",
              "Error",
              {
                timeOut: 5000,
              }
            );
        }
      );
  }
  // Function to call User data table for Assigned_To Field of the add-inventory-form
  getCityAdminList() {
    this.authService.getUsers().subscribe(
      (data) => {
        this.usersList = [];
        data.forEach((element) => {
          if (this.currentLoginUser?.access === "city_admin") {
            if (this.currentLoginUser?.city?.city != element?.city?.city) {
              return;
            }
          }
          this.usersList.push(element);
        });
        for (var i = 0; i < data.length; i++) {
          if (data[i].access == "city_admin") {
            if (
              this.currentLoginUser?.access == "city_admin" ||
              this.currentLoginUser?.access === "agent"
            ) {
              if (this.currentLoginUser?.city?.city === data[i]?.city?.city) {
                console.log(this.currentLoginUser?.city === data[i]?.city);

                this.cityAdminList.push(data[i]);
              }
            } else if (this.currentLoginUser?.access == "super_admin")
              this.cityAdminList.push(data[i]);
          } else if (data[i].access == "agent") {
            this.agentList.push(data[i]);
          } else if (data[i].access == "super_admin") {
            this.superAdminList.push(data[i]);
          }
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }
  setUserToEdit(user: any) {
    this.authService.setUser(user);
    this.authService.setFormTitle("Lead");
    this.router.navigate(["/add", user.form_title]);
  }

  setFormTitle(name: any) {
    this.authService.setFormTitle(name);
    this.router.navigate(["/add", name]);
  }

  // Function to delete the single inventory
  deleteLead() {
    console.log(this.deleteId);

    this.authService.deleteInventory(this.deleteId).subscribe(
      (data) => {
        console.log(data);
        if (data.code === 200) {
          this.toastr.success(data.message, "Success", {
            timeOut: 5000,
          });
          // this.getLeadsList();
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

  // Function to patch the value from ng select
  changeAssignedToCityAdmin(access: any) {
    console.log(access);

    this.assignLeadData = [];
    this.assignLeadData.push({
      userId: access.userId,
      fullname: access.fullname,
      contact: access.contact,
      date: new Date(),
    });
    console.log(this.assignLeadData);
    // this.currentUser["assigned_to"] = this.assignLeadData;
  }
  // Function to patch the value from ng select
  changeAssignedAdmin(access: any) {
    this.assignLeadData = [];
    this.assignLeadData.push({
      userId: access?.userId,
      fullname: access?.fullname,
      contact: access.contact,
      date: new Date(),
    });
    console.log(this.assignLeadData);
    // this.currentUser["assigned_to"] = this.assignLeadData;
  }

  changeAssignAgent(agent: any) {
    console.log(agent);
    this.agentAssignedName = agent?.fullname;
    console.log(this.agentAssignedName);
  }
  changeAssignedAgent(access: any) {
    console.log(access);

    this.assignLeadData = [];
    access.forEach((element) => {
      console.log(element);

      this.assignLeadData.push({
        userId: element.userId,
        fullname: element.fullname,
        contact: element.contact,
        date: new Date(),
      });

      // this.currentUser["assigned_to"] = this.assignLeadData;
    });
    console.log(this.assignLeadData);
    // console.log(this.currentUser["assigned_to"]);
  }
  confirmID(id: any) {
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
    XLSX.writeFile(wb, "Leads.xlsx");
  }

  contentWidthEmitted(value) {
    this.content.nativeElement.style.marginLeft = `${value}px`;
  }
}
