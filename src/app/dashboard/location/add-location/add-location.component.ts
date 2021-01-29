import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
// import { first } from 'rxjs/operators';
import { ToastrService } from "ngx-toastr";
import { AuthenticationService } from "src/app/services/Authentication/authentication.service";
import { elementAt } from "rxjs/operators";

@Component({
  selector: "app-add-location",
  templateUrl: "./add-location.component.html",
  styleUrls: ["./add-location.component.css"],
})
export class AddLocationComponent implements OnInit {

  addNewSublocation = (item) => ({ subLocation: item });
  addNewSublocationUpdation = (item) => ({ subLocationsList: item });

  @ViewChild("content") content: any;
  addLocationForm: FormGroup;

  cities: any;
  locations: any;
  selectStringLocations: any;
  user: any;
  subLocationsList: any[] = [];
  subLocation: any = [];
  subLocationName: any;
  changeType: any = "location";
  location: any;

  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthenticationService,
    public router: Router,
    private toastr: ToastrService
  ) { }

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
      subLocations: [],
    });
    this.getCities();
  }

  setChangeType(type: any) {
    this.changeType = type;
    this.addLocationForm.reset();
  }

  updateLocationForm() {
    console.log(this.user);

    if (this.user?.subLocations) {
      console.log(this.user?.subLocations);

      for (let i = 0; i < this.user?.subLocations.length; i++) {
        this.subLocation[i] = this.user?.subLocations[i].subLocation;
      }
      // this.subLocation = this.user?.subLocations;
      console.log(this.subLocation);
    } else {
      this.subLocation = null;
    }
    this.addLocationForm.patchValue({ city: this.user?.cityName });
    this.addLocationForm.patchValue({ location: this.user?.location });
    this.selectStringLocations = this.user?.location;
    console.log(this.addLocationForm.get("city").value);
    console.log(this.addLocationForm.get("location").value);
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
    this.subLocationsList = [];
    if (city) this.getLocations(city._id);
  }

  changeLocation(location: any) {
    this.location = location;
    this.subLocationsList = [];

    if (location) this.getsubLocations(location._id);
  }

  getsubLocations(selectedLocation?: any) {
    console.log(selectedLocation);
    console.log(this.locations);
    if (selectedLocation) {
      for (let i = 0; i < this.locations.length; i++) {
        if (this.locations[i]._id == selectedLocation) {
          this.subLocation = this.locations[i].subLocations;
        }
      }
    }
    console.log(this.subLocation);
    console.log(this.subLocationsList);
    let array: any = [];
    for (let i = 0; i < this.subLocation?.length; i++) {
      console.log(this.subLocation[i]?.subLocation);

      array[i] = this.subLocation[i]?.subLocation;
    }
    this.subLocationsList = array;
    console.log(this.subLocationsList);
  }

  changeSubLocation(subLocation: any) {
    console.log(this.subLocation);
    // const subLocations = subLocation;
  }

  addLocation() {
    if (this.addLocationForm.get("city").value == "Islamabad")
      this.addLocationForm.patchValue({ cityId: 5 });
    if (this.addLocationForm.get("city").value == "Rawalpindi")
      this.addLocationForm.patchValue({ cityId: 4 });
    if (this.addLocationForm.get("city").value == "Peshawar")
      this.addLocationForm.patchValue({ cityId: 3 });


    if (this.subLocation.length > 0) {
      this.subLocation.forEach((element, index) => {
        this.subLocation[index] = { subLocation: element };
      });
    }

    this.addLocationForm.patchValue({
      subLocations: this.subLocation,
    });
    console.log(this.addLocationForm.value);

    if (!this.user) {

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
    } else if (this.user) {
      console.log(this.user?._id);

      this.authService
        .addSubLocation(this.user?._id, this.addLocationForm.value)
        .subscribe((data) => {
          console.log(data);
          this.router.navigate(["/location"]);
        });
    }
  }

  addSubLocation() {
    if (this.addLocationForm.get("city").value == "Islamabad")
      this.addLocationForm.patchValue({ cityId: 5 });
    if (this.addLocationForm.get("city").value == "Rawalpindi")
      this.addLocationForm.patchValue({ cityId: 4 });
    if (this.addLocationForm.get("city").value == "Peshawar")
      this.addLocationForm.patchValue({ cityId: 3 });

    if (this.subLocationsList.length > 0) {
      this.subLocationsList.forEach((element, index) => {
        this.subLocationsList[index] = { subLocation: element };
      });
    }

    this.addLocationForm.patchValue({
      subLocations: this.subLocationsList,
    });
    
    this.authService
      .addSubLocation(this.location?._id, this.addLocationForm.value)
      .subscribe((data) => {
        console.log(data);
        this.router.navigate(["/location"]);
      });
  }

  contentWidthEmitted(value) {
    this.content.nativeElement.style.marginLeft = `${value}px`;
  }
}
