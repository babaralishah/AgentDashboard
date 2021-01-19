import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
// import { first } from 'rxjs/operators';
import { ToastrService } from "ngx-toastr";
import { AuthenticationService } from "src/app/services/Authentication/authentication.service";

@Component({
  selector: "app-add-location",
  templateUrl: "./add-location.component.html",
  styleUrls: ["./add-location.component.css"],
})
export class AddLocationComponent implements OnInit {
  @ViewChild("content") content: any;
  addLocationForm: FormGroup;
  cities: any;
  locations: any;
  selectStringLocations: any;
  user: any;
  subLocation: any = [
    {
      subLocation: "",
    },
  ];
  changeType: any = 'location';
  location: any;
  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthenticationService,
    public router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.initialize();
    this.user = this.authService.getUser();
    if (this.user) {
      console.log(this.user);
      this.authService.removeUser();
      this.updateLocationForm();
    }

    this.getCities();
  }
  initialize() {
    this.addLocationForm = this.formBuilder.group({
      cityId: [],
      city: [, Validators.required],
      location: [, Validators.required],
      subLocations: [
        {
          subLocation: "",
        },
        Validators.required,
      ],
    });
    this.getCities();
  }
  setChangeType(type: any) {
    this.changeType = type;
  }
  updateLocationForm() {
    console.log(this.user?.subLocations);

    this.addLocationForm.patchValue({ city: this.user?.cityName });
    this.subLocation = this.user?.subLocations;
    console.log(this.subLocation);

    this.addLocationForm.patchValue({ location: this.user?.location });
    this.selectStringLocations = this.user?.location;
    console.log(this.addLocationForm.get("city").value);
    console.log(this.addLocationForm.get("location").value);
    // if(this.addLocationForm.get("city").value == 'Islamabad')
    // console.log('true');
  }
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
  getLocations(selectedCity?) {
    this.authService.getLocations().subscribe(
      (locations) => {
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
  changeCity(city: any) {
    this.selectStringLocations = null;
    this.locations = [];
    if (city) this.getLocations(city._id);
  }
  changeLocation(location: any) {
    this.location = location;
    // console.log(this.location);
  }
  addLocation() {
    console.log(this.subLocation);
    console.log(this.addLocationForm.value);

    this.addLocationForm.patchValue({
      subLocations: this.subLocation,
    });

    console.log(this.addLocationForm.value);
    if (this.addLocationForm.get("city").value == "Islamabad")
      this.addLocationForm.patchValue({ cityId: 5 });
    if (this.addLocationForm.get("city").value == "Rawalpindi")
      this.addLocationForm.patchValue({ cityId: 4 });
    if (this.addLocationForm.get("city").value == "Peshawar")
      this.addLocationForm.patchValue({ cityId: 3 });
    console.log(this.addLocationForm.value);
    this.authService
      .addLocations(this.addLocationForm.value)
      .subscribe((data) => {
        console.log(data);
        const code = data.code;
        if (code === 200) {
          this.toastr.success(data.message, "Success", {
            timeOut: 5000,
          });
          this.router.navigate(["/location"]);
        }
      });
  }
  addSubLocation() {
    console.log(this.subLocation[0].subLocation);
    console.log(this.location.subLocations);
    let subLoc = [];
    for (let i = 0; i < this.location.subLocations.length; i++) {
      subLoc[i] = this.location?.subLocations[i];
    }
    console.log(subLoc);
    subLoc.push({
      subLocation: this.subLocation[0].subLocation,
    });
    console.log(subLoc);
    console.log(this.location);
    this.location.subLocations = subLoc;
    console.log(this.location);
    console.log(this.location);

    this.authService
      .addSubLocation(this.location?._id, this.location)
      .subscribe((data) => {
        console.log(data);
      });
  }
  contentWidthEmitted(value) {
    this.content.nativeElement.style.marginLeft = `${value}px`;
  }
}
