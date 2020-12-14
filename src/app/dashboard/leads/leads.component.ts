import * as XLSX from "xlsx";
import { JSON2SheetOpts } from "xlsx";

import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "src/app/services/Authentication/authentication.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

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
  cityAdminList = [];
  agentList = [];
  superAdminList = [];
  token: any;
  assigned_type: any;
  key: any;
  reverse: boolean = true;
  p: number = 1;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  general_search: string;
  assigned_to: any;
  selectedUserLocation: any;


  options = [
    { value: "referenceId", name: "Filter By Ref ID", placeholder: "Ref Id" },
    {
      value: "property_purpose",
      name: "Filter By Purpose",
      placeholder: "Purpose",
    },
    {
      value: "cityName",
      name: "Filter By cityName",
      placeholder: "cityName",
    },
    {
      value: "locationName",
      name: "Filter By locationName",
      placeholder: "locationName",
    },
    { value: "demand_price", name: "Filter By Demand", placeholder: "Demand" },
    {
      value: "property_type",
      name: "Filter By Type",
      placeholder: "Type",
    },
  ];
  selectedOption = this.options[0].value;
  placeholder = this.options[0].placeholder;
  refId: any;

  ngOnInit(): void {
    this.getUserDetails();
    this.getLeadsList();
    this.getCityAdminList();
    // this.assignLeadFormDeclaration();
  }
  
  optionChange(e: any) {
    this.placeholder = e.placeholder;
    this.refId = "";
    console.log(this.selectedOption);
  }

  setCurrentUser(user: any) {
    this.currentUser = user;
    console.log(this.currentUser);
  }

  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  // Form Declaration, and Validation Function
  // assignLeadFormDeclaration() {
  //   this.agentAssignedForm = this.formBuilder.group({
  //     assigned_type: [""],
  //     assigned_to: [],
  //     admin: [
  //       {
  //         userId: "",
  //         name: "",
  //       },
  //     ],
  //     form_title: [""],
  //     property_purpose: ["Buy"],
  //     property_type: [""],

  //     city: [""],
  //     location: [],
  //     sub_location: [
  //       {
  //         id: "",
  //         name: "",
  //         sub_locationId: "",
  //       },
  //     ],
  //     min_price: [],
  //     max_price: [],
  //     demand_price: [],
  //     min_area: [],
  //     max_area: [],
  //     beds_number: [""],
  //     area: [],
  //     area_unit: [""],
  //     client_name: [""],
  //     client_number: [],
  //     client_type: [""],
  //   });
  // }
  assignLeadToAgent() {
    console.log(this.currentUser);
    delete this.currentUser._id;
    console.log(this.currentUser);
    this.authService.assignLeadToAgent(this.currentUser).subscribe(
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
    // console.log(this.token);
  }
  // Function to call User data table for Assigned_To Field of the add-inventory-form
  getCityAdminList() {
    this.authService.getUsers().subscribe(
      (data) => {
        for (var i = 0; i < data.length; i++) {
          if (data[i].access == "city_admin") {
            this.cityAdminList.push(data[i].city);
          } else if (data[i].access == "agent") {
            this.agentList.push(data[i].fullname);
          } else if (data[i].access == "super_admin") {
            this.superAdminList.push(data[i].access);
          }
        }
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
        this.assigned_to = data.assigned_to;
        this.user = data.leads;
        console.log(this.user);
        
        // console.log("Added date: ",  this.user.created);
        // for(let i=0; i < this.user.length; i++){
          // console.log(this.user[i].created);
          
        // }
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
    this.currentUser["assigned_to"] = access?.city;
    // this.agentAssignedForm.patchValue({ assigned_to: access?.city });
  }
  // Function to patch the value from ng select
  changeAssignedAdmin(access: any) {
    this.currentUser["assigned_to"] = access;
    // this.agentAssignedForm.patchValue({ assigned_to: access });
  }
  changeAssignedAgent(access: any) {
    this.currentUser["assigned_to"] = access;
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
    ws["!cols"][24] = { hidden: true };
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "All Data Export");
    XLSX.writeFile(wb, "Leads.xlsx");
  }
}
