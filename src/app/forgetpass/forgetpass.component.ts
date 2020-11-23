import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/Authentication/authentication.service';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.css']
})
export class ForgetpassComponent implements OnInit {
  forgetPassForm: FormGroup;
  submitted = false;
  constructor(
    private authServ: AuthenticationService,
    public formBuilder: FormBuilder,
    public router: Router) { }

  ngOnInit(): void {
    this.forgetPassForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]
    });
  }
  get f() { return this.forgetPassForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.forgetPassForm.invalid) {
      return;
    }
    console.log("Sending this email: " + this.forgetPassForm.value.email);
    const body = {
      email: this.forgetPassForm.value.email
    }
    this.authServ.verifyEmail(body).subscribe(data => {
      console.log(data);
      const status = data.success;
      const msg = data.status;
      const email = this.forgetPassForm.value.email;
      if (status) {
        alert(msg)

        this.router.navigate(['forgetpassverify-component', email]);
      }
      else
      {
        alert(msg);
      }
    });


  }
}
