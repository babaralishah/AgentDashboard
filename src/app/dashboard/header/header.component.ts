import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AuthenticationService } from "src/app/services/Authentication/authentication.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  tokendata: any;

  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.tokenization();
  }
  async tokenization() {
    const token = await this.authService.getToken();
    const decodedToken = await this.authService.getDecodedToken(token);
    this.tokendata = decodedToken.data;
  }

  isLogin() {
    const token = this.authService.getToken();
    // console.log(token);
    return token;
  }
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    console.log("\nlogout\n");
    this.router.navigateByUrl("/");
  }
}
