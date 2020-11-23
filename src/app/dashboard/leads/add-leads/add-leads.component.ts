import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray, NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/Authentication/authentication.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-leads',
  templateUrl: './add-leads.component.html',
  styleUrls: ['./add-leads.component.css']
})
export class AddLeadsComponent implements OnInit {
  submitted = false;
  user: any;
  cartService: any;
  addleadForm: FormGroup;
  cities: any;
  locations: any;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthenticationService,
              private router: Router,
              private toastr: ToastrService) { }
  formDeclare() {
    this.addleadForm = this.formBuilder.group({
      location: ['', Validators.required],
      client: ['', Validators.required],
      id: ['', Validators.required],
      agent_status: ['', Validators.required],
      admin_status: ['', Validators.required],
      phone_no: ['', Validators.required],
      added_on: ['', Validators.required],
      area: ['', Validators.required],
      type: ['', Validators.required],
      purpose: ['', Validators.required],
      prop_type: ['', Validators.required],
      prop_no: ['', Validators.required],
      demand: ['', Validators.required],
      comment: ['', Validators.required],
      assigned_to: ['', Validators.required]
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.addleadForm.controls; }
  ngOnInit(): void {
    this.formDeclare();
    this.getCities();
    this.getLocations();
  }
    getCities() {
      this.authService.getCities().subscribe(
        (data) => {
          this.cities = data;
          console.log('Cities: ', this.cities);
        },
        (err) => {
          console.error(err);
        }
      );
    }
        getLocations() {
          this.authService.getLocations().subscribe(
            (data) => {
              this.locations = data;
              console.log('Locations: ', this.locations);
            },
            (err) => {
              console.error(err);
            }
          );
        }
  submitForm() {
    this.submitted = true;    // stop here if form is invalid
    if (this.addleadForm.invalid) {
      this.toastr.error('Fields Empty', 'Error', {
        timeOut: 5000
      });
      // console.log('Erroneous')
      return;
    }
    this.addleadForm.reset();
    this.toastr.success('Lead Added', 'Success', {
      timeOut: 9000
    });
  }
}
