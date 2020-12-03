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

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private toastr: ToastrService
  ) {}
  // search_id: string;
  // search_client: string;
  general_search: any;
  // search_location: string;
  // search_type: string;
  // search_demand: string;
  // search_area: string;

  ngOnInit(): void {
    this.getAllList();
  }

  setUserToEdit(user: any) {
    this.authService.setUser(user);
    this.authService.setFormTitle("Both");
    // this.router.navigateByUrl('/add-inventories');
    this.router.navigate(["/add", user.form_title]);
  }

  setFormTitle(name: any) {
    this.authService.setFormTitle(name);
    // this.router.navigate(['/add-inventories']);
    this.router.navigate(["/add", name]);
  }

  getAllList() {
    this.authService.getAll().subscribe(
      (data) => {
        this.user = data.inventories;
        console.log("Server response: ", data);
      },
      (err) => {
        console.error(err);
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

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "All Data Export");
    XLSX.writeFile(wb, "Both.xlsx");
  }
}
