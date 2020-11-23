import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/Authentication/authentication.service';

@Component({
  selector: 'app-forgetpassverify',
  templateUrl: './forgetpassverify.component.html',
  styleUrls: ['./forgetpassverify.component.css']
})
export class ForgetpassverifyComponent implements OnInit {

  submitted = false;
  email: string;
  forgetpassForm: FormGroup;
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
    this.forgetpassForm = this.formBuilder.group({
      code: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern('^[0-9]+$')]]
    });
  }
  get f() { return this.forgetpassForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.forgetpassForm.invalid) {
      return;
    }
    const user = {
      email: this.email,
      otpcode: this.forgetpassForm.value.code
    };

    // this.authServ.verifyOTPEmail(user).subscribe(data => {
    //   console.log(data);
    // });
    this.authServ.verifyOTPCode(user).subscribe(data => {
      console.log(data);
      const status = data.success;
      const msg = data.status;
      if (status) {

        alert(msg)
        this.router.navigate(['newpass-component', this.email]);
      } else {
        alert(msg);
      }
    });
  }

}
