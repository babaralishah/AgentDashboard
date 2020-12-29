import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthenticationService } from "../services/Authentication/authentication.service";

@Component({
  selector: "app-newpass",
  templateUrl: "./newpass.component.html",
  styleUrls: ["./newpass.component.css"],
})
export class NewpassComponent implements OnInit {
  submitted = false;
  email: string;
  newpassForm: FormGroup;
  constructor(
    private authServ: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.email = param.email;
    });
    this.initialize();
  }
  initialize() {
    this.newpassForm = this.formBuilder.group({
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }
  get f() {
    return this.newpassForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.newpassForm.invalid) {
      return;
    }
    const user = {
      email: this.email,
      newpassword: this.newpassForm.value.password,
    };

    this.authServ.newpassword(user).subscribe((data) => {
      console.log("server response: ");
      console.log(data);
      const status = data.success;
      const msg = data.status;
      if (status) {
        alert(msg);
        this.router.navigate(["/"]);
      } else {
        alert(msg);
      }
    });
  }
}
