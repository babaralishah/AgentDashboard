import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { AuthenticationService } from "../services/Authentication/authentication.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
declare let $: any;

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  tokendata: any;
  mini: boolean = true;

  @ViewChild("sidebar") sidebar: any;
  @Output() widthEmittedEvent = new EventEmitter<any>();
  userData: any;

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
    this.userData = this.authService.getuserData();
    // console.log(this.userData);
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
    localStorage.removeItem("userData");
    this.toastr.success("Logged Out", "Success", {
      timeOut: 5000,
    });
    console.log("\nlogout\n");
    this.router.navigateByUrl("/");
  }

  toggleSidebar() {
    if (this.mini) {
      this.mini = false;
      this.sidebar.nativeElement.style.width = "280px";
      this.widthEmittedEvent.emit(280);
    } else {
      this.mini = true;
      this.sidebar.nativeElement.style.width = "70px";
      this.widthEmittedEvent.emit(70);
    }
  }
}
