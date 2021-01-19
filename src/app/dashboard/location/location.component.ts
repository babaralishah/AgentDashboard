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
  locations: any = [];
  city: any;

  currentLoginUser: any;

  @ViewChild("content") content: any;
  deletedId: any;

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
      value: "SubLocationName",
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
  setLocation(user: any) {
    this.authService.setUser(user);
    this.router.navigateByUrl("/add-location");
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

          if (
            this.currentLoginUser.access === "city_admin" ||
            this.currentLoginUser.access === "agent"
          ) {
            if (this.currentLoginUser.city.city !== cityName) {
              return;
            }
          }
          element.cityName = cityName;
          element.locationName = locations[index].location;
          element.SubLocationName = [];
          if (element.subLocations) {
            for (let i = 0; i < element.subLocations.length; i++) {
              element.SubLocationName.push(
                element.subLocations[i]?.subLocation
              );
            }
          }

          this.locations.push(element);
        });
        console.log(this.locations);
      },
      (err) => {
        console.error(err);
      }
    );
  }

  deleteLocation() {
    console.log(this.deletedId);

    this.authService.deleteLocation(this.deletedId).subscribe((data) => {
      console.log(data);
      const code = data.code;
      if (code == 200) {
        this.toastr.success(data.message, "Success", {
          timeOut: 5000,
        });
        // for (let i = 0; i < this.locations; i++) {
        //   if (this.locations[i]._id === this.deletedId) {
        //     this.locations.splice(i, 1);
        //     i--;
        //   }
        // }
        // this.getCities();
      }
    });
  }

  confirmID(id: any) {
    this.deletedId = id;
  }

  // deleteId(deleteId: any) {
  //   this.deletedId = deleteId;
  // }

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
