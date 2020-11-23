import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/Authentication/authentication.service';

@Component({
  selector: 'app-signupotp',
  templateUrl: './signupotp.component.html',
  styleUrls: ['./signupotp.component.css']
})
export class SignupotpComponent implements OnInit {

  submitted = false;
  email: string;
  signupotpForm: FormGroup;
  constructor(
    private authServ: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.email = param.email;
      // console.log(this.email);
    });
    this.initialize();
  }
  initialize() {
    this.signupotpForm = this.formBuilder.group({
      code: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern('^[0-9]+$')]]
    });
  }
  get f() { return this.signupotpForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.signupotpForm.invalid) {
      return;
    }
    const user = {
      email: this.email,
      otpcode: this.signupotpForm.value.code
    };

    this.authServ.verifyOTPEmail(user).subscribe(data => {
      console.log(data);
      const status = data.status;
      const msg = data.msg;
      if (status) {

        alert('\nMessage: ' + msg + '\n\n Status: ' + status)
        this.router.navigate(['profile', this.email]);
      } else {
        alert(msg);
      }
    });

  }
}
