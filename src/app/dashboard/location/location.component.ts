import * as XLSX from "xlsx";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "src/app/services/Authentication/authentication.service";
import { ToastrService } from "ngx-toastr";
import { JSON2SheetOpts } from "xlsx/types";

@Component({
  selector: "app-location",
  templateUrl: "./location.component.html",
  styleUrls: ["./location.component.css"],
})
export class LocationComponent implements OnInit {
  general_search: string;
  data: any;
  key: any;
  reverse: boolean = true;
  p: number = 1;
  // placeholder: any;
  // refId: string;
  locations: any = [];
  city: any;

  currentLoginUser: any;

  @ViewChild('content') content: any;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  options = [
    {
      value: "locationName",
      name: "Filter By Location",
      placeholder: "Location",
    },
    {
      value: "cityName",
      name: "Filter By City",
      placeholder: "City",
    },
    {
      value: "SubLocation",
      name: "Filter By Sub-Location",
      placeholder: "Location",
    },
  ];
  selectedOption = this.options[0].value;
  placeholder = this.options[0].placeholder;
  refId: any;
  ngOnInit(): void {
    this.tokenization();
    this.getCities();
  }
  
  async tokenization() {
    const token = await this.authService.getToken();
    const decodedToken = await this.authService.getDecodedToken(token);
    this.currentLoginUser = decodedToken.data;
    console.log(this.currentLoginUser);
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

  // Calling Api to get the Cities
  getCities() {
    this.authService.getCities().subscribe(
      (city) => {
        console.log(city);
        this.city = city;
        this.getLocations();
      },
      (err) => {
        console.error(err);
      }
    );
  }
  // Calling Api to get the Locations
  getLocations() {
    this.authService.getLocations().subscribe(
      (locations) => {
        console.log(locations);
        locations.forEach((element, index) => {
          const cityName = this.getCityName(element.cityId);

          if(this.currentLoginUser.access === "city_admin" || this.currentLoginUser.access === "agent") {
            if(this.currentLoginUser.city.city !== cityName) {
              return;
            }
          }
          
          element.cityName = cityName;
          element.locationName = locations[index].location;
          element.SubLocation = [];
          if(element.subLocations) {
            for (let i = 0; i < element.subLocations.length; i++) {
              element.SubLocation.push(element.subLocations[i]?.subLocation);
            }  
          }
          
          this.locations.push(element);
        });
        // this.locations = locations;
        console.log(this.locations);
      },
      (err) => {
        console.error(err);
      }
    );
  }

  confirmID(id: any) {}

  // Function to delete the single inventory
  deletelocation() {}
  deleteId(deleteId: any) {
    throw new Error("Method not implemented.");
  }

  getCityName(cityId: any) {
    for (let i = 0; i < this.city.length; i++) {
      if (cityId === this.city[i]._id) {
        // console.log(cityId, this.city[i]._id);
        return this.city[i].city;
      } else if (cityId === 8) return "Karachi";
    }
  }

  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }
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
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "All Data Export");
    XLSX.writeFile(wb, "Users.xlsx");
  }

  contentWidthEmitted(value) {
    this.content.nativeElement.style.marginLeft = `${value}px`;
  }
}
