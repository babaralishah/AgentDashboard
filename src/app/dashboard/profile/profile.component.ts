import { Component, OnInit, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AuthenticationService } from "src/app/services/Authentication/authentication.service";

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  email: string;
  tokendata: any;
  url: string | ArrayBuffer;
  selectedFile: ImageSnippet | File;

  @ViewChild("content") content: any;
  userData: any;

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    public authService: AuthenticationService,
    private toastr: ToastrService
  ) {}
  username = this.router.url;

  ngOnInit() {
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

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      const file: File = event.target.files[0];

      this.selectedFile = file;
      console.log(this.selectedFile, event);
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => {
        this.url = event.target.result;
      };
    }
  }
  // Function to Update Profile Image
  updateImage() {
    console.log("Save Image", this.selectedFile);
    console.log(this.tokendata._id);
    this.authService
      .updateUser(this.tokendata._id, this.selectedFile)
      .subscribe(
        (data) => {
          console.log(data);
          let filePath: any;
          filePath = data;
          const message = filePath?.message;
          let userData: any = this.authService.getuserData();
          userData.image = filePath?.filePath;
          this.authService.setuserData(userData);

          this.toastr.success(message, "Success", {
            timeOut: 3000,
          });
        },
        (error) => {
          // console.error(error.error.message);
          // const errorMessage = error;
          this.toastr.error(error, "Error", {
            timeOut: 3000,
          });
        }
      );
  }
  contentWidthEmitted(value) {
    this.content.nativeElement.style.marginLeft = `${value}px`;
  }
}
