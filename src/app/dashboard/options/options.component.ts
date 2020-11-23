import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray, NgForm } from '@angular/forms'
import { from } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/Authentication/authentication.service';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  submitted = false;
  user: any;
  cartService: any;
  addoptionForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
    private toastr: ToastrService) { }
  formDeclare() {
    this.addoptionForm = this.formBuilder.group({
      add_newcity: ['', Validators.required],
      added_cities: ['', Validators.required],
      add_newloc: ['', Validators.required],
      added_loc: ['', Validators.required],
      enter_newloc: ['', Validators.required],
      add_newtype: ['', Validators.required],
      added_type: ['', Validators.required],
      add_newstatus: ['', Validators.required],
      added_status: ['', Validators.required]
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.addoptionForm.controls; }
  ngOnInit(): void {
    this.formDeclare();
  }
  submitForm() {
    this.submitted = true;    // stop here if form is invalid
    if (this.addoptionForm.invalid) {
      this.toastr.error('Fields Empty', 'Error', {
        timeOut: 5000
      });
      console.log('Erroneous')
      return;
    }
    this.addoptionForm.reset();
    this.toastr.success('Lead Added', 'Success', {
      timeOut: 9000
    });
  }
}
