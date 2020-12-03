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
  savedId: any;

  withAutofocus = `<button type="button" ngbAutofocus class="btn btn-danger"
      (click)="modal.close('Ok click')">Ok</button>`;
  deleteId: any;
  agentAssignedForm: FormGroup;
  selectedUserCity: any;
  selectStringLocations: any;
  userLocationMatched: boolean = true;
  cityAdminList = [];
  access_type = [{ access: "super_admin" }];
  agentList = [];
  token: any;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  search_id: string;
  search_client: string;
  general_search: string;
  search_location: string;
  search_type: string;
  search_demand: string;
  search_area: string;
  assigned_to: any;
  selectedUserLocation: any;

  ngOnInit(): void {
    this.getUserDetails();
    this.AgentAssignForm();
    this.getLeadsList();
    this.getCityAdminList();
  }

  getUserDetails() {
    this.token = this.authService.getToken();
    this.token = this.authService.getDecodedToken(this.token).data;
    console.log(this.token);
  }
  // Form Declaration, and Validation Function
  AgentAssignForm() {
    this.agentAssignedForm = this.formBuilder.group({
      assigned_to: [],
      form_title: [""],
      assigned_type: [""],

      city: ["", Validators.required],

      location: [, Validators.required],
    });
  }

  // Function to call User data table for Assigned_To Field of the add-inventory-form
  getCityAdminList() {
    this.authService.getUsers().subscribe(
      (data) => {
        for (var i = 0; i < data.length; i++) {
          console.log(data[i].access);
          if (data[i].access == "city_admin") {
            this.cityAdminList.push(data[i].city);
          } else if (data[i].access == "agent") {
            this.agentList.push(data[i].fullname);
          }
        }

        // this.cityAdminList = data;
        console.log("User Get Response", this.cityAdminList);
      },
      (err) => {
        console.error(err);
      }
    );
  }
  setUserToEdit(user: any) {
    this.authService.setUser(user);
    this.authService.setFormTitle("Lead");
    this.router.navigate(["/add", user.form_title]);
  }

  setFormTitle(name) {
    this.authService.setFormTitle(name);
    // this.router.navigate(["/add-inventories"]);
    this.router.navigate(["/add", name]);
  }

  getLeadsList() {
    this.authService.getLeads().subscribe(
      (data) => {
        this.assigned_to = data.assigned_to;
        this.user = data.leads;
        console.log("Server response: ", this.user);
      },
      (error) => {
        console.error(error);
      }
    );
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
        this.getLeadsList();
        //   for ( let i = 0; i < this.user.length; i++){
        //      if ( this.user[i]._id === this.saveID) { this.user.splice(i, 1); i--; }}
      }
    });
  }

  // Function to patch the value from ng select
  changeAssignedToCityAdmin(access: any) {
    this.agentAssignedForm.patchValue({ assigned_to: access?.city });
    console.log(this.agentAssignedForm.get("assigned_to").value);
  }
  // Function to patch the value from ng select
  changeAssignedAdmin(access: any) {
    this.agentAssignedForm.patchValue({ assigned_to: access?.access });
    console.log(this.agentAssignedForm.get("assigned_to").value);
  }
  changeAssignedAgent(access: any) {}
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
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "All Data Export");
    XLSX.writeFile(wb, "Leads.xlsx");
  }
}
