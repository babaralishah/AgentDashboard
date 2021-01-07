import * as XLSX from "xlsx";
import { JSON2SheetOpts } from "xlsx";
import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "src/app/services/Authentication/authentication.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-both",
  templateUrl: "./both.component.html",
  styleUrls: ["./both.component.css"],
})
export class BothComponent implements OnInit {
  user: any;
  savedId: any;

  withAutofocus = `<button type="button" ngbAutofocus class="btn btn-danger"
      (click)="modal.close('Ok click')">Ok</button>`;
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
  general_search: any;

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
    this.getAllList();
  }

  getAllList() {
    this.authService.getAll().subscribe(
      (data) => {
        this.user = data.inventories;
        this.data = data.inventories;
        // console.log("data---->", this.data);
        this.data.forEach((element) => {
          element.assignedTo = [];
          element.added_ByName = element.added_By?.fullname;
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
          for (let i = 0; i < element.assigned_history.length; i++)
            element.assignedTo[i] = element.assigned_history[i]?.fullname;
        });

        console.log("Server response: ", data);
      },
      (error) => {
        console.error(error);
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
}
