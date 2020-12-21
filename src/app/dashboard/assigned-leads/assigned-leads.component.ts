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
  deleteId: any;
  row: any = [];
  key: any;
  reverse: boolean = true;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private toastr: ToastrService
  ) {}

  general_search: any;

  options = [
    { value: "referenceId", name: "Filter By Ref ID", placeholder: "Ref Id" },
    {
      value: "property_purpose",
      name: "Filter By Purpose",
      placeholder: "Purpose",
    },
    { value: "demand_price", name: "Filter By Demand", placeholder: "Demand" },
    {
      value: "property_type",
      name: "Filter By Type",
      placeholder: "Type",
    },
  ];

  options2 = [
    { value: "userId", name: "Filter By userId ", placeholder: "userId" },
    { value: "fullname", name: "Filter By fullname", placeholder: "fullname" }
  ];

  selectedOption = this.options[0].value;
  placeholder = this.options[0].placeholder;
  refId: any;
  
  selectedOption2 = this.options2[0].value;
  placeholder2 = this.options2[0].placeholder;
  refId2: any;

  ngOnInit(): void {
    this.getAllList();
  }

  
  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  optionChange(e: any) {
    console.log(e);
    this.placeholder = e.placeholder;
    this.refId = "";
    console.log(this.selectedOption);
  }

  // Function to Get table Data
  getAllList() {
    this.authService.getAllAssignedLeads().subscribe(
      (data) => {
        this.user = data;
        console.log("Server response: ", this.user);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  setCurrentRow(user: any) {
    this.row = user;
    let date = new Date(this.row.created);
    console.log(
      date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()
    );
    console.log(this.row.created);
  }

  deleteAssignedLead() {
    console.log(this.deleteId);
    this.authService.deleteAssignedLeads(this.deleteId).subscribe(
      (data) => {
        console.log(data);
        if (data.code === 200) {
          this.toastr.success(data.message, "Success", {
            timeOut: 5000,
          });
          this.getAllList();
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

  confirmID(id: any) {
    console.log(id);

    this.deleteId = id;
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
