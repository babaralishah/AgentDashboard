import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AuthenticationService } from "src/app/services/Authentication/authentication.service";

@Component({
  selector: "app-delete-requests",
  templateUrl: "./delete-requests.component.html",
  styleUrls: ["./delete-requests.component.css"],
})
export class DeleteRequestsComponent implements OnInit {
  @ViewChild("content") content: any;
  user: any = [];
  deleteId: any;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAllList();
  }

  getAllList() {
    this.authService.getAll().subscribe(
      (data) => {
        data = data?.inventories;
        console.log(data);
        for (let i = 0, k = 0; i < data?.length; i++) {
          if (data[i]?.isDeleted) {
            this.user[k] = data[i];
            k++;
          }
        }
        console.log(this.user);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  confirmID(id) {
    this.deleteId = id;
  }
  deleteRow() {
    this.authService.deleteInventory(this.deleteId).subscribe(
      (data) => {
        console.log(data);
        if (data.code === 200) {
          this.toastr.success(data.message, "Success", {
            timeOut: 5000,
          });
          // this.getLeadsList();
          for (let i = 0; i < this.user.length; i++) {
            if (this.user[i]?._id === this.deleteId) {
              this.user.splice(i, 1);
              i--;
            }
          }
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
  deleteRevert(id: any) {
    this.authService.deleteRevert(id).subscribe((data) => {
      console.log(data);
      this.toastr.success(data?.message, "Success", {
        timeOut: 5000,
      });
      for (let i = 0; i < this.user?.length; i++) {
        if (this.user[i]?._id === id) {
          this.user?.splice(i, 1);
          i--;
        }
      }
    });
  }
  contentWidthEmitted(value) {
    this.content.nativeElement.style.marginLeft = `${value}px`;
  }
}
