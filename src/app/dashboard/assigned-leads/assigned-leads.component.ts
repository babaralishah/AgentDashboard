import * as XLSX from "xlsx";
import { JSON2SheetOpts } from "xlsx";
import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "src/app/services/Authentication/authentication.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-assigned-leads",
  templateUrl: "./assigned-leads.component.html",
  styleUrls: ["./assigned-leads.component.css"],
})
export class AssignedLeadsComponent implements OnInit {
  user: any;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private toastr: ToastrService
  ) {}

  general_search: any;
  ngOnInit(): void {
    this.getAllList();
  }
  // Function to Get table Data
  getAllList() {
    this.authService.getAll().subscribe(
      (data) => {
        this.user = data.inventories;
        console.log("Server response: ", data);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  // Function to delete the single inventory
  deleteLead() {
    this.authService.deleteInventory("dasd").subscribe((data) => {
      console.log(data);
      if (data.code === 200) {
        this.toastr.success(data.message, "Success", {
          timeOut: 5000,
        });
        this.getAllList();
      }
    });
  }
  // Function to Get Excel File of the Data Table
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

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "All Data Export");
    XLSX.writeFile(wb, "Both.xlsx");
  }
}
