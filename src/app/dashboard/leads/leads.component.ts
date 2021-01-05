import * as XLSX from "xlsx";
import { JSON2SheetOpts } from "xlsx";

import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "src/app/services/Authentication/authentication.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-leads",
  templateUrl: "./leads.component.html",
  styleUrls: ["./leads.component.css"],
})
export class LeadsComponent implements OnInit {
  user: any;
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
  data: any;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  general_search: string;
  assigned_to: any;
  selectedUserLocation: any;

  options = [
    { value: "_id", name: "Filter By Ref ID", placeholder: "Ref Id" },
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
    { value: "property_types", name: "Filter By Type", placeholder: "Type" },
    {
      value: "inventory_id",
      name: "Filter By Property Number",
      placeholder: "Property Number",
    },
  ];
  selectedOption = this.options[0].value;
  placeholder = this.options[0].placeholder;
  refId: any;

  ngOnInit(): void {
    this.getUserDetails();
    this.getLeadsList();
    this.getCityAdminList();
    this.tokenization();
  }

  async tokenization() {
    const token = await this.authService.getToken();
    const decodedToken = await this.authService.getDecodedToken(token);
    this.tokendata = decodedToken.data;
    console.log(this.tokendata);
  }
  optionChange(e: any) {
    console.log(e);
    this.placeholder = e.placeholder;
    this.refId = "";
    console.log(this.selectedOption);
  }

  setCurrentUser(user: any) {
    this.currentUser = user;

    this.currentUser["assigned_to"] = [];
    let date = new Date(this.currentUser.created);
    console.log(
      date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()
    );
    console.log(this.currentUser.created);
  }

  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  assignLeadToAgent() {
    console.log(this.currentUser);
    delete this.currentUser._id;
    // this.currentUser["assigned_history"].push(...this.assignLeadData);
    // this.currentUser["assigned_history"].push(...this.assignLeadData);
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

  getUserDetails() {
    this.token = this.authService.getToken();
    this.token = this.authService.getDecodedToken(this.token).data;
  }
  // Function to call User data table for Assigned_To Field of the add-inventory-form
  getCityAdminList() {
    this.authService.getUsers().subscribe(
      (data) => {
        for (var i = 0; i < data.length; i++) {
          if (data[i].access == "city_admin") {
            this.cityAdminList.push(data[i]);
          } else if (data[i].access == "agent") {
            this.agentList.push(data[i]);
          } else if (data[i].access == "super_admin") {
            this.superAdminList.push(data[i]);
          }
        }
        // console.log(this.cityAdminList);
        // console.log(this.cityAdminList[0].city);
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

  getLeadsList() {
    this.authService.getLeads().subscribe(
      (data) => {

        this.data = data.leads;
        console.log("data---->", this.data);
        this.data.forEach((element) => {
          element.cityName = element.city[0].city;
          element.SubLocation = element.location[0].location;
        });


        this.assigned_to = data.assigned_to;
        this.user = data.leads;
        console.log(this.user);
      },
      (error) => {
        console.error(error);
      }
    );
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
          this.getLeadsList();
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
    this.currentUser["assigned_to"] = this.assignLeadData;
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
    this.currentUser["assigned_to"] = this.assignLeadData;
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

      this.currentUser["assigned_to"] = this.assignLeadData;
    });
    console.log(this.assignLeadData);
    console.log(this.currentUser["assigned_to"]);
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
}
