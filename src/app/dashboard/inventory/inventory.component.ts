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

  ngOnInit(): void {
    this.getInventoryList();
  }

  getInventoryList() {
    this.authService.getInventory().subscribe(
      (data) => {
        this.user = data.inventories;
        console.log("Server response: ", this.user);
      },
      (err) => {
        console.error(err);
      }
    );
  }
  setFormTitle(name) {
    this.authService.setFormTitle(name);
    this.router.navigate(["/add-inventories"]);
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
  setUser(user: any) {
    this.authService.setUser(user);
    this.authService.setFormTitle("Inventory");
    this.router.navigateByUrl("/add-inventories");
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
}


