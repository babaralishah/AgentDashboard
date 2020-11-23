
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/Authentication/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup; // Instance of Form group that will get form data from user end (i.e; login.html)
  // registerForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  mobileView: boolean;
  username: string;
  email: string;
  errorMessage: any;
  constructor(
    public formBuilder: FormBuilder, // Creating an instance of Formbuilder
    public authService: AuthenticationService, // Instance of Authentication services created in front end
    public router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.initialize();
  }
  // tslint:disable-next-line: typedef
  initialize() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.route.params.subscribe(param => {
      this.email = param.email;
    });
    if (window.innerWidth < 600) {
      this.mobileView = true;

    } else if (window.innerWidth > 600) {
      this.mobileView = false;
    }
  }
  // get email() {
  //   return this.loginForm.get('email')
  // }
  // tslint:disable-next-line: typedef
  loginUser() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    
    var value = this.loginForm.get('email').value;
    value = value.toLowerCase();
    this.loginForm.patchValue({ email: value });
    // console.log('user login data: ', this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe(data => {

      console.log('Subscribed Data: ', data);
      const msg = data.message;
      const token = data.token;
      const email = this.loginForm.value.email;
      this.toastr.success(msg, 'Success', {
        timeOut: 5000
      });
      this.authService.setToken(token);
      this.router.navigate(['profile', email]);
      // this.router.navigate(['/profile']);

    },
      // tslint:disable-next-line: no-unused-expression
      (error) => {
        console.error(error.error.message);
        this.errorMessage = error;
        this.toastr.error(error.error.message, 'Error', {
          timeOut: 5000
        });
      }
    );

  }
  // getting input labels values from user end (login.html)
  get f() { return this.loginForm.controls; }
}
