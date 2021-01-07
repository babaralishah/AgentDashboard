import * as XLSX from "xlsx";
import { JSON2SheetOpts } from "xlsx";
import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "src/app/services/Authentication/authentication.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
@Component({
  selector: "app-inventory",
  templateUrl: "./inventory.component.html",
  styleUrls: ["./inventory.component.css"],
})
export class InventoryComponent implements OnInit {
  user: any;
  deleteId: any;
  key: any;
  reverse: boolean = true;
  p: number = 1;
  data: any;

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

  options = [
    {
      value: "cityName",
      name: "Filter By City",
      placeholder: "City",
    },
    {
      value: "SubLocation",
      name: "Filter By Location",
      placeholder: "Location",
    },
    {
      value: "demand",
      name: "Filter By Demand",
      placeholder: "Demand",
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

  ngOnInit(): void {
    this.getInventoryList();
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
  getInventoryList() {
    this.authService.getInventory().subscribe(
      (data) => {
        this.data = data.inventories;
        console.log("data---->", this.data);
        this.data.forEach((element) => {
          element.assignedTo = [];
          element.added_ByName = element.added_By.fullname;
          element.cityName = element.city[0]?.city;
          element.SubLocation = element.location[0]?.location;
          if (element.demand_price != null) {
            element.demand = element.demand_price;
          } else if (element.max_price) {
            element.demand = element.max_price;
          } else if (element.min_price) {
            element.demand = element.min_price;
          }
          console.log(element.demand);

          for (let i = 0; i < element.assigned_history?.length; i++) {
            if (element.assigned_history[i]?.fullname === "") continue;
            element.assignedTo[i] = element.assigned_history[i]?.fullname;
          }
        });
        this.user = this.data;
      },
      (error) => {
        console.error(error);
      }
    );
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
}
