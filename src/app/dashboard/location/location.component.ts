import * as XLSX from "xlsx";
import { Component, OnInit } from "@angular/core";
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
  locations: any;
  city: any;
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
    this.getCities();
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
          element.cityName = cityName;
          element.locationName = locations[index].location;
          element.SubLocation = [];
          if(element.subLocations) {
            for (let i = 0; i < element.subLocations.length; i++) {
              element.SubLocation.push(element.subLocations[i]?.subLocation);
            }  
          } 
        });
        this.locations = locations;
        console.log(this.locations);
      },
      (err) => {
        console.error(err);
      }
    );
  }

  confirmID(id: any) {}

  // Function to delete the single inventory
  deleteLead() {
    console.log(this.deleteId);

    this.authService.deleteUser(this.deleteId).subscribe((data) => {
      console.log(data);
      if (data.code === 200) {
        this.toastr.success(data.message, "Success", {
          timeOut: 5000,
        });
      }
    });
  }
  deleteId(deleteId: any) {
    throw new Error("Method not implemented.");
  }

  getCityName(cityId: any) {
    for (let i = 0; i < this.city.length; i++) {
      if (cityId === this.city[i]._id) return this.city[i].city;
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
    ws["!cols"][0] = { hidden: true };

    ws["!cols"][2] = { hidden: true };
    ws["!cols"][3] = { hidden: true };

    ws["!cols"][6] = { hidden: true };
    ws["!cols"][10] = { hidden: true };

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "All Data Export");
    XLSX.writeFile(wb, "Users.xlsx");
  }
}
