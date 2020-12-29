import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormArray,
  NgForm,
} from "@angular/forms";
// import { from } from 'rxjs';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthenticationService } from "src/app/services/Authentication/authentication.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-add-users",
  templateUrl: "./add-users.component.html",
  styleUrls: ["./add-users.component.css"],
})
export class AddUsersComponent implements OnInit {
  submitted = false;
  user: any;
  cartService: any;
  adduserForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  formDeclare() {
    this.adduserForm = this.formBuilder.group({
      location: ["", Validators.required],
      email: ["", Validators.required],
      userId: ["", Validators.required],
      status: ["", Validators.required],
      fullname: ["", Validators.required],
      contact: ["", Validators.required],
      access: ["", Validators.required],
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.adduserForm.controls;
  }
  ngOnInit(): void {
    this.formDeclare();
  }
  createUser() {
    this.authService.createUsers(this.adduserForm).subscribe((res) => {
      console.log("Subscribed data: ", res);
    });
  }
  submitForm() {
    this.submitted = true; // stop here if form is invalid
    if (this.adduserForm.invalid) {
      this.toastr.error("Fields Empty", "Error", {
        timeOut: 5000,
      });
      // console.log('Erroneous')
      return;
    } else {
      console.log("calling the service: ", this.adduserForm.value);
      this.authService.createUsers(this.adduserForm.value).subscribe((res) => {
        this.adduserForm.reset();
        this.toastr.success("User Added", "Success", {
          timeOut: 9000,
        });
        console.log("Subscribed data: ", res);
      });
    }
  }
}
