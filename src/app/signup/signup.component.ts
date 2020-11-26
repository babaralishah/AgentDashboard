import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../services/Authentication/authentication.service";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
// import { first } from 'rxjs/operators';
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  submitted = false;
  registerForm: FormGroup;
  cities: any;
  locations: any;
  // access: ['super_admin', 'agent', 'city_admin'];
  user: any;
  abc: any;
  accessType = [{ access: "agent" }, { access: "city_admin" }];
  selectedLocations: any = [];
  selectedCity: any;
  selectStringLocations: any = [];

  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthenticationService,
    public router: Router,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.getUser();
    this.removeUser();
    this.initialize();
    if (this.user) {
      this.updatefields();
    }
  }
  removeUser() {
    this.authService.removeUser();
  }
  getUser() {
    this.user = this.authService.getUser();
  }
  updatefields() {
    console.log(this.user);
    // this.registerForm.value["city"] = this.user.city;
    // this.registerForm.value["access"] = this.user.access;
    this.registerForm.patchValue({ fullname: this.user.fullname });
    this.registerForm.patchValue({ email: this.user.email });
    this.registerForm.patchValue({ password: this.user.password });
    this.registerForm.patchValue({ location: this.user.location });
    this.registerForm.patchValue({ city: this.user.city });
    this.registerForm.patchValue({ contact: this.user.contact });
    this.registerForm.patchValue({ access: this.user.access });
    console.log(this.registerForm);

    if (this.user.location) {
      for (let i = 0; i < this.user.location.length; i++) {
        console.log(this.user.location[i].location);
        this.selectStringLocations.push(this.user.location[i].location);
        this.selectedLocations.push(this.user.location[i].location);
      }
      console.log(this.selectStringLocations);
    }

    if (this.user.city) {
      this.getLocations(this.user.city._id);
      // this.registerForm.patchValue({ city: this.user.city });
      console.log(this.user.city.city);
    }
    this.selectedCity = this.user.city.city;
    console.log(this.selectedLocations);
  }
  initialize() {
    if (this.user) {
      this.registerForm = this.formBuilder.group({
        fullname: ["", Validators.required],
        email: [
          "",
          [
            Validators.required,
            Validators.email,
            Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
          ],
        ],
        location: [],
        contact: ["", Validators.required],
        access: [],
        city: [""],
        // created: []
      });
    } else {
      this.registerForm = this.formBuilder.group(
        {
          fullname: ["", Validators.required],
          email: [
            "",
            [
              Validators.required,
              Validators.email,
              Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
            ],
          ],
          password: ["", [Validators.required, Validators.minLength(6)]],
          location: [, Validators.required],
          city: ["", Validators.required],
          contact: ["", Validators.required],
          access: ["", Validators.required],
          confirm_password: [
            "",
            [Validators.required, Validators.minLength(6)],
          ],
          // validators: this.password.bind(this)
        }
        // {
        //   validators: this.password.bind(this),
        // }
      );
    }
    this.getCities();
  }
  password(event, value) {
    const password = this.registerForm.get("password");
    const confirm_password = this.registerForm.get("confirm_password");
    if (value === "Pass" && event === confirm_password.value) {
      this.abc = "";
    } else if (value === "Conf" && event === password.value) {
      this.abc = "";
    } else {
      this.abc = "Password not matched";
    }
  }

  // Calling Api to get the Cities
  getCities() {
    this.authService.getCities().subscribe(
      (data) => {
        console.log(data);
        this.cities = data;
      },
      (err) => {
        console.error(err);
      }
    );
  }
  // Calling Api to get the Locations
  getLocations(selectedCity?) {
    this.authService.getLocations().subscribe(
      (locations) => {
        console.log(locations);
        this.locations = locations;
        if (selectedCity) {
          this.locations = locations.filter((loc) => {
            return loc.cityId == selectedCity;
          });
        }
      },
      (err) => {
        console.error(err);
      }
    );
  }

  //Function to change the city of --ng select city--
  changeCity(city) {
    this.selectStringLocations = [];
    this.locations = [];
    if (city) this.getLocations(city._id);
    this.registerForm.patchValue({ city });
    this.locations = "";
    if (this.user) {
      console.log(city.city);

      console.log(this.selectedCity);

      if (this.selectedCity == city.city) {
        this.selectStringLocations = this.selectedLocations;
        console.log(this.selectStringLocations);
      } else this.selectStringLocations = [];
    }
    if (city) this.getLocations(city._id);
    this.registerForm.patchValue({ city });
  }

  //Function to change the location of --ng select location--
  changeLocation(location) {
    console.log(location);
    this.registerForm.patchValue({ location: location });
  }

  // Patch the value of access input using this below function
  changeAccess(access) {
    // console.log(access.access);
    if (access) this.registerForm.patchValue({ access: access.access });
  }

  // Function to register the user by sending whole form
  registerUser() {
    console.log(this.registerForm);

    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      console.log("Erroneous");
      this.toastr.error("Can not Registered", "Error", {
        timeOut: 5000,
      });
      return;
    }

    this.registerForm.patchValue({ location: this.selectedLocations });
    if (this.user) {
      // console.log(this.registerForm.value);
      this.authService
        .updateUser(this.user._id, this.registerForm.value)
        .subscribe((data: any) => {
          console.log("signup data: ", data);
          // this.registerresponse = data;
          const email = this.registerForm.value.email;
          const msg = data.message;
          // const status = data.status;
          // this.registerForm.reset();
          if (msg !== "This email has been registered already") {
            this.toastr.success(msg, "Success", {
              timeOut: 5000,
            });
            this.router.navigate(["users"]);
          } else {
            this.toastr.error(msg, "Error", {
              timeOut: 5000,
            });
          }
        });
    } else {
      console.log(this.registerForm.value);
      this.authService.register(this.registerForm.value).subscribe(
        (data) => {
          console.log("signup data: ", data);
          const msg = data.message;
          // if (msg !== "This email has been registered already") {
          this.toastr.success(msg, "Success", {
            timeOut: 5000,
          });
          this.router.navigate(["users"]);
          // }
        },
        (error) => {
          console.log(error.error.message);
          this.toastr.error(error.error.message, "Error", {
            timeOut: 5000,
          });
        }
      );
    }
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }
}
