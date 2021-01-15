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

  @ViewChild('content') content: any;
  addLocationForm: FormGroup;
  cities: any;
  locations: any;
  selectStringLocations: any;
  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthenticationService,
    public router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getCities();
    this.initialize();
  }
  initialize() {
    this.addLocationForm = this.formBuilder.group({
      city: [, Validators.required],
      location: [, Validators.required],
      subLocation: [, Validators.required],
    });
    this.getCities();
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
  addLocation() {
    console.log(this.addLocationForm.value);

    this.authService
      .addLocations(this.addLocationForm.value)
      .subscribe((data) => {
        console.log(data);
      });
  }

  contentWidthEmitted(value) {
    this.content.nativeElement.style.marginLeft = `${value}px`;
  }
}