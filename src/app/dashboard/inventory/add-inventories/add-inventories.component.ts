import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthenticationService } from "src/app/services/Authentication/authentication.service";
import { ToastrService } from "ngx-toastr";
import * as mapboxgl from "mapbox-gl";
// import { MapserviceService } from "../services/mapservice.service";

@Component({
  selector: "app-add-inventories",
  templateUrl: "./add-inventories.component.html",
  styleUrls: ["./add-inventories.component.css"],
})
export class AddInventoriesComponent implements OnInit {
  form_title: any;
  cities: any;
  formSendingStatus = "Post Ad";
  locations: any;
  subsLocations: any;
  city: any;
  user: any;
  client_type = [
    { access: "Direct Seller" },
    { access: "Direct Landlord" },
    { access: "Dealer" },
  ];
  access_type1 = [{ access: "all_agents" }];
  minimumPriceRange: any;
  maximumPriceRange: any;
  isInvalidPrice: boolean = false; //Contains the valid status of PRICE ranges
  isInvalidArea: boolean = false; //Contains the valid status of AREA ranges
  minimumAreaRange: any; //Variable stores max area
  maximumAreaRange: any; //Variable stores min area
  userList: any;
  selectedLocations: any;
  selectedCity: any;
  selectStringLocations: any;
  selectAgentValue: any;
  selectedUserCity: any;
  selectedUserLocation: any;
  userLocationMatched: boolean = true;
  cityAdminList = [];
  agentList = [];

  opacity = 1;
  map: mapboxgl.Map;
  style = "mapbox://styles/mapbox/streets-v11";
  lat = 33.628463;
  lng = 73.087581;
  submitted = false;
  location_value: any;
  city_value: any;
  urls = [];
  optionValue: any;
  optionValue1: any;
  fileToUpload: File = null;
  addinventoryForm: FormGroup;
  typeCheckValue: any;
  isRent = true;
  token: any;
  clientType: any;
  //////////////////////////////////

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  get Property_typename() {
    return this.addinventoryForm.get("prop_typename");
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.addinventoryForm.controls;
  }

  ngOnInit(): void {
    this.getUserDetails();
    this.user = this.authService.getUser();
    if (this.user) {
      console.log("User1: ", this.user);

      this.authService.removeUser();
    }

    this.form_title = this.authService.getFormTitle();
    this.authService.removeFormTitle();
    this.formDeclare();

    this.addinventoryForm.patchValue({ form_title: this.form_title });
    this.getCities();
    if (this.user) {
      this.updatefields();
    }
    this.getUserList();
    this.getCityAdminList();
  }

  getUserDetails() {
    this.token = this.authService.getToken();
    this.token = this.authService.getDecodedToken(this.token).data;
    console.log(this.token);
  }

  // Function to call User data table for Assigned_To Field of the add-inventory-form
  getCityAdminList() {
    this.authService.getUsers().subscribe(
      (data) => {
        for (var i = 0; i < data.length; i++) {
          // console.log(data[i].access);
          if (data[i].access == "city_admin") {
            this.cityAdminList.push(data[i].city);
          } else if (data[i].access == "agent") {
            this.agentList.push(data[i].fullname);
          }
        }

        // this.cityAdminList = data;
        // console.log("User Get Response", this.cityAdminList);
      },
      (err) => {
        console.error(err);
      }
    );
  }

  // Function to call User data table for Assigned_To Field of the add-inventory-form
  getUserList() {
    this.authService.getUsers().subscribe(
      (data) => {
        this.userList = data;
        // console.log("User Get Response", this.userList);
      },
      (err) => {
        console.error(err);
      }
    );
  }

  //Function that is working on price filter/check
  public onChangePrice(event: any): void {
    this.isInvalidPrice = this.minimumPriceRange > this.maximumPriceRange;
  }
  //Function that is working on AREA filter/check
  public onChangeArea(event: any): void {
    this.isInvalidArea = this.minimumAreaRange > this.maximumAreaRange;
  }

  // Function to patch the value from ng select
  changeAssignedToCityAdmin(access: any) {
    this.addinventoryForm.patchValue({ assigned_to: access?.city });
    console.log(this.addinventoryForm.get("assigned_to").value);
  }

  // Function to patch the value from ng select
  changeAssignedAdmin(access: any) {
    this.addinventoryForm.patchValue({ assigned_to: access?.access });
    console.log(this.addinventoryForm.get("assigned_to").value);
  }
  changeAssignedAgent(fullname: any) {
    this.addinventoryForm.patchValue({ assigned_to: fullname });
    // console.log(fullname?.fullname);
    // console.log(fullname);

    console.log(this.addinventoryForm.get("assigned_to").value);
  }

  // Function to patch the value from ng select
  // changeAssignedTo2(access: any) {
  //   if (this.user1) {
  //     console.log(this.addinventoryForm.value);

  //     console.log("user 1 is here");

  //     let city = this.user1.city[0].city;
  //     let location = this.selectStringLocations;
  //     this.selectedUserCity = access?.city.city;
  //     this.selectedUserLocation = access?.location;

  //     if (this.selectedUserCity == null && this.selectedUserLocation == null) {
  //       this.userLocationMatched = false;
  //     } else {
  //       if (this.selectedUserCity !== city) {
  //         this.userLocationMatched = false;
  //         console.log("city not matching");

  //         this.toastr.error("Agent is not assigned with this City", "Error", {
  //           timeOut: 5000,
  //         });
  //       } else {
  //         console.log("city matched");
  //         for (let i = 0; i < this.selectedUserLocation.length; i++) {
  //           if (location === this.selectedUserLocation[i].location) {
  //             this.userLocationMatched = true;
  //             console.log("location matched");
  //             break;
  //           } else {
  //             this.userLocationMatched = false;
  //             console.log("location not matching");
  //           }
  //         }
  //         if (this.userLocationMatched) {
  //         } else {
  //           this.toastr.error(
  //             "Agent is not assigned with this Location",
  //             "Error",
  //             {
  //               timeOut: 5000,
  //             }
  //           );
  //         }
  //       }
  //     }
  //   } else {
  //     this.selectedUserCity = access?.city.city;
  //     this.selectedUserLocation = access?.location;
  //     this.addinventoryForm.patchValue({ assigned_to: access?.fullname });
  //     console.log(this.selectedUserLocation);
  //     console.log(this.selectedUserCity);
  //     let locationSelect = this.addinventoryForm.controls["location"].value
  //       ?.location;
  //     let citySelect = this.addinventoryForm.controls["city"].value?.city;
  //     console.log(citySelect);
  //     console.log(locationSelect);
  //     if (this.selectedUserCity == null && this.selectedUserLocation == null) {
  //       console.log(this.selectedUserCity);
  //     } else {
  //       if (this.selectedUserCity != citySelect) {
  //         this.userLocationMatched = false;
  //         console.log("city not matching");

  //         this.toastr.error("Agent is not assigned with this City", "Error", {
  //           timeOut: 5000,
  //         });
  //       } else {
  //         console.log("city matched");
  //         for (let i = 0; i < this.selectedUserLocation.length; i++) {
  //           if (locationSelect === this.selectedUserLocation[i].location) {
  //             this.userLocationMatched = true;
  //             console.log("location matched");
  //             break;
  //           } else {
  //             this.userLocationMatched = false;
  //             console.log("location not matching");
  //           }
  //         }
  //         if (this.userLocationMatched) {
  //         } else {
  //           this.toastr.error(
  //             "Agent is not assigned with this Location",
  //             "Error",
  //             {
  //               timeOut: 5000,
  //             }
  //           );
  //         }
  //       }
  //     }
  //   }
  //   console.log(this.userLocationMatched);
  // }

  // Function to patch the value from form radio button
  assigned_To(name: any) {
    this.addinventoryForm.patchValue({ assigned_to: name });
  }
  updatefields() {
    this.formSendingStatus = "Save";
    this.addinventoryForm.patchValue({ form_title: this.user.form_title });
    this.addinventoryForm.patchValue({ area: this.user.area });
    this.addinventoryForm.patchValue({ area_unit: this.user.area_unit });
    this.addinventoryForm.patchValue({ max_area: this.user.max_area });
    this.addinventoryForm.patchValue({ max_price: this.user.max_price });
    this.addinventoryForm.patchValue({ _id: this.user._id });
    this.addinventoryForm.patchValue({ location: this.user.location });
    console.log(this.user.location);

    this.addinventoryForm.patchValue({ min_area: this.user.min_area });
    this.addinventoryForm.patchValue({ min_price: this.user.min_price });
    this.minimumPriceRange = this.user.min_price;
    this.maximumPriceRange = this.user.max_price;
    this.minimumAreaRange = this.user.min_area;
    this.maximumAreaRange = this.user.max_area;
    // console.log(this.addinventoryForm.get("min_price").value);

    this.addinventoryForm.patchValue({ max_price: this.user.max_price });

    this.addinventoryForm.patchValue({
      assigned_type: this.user.assigned_type,
    });
    this.addinventoryForm.patchValue({ assigned_to: this.user.assigned_to });
    this.selectAgentValue = this.user.assigned_to;

    this.addinventoryForm.patchValue({
      property_type: this.user.property_type,
    });
    this.addinventoryForm.patchValue({ area: this.user.area });
    this.addinventoryForm.patchValue({ client_type: this.user.client_type });
    this.addinventoryForm.patchValue({ demand_price: this.user.demand_price });
    this.addinventoryForm.patchValue({
      property_purpose: this.user.property_purpose,
    });
    this.addinventoryForm.patchValue({ beds_number: this.user.beds_number });
    this.addinventoryForm.patchValue({ client_name: this.user.client_name });
    this.addinventoryForm.patchValue({
      client_number: this.user.client_number,
    });
    this.addinventoryForm.patchValue({ city: this.user.city });

    if (this.user.location) {
      this.selectStringLocations = this.user.location[0].location;
      this.selectedLocations = this.user.location[0].location;
      console.log(this.selectStringLocations);
    }

    if (this.user.city) {
      this.getLocations(this.user.city[0]._id);
      console.log(this.user.city[0]._id);
      this.selectedCity = this.user.city[0].city;
    }
  }

  // File Upload Functions below
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  // Form Declaration, and Validation Function
  formDeclare() {
    this.addinventoryForm = this.formBuilder.group({
      // _id: [''],
      assigned_type: [""],
      selectPropertyType: [""],
      assigned_to: [],
      admin: [
        {
          userId: "",
          name: "",
        },
      ],
      form_title: [""],
      property_purpose: ["Buy"],
      property_type: [""],

      city: ["", Validators.required],
      cityName: [],
      locationName: [],
      location: [, Validators.required],
      sub_location: [
        {
          id: "",
          name: "",
          sub_locationId: "",
        },
      ],
      min_price: [],
      max_price: [],
      demand_price: [],
      min_area: [],
      max_area: [],
      beds_number: ["", Validators.required],
      area: [],
      area_unit: [""],
      client_name: ["", Validators.required],
      client_number: [],
      client_type: [""],
    });
  }

  getCity(cityId: any) {
    const city = this.cities.filter((city: any) => {
      return city._id === cityId;
    });
    if (city[0]) {
      return city[0].city;
    } else {
      return "";
    }
  }

  getLocation(locId: any) {
    const location = this.locations.filter((location: any) => {
      return location._id === locId;
    });
    if (location[0]) {
      return location[0].location;
    } else {
      return "";
    }
  }

  changeCity(city: any) {
    console.log(city.city);

    this.addinventoryForm.patchValue({ cityName: city.city });

    this.userLocationMatched = false;
    this.selectStringLocations = null;
    this.selectAgentValue = null;
    this.locations = [];

    if (city) this.getLocations(city._id);
    this.addinventoryForm.patchValue({ city });
    this.locations = "";
    if (this.user) {
      if (this.selectedCity == city?.city) {
        console.log("inside");

        console.log(this.selectStringLocations);
        console.log(this.selectedLocations);
        this.selectStringLocations = this.selectedLocations;
        this.addinventoryForm.patchValue({ location: this.user?.location });
      } else this.selectStringLocations = "";
    }
  }
  changeLocation(location: any) {
    this.userLocationMatched = false;
    this.selectAgentValue = null;
    this.selectedLocations = location?.location;
    this.addinventoryForm.patchValue({ location });
    console.log(this.addinventoryForm.value);
  }

  changeClientType(clientType: any) {
    this.clientType = clientType?.access;
    this.addinventoryForm.patchValue({ client_type: this.clientType });
    console.log(this.addinventoryForm?.value);
  }

  // Getting cities from backend Api's
  getCities() {
    this.authService.getCities().subscribe(
      (cities) => {
        if (this.user?.access == "islamabad_admin") {
          this.city.push(cities[2]);
          this.cities = this.city;
        } else if (this.user?.access == "rawalpindi_admin") {
          this.city.push(cities[1]);
          this.cities = this.city;
        } else if (this.user?.access == "peshawar_admin") {
          this.city.push(cities[0]);
          this.cities = this.city;
        } else {
          this.cities = cities;
        }
      },
      (err) => {
        console.error(err);
      }
    );
  }

  getLocations(selectedCity?: any) {
    console.log(selectedCity);
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
  // Check whether user pressed 'buy' or 'rent' button
  setValue(value: string) {
    this.optionValue1 = value;
  }
  // Submit form to backend service
  submitForm() {
    this.submitted = true;
    console.log(this.addinventoryForm.value);

    // stop here if form is invalid
    if (this.addinventoryForm.invalid) {
      console.log("Erroneous");
      this.toastr.error("Fill all the Required Fields", "Error", {
        timeOut: 5000,
      });
      return;
    }
    console.log(this.addinventoryForm.value);

    if (this.user) {
      this.addinventoryForm.patchValue({
        locationName: this.selectStringLocations,
      });
      this.addinventoryForm.patchValue({ cityName: this.user.city[0].city });
      console.log(this.addinventoryForm.get("cityName").value);
      console.log(this.addinventoryForm.get("locationName").value);
      this.authService
        .updateInventory(this.user._id, this.addinventoryForm.value)
        .subscribe((data: any) => {
          console.log("Update inventory response data: ", data);
          const email = this.addinventoryForm.value.email;
          const msg = data.message;
          if (msg == "Inventory updated successfully") {
            this.toastr.success(msg, "Success", {
              timeOut: 5000,
            });
            if (this.addinventoryForm.get("form_title").value === "Inventory") {
              this.router.navigate(["/inventory"]);
            } else if (
              this.addinventoryForm.get("form_title").value === "Lead"
            ) {
              this.router.navigate(["/leads"]);
            } else if (
              this.addinventoryForm.get("form_title").value === "Both"
            ) {
              this.router.navigate(["/both"]);
            }
          } else {
            this.toastr.error(msg, "Error", {
              timeOut: 5000,
            });
          }
        });
    } else {
      this.addinventoryForm.patchValue({
        locationName: this.selectStringLocations,
      });
      console.log(this.addinventoryForm.get("cityName").value);
      console.log(this.addinventoryForm.get("locationName").value);

      const form_title = this.addinventoryForm.get("form_title").value;
      console.log(this.addinventoryForm.value);
      if (form_title === "Lead") {
        this.addinventoryForm.patchValue({ assigned_to: this.token?.fullname });
      }
      this.authService.createInventory(this.addinventoryForm.value).subscribe(
        (data) => {
          console.log("signup data: ", data);
          const email = this.addinventoryForm.value.email;
          if (form_title === "Inventory") {
            this.toastr.success("Inventory Added", "Success", {
              timeOut: 5000,
            });
            this.router.navigate(["/inventory"]);
          } else if (form_title === "Lead") {
            this.toastr.success("Lead Added", "Success", {
              timeOut: 5000,
            });
            this.router.navigate(["/leads"]);
          } else if (form_title === "Both") {
            this.toastr.success("Both Added", "Success", {
              timeOut: 5000,
            });
            this.router.navigate(["/both"]);
          }
        },
        (error) => {
          console.error(error);
          this.toastr.error(error.message, "Error", {
            timeOut: 5000,
          });
        }
      );
    }
  }
}
