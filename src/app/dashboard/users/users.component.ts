import * as XLSX from "xlsx";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "src/app/services/Authentication/authentication.service";
import { ToastrService } from "ngx-toastr";
import { JSON2SheetOpts } from "xlsx/types";
import { formatDate } from "@angular/common";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"],
})
export class UsersComponent implements OnInit {
  general_search: string;
  data: any = [];
  deleteId: any;
  key: any;
  reverse: boolean = true;
  p: number = 1;
  startDate: String;
  endDate: String;
  cities: any = [];
  locations: any = [];
  city: any;
  locationName: any;
  agentList: any = [];
  agentAssignedName: any;

  currentLoginUser: any;

  @ViewChild("content") content: any;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  user: any;

  options = [
    {
      value: "access",
      name: "Filter By Access",
      placeholder: "Access",
    },
  ];
  selectedOption = this.options[0].value;
  placeholder = this.options[0].placeholder;
  refId: any;

  ngOnInit(): void {
    this.tokenization();
    this.getUserList();
    this.getCities();
    this.getAllUsersList();
  }

  async tokenization() {
    const token = await this.authService.getToken();
    const decodedToken = await this.authService.getDecodedToken(token);
    this.currentLoginUser = decodedToken.data;
    console.log(this.currentLoginUser);
  }

  getCities() {
    this.authService.getCities().subscribe(
      (data) => {
        console.log(data);
        this.cities = [];
        data.forEach(element => {
          if(this.currentLoginUser.access === "city_admin") {
            if(element?.city === this.currentLoginUser?.city?.city) {
              this.cities.push(element);
            }  
          } else {
            this.cities.push(element);
          }
        });
      },
      (err) => {
        console.error(err);
      }
    );
  }
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
  changeStartDate(e: any) {
    this.startDate = formatDate(
      new Date(e.target.value),
      "yyyy-MM-dd",
      "en_US"
    );
  }
  changeEndDate(e: any) {
    this.endDate = formatDate(new Date(e.target.value), "yyyy-MM-dd", "en_US");
  }

  optionChange(e: any) {
    this.placeholder = e.placeholder;
    this.refId = "";
    console.log(this.selectedOption);
  }
  setUser(user: any) {
    this.authService.setUser(user);
    this.router.navigateByUrl("/register");
  }
  // Function to call User data table for Assigned_To Field of the add-inventory-form
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
  // Function to call User data table
  getUserList() {
    this.authService.getUsers().subscribe(
      (data) => {
        data.forEach((element) => {
          if (this.currentLoginUser.access === "city_admin") {
            if (this.currentLoginUser.city.city !== element.city.city) {
              return;
            }
          }
          element.cityName = element.city.city;
          element.locationName = [];
          element.SubLocation = [];
          for (let i = 0; i < element.location.length; i++) {
            element.locationName.push(element.location[i]?.location);
            element.SubLocation.push(element.location[i]?.location);
          }
          this.data.push(element);
        });

        console.log("User Get Response", this.data);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  changeCity(city: any) {
    this.locations = [];
    this.locationName = null;
    this.city = city?.city;
    console.log(this.city);
    if (city) this.getLocations(city._id);
  }

  changeLocation(location: any) {
    this.locationName = location?.location;
    console.log(this.locationName);
  }

  changeAssignedAgent(agent: any) {
    this.agentAssignedName = agent?.fullname;
    console.log(this.agentAssignedName);
  }

  confirmID(id: any) {
    console.log(id);
    this.deleteId = id;
  }

  // Function to delete the single inventory
  deleteUser() {
    console.log(this.deleteId);

    this.authService.deleteUser(this.deleteId).subscribe((data) => {
      // this.getUserList();
      console.log(data);
      if (data.code === 200) {
        this.toastr.success(data.message, "Success", {
          timeOut: 5000,
        });
        // this.getUserList();
        for (let i = 0; i < this.data?.length; i++) {
          if (this.data[i]._id === this.deleteId) {
            this.data.splice(i, 1);
            i--;
          }
        }
      }
    });
  }

  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  // Function to Get Excel File of the Data Table
  exportTOExcel() {
    let options: JSON2SheetOpts = { header: [] };
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.data, options);

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

    ws["!cols"][2] = { hidden: true };
    ws["!cols"][3] = { hidden: true };

    ws["!cols"][6] = { hidden: true };
    ws["!cols"][10] = { hidden: true };

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "All Data Export");
    XLSX.writeFile(wb, "Users.xlsx");
  }

  contentWidthEmitted(value) {
    this.content.nativeElement.style.marginLeft = `${value}px`;
  }
}
