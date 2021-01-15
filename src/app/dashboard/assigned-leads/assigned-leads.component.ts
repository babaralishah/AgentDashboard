import * as XLSX from "xlsx";
import { JSON2SheetOpts } from "xlsx";
import { Component, OnInit, ViewChild } from "@angular/core";
import { AuthenticationService } from "src/app/services/Authentication/authentication.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { formatDate } from "@angular/common";
@Component({
  selector: "app-assigned-leads",
  templateUrl: "./assigned-leads.component.html",
  styleUrls: ["./assigned-leads.component.css"],
})
export class AssignedLeadsComponent implements OnInit {

  @ViewChild('content') content: any;
  user: any;
  deleteId: any;
  row: any = [];
  key: any;
  reverse: boolean = true;
  p: number = 1;
  data: any;
  startDate: String;
  endDate: String;

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
  ];

  options2 = [
    {
      value: "fullname",
      name: "Filter By Name",
      placeholder: "Name",
    },
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

  changeStartDate(e: any) {
    this.startDate = formatDate(new Date(e.target.value),'yyyy-MM-dd','en_US');
    // console.log('Start', this.startDate);
  }
  changeEndDate(e: any) {
    this.endDate= formatDate(new Date(e.target.value),'yyyy-MM-dd','en_US');
    // console.log('End', this.endDate);
  }

  // Function to Get table Data
  getAllList() {
    this.authService.getAllAssignedLeads().subscribe(
      (data) => {
        this.user = data;

        this.data = data;
        console.log(this.data);

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
          for (let i = 0; i < element.assigned_history.length; i++)
            element.assignedTo[i] = element.assigned_history[i]?.fullname;
        });
      },
      (error) => {
        console.error(error);
      }
    );
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
    ws["!cols"][0] = { hidden: true };
    ws["!cols"][1] = { hidden: true };
    ws["!cols"][2] = { hidden: true };
    ws["!cols"][3] = { hidden: true };
    ws["!cols"][4] = { hidden: true };
    ws["!cols"][5] = { hidden: true };

    ws["!cols"][8] = { hidden: true };

    ws["!cols"][25] = { hidden: true };

    ws["!cols"][26] = { hidden: true };
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "All Data Export");
    XLSX.writeFile(wb, "Both.xlsx");
  }

  contentWidthEmitted(value) {
    this.content.nativeElement.style.marginLeft = `${value}px`;
  }
}
