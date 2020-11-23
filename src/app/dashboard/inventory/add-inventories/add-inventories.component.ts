import * as $ from 'jquery';
// import { NzSelectModule } from 'ng-zorro-antd/select';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
// import { from } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/Authentication/authentication.service';
import { ToastrService } from 'ngx-toastr';
import * as mapboxgl from 'mapbox-gl';
import { HttpErrorResponse } from '@angular/common/http';
// import { MapserviceService } from "../services/mapservice.service";

@Component({
  selector: 'app-add-inventories',
  templateUrl: './add-inventories.component.html',
  styleUrls: ['./add-inventories.component.css'],
})
export class AddInventoriesComponent implements OnInit {
  cities: any;
  ad = 'Post Ad';
  locations: any;
  subsLocations: any;
  selectedLocations: any;
  city: any;
  user: any;
  user1: any;  
  access_type = [
    { access: 'super_admin' },
    { access: 'agent' },
    { access: 'city_admin' },
  ];
  access_type1 = [
    { access: "all_agents" }
  ];
  greaterThanValue ;
  lessThanValue;
  isInvalid: boolean = false;
  isInvalid1: boolean = false;
  greaterThanValue1;
  lessThanValue1;
  userList: any;
  selectStringLocations: any = [];

  //////////////////////////////////

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
    private toastr: ToastrService
  ) { }
  get Property_typename() {
    return this.addinventoryForm.get('prop_typename');
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.addinventoryForm.controls;
  }

  // Requirements for Map on the template, below;
  opacity = 1;
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 33.628463;
  lng = 73.087581;
  submitted = false;
  location_value: any;
  city_value: any;
  urls = [];
  optionValue;
  optionValue1;
  fileToUpload: File = null;
  addinventoryForm: FormGroup;
  typeCheckValue: any;
  isRent = true;
  
  ngOnInit(): void {
    this.user1 = this.authService.getUser();
    if (this.user1)
    console.log('User1: ', this.user1);
    
    this.authService.removeUser();
    // this.initializemapbox();
    const token = this.authService.getToken();
    this.user = this.authService.getDecodedToken(token).data;
    const form_title = this.authService.getFormTitle();
    this.authService.removeFormTitle();
    this.formDeclare();

    this.addinventoryForm.patchValue({ form_title });
    this.getCities();
    // console.log(this.user1);
    if (this.user1) {
      this.updatefields();
    }
    this.getUserList();
  }
  // Function to call User data table
  getUserList() {
    this.authService.getUsers().subscribe(
      (data) => {
        this.userList = data;
        console.log('User Get Response', this.userList);
      },
      (err) => {
        console.error(err);
      }
    );
  }


  //Function that is working on price filter/check
  public onChangePrice(event: any): void {
    // console.log('\nonchange price\n');
    
    this.isInvalid = this.greaterThanValue > this.lessThanValue;
  }
  //Function that is working on AREA filter/check
  public onChangeArea(event: any): void {
    // console.log('\nonchange area\n');
    this.isInvalid1 = this.greaterThanValue1 > this.lessThanValue1;
  }

  // Function to patch the value from ng select
  changeAccess(access){
    // console.log(access.access);
    this.addinventoryForm.patchValue({assigned_to: access.access});
    // console.log(this.addinventoryForm.value);
  }
  // Function to patch the value from ng select
  changeAccess2(access){
    // console.log(access.fullname);
    this.addinventoryForm.patchValue({assigned_to: access.fullname});
    // console.log(this.addinventoryForm.value);
  }
  // Function to patch the value from form radio button 
  assigned_To(name){
    // console.log(name);
    this.addinventoryForm.patchValue({ assigned_to: name });
  }
    setFormTitle(name){
      this.authService.setFormTitle(name);
      this.router.navigate(['/add-inventories']);
    }
    updatefields() {
    // this.addinventoryForm.patchValue({ form_title: 'Inventory' });
    this.ad = 'Save'
    this.addinventoryForm.patchValue({ form_title: this.user1.form_title });
    this.addinventoryForm.patchValue({ _id: this.user1._id });
    // this.addinventoryForm.patchValue({ location: this.user1.location });
    this.addinventoryForm.patchValue({ assigned_to: this.user1.assigned_to });    
    this.addinventoryForm.patchValue({ property_type: this.user1.property_type });
    this.addinventoryForm.patchValue({ area: this.user1.area });
    this.addinventoryForm.patchValue({ client_type: this.user1.client_type });
    this.addinventoryForm.patchValue({ demand_price: this.user1.demand_price });
    this.addinventoryForm.patchValue({ property_purpose: this.user1.property_purpose });
    this.addinventoryForm.patchValue({ beds_number: this.user1.beds_number });
    this.addinventoryForm.patchValue({ client_name: this.user1.client_name });
    this.addinventoryForm.patchValue({ client_number: this.user1.client_number });
    // this.addinventoryForm.patchValue({ city: this.user1.city });
    
    if(this.user1.location) {
      for(let i=0; i< this.user1.location.length; i++) {
        console.log(this.user1.location[i].location);
        this.selectStringLocations.push(this.user1.location[i].location);
      }
      console.log(this.selectStringLocations);
    }
    
    if(this.user1.city) {
      this.getLocations(this.user1.city[0]._id);
      // this.addinventoryForm.patchValue({ city: this.user1.city.city });
      console.log(this.user1.city[0]._id);
      
    }
    console.log(this.addinventoryForm.value);
    
  }

  // File Upload Functions below
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  // Form Declaration, and Validation Function
  formDeclare() {
    this.addinventoryForm = this.formBuilder.group({
      // _id: [''],
      assigned_to1:[],
      assigned_to: [
        {
          userId: '',
          name: '',
        },
      ],
      admin: [
        {
          userId: '',
          name: '',
        },
      ],
      form_title: [''],
      property_purpose: [''],
      property_type: [''],
      city: [
        {
          id: '',
          name: this.city_value,
          cityId: '',
        },
      ],
      location: [],
      sub_location: [
        {
          id: '',
          name: '',
          sub_locationId: '',
        },
      ],
      min_price: [],
      max_price: [],
      demand_price: [],
      min_area: [],
      max_area: [],
      beds_number: [],
      area: [],
      area_unit: [''],
      client_name: [''],
      client_number: [],
      client_type: [''],
    });
  }

  getCity(cityId) {
    const city = this.cities.filter((city: any) => {
      return city._id === cityId;
    });
    if (city[0]) {
      return city[0].city;
    } else {
      return '';
    }
  }

  getLocation(locId) {
    const location = this.locations.filter((location: any) => {
      return location._id === locId;
    });
    if (location[0]) {
      return location[0].location;
    } else {
      return '';
    }
  }

  changeCity(city) {
    console.log(this.locations);
    
    this.locations = '';
    console.log(this.locations);
    if(city){
    this.getLocations(city._id);
    this.addinventoryForm.patchValue({ city });
    console.log(this.addinventoryForm.value);
    }
  }
  changeLocation(location) {
    console.log(location);
    this.selectedLocations = location;
    console.log(this.addinventoryForm.value);
  }

  // Getting cities from backend Api's
  getCities() {
    this.authService.getCities().subscribe(
      (cities) => {
        // console.log('Curr', this.user);
        if (this.user.access === 'islamabad_admin') {
          this.city.push(cities[2]);
          this.cities = this.city;
        } else if (this.user.access === 'rawalpindi_admin') {
          this.city.push(cities[1]);
          this.cities = this.city;
        } else if (this.user.access === 'peshawar_admin') {
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

  getLocations(selectedCity?) {
    console.log(selectedCity);
    this.authService.getLocations().subscribe(
      (locations) => {
        console.log(locations, selectedCity);

        this.locations = locations;
        // this.subsLocations = locations.subLocations;
        // console.log(" this.locations", this.locations);
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
  // //////////

  //   changeValue(value) {
  //     this.checked = !value;
  // }

  // Function to initialize Map; used in template
  // tslint:disable-next-line: typedef
  // initializemapbox() {
  //   this.map = new mapboxgl.Map({
  //     accessToken:
  //       'pk.eyJ1IjoibmFiZWVsc2FsZWVtIiwiYSI6ImNrY3p4MWhrZzBiNWwyd3FtOGx3aTZsbjEifQ.z6RLknl-YnJe2eKqMjPElg',
  //     container: 'map',
  //     style: 'mapbox://styles/mapbox/streets-v11',
  //     center: [73.024955, 33.650753],
  //     zoom: 10,
  //   });
  //   this.map.addControl(new mapboxgl.FullscreenControl());
  //   this.map.addControl(new mapboxgl.NavigationControl());
  //   this.map.addControl(
  //     new mapboxgl.GeolocateControl({
  //       positionOptions: {
  //         enableHighAccuracy: true,
  //       },
  //       trackUserLocation: true,
  //     })
  //   );
  // }

  ///////////////////////////////
  // Check whether user pressed 'buy' or 'rent' button
  setValue(value: string) {
    this.optionValue1 = value;
  }
  assignFormTitle(e) {
    console.log(e.target.value);
    // return this.addinventoryForm.patchValue({form_title: formTitle});
    // this.addinventoryForm.
  }

  // Submit form to backend service
  submitForm() {
    this.submitted = true; // stop here if form is invalid
    console.log('\n\n', this.addinventoryForm.value, '\n\n');
    this.addinventoryForm.patchValue({ location: this.selectedLocations });

    if (this.user1) {
      console.log(this.addinventoryForm.value);
      this.authService
        .updateInventory(this.user1._id, this.addinventoryForm.value)
        .subscribe((data: any) => {
          console.log('Update inventory response data: ', data);
          // this.registerresponse = data;
          const email = this.addinventoryForm.value.email;
          const msg = data.message;
          // const status = data.status;
          // this.registerForm.reset();
          if (msg == 'Inventory updated successfully') {
            this.toastr.success(msg, 'Success', {
              timeOut: 5000,
            });
            if ( this.addinventoryForm.get('form_title').value === 'Inventory' ) {
            this.router.navigate(['/inventory']);
            }
            else if ( this.addinventoryForm.get('form_title').value === 'Lead' ) {
              this.router.navigate(['/leads']);
              }
              else if ( this.addinventoryForm.get('form_title').value === 'Both' ) {
                this.router.navigate(['/both']);
                }
          } else {
            this.toastr.error(msg, 'Error', {
              timeOut: 5000,
            });
          }
        });
    } else {
      const user = this.addinventoryForm.get('form_title').value;
      console.log(this.addinventoryForm.value);
      this.authService
        .createInventory(this.addinventoryForm.value)
        .subscribe((data) => {
          console.log('signup data: ', data);
          // this.registerresponse = data;
          const email = this.addinventoryForm.value.email;
          // const msg = data.message;
          // const status = data.status;
          // this.registerForm.reset();
          if (user === 'Inventory') {
            this.toastr.success('Inventory Added', 'Success', {
              timeOut: 5000,
            });
            this.router.navigate(['/inventory']);
          }
          else if (user === 'Lead'){

            this.toastr.success('Lead Added', 'Success', {
              timeOut: 5000,
            });
            this.router.navigate(['/leads']);
          }
          else if (user === 'Both'){

            this.toastr.success('Both Added', 'Success', {
              timeOut: 5000,
            });
            this.router.navigate(['/both']);
          }
          // else {
          //   this.toastr.error('msg', 'Error', {
          //     timeOut: 5000,
          //   });

          // }
        });
    }
  }
}

//   console.log('\n\n', this.addinventoryForm.value, '\n\n');
//   this.authService.createInventory(this.addinventoryForm.value).subscribe((data) => {
//     const user = this.addinventoryForm.get('form_title').value;
//     if (user === 'Lead'){
//     this.addinventoryForm.reset();
//     this.toastr.success('User Added', 'Success', {
//       timeOut: 9000
//     });
//     console.log('Subscribed data: ', data);
//     this.router.navigate(['/leads']);
//   }
//   else if (user === 'Inventory'){
//     this.addinventoryForm.reset();
//     this.toastr.success('User Added', 'Success', {
//       timeOut: 9000
//     });
//     console.log('Subscribed data: ', data);
//     this.router.navigate(['/inventory']);
//   }
// },
//     (error: HttpErrorResponse) => {
//       console.log(error);
//       this.toastr.error('Fields Empty', 'Error', {
//         timeOut: 5000
//       });
//     });

// Form upload function

// onSelectFile(event) {
//   if (event.target.files && event.target.files[0]) {
//     const filesAmount = event.target.files.length;
//     for (let i = 0; i < filesAmount; i++) {
//       const reader = new FileReader();

//       // tslint:disable-next-line: no-shadowed-variable
//       reader.onload = (event: any) => {
//         // console.log(event.target.result);
//         this.urls.push(event.target.result);
//       };

//       reader.readAsDataURL(event.target.files[i]);
//     }
//   }
// }
// removeMultipleSelectedFile(index) {
//   this.urls.splice(index, 1);
// }
