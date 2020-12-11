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
  // form_title:any;

  options = [
    { value: "referenceId", name: "Filter By Ref ID", placeholder: "Ref Id" },
    {
      value: "property_purpose",
      name: "Filter By Purpose",
      placeholder: "Purpose",
    },
    {
      value: "area_unit",
      name: "Filter By area_unit",
      placeholder: "area_unit",
    },
    {
      value: "beds_number",
      name: "Filter By beds_number",
      placeholder: "beds_number",
    },
    {
      value: "city",
      name: "Filter By city",
      placeholder: "City",
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
  getInventoryList() {
    this.authService.getInventory().subscribe(
      (data) => {
        this.user = data.inventories;

        console.log("Server response: ", this.user);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  setFormTitle(name: any) {
    // let form_title = name;
    this.authService.setFormTitle(name);
    // this.router.navigate(["/add-inventories"]);
    this.router.navigate(["/add", name]);
  }
  // agentChange(e) {
  //   // console.log("e", this.dataToFilter);
  //   this.Name = e;
  //   // console.log("Name", this.Name);
  //   if (e) {
  //     this.filteredData = this.dataToFilter.filter((d) => {
  //       return d.user_id.user_id == e._id;
  //     });
  //     this.data = this.filteredData;
  //   } else if (!e) {
  //     this.data = this.dataToFilter;
  //   }
  // }

  //////////
  // Function to delete the single inventory
  // tslint:disable-next-line: typedef
  // deleteInventory(id){
  //   console.log('Calling deleteInventory');

  //   this.authService.deleteInventory(id).subscribe(data => {
  //     console.log(data);
  //     if (data.code === 200) {
  //       this.toastr.success(data.message, 'Success', {
  //           timeOut: 5000
  //         });
  //       for ( let i = 0; i < this.user.length; i++){
  //          if ( this.user[i]._id === id) { this.user.splice(i, 1); i--; }}
  //     }

  //   });
  // }
  confirmID(id) {
    console.log(id);

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
        //   for ( let i = 0; i < this.user.length; i++){
        //      if ( this.user[i]._id === this.saveID) { this.user.splice(i, 1); i--; }}
      }
    });
  }
  // Function to set user in the service in order to perform delete or edit operations later on
  setUserToEdit(user: any) {
    this.authService.setUser(user);
    // console.log(user.form_title);

    this.authService.setFormTitle("Inventory");
    // this.router.navigateByUrl("/add-inventories");
    this.router.navigate(["/add", user.form_title]);
  }

  // myFunction() {
  //   let input, filter, table, tr, td, i, txtValue;
  //   input = document.getElementById("myInput");
  //   filter = input.value.toUpperCase();
  //   table = document.getElementById("myTable");
  //   tr = table.getElementsByTagName("tr");
  //   for (i = 0; i < tr.length; i++) {
  //     td = tr[i].getElementsByTagName("td")[0];
  //     if (td) {
  //       txtValue = td.textContent || td.innerText;
  //       if (txtValue.toUpperCase().indexOf(filter) > -1) {
  //         tr[i].style.display = "";
  //       } else {
  //         tr[i].style.display = "none";
  //       }
  //     }
  //   }
  // }
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
    XLSX.writeFile(wb, "Inventory.xlsx");
  }
}
