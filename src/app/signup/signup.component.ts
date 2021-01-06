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
  user: any;
  abc: any;
  accessType = [{ access: "agent" }, { access: "city_admin" }, { access: "call_center" }];
  selectedLocations: any = [];
  selectedCity: any;
  selectStringLocations: any = [];
  checked: boolean;

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

  changePassword() {
    this.checked = !this.checked;
  }

  removeUser() {
    this.authService.removeUser();
  }
  getUser() {
    this.user = this.authService.getUser();
  }
  updatefields() {
    // console.log(this.user?.city.city);
    this.registerForm.patchValue({
      locationName: this.selectStringLocations,
    });

    this.registerForm.patchValue({ cityName: this.user?.city.city });
    this.registerForm.patchValue({ fullname: this.user?.fullname });
    this.registerForm.patchValue({ email: this.user?.email });
    this.registerForm.patchValue({ password: this.user?.password });
    this.registerForm.patchValue({ location: this.user?.location });
    this.registerForm.patchValue({ city: this.user?.city });
    this.registerForm.patchValue({ contact: this.user?.contact });
    this.registerForm.patchValue({ access: this.user?.access });
    console.log(this.registerForm);

    if (this.user.location) {
      for (let i = 0; i < this.user.location.length; i++) {
        console.log(this.user.location[i].location);
        this.selectStringLocations.push(this.user?.location[i].location);
        this.selectedLocations.push(this.user?.location[i].location);
      }
      console.log(this.selectStringLocations);
    }

    if (this.user.city) {
      this.getLocations(this.user?.city._id);
      console.log(this.user?.city.city);
    }
    this.selectedCity = this.user?.city?.city;
  }
  initialize() {
    if (this.user) {
      this.registerForm = this.formBuilder.group({
        cityName: [],
        locationName: [],
        fullname: ["", Validators.required],
        email: [
          "",
          [
            Validators.required,
            Validators.email,
            Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
          ],
        ],
        location: ["", Validators.required],
        contact: [""
          ,
          [
            Validators.required,
            Validators.minLength(12),
            Validators.maxLength(12),
          ],
        ],
        access: ["", Validators.required],
        city: ["", Validators.required],
        confirm_password: ["", [Validators.minLength(6)]],
        password: ["", [Validators.minLength(6)]],
      });
    } else {
      this.registerForm = this.formBuilder.group({
        cityName: [],
        locationName: [],
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
        contact: ["92"
          ,
          [
            Validators.required,
            Validators.minLength(12),
            Validators.maxLength(12),
          ],
        ],
        access: ["", Validators.required],
        confirm_password: ["", [Validators.required, Validators.minLength(6)]],
      });
    }
    this.getCities();
  }
  password(event, value) {
    const password = this.registerForm.get("password");
    const confirm_password = this.registerForm.get("confirm_password");
    if (value === "Pass" && event === confirm_password?.value) {
      this.abc = "";
    } else if (value === "Conf" && event === password?.value) {
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
  changeCity(city: any) {
    this.registerForm.patchValue({ cityName: city?.city });
    this.selectStringLocations = [];
    this.locations = [];
    if (city) this.getLocations(city._id);
    this.registerForm.patchValue({ city });
    this.locations = "";
    if (this.user) {
      this.registerForm.patchValue({ cityName: this.user?.city[0].city });
      if (this.selectedCity == city?.city) {
        console.log(this.selectStringLocations);
        console.log(this.selectedLocations);
        this.selectStringLocations = this.selectedLocations;
        console.log(this.selectStringLocations);

        this.registerForm.patchValue({ location: this.user?.location });
      } else this.selectStringLocations = [];
    }
  }

  //Function to change the location of --ng select location--
  changeLocation(location: any) {
    console.log(location);
    this.registerForm.patchValue({ location: location });
    console.log(this.registerForm.value);
  }

  // Patch the value of access input using this below function
  changeAccess(access: any) {
    console.log(access);

    if (access) this.registerForm.patchValue({ access: access?.access });
  }

  // Function to register the user by sending whole form
  registerUser() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      console.log("Erroneous");
      this.toastr.error("Can not Registered", "Error", {
        timeOut: 5000,
      });
      return;
    }
    if (this.user) {
      console.log(this.registerForm.value);
      this.authService
        .updateUser(this.user._id, this.registerForm.value)
        .subscribe((data: any) => {
          console.log("signup data: ", data);
          const email = this.registerForm.value.email;
          const msg = data.message;
          const code = data.code;
          if (code === 200) {
            this.toastr.success(msg, "Success", {
              timeOut: 5000,
            });
            this.router.navigateByUrl("/agents");
          } else {
            this.toastr.error(msg, "Error", {
              timeOut: 5000,
            });
          }
        });
    } else {
      this.registerForm.patchValue({
        locationName: this.selectStringLocations,
      });
      console.log(this.registerForm.value);
      this.authService.register(this.registerForm.value).subscribe(
        (data) => {
          console.log("signup data: ", data);
          const msg = data.message;

          if (data.userData._id) {
            this.toastr.success(msg, "Success", {
              timeOut: 5000,
            });

            this.router.navigateByUrl("/agents");
          }
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
