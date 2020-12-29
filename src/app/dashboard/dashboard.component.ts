import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../services/Authentication/authentication.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  tokendata: any;

  constructor(
    public authService: AuthenticationService,
    public router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.tokenization();
  }
  async tokenization() {
    const token = await this.authService.getToken();
    const decodedToken = await this.authService.getDecodedToken(token);
    this.tokendata = decodedToken.data;
    // console.log(this.tokendata);
  }

  isLogin() {
    const token = this.authService.getToken();
    return token;
  }
  logout() {
    localStorage.removeItem("token");
    this.toastr.success("Logged Out", "Success", {
      timeOut: 5000,
    });
    console.log("\nlogout\n");
    this.router.navigateByUrl("/");
  }
}
