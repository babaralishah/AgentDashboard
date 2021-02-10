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

  contentWidthEmitted(value) {
    this.content.nativeElement.style.marginLeft = `${value}px`;
  }
}
