import { Component, OnInit, ViewChild } from "@angular/core";
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
  @ViewChild("content") content: any;
  agentAssignedNames: any = [];
  superAdminAssignedNames: any = [];
  cityAdminAssignedNames: any = [];
  assigned_type: any;
  superAdminList = [];
  // assigned_type: any = "city_admin";
  form_title: any;
  cities: any;
  formSendingStatus = "Post Ad";
  locations: any;
  subsLocations: any;
  city: any = [];
  user: any;
  client_type = [
    { access: "Direct Seller" },
    { access: "Direct Landlord" },
    { access: "Dealer" },
  ];
  client_type1 = [
    { access: "Direct Buyer" },
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
  cityAdminList: any = [];
  agentList: any = [];

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
  demandValueVariable: any;
  demandValueVariable1: any;
  demandValueVariable2: any;
  agentListFull: any = [];
  assignLeadData = [
    { fullname: "" },
    { userId: "" },
    { contact: "" },
    { date: new Date() },
  ];
  assignStringName: any = [];
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
    this.getUserList();
    this.getAllUsersList();
  }

  // Form Declaration, and Validation Function
  formDeclare() {
    this.addinventoryForm = this.formBuilder.group({
      assigned_history: [
        {
          fullname: "",
          contact: [""],
          userId: [""],
          date: new Date(),
        },
      ],
      assigned_type: ["self"],
      priority: "Normal",
      form_title: [""],
      property_purpose: ["Sell"],
      property_type: [""],

      city: ["", Validators.required],
      location: [, Validators.required],
      min_price: [],
      max_price: [],
      demand_price: [],
      min_area: [],
      max_area: [],
      beds_number: [""],
      area: [],
      area_unit: [""],
      client_name: ["", Validators.required],
      client_number: ["", Validators.required],
      client_type: [""],
      comments: "",
      added_By: this.formBuilder.group({
        fullname: [""],
        userId: [""],
        contact: [],
      }),
    });
  }

  getUserDetails() {
    this.token = this.authService.getToken();
    this.token = this.authService.getDecodedToken(this.token).data;
    console.log(this.token);
  }

  // Function to call User data table for Assigned_To Field of the add-inventory-form
  getAllUsersList() {
    this.authService.getUsers().subscribe(
      (data) => {
        for (var i = 0; i < data.length; i++) {
          if (this.token.access === "city_admin") {
            if (data[i].access == "city_admin") {
              if (this.token.city.city === data[i].city.city) {
                this.cityAdminList.push(data[i]);
              }
            } else if (data[i].access == "agent") {
              if (this.token.city.city === data[i].city.city) {
                this.agentList.push(data[i]);
              }
            }
          } else if (this.token.access === "agent") {
            if (data[i].access == "city_admin") {
              if (this.token.city.city === data[i].city.city) {
                this.cityAdminList.push(data[i]);
              }
            } else if (data[i].access == "agent") {
              if (this.token.city.city === data[i].city.city) {
                this.agentList.push(data[i]);
              }
            } else if (data[i].access == "super_admin") {
              this.superAdminList.push(data[i]);
            }
          } else if (this.token.access === "super_admin") {
            if (data[i].access == "city_admin") {
              this.cityAdminList.push(data[i]);
            } else if (data[i].access == "agent") {
              this.agentList.push(data[i]);
            } else if (data[i].access == "super_admin") {
              this.superAdminList.push(data[i]);
            }
          }
        }
        console.log(this.superAdminList);
        console.log(this.cityAdminList);
        console.log(this.agentList);
        if (this.user) {
          this.updatefields();
        }
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
    console.log(access);
    this.assignLeadData = [];
    access.forEach((element) => {
      console.log(element);
      this.assignLeadData.push({
        userId: element.userId,
        fullname: element.fullname,
        contact: element.contact,
        date: new Date(),
      });
      this.addinventoryForm.patchValue({
        assigned_history: this.assignLeadData,
      });
    });
    console.log(this.assignLeadData);
    console.log(this.addinventoryForm.get("assigned_history").value);
  }

  // Function to patch the value from ng select
  changeAssignedAdmin(access: any) {
    console.log(access);
    this.assignLeadData = [];
    access.forEach((element) => {
      console.log(element);
      this.assignLeadData.push({
        userId: element.userId,
        fullname: element.fullname,
        contact: element.contact,
        date: new Date(),
      });
      this.addinventoryForm.patchValue({
        assigned_history: this.assignLeadData,
      });
    });
    console.log(this.assignLeadData);
    console.log(this.addinventoryForm.get("assigned_history").value);
  }
  changeAssignedAgent(access: any) {
    console.log(access);
    this.assignLeadData = [];
    access.forEach((element) => {
      console.log(element);
      this.assignLeadData.push({
        userId: element.userId,
        fullname: element.fullname,
        contact: element.contact,
        date: new Date(),
      });
      this.addinventoryForm.patchValue({
        assigned_history: this.assignLeadData,
      });
    });
  }
  updatefields() {
    if (this.user.assigned_history) {
      console.log(this.addinventoryForm.get("assigned_type").value);
      this.assignLeadData = [];

      if (this.user.assigned_type === "Agents") {
        for (let i = 0; i < this.user.assigned_history.length; i++) {
          console.log(this.user.assigned_history[i].fullname);
          this.agentAssignedNames.push(this.user?.assigned_history[i].fullname);
          this.assignLeadData.push({
            userId: this.user?.assigned_history[i].userId,
            fullname: this.user?.assigned_history[i].fullname,
            contact: this.user?.assigned_history[i].contact,
            date: new Date(),
          });
        }
      } else if (this.user.assigned_type === "Admin") {
        for (let i = 0; i < this.user.assigned_history.length; i++) {
          console.log(this.user.assigned_history[i].fullname);
          this.superAdminAssignedNames.push(
            this.user?.assigned_history[i].fullname
          );
          this.assignLeadData.push({
            userId: this.user?.assigned_history[i].userId,
            fullname: this.user?.assigned_history[i].fullname,
            contact: this.user?.assigned_history[i].contact,
            date: new Date(),
          });
        }
      } else if (this.user.assigned_type === "city_admin") {
        for (let i = 0; i < this.user.assigned_history.length; i++) {
          console.log(this.user.assigned_history[i].fullname);
          this.cityAdminAssignedNames.push(
            this.user?.assigned_history[i].fullname
          );
          this.assignLeadData.push({
            userId: this.user?.assigned_history[i].userId,
            fullname: this.user?.assigned_history[i].fullname,
            contact: this.user?.assigned_history[i].contact,
            date: new Date(),
          });
        }
      }

      this.addinventoryForm.patchValue({
        assigned_history: this.assignLeadData,
      });
    }
    console.log(this.user);

    this.formSendingStatus = "Save";
    this.addinventoryForm.patchValue({
      property_type1: this.user?.property_type1,
    });
    this.addinventoryForm.patchValue({ client_type: this.user?.client_type });
    this.clientType = this.user?.client_type;

    this.addinventoryForm.patchValue({
      property_type: this.user?.property_type,
    });
    this.addinventoryForm.patchValue({ form_title: this.user?.form_title });
    this.addinventoryForm.patchValue({
      assigned_type: this.user?.assigned_type,
    });
    this.addinventoryForm.patchValue({ area: this.user?.area });
    this.addinventoryForm.patchValue({ area_unit: this.user?.area_unit });
    this.addinventoryForm.patchValue({ max_area: this.user?.max_area });
    this.addinventoryForm.patchValue({ max_price: this.user?.max_price });
    this.addinventoryForm.patchValue({ _id: this.user?._id });
    this.addinventoryForm.patchValue({ location: this.user?.location });
    this.addinventoryForm.patchValue({ priority: this.user?.priority });

    this.addinventoryForm.patchValue({
      added_By: {
        fullname: this.user?.added_By?.fullname,
        userId: this.user?.added_By?.userId,
        contact: this.user?.added_By?.contact,
      },
    });
    console.log(this.user.location);

    this.addinventoryForm.patchValue({ min_area: this.user?.min_area });
    this.addinventoryForm.patchValue({ min_price: this.user?.min_price });
    this.minimumPriceRange = this.user?.min_price;
    this.maximumPriceRange = this.user?.max_price;
    this.minimumAreaRange = this.user?.min_area;
    this.maximumAreaRange = this.user?.max_area;

    this.addinventoryForm.patchValue({ max_price: this.user?.max_price });

    this.addinventoryForm.patchValue({ area: this.user?.area });
    this.addinventoryForm.patchValue({ client_type: this.user?.client_type });
    this.addinventoryForm.patchValue({ demand_price: this.user?.demand_price });
    this.addinventoryForm.patchValue({
      property_purpose: this.user?.property_purpose,
    });
    this.addinventoryForm.patchValue({ beds_number: this.user?.beds_number });
    this.addinventoryForm.patchValue({ client_name: this.user?.client_name });
    this.addinventoryForm.patchValue({
      client_number: this.user?.client_number,
    });
    this.addinventoryForm.patchValue({ city: this.user?.city });

    if (this.user.location) {
      this.selectStringLocations = this.user?.location[0].location;
      this.selectedLocations = this.user?.location[0].location;
      console.log(this.selectStringLocations);
    }

    if (this.user.city) {
      this.getLocations(this.user?.city[0]._id);
      console.log(this.user?.city[0]._id);
      this.selectedCity = this.user?.city[0].city;
    }
  }

  // File Upload Functions below
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
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
        if (
          this.token.access === "city_admin" ||
          this.token.access === "agent"
        ) {
          if (this.token?.city.city == "Islamabad") {
            this.city.push(cities[2]);
            this.cities = this.city;
          } else if (this.token?.city.city == "Rawalpindi") {
            this.city.push(cities[1]);
            this.cities = this.city;
          } else if (this.token?.city.city == "Peshawar") {
            this.city.push(cities[0]);
          }
        } else {
          this.cities = cities;
        }
      },
      (err) => {
        console.error(err);
      }
    );
  }
  public priceConverter(value) {
    return this.authService.priceFilter(value);
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
  demandValue(value) {
    this.demandValueVariable = value.target.value;
  }
  demandValue1(value) {
    this.demandValueVariable1 = value.target.value;
  }
  demandValue2(value) {
    this.demandValueVariable2 = value.target.value;
  }
  // Submit form to backend service
  submitForm() {
    this.submitted = true;
    if (this.addinventoryForm.invalid) {
      console.log("Erroneous");
      this.toastr.error("Fill all the Required Fields", "Error", {
        timeOut: 5000,
      });
      return;
    }
    if (this.addinventoryForm.get("assigned_type").value === "self") {
    }

    this.assignLeadData = [];

    console.log(this.addinventoryForm.value);

    if (this.user) {
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
      const form_title = this.addinventoryForm.get("form_title").value;
      console.log(this.addinventoryForm.value);
      this.addinventoryForm.patchValue({
        added_By: {
          fullname: this.token?.fullname,
          userId: this.token?.userId,
          contact: this.token?.contact,
        },
      });
      console.log(this.addinventoryForm.value);
      this.authService.createInventory(this.addinventoryForm.value).subscribe(
        (data) => {
          console.log("signup data: ", data);

          //
          // this.authService.assignLeadToAgent(this.addinventoryForm.value).subscribe(
          //   (data: any) => {
          //     console.log(data);
          //     this.toastr.success(data.message, "Success", {
          //       timeOut: 5000,
          //     });
          //   },
          //   (error) => {
          //     console.log(error);

          //     if (error.error.code == 11000)
          //       this.toastr.error(error.error.message, "Error", {
          //         timeOut: 5000,
          //       });
          //   }
          // );
          //
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

  contentWidthEmitted(value) {
    this.content.nativeElement.style.marginLeft = `${value}px`;
  }
}
