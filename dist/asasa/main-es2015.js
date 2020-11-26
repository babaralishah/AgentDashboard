(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/4vt":
/*!***************************************************************!*\
  !*** ./src/app/Pipes/Non-Utilized_Pipes/table-filter.pipe.ts ***!
  \***************************************************************/
/*! exports provided: TableFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableFilterPipe", function() { return TableFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TableFilterPipe {
    transform(user, search_id) {
        if (!user || !search_id) {
            return user;
        }
        return user.filter(user => user.userId.toLowerCase().indexOf(search_id.toLowerCase()) !== -1);
    }
}
TableFilterPipe.ɵfac = function TableFilterPipe_Factory(t) { return new (t || TableFilterPipe)(); };
TableFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "tableFilter", type: TableFilterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableFilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'tableFilter'
            }]
    }], null, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Office\MyAsasa\src\main.ts */"zUnb");


/***/ }),

/***/ "15Qt":
/*!**************************************************!*\
  !*** ./src/app/signupotp/signupotp.component.ts ***!
  \**************************************************/
/*! exports provided: SignupotpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupotpComponent", function() { return SignupotpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/Authentication/authentication.service */ "6q8g");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");








function SignupotpComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Code is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupotpComponent_div_19_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Code must be at least 6 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupotpComponent_div_19_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Code should not be greater than 6 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupotpComponent_div_19_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Code must be a valid number sequence");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupotpComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupotpComponent_div_19_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupotpComponent_div_19_div_2_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SignupotpComponent_div_19_div_3_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SignupotpComponent_div_19_div_4_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.code.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.code.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.code.errors.maxlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.code.errors.pattern);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class SignupotpComponent {
    constructor(authServ, formBuilder, router, route) {
        this.authServ = authServ;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.submitted = false;
    }
    ngOnInit() {
        this.route.params.subscribe(param => {
            this.email = param.email;
            // console.log(this.email);
        });
        this.initialize();
    }
    initialize() {
        this.signupotpForm = this.formBuilder.group({
            code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]+$')]]
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
                alert('\nMessage: ' + msg + '\n\n Status: ' + status);
                this.router.navigate(['profile', this.email]);
            }
            else {
                alert(msg);
            }
        });
    }
}
SignupotpComponent.ɵfac = function SignupotpComponent_Factory(t) { return new (t || SignupotpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
SignupotpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupotpComponent, selectors: [["app-signupotp"]], decls: 25, vars: 5, consts: [["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], ["href", "//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css", "rel", "stylesheet", "id", "bootstrap-css"], [1, "container"], [1, "row"], [1, "col-sm-5", "col-md-5", "left"], ["src", "assets/icons/asasa.gif", 1, "left-img"], [1, "col-1", "v2"], [1, "vl"], [1, "col-sm-6", "col-md-6", "right"], [1, "form-register", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "input-group"], [1, "fa", "fa-user", "icon"], ["type", "text", "formControlName", "code", "name", "code", "id", "code", "placeholder", "Enter 6-digit verify code", 1, "form-control", "inputs", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "rounded-pill"], ["routerLink", "/register-component", 1, "btn", "btn-primary", "rounded-pill"], [1, "invalid-feedback"], [4, "ngIf"]], template: function SignupotpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Verification ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Welcome to my asasa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupotpComponent_Template_form_ngSubmit_14_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SignupotpComponent_div_19_Template, 5, 4, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Verify");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signupotpForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.submitted && ctx.f.code.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.code.errors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".btn[_ngcontent-%COMP%]{\n    \n    \n    width: 100px;\n    font-size: 14px;\n    background-color: #38baa2 ;\n    color: white;\n    border: 1px solid transparent;\n  }\n  \n  .btn1[_ngcontent-%COMP%]{\n    \n    width: 100px;\n    font-size: 13px;\n    background-color: #38baa2 ;\n    color: white;\n    border: 1px solid transparent;\n    \n  }\n  \n  h2[_ngcontent-%COMP%]{\n    color: #38baa2;\n    font-weight: 600;\n    margin-left: 200px;\n    margin-top: -10px;\n  }\n  \n  input[_ngcontent-%COMP%]{\n    border: 2px solid #0000001a !important;\n    border-radius: 50rem!important;\n  }\n  \n  i[_ngcontent-%COMP%]:before {\n    position: relative;\n    top: 30%;\n    font-size: 22px;\n    color: #38bba3;\n    margin-right: 1px;\n  }\n  \n  .word[_ngcontent-%COMP%] {\n      color: #38baa2;\n      letter-spacing: 1px;\n      padding: 20 px;\n      font: bold 14px arial,sans-serif;\n      \n  }\n  \n  .emailInput[_ngcontent-%COMP%]{\n  margin-left: 12px;\n  }\n  \n  .input-field[_ngcontent-%COMP%] { \n      width: 100%; \n      padding: 10px; \n      text-align: center; \n  }\n  \n  .input-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { \n      position: absolute; \n  }\n  \n  .input-container[_ngcontent-%COMP%] { \n      display: flex;\n      width: 100%;\n      margin-bottom: 15px;\n    }\n  \n  .a[_ngcontent-%COMP%]{\n      text-align: left;\n  }\n  \n  .vl[_ngcontent-%COMP%]{\n    border-left: 2.2px solid #38baa2;\n    height: 250px;\n    margin-left: 22px;\n  }\n  \n  .v2[_ngcontent-%COMP%]{\n    margin-top: 40px ;\n    color: #38baa2;\n    font-weight: bold;\n  }\n  \n  .login[_ngcontent-%COMP%]{\n      height:auto;\n    min-height: 100vh;\n  }\n  \n  .left-img[_ngcontent-%COMP%]{\n    width:45%;\n    margin-left: 80px;\n  }\n  \n  .inputs[_ngcontent-%COMP%]{\n    margin-left: 15px;\n  }\n  \n  .left[_ngcontent-%COMP%]{\n  margin-top: 145px ;\n  }\n  \n  .right[_ngcontent-%COMP%]{\n  margin-top: 220px ;\n  }\n  \n  .input-area1[_ngcontent-%COMP%]{\n    \n    margin-left: 20px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwb3RwL3NpZ251cG90cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLHNDQUFzQztJQUN0Qyw4QkFBOEI7RUFDaEM7O0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztFQUNBO01BQ0ksY0FBYztNQUNkLG1CQUFtQjtNQUNuQixjQUFjO01BQ2QsZ0NBQWdDO01BQ2hDLHVCQUF1QjtFQUMzQjs7RUFDQTtFQUNBLGlCQUFpQjtFQUNqQjs7RUFDQTtNQUNJLFdBQVc7TUFDWCxhQUFhO01BQ2Isa0JBQWtCO0VBQ3RCOztFQUNBO01BQ0ksa0JBQWtCO0VBQ3RCOztFQUNBLG1CQUMwQixTQUFTO01BQy9CLGFBQWE7TUFDYixXQUFXO01BQ1gsbUJBQW1CO0lBQ3JCOztFQUNGO01BQ0ksZ0JBQWdCO0VBQ3BCOztFQUNBO0lBQ0UsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYixpQkFBaUI7RUFDbkI7O0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGlCQUFpQjtFQUNuQjs7RUFDQTtNQUNJLFdBQVc7SUFDYixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUNBO0VBQ0Esa0JBQWtCO0VBQ2xCOztFQUNBO0VBQ0Esa0JBQWtCO0VBQ2xCOztFQUNBOztJQUVFLGlCQUFpQjtFQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cG90cC9zaWdudXBvdHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmJ0bntcbiAgICAvKiBwYWRkaW5nOiAwcHg7ICovXG4gICAgLyogaGVpZ2h0OiAzMHB4OyAqL1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4YmFhMiA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB9XG4gIFxuICAuYnRuMXtcbiAgICAvKiBoZWlnaHQ6IDMwcHg7ICovXG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzhiYWEyIDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgLyogYm9yZGVyLXJhZGl1czogM3B4OyAqL1xuICB9XG4gIFxuICBoMntcbiAgICBjb2xvcjogIzM4YmFhMjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgfVxuICBcbiAgaW5wdXR7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDFhICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTByZW0haW1wb3J0YW50O1xuICB9XG4gIGk6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAzMCU7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGNvbG9yOiAjMzhiYmEzO1xuICAgIG1hcmdpbi1yaWdodDogMXB4O1xuICB9XG4gIC53b3JkIHtcbiAgICAgIGNvbG9yOiAjMzhiYWEyO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgIHBhZGRpbmc6IDIwIHB4O1xuICAgICAgZm9udDogYm9sZCAxNHB4IGFyaWFsLHNhbnMtc2VyaWY7XG4gICAgICAvKiBiYWNrZ3JvdW5kOi4gI2ZmZjsgKi9cbiAgfVxuICAuZW1haWxJbnB1dHtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gIH1cbiAgLmlucHV0LWZpZWxkIHsgXG4gICAgICB3aWR0aDogMTAwJTsgXG4gICAgICBwYWRkaW5nOiAxMHB4OyBcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gIH0gXG4gIC5pbnB1dC1pY29ucyBpIHsgXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICB9IFxuICAuaW5wdXQtY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94OyAvKiBJRTEwICovXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIH1cbiAgLmF7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG4gIC52bHtcbiAgICBib3JkZXItbGVmdDogMi4ycHggc29saWQgIzM4YmFhMjtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMnB4O1xuICB9XG4gIC52MntcbiAgICBtYXJnaW4tdG9wOiA0MHB4IDtcbiAgICBjb2xvcjogIzM4YmFhMjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAubG9naW57XG4gICAgICBoZWlnaHQ6YXV0bztcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgfVxuICBcbiAgLmxlZnQtaW1ne1xuICAgIHdpZHRoOjQ1JTtcbiAgICBtYXJnaW4tbGVmdDogODBweDtcbiAgfVxuICBcbiAgLmlucHV0c3tcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgfVxuICAubGVmdHtcbiAgbWFyZ2luLXRvcDogMTQ1cHggO1xuICB9XG4gIC5yaWdodHtcbiAgbWFyZ2luLXRvcDogMjIwcHggO1xuICB9XG4gIC5pbnB1dC1hcmVhMXtcbiAgICBcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupotpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signupotp',
                templateUrl: './signupotp.component.html',
                styleUrls: ['./signupotp.component.css']
            }]
    }], function () { return [{ type: _services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "2sHE":
/*!****************************************************!*\
  !*** ./src/app/services/Map/mapservice.service.ts ***!
  \****************************************************/
/*! exports provided: MapserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapserviceService", function() { return MapserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
// import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';



// import { Map } from './map';
class MapserviceService {
    constructor(http) {
        this.http = http;
        this.apiurl = "https://asasa.com/api/property";
    }
    readData() {
        return this.http.get(this.apiurl);
    }
}
MapserviceService.ɵfac = function MapserviceService_Factory(t) { return new (t || MapserviceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
MapserviceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MapserviceService, factory: MapserviceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapserviceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "47Jg":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _menu_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-items */ "pAu7");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");







function SidebarComponent_li_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sidebarnavItem_r1.title);
} }
const _c0 = function (a0) { return [a0]; };
function SidebarComponent_li_2_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_li_2_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.addExpandClass(sidebarnavItem_r1.title); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", sidebarnavItem_r1.class === "" ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, sidebarnavItem_r1.path) : null)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, sidebarnavItem_r1.class))("routerLinkActive", sidebarnavItem_r1.submenu.length != 0 ? "" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, sidebarnavItem_r1.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sidebarnavItem_r1.title);
} }
function SidebarComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_li_2_div_1_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidebarComponent_li_2_a_2_Template, 4, 11, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarnavItem_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r0.showMenu === sidebarnavItem_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", sidebarnavItem_r1.submenu.length != 0 ? "" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sidebarnavItem_r1.extralink === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !sidebarnavItem_r1.extralink);
} }
//declare var $: any;
class SidebarComponent {
    constructor(modalService, router, route) {
        this.modalService = modalService;
        this.router = router;
        this.route = route;
        this.showMenu = '';
        this.showSubMenu = '';
        this.sidebarnavItems = [];
    }
    // this is for the open close
    addExpandClass(element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    }
    // End open close
    ngOnInit() {
        this.sidebarnavItems = _menu_items__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].filter(sidebarnavItem => sidebarnavItem);
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 3, vars: 1, consts: [[1, "sidebar-nav"], ["id", "sidebarnav"], ["class", "sidebar-item", 3, "active", "routerLinkActive", 4, "ngFor", "ngForOf"], [1, "sidebar-item", 3, "routerLinkActive"], ["class", "nav-small-cap", 4, "ngIf"], ["class", "sidebar-link waves-effect waves-dark", 3, "routerLink", "ngClass", "routerLinkActive", "click", 4, "ngIf"], [1, "nav-small-cap"], [1, "sidebar-link", "waves-effect", "waves-dark", 3, "routerLink", "ngClass", "routerLinkActive", "click"], [3, "ngClass"], [1, "hide-menu"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidebarComponent_li_2_Template, 3, 5, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sidebarnavItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html'
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "62Q8":
/*!***********************************************************!*\
  !*** ./src/app/header-navigation/navigation.component.ts ***!
  \***********************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");






const _c0 = function (a0) { return { "show-search": a0 }; };
//declare var $: any;
class NavigationComponent {
    constructor() {
        this.toggleSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showSearch = false;
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(); };
NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], outputs: { toggleSidebar: "toggleSidebar" }, decls: 37, vars: 3, consts: [[1, "navbar-nav", "float-left", "mr-auto"], [1, "nav-item", "d-none", "d-md-block", "d-lg-none"], ["href", "javascript:void(0)", 1, "nav-link", "sidebartoggler", "waves-effect", "waves-light", 3, "click"], [1, "mdi", "mdi-menu", "font-24"], [1, "nav-item", "search-box"], ["href", "javascript:void(0)", 1, "nav-link", "waves-effect", "waves-dark", 3, "click"], [1, "ti-search"], [1, "app-search", "position-absolute", 3, "ngClass"], ["type", "text", "placeholder", "Search & enter", 1, "form-control"], [1, "srh-btn", 3, "click"], [1, "ti-close"], [1, "navbar-nav", "float-right"], ["ngbDropdown", "", "placement", "bottom-right", 1, "nav-item", "dropdown"], ["ngbDropdownToggle", "", "href", "javascript:void(0)", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "text-muted", "waves-effect", "waves-dark", "pro-pic"], ["src", "assets/1.jpg", "alt", "user", "width", "31", 1, "rounded-circle"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "user-dd"], ["href", "javascript:void(0)", 1, "dropdown-item"], [1, "ti-user", "m-r-5", "m-l-5"], [1, "ti-wallet", "m-r-5", "m-l-5"], [1, "ti-email", "m-r-5", "m-l-5"], [1, "dropdown-divider"], [1, "ti-settings", "m-r-5", "m-l-5"], [1, "fa", "fa-power-off", "m-r-5", "m-l-5"], [1, "p-l-30", "p-10"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-success", "btn-rounded"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_2_listener() { return ctx.toggleSidebar.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_5_listener() { return ctx.showSearch = !ctx.showSearch; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_9_listener() { return ctx.showSearch = !ctx.showSearch; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " My Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " My Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Inbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Account Setting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "View Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.showSearch));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultClassDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownMenu"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navigation',
                templateUrl: './navigation.component.html'
            }]
    }], function () { return []; }, { toggleSidebar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "6q8g":
/*!*******************************************************************!*\
  !*** ./src/app/services/Authentication/authentication.service.ts ***!
  \*******************************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "EjJx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");








class AuthenticationService {
    constructor(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        this.url = 'https://my-asasa.herokuapp.com';
    }
    //////////// Send data to inventory using inventory form /////////////
    createInventory(user) {
        console.log('Create user func');
        return this.httpClient
            .post(`${this.url}/inventory/add`, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    // Set inventory form title
    setFormTitle(name) {
        this.form_title = name;
    }
    // Get inventory form title
    getFormTitle() {
        return this.form_title;
    }
    removeFormTitle() {
        this.form_title = null;
    }
    /////////////// Get data from inventory to the inventory table ////////////
    getInventory() {
        return this.httpClient.get(`${this.url}/inventory`);
    }
    ///////// Getting user table data //////////////
    getUsers() {
        return this.httpClient.get(`${this.url}/users`);
    }
    getLeads() {
        return this.httpClient.get(`${this.url}/leads`);
    }
    // Function to get all data from Leads, Inventory i.e; both
    getAll() {
        return this.httpClient.get(`${this.url}/inventory/all`);
    }
    // Function to call delete api for the user data table
    deleteUser(id) {
        console.log('Calling deleteUser', id);
        return this.httpClient.delete(`https://my-asasa.herokuapp.com/users/${id}`);
    }
    ////////////// Send new row table data /////////////
    createUsers(user) {
        console.log('Create user func', user);
        if (user instanceof File) {
            const formData = new FormData();
            formData.append('images', user);
            return this.httpClient
                .post(`${this.url}/users/save`, formData);
        }
        else {
            return this.httpClient
                .post(`${this.url}/users/save`, user)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
    }
    // create service to get and set the token to local storage
    setToken(token) {
        localStorage.setItem('token', token);
    }
    getDecodedToken(token) {
        try {
            // console.log(token);
            return Object(jwt_decode__WEBPACK_IMPORTED_MODULE_4__["default"])(token);
        }
        catch (Error) {
            console.log(Error);
            return null;
        }
    }
    getToken() {
        return localStorage.getItem('token');
        // console.log('token:\t', token);
        // return token;
    }
    // Function to delete the single inventory
    deleteInventory(id) {
        console.log('Calling deleteInventory', id);
        return this.httpClient.delete(`https://my-asasa.herokuapp.com/inventory/${id}`);
    }
    // Getting cities names from api
    getCities() {
        return this.httpClient.get(`https://asasa.com/api/get_cities`);
    }
    // Getting Locations names
    getLocations() {
        return this.httpClient.get(`https://asasa.com/api/get_locations`);
    }
    // Function to set user from user/inventory table to update
    setUser(user) {
        this.user = user;
    }
    // Function to get user from user/inventory table to update
    getUser() {
        return this.user;
    }
    removeUser() {
        this.user = null;
    }
    // Api call to Update the already existed user/agent in the user component
    updateUser(id, data) {
        return this.httpClient.put(`https://my-asasa.herokuapp.com/users/${id}`, data);
    }
    // Update a single Inventory
    updateInventory(id, data) {
        console.log('Calling updateInventory', id);
        return this.httpClient.put(`https://my-asasa.herokuapp.com/inventory/${id}`, data);
    }
    ///////// Function to Register the new user /////////////
    register(user) {
        return this.httpClient
            .post(`${this.url}/users/register`, user);
    }
    /* API Call to verify otp code */
    ////// Verifying the email address while signing the user up ///////////////////
    verifyOTPEmail(user) {
        return this.httpClient
            .post(`${this.url}/users/verifyemail`, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    ///////// Verifying the user using otp code to his gmail to change his/her password /////////////
    verifyOTPCode(user) {
        return this.httpClient
            .post(`${this.url}/users/verifyotpcode`, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    ///////////// Adding new password after forgetting the old password ////////
    newpassword(user) {
        return this.httpClient
            .post(`${this.url}/users/newpassword`, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    /////////// Function to Login the already existed user /////////////
    login(user) {
        return this.httpClient.post(`${this.url}/users/login`, user);
    }
    ///////////// Verify User Email ////////////////
    verifyEmail(body) {
        return this.httpClient.post(`${this.url}/users/verifyemail`, body);
    }
    /////////////// Get Users Token //////////////////////////
    getAccessToken() {
        return localStorage.getItem('access_token');
    }
    get isLoggedIn() {
        const authToken = localStorage.getItem('access_token');
        return authToken !== null ? true : false;
    }
    ////////// Logout Function ////////////////
    logout() {
        if (localStorage.removeItem('access_token') == null) {
            this.router.navigate(['users/login']);
        }
    }
    ///////////////////////////////////////////
    ///////// Get Profile Function ////////////
    getUserProfile(id) {
        return this.httpClient
            .get(`${this.url}/user/profile/${id}`, { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
            return res || {};
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    ///////////////////////////////////////////
    ///////// Error Handling /////////////////
    handleError(error) {
        let msg = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            msg = error.error.message;
        }
        else {
            // server-side error
            msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(msg);
    }
    // ////////////////////////////////////////
    setGenericId(id) {
        this.genericId = id;
    }
    getGenericId() {
        return this.genericId;
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "80h2":
/*!********************************************************!*\
  !*** ./src/app/dashboard/profile/profile.component.ts ***!
  \********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/Authentication/authentication.service */ "6q8g");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.component */ "iqMG");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dashboard.component */ "QX6l");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function ProfileComponent_img_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 26);
} }
function ProfileComponent_img_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 27);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.selectedFile.src, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
class ImageSnippet {
    constructor(src, file) {
        this.src = src;
        this.file = file;
    }
}
class ProfileComponent {
    constructor(router, route, authService) {
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.username = this.router.url;
    }
    ngOnInit() {
        this.tokenization();
    }
    tokenization() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const token = yield this.authService.getToken();
            const decodedToken = yield this.authService.getDecodedToken(token);
            this.tokendata = decodedToken.data;
            // console.log(this.tokendata);
        });
    }
    onSelectFile(event) {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.addEventListener('load', (event) => {
                this.selectedFile = new ImageSnippet(event.target.result, file);
            });
            reader.readAsDataURL(file);
        }
    }
    // Function to Update Profile Image
    updateImage() {
        console.log('Save Image', this.selectedFile);
        console.log(this.tokendata._id);
        this.authService.updateUser(this.tokendata._id, this.selectedFile.file).subscribe((res) => {
            console.log('Subscribed data: ', res);
        });
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 56, vars: 6, consts: [[1, "row"], [1, "col-md-2"], [1, "col-md-10"], [1, "main", "main-raised"], [1, "col-md-6"], [1, "content"], [1, "card"], [1, "firstinfo"], ["src", "https://bootdey.com/img/Content/avatar/avatar6.png", 4, "ngIf"], [3, "src", 4, "ngIf"], [1, "profileinfo"], [1, "badge", "badge-warning"], [1, "bio"], [1, "col-md-8", "col-lg-6"], [1, "profile"], [1, "upload-btn-wrapper", "text-center", "input-container", 2, "float", "left"], [1, "btn", "text-center", "mr-2", 2, "width", "100px", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-camera"], [1, "upload"], ["type", "file", 1, "fileField", 3, "change"], ["file", ""], [1, "upload-btn-wrapper", "text-center", 2, "float", "left", "margin-top", "15px"], [1, "fa", "fa-save"], [1, "card1"], [1, "profileinfo", "mt-4"], [1, "bio", "d-flex", "justify-content-center", "align-item-center", "text-dark"], ["src", "https://bootdey.com/img/Content/avatar/avatar6.png"], [3, "src"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ProfileComponent_img_12_Template, 1, 0, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ProfileComponent_img_13_Template, 1, 1, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Lived all my life on the top of mount Fuji, learning the way to be a Ninja Dev.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](32); return _r2.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ProfileComponent_Template_input_change_31_listener($event) { return ctx.onSelectFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_36_listener() { return ctx.updateImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "h2", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Email #:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "h2", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Contact #:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.selectedFile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedFile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.tokendata == null ? null : ctx.tokendata.fullname);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.tokendata == null ? null : ctx.tokendata.access);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u00A0\u00A0\u00A0\u00A0", ctx.tokendata == null ? null : ctx.tokendata.email, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u00A0\u00A0\u00A0+92", ctx.tokendata == null ? null : ctx.tokendata.contact, "");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".card1[_ngcontent-%COMP%] {\n    width: 500px;\n    min-height: 200px;\n    padding: 25px;\n    border-radius: 15px;\n    background-color: white;\n    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);\n    margin-left: 700px;\n}\n\n.fileField[_ngcontent-%COMP%] {\n    opacity: 0;\n    margin-left: -97px;\n    margin-left: -230px;\n    margin-top: 21px;\n}\n\n.badge[_ngcontent-%COMP%] {\n    font-size: 17px;\n}\n\n.badgescard[_ngcontent-%COMP%], .firstinfo[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nhtml[_ngcontent-%COMP%] {\n    height: 100%;\n}\n\nbody[_ngcontent-%COMP%] {\n    font-family: 'Open Sans', sans-serif;\n    width: 100%;\n    min-height: 100%;\n    background: #00bcd4;\n    font-size: 16px;\n    overflow: hidden;\n}\n\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\n    box-sizing: border-box;\n}\n\n.content[_ngcontent-%COMP%] {\n    position: relative;\n    -webkit-animation: animatop 0.9s cubic-bezier(0.425, 1.14, 0.47, 1.125) forwards;\n            animation: animatop 0.9s cubic-bezier(0.425, 1.14, 0.47, 1.125) forwards;\n}\n\n.btn[_ngcontent-%COMP%] {\n    background: #3abba2;\n    color: white;\n    font-family: fangsong;\n    cursor: pointer;\n}\n\n.card[_ngcontent-%COMP%] {\n    width: 500px;\n    min-height: 100px;\n    padding: 25px;\n    border-radius: 15px;\n    background-color: white;\n    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);\n    position: relative;\n    overflow: hidden;\n    margin-top: 140px;\n    margin-left: 30px;\n}\n\n.input-container[_ngcontent-%COMP%] {\n    margin-left: 100px;\n}\n\n@media only screen and (min-width: 1400px)and (max-width: 1500px) {\n    .card[_ngcontent-%COMP%], .profile[_ngcontent-%COMP%], .input-container[_ngcontent-%COMP%] {\n        margin-left: 70px;\n    }\n    .card1[_ngcontent-%COMP%] {\n        margin-left: 600px;\n    }\n}\n\n@media only screen and (min-width: 1100px)and (max-width: 1400px) {\n    .card[_ngcontent-%COMP%], .profile[_ngcontent-%COMP%] {\n        margin-left: 130px;\n    }\n    .input-container[_ngcontent-%COMP%] {\n        margin-left: 30px;\n    }\n    .card1[_ngcontent-%COMP%] {\n        margin-left: 400px;\n    }\n}\n\n@media only screen and (max-width: 1100px) {\n    .card[_ngcontent-%COMP%], .profile[_ngcontent-%COMP%] {\n        margin-left: 120px;\n    }\n    .card1[_ngcontent-%COMP%] {\n        margin-left: 150px;\n    }\n    .input-container[_ngcontent-%COMP%] {\n        margin-left: 0;\n    }\n}\n\n@media only screen and (max-width: 992px) {\n    .card[_ngcontent-%COMP%], .profile[_ngcontent-%COMP%] {\n        margin-left: 20px;\n    }\n    .card1[_ngcontent-%COMP%] {\n        margin-left: 20px;\n    }\n    .input-container[_ngcontent-%COMP%] {\n        margin-left: 0;\n    }\n}\n\n.card[_ngcontent-%COMP%]:after {\n    content: '';\n    display: block;\n    width: 190px;\n    height: 300px;\n    background: #38bba2;\n    position: absolute;\n    -webkit-animation: rotatemagic 0.75s cubic-bezier(0.425, 1.04, 0.47, 1.105) 1s both;\n            animation: rotatemagic 0.75s cubic-bezier(0.425, 1.04, 0.47, 1.105) 1s both;\n}\n\n.badgescard[_ngcontent-%COMP%] {\n    margin-left: -65px;\n    padding: 10px 20px;\n    border-radius: 3px;\n    background-color: #00bcd4;\n    color: #fff;\n    width: 630px;\n    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);\n    position: absolute;\n    z-index: -1;\n    left: 10px;\n    bottom: 10px;\n    -webkit-animation: animainfos 0.5s cubic-bezier(0.425, 1.04, 0.47, 1.105) 0.75s forwards;\n            animation: animainfos 0.5s cubic-bezier(0.425, 1.04, 0.47, 1.105) 0.75s forwards;\n}\n\n.badgescard[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 1.6em;\n    margin: 0px 6px;\n    opacity: 0.6;\n}\n\n.firstinfo[_ngcontent-%COMP%] {\n    flex-direction: row;\n    z-index: 2;\n    position: relative;\n}\n\n.firstinfo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    border-radius: 50%;\n    width: 120px;\n    height: 120px;\n}\n\n.firstinfo[_ngcontent-%COMP%]   .profileinfo[_ngcontent-%COMP%] {\n    padding: 0px 20px;\n    margin-left: 38px;\n}\n\n.firstinfo[_ngcontent-%COMP%]   .profileinfo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.8em;\n}\n\n.firstinfo[_ngcontent-%COMP%]   .profileinfo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n    color: #00bcd4;\n    font-style: italic;\n}\n\n.firstinfo[_ngcontent-%COMP%]   .profileinfo[_ngcontent-%COMP%]   p.bio[_ngcontent-%COMP%] {\n    padding: 10px 0px;\n    color: #5A5A5A;\n    line-height: 1.2;\n    font-style: initial;\n}\n\n@-webkit-keyframes animatop {\n    0% {\n        opacity: 0;\n        bottom: -500px;\n    }\n    100% {\n        opacity: 1;\n        bottom: 0px;\n    }\n}\n\n@keyframes animatop {\n    0% {\n        opacity: 0;\n        bottom: -500px;\n    }\n    100% {\n        opacity: 1;\n        bottom: 0px;\n    }\n}\n\n@-webkit-keyframes animainfos {\n    0% {\n        bottom: 10px;\n    }\n    100% {\n        bottom: -42px;\n    }\n}\n\n@keyframes animainfos {\n    0% {\n        bottom: 10px;\n    }\n    100% {\n        bottom: -42px;\n    }\n}\n\n@-webkit-keyframes rotatemagic {\n    0% {\n        opacity: 0;\n        transform: rotate(0deg);\n        top: -24px;\n        left: -253px;\n    }\n    100% {\n        transform: rotate(-30deg);\n        top: -24px;\n        left: -78px;\n    }\n}\n\n@keyframes rotatemagic {\n    0% {\n        opacity: 0;\n        transform: rotate(0deg);\n        top: -24px;\n        left: -253px;\n    }\n    100% {\n        transform: rotate(-30deg);\n        top: -24px;\n        left: -78px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qiw0Q0FBNEM7SUFDNUMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTs7O0lBR0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdGQUF3RTtZQUF4RSx3RUFBd0U7QUFDNUU7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qiw0Q0FBNEM7SUFDNUMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7OztRQUdJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSTs7UUFFSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSTs7UUFFSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtBQUNKOztBQUVBO0lBQ0k7O1FBRUksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1GQUEyRTtZQUEzRSwyRUFBMkU7QUFDL0U7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLFlBQVk7SUFDWiw0Q0FBNEM7SUFDNUMsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsWUFBWTtJQUNaLHdGQUFnRjtZQUFoRixnRkFBZ0Y7QUFDcEY7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLGNBQWM7SUFDbEI7SUFDQTtRQUNJLFVBQVU7UUFDVixXQUFXO0lBQ2Y7QUFDSjs7QUFUQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLGNBQWM7SUFDbEI7SUFDQTtRQUNJLFVBQVU7UUFDVixXQUFXO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKOztBQVBBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFVBQVU7UUFDVix1QkFBdUI7UUFDdkIsVUFBVTtRQUNWLFlBQVk7SUFDaEI7SUFDQTtRQUNJLHlCQUF5QjtRQUN6QixVQUFVO1FBQ1YsV0FBVztJQUNmO0FBQ0o7O0FBWkE7SUFDSTtRQUNJLFVBQVU7UUFDVix1QkFBdUI7UUFDdkIsVUFBVTtRQUNWLFlBQVk7SUFDaEI7SUFDQTtRQUNJLHlCQUF5QjtRQUN6QixVQUFVO1FBQ1YsV0FBVztJQUNmO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZDEge1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgbWFyZ2luLWxlZnQ6IDcwMHB4O1xufVxuXG4uZmlsZUZpZWxkIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAtOTdweDtcbiAgICBtYXJnaW4tbGVmdDogLTIzMHB4O1xuICAgIG1hcmdpbi10b3A6IDIxcHg7XG59XG5cbi5iYWRnZSB7XG4gICAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4uYmFkZ2VzY2FyZCxcbi5maXJzdGluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaHRtbCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjMDBiY2Q0O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4qLFxuKjpiZWZvcmUsXG4qOmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uY29udGVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGFuaW1hdGlvbjogYW5pbWF0b3AgMC45cyBjdWJpYy1iZXppZXIoMC40MjUsIDEuMTQsIDAuNDcsIDEuMTI1KSBmb3J3YXJkcztcbn1cblxuLmJ0biB7XG4gICAgYmFja2dyb3VuZDogIzNhYmJhMjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IGZhbmdzb25nO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcmQge1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luLXRvcDogMTQwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbi5pbnB1dC1jb250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDAwcHgpYW5kIChtYXgtd2lkdGg6IDE1MDBweCkge1xuICAgIC5jYXJkLFxuICAgIC5wcm9maWxlLFxuICAgIC5pbnB1dC1jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tbGVmdDogNzBweDtcbiAgICB9XG4gICAgLmNhcmQxIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDYwMHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTAwcHgpYW5kIChtYXgtd2lkdGg6IDE0MDBweCkge1xuICAgIC5jYXJkLFxuICAgIC5wcm9maWxlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEzMHB4O1xuICAgIH1cbiAgICAuaW5wdXQtY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgfVxuICAgIC5jYXJkMSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0MDBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XG4gICAgLmNhcmQsXG4gICAgLnByb2ZpbGUge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTIwcHg7XG4gICAgfVxuICAgIC5jYXJkMSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNTBweDtcbiAgICB9XG4gICAgLmlucHV0LWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgIC5jYXJkLFxuICAgIC5wcm9maWxlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgfVxuICAgIC5jYXJkMSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIH1cbiAgICAuaW5wdXQtY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxufVxuXG4uY2FyZDphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDE5MHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgYmFja2dyb3VuZDogIzM4YmJhMjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYW5pbWF0aW9uOiByb3RhdGVtYWdpYyAwLjc1cyBjdWJpYy1iZXppZXIoMC40MjUsIDEuMDQsIDAuNDcsIDEuMTA1KSAxcyBib3RoO1xufVxuXG4uYmFkZ2VzY2FyZCB7XG4gICAgbWFyZ2luLWxlZnQ6IC02NXB4O1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYmNkNDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB3aWR0aDogNjMwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIGxlZnQ6IDEwcHg7XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIGFuaW1hdGlvbjogYW5pbWFpbmZvcyAwLjVzIGN1YmljLWJlemllcigwLjQyNSwgMS4wNCwgMC40NywgMS4xMDUpIDAuNzVzIGZvcndhcmRzO1xufVxuXG4uYmFkZ2VzY2FyZCBzcGFuIHtcbiAgICBmb250LXNpemU6IDEuNmVtO1xuICAgIG1hcmdpbjogMHB4IDZweDtcbiAgICBvcGFjaXR5OiAwLjY7XG59XG5cbi5maXJzdGluZm8ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgei1pbmRleDogMjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5maXJzdGluZm8gaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogMTIwcHg7XG59XG5cbi5maXJzdGluZm8gLnByb2ZpbGVpbmZvIHtcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMzhweDtcbn1cblxuLmZpcnN0aW5mbyAucHJvZmlsZWluZm8gaDEge1xuICAgIGZvbnQtc2l6ZTogMS44ZW07XG59XG5cbi5maXJzdGluZm8gLnByb2ZpbGVpbmZvIGgzIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGNvbG9yOiAjMDBiY2Q0O1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLmZpcnN0aW5mbyAucHJvZmlsZWluZm8gcC5iaW8ge1xuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgIGNvbG9yOiAjNUE1QTVBO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgZm9udC1zdHlsZTogaW5pdGlhbDtcbn1cblxuQGtleWZyYW1lcyBhbmltYXRvcCB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBib3R0b206IC01MDBweDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBhbmltYWluZm9zIHtcbiAgICAwJSB7XG4gICAgICAgIGJvdHRvbTogMTBweDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIGJvdHRvbTogLTQycHg7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZW1hZ2ljIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICB0b3A6IC0yNHB4O1xuICAgICAgICBsZWZ0OiAtMjUzcHg7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzBkZWcpO1xuICAgICAgICB0b3A6IC0yNHB4O1xuICAgICAgICBsZWZ0OiAtNzhweDtcbiAgICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: src_app_services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "AiYy":
/*!*****************************************************************!*\
  !*** ./src/app/Pipes/Non-Utilized_Pipes/table-filter04.pipe.ts ***!
  \*****************************************************************/
/*! exports provided: TableFilter04Pipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableFilter04Pipe", function() { return TableFilter04Pipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TableFilter04Pipe {
    transform(
    // user: User[],,
    user, search_type) {
        if (!user || !search_type) {
            return user;
        }
        return user.filter(user => user.contact.toLowerCase().indexOf(search_type.toLowerCase()) !== -1);
    }
}
TableFilter04Pipe.ɵfac = function TableFilter04Pipe_Factory(t) { return new (t || TableFilter04Pipe)(); };
TableFilter04Pipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "tableFilter04", type: TableFilter04Pipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableFilter04Pipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'tableFilter04'
            }]
    }], null, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    mapbox: {
        accessToken: 'pk.eyJ1IjoiYmFiYXJic2NzMzI2MSIsImEiOiJja2N2dHR2MGUwN21iMnhydXlvcXA2MTlmIn0.gympgF_-zALE5J5MyZH3fQ'
    },
    url: 'https://shaisecommercestore.herokuapp.com/api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "KgeA":
/*!*****************************************************************!*\
  !*** ./src/app/Pipes/Non-Utilized_Pipes/table-filter02.pipe.ts ***!
  \*****************************************************************/
/*! exports provided: TableFilter02Pipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableFilter02Pipe", function() { return TableFilter02Pipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TableFilter02Pipe {
    transform(
    // user: User[],
    user, search_location) {
        if (!user || !search_location) {
            return user;
        }
        return user.filter(user => user.location.toLowerCase().indexOf(search_location.toLowerCase()) !== -1);
    }
}
TableFilter02Pipe.ɵfac = function TableFilter02Pipe_Factory(t) { return new (t || TableFilter02Pipe)(); };
TableFilter02Pipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "tableFilter02", type: TableFilter02Pipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableFilter02Pipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'tableFilter02'
            }]
    }], null, null); })();


/***/ }),

/***/ "M56v":
/*!*****************************************************************!*\
  !*** ./src/app/Pipes/Non-Utilized_Pipes/table-filter06.pipe.ts ***!
  \*****************************************************************/
/*! exports provided: TableFilter06Pipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableFilter06Pipe", function() { return TableFilter06Pipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TableFilter06Pipe {
    transform(
    // user: User[],,
    user, search_client) {
        if (!user || !search_client) {
            return user;
        }
        return user.filter(user => user.fullname.toLowerCase().indexOf(search_client.toLowerCase()) !== -1);
    }
}
TableFilter06Pipe.ɵfac = function TableFilter06Pipe_Factory(t) { return new (t || TableFilter06Pipe)(); };
TableFilter06Pipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "tableFilter06", type: TableFilter06Pipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableFilter06Pipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'tableFilter06'
            }]
    }], null, null); })();


/***/ }),

/***/ "NPdi":
/*!****************************************************!*\
  !*** ./src/app/dashboard/users/users.component.ts ***!
  \****************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/Authentication/authentication.service */ "6q8g");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.component */ "iqMG");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dashboard.component */ "QX6l");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");










function UsersComponent_tr_44_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, user_r1.fullname));
} }
function UsersComponent_tr_44_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, user_r1.name));
} }
function UsersComponent_tr_44_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const loc_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", loc_r7.location, ", ");
} }
function UsersComponent_tr_44_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UsersComponent_tr_44_span_4_Template, 3, 3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UsersComponent_tr_44_span_5_Template, 3, 3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UsersComponent_tr_44_span_13_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_tr_44_Template_i_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const user_r1 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.setUser(user_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_tr_44_Template_a_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const user_r1 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.setUser(user_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_tr_44_Template_i_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const user_r1 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.confirmID(user_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h5", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Delete Confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Are you sure you want to delete it? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_tr_44_Template_button_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.deleteLead(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1 == null ? null : user_r1._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r1.fullname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !user_r1.fullname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("0", user_r1.contact, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r1.city == null ? null : user_r1.city.city, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", user_r1.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1 == null ? null : user_r1.access);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 9, user_r1 == null ? null : user_r1.created, "dd/MM/yyyy"));
} }
class UsersComponent {
    constructor(
    // private formBuilder: FormBuilder,
    authService, router, toastr) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.getUserList();
    }
    setUser(user) {
        this.authService.setUser(user);
        this.router.navigateByUrl('/register');
    }
    // Function to call User data table
    getUserList() {
        this.authService.getUsers().subscribe((data) => {
            this.data = data;
            console.log('User Get Response', this.data);
        }, (err) => {
            console.error(err);
        });
    }
    confirmID(id) {
        console.log(id);
        this.deleteId = id;
    }
    // Function to delete the single inventory
    deleteLead() {
        console.log(this.deleteId);
        this.authService.deleteUser(this.deleteId).subscribe(data => {
            console.log(data);
            if (data.code === 200) {
                this.toastr.success(data.message, 'Success', {
                    timeOut: 5000
                });
                this.getUserList();
                //   for ( let i = 0; i < this.user.length; i++){
                //      if ( this.user[i]._id === this.saveID) { this.user.splice(i, 1); i--; }}
            }
        });
    }
}
UsersComponent.ɵfac = function UsersComponent_Factory(t) { return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersComponent, selectors: [["app-users"]], decls: 46, vars: 5, consts: [[1, ""], [1, "row"], [1, "col-12"], [1, "col-2"], [1, "col-10"], [1, "user-class"], ["routerLink", "/register", 1, "btn", "btn-primary"], [1, "col-4"], [1, "card-body"], ["type", "search", "placeholder", "Search topics or keywords", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "table", "table-hover"], ["scope", "col"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "badge badge-light", 4, "ngFor", "ngForOf"], [1, "fa", "fa-edit", "icon", 3, "click"], ["role", "button", 3, "click"], ["data-toggle", "modal", "data-target", "#exampleModal1", 1, "fa", "fa-trash", "icon", 3, "click"], ["id", "exampleModal1", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"], [1, "badge", "badge-light"]], template: function UsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Add New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersComponent_Template_input_ngModelChange_20_listener($event) { return ctx.general_search = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "User ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Contact #");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Location Assigned");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Access");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Operations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, UsersComponent_tr_44_Template, 42, 12, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.general_search);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](45, 2, ctx.data, ctx.general_search));
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__["Ng2SearchPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["TitleCasePipe"]], styles: [".table[_ngcontent-%COMP%] {\n    border: 1px solid #8080804f;\n}\n\nth[_ngcontent-%COMP%] {\n    background-color: white;\n    color: black;\n}\n\n.user-class[_ngcontent-%COMP%] {\n    margin-left: 47px;\n    margin-top: 120px;\n    overflow-x: scroll;\n}\n\n.card-body[_ngcontent-%COMP%] {\n    padding: 0px;\n}\n\n\n\n.fa[_ngcontent-%COMP%] {\n    margin-left: 10px;\n}\n\n.btn[_ngcontent-%COMP%] {\n    \n    width: 100px;\n    font-size: 14px;\n    background-color: #38baa2;\n    color: white;\n    border: 1px solid transparent;\n}\n\n\n\n@media only screen and (max-width: 1650px) {\n    .user-class[_ngcontent-%COMP%] {\n        margin-left: 50px;\n    }\n}\n\n@media only screen and (min-width: 1200px)and (max-width: 1400px) {\n    .user-class[_ngcontent-%COMP%] {\n        margin-left: 80px;\n    }\n}\n\n@media only screen and (max-width: 1200px) {\n    .user-class[_ngcontent-%COMP%] {\n        margin-left: 100px;\n    }\n}\n\n@media only screen and (max-width: 1100px) {\n    .user-class[_ngcontent-%COMP%] {\n        margin-left: 120px;\n    }\n}\n\n@media only screen and (max-width: 992px) {\n    .user-class[_ngcontent-%COMP%] {\n        margin-left: -80px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFHQTs7R0FFRzs7QUFFSDtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osNkJBQTZCO0FBQ2pDOztBQUdBOzs7R0FHRzs7QUFFSDtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKOztBQUdBOzs7OztHQUtHIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4MDgwODA0Zjtcbn1cblxudGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLnVzZXItY2xhc3Mge1xuICAgIG1hcmdpbi1sZWZ0OiA0N3B4O1xuICAgIG1hcmdpbi10b3A6IDEyMHB4O1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbn1cblxuLmNhcmQtYm9keSB7XG4gICAgcGFkZGluZzogMHB4O1xufVxuXG5cbi8qIC51c2VycyB7XG4gICAgSGlkZSBzY3JvbGxiYXJzXG59ICovXG5cbi5mYSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5idG4ge1xuICAgIC8qIG1hcmdpbi1sZWZ0OiAyMHB4OyAqL1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4YmFhMjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cblxuLyogLmZvcm0tY29udHJvbC1ib3JkZXJsZXNzIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGVzbW9rZTtcbn0gKi9cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjUwcHgpIHtcbiAgICAudXNlci1jbGFzcyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpYW5kIChtYXgtd2lkdGg6IDE0MDBweCkge1xuICAgIC51c2VyLWNsYXNzIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDgwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAgIC51c2VyLWNsYXNzIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcbiAgICAudXNlci1jbGFzcyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMjBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAudXNlci1jbGFzcyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtODBweDtcbiAgICB9XG59XG5cblxuLyogXG4uZm9ybS1jb250cm9sLWJvcmRlcmxlc3M6aG92ZXIsIC5mb3JtLWNvbnRyb2wtYm9yZGVybGVzczphY3RpdmUsIC5mb3JtLWNvbnRyb2wtYm9yZGVybGVzczpmb2N1cyB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn0gKi8iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-users',
                templateUrl: './users.component.html',
                styleUrls: ['./users.component.css'],
            }]
    }], function () { return [{ type: src_app_services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "OA72":
/*!****************************************************!*\
  !*** ./src/app/dashboard/leads/leads.component.ts ***!
  \****************************************************/
/*! exports provided: LeadsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadsComponent", function() { return LeadsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/Authentication/authentication.service */ "6q8g");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.component */ "iqMG");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dashboard.component */ "QX6l");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");










function LeadsComponent_tr_53_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const loc_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", loc_r3.location, ", ");
} }
function LeadsComponent_tr_53_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Number : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, LeadsComponent_tr_53_span_26_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeadsComponent_tr_53_Template_i_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const user_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.setUser(user_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeadsComponent_tr_53_Template_a_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const user_r1 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.setUser(user_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeadsComponent_tr_53_Template_i_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const user_r1 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.confirmID(user_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Delete Confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Are you sure you want to delete it? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeadsComponent_tr_53_Template_button_click_51_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.deleteLead(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.referenceId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", user_r1.client_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.client_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.client_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.property_purpose);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.property_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Prop_num);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.area);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r1.city[0] == null ? null : user_r1.city[0].city, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", user_r1.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.demand_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](31, 12, user_r1.created, "dd/MM/yyyy"));
} }
class LeadsComponent {
    constructor(router, authService, toastr) {
        this.router = router;
        this.authService = authService;
        this.toastr = toastr;
        this.withAutofocus = `<button type="button" ngbAutofocus class="btn btn-danger"
      (click)="modal.close('Ok click')">Ok</button>`;
    }
    ngOnInit() {
        this.getLeadsList();
    }
    setUser(user) {
        this.authService.setUser(user);
        this.authService.setFormTitle('Lead');
        this.router.navigateByUrl('/add-inventories');
    }
    setFormTitle(name) {
        this.authService.setFormTitle(name);
        this.router.navigate(['/add-inventories']);
    }
    getLeadsList() {
        this.authService.getLeads().subscribe((data) => {
            this.user = data.leads;
            console.log('Server response: ', this.user);
        }, (err) => {
            console.error(err);
        });
    }
    // Function to delete the single inventory
    deleteLead() {
        console.log(this.deleteId);
        this.authService.deleteInventory(this.deleteId).subscribe(data => {
            console.log(data);
            if (data.code === 200) {
                this.toastr.success(data.message, 'Success', {
                    timeOut: 5000
                });
                this.getLeadsList();
                //   for ( let i = 0; i < this.user.length; i++){
                //      if ( this.user[i]._id === this.saveID) { this.user.splice(i, 1); i--; }}
            }
        });
    }
    confirmID(id) {
        console.log(id);
        this.deleteId = id;
    }
}
LeadsComponent.ɵfac = function LeadsComponent_Factory(t) { return new (t || LeadsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
LeadsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LeadsComponent, selectors: [["app-leads"]], decls: 55, vars: 5, consts: [[1, "row"], [1, "col-md-12"], [1, "col-md-2"], [1, "col-md-10"], [1, "leads"], [1, "btn", "btn-primary", 3, "click"], [1, "pull-right"], [1, "card-body", "row"], [1, "col"], ["id", "myInput", "type", "text", "placeholder", "Search topic or keyword", 1, "form-control", 3, "ngModel", "ngModelChange"], ["onclick", "window.print()", 1, "btn", "btn-primary"], [1, "btn", "btn-primary"], [1, "table", "table-hover"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["class", "badge badge-light", 4, "ngFor", "ngForOf"], [1, "fa", "fa-edit", "icon", 3, "click"], ["role", "button", 3, "click"], ["data-toggle", "modal", "data-target", "#exampleModal1", 1, "fa", "fa-trash", "icon", 3, "click"], ["id", "exampleModal1", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"], [1, "badge", "badge-light"]], template: function LeadsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Leads Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeadsComponent_Template_button_click_13_listener() { return ctx.setFormTitle("Lead"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Add New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LeadsComponent_Template_input_ngModelChange_18_listener($event) { return ctx.general_search = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u00A0 \u00A0 \u00A0 \u00A0 \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Excel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Purpose");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Prop. Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Prop. #");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Area");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Demand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Added On");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Operations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, LeadsComponent_tr_53_Template, 53, 15, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](54, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.general_search);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](54, 2, ctx.user, ctx.general_search));
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__["Ng2SearchPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: [".table[_ngcontent-%COMP%] {\n    border: 1px solid #8080804f;\n}\n\nth[_ngcontent-%COMP%] {\n    background-color: white;\n    color: black;\n}\n\n.leads[_ngcontent-%COMP%] {\n    overflow-x: scroll;\n    margin-left: 47px;\n    margin-top: 120px;\n}\n\n.fa[_ngcontent-%COMP%] {\n    margin-left: 8px;\n}\n\n.icon[_ngcontent-%COMP%] {\n    margin-top: 14px;\n}\n\n.btn[_ngcontent-%COMP%] {\n    \n    width: 100px;\n    font-size: 14px;\n    background-color: #38baa2;\n    color: white;\n    border: 1px solid transparent;\n}\n\n.form-control-borderless[_ngcontent-%COMP%] {\n    border: none;\n    border: 1px solid whitesmoke;\n}\n\n@media only screen and (max-width: 1650px) {\n    .leads[_ngcontent-%COMP%] {\n        margin-left: 50px;\n    }\n}\n\n@media only screen and (min-width: 1200px)and (max-width: 1400px) {\n    .leads[_ngcontent-%COMP%] {\n        margin-left: 80px;\n    }\n}\n\n@media only screen and (max-width: 1200px) {\n    .leads[_ngcontent-%COMP%] {\n        margin-left: 100px;\n    }\n}\n\n@media only screen and (max-width: 1100px) {\n    .leads[_ngcontent-%COMP%] {\n        margin-left: 120px;\n    }\n}\n\n@media only screen and (max-width: 992px) {\n    .leads[_ngcontent-%COMP%] {\n        margin-left: -80px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2xlYWRzL2xlYWRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBQ0o7O0FBR0E7Ozs7O0dBS0ciLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvbGVhZHMvbGVhZHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzgwODA4MDRmO1xufVxuXG50aCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4ubGVhZHMge1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICBtYXJnaW4tbGVmdDogNDdweDtcbiAgICBtYXJnaW4tdG9wOiAxMjBweDtcbn1cblxuLmZhIHtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4uaWNvbiB7XG4gICAgbWFyZ2luLXRvcDogMTRweDtcbn1cblxuLmJ0biB7XG4gICAgLyogbWFyZ2luLWxlZnQ6IDI1cHg7ICovXG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzhiYWEyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLmZvcm0tY29udHJvbC1ib3JkZXJsZXNzIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGVzbW9rZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjUwcHgpIHtcbiAgICAubGVhZHMge1xuICAgICAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KWFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIHtcbiAgICAubGVhZHMge1xuICAgICAgICBtYXJnaW4tbGVmdDogODBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgLmxlYWRzIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcbiAgICAubGVhZHMge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTIwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgLmxlYWRzIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC04MHB4O1xuICAgIH1cbn1cblxuXG4vKiBcbi5mb3JtLWNvbnRyb2wtYm9yZGVybGVzczpob3ZlciwgLmZvcm0tY29udHJvbC1ib3JkZXJsZXNzOmFjdGl2ZSwgLmZvcm0tY29udHJvbC1ib3JkZXJsZXNzOmZvY3VzIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xufSAqLyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeadsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-leads',
                templateUrl: './leads.component.html',
                styleUrls: ['./leads.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "PJWD":
/*!************************************************************!*\
  !*** ./src/app/dashboard/inventory/inventory.component.ts ***!
  \************************************************************/
/*! exports provided: InventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryComponent", function() { return InventoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/Authentication/authentication.service */ "6q8g");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.component */ "iqMG");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dashboard.component */ "QX6l");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");










function InventoryComponent_tr_51_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const loc_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", loc_r3.location, ", ");
} }
function InventoryComponent_tr_51_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, InventoryComponent_tr_51_span_7_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Name : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Number : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_tr_51_Template_i_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const user_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.setUser(user_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_tr_51_Template_a_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const user_r1 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.setUser(user_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_tr_51_Template_i_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const user_r1 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.confirmID(user_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Delete Confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Are you sure you want to delete it? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_tr_51_Template_button_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.deleteInventory(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.referenceId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r1.city[0] == null ? null : user_r1.city[0].city, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", user_r1.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.area);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.client_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.demand_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.property_purpose);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.beds_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", user_r1.client_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.client_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.assigned_to);
} }
class InventoryComponent {
    constructor(router, authService, toastr) {
        this.router = router;
        this.authService = authService;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.getInventoryList();
    }
    getInventoryList() {
        this.authService.getInventory().subscribe((data) => {
            this.user = data.inventories;
            console.log("Server response: ", this.user);
        }, (err) => {
            console.error(err);
        });
    }
    setFormTitle(name) {
        this.authService.setFormTitle(name);
        this.router.navigate(["/add-inventories"]);
    }
    // agentChange(e) {
    //   // console.log("e", this.dataToFilter);
    //   this.Name = e;
    //   // console.log("Name", this.Name);
    //   if (e) {
    //     this.filteredData = this.dataToFilter.filter((d) => {
    //       return d.user_id.user_id == e._id;
    //     });
    //     this.data = this.filteredData;
    //   } else if (!e) {
    //     this.data = this.dataToFilter;
    //   }
    // }
    //////////
    // Function to delete the single inventory
    // tslint:disable-next-line: typedef
    // deleteInventory(id){
    //   console.log('Calling deleteInventory');
    //   this.authService.deleteInventory(id).subscribe(data => {
    //     console.log(data);
    //     if (data.code === 200) {
    //       this.toastr.success(data.message, 'Success', {
    //           timeOut: 5000
    //         });
    //       for ( let i = 0; i < this.user.length; i++){
    //          if ( this.user[i]._id === id) { this.user.splice(i, 1); i--; }}
    //     }
    //   });
    // }
    confirmID(id) {
        console.log(id);
        this.deleteId = id;
    }
    // Function to delete the single inventory
    deleteInventory() {
        console.log(this.deleteId);
        this.authService.deleteInventory(this.deleteId).subscribe((data) => {
            console.log(data);
            if (data.code === 200) {
                this.toastr.success(data.message, "Success", {
                    timeOut: 5000,
                });
                this.getInventoryList();
                //   for ( let i = 0; i < this.user.length; i++){
                //      if ( this.user[i]._id === this.saveID) { this.user.splice(i, 1); i--; }}
            }
        });
    }
    // Function to set user in the service in order to perform delete or edit operations later on
    setUser(user) {
        this.authService.setUser(user);
        console.log(user);
        this.authService.setFormTitle("Inventory");
        this.router.navigateByUrl("/add-inventories");
    }
}
InventoryComponent.ɵfac = function InventoryComponent_Factory(t) { return new (t || InventoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
InventoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InventoryComponent, selectors: [["app-inventory"]], decls: 53, vars: 5, consts: [[1, "row"], [1, "col-12"], [1, "col-2"], [1, "col-9"], [1, "inventory"], [1, "btn", "btn-primary", 3, "click"], [1, "pull-right"], [1, "card-body", "row"], [1, "col"], ["id", "myInput", "type", "text", "placeholder", "Search topic or keyword", 1, "form-control", 3, "ngModel", "ngModelChange"], ["onclick", "window.print()", 1, "btn", "btn-primary"], [1, "btn", "btn-primary"], [1, "table", "table-hover"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["class", "badge badge-light", 4, "ngFor", "ngForOf"], [1, "fa", "fa-edit", "icon", 3, "click"], ["role", "button", 3, "click"], ["data-toggle", "modal", "data-target", "#exampleModal1", 1, "fa", "fa-trash", "icon", 3, "click"], ["id", "exampleModal1", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"], [1, "badge", "badge-light"]], template: function InventoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Inventory Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_Template_button_click_14_listener() { return ctx.setFormTitle("Inventory"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Add New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InventoryComponent_Template_input_ngModelChange_19_listener($event) { return ctx.general_search = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u00A0 \u00A0 \u00A0 \u00A0 \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Excel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Area");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Demand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Purpose");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Beds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Client Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Agent Assigned");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Operations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, InventoryComponent_tr_51_Template, 49, 11, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.general_search);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](52, 2, ctx.user, ctx.general_search));
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__["Ng2SearchPipe"]], styles: [".table[_ngcontent-%COMP%] {\n    border: 1px solid #dee2e6;\n}\n\n.abc[_ngcontent-%COMP%] {\n    overflow-x: hidden;\n}\n\n.dropbtn[_ngcontent-%COMP%] {\n    background-color: #38baa2;\n    color: white;\n    padding: 16px;\n    font-size: 16px;\n    border: none;\n}\n\n.dropdown[_ngcontent-%COMP%] {\n    position: relative;\n    display: inline-block;\n}\n\n.dropdown-content[_ngcontent-%COMP%] {\n    display: none;\n    position: absolute;\n    background-color: #f1f1f1;\n    min-width: 160px;\n    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n    z-index: 1;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: black;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    background-color: #ddd;\n}\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n    display: block;\n}\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropbtn[_ngcontent-%COMP%] {\n    background-color: #3e8e41;\n}\n\nth[_ngcontent-%COMP%] {\n    background-color: white;\n    color: black;\n    \n}\n\n.inventory[_ngcontent-%COMP%] {\n    margin-left: 47px;\n    margin-top: 120px;\n    width: 100%;\n    overflow-x: scroll;\n}\n\n.fa[_ngcontent-%COMP%] {\n    margin-left: 10px;\n}\n\n.btn[_ngcontent-%COMP%] {\n    \n    width: 100px;\n    font-size: 14px;\n    background-color: #38baa2;\n    color: white;\n    border: 1px solid transparent;\n}\n\n.form-control-borderless[_ngcontent-%COMP%] {\n    border: none;\n    border: 1px solid whitesmoke;\n}\n\n@media only screen and (max-width: 1650px) {\n    .inventory[_ngcontent-%COMP%] {\n        margin-left: 50px;\n    }\n}\n\n@media only screen and (min-width: 1200px)and (max-width: 1400px) {\n    .inventory[_ngcontent-%COMP%] {\n        margin-left: 80px;\n    }\n}\n\n@media only screen and (max-width: 1200px) {\n    .inventory[_ngcontent-%COMP%] {\n        margin-left: 100px;\n    }\n}\n\n@media only screen and (max-width: 1100px) {\n    .inventory[_ngcontent-%COMP%] {\n        margin-left: 120px;\n    }\n}\n\n@media only screen and (max-width: 992px) {\n    .inventory[_ngcontent-%COMP%] {\n        margin-left: -80px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2ludmVudG9yeS9pbnZlbnRvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQiwrQ0FBK0M7SUFDL0MsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2ludmVudG9yeS9pbnZlbnRvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcbn1cblxuLmFiYyB7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4uZHJvcGJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4YmFhMjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4uZHJvcGRvd24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICAgIG1pbi13aWR0aDogMTYwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgei1pbmRleDogMTtcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG5cbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5kcm9wZG93bjpob3ZlciAuZHJvcGJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNlOGU0MTtcbn1cblxudGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCAjZGVlMmU2OyAqL1xufVxuXG4uaW52ZW50b3J5IHtcbiAgICBtYXJnaW4tbGVmdDogNDdweDtcbiAgICBtYXJnaW4tdG9wOiAxMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG59XG5cbi5mYSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5idG4ge1xuICAgIC8qIG1hcmdpbi1sZWZ0OiAyNXB4OyAqL1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4YmFhMjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWNvbnRyb2wtYm9yZGVybGVzcyB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlc21va2U7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTY1MHB4KSB7XG4gICAgLmludmVudG9yeSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpYW5kIChtYXgtd2lkdGg6IDE0MDBweCkge1xuICAgIC5pbnZlbnRvcnkge1xuICAgICAgICBtYXJnaW4tbGVmdDogODBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgLmludmVudG9yeSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XG4gICAgLmludmVudG9yeSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMjBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAuaW52ZW50b3J5IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC04MHB4O1xuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InventoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-inventory",
                templateUrl: "./inventory.component.html",
                styleUrls: ["./inventory.component.css"],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "Q98w":
/*!**********************************************!*\
  !*** ./src/app/newpass/newpass.component.ts ***!
  \**********************************************/
/*! exports provided: NewpassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewpassComponent", function() { return NewpassComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/Authentication/authentication.service */ "6q8g");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");








function NewpassComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewpassComponent_div_19_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must be at least 6 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewpassComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewpassComponent_div_19_div_1_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NewpassComponent_div_19_div_2_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.password.errors.minlength);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class NewpassComponent {
    constructor(authServ, formBuilder, router, route) {
        this.authServ = authServ;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.submitted = false;
    }
    ngOnInit() {
        this.route.params.subscribe(param => {
            this.email = param.email;
        });
        this.initialize();
    }
    // tslint:disable-next-line: typedef
    initialize() {
        this.newpassForm = this.formBuilder.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]]
        });
    }
    // tslint:disable-next-line: typedef
    get f() { return this.newpassForm.controls; }
    // tslint:disable-next-line: typedef
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.newpassForm.invalid) {
            return;
        }
        const user = {
            email: this.email,
            newpassword: this.newpassForm.value.password
        };
        this.authServ.newpassword(user).subscribe(data => {
            console.log('server response: ');
            console.log(data);
            const status = data.success;
            const msg = data.status;
            if (status) {
                alert(msg);
                this.router.navigate(['/']);
            }
            else {
                alert(msg);
            }
        });
    }
}
NewpassComponent.ɵfac = function NewpassComponent_Factory(t) { return new (t || NewpassComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
NewpassComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewpassComponent, selectors: [["app-newpass"]], decls: 29, vars: 5, consts: [["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], ["href", "//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css", "rel", "stylesheet", "id", "bootstrap-css"], [1, "container"], [1, "row"], [1, "col-sm-5", "col-md-5", "left"], ["src", "assets/icons/asasa.gif", 1, "left-img"], [1, "col-1", "v2"], [1, "vl"], [1, "col-sm-6", "col-md-6", "right"], [1, "form-register", 3, "formGroup", "ngSubmit"], [1, "input-container"], [1, "input-group"], [1, "fa", "fa-lock", "icon"], ["id", "password", "type", "password", "placeholder", "Enter new password", "formControlName", "password", "required", "", "autofocus", "", 1, "form-control", "rounded-pill", "border-0", "shadow-sm", "px-4", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-group"], ["id", "inputPass", "type", "password", "placeholder", "Confirm new password", "required", "", "autofocus", "", 1, "form-control", "rounded-pill", "border-0", "shadow-sm", "px-4"], ["type", "submit", 1, "btn", "btn-primary", "rounded-pill"], ["routerLink", "/", 1, "btn", "btn-primary", "rounded-pill"], [1, "invalid-feedback"], [4, "ngIf"]], template: function NewpassComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Password change ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Welcome to my asasa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NewpassComponent_Template_form_ngSubmit_14_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, NewpassComponent_div_19_Template, 3, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.newpassForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.submitted && ctx.f.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["h2[_ngcontent-%COMP%]{\n  color: #38baa2;\n  font-weight: 600;\n  margin-left: 200px;\n  margin-top: -10px;\n}\n\ninput[_ngcontent-%COMP%]{    \n  margin-left: 15px;\n  border: 2px solid #0000001a !important;\n  border-radius: 50rem!important;\n}\n\ni[_ngcontent-%COMP%]:before {\n  position: relative;\n  top: 30%;\n  font-size: 22px;\n  color: #38bba3;\n  margin-right: 1px;\n}\n\n.word[_ngcontent-%COMP%] {\n    color: #38baa2;\n    letter-spacing: 1px;\n    padding: 20 px;\n    font: bold 14px arial,sans-serif;\n    \n}\n\n.emailInput[_ngcontent-%COMP%]{\nmargin-left: 12px;\n}\n\n.input-field[_ngcontent-%COMP%] { \n  margin-left: 15px;\n\twidth: 100%; \n\tpadding: 10px; \n\ttext-align: center; \n}\n\n.input-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { \n\tposition: absolute; \n}\n\n.input-container[_ngcontent-%COMP%] { \n\tdisplay: flex;\n\twidth: 100%;\n\tmargin-bottom: 15px;\n  }\n\n.a[_ngcontent-%COMP%]{\n\ttext-align: left;\n}\n\n.vl[_ngcontent-%COMP%]{\n  border-left: 2.2px solid #38baa2;\n  height: 250px;\n  margin-left: 22px;\n}\n\n.v2[_ngcontent-%COMP%]{\n  margin-top: 40px ;\n  color: #38baa2;\n  font-weight: bold;\n}\n\n.login[_ngcontent-%COMP%]{\n\theight:auto;\n  min-height: 100vh;\n}\n\n.btn[_ngcontent-%COMP%]{\n  \n  \n  width: 100px;\n  font-size: 14px;\n  background-color: #38baa2 ;\n  color: white;\n  border: 1px solid transparent;\n}\n\n.btn1[_ngcontent-%COMP%]{\n  height: 30px;\n  width: 55px;\n  font-size: 12px;\n  background-color: #38baa2 ;\n  color: white;\n  border: 1px solid transparent;\n  border-radius: 3px;\n}\n\n.left-img[_ngcontent-%COMP%]{\n  width:45%;\n  margin-left: 80px;\n}\n\n.inputs[_ngcontent-%COMP%]{\n  margin-left: 15px;\n}\n\n.left[_ngcontent-%COMP%]{\nmargin-top: 145px ;\n}\n\n.right[_ngcontent-%COMP%]{\nmargin-top: 220px ;\n}\n\n.input-area1[_ngcontent-%COMP%]{\n  \n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cGFzcy9uZXdwYXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsc0NBQXNDO0VBQ3RDLDhCQUE4QjtBQUNoQzs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxnQ0FBZ0M7SUFDaEMsdUJBQXVCO0FBQzNCOztBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUNBO0VBQ0UsaUJBQWlCO0NBQ2xCLFdBQVc7Q0FDWCxhQUFhO0NBQ2Isa0JBQWtCO0FBQ25COztBQUNBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUNBLG1CQUN1QixTQUFTO0NBQy9CLGFBQWE7Q0FDYixXQUFXO0NBQ1gsbUJBQW1CO0VBQ2xCOztBQUNGO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUNBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFDQTtDQUNDLFdBQVc7RUFDVixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUNBOztFQUVFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL25ld3Bhc3MvbmV3cGFzcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDJ7XG4gIGNvbG9yOiAjMzhiYWEyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tbGVmdDogMjAwcHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuXG5pbnB1dHsgICAgXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwMWEgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTByZW0haW1wb3J0YW50O1xufVxuaTpiZWZvcmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMzAlO1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiAjMzhiYmEzO1xuICBtYXJnaW4tcmlnaHQ6IDFweDtcbn1cbi53b3JkIHtcbiAgICBjb2xvcjogIzM4YmFhMjtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIHBhZGRpbmc6IDIwIHB4O1xuICAgIGZvbnQ6IGJvbGQgMTRweCBhcmlhbCxzYW5zLXNlcmlmO1xuICAgIC8qIGJhY2tncm91bmQ6LiAjZmZmOyAqL1xufVxuLmVtYWlsSW5wdXR7XG5tYXJnaW4tbGVmdDogMTJweDtcbn1cbi5pbnB1dC1maWVsZCB7IFxuICBtYXJnaW4tbGVmdDogMTVweDtcblx0d2lkdGg6IDEwMCU7IFxuXHRwYWRkaW5nOiAxMHB4OyBcblx0dGV4dC1hbGlnbjogY2VudGVyOyBcbn0gXG4uaW5wdXQtaWNvbnMgaSB7IFxuXHRwb3NpdGlvbjogYWJzb2x1dGU7IFxufSBcbi5pbnB1dC1jb250YWluZXIge1xuXHRkaXNwbGF5OiAtbXMtZmxleGJveDsgLyogSUUxMCAqL1xuXHRkaXNwbGF5OiBmbGV4O1xuXHR3aWR0aDogMTAwJTtcblx0bWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuLmF7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG59XG4udmx7XG4gIGJvcmRlci1sZWZ0OiAyLjJweCBzb2xpZCAjMzhiYWEyO1xuICBoZWlnaHQ6IDI1MHB4O1xuICBtYXJnaW4tbGVmdDogMjJweDtcbn1cbi52MntcbiAgbWFyZ2luLXRvcDogNDBweCA7XG4gIGNvbG9yOiAjMzhiYWEyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5sb2dpbntcblx0aGVpZ2h0OmF1dG87XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4uYnRue1xuICAvKiBwYWRkaW5nOiAwcHg7ICovXG4gIC8qIGhlaWdodDogMzBweDsgKi9cbiAgd2lkdGg6IDEwMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOGJhYTIgO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4uYnRuMXtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogNTVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzhiYWEyIDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4ubGVmdC1pbWd7XG4gIHdpZHRoOjQ1JTtcbiAgbWFyZ2luLWxlZnQ6IDgwcHg7XG59XG5cbi5pbnB1dHN7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuLmxlZnR7XG5tYXJnaW4tdG9wOiAxNDVweCA7XG59XG4ucmlnaHR7XG5tYXJnaW4tdG9wOiAyMjBweCA7XG59XG4uaW5wdXQtYXJlYTF7XG4gIFxuICBtYXJnaW4tbGVmdDogMjBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewpassComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-newpass',
                templateUrl: './newpass.component.html',
                styleUrls: ['./newpass.component.css']
            }]
    }], function () { return [{ type: _services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/Authentication/authentication.service */ "6q8g");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function DashboardComponent_a_77_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_a_77_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Log out");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class DashboardComponent {
    constructor(authService, router, toastr) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.tokenization();
    }
    // tslint:disable-next-line: typedef
    tokenization() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const token = yield this.authService.getToken();
            const decodedToken = yield this.authService.getDecodedToken(token);
            this.tokendata = decodedToken.data;
            // console.log(this.tokendata);
        });
    }
    // tslint:disable-next-line: typedef
    isLogin() {
        const token = this.authService.getToken();
        // console.log(token);
        return token;
    }
    // tslint:disable-next-line: typedef
    logout() {
        localStorage.removeItem('token');
        this.toastr.success('Logged Out', 'Success', {
            timeOut: 5000
        });
        console.log('\nlogout\n');
        this.router.navigateByUrl('/');
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 85, vars: 3, consts: [["href", "//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "rel", "stylesheet", "id", "bootstrap-css"], ["name", "description", "content", "Responsive sidebar template with sliding effect and dropdown menu based on bootstrap 3"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "integrity", "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm", "crossorigin", "anonymous"], ["href", "https://use.fontawesome.com/releases/v5.0.6/css/all.css", "rel", "stylesheet"], [1, "page-wrapper", "chiller-theme", "toggled"], ["id", "show-sidebar", "href", "#", 1, "btn", "btn-sm", "btn-dark"], [1, "fas", "fa-bars"], ["id", "sidebar", 1, "sidebar-wrapper", 2, "padding-top", "100px"], [1, "sidebar-content"], [1, "sidebar-brand"], ["routerLink", "/"], [1, "sidebar-header"], [1, "user-pic"], ["src", "https://bootdey.com/img/Content/avatar/avatar6.png", 1, "img-responsive", "img-rounded"], [1, "user-info"], [1, "user-name"], [1, "user-role"], [1, "user-status"], [1, "fa", "fa-circle"], [1, "sidebar-search"], [1, "input-group"], ["type", "text", "placeholder", "Search...", 1, "form-control", "search-menu"], [1, "input-group-append"], [1, "input-group-text"], ["aria-hidden", "true", 1, "fa", "fa-search"], [1, "sidebar-menu"], [1, "header-menu"], [1, "sidebar"], ["routerLink", "/profile"], [1, "fa", "fa-user"], ["routerLink", "/users"], [1, "fa", "fa-users"], ["routerLink", "/inventory"], [1, "fas", "fa-file-alt"], ["routerLink", "/leads"], [1, "fas", "fa-phone-volume"], ["routerLink", "/both"], ["routerLink", "/register"], [1, "fa", "fa-tachometer-alt"], ["routerLink", "/map"], [1, "fas", "fa-map"], [1, "badge", "badge-pill", "badge-info"], [1, "sidebar-footer"], ["routerLink", "/", 3, "click", 4, "ngIf"], [1, "fa", "fa-bell"], [1, "badge", "badge-pill", "badge-success", "notification"], ["href", "#"], [1, "fa", "fa-cog"], [1, "badge-sonar"], ["routerLink", "/", 3, "click"], [1, "fa", "fa-lock"], [1, "badge", "badge-pill", "badge-warning", "notification"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Sidebar template");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "nav", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "AGENT DASHBOARD");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "User Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, " Agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Inventory");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Lead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Both");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Maps");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](77, DashboardComponent_a_77_Template, 4, 0, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.tokendata == null ? null : ctx.tokendata.fullname, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.tokendata == null ? null : ctx.tokendata.access);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLogin());
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["li[_ngcontent-%COMP%] {\n    display: table;\n}\nul[_ngcontent-%COMP%] {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n}\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    width: 60px;\n}\n@-webkit-keyframes swing {\n    0% {\n        transform: rotate(0deg);\n    }\n    10% {\n        transform: rotate(10deg);\n    }\n    30% {\n        transform: rotate(0deg);\n    }\n    40% {\n        transform: rotate(-10deg);\n    }\n    50% {\n        transform: rotate(0deg);\n    }\n    60% {\n        transform: rotate(5deg);\n    }\n    70% {\n        transform: rotate(0deg);\n    }\n    80% {\n        transform: rotate(-5deg);\n    }\n    100% {\n        transform: rotate(0deg);\n    }\n}\n@keyframes swing {\n    0% {\n        transform: rotate(0deg);\n    }\n    10% {\n        transform: rotate(10deg);\n    }\n    30% {\n        transform: rotate(0deg);\n    }\n    40% {\n        transform: rotate(-10deg);\n    }\n    50% {\n        transform: rotate(0deg);\n    }\n    60% {\n        transform: rotate(5deg);\n    }\n    70% {\n        transform: rotate(0deg);\n    }\n    80% {\n        transform: rotate(-5deg);\n    }\n    100% {\n        transform: rotate(0deg);\n    }\n}\n@-webkit-keyframes sonar {\n    0% {\n        transform: scale(0.9);\n        opacity: 1;\n    }\n    100% {\n        transform: scale(2);\n        opacity: 0;\n    }\n}\n@keyframes sonar {\n    0% {\n        transform: scale(0.9);\n        opacity: 1;\n    }\n    100% {\n        transform: scale(2);\n        opacity: 0;\n    }\n}\nbody[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n}\n.page-wrapper.toggled[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%] {\n    left: 0px;\n}\n@media screen and (min-width: 768px) {\n    .page-wrapper.toggled[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%] {\n        padding-left: 320px;\n    }\n}\n.sidebar-wrapper[_ngcontent-%COMP%] {\n    width: 280px;\n    height: 100%;\n    max-height: 100%;\n    position: fixed;\n    top: 0;\n    z-index: 999;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    list-style-type: none;\n    padding: 0;\n    margin: 0;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    text-decoration: none;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-brand[_ngcontent-%COMP%] {\n    padding: 10px 20px;\n    display: flex;\n    align-items: center;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-brand[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n    font-weight: bold;\n    flex-grow: 1;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-brand[_ngcontent-%COMP%]   #close-sidebar[_ngcontent-%COMP%] {\n    cursor: pointer;\n    font-size: 20px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] {\n    padding: 20px;\n    overflow: hidden;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .user-pic[_ngcontent-%COMP%] {\n    float: left;\n    width: 60px;\n    height: 60px;\n    padding: 2px;\n    margin-right: 15px;\n    overflow: hidden;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .user-pic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    -o-object-fit: cover;\n       object-fit: cover;\n    height: 100%;\n    width: 100%;\n    border-radius: 20px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n    float: left;\n    margin-top: 10px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] {\n    display: block;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-role[_ngcontent-%COMP%] {\n    font-size: 12px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-status[_ngcontent-%COMP%] {\n    font-size: 11px;\n    margin-top: 4px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 8px;\n    margin-right: 4px;\n    color: #5cb85c;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] {\n    padding: 10px 20px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%] {\n    padding-bottom: 10px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-size: 14px;\n    padding: 15px 20px 5px 20px;\n    display: inline-block;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 100%;\n    text-decoration: none;\n    position: relative;\n    padding: 8px 30px 8px 20px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    margin-right: 10px;\n    font-size: 12px;\n    width: 30px;\n    height: 30px;\n    line-height: 30px;\n    text-align: center;\n    border-radius: 4px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover > i[_ngcontent-%COMP%]::before {\n    display: inline-block;\n    -webkit-animation: swing ease-in-out 0.5s 1 alternate;\n            animation: swing ease-in-out 0.5s 1 alternate;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:after {\n    font-family: \"Font Awesome 5 Free\";\n    font-weight: 900;\n    content: \"\\f105\";\n    font-style: normal;\n    display: inline-block;\n    font-style: normal;\n    font-variant: normal;\n    text-rendering: auto;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-align: center;\n    background: 0 0;\n    position: absolute;\n    right: 15px;\n    top: 14px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    padding: 5px 0;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding-left: 25px;\n    font-size: 13px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n    content: \"\\f111\";\n    font-family: \"Font Awesome 5 Free\";\n    font-weight: 400;\n    font-style: normal;\n    display: inline-block;\n    text-align: center;\n    text-decoration: none;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    margin-right: 10px;\n    font-size: 8px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span.label[_ngcontent-%COMP%], .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span.badge[_ngcontent-%COMP%] {\n    float: right;\n    margin-top: 8px;\n    margin-left: 5px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%], .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n    float: right;\n    margin-top: 0px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%] {\n    display: none;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown.active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:after {\n    transform: rotate(90deg);\n    right: 17px;\n}\n.sidebar-footer[_ngcontent-%COMP%] {\n    position: absolute;\n    padding: 10px;\n    bottom: 0;\n    width: 100%;\n    bottom: 0;\n    display: flex;\n    margin-top: 10px;\n}\n.sidebar-footer[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\n    flex-grow: 1;\n    text-align: center;\n    height: 30px;\n    line-height: 30px;\n    position: relative;\n}\n.sidebar-footer[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%] {\n    font-size: 0.6rem;\n    position: absolute;\n    top: 0;\n}\n.badge-sonar[_ngcontent-%COMP%] {\n    display: inline-block;\n    background: #980303;\n    border-radius: 50%;\n    height: 8px;\n    width: 8px;\n    position: absolute;\n    top: 0;\n}\n.badge-sonar[_ngcontent-%COMP%]:after {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    border: 2px solid #980303;\n    opacity: 0;\n    border-radius: 50%;\n    width: 100%;\n    height: 100%;\n    -webkit-animation: sonar 1.5s infinite;\n            animation: sonar 1.5s infinite;\n}\n.page-content[_ngcontent-%COMP%] {\n    margin-top: 50px;\n    margin-left: 300px;\n}\n@media (max-width: 991.98px) {\n    .sidebar-wrapper[_ngcontent-%COMP%] {\n        margin-left: -300px;\n    }\n    .page-content[_ngcontent-%COMP%] {\n        margin-left: 0;\n    }\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n    width: 5px;\n    height: 7px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-button {\n    width: 0px;\n    height: 0px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    background: #525965;\n    border: 0px none #ffffff;\n    border-radius: 0px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n    background: #525965;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:active {\n    background: #525965;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n    background: transparent;\n    border: 0px none #ffffff;\n    border-radius: 50px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-track:hover {\n    background: transparent;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-track:active {\n    background: transparent;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-corner {\n    background: transparent;\n}\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%] {\n    background: #31353D;\n}\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #3a3f48;\n}\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n    border-color: transparent;\n    box-shadow: none;\n}\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-role[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-status[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-brand[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\n    color: #818896;\n}\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown.active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-brand[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover, .chiller-theme[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n    color: #b8bfce;\n}\n.page-wrapper.chiller-theme.toggled[_ngcontent-%COMP%]   #close-sidebar[_ngcontent-%COMP%] {\n    color: #bdbdbd;\n}\n.page-wrapper.chiller-theme.toggled[_ngcontent-%COMP%]   #close-sidebar[_ngcontent-%COMP%]:hover {\n    color: #ffffff;\n}\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before, .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%]:focus + span[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    color: #38baa2;\n    text-shadow: 0px 0px 10px rgba(22, 199, 255, 0.5);\n}\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n    background: #3a3f48;\n}\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    color: #6c7b88;\n    font-size: 0.8rem;\n}\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%] {\n    background: #3a3f48;\n    box-shadow: 0px -1px 5px #282c33;\n    border-top: 1px solid #464a52;\n}\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:first-child {\n    border-left: none;\n}\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:last-child {\n    border-right: none;\n}\n.ant-layout[_ngcontent-%COMP%] {\n    display: flex;\n    flex: auto;\n    flex-direction: column;\n    min-height: 0;\n    background: #f0f2f5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixTQUFTO0lBQ1QsVUFBVTtBQUNkO0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztBQUNmO0FBRUE7SUFDSTtRQUNJLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSx1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLHlCQUF5QjtJQUM3QjtJQUNBO1FBQ0ksdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSx1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSx1QkFBdUI7SUFDM0I7QUFDSjtBQTVCQTtJQUNJO1FBQ0ksdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSx3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0kseUJBQXlCO0lBQzdCO0lBQ0E7UUFDSSx1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSx3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLHVCQUF1QjtJQUMzQjtBQUNKO0FBRUE7SUFDSTtRQUNJLHFCQUFxQjtRQUNyQixVQUFVO0lBQ2Q7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQixVQUFVO0lBQ2Q7QUFDSjtBQVRBO0lBQ0k7UUFDSSxxQkFBcUI7UUFDckIsVUFBVTtJQUNkO0lBQ0E7UUFDSSxtQkFBbUI7UUFDbkIsVUFBVTtJQUNkO0FBQ0o7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksU0FBUztBQUNiO0FBRUE7SUFDSTtRQUNJLG1CQUFtQjtJQUN2QjtBQUNKO0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsTUFBTTtJQUNOLFlBQVk7QUFDaEI7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsU0FBUztBQUNiO0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0FBQ25CO0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksb0JBQWlCO09BQWpCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtBQUM5QjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxxQkFBcUI7SUFDckIscURBQTZDO1lBQTdDLDZDQUE2QztBQUNqRDtBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixtQ0FBbUM7SUFDbkMsa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0FBQ2I7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsbUNBQW1DO0lBQ25DLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsV0FBVztBQUNmO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFNBQVM7SUFDVCxXQUFXO0lBQ1gsU0FBUztJQUNULGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsTUFBTTtBQUNWO0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixNQUFNO0FBQ1Y7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCx5QkFBeUI7SUFDekIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHNDQUE4QjtZQUE5Qiw4QkFBOEI7QUFDbEM7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0FBQ0o7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxjQUFjO0lBQ2QsaURBQWlEO0FBQ3JEO0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxubGkge1xuICAgIGRpc3BsYXk6IHRhYmxlO1xufVxudWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxubGkgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDYwcHg7XG59XG5cbkBrZXlmcmFtZXMgc3dpbmcge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIDEwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcbiAgICB9XG4gICAgMzAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIDQwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICA2MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTtcbiAgICB9XG4gICAgNzAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIDgwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBzb25hciB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbn1cblxuYm9keSB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5wYWdlLXdyYXBwZXIudG9nZ2xlZCAuc2lkZWJhci13cmFwcGVyIHtcbiAgICBsZWZ0OiAwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLnBhZ2Utd3JhcHBlci50b2dnbGVkIC5wYWdlLWNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMyMHB4O1xuICAgIH1cbn1cblxuLnNpZGViYXItd3JhcHBlciB7XG4gICAgd2lkdGg6IDI4MHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogOTk5O1xufVxuXG4uc2lkZWJhci13cmFwcGVyIHVsIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5zaWRlYmFyLXdyYXBwZXIgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWJyYW5kIHtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWJyYW5kPmEge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZmxleC1ncm93OiAxO1xufVxuXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWJyYW5kICNjbG9zZS1zaWRlYmFyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWhlYWRlciB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWhlYWRlciAudXNlci1waWMge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItaGVhZGVyIC51c2VyLXBpYyBpbWcge1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWhlYWRlciAudXNlci1pbmZvIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWhlYWRlciAudXNlci1pbmZvPnNwYW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWhlYWRlciAudXNlci1pbmZvIC51c2VyLXJvbGUge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1oZWFkZXIgLnVzZXItaW5mbyAudXNlci1zdGF0dXMge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG59XG5cbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItaGVhZGVyIC51c2VyLWluZm8gLnVzZXItc3RhdHVzIGkge1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIGNvbG9yOiAjNWNiODVjO1xufVxuXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLXNlYXJjaD5kaXYge1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cblxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5oZWFkZXItbWVudSBzcGFuIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogMTVweCAyMHB4IDVweCAyMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IHVsIGxpIGEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDhweCAzMHB4IDhweCAyMHB4O1xufVxuXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgdWwgbGkgYSBpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgdWwgbGkgYTpob3Zlcj5pOjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBhbmltYXRpb246IHN3aW5nIGVhc2UtaW4tb3V0IDAuNXMgMSBhbHRlcm5hdGU7XG59XG5cbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSAuc2lkZWJhci1kcm9wZG93bj5hOmFmdGVyIHtcbiAgICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBjb250ZW50OiBcIlxcZjEwNVwiO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtdmFyaWFudDogbm9ybWFsO1xuICAgIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IDAgMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDE1cHg7XG4gICAgdG9wOiAxNHB4O1xufVxuXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24gLnNpZGViYXItc3VibWVudSB1bCB7XG4gICAgcGFkZGluZzogNXB4IDA7XG59XG5cbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSAuc2lkZWJhci1kcm9wZG93biAuc2lkZWJhci1zdWJtZW51IGxpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24gLnNpZGViYXItc3VibWVudSBsaSBhOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGYxMTFcIjtcbiAgICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgZm9udC1zaXplOiA4cHg7XG59XG5cbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSB1bCBsaSBhIHNwYW4ubGFiZWwsIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSB1bCBsaSBhIHNwYW4uYmFkZ2Uge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duIC5zaWRlYmFyLXN1Ym1lbnUgbGkgYSAuYmFkZ2UsIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSAuc2lkZWJhci1kcm9wZG93biAuc2lkZWJhci1zdWJtZW51IGxpIGEgLmxhYmVsIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLnNpZGViYXItc3VibWVudSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duLmFjdGl2ZT5hOmFmdGVyIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgcmlnaHQ6IDE3cHg7XG59XG5cbi5zaWRlYmFyLWZvb3RlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvdHRvbTogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5zaWRlYmFyLWZvb3Rlcj5hIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zaWRlYmFyLWZvb3Rlcj5hIC5ub3RpZmljYXRpb24ge1xuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG59XG5cbi5iYWRnZS1zb25hciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQ6ICM5ODAzMDM7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGhlaWdodDogOHB4O1xuICAgIHdpZHRoOiA4cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbn1cblxuLmJhZGdlLXNvbmFyOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOTgwMzAzO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBhbmltYXRpb246IHNvbmFyIDEuNXMgaW5maW5pdGU7XG59XG5cbi5wYWdlLWNvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDMwMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcbiAgICAuc2lkZWJhci13cmFwcGVyIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0zMDBweDtcbiAgICB9XG4gICAgLnBhZ2UtY29udGVudCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDVweDtcbiAgICBoZWlnaHQ6IDdweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci1idXR0b24ge1xuICAgIHdpZHRoOiAwcHg7XG4gICAgaGVpZ2h0OiAwcHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6ICM1MjU5NjU7XG4gICAgYm9yZGVyOiAwcHggbm9uZSAjZmZmZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzUyNTk2NTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjphY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICM1MjU5NjU7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMHB4IG5vbmUgI2ZmZmZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjazphY3RpdmUge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIge1xuICAgIGJhY2tncm91bmQ6ICMzMTM1M0Q7XG59XG5cbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItaGVhZGVyLCAuY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLXNlYXJjaCwgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzNhM2Y0ODtcbn1cblxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1zZWFyY2ggaW5wdXQuc2VhcmNoLW1lbnUsIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItc2VhcmNoIC5pbnB1dC1ncm91cC10ZXh0IHtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItaGVhZGVyIC51c2VyLWluZm8gLnVzZXItcm9sZSwgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1oZWFkZXIgLnVzZXItaW5mbyAudXNlci1zdGF0dXMsIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItc2VhcmNoIGlucHV0LnNlYXJjaC1tZW51LCAuY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLXNlYXJjaCAuaW5wdXQtZ3JvdXAtdGV4dCwgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1icmFuZD5hLCAuY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgdWwgbGkgYSwgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItZm9vdGVyPmEge1xuICAgIGNvbG9yOiAjODE4ODk2O1xufVxuXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgdWwgbGk6aG92ZXI+YSwgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duLmFjdGl2ZT5hLCAuY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWhlYWRlciAudXNlci1pbmZvLCAuY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWJyYW5kPmE6aG92ZXIsIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLWZvb3Rlcj5hOmhvdmVyIGkge1xuICAgIGNvbG9yOiAjYjhiZmNlO1xufVxuXG4ucGFnZS13cmFwcGVyLmNoaWxsZXItdGhlbWUudG9nZ2xlZCAjY2xvc2Utc2lkZWJhciB7XG4gICAgY29sb3I6ICNiZGJkYmQ7XG59XG5cbi5wYWdlLXdyYXBwZXIuY2hpbGxlci10aGVtZS50b2dnbGVkICNjbG9zZS1zaWRlYmFyOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciB1bCBsaTpob3ZlciBhIGksIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItZHJvcGRvd24gLnNpZGViYXItc3VibWVudSBsaSBhOmhvdmVyOmJlZm9yZSwgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1zZWFyY2ggaW5wdXQuc2VhcmNoLW1lbnU6Zm9jdXMrc3BhbiwgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duLmFjdGl2ZSBhIGkge1xuICAgIGNvbG9yOiAjMzhiYWEyO1xuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgyMiwgMTk5LCAyNTUsIDAuNSk7XG59XG5cbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSB1bCBsaSBhIGksIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSAuc2lkZWJhci1kcm9wZG93biBkaXYsIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItc2VhcmNoIGlucHV0LnNlYXJjaC1tZW51LCAuY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLXNlYXJjaCAuaW5wdXQtZ3JvdXAtdGV4dCB7XG4gICAgYmFja2dyb3VuZDogIzNhM2Y0ODtcbn1cblxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5oZWFkZXItbWVudSBzcGFuIHtcbiAgICBjb2xvcjogIzZjN2I4ODtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjM2EzZjQ4O1xuICAgIGJveC1zaGFkb3c6IDBweCAtMXB4IDVweCAjMjgyYzMzO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNDY0YTUyO1xufVxuXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci1mb290ZXI+YTpmaXJzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG5cbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLWZvb3Rlcj5hOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbn1cblxuLmFudC1sYXlvdXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogYXV0bztcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1pbi1oZWlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZDogI2YwZjJmNTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return [{ type: _services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/Authentication/authentication.service */ "6q8g");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
// import { MDBBootstrapModule } from 'angular-bootstrap-md';






class AppComponent {
    constructor(formBuilder, // Creating an instance of Formbuilder
    authService, // Instance of Authentication services created in front end
    router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.isShown = false;
        this.title = 'MyAsasa AGENT DASHBOARD Real Estate';
        // registerForm: FormGroup;
        this.loading = false;
        this.submitted = false;
    }
    // tslint:disable-next-line: use-lifecycle-interface
    ngOnInit() {
        this.initialize();
        // this.router.navigate(['profile']);
    }
    // tslint:disable-next-line: typedef
    isLogin() {
        const token = this.authService.getToken();
        // console.log(token);
        return token;
        // if (token) {
        //   return true;
        // }
        // else {
        //   return false;
        // }
    }
    // tslint:disable-next-line: typedef
    logout() {
        localStorage.removeItem('token');
        this.router.navigateByUrl('/');
    }
    // tslint:disable-next-line: typedef
    initialize() {
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]]
        });
    }
    // tslint:disable-next-line: typedef
    get email() {
        return this.loginForm.get('email');
    }
    // tslint:disable-next-line: typedef
    loginUser() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        // console.log('user login data: ',this.loginForm.value);
        this.authService.login(this.loginForm.value).subscribe(data => {
            console.log(data);
            const status = data.status;
            const msg = data.msg;
            console.log('Status: ' + status);
            console.log('Message: ' + msg);
            if (status) {
            }
            else {
                alert('Invalid email or password!');
            }
        });
    }
    // getting input labels values from user end (login.html)
    // tslint:disable-next-line: typedef
    get f() { return this.loginForm.controls; }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [".mb-3[_ngcontent-%COMP%], .my-3[_ngcontent-%COMP%] {\n    margin-left: 17px;\n}\n\na[_ngcontent-%COMP%] {\n    color: #38baa2;\n}\n\nh2[_ngcontent-%COMP%] {\n    color: #38baa2;\n    font-weight: 600;\n    text-align: center;\n    margin-top: -10px;\n}\n\ninput[_ngcontent-%COMP%] {\n    margin-left: 15px;\n    border: 2px solid #0000001a !important;\n    border-radius: 50rem!important;\n}\n\ni[_ngcontent-%COMP%]:before {\n    position: relative;\n    top: 30%;\n    font-size: 22px;\n    color: #38bba3;\n    margin-right: 1px;\n}\n\n.word[_ngcontent-%COMP%] {\n    color: #38baa2;\n    letter-spacing: 1px;\n    padding: 20 px;\n    font: bold 14px arial, sans-serif;\n    \n}\n\n.emailInput[_ngcontent-%COMP%] {\n    margin-left: 12px;\n}\n\n.input-field[_ngcontent-%COMP%] {\n    margin-left: 20px;\n    width: 100%;\n    padding: 10px;\n    text-align: center;\n}\n\n.input-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    position: absolute;\n}\n\n.input-container[_ngcontent-%COMP%] {\n    \n    display: flex;\n    width: 100%;\n    margin-bottom: 15px;\n}\n\n.a[_ngcontent-%COMP%] {\n    text-align: left;\n}\n\n.vl[_ngcontent-%COMP%] {\n    border-left: 2.2px solid #38baa2;\n    height: 250px;\n    margin-left: 22px;\n}\n\n.v2[_ngcontent-%COMP%] {\n    margin-top: 40px;\n    color: #38baa2;\n    font-weight: 900;\n}\n\n.login[_ngcontent-%COMP%] {\n    height: auto;\n    min-height: 100vh;\n}\n\n\n\n\n\n\n\n\n\n.btn[_ngcontent-%COMP%] {\n    margin-left: 40px;\n    width: 100px;\n    font-size: 14px;\n    background-color: #38baa2;\n    color: white;\n    border: 1px solid transparent;\n}\n\n.left-img[_ngcontent-%COMP%] {\n    width: 45%;\n    margin-left: 80px;\n}\n\n.inputs[_ngcontent-%COMP%] {\n    margin-left: 15px;\n}\n\n.left[_ngcontent-%COMP%] {\n    margin-top: 145px;\n}\n\n.right[_ngcontent-%COMP%] {\n    margin-top: 160px;\n}\n\n.input-area1[_ngcontent-%COMP%] {\n    margin-left: 20px;\n}\n\n.head[_ngcontent-%COMP%] {\n    font-family: Arial, Helvetica, sans-serif;\n    \n    color: #38baa2;\n    \n    margin-left: 0px;\n    margin-top: 3px;\n    margin-bottom: 0px;\n}\n\n.more-items[_ngcontent-%COMP%] {\n    margin-left: 0px;\n}\n\n.bg-dark[_ngcontent-%COMP%] {\n    \n    \n    background-color: black!important;\n    \n}\n\n.nav-link[_ngcontent-%COMP%] {\n    color: whitesmoke;\n}\n\n.navbar[_ngcontent-%COMP%] {\n    background-color: #38baa2;\n}\n\n.btn[_ngcontent-%COMP%] {\n    width: 120px;\n    font-size: 14px;\n    background-color: #38baa2;\n    color: white;\n    border: 1px solid transparent;\n}\n\nbody[_ngcontent-%COMP%] {\n    overflow-x: hidden;\n}\n\n#sidebar-wrapper[_ngcontent-%COMP%] {\n    min-height: 100vh;\n    margin-left: -15rem;\n    transition: margin .25s ease-out;\n}\n\n#sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-heading[_ngcontent-%COMP%] {\n    padding: 0.875rem 1.25rem;\n    font-size: 1.2rem;\n}\n\n#sidebar-wrapper[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%] {\n    width: 15rem;\n}\n\n#page-content-wrapper[_ngcontent-%COMP%] {\n    min-width: 100vw;\n}\n\n#wrapper.toggled[_ngcontent-%COMP%]   #sidebar-wrapper[_ngcontent-%COMP%] {\n    margin-left: 0;\n}\n\n@media (min-width: 768px) {\n    #sidebar-wrapper[_ngcontent-%COMP%] {\n        margin-left: 0;\n    }\n    #page-content-wrapper[_ngcontent-%COMP%] {\n        min-width: 0;\n        width: 100%;\n    }\n    #wrapper.toggled[_ngcontent-%COMP%]   #sidebar-wrapper[_ngcontent-%COMP%] {\n        margin-left: -15rem;\n    }\n}\n\n.btn[_ngcontent-%COMP%] {\n    width: 100px;\n    font-size: 14px;\n    background-color: #38baa2;\n    color: white;\n    border: 1px solid transparent;\n}\n\n.button[_ngcontent-%COMP%] {\n    height: 5 0px;\n    width: 100px;\n    font-size: 14px;\n    background-color: #38baa2;\n    color: white;\n    border: 1px solid transparent;\n}\n\nsection[_ngcontent-%COMP%] {\n    display: table;\n}\n\n.example-label[_ngcontent-%COMP%] {\n    display: table-cell;\n    font-size: 14px;\n    margin-left: 8px;\n    min-width: 120px;\n}\n\n.example-button-row[_ngcontent-%COMP%] {\n    display: table-cell;\n    width: 490px;\n}\n\n.example-button-row[_ngcontent-%COMP%]   .mat-button-base[_ngcontent-%COMP%] {\n    margin: 8px 8px 8px 0;\n}\n\n.example-flex-container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n}\n\n.example-button-container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    width: 120px;\n}\n\n\n\ninput[_ngcontent-%COMP%] {\n    border: 2px solid #0000001a !important;\n    border-radius: 50rem!important;\n}\n\ni[_ngcontent-%COMP%]:before {\n    position: relative;\n    top: 30%;\n    font-size: 22px;\n    color: #38bba3;\n    margin-right: 1px;\n}\n\n.word[_ngcontent-%COMP%] {\n    color: #38baa2;\n    letter-spacing: 1px;\n    padding: 20 px;\n    font: bold 14px arial, sans-serif;\n    \n}\n\n.emailInput[_ngcontent-%COMP%] {\n    margin-left: 12px;\n}\n\n.input-field[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 10px;\n    text-align: center;\n}\n\n.input-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    position: absolute;\n}\n\n.input-container[_ngcontent-%COMP%] {\n    \n    display: flex;\n    width: 100%;\n    margin-bottom: 15px;\n}\n\n.a[_ngcontent-%COMP%] {\n    text-align: left;\n}\n\n.vl[_ngcontent-%COMP%] {\n    border-left: 2.2px solid #38baa2;\n    height: 250px;\n    margin-left: 1px;\n}\n\n.v2[_ngcontent-%COMP%] {\n    margin-top: 40px;\n    color: #38baa2;\n    font-weight: bold;\n}\n\n.login[_ngcontent-%COMP%] {\n    height: auto;\n    min-height: 100vh;\n}\n\n\n\n\n\n\n\n\n\n.left-img[_ngcontent-%COMP%] {\n    width: 45%;\n    margin-left: 80px;\n}\n\n.inputs[_ngcontent-%COMP%] {\n    margin-left: 15px;\n}\n\n.left[_ngcontent-%COMP%] {\n    margin-top: 145px;\n}\n\n.right[_ngcontent-%COMP%] {\n    margin-top: 160px;\n}\n\n.input-area1[_ngcontent-%COMP%] {\n    margin-left: 20px;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n    margin-left: -200px;\n    width: 880px\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixzQ0FBc0M7SUFDdEMsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixlQUFlO0lBQ2YsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGlDQUFpQztJQUNqQyx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFFSSxTQUFTO0lBQ1QsYUFBYTtJQUNiLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFHQTs7Ozs7Ozs7b3VRQVFvdVE7O0FBR3B1USxxQkFBcUI7O0FBR3JCO2dCQUNnQjs7QUFHaEI7O0dBRUc7O0FBRUg7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMscUNBQXFDO0lBQ3JDLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMseUNBQXlDO0lBQ3pDLGlDQUFpQztJQUNqQyxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUluQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLFlBQVk7UUFDWixXQUFXO0lBQ2Y7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUdBOzs7OztLQUtLOztBQUVMO0lBQ0ksc0NBQXNDO0lBQ3RDLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsZUFBZTtJQUNmLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxpQ0FBaUM7SUFDakMsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFFSSxTQUFTO0lBQ1QsYUFBYTtJQUNiLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFHQTs7Ozs7Ozs7c3VRQVFzdVE7O0FBR3R1USxxQkFBcUI7O0FBR3JCO21CQUNtQjs7QUFHbkI7O0tBRUs7O0FBRUw7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYi0zLFxuLm15LTMge1xuICAgIG1hcmdpbi1sZWZ0OiAxN3B4O1xufVxuXG5hIHtcbiAgICBjb2xvcjogIzM4YmFhMjtcbn1cblxuaDIge1xuICAgIGNvbG9yOiAjMzhiYWEyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuXG5pbnB1dCB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDFhICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTByZW0haW1wb3J0YW50O1xufVxuXG5pOmJlZm9yZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMzAlO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBjb2xvcjogIzM4YmJhMztcbiAgICBtYXJnaW4tcmlnaHQ6IDFweDtcbn1cblxuLndvcmQge1xuICAgIGNvbG9yOiAjMzhiYWEyO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgcGFkZGluZzogMjAgcHg7XG4gICAgZm9udDogYm9sZCAxNHB4IGFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIC8qIGJhY2tncm91bmQ6LiAjZmZmOyAqL1xufVxuXG4uZW1haWxJbnB1dCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG5cbi5pbnB1dC1maWVsZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbnB1dC1pY29ucyBpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5pbnB1dC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIC8qIElFMTAgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5hIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udmwge1xuICAgIGJvcmRlci1sZWZ0OiAyLjJweCBzb2xpZCAjMzhiYWEyO1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIycHg7XG59XG5cbi52MiB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBjb2xvcjogIzM4YmFhMjtcbiAgICBmb250LXdlaWdodDogOTAwO1xufVxuXG4ubG9naW4ge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuXG4vKiBcbi5iZy1pbWFnZSB7ICAgIFxuICBoZWlnaHQ6IDY1MHB4OyBcbiAgd2lkdGg6IDUwMHB4OyBcbiAgbWF4LXdpZHRoOiA2NTBweDsgXG4gIG1heC1oZWlnaHQ6IDU1MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9hc2FzYTA2LnBuZyk7XG5cbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUFBQVFBQkFBRC8yd0NFQUFrR0J4QVFFQlVQRUJFV0VoQVFGUllZRlJnVkZoVVZGUmdZRlJZV0ZoY1hGaFVZSFNnZ0dCc2xHeFlWSVRFaEpTa3JMaTR1Rng4ek9ETXROeWd0TGlzQkNnb0tEZzBPR2hBUUdpMGxIeVV0TFMwdExTMHRLeTB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExmL0FBQkVJQU9FQTRRTUJFUUFDRVFFREVRSC94QUFiQUFFQUFnTUJBUUFBQUFBQUFBQUFBQUFBQlFZQkJBY0RBdi9FQUVRUUFBSUJBZ0lHQlFnSEJ3TUZBUUFBQUFBQkFnTVJCQ0VGQmhJeFFWRWlZWEdSc1JNeU5GTnlnWkxSRkJVV002SEI4Q05TWW5PQ3N1RUhvc0kxUWtPajhTVC94QUFiQVFFQUFnTUJBUUFBQUFBQUFBQUFBQUFBQVFNQ0JBVUdCLy9FQURJUkFRQUNBUU1EQVFZRkF3VUJBQUFBQUFBQkFnTUVFUklGSVRGQkZCVXlNMUdCRXlKaGNiRkNVcEVqTktIUjhFUC8yZ0FNQXdFQUFoRURFUUEvQU80Z0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBR0d3TUtWOXdSRTcrSDBFZ0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFIek9TU2Jic2xtMjl5Q0ptSWp1b21zdXNqclhvMFcxU1dVbnhuOG8rSmJXcmc2M1hjNTRVOE5QUU9uNTRaN0x2T2k5OGVLNjQvSW0xZDFPazFsc003V25lSFFjSGk0VllLcFRrcFJmNnMrVEt0dG5vY2VTdVNPVlh1aUZqSUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQkJhM1l5cFJ3KzFUbHN5YzRxNjMyemY1R1ZZaHBhN0pmSGkzckttZlgrTDlmUDhQa1c4SWNUMjNQOEEzU3MycUdsS2xTRldWZXBkUXM3eXNyS3p2bjdpdTBPcG9OUmUxYlRrbndodFpOWVhpSDVPbmxSWHVjK3Q4bDFHVmE3TkxXYTJjczhhK1A1UUJtNW9FcERRK2xxbUdudFFkNHZ6b3ZkTDVQckltTjJ4cDlWZkRiZXJvbWl0SjA4UkRicHZ0WEdMNVA1bE14czlIaHowelYzcTNTRjdJQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUN1YTllakwrWkh3a1owOHVkMVA1S2dGcnozNlBSVnBLTGdtMUdUVGE0TnJkZm1ObVVYdEZlTVQyZVlZQVNBQU5uQVkycFFtcWxPVnBMdWE1TmNVUk1icmNPVzJLM0tyb1dndE9VOFRITG8xVXVsQnY4VnpSVk5kbm90TnE2NW8vVkxtTGJBQUFBQUFBQUFBQUFBQUFBQUFBQUFBS3hyM1dqNUNNTHJhYzAwdU5rbmQvaVowY3pxZDRqRnhVUXRjQUFBQUFBQUI2VWEwb1NVNFNjWlIzTmJ5Tm1WTDJwTzhMN3E3ckhIRVdwMU9qVy9DWFd1dnFLN1YyZWcwbXVybC9MYnlzQ01IUVpBQUFBQUFBQUFBQUFBQUFBQUFBQ0IxaDFpaGgraEMwNjNMaEhybDhqT3RkMmhxOWJYRitXTzhxQmljUk9ySnpxUzJwUzN0L3JKRmtSczgva3lXdlBLenlKWWRtNW83UmxiRU8xS043YjN1aXUxL2tSTTdMc09tdmwrRmFzRHFYVFdkYW81UGxIb3g3OS9nWVRlWFd4ZExySHh5bHFlcm1FaXJlUlQ3YnZ4TWVVdHVORmdqK2xtZXJ1RWVYa1lyc3VoeWxNNkxCUDlNSXpHNm1VWG5TbktENVBwUi9IUDhTWXZMVnk5THBQd1RzcXVsZERWc00vMmtlandrczR2NVB0TTR0RXVWbjBtWEY1anQ5VWVaTlpsTzJheWFCRXpIZGM5WE5aOXExSEVPMHNsR2ZCOVV1VDZ5dTFYYjBldmkzNU1ubGJVeXQxbVFrQUFBQUFBQUFBQUFBQUFBeGNDcDZ4NjBLTjZPSGQ1WnFVMXVYVkhtK3NzclZ5ZFpyNHIrVEgvbFM1U2JkMjd0NzI4Miswc2NPWm1aM2xnQ2ExZDBGTEV5MnBYalJpODMrOS9ESDVtTnAyYjJqMGs1cDNudzZGaGNOQ25GUWhGUml0eVJUTDBOTWRhUnRXSHJjTXk0UVhDUUQ0cTBveVRqSktVV3JOTlhUWEpvUkxHMVl0RzB3b2VzK3Iza1AydEs3b3Q1cmU0ZjRMYTIzY0hXNkw4UDhBUFh3cnBtNW9DRm4xZDFtZE8xS3U3MCtFdU1lcDgxNEZkcXVybzlmTmZ5WlBDOFFxS1NUVFRUM05idmNWdTVGb21ONGZZU0FBQUFBQUFBQUFBQUFBb2VzbXNzcWpsUm90eHBxNms5MHBXeWE2a1dWcTRXczEwMm5oVHRDc2xqbEFHMW96QlNyMVkwbzc1UE44a3MyKzRpWjJXNE1VNWNrVmgxSEI0YU5LRWFjRmFNVlpmTXBtWHFzZU9NZFlyVjdHTXl5UmVOMG5zNVEzWHR0V3YzTGlhR1hXOTVyajd5MThtZmo0UXRER1ZxbUlxVUt1Y1lyYVRVbm1ycEs2VmtuMkRVemFOUFhOVzA3ejVqWm9Zczk3NXJZcmVuZnRLSDFnMG5WcFRVc0hWbEtWTzdxeGkzS0NXOU9TV1M0bTkwdU1sNlRHbzdiK0phK3F6elMrK0czZjFoSWFwYTVWTVE1UXJ3Vm9XNlVkK2U2OGVQYXU0djF0Y2VtNHhOdkxaMFhVTFpPMTQrNjZRbGRYVHVudUthekV4dkRyYmxTbXBKeGtyeGFzMDl6VEpSTVJNYlM1anA3UnJ3MVowLzhBdGVjSC9DL3pWbWkrdHQzbU5YZy9CeWJlbm9qaVdyMkFuejJUZXIrc004TTlpZDVVWHZYR1BYSDVHRnE3dC9TYTIyS2VOdThmdzZKU3FLU1VsdWtrMTJNcWVpck1XamVIMkVnQUFBQUFBQUFBQUFBYWs5RzBHN3VsQnQ3M3N4SjNsVk9ESFBvcG11K0hoVHEwMUNDaW5CMzJVbHg2aXlqaTlUcFd0cTdRclptNWk0Nmc0VEtwWGUrK3d1NVNmaWl1OHV6MHJIMm0vd0Jsd0szWlJtbHNUYTFOY2MzMmN2MXlPWDFIVVRTc1VqMVVaYi8wb2VqbytQbHBWM0tUVGpzN0w4MWRpL1c5bWxYVlgvQmpEV0kzMzgrclNycDYvaWZpek03YmVGWDA1V1ZHdDVYRDFHdktKM3o2U2FzbW1ubnllWjYvcDlaellZcG5yNDJlZTFreGh6ODhOdktyMTViN2NUcXpXUEVOV2src3JGcW5DRWwreG5zeTJXcTBaSmRKMnZDY003cXpmdnR3UEo5YnZhSjQzNy8ydTVvNnhOZDYvZGVkQll6Wmw1R1R1cGViMnJmYnQzblA2ZHFabVp4ejQ5SFcwK1R2eGxZRWRsdXExcjFoTnFncXZHbEpkMG5ieHNaMG51NW5VOGUrUG45RkRMWmNCT2FuMEl6eE96T0trdGlXVFNhNGNHWTI4TjdwMWEyeTdUOUY2K3JLSHFZZkRINUZXOHU5R0RINlEyNG9oYkhaa0pBQUFBQUFBQUFBQUFBd0JSOWYvdmFmc1B4TGFPSDFYNHFxc1p1UzZKcVpDMkVqL0ZLVC93QnpYZ2tVMzh2U2RQamJEQ2RaaTNsUDBucGFuQ2RXclVsc3hoVTJIdmVhc2xrY1RWNlhObTFQR3NidVhsejFyYVpzcW1zdXNEcXlWS20ycVNTZVQ4NjltcnJoYmtkL28vVEs0YTg4a2IyL2h4OWZxN1pKNDBuc2dKMXowRGxSU1dwV3FrVEs2bFZ4MVowZlVsZzNDbzNDRlNlMUhaeW5zOUYrZHdUYTNXNTh6eGZXTlpTdXAzckcrMGJmbzdtbHhUK0YzYmVBcFY2TmVNcFNqVXB3bmVEZDFVVWNuYmE0dDduek5LdXB3MnRXYTlwM2pmNlNzcE0wdkV1a283cnRvM1dTQ2VFcko4SU45MmE4REt2bHJhdXUrRzBPWUY3eXFmMUk5TC9vbDR4TUwrSFI2Wjg3N09obFQwUUFBQUFBQUFBQUFBQUFBQmdDajYvL0FIdFAySDRsdFBEaDlWK0txckdia3VpYWwxTDRTUDhBREtTZmZmd2FLYmVYbytuMjN3UW5XWXQvMWNqMXZ4Y3NMajYwWlFWU2xVbENwc3l5ejJVOXBQdHV2Y2JrYVNNK09MVm5hMGRubTlWTTQ4OXF6NDh0VEFhTGxpNmNuU3FRY0l2Wmg1UlNjMWtuYVUwc3JKcmRkTTFNL1VhNk85WXlWbmYxVlYwMDVZbmpLSTB0byt0aG5hckd5YmFqSk84Wlc1UDVuVTB2VU1PcGplay9aclgwMXNmeElxclZOdWZCV2pwT0IxaHcwcU5OK1ZqRjdNWTdNbWxKTkpLelI4KzFtZzFFWnJmbG1YWHJraWE3UTNLYThwVWhEOTZjVmx5dXJ2dXV6UzBzVGJQV052VkZQelpJaGZrZXQ4TzRqOVlQUmEzOHVYZ1pWOHFOVDhxMzdPWEY3eWF3YWtlbC93QkV2R0poZnc2UFRQbmZaMElxZWlBQUFBQUFBQUFBQUFBQUFNQVVmWC83Mm43RDhTMm5odytxL0ZWVmpOeVZ3MUJ4aVhsS0RlL3BydVNsNElydkRzOUt5K2FTdUpXN0NsLzZrNnZQRTBWWHBSdlZvM3VsdmxEamJtMXY3emIwdWJoYmpMbWRSMDAzcnpyNWorSFA5Vk5ZRmhtNkZYS25LVjFMZlp1eXo2c2thblcrbTJ6eEdhbm1JLzRjN1Q1ZGwzeE02Y29OVlZGdzQ3Vm12eFBJWWI1SzMvMDk5MjFONnpIZHlUUytKcHlyVkhTaW9VOXJvcFpxeXl1dTIxL2VmUk5KVzljTll5VHZMVW1zYjlqUW1GbFd4RUlyS3oybStTam4rVnZlVTlTenhnMDlwbi8yNlkyaDI3VlRSN2xMNlRKZEZLMVBydnZsMld5WGF6elBTOU5OWW5KYU84K0hTME9HZCtkdnN0UjEzVFIrc0hvdGIrWEx3SnI1VWFuNVZ2MmN1TDNsRTlxVS93RDlhNjRTL0ova1lYOE9oMHo1MzJkRUtub2dBQUFBQUFBQUFBQUFBQURBRkgxLys5cCt3L0V0cDRjUHF2eFZWWXpjbHM2UHhrcU5XTldPK0Q3MXVhOTZ1Uk1icmNPV2NkNHREcUdCeGNLMU9OU0R2R1M3dWFmV1V6RzB2VTRzbGNsWXREWWFJV0tQclgvcDdTeExkWER0VWFqemNiZENUNTVlYSt6L0FDYmVMVlRTTnJkNGN6VWRQaTA4c2ZhZitGWDFoMEZwTjRlTkIwWlN0bE53NmUyb3BXYTJjKzI2M21ocE5KaHhhcTJXZkUrUDBhVnNPYW5hYS80N3E3ZzlSZElWWFpZYWNldWEyRi91c2QyMm94VjlXTk1XYTNpcy9mczZGcWgvcDJzTmVlSm1wdVZyd2l1ajJTbHZhNmxiM25NMVY2WjVqZVBEZndhQ1lubGsvd0FML0dLU3Nza2lsMG84TWhLUDFnOUZyZnk1ZUJOZktqVS9LdCt6bHhlOG9uZFMvUzQrekx3TUwrRy8wMzUzMmRGS25vd0FBQUFBQUFBQUFBQUFBREFGSDEvKytwK3cvRXRwNGNQcXZ4VlZZemNrQ0pTMnIrbTU0V2ZHVktUNlVmemoxK0pqYXU3ZDBtcm5EUDZPaDRQR1FyUVZTbkpTaS8xWjhtVlREMFdQTFhKRzlHd1FzQUFBRDRxMVZGWGswbHplUVJNeEhsOW9DUDFnOUZyZnk1ZUJOZktuVS9LdCt6bHhlOG9uZFMvUzQrekx3TUwrRy8wejUzMmRGS25vd0FBQUFBQUFBQUFBQUFBREFGRzEvZjdhbjdEL0FMaTJqaGRWK09xcm1ibEFBSWJPQngxV2hMYnBTY1h4NVB0WEVpWTNYWWMxOFU3MGxhTURycXJXcjA4K2NOM3d2NW1FMGRYRjFXUC9BS1IvaEswdGFzRzk5UnhmWENmaWxZeDRTMjQ2aGduMWZVOWFjR3YvQUMzN0lUK1E0eVRyOEVmMWZ5ak1icnBCSzFHbTVQblBKZHl6TW9vMWNuVmFSMnBDdFlyUzFXdlVqS3JPOFl5VHNzb3JQZ3V6M21YSGJ3NTF0VmZKZUp2UGJkZWxyTmcvWEw0Wi9JcjR5N250MkNQNnY1YWVtZFlNTFV3OVdFS3FjcFFra3RtV2JhNjBURlozVlo5Wmh0am1JbFFTMTU1TzZsK2x4OW1YZ1lYOE4vcG56dnM2S1ZQUmdBQUFBQUFBQUFBQUFBQUdBS3JyYm9hdlhxUW5TaXBKUnM4MHJPOStQYitCWldZaHl0ZnBjbVcwVFZBL1pmRityWHhJeTVRNS91L1A5RDdMNHYxYStKRGxCN3Z6L1JuN0xZejFhK0tJNXduM2RuK2g5bHNYNnRmRkVjNFI3dXpmUmo3TDR2MWErS0k1d2U3czMwWit5Mkw5V3ZpUTVRZTdzLzBQc3ZpL1ZyNGtPVUh1N1A4QVJqN0w0djFhK0pEbWU3OC8wWit5K005V3ZpUTVRZTdzL3dCR1BzdmkvVnI0b2psQjd2ei9BRVBzdmkvVnI0a09jSHUvUDlEN0w0djFhK0pEbkNmZCtiNkpiVmpRV0lvNGhWS2tWR0tqSmIwODMyR05yUTI5RHBNbUxKeXQ0WE1yZGxnRElHQU1nQUFBQUFBK1p5U1YyN0pjOXdSTTdOQmFid3JlejVlRiszOHllTXFQYXNNenR5aHZ4ZDh5RjhUdjRhbUwwcFFwUFpxVll4Zkp2TW5hVlY4K09rN1dtSGg5ZjRUMThPOGNaWWUxNFA3b2JlRHh0S3NuS2xOVFNkbTF6STJtRnRNbGI5Nnp1eGk5SVVxUDN0U01MN3J2UHVKMm1VWHpVcDhjN0dFeDlLdDkxVWpPMit6L0FDR3lhWnFYK0NkM3ZVcUtLY3BOS0t6YmVTUkhkbmFZckc4by93Q3Y4SjYrSGVUeGxyKzE0UEhPR1lhZHdyYVNyUWJic3MrTEhHVXhxc016dEZvYjhwcEs3ZGtzMnlPNi9mYU4yaXRONFhhMmZMd3YyL21UeGxSN1ZoMzI1UTM0dSthM0VMNG5ka0phK0x4MUtrcjFKeGhmbTdkdzJWM3kwcDhVN1BuQ2FSbzF2dTZrWnRjRTgrNG5hVVV6VXY4QURMYVpDMW80alRHSHB5Mloxb0tTM3ErWk8wcUxhbkZXZHJXaHRVSzhaeDJvU1VvdmluZEJiVzhXamVyTmFyR0NjcE5SaXQ3YnN1OGd0YUt4dkxWd3VsYUZXV3pUcXhsTGtubVRNU3JwcU1kNTJyYmQ5WXZTVkdpN1Zha1lOOEc4KzRSRXB2bng0NTJ0Ylo3NGJFUXFSMm9TVW92aW5jaG5TOWJSdlY2aGtBQUFBQ202MDFxbUl4TWNGQjJqbHRjbTJyNTgwbG1XVjdkM0gxdDdaTTBZYXR5ZXB1SDJObFNtcDI4NXRiK3VOcldJNXp1dG5wbUxqMjMzYStwMktxUXFWTUhOMzhuZlo2bkYyYVhWdVpOb2p5cjBHUzliV3hXOUVKaGxoM2lLdjAxeWowbnUydDkzdjJWZmRheGwzMjdOT3Y0YzViZmpUc2tWUzBQdThwTC9BTnkvNG1QNW14RmREL2QvUC9TZHAwNk9Ed3RTclF6aFp6V2JrbTdXV2ZMY1k5NW51M3ExcGd3emFuaEE2QTBIOU0yc1RpSlNlMUoyU2RtMnNtMitYQ3k1R1UyMjdORFM2WDJqZkxrOVdOTzZIK2hPT0p3OG1rcFdzODdOOWZGUGRZUmJmc2FuVGV5LzZtT1d6cmJpcFZjSFJxUnVvVkxPYTYzRzZUOTkvd0FCWHRLelg1TFh3VnRFK2ZMVHcxUFJPeEhiblBic3RxNnE3K1BteHQzRXp5VTByb3VNVGEzZi93QitpUjBYbzdSdFdhOGpKdWNYZEp5bkY1WjdwSlhNWm0yelp3WWRKZVk0Uzh0YTY5U3RpSVlLRHRHVnRycmJ6ejVwSlhzVFh0M1lhNjlzbVNNTU50Nm00ZlkyVktlMys5ZGIvWnRheEhPZDF2dXpIeDI3N3RiVS9FMUtkV3BnNmp2c1hjZXF6U2FYVTdwazIrcXZRWkxVdk9HM290R01ycW5UblVlNkVaU2Y5S2IvQUNNSWRUSmJoV2JmU0ZMMEpvcDQrYzhSaUpQWnZheWU5NzdKOElwTXptZU1PTHA5UDdWYWNtU1VuWDFRaXBxcGg2c3Fiam5uMHJQbW52N3lPYmFucHNSYUxZNTJldXRta0tsSER4Z3BmdEt2UmNvNVpKZEpybC9rVmplV1d1eld4WW9yRTk1YTJpOVVhVHBLVlp5YzVxN3M3Slh6eTVpYks4UFRxVFhlL2xwWWVuUFIrTmpTVW5LbFd0djRwdHBOL3dBU1pNL21oUlNMYVhVUlgwbHM2ZGpQRjR5T0VVdG1uQlhsYnN1MzF1MWt1MFY3UnV0MU1XejU0eGVJaDg2YzFacDBhVHJVSEtNcVZtN3U5N2NWeVlyYmZzalU2Q3VPblBIUGVIbnEvb0tPS2pMRTRpVXBPY25aSjJ2Yks3ZmJkVzZoYTJ6RFM2U004VGt5UytzSlFlQXgwYVVaTjBxOWxudnp5VjdjVStQSmp6REtsWjB1b2lrVHZFcm1pdDJXUUFBQUJUdGFhRlNoaVk0Mm5HOGN0cmttbGJQa21zaXl2alp4OWJTK1BMR2FzTnFldWREeWUwb3kyN2ViYksvdGJyRWNKV3oxUEZ4M2p5aXRUNnpuakoxSmVkT001UDN5VFpsYU96VTZmZWJaN1duOVc5ajlLYU1xeWNxa0c1ckp2WmttN1padGJ6R0lzdnk2alIzbVp0SGY5a2ZqcStqSFRrcWNKcXBibzVTV2ZEZTdHVWN0KzdYeTMwYzFuanZ1a2RXc0hPcmdLbE9XU3FPWGs3MzVLejdOb3htWWlXem84ZHJhYWF6NitHbm9IVGYwUGF3MkloS0tqSnROTE5YNFc0cDcweWJSdjNVNmJVK3pmNldTSGpyUHJCSEV4VktrbnNKM2JlVGJ6dFpjaWExMllhM1d4bGpqWHdtNkdQb1VzRlFqaUZlRlNDVnRuYVRzdUtNZHBtZXplcm14WThGSXllc0l6NlRvajFjdTZmekoyczFmeE5GTFFUcFN4bEw2SEdTVjQ3NzcwM3RQUE8yenZKNzdkMUVjTGFpdjRLVjFxdzlTamlJWTJtcnFOdHJxY2VmSk5PMXlLekcyemIxdU8yUExHYXJiZXVWRFkybEdXM2J6YldWL2EzRWNWazlVeDhkL1ZFYW80aDFNYktwUHpwUW0zNzNFeXQ0YW1odk5zODJzcytIMGpSeHNLdEttM2xGeGxkVzg5U1dYY3l2YloxSzVxWjYyclg5bGEwTHBTV0FuUEQ0aUwyYjN1bHgzWFM0eGFNNWprNW1uenpwYlRqeVIyU0dKMXQycHhwNFdrNmpsKzlkZHlYaUlwOVd4YnFISzBWeFJ1Mk5hdEhWSytIakpLOVdsMG1vNTcxMGxIOWNDS3p0S3pXNGJaTVVXOVlhMmk5YnFTcHFOZFNqT0t0a3JwMjhCTlZXSHFOSzAyeWRwYVdIblBTR01qVlVYR2pTdHY0S0xja3ZhYko4UXByTnRWcUl0dCtXRzlnLytyVlBZL3dDTVNKK0Zmai8zcy9zbXRZUFJhdnNNeHI1YnVyK1RiOW1ycWg2SkQrcis1azJWNkQ1TUk3V1AwL0M5c2Y3MFpWOFMxdFgvQUxqSCs2MWxicXNnQUFHR0JpVVUxWnE2WktKaUpob3JRMkdUdXFGTy9QWlE1S1kwK1BmZUloNjBkSFVZVGRTTk9NWnl2ZHBadSs4YnNxNEtWbmVJZUQwRGhIbjVDSGNPVXE1MG1HZjZSYUJ3bnFJZHc1U1JwTU1UOEtRakZKV1NzbHVSRFlpSWp0RFh4V0FwVmZ2S2NaMjNiU1RKM21HRjhWTGZGRHorcU1OczdIa1liTGQydGxMTkRsTEQyZkZ0dHhmVlhSbENjWTA1VW91RlB6VTFrdXdiekNiWU1kb2lzeDRlSDFCaFBVUTdoeWxoN0poL3RiR0UwZFJwTzlPbkdEZTlwWjk0bVpsWmp3NDhmd3cyWEZOV2F1bnpJV2JieDNhWDFOaGI3WGtLZC9aUlBLVlBzK0xmZmpEMHBhUG93bTZrYWNWTjVOcFo1LzhBd2J5eXJneDF0dkVkMmNKZ0tWRzdwVTR3MjdiVmxhOXIydjN2dkV6dW5IaXBUZmpHMjc2eFdDcFZWYXBUak5MOTVKaUptQytLbC9pamQ4NFhSOUdsOTNUakMvSkpQdkV6TW9waHgwK0dHelloYTBxMmljUE9UbE9qQ1VueGNVMlR5bFRPREhNN3pFTm1qUWpCYk1JcU1Wd1NzaU4xbGF4V05vaDV4d1ZKVkhXVUVxajN5NHYzazdzWXhVaTNMYnU5YTFLTTR1RWxlTXNtbnVhSVpXckZvbUpmT0d3OEtjVkNFVkdLM0piaVVWcEZJMnErSytCcFRuR3BLQ2M0ZWEzdlhISWJvdGlyYVltZk1OZ2hZeUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQWYvWicpOyAqL1xuXG5cbi8qIHBvc2l0aW9uOiBmaXhlZDsgKi9cblxuXG4vKiB3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlOyAqL1xuXG5cbi8qIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59ICovXG5cbi5idG4ge1xuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4YmFhMjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5sZWZ0LWltZyB7XG4gICAgd2lkdGg6IDQ1JTtcbiAgICBtYXJnaW4tbGVmdDogODBweDtcbn1cblxuLmlucHV0cyB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5sZWZ0IHtcbiAgICBtYXJnaW4tdG9wOiAxNDVweDtcbn1cblxuLnJpZ2h0IHtcbiAgICBtYXJnaW4tdG9wOiAxNjBweDtcbn1cblxuLmlucHV0LWFyZWExIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmhlYWQge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIC8qIGZvbnQtc2l6ZS1hZGp1c3Q6IDQwMCAxNHB4LzMwcHg7ICovXG4gICAgY29sb3I6ICMzOGJhYTI7XG4gICAgLyogZm9udC13ZWlnaHQ6IDcwMDsgKi9cbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5tb3JlLWl0ZW1zIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4uYmctZGFyayB7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MCFpbXBvcnRhbnQ7ICovXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzBkNmI5MiFpbXBvcnRhbnQ7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2shaW1wb3J0YW50O1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmZmYhaW1wb3J0YW50OyAqL1xufVxuXG4ubmF2LWxpbmsge1xuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4ubmF2YmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzhiYWEyO1xufVxuXG4uYnRuIHtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOGJhYTI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG5ib2R5IHtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbiNzaWRlYmFyLXdyYXBwZXIge1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTVyZW07XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXJnaW4gLjI1cyBlYXNlLW91dDtcbiAgICAtbW96LXRyYW5zaXRpb246IG1hcmdpbiAuMjVzIGVhc2Utb3V0O1xuICAgIC1vLXRyYW5zaXRpb246IG1hcmdpbiAuMjVzIGVhc2Utb3V0O1xuICAgIHRyYW5zaXRpb246IG1hcmdpbiAuMjVzIGVhc2Utb3V0O1xufVxuXG4jc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWhlYWRpbmcge1xuICAgIHBhZGRpbmc6IDAuODc1cmVtIDEuMjVyZW07XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbiNzaWRlYmFyLXdyYXBwZXIgLmxpc3QtZ3JvdXAge1xuICAgIHdpZHRoOiAxNXJlbTtcbn1cblxuI3BhZ2UtY29udGVudC13cmFwcGVyIHtcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xufVxuXG4jd3JhcHBlci50b2dnbGVkICNzaWRlYmFyLXdyYXBwZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAjc2lkZWJhci13cmFwcGVyIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuICAgICNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XG4gICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgICN3cmFwcGVyLnRvZ2dsZWQgI3NpZGViYXItd3JhcHBlciB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTVyZW07XG4gICAgfVxufVxuXG4uYnRuIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOGJhYTI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4uYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDUgMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4YmFhMjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbnNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4uZXhhbXBsZS1sYWJlbCB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xufVxuXG4uZXhhbXBsZS1idXR0b24tcm93IHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHdpZHRoOiA0OTBweDtcbn1cblxuLmV4YW1wbGUtYnV0dG9uLXJvdyAubWF0LWJ1dHRvbi1iYXNlIHtcbiAgICBtYXJnaW46IDhweCA4cHggOHB4IDA7XG59XG5cbi5leGFtcGxlLWZsZXgtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5leGFtcGxlLWJ1dHRvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEyMHB4O1xufVxuXG5cbi8qIGgye1xuICAgIGNvbG9yOiAjMzhiYWEyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIH0gKi9cblxuaW5wdXQge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDAwMDAxYSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcmVtIWltcG9ydGFudDtcbn1cblxuaTpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDMwJTtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgY29sb3I6ICMzOGJiYTM7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcHg7XG59XG5cbi53b3JkIHtcbiAgICBjb2xvcjogIzM4YmFhMjtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIHBhZGRpbmc6IDIwIHB4O1xuICAgIGZvbnQ6IGJvbGQgMTRweCBhcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAvKiBiYWNrZ3JvdW5kOi4gI2ZmZjsgKi9cbn1cblxuLmVtYWlsSW5wdXQge1xuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxuXG4uaW5wdXQtZmllbGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW5wdXQtaWNvbnMgaSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uaW5wdXQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAvKiBJRTEwICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uYSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnZsIHtcbiAgICBib3JkZXItbGVmdDogMi4ycHggc29saWQgIzM4YmFhMjtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxcHg7XG59XG5cbi52MiB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBjb2xvcjogIzM4YmFhMjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmxvZ2luIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cblxuLyogXG4gIC5iZy1pbWFnZSB7ICAgIFxuICAgIGhlaWdodDogNjUwcHg7IFxuICAgIHdpZHRoOiA1MDBweDsgXG4gICAgbWF4LXdpZHRoOiA2NTBweDsgXG4gICAgbWF4LWhlaWdodDogNTUwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvYXNhc2EwNi5wbmcpO1xuICBcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRQUFBUUFCQUFELzJ3Q0VBQWtHQnhBUUVCVVBFQkVXRWhBUUZSWVlGUmdWRmhVVkZSZ1lGUllXRmhjWEZoVVlIU2dnR0JzbEd4WVZJVEVoSlNrckxpNHVGeDh6T0RNdE55Z3RMaXNCQ2dvS0RnME9HaEFRR2kwbEh5VXRMUzB0TFMwdEt5MHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TGYvQUFCRUlBT0VBNFFNQkVRQUNFUUVERVFIL3hBQWJBQUVBQWdNQkFRQUFBQUFBQUFBQUFBQUFCUVlCQkFjREF2L0VBRVFRQUFJQkFnSUdCUWdIQndNRkFRQUFBQUFCQWdNUkJDRUZCaEl4UVZFaVlYR1JzUk15TkZOeWdaTFJGQlVXTTZIQjhDTlNZbk9Dc3VFSG9zSTFRa09qOFNUL3hBQWJBUUVBQWdNQkFRQUFBQUFBQUFBQUFBQUFBUU1DQkFVR0IvL0VBRElSQVFBQ0FRTURBUVlGQXdVQkFBQUFBQUFCQWdNRUVSSUZJVEZCRkJVeU0xR0JFeUpoY2JGQ1VwRWpOS0hSOEVQLzJnQU1Bd0VBQWhFREVRQS9BTzRnQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFHR3dNS1Y5d1JFNytIMEVnQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUh6T1NTYmJzbG0yOXlDSm1JanVvbXN1c2pyWG8wVzFTV1VueG44bytKYldyZzYzWGM1NFU4TlBRT241NFo3THZPaTk4ZUs2NC9JbTFkMU9rMWxzTTdXbmVIUWNIaTRWWUtwVGtwUmY2cytUS3R0bm9jZVN1U09WWHVpRmpJQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCQmEzWXlwUncrMVRsc3ljNHE2MzJ6ZjVHVllocGE3SmZIaTNyS21mWCtMOWZQOFBrVzhJY1QyM1A4QTNTczJxR2xLbFNGV1ZlcGRRczd5c3JLenZuN2l1ME9wb05SZTFiVGtud2h0Wk5ZWGlINU9ubFJYdWMrdDhsMUdWYTdOTFdhMmNzOGErUDVRQm01b0VwRFErbHFtR250UWQ0dnpvdmRMNVBySW1OMnhwOVZmRGJlcm9taXRKMDhSRGJwdnRYR0w1UDVsTXhzOUhoejB6VjNxM1NGN0lBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQ3VhOWVqTCtaSHdrWjA4dWQxUDVLZ0ZyejM2UFJWcEtMZ20xR1RUYTROcmRmbU5tVVh0RmVNVDJlWVlBU0FBTm5BWTJwUW1xbE9WcEx1YTVOY1VSTWJyY09XMkszS3JvV2d0T1U4VEhMbzFVdWxCdjhWelJWTmRub3ROcTY1by9WTG1MYkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFLeHIzV2o1Q01McmFjMDB1TmtuZC9pWjBjenFkNGpGeFVRdGNBQUFBQUFBQjZVYTBvU1U0U2NaUjNOYnlObVZMMnBPOEw3cTdySEhFV3AxT2pXL0NYV3V2cUs3VjJlZzBtdXJsL0xieXNDTUhRWkFBQUFBQUFBQUFBQUFBQUFBQUFDQjFoMWloaCtoQzA2M0xoSHJsOGpPdGQyaHE5YlhGK1dPOHFCaWNST3JKenFTMnBTM3QvckpGa1JzOC9reVd2UEt6eUpZZG01bzdSbGJFTzFLTjdiM3VpdTEva1JNN0xzT212bCtGYXNEcVhUV2RhbzVQbEhveDc5L2dZVGVYV3hkTHJIeHlscWVybUVpcmVSVDdidnhNZVV0dU5GZ2orbG1lcnVFZVhrWXJzdWh5bE02TEJQOU1Jekc2bVVYblNuS0Q1UHBSL0hQOFNZdkxWeTlMcFB3VHNxdWxkRFZzTS8ya2Vqd2tzNHY1UHRNNHRFdVZuMG1YRjVqdDlVZVpOWmxPMmF5YUJFekhkYzlYTlo5cTFIRU8wc2xHZkI5VXVUNnl1MVhiMGV2aTM1TW5sYlV5dDFtUWtBQUFBQUFBQUFBQUFBQUF4Y0NwNng2MEtONk9IZDVacVUxdVhWSG0rc3NyVnlkWnI0citUSC9sUzVTYmQyN3Q3MjgyKzBzY09abVozbGdDYTFkMEZMRXkycFhqUmk4Mys5L0RINW1OcDJiMmowazVwM253NkZoY05DbkZRaEZSaXR5UlRMME5NZGFSdFdIcmNNeTRRWENRRDRxMG95VGpKS1VXck5OWFRYSm9STEcxWXRHMHdvZXMrcjNrUDJ0SzdvdDVyZTRmNExhMjNjSFc2TDhQOEFQWHdycG01b0NGbjFkMW1kTzFLdTcwK0V1TWVwODE0RmRxdXJvOWZOZnlaUEM4UXFLU1RUVFQzTmJ2Y1Z1NUZvbU40ZllTQUFBQUFBQUFBQUFBQUFvZXNtc3NxamxSb3R4cHE2azkwcFd5YTZrV1ZxNFdzMTAybmhUdENzbGpsQUcxb3pCU3IxWTBvNzVQTjhrczIrNGlaMlc0TVU1Y2tWaDFIQjRhTktFYWNGYU1WWmZNcG1YcXNlT01kWXJWN0dNeXlSZU4wbnM1UTNYdHRXdjNMaWFHWFc5NXJqN3kxOG1majRRdERHVnFtSXFVS3VjWXJhVFVubXJwSzZWa24yRFV6YU5QWE5XMDd6NWpab1lzOTc1cllyZW5mdEtIMWcwblZwVFVzSFZsS1ZPN3F4aTNLQ1c5T1NXUzRtOTB1TWw2VEdvN2IrSmErcXp6UysrRzNmMWhJYXBhNVZNUTVRcndWb1c2VWQrZTY4ZVBhdTR2MXRjZW00eE52TFowWFVMWk8xNCs2NlFsZFhUdW51S2F6RXh2RHJibFNtcEp4a3J4YXMwOXpUSlJNUk1iUzVqcDdScncxWjAvOEF0ZWNIL0MvelZtaSt0dDNtTlhnL0J5YmVub2ppV3IyQW56MlRlcitzTThNOWlkNVVYdlhHUFhINUdGcTd0L1NhMjJLZU51OGZ3NkpTcUtTVWx1a2sxMk1xZWlyTVdqZUgyRWdBQUFBQUFBQUFBQUFhazlHMEc3dWxCdDczc3hKM2xWT0RIUG9wbXUrSGhUcTAxQ0NpbkIzMlVseDZpeWppOVRwV3RxN1FyWm01aTQ2ZzRUS3BYZSsrd3U1U2ZpaXU4dXowckgybS93Qmx3SzNaUm1sc1RhMU5jYzMyY3YxeU9YMUhVVFNzVWoxVVpiLzBvZWpvK1BscFYzS1RUanM3TDgxZGkvVzltbFhWWC9CakRXSTMzOCtyU3JwNi9pZml6TTdiZUZYMDVXVkd0NVhEMUd2S0ozejZTYXNtbW5ueWVaNi9wOVp6WVlwbnI0MmVlMWt4aHo4OE52S3IxNWI3Y1RxeldQRU5XaytzckZxbkNFbCt4bnN5MldxMFpKZEoydkNjTTdxemZ2dHdQSjlidmFKNDM3LzJ1NW82eE5kNi9kZWRCWXpabDVHVHVwZWIycmZidDNuUDZkcVptWnh6NDlIVzArVHZ4bFlFZGx1cTFyMWhOcWdxdkdsSmQwbmJ4c1owbnU1blU4ZStQbjlGRExaY0JPYW4wSXp4T3pPS2t0aVdUU2E0Y0dZMjhON3AxYTJ5N1Q5RjYrcktIcVlmREg1Rlc4dTlHREg2UTI0b2hiSFprSkFBQUFBQUFBQUFBQUF3QlI5Zi92YWZzUHhMYU9IMVg0cXFzWnVTNkpxWkMyRWovRktUL3dCelhna1UzOHZTZFBqYkRDZFppM2xQMG5wYW5DZFdyVWxzeGhVMkh2ZWFzbGtjVFY2WE5tMVBHc2J1WGx6MXJhWnNxbXN1c0RxeVZLbTJxU1NlVDg2OW1ycmhia2Qvby9USzRhODhrYjIvaHg5ZnE3Wko0MG5zZ0oxejBEbFJTV3BXcWtUSzZsVngxWjBmVWxnM0NvM0NGU2UxSFp5bnM5Ritkd1RhM1c1OHp4ZldOWlN1cDNyRyswYmZvN21seFQrRjNiZUFwVjZOZU1wU2pVcHduZURkMVVVY25iYTR0N256Tkt1cHcydFdhOXAzamY2U3NwTTB2RXVrbzdydG8zV1NDZUVySjhJTjkyYThES3ZscmF1dStHME9ZRjd5cWYxSTlML29sNHhNTCtIUjZaODc3T2hsVDBRQUFBQUFBQUFBQUFBQUFCZ0NqNi8vQUh0UDJINGx0UERoOVYrS3FyR2JrdWlhbDFMNFNQOEFES1NmZmZ3YUtiZVhvK24yM3dRbldZdC8xY2oxdnhjc0xqNjBaUVZTbFVsQ3BzeXl6MlU5cFB0dXZjYmthU00rT0xWbmEwZG5tOVZNNDg5cXo0OHRUQWFMbGk2Y25TcVFjSXZaaDVSU2Mxa25hVTBzckpyZGRNMU0vVWE2TzlZeVZuZjFWVjAwNVluaktJMHRvK3RobmFyR3liYWpKTzhaVzVQNW5VMHZVTU9wamVrL1pyWDAxc2Z4SXFyVk51ZkJXanBPQjFodzBxTk4rVmpGN01ZN01tbEpOSkt6UjgrMW1nMUVacmZsbVhYcmtpYTdRM0thOHBVaEQ5NmNWbHl1cnZ1dXpTMHNUYlBXTnZWRlB6WkloZmtldDhPNGo5WVBSYTM4dVhnWlY4cU5UOHEzN09YRjd5YXdha2VsL3dCRXZHSmhmdzZQVFBuZlowSXFlaUFBQUFBQUFBQUFBQUFBQU1BVWZYLzcybjdEOFMybmh3K3EvRlZWak55VncxQnhpWGxLRGUvcHJ1U2w0SXJ2RHM5S3krYVN1Slc3Q2wvNms2dlBFMFZYcFJ2Vm8zdWx2bERqYm0xdjd6YjB1YmhiakxtZFIwMDNyenI1aitIUDlWTllGaG02RlhLbktWMUxmWnV5ejZza2FuVyttMnp4R2FubUkvNGM3VDVkbDN4TTZjb05WVkZ3NDdWbXZ4UElZYjVLMy8wOTkyMU42ekhkeVRTK0pweXJWSFNpb1U5cm9wWnF5eXV1MjEvZWZSTkpXOWNOWXlUdkxVbXNiOWpRbUZsV3hFSXJLejJtK1NqbitWdmVVOVN6eGcwOXBuLzI2WTJoMjdWVFI3bEw2VEpkRksxUHJ2dmwyV3lYYXp6UFM5Tk5ZbkphTzgrSFMwT0dkK2R2c3RSMTNUUitzSG90YitYTHdKcjVVYW41VnYyY3VMM2xFOXFVL3dEOWE2NFMvSi9rWVg4T2gwejUzMmRFS25vZ0FBQUFBQUFBQUFBQUFBREFGSDEvKzlwK3cvRXRwNGNQcXZ4VlZZemNsczZQeGtxTldOV08rRDcxdWE5NnVSTWJyY09XY2Q0dERxR0J4Y0sxT05TRHZHUzd1YWZXVXpHMHZVNHNsY2xZdERZYUlXS1ByWC9wN1N4TGRYRHRVYWp6Y2JkQ1Q1NWVhK3ovQUNiZUxWVFNOcmQ0Y3pVZFBpMDhzZmFmK0ZYMWgwRnBONGVOQjBaU3RsTnc2ZTJvcFdhMmMrMjYzbWhwTkpoeGFxMldmRStQMGFWc09hbmFhLzQ3cTdnOVJkSVZYWllhY2V1YTJGL3VzZDIyb3hWOVdOTVdhM2lzL2ZzNkZxaC9wMnNOZWVKbXB1VnJ3aXVqMlNsdmE2bGIzbk0xVjZaNWplUERmd2FDWW5say93QUwvR0tTc3NraWwwbzhNaEtQMWc5RnJmeTVlQk5mS2pVL0t0K3pseGU4b25kUy9TNCt6THdNTCtHLzAzNTMyZEZLbm93QUFBQUFBQUFBQUFBQUFEQUZIMS8rK3Ardy9FdHA0Y1BxdnhWVll6Y2tDSlMycittNTRXZkdWS1Q2VWZ6ajErSmphdTdkMG1ybkRQNk9oNFBHUXJRVlNuSlNpLzFaOG1WVEQwV1BMWEpHOUd3UXNBQUFENHExVkZYazBsemVRUk14SGw5b0NQMWc5RnJmeTVlQk5mS25VL0t0K3pseGU4b25kUy9TNCt6THdNTCtHLzB6NTMyZEZLbm93QUFBQUFBQUFBQUFBQUFEQUZHMS9mN2FuN0QvQUxpMmpoZFYrT3FybWJsQUFJYk9CeDFXaExicFNjWHg1UHRYRWlZM1hZYzE4VTcwbGFNRHJxcldyMDgrY04zd3Y1bUUwZFhGMVdQL0FLUi9oSzB0YXNHOTlSeGZYQ2ZpbFl4NFMyNDZoZ24xZlU5YWNHdi9BQzM3SVQrUTR5VHI4RWYxZnlqTWJycEJLMUdtNVBuUEpkeXpNb28xY25WYVIycEN0WXJTMVd2VWpLck84WXlUc3NvclBndXozbVhIYnc1MXRWZkplSnZQYmRlbHJOZy9YTDRaL0lyNHk3bnQyQ1A2djVhZW1kWU1MVXc5V0VLcWNwUWtrdG1XYmE2MFRGWjNWWjlaaHRqbUlsUVMxNTVPNmwrbHg5bVhnWVg4Ti9wbnp2czZLVlBSZ0FBQUFBQUFBQUFBQUFBR0FLcnJib2F2WHFRblNpcEpSczgwck85K1BiK0JaV1loeXRmcGNtVzBUVkEvWmZGK3JYeEl5NVE1L3UvUDlEN0w0djFhK0pEbEI3dnovUm43TFl6MWErS0k1d24zZG4raDlsc1g2dGZGRWM0Ujd1emZSajdMNHYxYStLSTV3ZTdzMzBaK3kyTDlXdmlRNVFlN3MvMFBzdmkvVnI0a09VSHU3UDhBUmo3TDR2MWErSkRtZTc4LzBaK3krTTlXdmlRNVFlN3Mvd0JHUHN2aS9WcjRvamxCN3Z6L0FFUHN2aS9WcjRrT2NIdS9QOUQ3TDR2MWErSkRuQ2ZkK2I2SmJWalFXSW80aFZLa1ZHS2pKYjA4MzJHTnJRMjlEcE1tTEp5dDRYTXJkbGdESUdBTWdBQUFBQUErWnlTVjI3SmM5d1JNN05CYWJ3cmV6NWVGKzM4eWVNcVBhc016dHlodnhkOHlGOFR2NGFtTDBwUXBQWnFWWXhmSnZNbmFWVjgrT2s3V21IaDlmNFQxOE84Y1pZZTE0UDdvYmVEeHRLc25LbE5UU2RtMXpJMm1GdE1sYjk2enV4aTlJVXFQM3RTTUw3cnZQdUoybVVYelVwOGM3R0V4OUt0OTFVak8yK3ovQUNHeWFacVgrQ2QzdlVxS0tjcE5LS3piZVNSSGRuYVlyRzhvL3dDdjhKNitIZVR4bHIrMTRQSE9HWWFkd3JhU3JRYmJzcytMSEdVeHFzTXp0Rm9iOHBwSzdka3MyeU82L2ZhTjJpdE40WGEyZkx3djIvbVR4bFI3VmgzMjVRMzR1K2EzRUw0bmRrSmErTHgxS2tyMUp4aGZtN2R3MlYzeTBwOFU3UG5DYVJvMXZ1NmtadGNFOCs0bmFVVXpVdjhBRExhWkMxbzRqVEdIcHkyWjFvS1MzcStaTzBxTGFuRldkcldodFVLOFp4Mm9TVW92aW5kQmJXOFdqZXJOYXJHQ2NwTlJpdDdic3U4Z3RhS3h2TFZ3dWxhRldXelRxeGxMa25tVE1TcnBxTWQ1MnJiZDlZdlNWR2k3VmFrWU44RzgrNFJFcHZueDQ1MnRiWjc0YkVRcVIyb1NVb3ZpbmNoblM5YlJ2VjZoa0FBQUFDbTYwMXFtSXhNY0ZCMmpsdGNtMnI1ODBsbVdWN2QzSDF0N1pNMFlhdHllcHVIMk5sU21wMjg1dGIrdU5yV0k1enV0bnBtTGoyMzNhK3AyS3FRcVZNSE4zOG5mWjZuRjJhWFZ1Wk5vanlyMEdTOWJXeFc5RUpobGgzaUt2MDF5ajBudTJ0OTN2MlZmZGF4bDMyN05PdjRjNWJmalRza1ZTMFB1OHBML0FOeS80bVA1bXhGZEQvZC9QL1NkcDA2T0R3dFNyUXpoWnpXYmttN1dXZkxjWTk1bnUzcTFwZ3d6YW5oQTZBMEg5TTJzVGlKU2UxSjJTZG0yc20yK1hDeTVHVTIyN05EUzZYMmpmTGs5V05PNkgraE9PSnc4bWtwV3M4N045ZkZQZFlSYmZzYW5UZXkvNm1PV3pyYmlwVmNIUnFSdW9WTE9hNjNHNlQ5OS93QUJYdEt6WDVMWHdWdEUrZkxUdzFQUk94SGJuUGJzdHE2cTcrUG14dDNFenlVMHJvdU1UYTNmL3dCK2lSMFhvN1J0V2E4akp1Y1hkSnluRjVaN3BKWE1abTJ6WndZZEplWTRTOHRhNjlTdGlJWUtEdEdWdHJyYnp6NXBKWHNUWHQzWWE2OXNtU01NTnQ2bTRmWTJWS2UzKzlkYi9adGF4SE9kMXZ1ekh4Mjc3dGJVL0UxS2RXcGc2anZzWGNlcXpTYVhVN3BrMitxdlFaTFV2T0czb3RHTXJxblRuVWU2RVpTZjlLYi9BQ01JZFRKYmhXYmZTRkwwSm9wNCtjOFJpSlBadmF5ZTk3N0o4SXBNem1lTU9McDlQN1ZhY21TVW5YMVFpcHFwaDZzcWJqbm4wclBtbnY3eU9iYW5wc1JhTFk1MmV1dG1rS2xIRHhncGZ0S3ZSY281WkpkSnJsL2tWamVXV3V6V3hZb3JFOTVhMmk5VWFUcEtWWnljNXE3czdKWHp5NWliSzhQVHFUWGUvbHBZZW5QUitOalNVbktsV3R2NHB0cE4vd0FTWk0vbWhSU0xhWFVSWDBsczZkalBGNHlPRVV0bW5CWGxic3UzMXUxa3UwVjdSdXQxTVd6NTR4ZUloODZjMVpwMGFUclVIS01xVm03dTk3Y1Z5WXJiZnNqVTZDdU9uUEhQZUhucS9vS09LakxFNGlVcE9jblpKMnZiSzdmYmRXNmhhMnpEUzZTTThUa3lTK3NKUWVBeDBhVVpOMHE5bG52enlWN2NVK1BKanpES2xaMHVvaWtUdkVybWl0MldRQUFBQlR0YWFGU2hpWTQybkc4Y3Rya21sYlBrbXNpeXZqWng5YlMrUExHYXNOcWV1ZER5ZTBveTI3ZWJiSy90YnJFY0pXejFQRngzanlpdFQ2em5qSjFKZWRPTTVQM3lUWmxhT3pVNmZlYlo3V245VzlqOUthTXF5Y3FrRzVySnZaa203Wlp0YnpHSXN2eTZqUjNtWnRIZjlrZmpxK2pIVGtxY0pxcGJvNVNXZkRlN0dVY3QrN1h5MzBjMW5qdnVrZFdzSE9yZ0tsT1dTcU9YazczNUt6N05veG1ZaVd6bzhkcmFhYXo2K0dub0hUZjBQYXcySWhLS2pKdE5MTlg0VzRwNzB5YlJ2M1U2YlUremY2V1NIanJQckJIRXhWS2tuc0ozYmVUYnp0WmNpYTEyWWEzV3hsampYd202R1BvVXNGUWppRmVGU0NWdG5hVHN1S01kcG1lemVybXhZOEZJeWVzSXo2VG9qMWN1NmZ6SjJzMWZ4TkZMUVRwU3hsTDZIR1NWNDc3NzAzdFBQTzJ6dko3N2QxRWNMYWl2NEtWMXF3OVNqaUlZMm1ycU50cnFjZWZKTk8xeUt6RzJ6YjF1TzJQTEdhcmJldVZEWTJsR1czYnpiV1YvYTNFY1ZrOVV4OGQvVkVhbzRoMU1iS3BQenBRbTM3M0V5dDRhbWh2TnM4MnNzK0gwalJ4c0t0S20zbEZ4bGRXODlTV1hjeXZiWjFLNXFaNjJyWDlsYTBMcFNXQW5QRDRpTDJiM3VseDNYUzR4YU01ams1bW56enBiVGp5UjJTR0oxdDJweHA0V2s2amwrOWRkeVhpSXA5V3hicUhLMFZ4UnUyTmF0SFZLK0hqSks5V2wwbW81NzEwbEg5Y0NLenRLelc0YlpNVVc5WWEyaTlicVNwcU5kU2pPS3RrcnAyOEJOVldIcU5LMDJ5ZHBhV0huUFNHTWpWVVhHalN0djRLTGNrdmFiSjhRcHJOdFZxSXR0K1dHOWcvK3JWUFkvd0NNU0orRmZqLzNzL3NtdFlQUmF2c014cjVidXIrVGI5bXJxaDZKRCtyKzVrMlY2RDVNSTdXUDAvQzlzZjcwWlY4UzF0WC9BTGpIKzYxbGJxc2dBQUdHQmlVVTFacTZaS0ppSmhvclEyR1R1cUZPL1BaUTVLWTArUGZlSWg2MGRIVVlUZFNOT01aeXZkcFp1Kzhic3E0S1ZuZUllRDBEaEhuNUNIY09VcTUwbUdmNlJhQnducUlkdzVTUnBNTVQ4S1FqRkpXU3NsdVJEWWlJanREWHhXQXBWZnZLY1oyM2JTVEozbUdGOFZMZkZEeitxTU5zN0hrWWJMZDJ0bExORGxMRDJmRnR0eGZWWFJsQ2NZMDVVb3VGUHpVMWt1d2J6Q2JZTWRvaXN4NGVIMUJoUFVRN2h5bGg3SmgvdGJHRTBkUnBPOU9uR0RlOXBaOTRtWmxaanc0OGZ3dzJYRk5XYXVueklXYmJ4M2FYMU5oYjdYa0tkL1pSUEtWUHMrTGZmakQwcGFQb3dtNmthY1ZONU5wWjUvOEF3Ynl5cmd4MXR2RWQyY0pnS1ZHN3BVNHcyN2JWbGE5cjJ2M3Z2RXp1bkhpcFRmakcyNzZ4V0NwVlZhcFRqTkw5NUppSm1DK0tsL2lqZDg0WFI5R2w5M1RqQy9KSlB2RXpNb3BoeDArR0d6WWhhMHEyaWNQT1RsT2pDVW54Y1UyVHlsVE9ESE03ekVObWpRakJiTUlxTVZ3U3NpTjFsYXhXTm9oNXh3VkpWSFdVRXFqM3k0djNrN3NZeFVpM0xidTlhMUtNNHVFbGVNc21udWFJWldyRm9tSmZPR3c4S2NWQ0VWR0szSmJpVVZwRkkycStLK0JwVG5HcEtDYzRlYTN2WEhJYm90aXJhWW1mTU5naFl5QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBZi9aJyk7ICovXG5cblxuLyogcG9zaXRpb246IGZpeGVkOyAqL1xuXG5cbi8qIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTsgKi9cblxuXG4vKiBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIH0gKi9cblxuLmxlZnQtaW1nIHtcbiAgICB3aWR0aDogNDUlO1xuICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xufVxuXG4uaW5wdXRzIHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLmxlZnQge1xuICAgIG1hcmdpbi10b3A6IDE0NXB4O1xufVxuXG4ucmlnaHQge1xuICAgIG1hcmdpbi10b3A6IDE2MHB4O1xufVxuXG4uaW5wdXQtYXJlYTEge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4ubW9kYWwtY29udGVudCB7XG4gICAgbWFyZ2luLWxlZnQ6IC0yMDBweDtcbiAgICB3aWR0aDogODgwcHhcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "SzuG":
/*!**************************************************!*\
  !*** ./src/app/services/guards/islogin.guard.ts ***!
  \**************************************************/
/*! exports provided: IsLoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsLoginGuard", function() { return IsLoginGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Authentication/authentication.service */ "6q8g");





class IsLoginGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const token = yield this.authService.getToken();
            if (!token) {
                this.router.navigateByUrl('/');
            }
            else {
                return true;
            }
        });
    }
}
IsLoginGuard.ɵfac = function IsLoginGuard_Factory(t) { return new (t || IsLoginGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"])); };
IsLoginGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: IsLoginGuard, factory: IsLoginGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IsLoginGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "TXUV":
/*!********************************************************!*\
  !*** ./src/app/dashboard/options/options.component.ts ***!
  \********************************************************/
/*! exports provided: OptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsComponent", function() { return OptionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/Authentication/authentication.service */ "6q8g");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");







class OptionsComponent {
    constructor(formBuilder, authService, router, toastr) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.submitted = false;
    }
    formDeclare() {
        this.addoptionForm = this.formBuilder.group({
            add_newcity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            added_cities: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            add_newloc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            added_loc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            enter_newloc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            add_newtype: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            added_type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            add_newstatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            added_status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.addoptionForm.controls; }
    ngOnInit() {
        this.formDeclare();
    }
    submitForm() {
        this.submitted = true; // stop here if form is invalid
        if (this.addoptionForm.invalid) {
            this.toastr.error('Fields Empty', 'Error', {
                timeOut: 5000
            });
            console.log('Erroneous');
            return;
        }
        this.addoptionForm.reset();
        this.toastr.success('Lead Added', 'Success', {
            timeOut: 9000
        });
    }
}
OptionsComponent.ɵfac = function OptionsComponent_Factory(t) { return new (t || OptionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
OptionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OptionsComponent, selectors: [["app-options"]], decls: 185, vars: 1, consts: [[1, "register"], [1, "row"], [1, "col-md-2", "register-left"], ["src", "assets/icons/asasa.gif", "alt", ""], [1, "col-md-10", "col-sm-10", "register-right"], [1, "form-register", 3, "formGroup"], [1, "register-heading"], [1, "row", "register-form"], [1, "col-md-6", "col-sm-6"], [1, "form-group"], [1, "input-group"], ["type", "text", "formControlName", "add_newcity", "required", "", "autocomplete", "off", 1, "form-control"], ["type", "text", "formControlName", "added_cities", "list", "productName", 1, "form-control"], ["id", "productName"], ["value", "Pen"], ["value", "Pencil"], ["value", "Paper"], [1, "pull-left"], ["type", "submit", 1, "btn", "btn-primary"], [1, "pull-right"], ["type", "submit", 1, "btn", "btn-danger"], ["type", "text", "formControlName", "add_newloc", "list", "productName", 1, "form-control"], ["type", "text", "formControlName", "added_loc", "list", "productName", 1, "form-control"], ["type", "text", "formControlName", "enter_newloc", "required", "", "autocomplete", "off", 1, "form-control"], ["type", "text", "list", "productName", 1, "form-control"], [1, "col-md-12", "col-sm-12"], ["type", "text", "formControlName", "add_newtype", "required", "", "autocomplete", "off", 1, "form-control"], ["type", "text", "formControlName", "added_type", "list", "productName", 1, "form-control"], ["type", "text", "formControlName", "add_newstatus", "required", "", "autocomplete", "off", 1, "form-control"], ["type", "text", "formControlName", "added_status", "list", "productName", 1, "form-control"]], template: function OptionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Asasa Real Estate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Add New City ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Added Cities ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "datalist", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Pen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Pencil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Paper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Add City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u00A0\u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Locations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Add New Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Select City ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "datalist", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Pen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Pencil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Paper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Added Locations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Select City ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "datalist", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Pen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Pencil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Paper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Enter New Location ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Select Location ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "datalist", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Pen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Pencil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Paper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " Select Added Locations ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "datalist", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Pen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Pencil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Paper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Add Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "\u00A0\u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Property Types");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " Add New Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " Added Types ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "datalist", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Pen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Pencil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Paper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Add Property Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "\u00A0\u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Status Types");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " Add New Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, " Added Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "datalist", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Pen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Pencil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Paper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Add Status Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "\u00A0\u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addoptionForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: ["*/[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\n     display: flex;\n     justify-content: center;\n     align-items: center;\n     \n     \n }\n \n h2[_ngcontent-%COMP%] {\n     font: 200 25px/30px Scribble, \"Scribble\", Scribble;\n     color: whitesmoke;\n }\n \n html[_ngcontent-%COMP%] {\n     font-family: 'Lora', sans-serif;\n     width: 100%;\n }\n \n body[_ngcontent-%COMP%] {\n     margin: 5% auto 0 auto;\n     width: 90%;\n     max-width: 1125px;\n }\n \n h1[_ngcontent-%COMP%] {\n     font-size: 28px;\n     margin-bottom: 2.5%;\n }\n \n input[_ngcontent-%COMP%], span[_ngcontent-%COMP%], label[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n     font-family: 'Ubuntu', sans-serif;\n     display: block;\n     \n     padding: 12px;\n     border: none;\n     font-size: 14px;\n }\n \n textarea[_ngcontent-%COMP%]:focus, input[_ngcontent-%COMP%]:focus {\n     outline: 0;\n }\n \n \n \n input.question[_ngcontent-%COMP%], textarea.question[_ngcontent-%COMP%] {\n     font-size: 14px;\n     font-weight: 200;\n     border-radius: 2px;\n     margin: 0;\n     border: none;\n     width: 90%;\n     background: rgba(0, 0, 0, 0);\n     transition: padding-top 0.5s ease, margin-top 0.5s ease;\n     overflow-x: hidden;\n     \n }\n \n \n \n input.question[_ngcontent-%COMP%] + label[_ngcontent-%COMP%], textarea.question[_ngcontent-%COMP%] + label[_ngcontent-%COMP%] {\n     display: block;\n     position: relative;\n     white-space: nowrap;\n     padding: 0;\n     margin: 0;\n     width: 90%;\n     border-top: 1px solid black;\n     transition: width 0.5s ease;\n     height: 0px;\n }\n \n input.question[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%], textarea.question[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%] {\n     width: 100%;\n }\n \n input.question[_ngcontent-%COMP%]:focus, input.question[_ngcontent-%COMP%]:valid {\n     padding-top: -5px;\n     \n }\n \n textarea.question[_ngcontent-%COMP%]:valid, textarea.question[_ngcontent-%COMP%]:focus {\n     margin-top: 35px;\n }\n \n input.question[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%], input.question[_ngcontent-%COMP%]:valid + label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] {\n     top: -100px;\n     font-size: 22px;\n     color: #333;\n }\n \n textarea.question[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%], textarea.question[_ngcontent-%COMP%]:valid + label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] {\n     top: -150px;\n     font-size: 22px;\n     color: #333;\n }\n \n input.question[_ngcontent-%COMP%]:valid + label[_ngcontent-%COMP%], textarea.question[_ngcontent-%COMP%]:valid + label[_ngcontent-%COMP%] {\n     border-color: black;\n }\n \n input.question[_ngcontent-%COMP%]:invalid, textarea.question[_ngcontent-%COMP%]:invalid {\n     box-shadow: none;\n }\n \n input.question[_ngcontent-%COMP%] + label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%], textarea.question[_ngcontent-%COMP%] + label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] {\n     font-weight: 300;\n     margin: 0;\n     position: absolute;\n     color: black;\n     font-size: 28px;\n     top: -66px;\n     left: 0px;\n     z-index: -1;\n     transition: top 0.6s ease, font-size 0.6s ease, color 0.6s ease;\n }\n \n input[type=\"submit\"][_ngcontent-%COMP%] {\n     transition: opacity 0.5s ease, background 0.5s ease;\n     display: block;\n     opacity: 0;\n     margin: 10px 0 0 0;\n     padding: 10px;\n     cursor: pointer;\n }\n \n input[type=\"submit\"][_ngcontent-%COMP%]:hover {\n     background: #EEE;\n }\n \n input[type=\"submit\"][_ngcontent-%COMP%]:active {\n     background: #999;\n }\n \n input.question[_ngcontent-%COMP%]:valid ~ input[type=\"submit\"][_ngcontent-%COMP%], textarea.question[_ngcontent-%COMP%]:valid ~ input[type=\"submit\"][_ngcontent-%COMP%] {\n     -webkit-animation: appear 1s forwards;\n     animation: appear 1s forwards;\n }\n \n input.question[_ngcontent-%COMP%]:invalid ~ input[type=\"submit\"][_ngcontent-%COMP%], textarea.question[_ngcontent-%COMP%]:invalid ~ input[type=\"submit\"][_ngcontent-%COMP%] {\n     display: none;\n }\n \n \n \n @-webkit-keyframes appear {\n     100% {\n         opacity: 0.8;\n     }\n }\n \n @keyframes appear {\n     100% {\n         opacity: 0.8;\n     }\n }\n \n \n \n .form-control[_ngcontent-%COMP%] {\n     margin-top: 10px;\n     border: none;\n     border-bottom: 1px solid;\n     border-radius: 0rem;\n     width: 90%;\n     \n }\n \n \n \n .btn[_ngcontent-%COMP%] {\n     \n     width: 120px;\n     font-size: 12px;\n     background-color: #38baa2;\n     color: white;\n     border: 1px solid transparent;\n }\n \n .btn-danger[_ngcontent-%COMP%] {\n     background-color: red;\n     \n     color: white;\n     border: 1px solid transparent;\n }\n \n .register[_ngcontent-%COMP%] {\n     \n     background: -webkit-linear-gradient(left, rgb(26, 23, 23), #38baa2);\n     \n     padding: 3%;\n }\n \n .register-left[_ngcontent-%COMP%] {\n     text-align: center;\n     color: #fff;\n     margin-top: 4%;\n }\n \n .register-left[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n     border: none;\n     border-radius: 1.5rem;\n     padding: 2%;\n     width: 60%;\n     background: #f8f9fa;\n     font-weight: bold;\n     color: #383d41;\n     margin-top: 30%;\n     margin-bottom: 3%;\n     cursor: pointer;\n }\n \n .register-right[_ngcontent-%COMP%] {\n     background: white;\n     border-top-left-radius: 10% 50%;\n     border-bottom-left-radius: 10% 50%;\n }\n \n \n \n .register-left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n     margin-top: 15%;\n     margin-bottom: 5%;\n     width: 50%;\n     -webkit-animation: mover 3s infinite alternate;\n     animation: mover 0.5s infinite alternate;\n }\n \n @-webkit-keyframes mover {\n     0% {\n         transform: translateY(0);\n     }\n     100% {\n         transform: translateY(-20px);\n     }\n }\n \n @keyframes mover {\n     0% {\n         transform: translateY(0);\n     }\n     100% {\n         transform: translateY(-20px);\n     }\n }\n \n .register-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n     font-weight: lighter;\n     padding: 12%;\n     margin-top: -9%;\n }\n \n .register[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%] {\n     padding: 10%;\n     margin-top: 10%;\n }\n \n \n \n .register-heading[_ngcontent-%COMP%] {\n     text-align: center;\n     margin-top: 8%;\n     margin-bottom: -15%;\n     color: #495057;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL29wdGlvbnMvb3B0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFDO0tBQ0ksYUFBYTtLQUNiLHVCQUF1QjtLQUN2QixtQkFBbUI7S0FDbkIsbUJBQW1CO0tBQ25CLDZCQUE2QjtDQUNqQzs7Q0FFQTtLQUNJLGtEQUFrRDtLQUNsRCxpQkFBaUI7Q0FDckI7O0NBRUE7S0FDSSwrQkFBK0I7S0FDL0IsV0FBVztDQUNmOztDQUVBO0tBQ0ksc0JBQXNCO0tBQ3RCLFVBQVU7S0FDVixpQkFBaUI7Q0FDckI7O0NBRUE7S0FDSSxlQUFlO0tBQ2YsbUJBQW1CO0NBQ3ZCOztDQUVBOzs7O0tBSUksaUNBQWlDO0tBQ2pDLGNBQWM7S0FDZCxrQkFBa0I7S0FDbEIsYUFBYTtLQUNiLFlBQVk7S0FDWixlQUFlO0NBQ25COztDQUVBOztLQUVJLFVBQVU7Q0FDZDs7Q0FDQSxnREFBZ0Q7O0NBRWhEOztLQUVJLGVBQWU7S0FDZixnQkFBZ0I7S0FDaEIsa0JBQWtCO0tBQ2xCLFNBQVM7S0FDVCxZQUFZO0tBQ1osVUFBVTtLQUNWLDRCQUE0QjtLQUM1Qix1REFBdUQ7S0FDdkQsa0JBQWtCO0tBQ2xCLG9EQUFvRDtDQUN4RDs7Q0FDQSw4QkFBOEI7O0NBRTlCOztLQUVJLGNBQWM7S0FDZCxrQkFBa0I7S0FDbEIsbUJBQW1CO0tBQ25CLFVBQVU7S0FDVixTQUFTO0tBQ1QsVUFBVTtLQUNWLDJCQUEyQjtLQUUzQiwyQkFBMkI7S0FDM0IsV0FBVztDQUNmOztDQUVBOztLQUVJLFdBQVc7Q0FDZjs7Q0FFQTs7S0FFSSxpQkFBaUI7S0FDakIsc0JBQXNCO0NBQzFCOztDQUVBOztLQUVJLGdCQUFnQjtDQUNwQjs7Q0FFQTs7S0FFSSxXQUFXO0tBQ1gsZUFBZTtLQUNmLFdBQVc7Q0FDZjs7Q0FFQTs7S0FFSSxXQUFXO0tBQ1gsZUFBZTtLQUNmLFdBQVc7Q0FDZjs7Q0FFQTs7S0FFSSxtQkFBbUI7Q0FDdkI7O0NBRUE7O0tBRUksZ0JBQWdCO0NBQ3BCOztDQUVBOztLQUVJLGdCQUFnQjtLQUNoQixTQUFTO0tBQ1Qsa0JBQWtCO0tBQ2xCLFlBQVk7S0FDWixlQUFlO0tBQ2YsVUFBVTtLQUNWLFNBQVM7S0FDVCxXQUFXO0tBRVgsK0RBQStEO0NBQ25FOztDQUVBO0tBRUksbURBQW1EO0tBQ25ELGNBQWM7S0FDZCxVQUFVO0tBQ1Ysa0JBQWtCO0tBQ2xCLGFBQWE7S0FDYixlQUFlO0NBQ25COztDQUVBO0tBQ0ksZ0JBQWdCO0NBQ3BCOztDQUVBO0tBQ0ksZ0JBQWdCO0NBQ3BCOztDQUVBOztLQUVJLHFDQUFxQztLQUNyQyw2QkFBNkI7Q0FDakM7O0NBRUE7O0tBRUksYUFBYTtDQUNqQjs7Q0FDQTs7OztLQUlJOztDQUVKO0tBQ0k7U0FDSSxZQUFZO0tBQ2hCO0NBQ0o7O0NBSkE7S0FDSTtTQUNJLFlBQVk7S0FDaEI7Q0FDSjs7Q0FDQSxXQUFXOztDQUVYO0tBQ0ksZ0JBQWdCO0tBQ2hCLFlBQVk7S0FDWix3QkFBd0I7S0FDeEIsbUJBQW1CO0tBQ25CLFVBQVU7S0FDVixtQkFBbUI7Q0FDdkI7O0NBQ0EsS0FBSzs7Q0FFTDtLQUNJLHVCQUF1QjtLQUN2QixZQUFZO0tBQ1osZUFBZTtLQUNmLHlCQUF5QjtLQUN6QixZQUFZO0tBQ1osNkJBQTZCO0NBQ2pDOztDQUVBO0tBQ0kscUJBQXFCO0tBQ3JCOzs7c0JBR2lCO0tBQ2pCLFlBQVk7S0FDWiw2QkFBNkI7Q0FDakM7O0NBRUE7S0FDSSxpRUFBaUU7S0FDakUsbUVBQW1FO0tBQ25FLG9CQUFvQjtLQUNwQixXQUFXO0NBQ2Y7O0NBRUE7S0FDSSxrQkFBa0I7S0FDbEIsV0FBVztLQUNYLGNBQWM7Q0FDbEI7O0NBRUE7S0FDSSxZQUFZO0tBQ1oscUJBQXFCO0tBQ3JCLFdBQVc7S0FDWCxVQUFVO0tBQ1YsbUJBQW1CO0tBQ25CLGlCQUFpQjtLQUNqQixjQUFjO0tBQ2QsZUFBZTtLQUNmLGlCQUFpQjtLQUNqQixlQUFlO0NBQ25COztDQUVBO0tBQ0ksaUJBQWlCO0tBQ2pCLCtCQUErQjtLQUMvQixrQ0FBa0M7Q0FDdEM7O0NBQ0Esa0JBQWtCOztDQUVsQjtLQUNJLGVBQWU7S0FDZixpQkFBaUI7S0FDakIsVUFBVTtLQUNWLDhDQUE4QztLQUM5Qyx3Q0FBd0M7Q0FDNUM7O0NBRUE7S0FDSTtTQUNJLHdCQUF3QjtLQUM1QjtLQUNBO1NBQ0ksNEJBQTRCO0tBQ2hDO0NBQ0o7O0NBRUE7S0FDSTtTQUNJLHdCQUF3QjtLQUM1QjtLQUNBO1NBQ0ksNEJBQTRCO0tBQ2hDO0NBQ0o7O0NBRUE7S0FDSSxvQkFBb0I7S0FDcEIsWUFBWTtLQUNaLGVBQWU7Q0FDbkI7O0NBRUE7S0FDSSxZQUFZO0tBQ1osZUFBZTtDQUNuQjs7Q0FDQTs7Ozs7Ozs7Ozs7R0FXRTs7Q0FFRjtLQUNJLGtCQUFrQjtLQUNsQixjQUFjO0tBQ2QsbUJBQW1CO0tBQ25CLGNBQWM7Q0FDbEIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvb3B0aW9ucy9vcHRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgKi8gLmNlbnRlciB7XG4gICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAvKiBoZWlnaHQ6IDIwMHB4OyAqL1xuICAgICAvKiBib3JkZXI6IDNweCBzb2xpZCBncmVlbjsgKi9cbiB9XG4gXG4gaDIge1xuICAgICBmb250OiAyMDAgMjVweC8zMHB4IFNjcmliYmxlLCBcIlNjcmliYmxlXCIsIFNjcmliYmxlO1xuICAgICBjb2xvcjogd2hpdGVzbW9rZTtcbiB9XG4gXG4gaHRtbCB7XG4gICAgIGZvbnQtZmFtaWx5OiAnTG9yYScsIHNhbnMtc2VyaWY7XG4gICAgIHdpZHRoOiAxMDAlO1xuIH1cbiBcbiBib2R5IHtcbiAgICAgbWFyZ2luOiA1JSBhdXRvIDAgYXV0bztcbiAgICAgd2lkdGg6IDkwJTtcbiAgICAgbWF4LXdpZHRoOiAxMTI1cHg7XG4gfVxuIFxuIGgxIHtcbiAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICBtYXJnaW4tYm90dG9tOiAyLjUlO1xuIH1cbiBcbiBpbnB1dCxcbiBzcGFuLFxuIGxhYmVsLFxuIHRleHRhcmVhIHtcbiAgICAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xuICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgLyogbWFyZ2luOiAxMHB4OyAqL1xuICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICBib3JkZXI6IG5vbmU7XG4gICAgIGZvbnQtc2l6ZTogMTRweDtcbiB9XG4gXG4gdGV4dGFyZWE6Zm9jdXMsXG4gaW5wdXQ6Zm9jdXMge1xuICAgICBvdXRsaW5lOiAwO1xuIH1cbiAvKiBUaGUgdGV4dCB3aGVyZSBpbnB1dCBmaWVsZCB3b3VsZCBiZSB3cml0dGVuICovXG4gXG4gaW5wdXQucXVlc3Rpb24sXG4gdGV4dGFyZWEucXVlc3Rpb24ge1xuICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgbWFyZ2luOiAwO1xuICAgICBib3JkZXI6IG5vbmU7XG4gICAgIHdpZHRoOiA5MCU7XG4gICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgIHRyYW5zaXRpb246IHBhZGRpbmctdG9wIDAuNXMgZWFzZSwgbWFyZ2luLXRvcCAwLjVzIGVhc2U7XG4gICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgLyogSGFjayB0byBtYWtlIFwicm93c1wiIGF0dHJpYnV0ZSBhcHBseSBpbiBGaXJlZm94LiAqL1xuIH1cbiAvKiBVbmRlcmxpbmUgYW5kIFBsYWNlaG9sZGVyICovXG4gXG4gaW5wdXQucXVlc3Rpb24rbGFiZWwsXG4gdGV4dGFyZWEucXVlc3Rpb24rbGFiZWwge1xuICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICBwYWRkaW5nOiAwO1xuICAgICBtYXJnaW46IDA7XG4gICAgIHdpZHRoOiA5MCU7XG4gICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcbiAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiB3aWR0aCAwLjVzIGVhc2U7XG4gICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNXMgZWFzZTtcbiAgICAgaGVpZ2h0OiAwcHg7XG4gfVxuIFxuIGlucHV0LnF1ZXN0aW9uOmZvY3VzK2xhYmVsLFxuIHRleHRhcmVhLnF1ZXN0aW9uOmZvY3VzK2xhYmVsIHtcbiAgICAgd2lkdGg6IDEwMCU7XG4gfVxuIFxuIGlucHV0LnF1ZXN0aW9uOmZvY3VzLFxuIGlucHV0LnF1ZXN0aW9uOnZhbGlkIHtcbiAgICAgcGFkZGluZy10b3A6IC01cHg7XG4gICAgIC8qIG1hcmdpbi10b3A6IC0ycHg7ICovXG4gfVxuIFxuIHRleHRhcmVhLnF1ZXN0aW9uOnZhbGlkLFxuIHRleHRhcmVhLnF1ZXN0aW9uOmZvY3VzIHtcbiAgICAgbWFyZ2luLXRvcDogMzVweDtcbiB9XG4gXG4gaW5wdXQucXVlc3Rpb246Zm9jdXMrbGFiZWw+c3BhbixcbiBpbnB1dC5xdWVzdGlvbjp2YWxpZCtsYWJlbD5zcGFuIHtcbiAgICAgdG9wOiAtMTAwcHg7XG4gICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgY29sb3I6ICMzMzM7XG4gfVxuIFxuIHRleHRhcmVhLnF1ZXN0aW9uOmZvY3VzK2xhYmVsPnNwYW4sXG4gdGV4dGFyZWEucXVlc3Rpb246dmFsaWQrbGFiZWw+c3BhbiB7XG4gICAgIHRvcDogLTE1MHB4O1xuICAgICBmb250LXNpemU6IDIycHg7XG4gICAgIGNvbG9yOiAjMzMzO1xuIH1cbiBcbiBpbnB1dC5xdWVzdGlvbjp2YWxpZCtsYWJlbCxcbiB0ZXh0YXJlYS5xdWVzdGlvbjp2YWxpZCtsYWJlbCB7XG4gICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gfVxuIFxuIGlucHV0LnF1ZXN0aW9uOmludmFsaWQsXG4gdGV4dGFyZWEucXVlc3Rpb246aW52YWxpZCB7XG4gICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gfVxuIFxuIGlucHV0LnF1ZXN0aW9uK2xhYmVsPnNwYW4sXG4gdGV4dGFyZWEucXVlc3Rpb24rbGFiZWw+c3BhbiB7XG4gICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgIG1hcmdpbjogMDtcbiAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICBjb2xvcjogYmxhY2s7XG4gICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgdG9wOiAtNjZweDtcbiAgICAgbGVmdDogMHB4O1xuICAgICB6LWluZGV4OiAtMTtcbiAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiB0b3AgMC42cyBlYXNlLCBmb250LXNpemUgMC42cyBlYXNlLCBjb2xvciAwLjZzIGVhc2U7XG4gICAgIHRyYW5zaXRpb246IHRvcCAwLjZzIGVhc2UsIGZvbnQtc2l6ZSAwLjZzIGVhc2UsIGNvbG9yIDAuNnMgZWFzZTtcbiB9XG4gXG4gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XG4gICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UsIGJhY2tncm91bmQgMC41cyBlYXNlO1xuICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZSwgYmFja2dyb3VuZCAwLjVzIGVhc2U7XG4gICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICBvcGFjaXR5OiAwO1xuICAgICBtYXJnaW46IDEwcHggMCAwIDA7XG4gICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgIGN1cnNvcjogcG9pbnRlcjtcbiB9XG4gXG4gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XG4gICAgIGJhY2tncm91bmQ6ICNFRUU7XG4gfVxuIFxuIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06YWN0aXZlIHtcbiAgICAgYmFja2dyb3VuZDogIzk5OTtcbiB9XG4gXG4gaW5wdXQucXVlc3Rpb246dmFsaWR+aW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcbiB0ZXh0YXJlYS5xdWVzdGlvbjp2YWxpZH5pbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcbiAgICAgLXdlYmtpdC1hbmltYXRpb246IGFwcGVhciAxcyBmb3J3YXJkcztcbiAgICAgYW5pbWF0aW9uOiBhcHBlYXIgMXMgZm9yd2FyZHM7XG4gfVxuIFxuIGlucHV0LnF1ZXN0aW9uOmludmFsaWR+aW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcbiB0ZXh0YXJlYS5xdWVzdGlvbjppbnZhbGlkfmlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xuICAgICBkaXNwbGF5OiBub25lO1xuIH1cbiAvKiBALXdlYmtpdC1rZXlmcmFtZXMgYXBwZWFyIHtcbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICB9XG4gIH0gKi9cbiBcbiBAa2V5ZnJhbWVzIGFwcGVhciB7XG4gICAgIDEwMCUge1xuICAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICB9XG4gfVxuIC8qIDAyIGVuZCAqL1xuIFxuIC5mb3JtLWNvbnRyb2wge1xuICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICBib3JkZXI6IG5vbmU7XG4gICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbiAgICAgYm9yZGVyLXJhZGl1czogMHJlbTtcbiAgICAgd2lkdGg6IDkwJTtcbiAgICAgLyogY29sb3I6IzM4YmFhMjsgKi9cbiB9XG4gLyogICovXG4gXG4gLmJ0biB7XG4gICAgIC8qIG1hcmdpbi1sZWZ0OiA0MHB4OyAqL1xuICAgICB3aWR0aDogMTIwcHg7XG4gICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM4YmFhMjtcbiAgICAgY29sb3I6IHdoaXRlO1xuICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiB9XG4gXG4gLmJ0bi1kYW5nZXIge1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgIC8qIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDsgKi9cbiAgICAgY29sb3I6IHdoaXRlO1xuICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiB9XG4gXG4gLnJlZ2lzdGVyIHtcbiAgICAgLyogYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzM4YmFhMiwgIzBkNmI5Mik7ICovXG4gICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYigyNiwgMjMsIDIzKSwgIzM4YmFhMik7XG4gICAgIC8qIG1hcmdpbi10b3A6IDMlOyAqL1xuICAgICBwYWRkaW5nOiAzJTtcbiB9XG4gXG4gLnJlZ2lzdGVyLWxlZnQge1xuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgIGNvbG9yOiAjZmZmO1xuICAgICBtYXJnaW4tdG9wOiA0JTtcbiB9XG4gXG4gLnJlZ2lzdGVyLWxlZnQgaW5wdXQge1xuICAgICBib3JkZXI6IG5vbmU7XG4gICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbiAgICAgcGFkZGluZzogMiU7XG4gICAgIHdpZHRoOiA2MCU7XG4gICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICBjb2xvcjogIzM4M2Q0MTtcbiAgICAgbWFyZ2luLXRvcDogMzAlO1xuICAgICBtYXJnaW4tYm90dG9tOiAzJTtcbiAgICAgY3Vyc29yOiBwb2ludGVyO1xuIH1cbiBcbiAucmVnaXN0ZXItcmlnaHQge1xuICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTAlIDUwJTtcbiAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTAlIDUwJTtcbiB9XG4gLyogSW1hZ2UgRWZmZWN0cyAqL1xuIFxuIC5yZWdpc3Rlci1sZWZ0IGltZyB7XG4gICAgIG1hcmdpbi10b3A6IDE1JTtcbiAgICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gICAgIHdpZHRoOiA1MCU7XG4gICAgIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZlciAzcyBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gICAgIGFuaW1hdGlvbjogbW92ZXIgMC41cyBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gfVxuIFxuIEAtd2Via2l0LWtleWZyYW1lcyBtb3ZlciB7XG4gICAgIDAlIHtcbiAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgfVxuICAgICAxMDAlIHtcbiAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gICAgIH1cbiB9XG4gXG4gQGtleWZyYW1lcyBtb3ZlciB7XG4gICAgIDAlIHtcbiAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgfVxuICAgICAxMDAlIHtcbiAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gICAgIH1cbiB9XG4gXG4gLnJlZ2lzdGVyLWxlZnQgcCB7XG4gICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgICBwYWRkaW5nOiAxMiU7XG4gICAgIG1hcmdpbi10b3A6IC05JTtcbiB9XG4gXG4gLnJlZ2lzdGVyIC5yZWdpc3Rlci1mb3JtIHtcbiAgICAgcGFkZGluZzogMTAlO1xuICAgICBtYXJnaW4tdG9wOiAxMCU7XG4gfVxuIC8qIC5idG5SZWdpc3RlcntcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XG4gICAgcGFkZGluZzogMiU7XG4gICAgYmFja2dyb3VuZDogIzM4YmFhMjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSAqL1xuIFxuIC5yZWdpc3Rlci1oZWFkaW5nIHtcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICBtYXJnaW4tdG9wOiA4JTtcbiAgICAgbWFyZ2luLWJvdHRvbTogLTE1JTtcbiAgICAgY29sb3I6ICM0OTUwNTc7XG4gfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OptionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-options',
                templateUrl: './options.component.html',
                styleUrls: ['./options.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./map/map.component */ "cNoH");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _forgetpass_forgetpass_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./forgetpass/forgetpass.component */ "w7pD");
/* harmony import */ var _forgetpassverify_forgetpassverify_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./forgetpassverify/forgetpassverify.component */ "xDWS");
/* harmony import */ var _newpass_newpass_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./newpass/newpass.component */ "Q98w");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _signupotp_signupotp_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./signupotp/signupotp.component */ "15Qt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/locales/en */ "tAZD");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dashboard/profile/profile.component */ "80h2");
/* harmony import */ var _dashboard_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./dashboard/inventory/inventory.component */ "PJWD");
/* harmony import */ var _dashboard_users_users_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dashboard/users/users.component */ "NPdi");
/* harmony import */ var _dashboard_leads_leads_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./dashboard/leads/leads.component */ "OA72");
/* harmony import */ var _Pipes_Non_Utilized_Pipes_table_filter_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Pipes/Non-Utilized_Pipes/table-filter.pipe */ "/4vt");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");
/* harmony import */ var _Pipes_Non_Utilized_Pipes_table_filter02_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Pipes/Non-Utilized_Pipes/table-filter02.pipe */ "KgeA");
/* harmony import */ var _Pipes_Non_Utilized_Pipes_table_filter03_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Pipes/Non-Utilized_Pipes/table-filter03.pipe */ "tzAo");
/* harmony import */ var _Pipes_Non_Utilized_Pipes_table_filter04_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./Pipes/Non-Utilized_Pipes/table-filter04.pipe */ "AiYy");
/* harmony import */ var _Pipes_Non_Utilized_Pipes_table_filter05_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./Pipes/Non-Utilized_Pipes/table-filter05.pipe */ "rkdl");
/* harmony import */ var _Pipes_Non_Utilized_Pipes_table_filter06_pipe__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Pipes/Non-Utilized_Pipes/table-filter06.pipe */ "M56v");
/* harmony import */ var _dashboard_inactive_inactive_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./dashboard/inactive/inactive.component */ "iOYQ");
/* harmony import */ var _dashboard_options_options_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./dashboard/options/options.component */ "TXUV");
/* harmony import */ var _dashboard_users_add_users_add_users_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./dashboard/users/add-users/add-users.component */ "wB38");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _dashboard_leads_add_leads_add_leads_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./dashboard/leads/add-leads/add-leads.component */ "bcNE");
/* harmony import */ var _dashboard_inventory_add_inventories_add_inventories_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./dashboard/inventory/add-inventories/add-inventories.component */ "oFoK");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _dashboard_header_header_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./dashboard/header/header.component */ "iqMG");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "47Jg");
/* harmony import */ var _header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./header-navigation/navigation.component */ "62Q8");
/* harmony import */ var _dashboard_both_both_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./dashboard/both/both.component */ "rwU0");
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
// import { ButtonsModule } from 'ngx-bootstrap/buttons';
// import {MaterialModule} from '@angular/material';




// import { MDBBootstrapModule } from 'angular-bootstrap-md';











// import { NgZorroAntdModule, NZ_I18N } from 'ng-zorro-antd';
// import { en_US } from 'ng-zorro-antd';
























// import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
// import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
// import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';




// const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
//   suppressScrollX: true,
//   wheelSpeed: 1,
//   wheelPropagation: true,
//   minScrollbarLength: 20
// };   
// import { HighlightDirective } from './directives/highlight.directive';
// import { FilterPipe } from './pipes/filter.pipe';
Object(_angular_common__WEBPACK_IMPORTED_MODULE_18__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_19___default.a);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
    // {
    //   provide: PERFECT_SCROLLBAR_CONFIG,
    //   useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    // }
    ], imports: [[
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            // MDBBootstrapModule.forRoot(),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_35__["ToastrModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_0__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_40__["NgbModule"],
            // PerfectScrollbarModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_26__["Ng2SearchPipeModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_1__["NgSelectModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_40__["NgbModule"]
            // MaterialModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
        _map_map_component__WEBPACK_IMPORTED_MODULE_9__["MapComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
        _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"],
        _forgetpass_forgetpass_component__WEBPACK_IMPORTED_MODULE_13__["ForgetpassComponent"],
        _forgetpassverify_forgetpassverify_component__WEBPACK_IMPORTED_MODULE_14__["ForgetpassverifyComponent"],
        _newpass_newpass_component__WEBPACK_IMPORTED_MODULE_15__["NewpassComponent"],
        _signupotp_signupotp_component__WEBPACK_IMPORTED_MODULE_17__["SignupotpComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__["DashboardComponent"],
        _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_21__["ProfileComponent"],
        _dashboard_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_22__["InventoryComponent"],
        _dashboard_users_users_component__WEBPACK_IMPORTED_MODULE_23__["UsersComponent"],
        _dashboard_leads_leads_component__WEBPACK_IMPORTED_MODULE_24__["LeadsComponent"],
        // FilterPipe,
        // HighlightDirective
        _Pipes_Non_Utilized_Pipes_table_filter_pipe__WEBPACK_IMPORTED_MODULE_25__["TableFilterPipe"],
        _Pipes_Non_Utilized_Pipes_table_filter02_pipe__WEBPACK_IMPORTED_MODULE_27__["TableFilter02Pipe"],
        _Pipes_Non_Utilized_Pipes_table_filter03_pipe__WEBPACK_IMPORTED_MODULE_28__["TableFilter03Pipe"],
        _Pipes_Non_Utilized_Pipes_table_filter04_pipe__WEBPACK_IMPORTED_MODULE_29__["TableFilter04Pipe"],
        _Pipes_Non_Utilized_Pipes_table_filter05_pipe__WEBPACK_IMPORTED_MODULE_30__["TableFilter05Pipe"],
        _Pipes_Non_Utilized_Pipes_table_filter06_pipe__WEBPACK_IMPORTED_MODULE_31__["TableFilter06Pipe"],
        _dashboard_inactive_inactive_component__WEBPACK_IMPORTED_MODULE_32__["InactiveComponent"],
        _dashboard_options_options_component__WEBPACK_IMPORTED_MODULE_33__["OptionsComponent"],
        _dashboard_users_add_users_add_users_component__WEBPACK_IMPORTED_MODULE_34__["AddUsersComponent"],
        _dashboard_leads_add_leads_add_leads_component__WEBPACK_IMPORTED_MODULE_36__["AddLeadsComponent"],
        _dashboard_inventory_add_inventories_add_inventories_component__WEBPACK_IMPORTED_MODULE_37__["AddInventoriesComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_38__["NavbarComponent"],
        _dashboard_header_header_component__WEBPACK_IMPORTED_MODULE_39__["HeaderComponent"],
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_41__["SidebarComponent"],
        _header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_42__["NavigationComponent"],
        _dashboard_both_both_component__WEBPACK_IMPORTED_MODULE_43__["BothComponent"]], imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        // MDBBootstrapModule.forRoot(),
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_35__["ToastrModule"], // ToastrModule added
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_0__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_40__["NgbModule"],
        // PerfectScrollbarModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_26__["Ng2SearchPipeModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_1__["NgSelectModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_40__["NgbModule"]
        // MaterialModule
    ] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                    _map_map_component__WEBPACK_IMPORTED_MODULE_9__["MapComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
                    _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"],
                    _forgetpass_forgetpass_component__WEBPACK_IMPORTED_MODULE_13__["ForgetpassComponent"],
                    _forgetpassverify_forgetpassverify_component__WEBPACK_IMPORTED_MODULE_14__["ForgetpassverifyComponent"],
                    _newpass_newpass_component__WEBPACK_IMPORTED_MODULE_15__["NewpassComponent"],
                    _signupotp_signupotp_component__WEBPACK_IMPORTED_MODULE_17__["SignupotpComponent"],
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__["DashboardComponent"],
                    _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_21__["ProfileComponent"],
                    _dashboard_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_22__["InventoryComponent"],
                    _dashboard_users_users_component__WEBPACK_IMPORTED_MODULE_23__["UsersComponent"],
                    _dashboard_leads_leads_component__WEBPACK_IMPORTED_MODULE_24__["LeadsComponent"],
                    // FilterPipe,
                    // HighlightDirective
                    _Pipes_Non_Utilized_Pipes_table_filter_pipe__WEBPACK_IMPORTED_MODULE_25__["TableFilterPipe"],
                    _Pipes_Non_Utilized_Pipes_table_filter02_pipe__WEBPACK_IMPORTED_MODULE_27__["TableFilter02Pipe"],
                    _Pipes_Non_Utilized_Pipes_table_filter03_pipe__WEBPACK_IMPORTED_MODULE_28__["TableFilter03Pipe"],
                    _Pipes_Non_Utilized_Pipes_table_filter04_pipe__WEBPACK_IMPORTED_MODULE_29__["TableFilter04Pipe"],
                    _Pipes_Non_Utilized_Pipes_table_filter05_pipe__WEBPACK_IMPORTED_MODULE_30__["TableFilter05Pipe"],
                    _Pipes_Non_Utilized_Pipes_table_filter06_pipe__WEBPACK_IMPORTED_MODULE_31__["TableFilter06Pipe"],
                    _dashboard_inactive_inactive_component__WEBPACK_IMPORTED_MODULE_32__["InactiveComponent"],
                    _dashboard_options_options_component__WEBPACK_IMPORTED_MODULE_33__["OptionsComponent"],
                    _dashboard_users_add_users_add_users_component__WEBPACK_IMPORTED_MODULE_34__["AddUsersComponent"],
                    _dashboard_leads_add_leads_add_leads_component__WEBPACK_IMPORTED_MODULE_36__["AddLeadsComponent"],
                    _dashboard_inventory_add_inventories_add_inventories_component__WEBPACK_IMPORTED_MODULE_37__["AddInventoriesComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_38__["NavbarComponent"],
                    _dashboard_header_header_component__WEBPACK_IMPORTED_MODULE_39__["HeaderComponent"],
                    _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_41__["SidebarComponent"],
                    _header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_42__["NavigationComponent"],
                    _dashboard_both_both_component__WEBPACK_IMPORTED_MODULE_43__["BothComponent"]
                ],
                imports: [
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    // MDBBootstrapModule.forRoot(),
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_35__["ToastrModule"].forRoot(),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_0__["MatToolbarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_40__["NgbModule"],
                    // PerfectScrollbarModule,
                    ng2_search_filter__WEBPACK_IMPORTED_MODULE_26__["Ng2SearchPipeModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_1__["NgSelectModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_40__["NgbModule"]
                    // MaterialModule
                ],
                providers: [
                // {
                //   provide: PERFECT_SCROLLBAR_CONFIG,
                //   useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                // }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "bcNE":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/leads/add-leads/add-leads.component.ts ***!
  \******************************************************************/
/*! exports provided: AddLeadsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLeadsComponent", function() { return AddLeadsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/Authentication/authentication.service */ "6q8g");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");









function AddLeadsComponent_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Id is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLeadsComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLeadsComponent_div_17_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.id.errors.required);
} }
function AddLeadsComponent_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Client is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLeadsComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLeadsComponent_div_23_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.client.errors.required);
} }
function AddLeadsComponent_div_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Type is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLeadsComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLeadsComponent_div_30_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.type.errors.required);
} }
function AddLeadsComponent_div_44_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Purpose is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLeadsComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLeadsComponent_div_44_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.purpose.errors.required);
} }
function AddLeadsComponent_div_59_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Property Type is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLeadsComponent_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLeadsComponent_div_59_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.f.prop_type.errors.required);
} }
function AddLeadsComponent_div_74_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Property Number is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLeadsComponent_div_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLeadsComponent_div_74_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.f.prop_no.errors.required);
} }
function AddLeadsComponent_div_82_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Area is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLeadsComponent_div_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLeadsComponent_div_82_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.f.area.errors.required);
} }
function AddLeadsComponent_div_90_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Location is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLeadsComponent_div_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLeadsComponent_div_90_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.f.location.errors.required);
} }
function AddLeadsComponent_div_97_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Demand is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLeadsComponent_div_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLeadsComponent_div_97_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.f.demand.errors.required);
} }
function AddLeadsComponent_div_104_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phone number is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLeadsComponent_div_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLeadsComponent_div_104_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.f.phone_no.errors.required);
} }
function AddLeadsComponent_div_112_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Comment is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLeadsComponent_div_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLeadsComponent_div_112_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.f.comment.errors.required);
} }
function AddLeadsComponent_div_120_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Assigned To is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLeadsComponent_div_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLeadsComponent_div_120_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.f.assigned_to.errors.required);
} }
function AddLeadsComponent_div_128_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Admin status is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLeadsComponent_div_128_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLeadsComponent_div_128_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.f.admin_status.errors.required);
} }
function AddLeadsComponent_div_143_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Agent Status is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLeadsComponent_div_143_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLeadsComponent_div_143_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.f.agent_status.errors.required);
} }
function AddLeadsComponent_div_158_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Added On is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddLeadsComponent_div_158_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddLeadsComponent_div_158_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.f.added_on.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class AddLeadsComponent {
    constructor(formBuilder, authService, router, toastr) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.submitted = false;
    }
    formDeclare() {
        this.addleadForm = this.formBuilder.group({
            location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            client: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            agent_status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            admin_status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phone_no: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            added_on: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            area: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            purpose: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            prop_type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            prop_no: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            demand: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            assigned_to: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.addleadForm.controls; }
    ngOnInit() {
        this.formDeclare();
        this.getCities();
        this.getLocations();
    }
    getCities() {
        this.authService.getCities().subscribe((data) => {
            this.cities = data;
            console.log('Cities: ', this.cities);
        }, (err) => {
            console.error(err);
        });
    }
    getLocations() {
        this.authService.getLocations().subscribe((data) => {
            this.locations = data;
            console.log('Locations: ', this.locations);
        }, (err) => {
            console.error(err);
        });
    }
    submitForm() {
        this.submitted = true; // stop here if form is invalid
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
AddLeadsComponent.ɵfac = function AddLeadsComponent_Factory(t) { return new (t || AddLeadsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
AddLeadsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddLeadsComponent, selectors: [["app-add-leads"]], decls: 165, vars: 61, consts: [[1, "register"], [1, "row"], [1, "col-md-2", "register-left"], ["src", "assets/icons/asasa.gif", "alt", ""], [1, "col-md-10", "col-sm-10", "register-right"], [1, "form-register", 3, "formGroup"], [1, "register-heading"], [1, "row", "register-form"], [1, "col-md-6", "col-sm-6"], [1, "form-group"], [1, "input-group"], ["type", "number", "formControlName", "id", "required", "", "autocomplete", "off", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "formControlName", "client", "required", "", "autocomplete", "off", 1, "form-control", 3, "ngClass"], ["formControlName", "type", "type", "text", "list", "productName2", 1, "form-control", 3, "ngClass"], ["id", "productName2"], ["value", "Buyer"], ["value", "Seller"], ["value", "Else"], ["formControlName", "purpose", "type", "text", "list", "productName3", 1, "form-control", 3, "ngClass"], ["id", "productName3"], ["value", "Buy"], ["value", "Sale"], ["value", "Rent"], ["formControlName", "prop_type", "type", "text", "list", "productName4", 1, "form-control", 3, "ngClass"], ["id", "productName4"], ["value", "Apartment"], ["value", "House"], ["value", "Residential Plot"], ["type", "number", "formControlName", "prop_no", "required", "", "autocomplete", "off", 1, "form-control", 3, "ngClass"], ["type", "text", "formControlName", "area", "required", "", "autocomplete", "off", 1, "form-control", 3, "ngClass"], ["type", "text", "formControlName", "location", "required", "", "autocomplete", "off", 1, "form-control", 3, "ngClass"], ["type", "number", "formControlName", "demand", "required", "", "autocomplete", "off", 1, "form-control", 3, "ngClass"], ["type", "number", "formControlName", "phone_no", "required", "", "autocomplete", "off", 1, "form-control", 3, "ngClass"], ["type", "text", "formControlName", "comment", "required", "", "autocomplete", "off", 1, "form-control", 3, "ngClass"], ["type", "text", "formControlName", "assigned_to", "required", "", "autocomplete", "off", 1, "form-control", 3, "ngClass"], ["formControlName", "admin_status", "type", "text", "list", "productName", 1, "form-control", 3, "ngClass"], ["id", "productName"], ["value", "Pen"], ["value", "Pencil"], ["value", "Paper"], ["formControlName", "agent_status", "type", "text", "list", "productName1", 1, "form-control", 3, "ngClass"], ["id", "productName1"], ["type", "text", "formControlName", "added_on", "required", "", "autocomplete", "off", 1, "form-control", 3, "ngClass"], [1, "col-md-12", "col-sm-12"], [1, "pull-right"], [1, "btn", "btn-primary", 3, "click"], [1, "invalid-feedback"], [4, "ngIf"]], template: function AddLeadsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Asasa Real Estate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Add Lead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " ID ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AddLeadsComponent_div_17_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Client ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AddLeadsComponent_div_23_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AddLeadsComponent_div_30_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "datalist", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Buyer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Seller");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Else");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Purpose ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, AddLeadsComponent_div_44_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "datalist", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Buy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Rent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Property Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, AddLeadsComponent_div_59_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "datalist", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Apartment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "House");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Residential Plot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Property Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, AddLeadsComponent_div_74_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Area ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, AddLeadsComponent_div_82_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Location ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, AddLeadsComponent_div_90_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " Demand ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, AddLeadsComponent_div_97_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Phone number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](104, AddLeadsComponent_div_104_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " Comment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](112, AddLeadsComponent_div_112_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " Assigned To ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](120, AddLeadsComponent_div_120_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " Admin Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](128, AddLeadsComponent_div_128_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "datalist", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Pen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Pencil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Paper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " Agent Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](143, AddLeadsComponent_div_143_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "datalist", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Pen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Pencil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Paper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " Added On ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](158, AddLeadsComponent_div_158_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddLeadsComponent_Template_button_click_163_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addleadForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c0, ctx.submitted && ctx.f.id.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.id.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](33, _c0, ctx.submitted && ctx.f.client.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.client.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](35, _c0, ctx.submitted && ctx.f.type.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.type.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](37, _c0, ctx.submitted && ctx.f.purpose.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.purpose.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](39, _c0, ctx.submitted && ctx.f.prop_type.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.prop_type.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](41, _c0, ctx.submitted && ctx.f.prop_no.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.prop_no.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](43, _c0, ctx.submitted && ctx.f.area.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.area.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](45, _c0, ctx.submitted && ctx.f.location.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.location.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](47, _c0, ctx.submitted && ctx.f.demand.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.demand.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](49, _c0, ctx.submitted && ctx.f.phone_no.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.phone_no.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](51, _c0, ctx.submitted && ctx.f.comment.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.comment.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](53, _c0, ctx.submitted && ctx.f.assigned_to.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.assigned_to.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](55, _c0, ctx.submitted && ctx.f.admin_status.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.admin_status.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](57, _c0, ctx.submitted && ctx.f.agent_status.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.agent_status.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](59, _c0, ctx.submitted && ctx.f.added_on.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.added_on.errors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: [".center[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    \n    \n}\n\nh2[_ngcontent-%COMP%] {\n    font: 200 25px/30px Scribble, \"Scribble\", Scribble;\n    color: whitesmoke;\n}\n\nhtml[_ngcontent-%COMP%] {\n    font-family: 'Lora', sans-serif;\n    width: 100%;\n}\n\nbody[_ngcontent-%COMP%] {\n    margin: 5% auto 0 auto;\n    width: 90%;\n    max-width: 1125px;\n}\n\nh1[_ngcontent-%COMP%] {\n    font-size: 28px;\n    margin-bottom: 2.5%;\n}\n\ninput[_ngcontent-%COMP%], span[_ngcontent-%COMP%], label[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n    font-family: 'Ubuntu', sans-serif;\n    display: block;\n    \n    padding: 12px;\n    border: none;\n    font-size: 14px;\n}\n\ntextarea[_ngcontent-%COMP%]:focus, input[_ngcontent-%COMP%]:focus {\n    outline: 0;\n}\n\n\n\ninput.question[_ngcontent-%COMP%], textarea.question[_ngcontent-%COMP%] {\n    font-size: 14px;\n    font-weight: 200;\n    border-radius: 2px;\n    margin: 0;\n    border: none;\n    width: 90%;\n    background: none;\n    transition: padding-top 0.1s ease, margin-top 0.1s ease;\n    overflow-x: hidden;\n    \n}\n\n\n\ninput.question[_ngcontent-%COMP%] + label[_ngcontent-%COMP%], textarea.question[_ngcontent-%COMP%] + label[_ngcontent-%COMP%] {\n    display: block;\n    position: relative;\n    white-space: nowrap;\n    padding: 0;\n    margin: 0;\n    width: 90%;\n    border-top: 1px solid black;\n    transition: width 0.5s ease;\n    height: 0px;\n}\n\ninput.question[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%], textarea.question[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\ninput.question[_ngcontent-%COMP%]:focus, input.question[_ngcontent-%COMP%]:valid {\n    padding-top: -5px;\n    \n}\n\ntextarea.question[_ngcontent-%COMP%]:valid, textarea.question[_ngcontent-%COMP%]:focus {\n    margin-top: 35px;\n}\n\ninput.question[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%], input.question[_ngcontent-%COMP%]:valid + label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] {\n    top: -100px;\n    font-size: 22px;\n    color: #333;\n}\n\ntextarea.question[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%], textarea.question[_ngcontent-%COMP%]:valid + label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] {\n    top: -150px;\n    font-size: 22px;\n    color: #333;\n}\n\ninput.question[_ngcontent-%COMP%]:valid + label[_ngcontent-%COMP%], textarea.question[_ngcontent-%COMP%]:valid + label[_ngcontent-%COMP%] {\n    border-color: black;\n}\n\ninput.question[_ngcontent-%COMP%]:invalid, textarea.question[_ngcontent-%COMP%]:invalid {\n    box-shadow: none;\n}\n\ninput.question[_ngcontent-%COMP%] + label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%], textarea.question[_ngcontent-%COMP%] + label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] {\n    font-weight: 300;\n    margin: 0;\n    position: absolute;\n    color: black;\n    font-size: 28px;\n    top: -66px;\n    left: 0px;\n    z-index: -1;\n    transition: top 0.6s ease, font-size 0.6s ease, color 0.6s ease;\n}\n\ninput[type=\"submit\"][_ngcontent-%COMP%] {\n    transition: opacity 0.5s ease, background 0.5s ease;\n    display: block;\n    opacity: 0;\n    margin: 10px 0 0 0;\n    padding: 10px;\n    cursor: pointer;\n}\n\ninput[type=\"submit\"][_ngcontent-%COMP%]:hover {\n    background: #EEE;\n}\n\ninput[type=\"submit\"][_ngcontent-%COMP%]:active {\n    background: #999;\n}\n\ninput.question[_ngcontent-%COMP%]:valid ~ input[type=\"submit\"][_ngcontent-%COMP%], textarea.question[_ngcontent-%COMP%]:valid ~ input[type=\"submit\"][_ngcontent-%COMP%] {\n    -webkit-animation: appear 1s forwards;\n    animation: appear 1s forwards;\n}\n\ninput.question[_ngcontent-%COMP%]:invalid ~ input[type=\"submit\"][_ngcontent-%COMP%], textarea.question[_ngcontent-%COMP%]:invalid ~ input[type=\"submit\"][_ngcontent-%COMP%] {\n    display: none;\n}\n\n\n\n@-webkit-keyframes appear {\n    100% {\n        opacity: 0.8;\n    }\n}\n\n@keyframes appear {\n    100% {\n        opacity: 0.8;\n    }\n}\n\n\n\n.form-control[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    border: none;\n    border-bottom: 1px solid;\n    border-radius: 0rem;\n    width: 100%;\n    \n}\n\n\n\n.btn[_ngcontent-%COMP%] {\n    \n    width: 100px;\n    font-size: 14px;\n    background-color: #38baa2;\n    color: white;\n    border: 1px solid transparent;\n}\n\n.btn-danger[_ngcontent-%COMP%] {\n    background-color: red;\n    border-radius: 5px;\n    height: 35px;\n    width: 100px;\n    font-size: 14px;\n    color: white;\n    border: 1px solid transparent;\n}\n\n.register[_ngcontent-%COMP%] {\n    \n    background: -webkit-linear-gradient(left, rgb(26, 23, 23), #38baa2);\n    \n    padding: 3%;\n}\n\n.register-left[_ngcontent-%COMP%] {\n    text-align: center;\n    color: #fff;\n    margin-top: 4%;\n}\n\n.register-left[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    border: none;\n    border-radius: 1.5rem;\n    padding: 2%;\n    width: 60%;\n    background: #f8f9fa;\n    font-weight: bold;\n    color: #383d41;\n    margin-top: 30%;\n    margin-bottom: 3%;\n    cursor: pointer;\n}\n\n.register-right[_ngcontent-%COMP%] {\n    background: white;\n    border-top-left-radius: 10% 50%;\n    border-bottom-left-radius: 10% 50%;\n}\n\n\n\n.register-left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-top: 15%;\n    margin-bottom: 5%;\n    width: 50%;\n    -webkit-animation: mover 3s infinite alternate;\n    animation: mover 0.5s infinite alternate;\n}\n\n@-webkit-keyframes mover {\n    0% {\n        transform: translateY(0);\n    }\n    100% {\n        transform: translateY(-20px);\n    }\n}\n\n@keyframes mover {\n    0% {\n        transform: translateY(0);\n    }\n    100% {\n        transform: translateY(-20px);\n    }\n}\n\n.register-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: lighter;\n    padding: 12%;\n    margin-top: -9%;\n}\n\n.register[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%] {\n    padding: 10%;\n    margin-top: 10%;\n}\n\n.register-heading[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-top: 8%;\n    margin-bottom: -15%;\n    color: #495057;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2xlYWRzL2FkZC1sZWFkcy9hZGQtbGVhZHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxrREFBa0Q7SUFDbEQsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTs7OztJQUlJLGlDQUFpQztJQUNqQyxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxVQUFVO0FBQ2Q7O0FBR0EsZ0RBQWdEOztBQUVoRDs7SUFFSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsWUFBWTtJQUNaLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsdURBQXVEO0lBQ3ZELGtCQUFrQjtJQUNsQixvREFBb0Q7QUFDeEQ7O0FBR0EsOEJBQThCOztBQUU5Qjs7SUFFSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsU0FBUztJQUNULFVBQVU7SUFDViwyQkFBMkI7SUFFM0IsMkJBQTJCO0lBQzNCLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksV0FBVztJQUNYLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksV0FBVztJQUNYLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtJQUNmLFVBQVU7SUFDVixTQUFTO0lBQ1QsV0FBVztJQUVYLCtEQUErRDtBQUNuRTs7QUFFQTtJQUVJLG1EQUFtRDtJQUNuRCxjQUFjO0lBQ2QsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxxQ0FBcUM7SUFDckMsNkJBQTZCO0FBQ2pDOztBQUVBOztJQUVJLGFBQWE7QUFDakI7O0FBR0E7Ozs7T0FJTzs7QUFFUDtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtBQUNKOztBQUpBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7O0FBR0EsV0FBVzs7QUFFWDtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUdBLEtBQUs7O0FBRUw7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGlFQUFpRTtJQUNqRSxtRUFBbUU7SUFDbkUsb0JBQW9CO0lBQ3BCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsK0JBQStCO0lBQy9CLGtDQUFrQztBQUN0Qzs7QUFHQSxrQkFBa0I7O0FBRWxCO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsOENBQThDO0lBQzlDLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSw0QkFBNEI7SUFDaEM7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSw0QkFBNEI7SUFDaEM7QUFDSjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9sZWFkcy9hZGQtbGVhZHMvYWRkLWxlYWRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLyogaGVpZ2h0OiAyMDBweDsgKi9cbiAgICAvKiBib3JkZXI6IDNweCBzb2xpZCBncmVlbjsgKi9cbn1cblxuaDIge1xuICAgIGZvbnQ6IDIwMCAyNXB4LzMwcHggU2NyaWJibGUsIFwiU2NyaWJibGVcIiwgU2NyaWJibGU7XG4gICAgY29sb3I6IHdoaXRlc21va2U7XG59XG5cbmh0bWwge1xuICAgIGZvbnQtZmFtaWx5OiAnTG9yYScsIHNhbnMtc2VyaWY7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmJvZHkge1xuICAgIG1hcmdpbjogNSUgYXV0byAwIGF1dG87XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXgtd2lkdGg6IDExMjVweDtcbn1cblxuaDEge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyLjUlO1xufVxuXG5pbnB1dCxcbnNwYW4sXG5sYWJlbCxcbnRleHRhcmVhIHtcbiAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgLyogbWFyZ2luOiAxMHB4OyAqL1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxudGV4dGFyZWE6Zm9jdXMsXG5pbnB1dDpmb2N1cyB7XG4gICAgb3V0bGluZTogMDtcbn1cblxuXG4vKiBUaGUgdGV4dCB3aGVyZSBpbnB1dCBmaWVsZCB3b3VsZCBiZSB3cml0dGVuICovXG5cbmlucHV0LnF1ZXN0aW9uLFxudGV4dGFyZWEucXVlc3Rpb24ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBwYWRkaW5nLXRvcCAwLjFzIGVhc2UsIG1hcmdpbi10b3AgMC4xcyBlYXNlO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAvKiBIYWNrIHRvIG1ha2UgXCJyb3dzXCIgYXR0cmlidXRlIGFwcGx5IGluIEZpcmVmb3guICovXG59XG5cblxuLyogVW5kZXJsaW5lIGFuZCBQbGFjZWhvbGRlciAqL1xuXG5pbnB1dC5xdWVzdGlvbitsYWJlbCxcbnRleHRhcmVhLnF1ZXN0aW9uK2xhYmVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogOTAlO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIDAuNXMgZWFzZTtcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjVzIGVhc2U7XG4gICAgaGVpZ2h0OiAwcHg7XG59XG5cbmlucHV0LnF1ZXN0aW9uOmZvY3VzK2xhYmVsLFxudGV4dGFyZWEucXVlc3Rpb246Zm9jdXMrbGFiZWwge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5pbnB1dC5xdWVzdGlvbjpmb2N1cyxcbmlucHV0LnF1ZXN0aW9uOnZhbGlkIHtcbiAgICBwYWRkaW5nLXRvcDogLTVweDtcbiAgICAvKiBtYXJnaW4tdG9wOiAtMnB4OyAqL1xufVxuXG50ZXh0YXJlYS5xdWVzdGlvbjp2YWxpZCxcbnRleHRhcmVhLnF1ZXN0aW9uOmZvY3VzIHtcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xufVxuXG5pbnB1dC5xdWVzdGlvbjpmb2N1cytsYWJlbD5zcGFuLFxuaW5wdXQucXVlc3Rpb246dmFsaWQrbGFiZWw+c3BhbiB7XG4gICAgdG9wOiAtMTAwcHg7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGNvbG9yOiAjMzMzO1xufVxuXG50ZXh0YXJlYS5xdWVzdGlvbjpmb2N1cytsYWJlbD5zcGFuLFxudGV4dGFyZWEucXVlc3Rpb246dmFsaWQrbGFiZWw+c3BhbiB7XG4gICAgdG9wOiAtMTUwcHg7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGNvbG9yOiAjMzMzO1xufVxuXG5pbnB1dC5xdWVzdGlvbjp2YWxpZCtsYWJlbCxcbnRleHRhcmVhLnF1ZXN0aW9uOnZhbGlkK2xhYmVsIHtcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xufVxuXG5pbnB1dC5xdWVzdGlvbjppbnZhbGlkLFxudGV4dGFyZWEucXVlc3Rpb246aW52YWxpZCB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuaW5wdXQucXVlc3Rpb24rbGFiZWw+c3BhbixcbnRleHRhcmVhLnF1ZXN0aW9uK2xhYmVsPnNwYW4ge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIHRvcDogLTY2cHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHotaW5kZXg6IC0xO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogdG9wIDAuNnMgZWFzZSwgZm9udC1zaXplIDAuNnMgZWFzZSwgY29sb3IgMC42cyBlYXNlO1xuICAgIHRyYW5zaXRpb246IHRvcCAwLjZzIGVhc2UsIGZvbnQtc2l6ZSAwLjZzIGVhc2UsIGNvbG9yIDAuNnMgZWFzZTtcbn1cblxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZSwgYmFja2dyb3VuZCAwLjVzIGVhc2U7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UsIGJhY2tncm91bmQgMC41cyBlYXNlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjRUVFO1xufVxuXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogIzk5OTtcbn1cblxuaW5wdXQucXVlc3Rpb246dmFsaWR+aW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcbnRleHRhcmVhLnF1ZXN0aW9uOnZhbGlkfmlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBhcHBlYXIgMXMgZm9yd2FyZHM7XG4gICAgYW5pbWF0aW9uOiBhcHBlYXIgMXMgZm9yd2FyZHM7XG59XG5cbmlucHV0LnF1ZXN0aW9uOmludmFsaWR+aW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcbnRleHRhcmVhLnF1ZXN0aW9uOmludmFsaWR+aW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuXG4vKiBALXdlYmtpdC1rZXlmcmFtZXMgYXBwZWFyIHtcbiAgICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAwLjk7XG4gICAgICB9XG4gICAgfSAqL1xuXG5Aa2V5ZnJhbWVzIGFwcGVhciB7XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICB9XG59XG5cblxuLyogMDIgZW5kICovXG5cbi5mb3JtLWNvbnRyb2wge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAwcmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8qIGNvbG9yOiMzOGJhYTI7ICovXG59XG5cblxuLyogICovXG5cbi5idG4ge1xuICAgIC8qIG1hcmdpbi1sZWZ0OiA0MHB4OyAqL1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4YmFhMjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5idG4tZGFuZ2VyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLnJlZ2lzdGVyIHtcbiAgICAvKiBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMzhiYWEyLCAjMGQ2YjkyKTsgKi9cbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2IoMjYsIDIzLCAyMyksICMzOGJhYTIpO1xuICAgIC8qIG1hcmdpbi10b3A6IDMlOyAqL1xuICAgIHBhZGRpbmc6IDMlO1xufVxuXG4ucmVnaXN0ZXItbGVmdCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi10b3A6IDQlO1xufVxuXG4ucmVnaXN0ZXItbGVmdCBpbnB1dCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICB3aWR0aDogNjAlO1xuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICMzODNkNDE7XG4gICAgbWFyZ2luLXRvcDogMzAlO1xuICAgIG1hcmdpbi1ib3R0b206IDMlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJlZ2lzdGVyLXJpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMCUgNTAlO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwJSA1MCU7XG59XG5cblxuLyogSW1hZ2UgRWZmZWN0cyAqL1xuXG4ucmVnaXN0ZXItbGVmdCBpbWcge1xuICAgIG1hcmdpbi10b3A6IDE1JTtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgICB3aWR0aDogNTAlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZlciAzcyBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gICAgYW5pbWF0aW9uOiBtb3ZlciAwLjVzIGluZmluaXRlIGFsdGVybmF0ZTtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIG1vdmVyIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIG1vdmVyIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gICAgfVxufVxuXG4ucmVnaXN0ZXItbGVmdCBwIHtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICBwYWRkaW5nOiAxMiU7XG4gICAgbWFyZ2luLXRvcDogLTklO1xufVxuXG4ucmVnaXN0ZXIgLnJlZ2lzdGVyLWZvcm0ge1xuICAgIHBhZGRpbmc6IDEwJTtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG59XG5cbi5yZWdpc3Rlci1oZWFkaW5nIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogOCU7XG4gICAgbWFyZ2luLWJvdHRvbTogLTE1JTtcbiAgICBjb2xvcjogIzQ5NTA1Nztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddLeadsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-leads',
                templateUrl: './add-leads.component.html',
                styleUrls: ['./add-leads.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "cNoH":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mapbox-gl */ "4ZJM");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_Map_mapservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/Map/mapservice.service */ "2sHE");
/* harmony import */ var _dashboard_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dashboard/header/header.component */ "iqMG");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dashboard/dashboard.component */ "QX6l");






class MapComponent {
    constructor(mapservice) {
        this.mapservice = mapservice;
        this.opacity = 1;
        this.style = 'mapbox://styles/mapbox/streets-v11';
        this.lat = 33.628463;
        this.lng = 73.087581;
        this.geojson = {
            type: 'FeatureCollection',
            features: [
                {
                    type: 'Feature',
                    properties: {
                        message: 'Foo',
                        iconSize: [24, 24],
                    },
                    geometry: {
                        type: 'Point',
                        coordinates: { lat: 62.324462890625, lng: 33.024695711685304 },
                    },
                },
                {
                    type: 'Feature',
                    properties: {
                        message: 'Bar',
                        iconSize: [24, 24],
                    },
                    geometry: {
                        type: 'Point',
                        coordinates: { lat: 73.2158203125, lng: 33.97189158092897 },
                    },
                },
                {
                    type: 'Feature',
                    properties: {
                        message: 'Baz',
                        iconSize: [24, 24],
                    },
                    geometry: {
                        type: 'Point',
                        coordinates: { lat: 51.29223632812498, lng: 34.28151823530889 },
                    },
                },
            ],
        };
        this.mapArray = [
            {
                lat: 72.99641,
                lng: 33.645992,
                tag: 'Islamabad',
                size: [51, 22],
            },
            {
                lat: 73.0169,
                lng: 33.5651,
                tag: 'Rawalpindi',
                size: [51, 22],
            },
            {
                lat: 71.5249,
                lng: 34.0151,
                tag: 'Peshawar',
                size: [51, 22],
            },
            {
                lat: 67.0011,
                lng: 24.8607,
                tag: 'Karachi',
                size: [51, 22],
            },
        ];
    }
    ngOnInit() {
        this.initializemapbox();
        ///////////////// This is the data coming from url into our frontend map //////////////////////
        // this.mapservice.readData()
        // .subscribe
        // (data=> {
        //     data.property.forEach(( data ) => {
        //       // create a DOM element for the marker
        //       const el = document.createElement('div');
        //       el.className = 'data';
        //       el.style.backgroundImage = 'url(/assets/asasamarker.png)';
        //       el.innerHTML = data.demand;
        //       el.style.fontStyle = 'bold';
        //       el.style.textAlign = 'center';
        //       el.style.color = 'white';
        //       el.style.width = '51px';
        //       el.style.height = '22px';
        //       el.style.fontSize = '10px';
        //       el.style.fontWeight = '700';
        //       el.style.fontFamily = 'Jersey M54';
        //       // el.style.fontSizeAdjust = '5px';
        //       new mapboxgl.Marker(el)
        //         .setLngLat([
        //           data.location_data.marker_data.mlongitude,
        //           data.location_data.marker_data.mlatitide
        //         ])
        //         //.setPopup(new mapboxgl.Popup().setHTML(data.tag))
        //         .addTo(this.map);
        //     });
        // })
    }
    initializemapbox() {
        this.map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["Map"]({
            accessToken: 'pk.eyJ1IjoibmFiZWVsc2FsZWVtIiwiYSI6ImNrY3p4MWhrZzBiNWwyd3FtOGx3aTZsbjEifQ.z6RLknl-YnJe2eKqMjPElg',
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [73.024955, 33.650753],
            zoom: 10,
        });
        this.mapArray.forEach((marker) => {
            // create a DOM element for the marker
            const el = document.createElement('div');
            el.className = 'marker';
            el.style.backgroundImage = 'url(/assets/icons/asasamarker.png)';
            el.innerHTML = marker.tag;
            el.style.fontStyle = 'bold';
            el.style.textAlign = 'center';
            el.style.color = 'white';
            el.style.width = marker.size[0] + 'px';
            el.style.height = marker.size[1] + 'px';
            el.style.fontSize = '10px';
            el.style.fontWeight = '700';
            el.style.fontFamily = 'quartzo';
            new mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["Marker"](el)
                .setLngLat([
                marker.lat,
                marker.lng,
            ])
                .setPopup(new mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["Popup"]().setHTML(marker.tag))
                .addTo(this.map);
        });
        // this.map.addSource
        this.mapboxOverlay();
        this.map.addControl(new mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["FullscreenControl"]());
        this.map.addControl(new mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["NavigationControl"]());
        this.map.addControl(new mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["GeolocateControl"]({
            positionOptions: {
                enableHighAccuracy: true,
            },
            trackUserLocation: true,
        }));
    }
    mapboxOverlay() {
        const slider = document.getElementById('slider');
        const sliderValue = document.getElementById('slider-value');
        this.map.on('load', () => {
            // tslint:disable-next-line: no-unused-expression
            this.map.addSource('myImageSource', {
                type: 'image',
                url: 'assets/i-10-islamabad.jpg',
                coordinates: [
                    [73.024955, 33.650753],
                    [73.041134, 33.659291],
                    [73.051520, 33.645466],
                    [73.035384, 33.636927],
                ],
            });
            this.map.addLayer({
                id: 'myImageSource',
                source: 'myImageSource',
                type: 'raster',
                paint: {
                    'raster-opacity': this.opacity,
                },
            });
            slider.addEventListener('input', (e) => {
                // Adjust the layers opacity. layer here is arbitrary - this could
                // be another layer name found in your style or a custom layer
                // added on the fly using `addSource`.
                // e.target;
                const input = document.getElementById('slider')
                    .value;
                this.map.setPaintProperty('myImageSource', 'raster-opacity', parseInt('' + input + '', 10) / 100);
                // Value indicator
                sliderValue.textContent = '' + input + '' + '%';
            });
        });
        this.map.on('load', () => {
            // tslint:disable-next-line: no-unused-expression
            this.map.addSource('f-7', {
                type: 'image',
                url: 'assets/f-7.png',
                coordinates: [
                    [73.042912, 33.722351],
                    [73.061492, 33.731482],
                    [73.070957, 33.719287],
                    [73.052850, 33.709633],
                ],
            });
            this.map.addLayer({
                id: 'f-7',
                source: 'f-7',
                type: 'raster',
                paint: {
                    'raster-opacity': this.opacity,
                },
            });
            slider.addEventListener('input', (e) => {
                const input = document.getElementById('slider')
                    .value;
                this.map.setPaintProperty('f-7', 'raster-opacity', parseInt('' + input + '', 10) / 100);
                // Value indicator
                sliderValue.textContent = '' + input + '' + '%';
            });
        });
        this.map.on('load', () => {
            // tslint:disable-next-line: no-unused-expression
            this.map.addSource('phase-2', {
                type: 'image',
                url: 'assets/phase 2.png',
                coordinates: [
                    [73.114200, 33.565860],
                    [73.126250, 33.565800],
                    [73.125652, 33.552467],
                    [73.112955, 33.552230] // Bahria Town Phase III Phase 3  
                ],
            });
            this.map.addLayer({
                id: 'phase-2',
                source: 'phase-2',
                type: 'raster',
                paint: {
                    'raster-opacity': this.opacity,
                },
            });
            slider.addEventListener('input', (e) => {
                const input = document.getElementById('slider')
                    .value;
                this.map.setPaintProperty('phase-2', 'raster-opacity', parseInt('' + input + '', 10) / 100);
                // Value indicator
                sliderValue.textContent = '' + input + '' + '%';
            });
        });
        // this.map.on('load', () => {
        //   // tslint:disable-next-line: no-unused-expression
        //   this.map.addSource('phase-3', {
        //     type: 'image',
        //     url: 'assets/phase 3.png',
        //     coordinates: [
        //       [73.104769, 33.563229], // Phase 2 Gulrez Housing Scheme
        //       [73.127969, 33.560081], // Phase 2 Bahria Town, Rawalpindi 
        //       [73.121127, 33.544900], // Soan River
        //       [73.093428, 33.550266] // Golden Jubilee Residential CHS
        //     ],
        //   });
        //   this.map.addLayer({
        //     id: 'phase-3',
        //     source: 'phase-3',
        //     type: 'raster',
        //     paint: {
        //       'raster-opacity': this.opacity,
        //     },
        //   });
        //   slider.addEventListener('input', (e) => {
        //     const input = (document.getElementById('slider') as HTMLInputElement)
        //       .value;
        //     this.map.setPaintProperty(
        //       'phase-3',
        //       'raster-opacity',
        //       parseInt('' + input + '', 10) / 100
        //     );
        //     // Value indicator
        //     sliderValue.textContent = '' + input + '' + '%';
        //   });
        // });
        this.map.on('load', () => {
            // tslint:disable-next-line: no-unused-expression
            this.map.addSource('e-16', {
                type: 'image',
                url: 'assets/maps_images/E-16-crop.png',
                coordinates: [
                    [72.877392, 33.652982],
                    [72.898120, 33.652946],
                    [72.898034, 33.637977],
                    [72.877349, 33.638049]
                ],
            });
            this.map.addLayer({
                id: 'e-16',
                source: 'e-16',
                type: 'raster',
                paint: {
                    'raster-opacity': this.opacity,
                },
            });
            slider.addEventListener('input', (e) => {
                const input = document.getElementById('slider')
                    .value;
                this.map.setPaintProperty('e-16', 'raster-opacity', parseInt('' + input + '', 10) / 100);
                // Value indicator
                sliderValue.textContent = '' + input + '' + '%';
            });
        });
        this.map.on('load', () => {
            // tslint:disable-next-line: no-unused-expression
            this.map.addSource('e-18', {
                type: 'image',
                url: 'assets/maps_images/E-18-crop.png',
                coordinates: [
                    [72.834467, 33.635597],
                    [72.858070, 33.647030],
                    [72.877725, 33.620232],
                    [72.854551, 33.609438]
                ],
            });
            this.map.addLayer({
                id: 'e-18',
                source: 'e-18',
                type: 'raster',
                paint: {
                    'raster-opacity': this.opacity,
                },
            });
            slider.addEventListener('input', (e) => {
                const input = document.getElementById('slider')
                    .value;
                this.map.setPaintProperty('e-18', 'raster-opacity', parseInt('' + input + '', 10) / 100);
                // Value indicator
                sliderValue.textContent = '' + input + '' + '%';
            });
        });
        this.map.on('load', () => {
            // tslint:disable-next-line: no-unused-expression
            this.map.addSource('enclave', {
                type: 'image',
                url: 'assets/enclave_map-crop.png',
                coordinates: [
                    [33.701923, 73.200201],
                    [33.703352, 73.264891],
                    [33.674785, 73.264236],
                    [33.674999, 73.196210]
                ],
            });
            this.map.addLayer({
                id: 'enclave',
                source: 'enclave',
                type: 'raster',
                paint: {
                    'raster-opacity': this.opacity,
                },
            });
            slider.addEventListener('input', (e) => {
                const input = document.getElementById('slider')
                    .value;
                this.map.setPaintProperty('enclave', 'raster-opacity', parseInt('' + input + '', 10) / 100);
                // Value indicator
                sliderValue.textContent = '' + input + '' + '%';
            });
        });
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_Map_mapservice_service__WEBPACK_IMPORTED_MODULE_2__["MapserviceService"])); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], decls: 15, vars: 0, consts: [[1, "row"], [1, "col-md-12"], ["id", "map", 1, "match-parent"], [1, "map-overlay", "top"], [1, "map-overlay-inner"], ["id", "slider-value"], ["id", "slider", "type", "range", "min", "0", "max", "100", "step", "0", "value", "100"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Layer opacity: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_dashboard_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]], styles: [".match-parent[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 600px;\n}\n\n.map-overlay[_ngcontent-%COMP%] {\n    font: bold 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;\n    position: absolute;\n    width: 20%;\n    top: 0;\n    left: 0;\n    \n    }\n\n.map-overlay-inner[_ngcontent-%COMP%] {\n    background-color: #fff;\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n    border-radius: 3px;\n    padding: 10px;\n    margin-bottom: 10px;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxtRUFBbUU7SUFDbkUsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixNQUFNO0lBQ04sT0FBTztJQUNQLG1CQUFtQjtJQUNuQjs7QUFFQTtJQUNBLHNCQUFzQjtJQUN0Qix3Q0FBd0M7SUFDeEMsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIiLCJmaWxlIjoic3JjL2FwcC9tYXAvbWFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0Y2gtcGFyZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDYwMHB4O1xufVxuXG4ubWFwLW92ZXJsYXkge1xuICAgIGZvbnQ6IGJvbGQgMTJweC8yMHB4ICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAyMCU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgLyogcGFkZGluZzogMTBweDsgKi9cbiAgICB9XG4gICAgIFxuICAgIC5tYXAtb3ZlcmxheS1pbm5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuICAgICBcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-map',
                templateUrl: './map.component.html',
                styleUrls: ['./map.component.css']
            }]
    }], function () { return [{ type: _services_Map_mapservice_service__WEBPACK_IMPORTED_MODULE_2__["MapserviceService"] }]; }, null); })();


/***/ }),

/***/ "iOYQ":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/inactive/inactive.component.ts ***!
  \**********************************************************/
/*! exports provided: InactiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InactiveComponent", function() { return InactiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");
/* harmony import */ var _Pipes_Non_Utilized_Pipes_table_filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Pipes/Non-Utilized_Pipes/table-filter.pipe */ "/4vt");
/* harmony import */ var _Pipes_Non_Utilized_Pipes_table_filter02_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Pipes/Non-Utilized_Pipes/table-filter02.pipe */ "KgeA");
/* harmony import */ var _Pipes_Non_Utilized_Pipes_table_filter03_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Pipes/Non-Utilized_Pipes/table-filter03.pipe */ "tzAo");
/* harmony import */ var _Pipes_Non_Utilized_Pipes_table_filter04_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Pipes/Non-Utilized_Pipes/table-filter04.pipe */ "AiYy");
/* harmony import */ var _Pipes_Non_Utilized_Pipes_table_filter05_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Pipes/Non-Utilized_Pipes/table-filter05.pipe */ "rkdl");
/* harmony import */ var _Pipes_Non_Utilized_Pipes_table_filter06_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Pipes/Non-Utilized_Pipes/table-filter06.pipe */ "M56v");











function InactiveComponent_tr_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Client);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Purpose);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Prop_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Prop_num);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Area);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Location);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Demand);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Phone_num);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Comment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Assigned_to);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.Added_on);
} }
class InactiveComponent {
    constructor() {
        this.users = [
            { Id: '1', Client: 'Aftab Nabi', Purpose: 'Rent', Prop_type: 'Apartment', Prop_num: '5', Area: '0.5 Kanal', Location: 'E-11/4', Demand: '45,000', Phone_num: '090078601', Comment: 'Want 4 bed apartment', Assigned_to: '', Admin_status: 'Added', Agent_status: 'Assigned', Added_on: 'Aug,15,2020' },
            { Id: '2', Client: 'Awais', Purpose: 'Rent', Prop_type: 'Apartment', Prop_num: '12', Area: '1 Kanal', Location: 'F-6/4', Demand: '450,000', Phone_num: '090078601', Comment: 'Want 4 bed ', Assigned_to: '', Admin_status: 'Added', Agent_status: 'Assigned', Added_on: 'Aug,15,2020' },
            { Id: '3', Client: 'Usama Gull', Purpose: 'Buy', Prop_type: 'House', Prop_num: '14', Area: '2 Kanal', Location: 'G-15/2', Demand: '150,000', Phone_num: '090078601', Comment: 'Want 3 bed ', Assigned_to: '', Admin_status: 'Added', Agent_status: 'Assigned', Added_on: 'Aug,15,2020' },
            { Id: '4', Client: 'Usman', Purpose: 'Rent', Prop_type: 'Residential Plot', Prop_num: '72', Area: '2 Kanal', Location: 'E-11/4', Demand: '45,000', Phone_num: '090078601', Comment: 'Want 1 bed ', Assigned_to: '', Admin_status: 'Added', Agent_status: 'Assigned', Added_on: 'Aug,15,2020' },
            { Id: '5', Client: 'Zakria', Purpose: 'Buy', Prop_type: 'Apartment', Prop_num: '5', Area: '0.5 Kanal', Location: 'E-11/4', Demand: '45,000', Phone_num: '090078601', Comment: 'Want 5 bed ', Assigned_to: '', Admin_status: 'Added', Agent_status: 'Assigned', Added_on: 'Aug,15,2020' },
        ];
    }
    ngOnInit() {
    }
}
InactiveComponent.ɵfac = function InactiveComponent_Factory(t) { return new (t || InactiveComponent)(); };
InactiveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InactiveComponent, selectors: [["app-inactive"]], decls: 86, vars: 28, consts: [[1, "inactive"], [1, "pull-right"], [1, "card-body", "row"], [1, "col-auto"], [1, "fa", "fa-search", "icon"], [1, "col"], ["id", "myInput", "type", "text", "placeholder", "Search topic or keyword", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", "rounded-pill"], [1, "table", "table-hover", "table-dark"], ["scope", "col"], ["type", "text", "placeholder", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "", 1, "form-control"], [4, "ngFor", "ngForOf"]], template: function InactiveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00A0\u00A0\u00A0\u00A0Inactive/Deleted Leads");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InactiveComponent_Template_input_ngModelChange_12_listener($event) { return ctx.general_search = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Excel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Purpose");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Prop. Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Prop. #");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Area");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Demand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Phone #");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Lead Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Deleted by");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Added On");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Operations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InactiveComponent_Template_input_ngModelChange_53_listener($event) { return ctx.search_id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InactiveComponent_Template_input_ngModelChange_55_listener($event) { return ctx.search_client = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InactiveComponent_Template_input_ngModelChange_63_listener($event) { return ctx.search_area = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InactiveComponent_Template_input_ngModelChange_65_listener($event) { return ctx.search_location = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InactiveComponent_Template_input_ngModelChange_67_listener($event) { return ctx.search_demand = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, InactiveComponent_tr_78_Template, 28, 12, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](79, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](80, "tableFilter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](81, "tableFilter02");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](82, "tableFilter03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](83, "tableFilter04");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](84, "tableFilter05");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](85, "tableFilter06");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.general_search);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search_client);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search_area);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search_location);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search_demand);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](79, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](80, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](81, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](82, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](83, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](84, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](85, 25, ctx.users, ctx.search_client), ctx.search_demand), ctx.search_type), ctx.search_area), ctx.search_location), ctx.search_id), ctx.general_search));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__["Ng2SearchPipe"], _Pipes_Non_Utilized_Pipes_table_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["TableFilterPipe"], _Pipes_Non_Utilized_Pipes_table_filter02_pipe__WEBPACK_IMPORTED_MODULE_5__["TableFilter02Pipe"], _Pipes_Non_Utilized_Pipes_table_filter03_pipe__WEBPACK_IMPORTED_MODULE_6__["TableFilter03Pipe"], _Pipes_Non_Utilized_Pipes_table_filter04_pipe__WEBPACK_IMPORTED_MODULE_7__["TableFilter04Pipe"], _Pipes_Non_Utilized_Pipes_table_filter05_pipe__WEBPACK_IMPORTED_MODULE_8__["TableFilter05Pipe"], _Pipes_Non_Utilized_Pipes_table_filter06_pipe__WEBPACK_IMPORTED_MODULE_9__["TableFilter06Pipe"]], styles: [".fa-search[_ngcontent-%COMP%]:before {\n    margin-left: 39px;\n    content: \"\\f002\";\n}\nth[_ngcontent-%COMP%] {\n    background-color: black;\n    color: white;\n}\n.inactive[_ngcontent-%COMP%] {\n    overflow-x: hidden; \n  }\n.fa[_ngcontent-%COMP%]{\n    margin-left: 25px;\n}\n.icon[_ngcontent-%COMP%]{\n    margin-top: 14px;\n}\n.btn[_ngcontent-%COMP%]{\n    margin-left: 25px;\n    width: 100px;\n    font-size: 14px;\n    background-color: #38baa2 ;\n    color: white;\n    border: 1px solid transparent;\n  }\n.form-control-borderless[_ngcontent-%COMP%] {\n    border: none;\n    border: 1px solid whitesmoke;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2luYWN0aXZlL2luYWN0aXZlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCLEVBQUUsb0JBQW9CO0VBQzFDO0FBQ0Y7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWiw2QkFBNkI7RUFDL0I7QUFDQTtJQUNFLFlBQVk7SUFDWiw0QkFBNEI7QUFDaEM7QUFDQTs7Ozs7R0FLRyIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9pbmFjdGl2ZS9pbmFjdGl2ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhLXNlYXJjaDpiZWZvcmUge1xuICAgIG1hcmdpbi1sZWZ0OiAzOXB4O1xuICAgIGNvbnRlbnQ6IFwiXFxmMDAyXCI7XG59XG50aCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xufSBcbi5pbmFjdGl2ZSB7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuOyAvKiBIaWRlIHNjcm9sbGJhcnMgKi9cbiAgfVxuLmZhe1xuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xufVxuXG4uaWNvbntcbiAgICBtYXJnaW4tdG9wOiAxNHB4O1xufVxuLmJ0bntcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOGJhYTIgO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgfVxuICAuZm9ybS1jb250cm9sLWJvcmRlcmxlc3Mge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xufVxuLyogXG4uZm9ybS1jb250cm9sLWJvcmRlcmxlc3M6aG92ZXIsIC5mb3JtLWNvbnRyb2wtYm9yZGVybGVzczphY3RpdmUsIC5mb3JtLWNvbnRyb2wtYm9yZGVybGVzczpmb2N1cyB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn0gKi8iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InactiveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-inactive',
                templateUrl: './inactive.component.html',
                styleUrls: ['./inactive.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "iqMG":
/*!******************************************************!*\
  !*** ./src/app/dashboard/header/header.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/Authentication/authentication.service */ "6q8g");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");






class HeaderComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.tokenization();
    }
    // tslint:disable-next-line: typedef
    tokenization() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const token = yield this.authService.getToken();
            const decodedToken = yield this.authService.getDecodedToken(token);
            this.tokendata = decodedToken.data;
        });
    }
    // tslint:disable-next-line: typedef
    isLogin() {
        const token = this.authService.getToken();
        // console.log(token);
        return token;
    }
    // tslint:disable-next-line: typedef
    logout() {
        localStorage.removeItem('token');
        console.log('\nlogout\n');
        this.router.navigateByUrl('/');
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 4, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", 2, "border-bottom", "1px solid #39bba4", "padding", "0 15px"], ["href", "#", 1, "navbar-brand"], ["src", "assets/icons/Asasa-Logo.png"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"]], styles: [".navbar[_ngcontent-%COMP%] {\n    z-index: 1000;\n    position: fixed;\n    width: 100%;\n    \n    background: #31353d;\n    color: white;\n    \n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n}\n\nul[_ngcontent-%COMP%] {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    cursor: pointer;\n}\n\nli[_ngcontent-%COMP%] {\n    float: left;\n}\n\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 16px;\n    text-decoration: none;\n}\n\n.lead[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n    font-weight: 500;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    margin: 0 10px;\n}\n\n.navbar[_ngcontent-%COMP%] {\n    height: 80px;\n  }\n\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 80px !important;\n  }\n\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 0 12px;\n  }\n\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 0;\n    color: #242424;\n    font-size: 14px;\n    font-weight: 500;\n    text-transform: uppercase;\n    display: inline-block;\n    text-decoration: none;\n  }\n\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #36bfba;\n  }\n\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%], .navbar-toggler[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n    color: #36bfba;\n    transition: color 0.3s;\n  }\n\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::after {\n    content: \"\";\n    display: block;\n    margin-top: 5px;\n    width: 0;\n    height: 3px;\n    background: #36bfba;\n    transition: width 1s;\n  }\n\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]::after, .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::after {\n    width: 80%;\n  }\n\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li.item-has-child[_ngcontent-%COMP%]::after {\n    font-family: \"FontAwesome\";\n    content: \"\\f107\";\n  }\n\n.navbar-toggler[_ngcontent-%COMP%] {\n    border: 0;\n    outline: 0;\n  }\n\n.navbar-toggler[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    color: #242424;\n    border: none;\n    outline: none;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsV0FBVztJQUNYLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFRTtJQUNFLFlBQVk7RUFDZDs7QUFDQTtJQUNFLHVCQUF1QjtFQUN6Qjs7QUFDQTtJQUNFLGVBQWU7RUFDakI7O0FBQ0E7SUFDRSxVQUFVO0lBQ1YsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixxQkFBcUI7RUFDdkI7O0FBQ0E7SUFDRSxjQUFjO0VBQ2hCOztBQUNBOztJQUVFLGNBQWM7SUFDZCxzQkFBc0I7RUFDeEI7O0FBQ0E7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGVBQWU7SUFDZixRQUFRO0lBQ1IsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixvQkFBb0I7RUFDdEI7O0FBQ0E7O0lBRUUsVUFBVTtFQUNaOztBQUNBO0lBQ0UsMEJBQTBCO0lBQzFCLGdCQUFnQjtFQUNsQjs7QUFDQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0VBQ1o7O0FBQ0E7SUFDRSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGFBQWE7RUFDZiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXG4gICAgYmFja2dyb3VuZDogIzMxMzUzZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgLyogcG9zaXRpb246IGZpeGVkOyAqL1xufVxuXG4ubmF2YmFyLWJyYW5kIHtcbiAgICBmb250LXNpemU6IDEuNzVyZW07XG59XG5cbnVsIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmxpIHtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxubGkgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmxlYWQge1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5uYXYtbGluayB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIG1hcmdpbjogMCAxMHB4O1xufVxuXG4gIC5uYXZiYXIge1xuICAgIGhlaWdodDogODBweDtcbiAgfVxuICAubmF2YmFyIC5uYXZiYXItYnJhbmQgaW1nIHtcbiAgICBoZWlnaHQ6IDgwcHggIWltcG9ydGFudDtcbiAgfVxuICAubmF2YmFyIC5uYXZiYXItbmF2IGxpIHtcbiAgICBwYWRkaW5nOiAwIDEycHg7XG4gIH1cbiAgLm5hdmJhciAubmF2YmFyLW5hdiBsaSBhIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGNvbG9yOiAjMjQyNDI0O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICAubmF2YmFyIC5uYXZiYXItbmF2IGxpLmFjdGl2ZSBhIHtcbiAgICBjb2xvcjogIzM2YmZiYTtcbiAgfVxuICAubmF2YmFyIC5uYXZiYXItbmF2IGxpOmhvdmVyIGEsXG4gIC5uYXZiYXItdG9nZ2xlciBpOmhvdmVyIHtcbiAgICBjb2xvcjogIzM2YmZiYTtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xuICB9XG4gIC5uYXZiYXIgLm5hdmJhci1uYXYgbGkgYTo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogM3B4O1xuICAgIGJhY2tncm91bmQ6ICMzNmJmYmE7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggMXM7XG4gIH1cbiAgLm5hdmJhciAubmF2YmFyLW5hdiBsaTpob3ZlciBhOjphZnRlcixcbiAgLm5hdmJhciAubmF2YmFyLW5hdiBsaS5hY3RpdmUgYTo6YWZ0ZXIge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLm5hdmJhciAubmF2YmFyLW5hdiBsaS5pdGVtLWhhcy1jaGlsZDo6YWZ0ZXIge1xuICAgIGZvbnQtZmFtaWx5OiBcIkZvbnRBd2Vzb21lXCI7XG4gICAgY29udGVudDogXCJcXGYxMDdcIjtcbiAgfVxuICAubmF2YmFyLXRvZ2dsZXIge1xuICAgIGJvcmRlcjogMDtcbiAgICBvdXRsaW5lOiAwO1xuICB9XG4gIC5uYXZiYXItdG9nZ2xlciBpIHtcbiAgICBjb2xvcjogIzI0MjQyNDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: src_app_services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 2, vars: 0, template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "navbar works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "oFoK":
/*!**********************************************************************************!*\
  !*** ./src/app/dashboard/inventory/add-inventories/add-inventories.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AddInventoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddInventoriesComponent", function() { return AddInventoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/Authentication/authentication.service */ "6q8g");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../header/header.component */ "iqMG");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dashboard.component */ "QX6l");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");











function AddInventoriesComponent_div_51_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "City is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddInventoriesComponent_div_51_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddInventoriesComponent_div_51_div_3_div_1_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.f.city.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function AddInventoriesComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ng-select", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddInventoriesComponent_div_51_Template_ng_select_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.changeCity($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AddInventoriesComponent_div_51_div_3_Template, 2, 1, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r0.cities)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r0.submitted && ctx_r0.f.city.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f.city.errors);
} }
function AddInventoriesComponent_div_52_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "City is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddInventoriesComponent_div_52_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddInventoriesComponent_div_52_div_3_div_1_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.f.city.errors.required);
} }
const _c1 = function () { return { standalone: true }; };
function AddInventoriesComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ng-select", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddInventoriesComponent_div_52_Template_ng_select_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.user1.city[0].city = $event; })("change", function AddInventoriesComponent_div_52_Template_ng_select_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.changeCity($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AddInventoriesComponent_div_52_div_3_Template, 2, 1, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.user1.city[0].city)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1))("items", ctx_r1.cities)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r1.submitted && ctx_r1.f.city.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.submitted && ctx_r1.f.city.errors);
} }
function AddInventoriesComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ng-select", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddInventoriesComponent_div_54_Template_ng_select_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.selectStringLocations = $event; })("change", function AddInventoriesComponent_div_54_Template_ng_select_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.changeLocation($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.selectStringLocations)("multiple", true)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1))("items", ctx_r2.locations);
} }
function AddInventoriesComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ng-select", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddInventoriesComponent_div_55_Template_ng_select_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.selectStringLocations = $event; })("change", function AddInventoriesComponent_div_55_Template_ng_select_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.changeLocation($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.selectStringLocations)("multiple", true)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1))("items", ctx_r3.locations);
} }
function AddInventoriesComponent_span_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Select Property Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddInventoriesComponent_span_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r5.addinventoryForm.get("property_type").value, " ");
} }
function AddInventoriesComponent_div_132_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please check your PRICE ranges");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddInventoriesComponent_div_132_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddInventoriesComponent_div_132_div_1_Template, 2, 0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Price Range");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddInventoriesComponent_div_132_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.greaterThanValue = $event; })("ngModelChange", function AddInventoriesComponent_div_132_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.onChangePrice($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddInventoriesComponent_div_132_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.lessThanValue = $event; })("ngModelChange", function AddInventoriesComponent_div_132_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.onChangePrice($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.isInvalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6.greaterThanValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6.lessThanValue);
} }
function AddInventoriesComponent_div_133_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Demand ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddInventoriesComponent_div_134_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please check your AREA ranges");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddInventoriesComponent_div_134_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddInventoriesComponent_div_134_div_1_Template, 2, 0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Area Range");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddInventoriesComponent_div_134_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.greaterThanValue1 = $event; })("ngModelChange", function AddInventoriesComponent_div_134_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.onChangeArea($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddInventoriesComponent_div_134_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.lessThanValue1 = $event; })("ngModelChange", function AddInventoriesComponent_div_134_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.onChangeArea($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Sq. Feet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Sq. Yard ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Marla ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Kanal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.isInvalid1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r8.greaterThanValue1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r8.lessThanValue1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r8.addinventoryForm.get("area_unit").value === "Sq. Feet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r8.addinventoryForm.get("area_unit").value === "Sq. Yard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r8.addinventoryForm.get("area_unit").value === "Marla");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r8.addinventoryForm.get("area_unit").value === "Kanal");
} }
function AddInventoriesComponent_div_144_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Simple Area");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Sq. Feet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Sq. Yard ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Marla ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Kanal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r9.addinventoryForm.get("area_unit").value === "Sq. Feet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r9.addinventoryForm.get("area_unit").value === "Sq. Yard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r9.addinventoryForm.get("area_unit").value === "Marla");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r9.addinventoryForm.get("area_unit").value === "Kanal");
} }
function AddInventoriesComponent_div_169_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddInventoriesComponent_div_169_Template_input_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.assigned_To("Self"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Self ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Admins ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Agents ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r10.addinventoryForm.get("assigned_to1").value === "Self");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r10.addinventoryForm.get("assigned_to1").value === "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r10.addinventoryForm.get("assigned_to1").value === "Agents");
} }
function AddInventoriesComponent_div_172_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ng-select", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddInventoriesComponent_div_172_Template_ng_select_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.changeAccess($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r11.access_type);
} }
function AddInventoriesComponent_div_173_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ng-select", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddInventoriesComponent_div_173_Template_ng_select_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.changeAccess2($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r12.userList);
} }
// import { MapserviceService } from "../services/mapservice.service";
class AddInventoriesComponent {
    //////////////////////////////////
    constructor(formBuilder, authService, router, toastr) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.formSendingStatus = "Post Ad";
        this.access_type = [
            { access: "super_admin" },
            { access: "agent" },
            { access: "city_admin" },
        ];
        this.access_type1 = [{ access: "all_agents" }];
        this.isInvalid = false; //Contains the valid status of PRICE ranges
        this.isInvalid1 = false; //Contains the valid status of AREA ranges
        this.selectedLocations = [];
        this.selectStringLocations = [];
        // Requirements for Map on the template, below;
        this.opacity = 1;
        this.style = "mapbox://styles/mapbox/streets-v11";
        this.lat = 33.628463;
        this.lng = 73.087581;
        this.submitted = false;
        this.urls = [];
        this.fileToUpload = null;
        this.isRent = true;
    }
    get Property_typename() {
        return this.addinventoryForm.get("prop_typename");
    }
    // convenience getter for easy access to form fields
    get f() {
        return this.addinventoryForm.controls;
    }
    ngOnInit() {
        this.user1 = this.authService.getUser();
        if (this.user1) {
            console.log("User1: ", this.user1);
            this.authService.removeUser();
        }
        const token = this.authService.getToken();
        this.user = this.authService.getDecodedToken(token).data;
        const form_title = this.authService.getFormTitle();
        this.authService.removeFormTitle();
        this.formDeclare();
        this.addinventoryForm.patchValue({ form_title });
        this.getCities();
        if (this.user1) {
            this.updatefields();
        }
        this.getUserList();
    }
    // Function to call User data table for Assigned_To Field of the add-inventory-form
    getUserList() {
        this.authService.getUsers().subscribe((data) => {
            this.userList = data;
            console.log("User Get Response", this.userList);
        }, (err) => {
            console.error(err);
        });
    }
    //Function that is working on price filter/check
    onChangePrice(event) {
        this.isInvalid = this.greaterThanValue > this.lessThanValue;
    }
    //Function that is working on AREA filter/check
    onChangeArea(event) {
        this.isInvalid1 = this.greaterThanValue1 > this.lessThanValue1;
    }
    // Function to patch the value from ng select
    changeAccess(access) {
        // console.log(access.access);
        this.addinventoryForm.patchValue({ assigned_to: access.access });
        // console.log(this.addinventoryForm.value);
    }
    // Function to patch the value from ng select
    changeAccess2(access) {
        // console.log(access.fullname);
        this.addinventoryForm.patchValue({ assigned_to: access.fullname });
        // console.log(this.addinventoryForm.value);
    }
    // Function to patch the value from form radio button
    assigned_To(name) {
        // console.log(name);
        this.addinventoryForm.patchValue({ assigned_to: name });
    }
    // setFormTitle(name:any) {
    //   this.authService.setFormTitle(name);
    //   this.router.navigate(["/add-inventories"]);
    // }
    updatefields() {
        // this.addinventoryForm.patchValue({ form_title: 'Inventory' });
        this.formSendingStatus = "Save";
        this.addinventoryForm.patchValue({ form_title: this.user1.form_title });
        this.addinventoryForm.patchValue({ _id: this.user1._id });
        this.addinventoryForm.patchValue({ location: this.user1.location });
        this.addinventoryForm.patchValue({ assigned_to: this.user1.assigned_to });
        this.addinventoryForm.patchValue({
            property_type: this.user1.property_type,
        });
        this.addinventoryForm.patchValue({ area: this.user1.area });
        this.addinventoryForm.patchValue({ client_type: this.user1.client_type });
        this.addinventoryForm.patchValue({ demand_price: this.user1.demand_price });
        this.addinventoryForm.patchValue({
            property_purpose: this.user1.property_purpose,
        });
        this.addinventoryForm.patchValue({ beds_number: this.user1.beds_number });
        this.addinventoryForm.patchValue({ client_name: this.user1.client_name });
        this.addinventoryForm.patchValue({
            client_number: this.user1.client_number,
        });
        this.addinventoryForm.patchValue({ city: this.user1.city });
        if (this.user1.location) {
            for (let i = 0; i < this.user1.location.length; i++) {
                console.log(this.user1.location[i].location);
                this.selectStringLocations.push(this.user1.location[i].location);
                this.selectedLocations.push(this.user1.location[i].location);
            }
            console.log(this.selectStringLocations);
        }
        if (this.user1.city) {
            this.getLocations(this.user1.city[0]._id);
            // this.addinventoryForm.patchValue({ city: this.user1.city.city });
            console.log(this.user1.city[0]._id);
            this.selectedCity = this.user1.city[0].city;
        }
        console.log(this.addinventoryForm.value);
        console.log(this.selectedLocations);
        console.log(this.selectedCity);
    }
    // File Upload Functions below
    handleFileInput(files) {
        this.fileToUpload = files.item(0);
    }
    // Form Declaration, and Validation Function
    formDeclare() {
        this.addinventoryForm = this.formBuilder.group({
            // _id: [''],
            assigned_to1: [],
            assigned_to: [
                {
                    userId: "",
                    name: "",
                },
            ],
            admin: [
                {
                    userId: "",
                    name: "",
                },
            ],
            form_title: [""],
            property_purpose: [""],
            property_type: [""],
            city: [
                {
                    id: "",
                    name: this.city_value,
                    cityId: "",
                },
            ],
            location: [],
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
            beds_number: [],
            area: [],
            area_unit: [""],
            client_name: [""],
            client_number: [],
            client_type: [""],
        });
    }
    getCity(cityId) {
        const city = this.cities.filter((city) => {
            return city._id === cityId;
        });
        if (city[0]) {
            return city[0].city;
        }
        else {
            return "";
        }
    }
    getLocation(locId) {
        const location = this.locations.filter((location) => {
            return location._id === locId;
        });
        if (location[0]) {
            return location[0].location;
        }
        else {
            return "";
        }
    }
    changeCity(city) {
        this.selectStringLocations = [];
        this.locations = [];
        if (this.user1) {
            console.log(city.city);
            console.log(this.selectedCity);
            if (this.selectedCity == city.city) {
                this.selectStringLocations = this.selectedLocations;
                console.log(this.selectStringLocations);
            }
            else
                this.selectStringLocations = [];
        }
        if (city)
            this.getLocations(city._id);
        this.addinventoryForm.patchValue({ city });
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        console.log(this.locations);
        if (city) {
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
        this.authService.getCities().subscribe((cities) => {
            // console.log('Curr', this.user);
            if (this.user.access === "islamabad_admin") {
                this.city.push(cities[2]);
                this.cities = this.city;
            }
            else if (this.user.access === "rawalpindi_admin") {
                this.city.push(cities[1]);
                this.cities = this.city;
            }
            else if (this.user.access === "peshawar_admin") {
                this.city.push(cities[0]);
                this.cities = this.city;
            }
            else {
                this.cities = cities;
            }
        }, (err) => {
            console.error(err);
        });
    }
    getLocations(selectedCity) {
        console.log(selectedCity);
        this.authService.getLocations().subscribe((locations) => {
            console.log(locations, selectedCity);
            this.locations = locations;
            // this.subsLocations = locations.subLocations;
            // console.log(" this.locations", this.locations);
            if (selectedCity) {
                this.locations = locations.filter((loc) => {
                    return loc.cityId == selectedCity;
                });
            }
        }, (err) => {
            console.error(err);
        });
    }
    // Check whether user pressed 'buy' or 'rent' button
    setValue(value) {
        this.optionValue1 = value;
    }
    // Submit form to backend service
    submitForm() {
        this.submitted = true; // stop here if form is invalid
        console.log(this.addinventoryForm.value);
        console.log(this.selectedLocations);
        this.addinventoryForm.patchValue({ location: this.selectedLocations });
        console.log(this.addinventoryForm.value);
        if (this.user1) {
            console.log(this.addinventoryForm.value);
            this.authService
                .updateInventory(this.user1._id, this.addinventoryForm.value)
                .subscribe((data) => {
                console.log("Update inventory response data: ", data);
                // this.registerresponse = data;
                const email = this.addinventoryForm.value.email;
                const msg = data.message;
                // const status = data.status;
                // this.registerForm.reset();
                if (msg == "Inventory updated successfully") {
                    this.toastr.success(msg, "Success", {
                        timeOut: 5000,
                    });
                    if (this.addinventoryForm.get("form_title").value === "Inventory") {
                        this.router.navigate(["/inventory"]);
                    }
                    else if (this.addinventoryForm.get("form_title").value === "Lead") {
                        this.router.navigate(["/leads"]);
                    }
                    else if (this.addinventoryForm.get("form_title").value === "Both") {
                        this.router.navigate(["/both"]);
                    }
                }
                else {
                    this.toastr.error(msg, "Error", {
                        timeOut: 5000,
                    });
                }
            });
        }
        else {
            const user = this.addinventoryForm.get("form_title").value;
            console.log(this.addinventoryForm.value);
            this.authService
                .createInventory(this.addinventoryForm.value)
                .subscribe((data) => {
                console.log("signup data: ", data);
                // this.registerresponse = data;
                const email = this.addinventoryForm.value.email;
                // const msg = data.message;
                // const status = data.status;
                // this.registerForm.reset();
                if (user === "Inventory") {
                    this.toastr.success("Inventory Added", "Success", {
                        timeOut: 5000,
                    });
                    this.router.navigate(["/inventory"]);
                }
                else if (user === "Lead") {
                    this.toastr.success("Lead Added", "Success", {
                        timeOut: 5000,
                    });
                    this.router.navigate(["/leads"]);
                }
                else if (user === "Both") {
                    this.toastr.success("Both Added", "Success", {
                        timeOut: 5000,
                    });
                    this.router.navigate(["/both"]);
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
AddInventoriesComponent.ɵfac = function AddInventoriesComponent_Factory(t) { return new (t || AddInventoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
AddInventoriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddInventoriesComponent, selectors: [["app-add-inventories"]], decls: 184, vars: 58, consts: [[1, "container-fluid"], [1, "register"], [1, "row"], [1, "col-md-12"], [1, "row", "inventory"], [1, "col-md-3"], [1, "col-md-9", "col-sm-10", "register-right"], [1, "", 3, "formGroup"], [1, "register-heading"], [1, "row", "offset-1"], [1, "col-md-5", "col-sm-5", "radio-mid"], [1, "radio"], [1, "btn-group", "btn-group-toggle"], [1, "btn", "btn-primary"], ["type", "radio", "formControlName", "form_title", "value", "Lead"], ["type", "radio", "formControlName", "form_title", "value", "Inventory"], ["type", "radio", "formControlName", "form_title", "value", "Both"], [1, "steps"], [1, "col-md-5", "col-sm-5"], [1, "btn", "btn-secondary"], ["type", "radio", "formControlName", "property_purpose", "value", "Buy", "autocomplete", "off", "checked", ""], ["type", "radio", "formControlName", "property_purpose", "value", "Sell", "autocomplete", "off"], ["type", "radio", "formControlName", "property_purpose", "value", "Rent", "autocomplete", "off"], ["type", "radio", "formControlName", "property_purpose", "value", "Rent-Out", "autocomplete", "off"], ["class", "form-group", 4, "ngIf"], [1, "col-md-4", "col-sm-4"], [1, "form-group"], [1, "dropdown", "ml-2", "mr-2", "dropdown"], ["data-toggle", "modal", "data-target", "#exampleModal2", "type", "button", 1, "btn", "btn-outline-secondary", 2, "width", "160px"], [4, "ngIf"], ["id", "exampleModal2", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "nav", "nav-tabs"], [2, "margin-left", "21px"], ["href", "#home", "data-toggle", "tab", 1, "active"], ["href", "#plot", "data-toggle", "tab"], ["href", "#commercial", "data-toggle", "tab"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "tab-content"], ["id", "home", 1, "tab-pane", "active"], [1, "btn-group", "btn-group-toggle", 2, "padding", "4px 45px"], [1, "btn", "btn3", "btn-primary"], ["type", "radio", "formControlName", "property_type", "value", "House"], ["type", "radio", "formControlName", "property_type", "value", "Apartment"], ["type", "radio", "formControlName", "property_type", "value", "Upper Portion"], ["type", "radio", "formControlName", "property_type", "value", "Lower Portion"], ["type", "radio", "formControlName", "property_type", "value", "Farm House"], ["type", "radio", "formControlName", "property_type", "value", "Penthouse"], ["id", "plot", 1, "tab-pane"], ["type", "radio", "formControlName", "property_type", "value", "Residential Plot"], ["type", "radio", "formControlName", "property_type", "value", "Commercial Plot"], ["type", "radio", "formControlName", "property_type", "value", "Farm House Plot"], ["id", "commercial", 1, "tab-pane"], ["type", "radio", "formControlName", "property_type", "value", "Office"], ["type", "radio", "formControlName", "property_type", "value", "Shop"], ["type", "radio", "formControlName", "property_type", "value", "Plaza"], ["type", "radio", "formControlName", "property_type", "value", "Floor"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["formControlName", "beds_number", "type", "number", 1, "form-control"], [1, "col-md-4", "col-sm-4", "form-group"], [1, ""], ["formControlName", "client_name", "type", "text", 1, "form-control"], ["formControlName", "client_number", "type", "number", 1, "form-control"], ["formControlName", "client_type", "type", "text", 1, "form-control"], ["class", "row offset-1", 4, "ngIf"], [1, "col-md-12", "col-sm-12"], [1, "pull-right"], [1, "btn", "btn1", "btn-primary", 3, "click"], [1, "input-group"], ["bindLabel", "city", "bindValue", "_id", "placeholder", "Select City", 1, "ng-select", 3, "items", "ngClass", "change"], ["class", "invalid-feedback", 4, "ngIf"], [1, "invalid-feedback"], ["bindLabel", "city", "bindValue", "city", "placeholder", "Select City", 1, "ng-select", 3, "ngModel", "ngModelOptions", "items", "ngClass", "ngModelChange", "change"], ["bindLabel", "location", "bindValue", "location", "placeholder", "Select Location", 1, "ng-select", 3, "ngModel", "multiple", "ngModelOptions", "items", "ngModelChange", "change"], ["bindLabel", "location", "bindValue", "location", "placeholder", "Select Location", 1, "ng-select", "inputs2", 3, "ngModel", "multiple", "ngModelOptions", "items", "ngModelChange", "change"], ["class", "offset-1", "style", "color: red", 4, "ngIf"], [1, "price"], ["type", "number", "placeholder", "Min", "formControlName", "min_price", "name", "greaterThanValue", "required", "", "autocomplete", "off", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "placeholder", "Max", "formControlName", "max_price", "name", "lessThanValue", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", "required", "", "autocomplete", "off"], [1, "offset-1", 2, "color", "red"], ["type", "number", "placeholder", "", "formControlName", "demand_price", "required", "", "autocomplete", "off", 1, "form-control"], ["type", "number", "placeholder", "Min", "formControlName", "min_area", "name", "greaterThanValue1", "required", "", "autocomplete", "off", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "placeholder", "Max", "formControlName", "max_area", "required", "", "autocomplete", "off", "name", "lessThanValue1", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-md-8", "col-sm-4"], ["type", "radio", "formControlName", "area_unit", "value", "Sq. Feet", "autocomplete", "off", "checked", ""], ["type", "radio", "formControlName", "area_unit", "value", "Sq. Yard", "autocomplete", "off"], ["type", "radio", "formControlName", "area_unit", "value", "Marla", "autocomplete", "off"], ["type", "radio", "formControlName", "area_unit", "value", "Kanal", "autocomplete", "off"], ["type", "number", "formControlName", "area", "required", "", "autocomplete", "off", 1, "form-control"], [1, "col-md-5", "col-sm-2"], [1, "radio", "select-btn"], ["type", "radio", "formControlName", "assigned_to1", "value", "Self", 3, "click"], ["type", "radio", "formControlName", "assigned_to1", "value", "Admin"], ["type", "radio", "formControlName", "assigned_to1", "value", "Agents"], ["bindLabel", "access", "bindValue", "access", "placeholder", "Select Admin", 1, "ng-select", "inputs2", 3, "items", "change"], ["bindLabel", "fullname", "bindValue", "fullname", "placeholder", "Select Agent", 1, "ng-select", "inputs2", 3, "items", "change"]], template: function AddInventoriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Add Inventory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Lead ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Inventory ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Both ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Step 1: Select Form Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Buy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Sell ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Rent ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Rent-Out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "b", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Step 2: Select Purpose");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, AddInventoriesComponent_div_51_Template, 4, 5, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, AddInventoriesComponent_div_52_Template, 4, 8, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, AddInventoriesComponent_div_54_Template, 3, 5, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, AddInventoriesComponent_div_55_Template, 3, 5, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, AddInventoriesComponent_span_60_Template, 2, 0, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, AddInventoriesComponent_span_61_Template, 2, 1, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "ul", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Plot ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Commercial ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " House ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Apartment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " Upper Portion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " Lower Portion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " Farm House ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " Penthouse ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Residential Plot ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " Commercial Plot ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Farm House Plot ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " Office ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "input", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " Shop ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " Plaza ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " Floor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " Okay ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "b", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Step 4: Select Property Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](132, AddInventoriesComponent_div_132_Template, 17, 3, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](133, AddInventoriesComponent_div_133_Template, 9, 0, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](134, AddInventoriesComponent_div_134_Template, 30, 11, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Beds Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "b", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Step 7: Select Beds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](144, AddInventoriesComponent_div_144_Template, 23, 8, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Client Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "input", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "b", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Step 8: Select Client Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Client Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "input", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "b", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Step 9: Select Client Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Client Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "input", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "b", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Step 10: Select Client Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](169, AddInventoriesComponent_div_169_Template, 13, 6, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](172, AddInventoriesComponent_div_172_Template, 2, 1, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](173, AddInventoriesComponent_div_173_Template, 2, 1, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "button", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddInventoriesComponent_Template_button_click_179_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addinventoryForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.addinventoryForm.get("form_title").value === "Lead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.addinventoryForm.get("form_title").value !== "Lead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.addinventoryForm.get("form_title").value === "Inventory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.addinventoryForm.get("form_title").value !== "Inventory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.addinventoryForm.get("form_title").value === "Both");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.addinventoryForm.get("form_title").value !== "Both");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.addinventoryForm.get("property_purpose").value === "Buy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.addinventoryForm.get("property_purpose").value === "Sell");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.addinventoryForm.get("property_purpose").value === "Rent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.addinventoryForm.get("property_purpose").value === "Rent-Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.user1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.user1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.addinventoryForm.get("property_type").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addinventoryForm.get("property_type").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.addinventoryForm.get("property_type").value === "House");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.addinventoryForm.get("property_type").value === "Apartment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.addinventoryForm.get("property_type").value === "Upper Portion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.addinventoryForm.get("property_type").value === "Lower Portion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.addinventoryForm.get("property_type").value === "Farm House");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.addinventoryForm.get("property_type").value === "Penthouse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.addinventoryForm.get("property_type").value === "Residential Plot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.addinventoryForm.get("property_type").value === "Commercial Plot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.addinventoryForm.get("property_type").value === "Farm House Plot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.addinventoryForm.get("property_type").value === "Office");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.addinventoryForm.get("property_type").value === "Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.addinventoryForm.get("property_type").value === "Plaza");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.addinventoryForm.get("property_type").value === "Floor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addinventoryForm.get("property_purpose").value === "Buy" || ctx.addinventoryForm.get("property_purpose").value === "Rent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addinventoryForm.get("property_purpose").value === "Sell" || ctx.addinventoryForm.get("property_purpose").value === "Rent-Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addinventoryForm.get("property_purpose").value === "Buy" || ctx.addinventoryForm.get("property_purpose").value === "Rent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addinventoryForm.get("property_purpose").value === "Sell");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addinventoryForm.get("form_title").value === "Inventory" || ctx.addinventoryForm.get("form_title").value === "Both");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addinventoryForm.get("assigned_to1").value == "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addinventoryForm.get("assigned_to1").value === "Agents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formSendingStatus);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultClassDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]], styles: [".btn3[_ngcontent-%COMP%] {\n    margin-left: 20px;\n    border-radius: 20px;\n}\n\n.ng-select[_ngcontent-%COMP%] {\n    display: block;\n    position: relative;\n    width: 300px;\n}\n\n.select-btn[_ngcontent-%COMP%] {\n    margin-top: 33px;\n}\n\n.nav-tabs[_ngcontent-%COMP%] {\n    border-bottom: 0px solid #dee2e6;\n}\n\n.steps[_ngcontent-%COMP%] {\n    color: #1f6e97;\n}\n\nb[_ngcontent-%COMP%] {\n    margin-top: 10px;\n}\n\n.btn-primary[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .btn-primary[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .show[_ngcontent-%COMP%] > .btn-primary.dropdown-toggle[_ngcontent-%COMP%] {\n    color: #fff;\n    background-color: #1f6e97;\n    border-color: #1f6e97;\n}\n\n.ant-radio-group-solid[_ngcontent-%COMP%]   .ant-radio-button-wrapper-checked[_ngcontent-%COMP%]:not(.ant-radio-button-wrapper-disabled) {\n    color: #fff;\n    background: #38bba2;\n    border-color: #38bba2;\n}\n\n.tab-pane[_ngcontent-serverApp-c4][_ngcontent-%COMP%]   a[_ngcontent-serverApp-c4][_ngcontent-%COMP%] {\n    margin: 2px;\n}\n\n.btn[_ngcontent-%COMP%]:not(:disabled):not(.disabled):hover {\n    color: #fff;\n    background-color: #1f6e97;\n    border-color: #1f6e97;\n}\n\n.btn[_ngcontent-%COMP%]:not(:disabled):not(.disabled) {\n    cursor: pointer;\n    color: white;\n}\n\na[_ngcontent-%COMP%]:not([href]):not([tabindex]) {\n    color: inherit;\n    text-decoration: none;\n}\n\n.btn-outline-success[_ngcontent-%COMP%] {\n    border-color: darkgray;\n    margin: 10px;\n    border-radius: 20px;\n}\n\n.btn[_ngcontent-serverApp-c4][_ngcontent-%COMP%] {\n    background: #1f6e97;\n    opacity: 0.85;\n}\n\n.dropdown-toggle1[_ngcontent-serverApp-c4][_ngcontent-%COMP%] {\n    background: #dcdcdc;\n}\n\n.btn[_ngcontent-serverApp-c4][_ngcontent-%COMP%] {\n    background: #1f6e97;\n    opacity: 0.85;\n}\n\n.dropdown-menu[_ngcontent-serverApp-c4][_ngcontent-%COMP%] {\n    min-width: 15rem !important;\n}\n\n.keepopen[_ngcontent-serverApp-c4][_ngcontent-%COMP%] {\n    color: white;\n}\n\n.area-unit1[_ngcontent-%COMP%] {\n    margin-top: 48px;\n}\n\n.area-unit[_ngcontent-%COMP%] {\n    margin-left: 55px;\n}\n\n.price[_ngcontent-%COMP%] {\n    margin-left: 15px;\n}\n\n.btn1[_ngcontent-%COMP%] {\n    margin-right: 60px;\n}\n\n.inventory[_ngcontent-%COMP%] {\n    overflow-x: hidden;\n    margin-left: -145px;\n    margin-top: 89px;\n}\n\n\n\n.btn-secondary[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .btn-secondary[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .show[_ngcontent-%COMP%] > .btn-secondary.dropdown-toggle[_ngcontent-%COMP%] {\n    color: #fff;\n    background-color: #1f6e97;\n    border-color: #1f6e97;\n}\n\n.btn[_ngcontent-rqt-c127][_ngcontent-%COMP%] {\n    width: 120px;\n    font-size: 14px;\n    background-color: #38baa2;\n    color: white;\n    border: 1px solid transparent;\n}\n\n.tab-pane[_ngcontent-%COMP%] {\n    margin: 2px;\n}\n\n.nav-tabs1[_ngcontent-%COMP%] {\n    background: #38bba3;\n    border-radius: 1.5rem;\n    width: 40%;\n    margin-top: 0%;\n    margin-right: 0px;\n    float: left;\n    border: none;\n    padding: 12%;\n    color: #fff;\n    border-top-right-radius: 1.5rem;\n    border-bottom-right-radius: 1.5rem;\n}\n\n\n\n.register[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    padding: 12%;\n    \n    \n    color: #fff;\n    border-top-right-radius: 1.5rem;\n    border-bottom-right-radius: 1.5rem;\n}\n\n.register[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n    border: none;\n}\n\n.register[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n    width: 100px;\n    color: #0f101187;\n    border: 2px solid #38bba3;\n    border-top-left-radius: 1.5rem;\n    border-bottom-left-radius: 1.5rem;\n}\n\n.heading1[_ngcontent-%COMP%] {\n    margin-left: 0px;\n}\n\nimg[_ngcontent-%COMP%] {\n    height: 140px;\n    width: 190px;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n\n.fileField[_ngcontent-%COMP%] {\n    width: 103px;\n    margin-top: -37px;\n    margin-left: 10px;\n    opacity: .01;\n}\n\n.upload-btn-wrapper[_ngcontent-serverApp-c16][_ngcontent-%COMP%] {\n    position: relative;\n    overflow: hidden;\n    display: inline-block;\n}\n\n.btn[_ngcontent-serverApp-c16][_ngcontent-%COMP%] {\n    color: #ffffff;\n    background-color: #38baa2;\n    padding: 7px 11px;\n    border-radius: 8px;\n    font-size: 15px;\n    font-weight: bold;\n    margin-left: 6px;\n    margin-top: 7px;\n}\n\n.upload[_ngcontent-serverApp-c16][_ngcontent-%COMP%] {\n    font-family: sans-serif;\n    margin-left: 4px;\n}\n\n.upload-btn-wrapper[_ngcontent-serverApp-c16][_ngcontent-%COMP%]   input[type=\"file\"][_ngcontent-serverApp-c16][_ngcontent-%COMP%] {\n    font-size: 100px;\n    position: absolute;\n    left: 0;\n    top: 0;\n    opacity: 0;\n    cursor: pointer;\n}\n\n.ant-radio-group-solid[_ngcontent-%COMP%]   .ant-radio-button-wrapper-checked[_ngcontent-%COMP%]:not(.ant-radio-button-wrapper-disabled) {\n    color: #fff;\n    background: #38bba2;\n    border-color: #38bba2;\n}\n\n.radio-mid[_ngcontent-%COMP%] {\n    margin-top: 200px\n}\n\n.center[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    \n    \n}\n\nh2[_ngcontent-%COMP%] {\n    font: 200 25px/30px Scribble, \"Scribble\", Scribble;\n    color: whitesmoke;\n}\n\nhtml[_ngcontent-%COMP%] {\n    font-family: 'Lora', sans-serif;\n    width: 100%;\n}\n\nbody[_ngcontent-%COMP%] {\n    margin: 5% auto 0 auto;\n    width: 90%;\n    max-width: 1125px;\n}\n\nh1[_ngcontent-%COMP%] {\n    font-size: 28px;\n    margin-bottom: 2.5%;\n}\n\ninput[_ngcontent-%COMP%], span[_ngcontent-%COMP%], label[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n    font-family: 'Ubuntu', sans-serif;\n    display: block;\n    \n    \n    border: none;\n    font-size: 14px;\n}\n\ntextarea[_ngcontent-%COMP%]:focus, input[_ngcontent-%COMP%]:focus {\n    outline: 0;\n}\n\n\n\ninput.question[_ngcontent-%COMP%], textarea.question[_ngcontent-%COMP%] {\n    font-size: 14px;\n    font-weight: 200;\n    border-radius: 2px;\n    margin: 0;\n    border: none;\n    width: 90%;\n    background: none;\n    transition: padding-top 0.1s ease, margin-top 0.1s ease;\n    overflow-x: hidden;\n    \n}\n\n\n\ninput.question[_ngcontent-%COMP%] + label[_ngcontent-%COMP%], textarea.question[_ngcontent-%COMP%] + label[_ngcontent-%COMP%] {\n    display: block;\n    position: relative;\n    white-space: nowrap;\n    padding: 0;\n    margin: 0;\n    width: 90%;\n    border-top: 1px solid black;\n    transition: width 0.5s ease;\n    height: 0px;\n}\n\ninput.question[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%], textarea.question[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\ninput.question[_ngcontent-%COMP%]:focus, input.question[_ngcontent-%COMP%]:valid {\n    padding-top: -5px;\n    \n}\n\ntextarea.question[_ngcontent-%COMP%]:valid, textarea.question[_ngcontent-%COMP%]:focus {\n    margin-top: 35px;\n}\n\ninput.question[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%], input.question[_ngcontent-%COMP%]:valid + label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] {\n    top: -100px;\n    font-size: 22px;\n    color: #333;\n}\n\ntextarea.question[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%], textarea.question[_ngcontent-%COMP%]:valid + label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] {\n    top: -150px;\n    font-size: 22px;\n    color: #333;\n}\n\ninput.question[_ngcontent-%COMP%]:valid + label[_ngcontent-%COMP%], textarea.question[_ngcontent-%COMP%]:valid + label[_ngcontent-%COMP%] {\n    border-color: black;\n}\n\ninput.question[_ngcontent-%COMP%]:invalid, textarea.question[_ngcontent-%COMP%]:invalid {\n    box-shadow: none;\n}\n\ninput.question[_ngcontent-%COMP%] + label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%], textarea.question[_ngcontent-%COMP%] + label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] {\n    font-weight: 300;\n    margin: 0;\n    position: absolute;\n    color: black;\n    font-size: 28px;\n    top: -66px;\n    left: 0px;\n    z-index: -1;\n    transition: top 0.6s ease, font-size 0.6s ease, color 0.6s ease;\n}\n\ninput[type=\"submit\"][_ngcontent-%COMP%] {\n    transition: opacity 0.5s ease, background 0.5s ease;\n    display: block;\n    opacity: 0;\n    margin: 10px 0 0 0;\n    padding: 10px;\n    cursor: pointer;\n}\n\ninput[type=\"submit\"][_ngcontent-%COMP%]:hover {\n    background: #EEE;\n}\n\ninput[type=\"submit\"][_ngcontent-%COMP%]:active {\n    background: #999;\n}\n\ninput.question[_ngcontent-%COMP%]:valid ~ input[type=\"submit\"][_ngcontent-%COMP%], textarea.question[_ngcontent-%COMP%]:valid ~ input[type=\"submit\"][_ngcontent-%COMP%] {\n    -webkit-animation: appear 1s forwards;\n    animation: appear 1s forwards;\n}\n\ninput.question[_ngcontent-%COMP%]:invalid ~ input[type=\"submit\"][_ngcontent-%COMP%], textarea.question[_ngcontent-%COMP%]:invalid ~ input[type=\"submit\"][_ngcontent-%COMP%] {\n    display: none;\n}\n\n\n\n@-webkit-keyframes appear {\n    100% {\n        opacity: 0.8;\n    }\n}\n\n@keyframes appear {\n    100% {\n        opacity: 0.8;\n    }\n}\n\n\n\n.form-control[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    border: 1PX solid gray;\n    \n    border-radius: px;\n    width: 100%;\n    \n    height: 40px;\n}\n\n\n\n.btn[_ngcontent-%COMP%] {\n    \n    width: 120px;\n    font-size: 14px;\n    background-color: #38baa2;\n    color: white;\n    border: 1px solid transparent;\n}\n\n.btn-danger[_ngcontent-%COMP%] {\n    background-color: red;\n    border-radius: 5px;\n    height: 35px;\n    width: 100px;\n    font-size: 14px;\n    color: white;\n    border: 1px solid transparent;\n}\n\n.register[_ngcontent-%COMP%] {\n    overflow-x: hidden;\n    \n    \n    \n    \n    \n}\n\n.register-left[_ngcontent-%COMP%] {\n    text-align: center;\n    color: #fff;\n    margin-top: 4%;\n}\n\n.register-left[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    border: none;\n    border-radius: 1.5rem;\n    padding: 2%;\n    width: 60%;\n    background: #f8f9fa;\n    font-weight: bold;\n    color: #383d41;\n    margin-top: 30%;\n    margin-bottom: 3%;\n    cursor: pointer;\n}\n\n.register-right[_ngcontent-%COMP%] {\n    background: white;\n    border-top-left-radius: 10% 50%;\n    border-bottom-left-radius: 10% 50%;\n}\n\n\n\n.register-left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-top: 15%;\n    margin-bottom: 5%;\n    width: 70%;\n    -webkit-animation: mover 3s infinite alternate;\n    animation: mover 0.5s infinite alternate;\n}\n\n@-webkit-keyframes mover {\n    0% {\n        transform: translateY(0);\n    }\n    100% {\n        transform: translateY(-20px);\n    }\n}\n\n@keyframes mover {\n    0% {\n        transform: translateY(0);\n    }\n    100% {\n        transform: translateY(-20px);\n    }\n}\n\n.register-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: lighter;\n    padding: 12%;\n    margin-top: -9%;\n}\n\n.register[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%] {\n    padding: 12%;\n    margin-top: 0%;\n}\n\n.register-heading[_ngcontent-%COMP%] {\n    text-align: center;\n    \n    margin-bottom: -8%;\n    color: #495057;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2ludmVudG9yeS9hZGQtaW52ZW50b3JpZXMvYWRkLWludmVudG9yaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTs7O0lBR0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUdBOztHQUVHOztBQUVIOzs7SUFHSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0Isa0NBQWtDO0FBQ3RDOztBQUdBOzs7Ozs7Ozs7R0FTRzs7QUFFSDtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0Isa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLDhCQUE4QjtJQUM5QixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG9CQUFpQjtPQUFqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxNQUFNO0lBQ04sVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksa0RBQWtEO0lBQ2xELGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7Ozs7SUFJSSxpQ0FBaUM7SUFDakMsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksVUFBVTtBQUNkOztBQUdBLGdEQUFnRDs7QUFFaEQ7O0lBRUksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFlBQVk7SUFDWixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLHVEQUF1RDtJQUN2RCxrQkFBa0I7SUFDbEIsb0RBQW9EO0FBQ3hEOztBQUdBLDhCQUE4Qjs7QUFFOUI7O0lBRUksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFNBQVM7SUFDVCxVQUFVO0lBQ1YsMkJBQTJCO0lBRTNCLDJCQUEyQjtJQUMzQixXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUVBOztJQUVJLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUI7O0FBRUE7O0lBRUksZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBOztJQUVJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBOztJQUVJLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7SUFDZixVQUFVO0lBQ1YsU0FBUztJQUNULFdBQVc7SUFFWCwrREFBK0Q7QUFDbkU7O0FBRUE7SUFFSSxtREFBbUQ7SUFDbkQsY0FBYztJQUNkLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUkscUNBQXFDO0lBQ3JDLDZCQUE2QjtBQUNqQzs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUdBOzs7O09BSU87O0FBRVA7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFKQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtBQUNKOztBQUdBLFdBQVc7O0FBRVg7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUdBLEtBQUs7O0FBRUw7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsaUVBQWlFO0lBQ2pFLHlFQUF5RTtJQUN6RSxvQkFBb0I7SUFDcEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiwrQkFBK0I7SUFDL0Isa0NBQWtDO0FBQ3RDOztBQUdBLGtCQUFrQjs7QUFFbEI7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDViw4Q0FBOEM7SUFDOUMsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0k7UUFDSSx3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLDRCQUE0QjtJQUNoQztBQUNKOztBQUVBO0lBQ0k7UUFDSSx3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLDRCQUE0QjtJQUNoQztBQUNKOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2ludmVudG9yeS9hZGQtaW52ZW50b3JpZXMvYWRkLWludmVudG9yaWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuMyB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLm5nLXNlbGVjdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAzMDBweDtcbn1cblxuLnNlbGVjdC1idG4ge1xuICAgIG1hcmdpbi10b3A6IDMzcHg7XG59XG5cbi5uYXYtdGFicyB7XG4gICAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkICNkZWUyZTY7XG59XG5cbi5zdGVwcyB7XG4gICAgY29sb3I6ICMxZjZlOTc7XG59XG5cbmIge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5idG4tcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsXG4uYnRuLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLFxuLnNob3c+LmJ0bi1wcmltYXJ5LmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmNmU5NztcbiAgICBib3JkZXItY29sb3I6ICMxZjZlOTc7XG59XG5cbi5hbnQtcmFkaW8tZ3JvdXAtc29saWQgLmFudC1yYWRpby1idXR0b24td3JhcHBlci1jaGVja2VkOm5vdCguYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyLWRpc2FibGVkKSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZDogIzM4YmJhMjtcbiAgICBib3JkZXItY29sb3I6ICMzOGJiYTI7XG59XG5cbi50YWItcGFuZVtfbmdjb250ZW50LXNlcnZlckFwcC1jNF0gYVtfbmdjb250ZW50LXNlcnZlckFwcC1jNF0ge1xuICAgIG1hcmdpbjogMnB4O1xufVxuXG4uYnRuOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWY2ZTk3O1xuICAgIGJvcmRlci1jb2xvcjogIzFmNmU5Nztcbn1cblxuLmJ0bjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuYTpub3QoW2hyZWZdKTpub3QoW3RhYmluZGV4XSkge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3Mge1xuICAgIGJvcmRlci1jb2xvcjogZGFya2dyYXk7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5idG5bX25nY29udGVudC1zZXJ2ZXJBcHAtYzRdIHtcbiAgICBiYWNrZ3JvdW5kOiAjMWY2ZTk3O1xuICAgIG9wYWNpdHk6IDAuODU7XG59XG5cbi5kcm9wZG93bi10b2dnbGUxW19uZ2NvbnRlbnQtc2VydmVyQXBwLWM0XSB7XG4gICAgYmFja2dyb3VuZDogI2RjZGNkYztcbn1cblxuLmJ0bltfbmdjb250ZW50LXNlcnZlckFwcC1jNF0ge1xuICAgIGJhY2tncm91bmQ6ICMxZjZlOTc7XG4gICAgb3BhY2l0eTogMC44NTtcbn1cblxuLmRyb3Bkb3duLW1lbnVbX25nY29udGVudC1zZXJ2ZXJBcHAtYzRdIHtcbiAgICBtaW4td2lkdGg6IDE1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5rZWVwb3Blbltfbmdjb250ZW50LXNlcnZlckFwcC1jNF0ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmFyZWEtdW5pdDEge1xuICAgIG1hcmdpbi10b3A6IDQ4cHg7XG59XG5cbi5hcmVhLXVuaXQge1xuICAgIG1hcmdpbi1sZWZ0OiA1NXB4O1xufVxuXG4ucHJpY2Uge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4uYnRuMSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xufVxuXG4uaW52ZW50b3J5IHtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgbWFyZ2luLWxlZnQ6IC0xNDVweDtcbiAgICBtYXJnaW4tdG9wOiA4OXB4O1xufVxuXG5cbi8qIC5hY3RpdmVCIHtcbiAgICBjb2xvcjogb3JhbmdlO1xufSAqL1xuXG4uYnRuLXNlY29uZGFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsXG4uYnRuLXNlY29uZGFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsXG4uc2hvdz4uYnRuLXNlY29uZGFyeS5kcm9wZG93bi10b2dnbGUge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjZlOTc7XG4gICAgYm9yZGVyLWNvbG9yOiAjMWY2ZTk3O1xufVxuXG4uYnRuW19uZ2NvbnRlbnQtcnF0LWMxMjddIHtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOGJhYTI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4udGFiLXBhbmUge1xuICAgIG1hcmdpbjogMnB4O1xufVxuXG4ubmF2LXRhYnMxIHtcbiAgICBiYWNrZ3JvdW5kOiAjMzhiYmEzO1xuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbiAgICB3aWR0aDogNDAlO1xuICAgIG1hcmdpbi10b3A6IDAlO1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAxMiU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEuNXJlbTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMS41cmVtO1xufVxuXG5cbi8qIC5yZWdpc3RlciAubmF2LXRhYnMge1xuICAgIG1hcmdpbi10b3A6IDE3JTtcbiAgICBtYXJnaW4tcmlnaHQ6IC0zMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjMzhiYmEzO1xuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbiAgICB3aWR0aDogNDAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IDNweDtcbn0gKi9cblxuLnJlZ2lzdGVyIC5uYXYtdGFicyAubmF2LWxpbmsge1xuICAgIHBhZGRpbmc6IDEyJTtcbiAgICAvKiBoZWlnaHQ6IDM1cHg7ICovXG4gICAgLyogZm9udC13ZWlnaHQ6IDYwMDsgKi9cbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMS41cmVtO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxLjVyZW07XG59XG5cbi5yZWdpc3RlciAubmF2LXRhYnMgLm5hdi1saW5rOmhvdmVyIHtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5yZWdpc3RlciAubmF2LXRhYnMgLm5hdi1saW5rLmFjdGl2ZSB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGNvbG9yOiAjMGYxMDExODc7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzM4YmJhMztcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxLjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMS41cmVtO1xufVxuXG4uaGVhZGluZzEge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbmltZyB7XG4gICAgaGVpZ2h0OiAxNDBweDtcbiAgICB3aWR0aDogMTkwcHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5maWxlRmllbGQge1xuICAgIHdpZHRoOiAxMDNweDtcbiAgICBtYXJnaW4tdG9wOiAtMzdweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBvcGFjaXR5OiAuMDE7XG59XG5cbi51cGxvYWQtYnRuLXdyYXBwZXJbX25nY29udGVudC1zZXJ2ZXJBcHAtYzE2XSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYnRuW19uZ2NvbnRlbnQtc2VydmVyQXBwLWMxNl0ge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOGJhYTI7XG4gICAgcGFkZGluZzogN3B4IDExcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgIG1hcmdpbi10b3A6IDdweDtcbn1cblxuLnVwbG9hZFtfbmdjb250ZW50LXNlcnZlckFwcC1jMTZdIHtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG4udXBsb2FkLWJ0bi13cmFwcGVyW19uZ2NvbnRlbnQtc2VydmVyQXBwLWMxNl0gaW5wdXRbdHlwZT1cImZpbGVcIl1bX25nY29udGVudC1zZXJ2ZXJBcHAtYzE2XSB7XG4gICAgZm9udC1zaXplOiAxMDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgb3BhY2l0eTogMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hbnQtcmFkaW8tZ3JvdXAtc29saWQgLmFudC1yYWRpby1idXR0b24td3JhcHBlci1jaGVja2VkOm5vdCguYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyLWRpc2FibGVkKSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZDogIzM4YmJhMjtcbiAgICBib3JkZXItY29sb3I6ICMzOGJiYTI7XG59XG5cbi5yYWRpby1taWQge1xuICAgIG1hcmdpbi10b3A6IDIwMHB4XG59XG5cbi5jZW50ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvKiBoZWlnaHQ6IDIwMHB4OyAqL1xuICAgIC8qIGJvcmRlcjogM3B4IHNvbGlkIGdyZWVuOyAqL1xufVxuXG5oMiB7XG4gICAgZm9udDogMjAwIDI1cHgvMzBweCBTY3JpYmJsZSwgXCJTY3JpYmJsZVwiLCBTY3JpYmJsZTtcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuaHRtbCB7XG4gICAgZm9udC1mYW1pbHk6ICdMb3JhJywgc2Fucy1zZXJpZjtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuYm9keSB7XG4gICAgbWFyZ2luOiA1JSBhdXRvIDAgYXV0bztcbiAgICB3aWR0aDogOTAlO1xuICAgIG1heC13aWR0aDogMTEyNXB4O1xufVxuXG5oMSB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIuNSU7XG59XG5cbmlucHV0LFxuc3BhbixcbmxhYmVsLFxudGV4dGFyZWEge1xuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICAvKiBtYXJnaW46IDEwcHg7ICovXG4gICAgLyogcGFkZGluZzogMTJweDsgKi9cbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG50ZXh0YXJlYTpmb2N1cyxcbmlucHV0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiAwO1xufVxuXG5cbi8qIFRoZSB0ZXh0IHdoZXJlIGlucHV0IGZpZWxkIHdvdWxkIGJlIHdyaXR0ZW4gKi9cblxuaW5wdXQucXVlc3Rpb24sXG50ZXh0YXJlYS5xdWVzdGlvbiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIHRyYW5zaXRpb246IHBhZGRpbmctdG9wIDAuMXMgZWFzZSwgbWFyZ2luLXRvcCAwLjFzIGVhc2U7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIC8qIEhhY2sgdG8gbWFrZSBcInJvd3NcIiBhdHRyaWJ1dGUgYXBwbHkgaW4gRmlyZWZveC4gKi9cbn1cblxuXG4vKiBVbmRlcmxpbmUgYW5kIFBsYWNlaG9sZGVyICovXG5cbmlucHV0LnF1ZXN0aW9uK2xhYmVsLFxudGV4dGFyZWEucXVlc3Rpb24rbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggMC41cyBlYXNlO1xuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNXMgZWFzZTtcbiAgICBoZWlnaHQ6IDBweDtcbn1cblxuaW5wdXQucXVlc3Rpb246Zm9jdXMrbGFiZWwsXG50ZXh0YXJlYS5xdWVzdGlvbjpmb2N1cytsYWJlbCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmlucHV0LnF1ZXN0aW9uOmZvY3VzLFxuaW5wdXQucXVlc3Rpb246dmFsaWQge1xuICAgIHBhZGRpbmctdG9wOiAtNXB4O1xuICAgIC8qIG1hcmdpbi10b3A6IC0ycHg7ICovXG59XG5cbnRleHRhcmVhLnF1ZXN0aW9uOnZhbGlkLFxudGV4dGFyZWEucXVlc3Rpb246Zm9jdXMge1xuICAgIG1hcmdpbi10b3A6IDM1cHg7XG59XG5cbmlucHV0LnF1ZXN0aW9uOmZvY3VzK2xhYmVsPnNwYW4sXG5pbnB1dC5xdWVzdGlvbjp2YWxpZCtsYWJlbD5zcGFuIHtcbiAgICB0b3A6IC0xMDBweDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgY29sb3I6ICMzMzM7XG59XG5cbnRleHRhcmVhLnF1ZXN0aW9uOmZvY3VzK2xhYmVsPnNwYW4sXG50ZXh0YXJlYS5xdWVzdGlvbjp2YWxpZCtsYWJlbD5zcGFuIHtcbiAgICB0b3A6IC0xNTBweDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgY29sb3I6ICMzMzM7XG59XG5cbmlucHV0LnF1ZXN0aW9uOnZhbGlkK2xhYmVsLFxudGV4dGFyZWEucXVlc3Rpb246dmFsaWQrbGFiZWwge1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG5cbmlucHV0LnF1ZXN0aW9uOmludmFsaWQsXG50ZXh0YXJlYS5xdWVzdGlvbjppbnZhbGlkIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xufVxuXG5pbnB1dC5xdWVzdGlvbitsYWJlbD5zcGFuLFxudGV4dGFyZWEucXVlc3Rpb24rbGFiZWw+c3BhbiB7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBtYXJnaW46IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgdG9wOiAtNjZweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgei1pbmRleDogLTE7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiB0b3AgMC42cyBlYXNlLCBmb250LXNpemUgMC42cyBlYXNlLCBjb2xvciAwLjZzIGVhc2U7XG4gICAgdHJhbnNpdGlvbjogdG9wIDAuNnMgZWFzZSwgZm9udC1zaXplIDAuNnMgZWFzZSwgY29sb3IgMC42cyBlYXNlO1xufVxuXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLCBiYWNrZ3JvdW5kIDAuNXMgZWFzZTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZSwgYmFja2dyb3VuZCAwLjVzIGVhc2U7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3BhY2l0eTogMDtcbiAgICBtYXJnaW46IDEwcHggMCAwIDA7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNFRUU7XG59XG5cbmlucHV0W3R5cGU9XCJzdWJtaXRcIl06YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjOTk5O1xufVxuXG5pbnB1dC5xdWVzdGlvbjp2YWxpZH5pbnB1dFt0eXBlPVwic3VibWl0XCJdLFxudGV4dGFyZWEucXVlc3Rpb246dmFsaWR+aW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGFwcGVhciAxcyBmb3J3YXJkcztcbiAgICBhbmltYXRpb246IGFwcGVhciAxcyBmb3J3YXJkcztcbn1cblxuaW5wdXQucXVlc3Rpb246aW52YWxpZH5pbnB1dFt0eXBlPVwic3VibWl0XCJdLFxudGV4dGFyZWEucXVlc3Rpb246aW52YWxpZH5pbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5cbi8qIEAtd2Via2l0LWtleWZyYW1lcyBhcHBlYXIge1xuICAgICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICAgIH1cbiAgICB9ICovXG5cbkBrZXlmcmFtZXMgYXBwZWFyIHtcbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMC44O1xuICAgIH1cbn1cblxuXG4vKiAwMiBlbmQgKi9cblxuLmZvcm0tY29udHJvbCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBib3JkZXI6IDFQWCBzb2xpZCBncmF5O1xuICAgIC8qIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDsgKi9cbiAgICBib3JkZXItcmFkaXVzOiBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvKiBjb2xvcjojMzhiYWEyOyAqL1xuICAgIGhlaWdodDogNDBweDtcbn1cblxuXG4vKiAgKi9cblxuLmJ0biB7XG4gICAgLyogbWFyZ2luLWxlZnQ6IDQwcHg7ICovXG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzhiYWEyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLmJ0bi1kYW5nZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4ucmVnaXN0ZXIge1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAvKiBIaWRlIHNjcm9sbGJhcnMgKi9cbiAgICAvKiBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMzhiYWEyLCAjMGQ2YjkyKTsgKi9cbiAgICAvKiBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2IoMjYsIDIzLCAyMyksICMzOGJhYTIpOyAqL1xuICAgIC8qIG1hcmdpbi10b3A6IDMlOyAqL1xuICAgIC8qIHBhZGRpbmc6IDMlOyAqL1xufVxuXG4ucmVnaXN0ZXItbGVmdCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi10b3A6IDQlO1xufVxuXG4ucmVnaXN0ZXItbGVmdCBpbnB1dCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICB3aWR0aDogNjAlO1xuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICMzODNkNDE7XG4gICAgbWFyZ2luLXRvcDogMzAlO1xuICAgIG1hcmdpbi1ib3R0b206IDMlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJlZ2lzdGVyLXJpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMCUgNTAlO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwJSA1MCU7XG59XG5cblxuLyogSW1hZ2UgRWZmZWN0cyAqL1xuXG4ucmVnaXN0ZXItbGVmdCBpbWcge1xuICAgIG1hcmdpbi10b3A6IDE1JTtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgICB3aWR0aDogNzAlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZlciAzcyBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gICAgYW5pbWF0aW9uOiBtb3ZlciAwLjVzIGluZmluaXRlIGFsdGVybmF0ZTtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIG1vdmVyIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIG1vdmVyIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gICAgfVxufVxuXG4ucmVnaXN0ZXItbGVmdCBwIHtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICBwYWRkaW5nOiAxMiU7XG4gICAgbWFyZ2luLXRvcDogLTklO1xufVxuXG4ucmVnaXN0ZXIgLnJlZ2lzdGVyLWZvcm0ge1xuICAgIHBhZGRpbmc6IDEyJTtcbiAgICBtYXJnaW4tdG9wOiAwJTtcbn1cblxuLnJlZ2lzdGVyLWhlYWRpbmcge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvKiBtYXJnaW4tdG9wOiA4JTsgKi9cbiAgICBtYXJnaW4tYm90dG9tOiAtOCU7XG4gICAgY29sb3I6ICM0OTUwNTc7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddInventoriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-add-inventories",
                templateUrl: "./add-inventories.component.html",
                styleUrls: ["./add-inventories.component.css"],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "pAu7":
/*!***************************************!*\
  !*** ./src/app/sidebar/menu-items.ts ***!
  \***************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
const ROUTES = [
    {
        path: "",
        title: "Dashboard",
        icon: "mdi mdi-dots-horizontal",
        class: "nav-small-cap",
        extralink: true,
        submenu: [],
    },
    {
        path: "/profile",
        title: "User Profile",
        icon: "mdi mdi-account",
        class: "",
        extralink: false,
        submenu: [],
    },
    {
        path: "/users",
        title: "Agent",
        icon: "fa fa-users",
        class: "",
        extralink: false,
        submenu: [],
    },
    {
        path: "/inventory",
        title: "Inventory",
        icon: "fas fa-file-alt",
        class: "",
        extralink: false,
        submenu: [],
    },
    {
        path: "/leads",
        title: "Leads",
        icon: "fas fa-phone-volume",
        class: "",
        extralink: false,
        submenu: [],
    }
];


/***/ }),

/***/ "rd1V":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/Authentication/authentication.service */ "6q8g");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _dashboard_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dashboard/header/header.component */ "iqMG");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");












function SignupComponent_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_div_17_div_1_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.fullname.errors.required);
} }
function SignupComponent_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_div_22_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email must be a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_div_22_div_1_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_div_22_div_2_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.email.errors.email);
} }
function SignupComponent_div_23_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_div_23_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must be at least 6 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_div_23_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_div_23_div_4_div_1_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_div_23_div_4_div_2_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.f.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.f.password.errors.minlength);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function SignupComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SignupComponent_div_23_Template_input_keyup_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.password($event.target.value, "Pass"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SignupComponent_div_23_div_4_Template, 3, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r2.submitted && ctx_r2.f.password.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.submitted && ctx_r2.f.password.errors);
} }
function SignupComponent_div_24_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_div_24_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm Password must be at least 6 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_div_24_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_div_24_div_4_div_1_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_div_24_div_4_div_2_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.f.confirm_password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.f.confirm_password.errors.minlength);
} }
function SignupComponent_div_24_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r22.abc);
} }
function SignupComponent_div_24_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r23.abc);
} }
function SignupComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SignupComponent_div_24_Template_input_keyup_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.password($event.target.value, "Conf"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SignupComponent_div_24_div_4_Template, 3, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SignupComponent_div_24_div_5_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SignupComponent_div_24_div_6_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r3.submitted && ctx_r3.f.confirm_password.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.submitted && ctx_r3.f.confirm_password.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.submitted && !ctx_r3.f.confirm_password.errors);
} }
function SignupComponent_div_29_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contact is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_div_29_div_1_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.f.contact.errors.required);
} }
function SignupComponent_div_31_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "City is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_div_31_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_div_31_div_4_div_1_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r29.f.city.errors.required);
} }
function SignupComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ng-select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SignupComponent_div_31_Template_ng_select_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.changeCity($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SignupComponent_div_31_div_4_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r5.cities)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r5.submitted && ctx_r5.f.city.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.submitted && ctx_r5.f.city.errors);
} }
function SignupComponent_div_32_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "City is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_div_32_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_div_32_div_4_div_1_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r33.f.city.errors.required);
} }
const _c1 = function () { return { standalone: true }; };
function SignupComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ng-select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_div_32_Template_ng_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.user.city.city = $event; })("change", function SignupComponent_div_32_Template_ng_select_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.changeCity($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SignupComponent_div_32_div_4_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6.user.city.city)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1))("items", ctx_r6.cities)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r6.submitted && ctx_r6.f.city.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.submitted && ctx_r6.f.city.errors);
} }
function SignupComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ng-select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_div_33_Template_ng_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.selectStringLocations = $event; })("change", function SignupComponent_div_33_Template_ng_select_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.changeLocation($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.selectStringLocations)("multiple", true)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1))("items", ctx_r7.locations);
} }
function SignupComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ng-select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_div_34_Template_ng_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.selectStringLocations = $event; })("change", function SignupComponent_div_34_Template_ng_select_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.changeLocation($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r8.selectStringLocations)("multiple", true)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1))("items", ctx_r8.locations);
} }
function SignupComponent_div_35_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Access is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_div_35_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_div_35_div_4_div_1_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r44.f.access.errors.required);
} }
function SignupComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ng-select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SignupComponent_div_35_Template_ng_select_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.changeAccess($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SignupComponent_div_35_div_4_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r9.accessType)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r9.submitted && ctx_r9.f.access.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.submitted && ctx_r9.f.access.errors);
} }
function SignupComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ng-select", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_div_36_Template_ng_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r48.user.access = $event; })("change", function SignupComponent_div_36_Template_ng_select_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.changeAccess($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r10.user.access)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1))("items", ctx_r10.accessType);
} }
function SignupComponent_span_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_span_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SignupComponent {
    constructor(formBuilder, authService, router, toastr) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.submitted = false;
        this.accessType = [{ access: "agent" }, { access: "city_admin" }];
        this.selectedLocations = [];
        this.selectStringLocations = [];
    }
    ngOnInit() {
        this.getUser();
        this.removeUser();
        this.initialize();
        if (this.user) {
            this.updatefields();
        }
    }
    removeUser() {
        this.authService.removeUser();
    }
    getUser() {
        this.user = this.authService.getUser();
    }
    updatefields() {
        console.log(this.user);
        // this.registerForm.value["city"] = this.user.city;
        // this.registerForm.value["access"] = this.user.access;
        this.registerForm.patchValue({ fullname: this.user.fullname });
        this.registerForm.patchValue({ email: this.user.email });
        this.registerForm.patchValue({ password: this.user.password });
        this.registerForm.patchValue({ location: this.user.location });
        this.registerForm.patchValue({ city: this.user.city });
        this.registerForm.patchValue({ contact: this.user.contact });
        this.registerForm.patchValue({ access: this.user.access });
        console.log(this.registerForm);
        if (this.user.location) {
            for (let i = 0; i < this.user.location.length; i++) {
                console.log(this.user.location[i].location);
                this.selectStringLocations.push(this.user.location[i].location);
                this.selectedLocations.push(this.user.location[i].location);
            }
            console.log(this.selectStringLocations);
        }
        if (this.user.city) {
            this.getLocations(this.user.city._id);
            // this.registerForm.patchValue({ city: this.user.city });
            console.log(this.user.city.city);
        }
        this.selectedCity = this.user.city.city;
        console.log(this.selectedLocations);
    }
    initialize() {
        if (this.user) {
            this.registerForm = this.formBuilder.group({
                fullname: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                email: [
                    "",
                    [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
                    ],
                ],
                location: [],
                contact: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                access: [],
                city: [""],
            });
        }
        else {
            this.registerForm = this.formBuilder.group({
                fullname: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                email: [
                    "",
                    [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
                    ],
                ],
                password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
                location: [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                city: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                contact: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                access: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                confirm_password: [
                    "",
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)],
                ],
            }
            // {
            //   validators: this.password.bind(this),
            // }
            );
        }
        this.getCities();
    }
    password(event, value) {
        const password = this.registerForm.get("password");
        const confirm_password = this.registerForm.get("confirm_password");
        if (value === "Pass" && event === confirm_password.value) {
            this.abc = "";
        }
        else if (value === "Conf" && event === password.value) {
            this.abc = "";
        }
        else {
            this.abc = "Password not matched";
        }
    }
    // Calling Api to get the Cities
    getCities() {
        this.authService.getCities().subscribe((data) => {
            console.log(data);
            this.cities = data;
        }, (err) => {
            console.error(err);
        });
    }
    // Calling Api to get the Locations
    getLocations(selectedCity) {
        this.authService.getLocations().subscribe((locations) => {
            console.log(locations);
            this.locations = locations;
            if (selectedCity) {
                this.locations = locations.filter((loc) => {
                    return loc.cityId == selectedCity;
                });
            }
        }, (err) => {
            console.error(err);
        });
    }
    //Function to change the city of --ng select city--
    changeCity(city) {
        this.selectStringLocations = [];
        this.locations = [];
        if (city)
            this.getLocations(city._id);
        this.registerForm.patchValue({ city });
        this.locations = "";
        if (this.user) {
            console.log(city.city);
            console.log(this.selectedCity);
            if (this.selectedCity == city.city) {
                this.selectStringLocations = this.selectedLocations;
                console.log(this.selectStringLocations);
            }
            else
                this.selectStringLocations = [];
        }
        if (city)
            this.getLocations(city._id);
        this.registerForm.patchValue({ city });
    }
    //Function to change the location of --ng select location--
    changeLocation(location) {
        console.log(location);
        this.registerForm.patchValue({ location: location });
    }
    // Patch the value of access input using this below function
    changeAccess(access) {
        // console.log(access.access);
        if (access)
            this.registerForm.patchValue({ access: access.access });
    }
    // Function to register the user by sending whole form
    registerUser() {
        console.log(this.registerForm);
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            console.log("Erroneous");
            this.toastr.error("Can not Registered", "Error", {
                timeOut: 5000,
            });
            return;
        }
        this.registerForm.patchValue({ location: this.selectedLocations });
        if (this.user) {
            // console.log(this.registerForm.value);
            this.authService
                .updateUser(this.user._id, this.registerForm.value)
                .subscribe((data) => {
                console.log("signup data: ", data);
                // this.registerresponse = data;
                const email = this.registerForm.value.email;
                const msg = data.message;
                // const status = data.status;
                // this.registerForm.reset();
                if (msg !== "This email has been registered already") {
                    this.toastr.success(msg, "Success", {
                        timeOut: 5000,
                    });
                    this.router.navigate(["users"]);
                }
                else {
                    this.toastr.error(msg, "Error", {
                        timeOut: 5000,
                    });
                }
            });
        }
        else {
            console.log(this.registerForm.value);
            this.authService.register(this.registerForm.value).subscribe((data) => {
                console.log("signup data: ", data);
                const msg = data.message;
                // if (msg !== "This email has been registered already") {
                this.toastr.success(msg, "Success", {
                    timeOut: 5000,
                });
                this.router.navigate(["users"]);
                // }
            }, (error) => {
                console.log(error.error.message);
                this.toastr.error(error.error.message, "Error", {
                    timeOut: 5000,
                });
            });
        }
    }
    // convenience getter for easy access to form fields
    get f() {
        return this.registerForm.controls;
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 41, vars: 23, consts: [[1, "row"], [1, "col-md-12"], [1, "container"], [1, "col-md-11", "col-lg-9", "col-xl-7", "right"], [1, "register"], [1, "text-center"], [1, "form-register", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "input-group"], ["aria-hidden", "true", 1, "fa", "fa-user", "fa"], ["type", "text", "formControlName", "fullname", "placeholder", "Full name", "autocomplete", "off", 1, "form-control", "inputs", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-envelope"], ["type", "text", "formControlName", "email", "id", "email", "autocomplete", "off", "placeholder", "Enter Email", 1, "form-control", "emailInput", 3, "ngClass"], ["class", "form-group", 4, "ngIf"], [1, "fas", "fa-phone"], ["formControlName", "contact", "type", "number", "autocomplete", "off", "placeholder", "Phone Number", 1, "form-control", "inputs", 3, "ngClass"], ["id", "message"], [1, "form-group", "pull-right"], ["type", "submit", 1, "btn", "btn-primary"], [4, "ngIf"], [1, "invalid-feedback"], [1, "fas", "fa-unlock"], ["type", "password", "formControlName", "password", "autocomplete", "off", "placeholder", "Password", 1, "form-control", "inputs", 3, "ngClass", "keyup"], ["type", "password", "formControlName", "confirm_password", "autocomplete", "off", "placeholder", "Confirm Password", 1, "form-control", "inputs", 3, "ngClass", "keyup"], ["class", "texts", 4, "ngIf"], [1, "texts"], [1, "fas", "fa-building"], ["bindLabel", "city", "bindValue", "_id", "placeholder", "Select City", 1, "ng-select", "inputs2", 3, "items", "ngClass", "change"], ["bindLabel", "city", "bindValue", "city", "placeholder", "Select City", 1, "ng-select", "inputs2", 3, "ngModel", "ngModelOptions", "items", "ngClass", "ngModelChange", "change"], [1, "fas", "fa-street-view"], ["bindLabel", "location", "bindValue", "location", "placeholder", "Select Location", 1, "ng-select", "inputs2", 3, "ngModel", "multiple", "ngModelOptions", "items", "ngModelChange", "change"], [1, "fas", "fa-universal-access"], ["bindLabel", "access", "bindValue", "access", "placeholder", "Select Access Type", 1, "ng-select", "inputs2", 3, "items", "ngClass", "change"], ["bindLabel", "access", "bindValue", "access", "placeholder", "Select Access Type", 1, "ng-select", "inputs2", 3, "ngModel", "ngModelOptions", "items", "ngModelChange", "change"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Welcome to my asasa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_12_listener() { return ctx.registerUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SignupComponent_div_17_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SignupComponent_div_22_Template, 3, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SignupComponent_div_23_Template, 5, 4, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SignupComponent_div_24_Template, 7, 6, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, SignupComponent_div_29_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, SignupComponent_div_31_Template, 5, 5, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, SignupComponent_div_32_Template, 5, 8, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, SignupComponent_div_33_Template, 4, 5, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, SignupComponent_div_34_Template, 4, 5, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, SignupComponent_div_35_Template, 5, 5, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, SignupComponent_div_36_Template, 4, 4, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, SignupComponent_span_39_Template, 2, 0, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, SignupComponent_span_40_Template, 2, 0, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.submitted && ctx.f.fullname.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.fullname.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx.submitted && ctx.f.contact.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.contact.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_dashboard_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: [".custom-select.is-invalid[_ngcontent-%COMP%], .form-control.is-invalid[_ngcontent-%COMP%], .was-validated[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]:invalid, .was-validated[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:invalid {\n    border-color: #e8051b;\n}\n\n.texts[_ngcontent-%COMP%] {\n    color: #dc3545;\n    font-size: 0.7rem;\n}\n\n.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n    height: 36px;\n    border: 1px solid #dc3545;\n}\n\n.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n    color: #333;\n    background-color: #fff;\n    border-radius: 30px !important;\n    border: 1px solid #ccc;\n    min-height: 42px;\n    align-items: center;\n    border: 1px solid #dc3545;\n}\n\n.form-control[_ngcontent-%COMP%] {\n    height: 35px;\n}\n\n.form-group[_ngcontent-%COMP%] {\n    margin-bottom: 2rem;\n}\n\n.inputs2[_ngcontent-%COMP%] {\n    margin-top: -15px;\n    color: #333;\n    background-color: #fff;\n    border-radius: 34px;\n    width: 400%;\n    margin-left: 33px;\n}\n\n.lastdiv[_ngcontent-%COMP%] {\n    margin-left: 40px;\n}\n\na[_ngcontent-%COMP%] {\n    color: #38baa2;\n}\n\nh2[_ngcontent-%COMP%] {\n    color: #38baa2;\n    font-weight: 600;\n    margin-top: -10px;\n}\n\ni[_ngcontent-%COMP%]:before {\n    position: relative;\n    top: 30%;\n    font-size: 22px;\n    color: #38bba3;\n    margin-right: -3px;\n}\n\n.word[_ngcontent-%COMP%] {\n    color: #38baa2;\n    letter-spacing: 1px;\n    padding: 20 px;\n    font: bold 14px arial, sans-serif;\n}\n\n.emailInput[_ngcontent-%COMP%] {\n    margin-left: 16px;\n}\n\n.input-field[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 10px;\n    text-align: center;\n}\n\n.input-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    position: absolute;\n}\n\n.input-container[_ngcontent-%COMP%] {\n    display: flex;\n    width: 100%;\n    margin-bottom: 15px;\n}\n\n.a[_ngcontent-%COMP%] {\n    text-align: left;\n}\n\n.vl[_ngcontent-%COMP%] {\n    border-left: 2.2px solid #38baa2;\n    height: 250px;\n    margin-left: 22px;\n}\n\n.v2[_ngcontent-%COMP%] {\n    margin-top: 40px;\n    color: #38baa2;\n    font-weight: bold;\n}\n\n.login[_ngcontent-%COMP%] {\n    height: auto;\n    min-height: 100vh;\n}\n\n.btn[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    margin-left: 40px;\n    width: 100px;\n    font-size: 14px;\n    background-color: #38baa2;\n    color: white;\n    border: 1px solid transparent;\n}\n\n.left-img[_ngcontent-%COMP%] {\n    width: 45%;\n    margin-left: 80px;\n}\n\n.inputs[_ngcontent-%COMP%] {\n    margin-left: 15px;\n}\n\n.left[_ngcontent-%COMP%] {\n    margin-top: 145px;\n}\n\n.right[_ngcontent-%COMP%] {\n    margin-top: 160px;\n}\n\n.input-area1[_ngcontent-%COMP%] {\n    margin-left: 20px;\n}\n\n@media only screen and (max-width: 1750px) {\n    .register[_ngcontent-%COMP%] {\n        margin-left: 50px;\n    }\n}\n\n@media only screen and (max-width: 1650px) {\n    .register[_ngcontent-%COMP%] {\n        margin-left: 200px;\n    }\n}\n\n@media only screen and (min-width: 1200px)and (max-width: 1400px) {\n    .register[_ngcontent-%COMP%] {\n        margin-left: 250px;\n    }\n}\n\n@media only screen and (max-width: 1200px) {\n    .register[_ngcontent-%COMP%] {\n        margin-left: 250px;\n    }\n}\n\n@media only screen and (max-width: 1100px) {\n    .register[_ngcontent-%COMP%] {\n        margin-left: 250px;\n    }\n}\n\n@media only screen and (max-width: 992px) {\n    .register[_ngcontent-%COMP%] {\n        margin-left: 20px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0lBSUkscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFFSSxhQUFhO0lBQ2IsV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tc2VsZWN0LmlzLWludmFsaWQsXG4uZm9ybS1jb250cm9sLmlzLWludmFsaWQsXG4ud2FzLXZhbGlkYXRlZCAuY3VzdG9tLXNlbGVjdDppbnZhbGlkLFxuLndhcy12YWxpZGF0ZWQgLmZvcm0tY29udHJvbDppbnZhbGlkIHtcbiAgICBib3JkZXItY29sb3I6ICNlODA1MWI7XG59XG5cbi50ZXh0cyB7XG4gICAgY29sb3I6ICNkYzM1NDU7XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG59XG5cbi5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZSAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkYzM1NDU7XG59XG5cbi5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgbWluLWhlaWdodDogNDJweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkYzM1NDU7XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICAgIGhlaWdodDogMzVweDtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5pbnB1dHMyIHtcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XG4gICAgd2lkdGg6IDQwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDMzcHg7XG59XG5cbi5sYXN0ZGl2IHtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbn1cblxuYSB7XG4gICAgY29sb3I6ICMzOGJhYTI7XG59XG5cbmgyIHtcbiAgICBjb2xvcjogIzM4YmFhMjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuXG5pOmJlZm9yZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMzAlO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBjb2xvcjogIzM4YmJhMztcbiAgICBtYXJnaW4tcmlnaHQ6IC0zcHg7XG59XG5cbi53b3JkIHtcbiAgICBjb2xvcjogIzM4YmFhMjtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIHBhZGRpbmc6IDIwIHB4O1xuICAgIGZvbnQ6IGJvbGQgMTRweCBhcmlhbCwgc2Fucy1zZXJpZjtcbn1cblxuLmVtYWlsSW5wdXQge1xuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuXG4uaW5wdXQtZmllbGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW5wdXQtaWNvbnMgaSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uaW5wdXQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5hIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udmwge1xuICAgIGJvcmRlci1sZWZ0OiAyLjJweCBzb2xpZCAjMzhiYWEyO1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIycHg7XG59XG5cbi52MiB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBjb2xvcjogIzM4YmFhMjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmxvZ2luIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5idG4ge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzhiYWEyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLmxlZnQtaW1nIHtcbiAgICB3aWR0aDogNDUlO1xuICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xufVxuXG4uaW5wdXRzIHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLmxlZnQge1xuICAgIG1hcmdpbi10b3A6IDE0NXB4O1xufVxuXG4ucmlnaHQge1xuICAgIG1hcmdpbi10b3A6IDE2MHB4O1xufVxuXG4uaW5wdXQtYXJlYTEge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE3NTBweCkge1xuICAgIC5yZWdpc3RlciB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjUwcHgpIHtcbiAgICAucmVnaXN0ZXIge1xuICAgICAgICBtYXJnaW4tbGVmdDogMjAwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweClhbmQgKG1heC13aWR0aDogMTQwMHB4KSB7XG4gICAgLnJlZ2lzdGVyIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgICAucmVnaXN0ZXIge1xuICAgICAgICBtYXJnaW4tbGVmdDogMjUwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xuICAgIC5yZWdpc3RlciB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNTBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAucmVnaXN0ZXIge1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-signup",
                templateUrl: "./signup.component.html",
                styleUrls: ["./signup.component.css"],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "rkdl":
/*!*****************************************************************!*\
  !*** ./src/app/Pipes/Non-Utilized_Pipes/table-filter05.pipe.ts ***!
  \*****************************************************************/
/*! exports provided: TableFilter05Pipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableFilter05Pipe", function() { return TableFilter05Pipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TableFilter05Pipe {
    transform(user, search_demand) {
        if (!user || !search_demand) {
            return user;
        }
        return user.filter(user => user.Demand.toLowerCase().indexOf(search_demand.toLowerCase()) !== -1);
    }
}
TableFilter05Pipe.ɵfac = function TableFilter05Pipe_Factory(t) { return new (t || TableFilter05Pipe)(); };
TableFilter05Pipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "tableFilter05", type: TableFilter05Pipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableFilter05Pipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'tableFilter05'
            }]
    }], null, null); })();


/***/ }),

/***/ "rwU0":
/*!**************************************************!*\
  !*** ./src/app/dashboard/both/both.component.ts ***!
  \**************************************************/
/*! exports provided: BothComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BothComponent", function() { return BothComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/Authentication/authentication.service */ "6q8g");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.component */ "iqMG");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dashboard.component */ "QX6l");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");










function BothComponent_tr_62_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const loc_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", loc_r3.location, ", ");
} }
function BothComponent_tr_62_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Number : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, BothComponent_tr_62_span_26_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BothComponent_tr_62_Template_i_click_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const user_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.setUser(user_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BothComponent_tr_62_Template_a_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const user_r1 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.setUser(user_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BothComponent_tr_62_Template_i_click_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const user_r1 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.confirmID(user_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Delete Confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Are you sure you want to Delete it? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BothComponent_tr_62_Template_button_click_63_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.deleteLead(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.referenceId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", user_r1 == null ? null : user_r1.client_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1 == null ? null : user_r1.client_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1 == null ? null : user_r1.client_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1 == null ? null : user_r1.property_purpose);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1 == null ? null : user_r1.property_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1 == null ? null : user_r1.Prop_num);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1 == null ? null : user_r1.area);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r1.city[0] == null ? null : user_r1.city[0].city, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", user_r1.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1 == null ? null : user_r1.demand_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1 == null ? null : user_r1.beds_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1 == null ? null : user_r1.Phone_num);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1 == null ? null : user_r1.Comment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.assigned_to == null ? null : user_r1.assigned_to.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1 == null ? null : user_r1.Admin_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1 == null ? null : user_r1.Agent_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](43, 18, user_r1 == null ? null : user_r1.created, "dd/MM/yyyy"));
} }
class BothComponent {
    constructor(router, authService, toastr) {
        this.router = router;
        this.authService = authService;
        this.toastr = toastr;
        this.withAutofocus = `<button type="button" ngbAutofocus class="btn btn-danger"
      (click)="modal.close('Ok click')">Ok</button>`;
    }
    ngOnInit() {
        this.getAllList();
    }
    setUser(user) {
        this.authService.setUser(user);
        // this.authService.setFormTitle('Both');
        this.router.navigateByUrl('/add-inventories');
    }
    setFormTitle(name) {
        this.authService.setFormTitle(name);
        this.router.navigate(['/add-inventories']);
    }
    getAllList() {
        this.authService.getAll().subscribe((data) => {
            this.user = data.inventories;
            console.log('Server response: ', data);
        }, (err) => {
            console.error(err);
        });
    }
    // Function to delete the single inventory
    deleteLead() {
        console.log(this.deleteId);
        this.authService.deleteInventory(this.deleteId).subscribe(data => {
            console.log(data);
            if (data.code === 200) {
                this.toastr.success(data.message, 'Success', {
                    timeOut: 5000
                });
                this.getAllList();
                //   for ( let i = 0; i < this.user.length; i++){
                //      if ( this.user[i]._id === this.saveID) { this.user.splice(i, 1); i--; }}
            }
        });
    }
    confirmID(id) {
        console.log(id);
        this.deleteId = id;
    }
}
BothComponent.ɵfac = function BothComponent_Factory(t) { return new (t || BothComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
BothComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BothComponent, selectors: [["app-both"]], decls: 64, vars: 5, consts: [[1, "row"], [1, "col-md-12"], [1, "col-md-2"], [1, "col-md-9"], [1, "both"], [1, "btn", "btn-primary", 3, "click"], [1, "pull-right"], [1, "card-body", "row"], [1, "col"], ["id", "myInput", "type", "text", "placeholder", "Search topic or keyword", 1, "form-control", 3, "ngModel", "ngModelChange"], ["onclick", "window.print()", 1, "btn", "btn-primary"], [1, "btn", "btn-primary"], [1, "table", "table-hover"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["class", "badge badge-light", 4, "ngFor", "ngForOf"], [1, "fa", "fa-edit", "icon", 3, "click"], ["role", "button", 3, "click"], ["data-toggle", "modal", "data-target", "#exampleModal1", 1, "fa", "fa-trash", "icon", 3, "click"], ["id", "exampleModal1", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"], [1, "badge", "badge-light"]], template: function BothComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Both Leads/Inventory Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BothComponent_Template_button_click_13_listener() { return ctx.setFormTitle("Both"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Add New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BothComponent_Template_input_ngModelChange_18_listener($event) { return ctx.general_search = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Excel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Purpose");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Prop. Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Prop. #");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Area");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Demand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Beds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Phone #");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Assigned To");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Admin Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Agent Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Added On");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Operations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, BothComponent_tr_62_Template, 65, 21, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](63, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.general_search);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](63, 2, ctx.user, ctx.general_search));
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__["Ng2SearchPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: [".table[_ngcontent-%COMP%] {\n    border: 1px solid #dee2e6;\n}\n\n.abc[_ngcontent-%COMP%] {\n    overflow-x: hidden;\n}\n\n.dropbtn[_ngcontent-%COMP%] {\n    background-color: #38baa2;\n    color: white;\n    padding: 16px;\n    font-size: 16px;\n    border: none;\n}\n\n.dropdown[_ngcontent-%COMP%] {\n    position: relative;\n    display: inline-block;\n}\n\n.dropdown-content[_ngcontent-%COMP%] {\n    display: none;\n    position: absolute;\n    background-color: #f1f1f1;\n    min-width: 160px;\n    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n    z-index: 1;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: black;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    background-color: #ddd;\n}\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n    display: block;\n}\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropbtn[_ngcontent-%COMP%] {\n    background-color: #3e8e41;\n}\n\nth[_ngcontent-%COMP%] {\n    background-color: white;\n    color: black;\n    \n}\n\n.both[_ngcontent-%COMP%] {\n    margin-left: 47px;\n    margin-top: 120px;\n    width: 100%;\n    overflow-x: scroll;\n}\n\n.fa[_ngcontent-%COMP%] {\n    margin-left: 10px;\n}\n\n.btn[_ngcontent-%COMP%] {\n    \n    width: 100px;\n    font-size: 14px;\n    background-color: #38baa2;\n    color: white;\n    border: 1px solid transparent;\n}\n\n.form-control-borderless[_ngcontent-%COMP%] {\n    border: none;\n    border: 1px solid whitesmoke;\n}\n\n@media only screen and (max-width: 1650px) {\n    .both[_ngcontent-%COMP%] {\n        margin-left: 50px;\n    }\n}\n\n@media only screen and (min-width: 1200px)and (max-width: 1400px) {\n    .both[_ngcontent-%COMP%] {\n        margin-left: 80px;\n    }\n}\n\n@media only screen and (max-width: 1200px) {\n    .both[_ngcontent-%COMP%] {\n        margin-left: 100px;\n    }\n}\n\n@media only screen and (max-width: 1100px) {\n    .both[_ngcontent-%COMP%] {\n        margin-left: 120px;\n    }\n}\n\n@media only screen and (max-width: 992px) {\n    .both[_ngcontent-%COMP%] {\n        margin-left: -80px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2JvdGgvYm90aC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLCtDQUErQztJQUMvQyxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvYm90aC9ib3RoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG59XG5cbi5hYmMge1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLmRyb3BidG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOGJhYTI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLmRyb3Bkb3duIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uZHJvcGRvd24tY29udGVudCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IGEge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZHJvcGRvd246aG92ZXIgLmRyb3BidG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZThlNDE7XG59XG5cbnRoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgLyogYm9yZGVyOiAycHggc29saWQgI2RlZTJlNjsgKi9cbn1cblxuLmJvdGgge1xuICAgIG1hcmdpbi1sZWZ0OiA0N3B4O1xuICAgIG1hcmdpbi10b3A6IDEyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbn1cblxuLmZhIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmJ0biB7XG4gICAgLyogbWFyZ2luLWxlZnQ6IDI1cHg7ICovXG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzhiYWEyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLmZvcm0tY29udHJvbC1ib3JkZXJsZXNzIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGVzbW9rZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjUwcHgpIHtcbiAgICAuYm90aCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpYW5kIChtYXgtd2lkdGg6IDE0MDBweCkge1xuICAgIC5ib3RoIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDgwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAgIC5ib3RoIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcbiAgICAuYm90aCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMjBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAuYm90aCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtODBweDtcbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BothComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-both',
                templateUrl: './both.component.html',
                styleUrls: ['./both.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "snq6":
/*!********************************************************!*\
  !*** ./src/app/services/guards/redirectlogin.guard.ts ***!
  \********************************************************/
/*! exports provided: RedirectLoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirectLoginGuard", function() { return RedirectLoginGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Authentication/authentication.service */ "6q8g");





class RedirectLoginGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const token = yield this.authService.getToken();
            if (token) {
                this.router.navigateByUrl('/profile');
            }
            else {
                return true;
            }
        });
    }
}
RedirectLoginGuard.ɵfac = function RedirectLoginGuard_Factory(t) { return new (t || RedirectLoginGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"])); };
RedirectLoginGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RedirectLoginGuard, factory: RedirectLoginGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RedirectLoginGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "tzAo":
/*!*****************************************************************!*\
  !*** ./src/app/Pipes/Non-Utilized_Pipes/table-filter03.pipe.ts ***!
  \*****************************************************************/
/*! exports provided: TableFilter03Pipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableFilter03Pipe", function() { return TableFilter03Pipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TableFilter03Pipe {
    transform(user, search_area) {
        if (!user || !search_area) {
            return user;
        }
        return user.filter(user => user.Area.toLowerCase().indexOf(search_area.toLowerCase()) !== -1);
    }
}
TableFilter03Pipe.ɵfac = function TableFilter03Pipe_Factory(t) { return new (t || TableFilter03Pipe)(); };
TableFilter03Pipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "tableFilter03", type: TableFilter03Pipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableFilter03Pipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'tableFilter03'
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map/map.component */ "cNoH");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _forgetpass_forgetpass_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgetpass/forgetpass.component */ "w7pD");
/* harmony import */ var _forgetpassverify_forgetpassverify_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgetpassverify/forgetpassverify.component */ "xDWS");
/* harmony import */ var _newpass_newpass_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./newpass/newpass.component */ "Q98w");
/* harmony import */ var _signupotp_signupotp_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signupotp/signupotp.component */ "15Qt");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/profile/profile.component */ "80h2");
/* harmony import */ var _dashboard_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/inventory/inventory.component */ "PJWD");
/* harmony import */ var _dashboard_both_both_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/both/both.component */ "rwU0");
/* harmony import */ var _dashboard_users_users_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/users/users.component */ "NPdi");
/* harmony import */ var _dashboard_leads_leads_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/leads/leads.component */ "OA72");
/* harmony import */ var _dashboard_inactive_inactive_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dashboard/inactive/inactive.component */ "iOYQ");
/* harmony import */ var _dashboard_options_options_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dashboard/options/options.component */ "TXUV");
/* harmony import */ var _dashboard_users_add_users_add_users_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dashboard/users/add-users/add-users.component */ "wB38");
/* harmony import */ var _dashboard_leads_add_leads_add_leads_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dashboard/leads/add-leads/add-leads.component */ "bcNE");
/* harmony import */ var _dashboard_inventory_add_inventories_add_inventories_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dashboard/inventory/add-inventories/add-inventories.component */ "oFoK");
/* harmony import */ var _services_guards_redirectlogin_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/guards/redirectlogin.guard */ "snq6");
/* harmony import */ var _services_guards_islogin_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/guards/islogin.guard */ "SzuG");
























const routes = [
    {
        path: 'map',
        canActivate: [_services_guards_islogin_guard__WEBPACK_IMPORTED_MODULE_21__["IsLoginGuard"]], component: _map_map_component__WEBPACK_IMPORTED_MODULE_2__["MapComponent"]
    },
    {
        path: '',
        canActivate: [_services_guards_redirectlogin_guard__WEBPACK_IMPORTED_MODULE_20__["RedirectLoginGuard"]],
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'register',
        canActivate: [_services_guards_islogin_guard__WEBPACK_IMPORTED_MODULE_21__["IsLoginGuard"]], component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]
    },
    { path: 'forgetpass-component', component: _forgetpass_forgetpass_component__WEBPACK_IMPORTED_MODULE_5__["ForgetpassComponent"] },
    { path: 'forgetpassverify-component/:email', component: _forgetpassverify_forgetpassverify_component__WEBPACK_IMPORTED_MODULE_6__["ForgetpassverifyComponent"] },
    { path: 'newpass-component/:email', component: _newpass_newpass_component__WEBPACK_IMPORTED_MODULE_7__["NewpassComponent"] },
    { path: 'signupotp-component/:email', canActivate: [_services_guards_islogin_guard__WEBPACK_IMPORTED_MODULE_21__["IsLoginGuard"]], component: _signupotp_signupotp_component__WEBPACK_IMPORTED_MODULE_8__["SignupotpComponent"] },
    {
        path: 'dashboard',
        canActivate: [_services_guards_islogin_guard__WEBPACK_IMPORTED_MODULE_21__["IsLoginGuard"]],
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"]
    },
    {
        path: 'navbar',
        canActivate: [_services_guards_islogin_guard__WEBPACK_IMPORTED_MODULE_21__["IsLoginGuard"]], component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"]
    },
    {
        path: 'profile/:email',
        canActivate: [_services_guards_islogin_guard__WEBPACK_IMPORTED_MODULE_21__["IsLoginGuard"]], component: _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"]
    },
    {
        path: 'profile',
        canActivate: [_services_guards_islogin_guard__WEBPACK_IMPORTED_MODULE_21__["IsLoginGuard"]],
        component: _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"]
    },
    {
        path: 'inventory',
        canActivate: [_services_guards_islogin_guard__WEBPACK_IMPORTED_MODULE_21__["IsLoginGuard"]], component: _dashboard_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_11__["InventoryComponent"]
    },
    {
        path: 'users',
        canActivate: [_services_guards_islogin_guard__WEBPACK_IMPORTED_MODULE_21__["IsLoginGuard"]], component: _dashboard_users_users_component__WEBPACK_IMPORTED_MODULE_13__["UsersComponent"]
    },
    {
        path: 'both',
        canActivate: [_services_guards_islogin_guard__WEBPACK_IMPORTED_MODULE_21__["IsLoginGuard"]], component: _dashboard_both_both_component__WEBPACK_IMPORTED_MODULE_12__["BothComponent"]
    },
    {
        path: 'leads',
        canActivate: [_services_guards_islogin_guard__WEBPACK_IMPORTED_MODULE_21__["IsLoginGuard"]], component: _dashboard_leads_leads_component__WEBPACK_IMPORTED_MODULE_14__["LeadsComponent"]
    },
    {
        path: 'inactive',
        canActivate: [_services_guards_islogin_guard__WEBPACK_IMPORTED_MODULE_21__["IsLoginGuard"]], component: _dashboard_inactive_inactive_component__WEBPACK_IMPORTED_MODULE_15__["InactiveComponent"]
    },
    {
        path: 'options',
        canActivate: [_services_guards_islogin_guard__WEBPACK_IMPORTED_MODULE_21__["IsLoginGuard"]], component: _dashboard_options_options_component__WEBPACK_IMPORTED_MODULE_16__["OptionsComponent"]
    },
    {
        path: 'add-users',
        canActivate: [_services_guards_islogin_guard__WEBPACK_IMPORTED_MODULE_21__["IsLoginGuard"]], component: _dashboard_users_add_users_add_users_component__WEBPACK_IMPORTED_MODULE_17__["AddUsersComponent"]
    },
    {
        path: 'add-leads',
        canActivate: [_services_guards_islogin_guard__WEBPACK_IMPORTED_MODULE_21__["IsLoginGuard"]], component: _dashboard_leads_add_leads_add_leads_component__WEBPACK_IMPORTED_MODULE_18__["AddLeadsComponent"]
    },
    {
        path: 'add-inventories',
        canActivate: [_services_guards_islogin_guard__WEBPACK_IMPORTED_MODULE_21__["IsLoginGuard"]], component: _dashboard_inventory_add_inventories_add_inventories_component__WEBPACK_IMPORTED_MODULE_19__["AddInventoriesComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/Authentication/authentication.service */ "6q8g");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");









function LoginComponent_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_17_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email must be a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_17_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_17_div_2_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors.email);
} }
function LoginComponent_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_23_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must be at least 6 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_23_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_23_div_2_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.password.errors.minlength);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class LoginComponent {
    constructor(formBuilder, // Creating an instance of Formbuilder
    authService, // Instance of Authentication services created in front end
    router, route, toastr) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.toastr = toastr;
        // registerForm: FormGroup;
        this.loading = false;
        this.submitted = false;
    }
    ngOnInit() {
        this.initialize();
    }
    initialize() {
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]]
        });
        this.route.params.subscribe(param => {
            this.email = param.email;
        });
    }
    loginUser() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
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
        }, (error) => {
            console.error(error.error.message);
            this.errorMessage = error;
            this.toastr.error(error.error.message, 'Error', {
                timeOut: 5000
            });
        });
    }
    // getting input labels values from user end (login.html)
    get f() { return this.loginForm.controls; }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 27, vars: 9, consts: [[1, "container"], [1, "row", "center"], ["src", "assets/icons/wave.png", 1, "wave"], [1, "img"], ["src", "assets/icons/bg.svg"], [1, "login-content", "text-center"], [1, "login"], [1, "form-register", 3, "formGroup", "ngSubmit"], ["src", "assets/icons/avatar.svg"], [1, "input-div", "one", 2, "background-color", "#fff", "padding-left", "5px"], [1, "i"], [1, "fa", "fa-user"], [1, "div"], ["type", "text", "type", "email", "name", "email", "formControlName", "email", "placeholder", "Email address", "required", "", "autofocus", "", 1, "", 3, "ngClass"], ["class", "invalid-feedback text-left", 4, "ngIf"], [1, "input-div", "pass", 2, "background-color", "#fff"], [1, "fa", "fa-lock"], ["type", "password", "type", "password", "formControlName", "password", "placeholder", "Password", "required", "", 1, "", 3, "ngClass"], ["type", "submit", "value", "Login", 1, "btn"], [1, "mt-4", "mb-4"], ["href", "https://fonts.googleapis.com/css?family=Poppins:600&display=swap", "rel", "stylesheet"], [1, "invalid-feedback", "text-left"], [4, "ngIf"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_8_listener() { return ctx.loginUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Welcome to Agent Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LoginComponent_div_17_Template, 3, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, LoginComponent_div_23_Template, 3, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "hr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "link", 20);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.submitted && ctx.f.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".title[_ngcontent-%COMP%] {\n    font: 450 16px/14px Roboto, \"Helvetica Neue\", sans-serif;\n    letter-spacing: normal;\n    margin: 15px -21px 18px;\n}\n\n*[_ngcontent-%COMP%] {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%] {\n    font-family: 'Poppins', sans-serif;\n    overflow: hidden;\n}\n\n.wave[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    height: 100%;\n    z-index: -1;\n}\n\n.container[_ngcontent-%COMP%] {\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-gap: 7rem;\n    padding: 0 2rem;\n}\n\n.img[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n}\n\n.login-content[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    text-align: left;\n    margin-left: 300px;\n    margin-bottom: 100px;\n}\n\n.login[_ngcontent-%COMP%] {\n    padding: 20px 30px;\n    background: #eee;\n    border-radius: 30px;\n}\n\n.img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 500px;\n}\n\nform[_ngcontent-%COMP%] {\n    width: 360px;\n}\n\n.login-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 120px;\n    height: auto;\n}\n\n.login-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin: 15px 0;\n    color: #333;\n    text-transform: uppercase;\n    font-size: 1.2rem;\n}\n\n.login-content[_ngcontent-%COMP%]   .input-div[_ngcontent-%COMP%] {\n    position: relative;\n    display: grid;\n    grid-template-columns: 7% 93%;\n    margin: 25px 0;\n    padding: 5px 0;\n}\n\n.login-content[_ngcontent-%COMP%]   .input-div.one[_ngcontent-%COMP%] {\n    margin-top: 0;\n}\n\n.i[_ngcontent-%COMP%] {\n    color: #39bba3;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1rem;\n}\n\n.i[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    transition: .3s;\n}\n\n.input-div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] {\n    position: relative;\n    height: 45px;\n}\n\n.input-div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > h5[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 10px;\n    top: 50%;\n    transform: translateY(-50%);\n    color: #999;\n    font-size: 18px;\n    transition: .3s;\n}\n\n.input-div[_ngcontent-%COMP%]:before, .input-div[_ngcontent-%COMP%]:after {\n    content: '';\n    position: absolute;\n    bottom: -2px;\n    width: 0%;\n    height: 2px;\n    background-color: #38d39f;\n    transition: .4s;\n}\n\n.input-div[_ngcontent-%COMP%]:before {\n    right: 50%;\n}\n\n.input-div[_ngcontent-%COMP%]:after {\n    left: 50%;\n}\n\n.input-div.focus[_ngcontent-%COMP%]:before, .input-div.focus[_ngcontent-%COMP%]:after {\n    width: 50%;\n}\n\n.input-div.focus[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > h5[_ngcontent-%COMP%] {\n    top: -5px;\n    font-size: 15px;\n}\n\n.input-div.focus[_ngcontent-%COMP%] > .i[_ngcontent-%COMP%] > i[_ngcontent-%COMP%] {\n    color: #38d39f;\n}\n\n.input-div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > input[_ngcontent-%COMP%] {\n    position: relative;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    border: none;\n    outline: none;\n    background: none;\n    padding: 0.5rem 0.7rem;\n    font-size: 1rem;\n    color: #555;\n    font-family: 'poppins', sans-serif;\n    font-weight: 400;\n}\n\n.input-div.pass[_ngcontent-%COMP%] {\n    margin-bottom: 4px;\n}\n\na[_ngcontent-%COMP%] {\n    display: inline-block;\n    text-align: right;\n    text-decoration: none;\n    color: #0b6592;\n    transition: .3s;\n}\n\np[_ngcontent-%COMP%] {\n    font-size: 1rem;\n}\n\na[_ngcontent-%COMP%]:hover {\n    color: #0b8f9f;\n}\n\n.btn[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    height: 50px;\n    border-radius: 1px;\n    outline: none;\n    border: none;\n    background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);\n    background-size: 200%;\n    font-size: 1.2rem;\n    color: #fff;\n    font-family: 'Poppins', sans-serif;\n    text-transform: uppercase;\n    margin: 1rem 0;\n    cursor: pointer;\n    transition: .5s;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n    background-position: right;\n}\n\nhr[_ngcontent-%COMP%] {\n    border: 0;\n    height: 1px;\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));\n}\n\n@media screen and (max-width: 1400px) {\n    .login-content[_ngcontent-%COMP%] {\n        margin-left: 200px;\n    }\n}\n\n@media screen and (max-width: 1300px) {\n    .login-content[_ngcontent-%COMP%] {\n        margin-left: 100px;\n    }\n}\n\n@media screen and (max-width: 1200px) {\n    form[_ngcontent-%COMP%] {\n        margin-left: 30px;\n        margin-bottom: 100px;\n        width: 290px;\n    }\n    .login-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 2.4rem;\n        margin: 8px 0;\n    }\n    .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 400px;\n    }\n    .login[_ngcontent-%COMP%] {\n        padding: 10px 20px;\n        padding-bottom: 0;\n        margin-left: 50px;\n    }\n}\n\n@media screen and (max-width: 1100px) {\n    .container[_ngcontent-%COMP%] {\n        grid-template-columns: 1fr;\n    }\n    .img[_ngcontent-%COMP%] {\n        display: none;\n    }\n    .wave[_ngcontent-%COMP%] {\n        display: none;\n    }\n    .login-content[_ngcontent-%COMP%] {\n        justify-content: center;\n    }\n    .login[_ngcontent-%COMP%] {\n        padding: 20px 40px;\n        margin-left: 0;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdEQUF3RDtJQUN4RCxzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxPQUFPO0lBQ1AsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsUUFBUTtJQUNSLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osU0FBUztJQUNULFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsV0FBVztJQUNYLGtDQUFrQztJQUNsQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osc0VBQXNFO0lBQ3RFLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGtDQUFrQztJQUNsQyx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUNBO0lBQ0ksU0FBUztJQUNULFdBQVc7SUFDWCxvR0FBb0c7QUFDeEc7O0FBR0E7SUFDSTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLG9CQUFvQjtRQUNwQixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsYUFBYTtJQUNqQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixpQkFBaUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksMEJBQTBCO0lBQzlCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSx1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixjQUFjO0lBQ2xCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcbiAgICBmb250OiA0NTAgMTZweC8xNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgbWFyZ2luOiAxNXB4IC0yMXB4IDE4cHg7XG59XG5cbioge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLndhdmUge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogLTE7XG59XG5cbi5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBncmlkLWdhcDogN3JlbTtcbiAgICBwYWRkaW5nOiAwIDJyZW07XG59XG5cbi5pbWcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubG9naW4tY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiAzMDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn1cblxuLmxvZ2luIHtcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuXG4uaW1nIGltZyB7XG4gICAgd2lkdGg6IDUwMHB4O1xufVxuXG5mb3JtIHtcbiAgICB3aWR0aDogMzYwcHg7XG59XG5cbi5sb2dpbi1jb250ZW50IGltZyB7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuLmxvZ2luLWNvbnRlbnQgaDMge1xuICAgIG1hcmdpbjogMTVweCAwO1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5sb2dpbi1jb250ZW50IC5pbnB1dC1kaXYge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNyUgOTMlO1xuICAgIG1hcmdpbjogMjVweCAwO1xuICAgIHBhZGRpbmc6IDVweCAwO1xufVxuXG4ubG9naW4tY29udGVudCAuaW5wdXQtZGl2Lm9uZSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbn1cblxuLmkge1xuICAgIGNvbG9yOiAjMzliYmEzO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbi5pIGkge1xuICAgIHRyYW5zaXRpb246IC4zcztcbn1cblxuLmlucHV0LWRpdj5kaXYge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDQ1cHg7XG59XG5cbi5pbnB1dC1kaXY+ZGl2Pmg1IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTBweDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgY29sb3I6ICM5OTk7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHRyYW5zaXRpb246IC4zcztcbn1cblxuLmlucHV0LWRpdjpiZWZvcmUsXG4uaW5wdXQtZGl2OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtMnB4O1xuICAgIHdpZHRoOiAwJTtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzhkMzlmO1xuICAgIHRyYW5zaXRpb246IC40cztcbn1cblxuLmlucHV0LWRpdjpiZWZvcmUge1xuICAgIHJpZ2h0OiA1MCU7XG59XG5cbi5pbnB1dC1kaXY6YWZ0ZXIge1xuICAgIGxlZnQ6IDUwJTtcbn1cblxuLmlucHV0LWRpdi5mb2N1czpiZWZvcmUsXG4uaW5wdXQtZGl2LmZvY3VzOmFmdGVyIHtcbiAgICB3aWR0aDogNTAlO1xufVxuXG4uaW5wdXQtZGl2LmZvY3VzPmRpdj5oNSB7XG4gICAgdG9wOiAtNXB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmlucHV0LWRpdi5mb2N1cz4uaT5pIHtcbiAgICBjb2xvcjogIzM4ZDM5Zjtcbn1cblxuLmlucHV0LWRpdj5kaXY+aW5wdXQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC43cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogIzU1NTtcbiAgICBmb250LWZhbWlseTogJ3BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5pbnB1dC1kaXYucGFzcyB7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuXG5hIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjMGI2NTkyO1xuICAgIHRyYW5zaXRpb246IC4zcztcbn1cbnAge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuYTpob3ZlciB7XG4gICAgY29sb3I6ICMwYjhmOWY7XG59XG5cbi5idG4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzJiZThmLCAjMzhkMzlmLCAjMzJiZThmKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMCU7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG1hcmdpbjogMXJlbSAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAuNXM7XG59XG5cbi5idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xufVxuaHIge1xuICAgIGJvcmRlcjogMDtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMC43NSksIHJnYmEoMCwgMCwgMCwgMCkpO1xufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MDBweCkge1xuICAgIC5sb2dpbi1jb250ZW50IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTMwMHB4KSB7XG4gICAgLmxvZ2luLWNvbnRlbnQge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgICBmb3JtIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICAgICAgICB3aWR0aDogMjkwcHg7XG4gICAgfVxuICAgIC5sb2dpbi1jb250ZW50IGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAyLjRyZW07XG4gICAgICAgIG1hcmdpbjogOHB4IDA7XG4gICAgfVxuICAgIC5pbWcgaW1nIHtcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgIH1cbiAgICAubG9naW4ge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xuICAgIC5jb250YWluZXIge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICB9XG4gICAgLmltZyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC53YXZlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLmxvZ2luLWNvbnRlbnQge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gICAgLmxvZ2luIHtcbiAgICAgICAgcGFkZGluZzogMjBweCA0MHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "w7pD":
/*!****************************************************!*\
  !*** ./src/app/forgetpass/forgetpass.component.ts ***!
  \****************************************************/
/*! exports provided: ForgetpassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetpassComponent", function() { return ForgetpassComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/Authentication/authentication.service */ "6q8g");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");








function ForgetpassComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ForgetpassComponent_div_19_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email must be a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ForgetpassComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForgetpassComponent_div_19_div_1_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ForgetpassComponent_div_19_div_2_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors.email);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class ForgetpassComponent {
    constructor(authServ, formBuilder, router) {
        this.authServ = authServ;
        this.formBuilder = formBuilder;
        this.router = router;
        this.submitted = false;
    }
    ngOnInit() {
        this.forgetPassForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]
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
        };
        this.authServ.verifyEmail(body).subscribe(data => {
            console.log(data);
            const status = data.success;
            const msg = data.status;
            const email = this.forgetPassForm.value.email;
            if (status) {
                alert(msg);
                this.router.navigate(['forgetpassverify-component', email]);
            }
            else {
                alert(msg);
            }
        });
    }
}
ForgetpassComponent.ɵfac = function ForgetpassComponent_Factory(t) { return new (t || ForgetpassComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ForgetpassComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgetpassComponent, selectors: [["app-forgetpass"]], decls: 26, vars: 5, consts: [["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], ["href", "//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css", "rel", "stylesheet", "id", "bootstrap-css"], [1, "container"], [1, "row"], [1, "col-sm-5", "col-md-5", "left"], ["src", "assets/icons/asasa.gif", 1, "left-img"], [1, "col-1", "v2"], [1, "vl"], [1, "col-sm-6", "col-md-6", "right"], [1, "form-register", 3, "formGroup", "ngSubmit"], [1, "input-container"], [1, "input-group"], [1, "fa", "fa-user", "icon"], ["id", "inputEmail", "type", "text", "name", "email", "formControlName", "email", "placeholder", "Email address", "required", "", "autofocus", "", 1, "form-control", "rounded-pill", "border-0", "shadow-sm", "px-4", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["id", "customCheck1", "type", "checkbox", "checked", "", 1, "custom-control-input"], [1, "form-group"], ["type", "submit", 1, "btn", "btn-info", "rounded-pill"], ["routerLink", "/", 1, "btn", "btn-info", "rounded-pill"], [1, "invalid-feedback"], [4, "ngIf"]], template: function ForgetpassComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Forget password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Welcome to my asasa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ForgetpassComponent_Template_form_ngSubmit_14_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ForgetpassComponent_div_19_Template, 3, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Get Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.forgetPassForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["h2[_ngcontent-%COMP%]{\n  color: #38baa2;\n  font-weight: 600;\n  margin-left: 200px;\n  margin-top: -10px;\n}\n\ninput[_ngcontent-%COMP%]{\n  margin-left: 15px;\n  border: 2px solid #0000001a !important;\n  border-radius: 50rem!important;\n}\n\ni[_ngcontent-%COMP%]:before {\n  position: relative;\n  top: 30%;\n  font-size: 22px;\n  color: #38bba3;\n  margin-right: 1px;\n}\n\n.word[_ngcontent-%COMP%] {\n    color: #38baa2;\n    letter-spacing: 1px;\n    padding: 20 px;\n    font: bold 14px arial,sans-serif;\n    \n}\n\n.emailInput[_ngcontent-%COMP%]{\nmargin-left: 12px;\n}\n\n.input-field[_ngcontent-%COMP%] { \n\twidth: 100%; \n\tpadding: 10px; \n\ttext-align: center; \n}\n\n.input-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { \n\tposition: absolute; \n}\n\n.input-container[_ngcontent-%COMP%] { \n\tdisplay: flex;\n\twidth: 100%;\n\tmargin-bottom: 15px;\n  }\n\n.a[_ngcontent-%COMP%]{\n\ttext-align: left;\n}\n\n.vl[_ngcontent-%COMP%]{\n  border-left: 2.2px solid #38baa2;\n  height: 250px;\n  margin-left: 22px;\n}\n\n.v2[_ngcontent-%COMP%]{\n  margin-top: 40px ;\n  color: #38baa2;\n  font-weight: bold;\n}\n\n.login[_ngcontent-%COMP%]{\n\theight:auto;\n  min-height: 100vh;\n}\n\n.btn[_ngcontent-%COMP%]{\n  margin-left: 30px;\n  width: 100px;\n  font-size: 14px;\n  background-color: #38baa2 ;\n  color: white;\n  border: 1px solid transparent;\n}\n\n.left-img[_ngcontent-%COMP%]{\n  width:45%;\n  margin-left: 80px;\n}\n\n.inputs[_ngcontent-%COMP%]{\n  margin-left: 15px;\n}\n\n.left[_ngcontent-%COMP%]{\nmargin-top: 145px ;\n}\n\n.right[_ngcontent-%COMP%]{\nmargin-top: 220px ;\n}\n\n.input-area1[_ngcontent-%COMP%]{\n  \n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ2V0cGFzcy9mb3JnZXRwYXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsc0NBQXNDO0VBQ3RDLDhCQUE4QjtBQUNoQzs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxnQ0FBZ0M7SUFDaEMsdUJBQXVCO0FBQzNCOztBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUNBO0NBQ0MsV0FBVztDQUNYLGFBQWE7Q0FDYixrQkFBa0I7QUFDbkI7O0FBQ0E7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBQ0EsbUJBQ3VCLFNBQVM7Q0FDL0IsYUFBYTtDQUNiLFdBQVc7Q0FDWCxtQkFBbUI7RUFDbEI7O0FBQ0Y7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUNBO0NBQ0MsV0FBVztFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsU0FBUztFQUNULGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFDQTs7RUFFRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9mb3JnZXRwYXNzL2ZvcmdldHBhc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgye1xuICBjb2xvcjogIzM4YmFhMjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbn1cblxuaW5wdXR7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwMWEgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTByZW0haW1wb3J0YW50O1xufVxuaTpiZWZvcmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMzAlO1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiAjMzhiYmEzO1xuICBtYXJnaW4tcmlnaHQ6IDFweDtcbn1cbi53b3JkIHtcbiAgICBjb2xvcjogIzM4YmFhMjtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIHBhZGRpbmc6IDIwIHB4O1xuICAgIGZvbnQ6IGJvbGQgMTRweCBhcmlhbCxzYW5zLXNlcmlmO1xuICAgIC8qIGJhY2tncm91bmQ6LiAjZmZmOyAqL1xufVxuLmVtYWlsSW5wdXR7XG5tYXJnaW4tbGVmdDogMTJweDtcbn1cbi5pbnB1dC1maWVsZCB7IFxuXHR3aWR0aDogMTAwJTsgXG5cdHBhZGRpbmc6IDEwcHg7IFxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7IFxufSBcbi5pbnB1dC1pY29ucyBpIHsgXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG59IFxuLmlucHV0LWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94OyAvKiBJRTEwICovXG5cdGRpc3BsYXk6IGZsZXg7XG5cdHdpZHRoOiAxMDAlO1xuXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG4uYXtcblx0dGV4dC1hbGlnbjogbGVmdDtcbn1cbi52bHtcbiAgYm9yZGVyLWxlZnQ6IDIuMnB4IHNvbGlkICMzOGJhYTI7XG4gIGhlaWdodDogMjUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMnB4O1xufVxuLnYye1xuICBtYXJnaW4tdG9wOiA0MHB4IDtcbiAgY29sb3I6ICMzOGJhYTI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmxvZ2lue1xuXHRoZWlnaHQ6YXV0bztcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5idG57XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4YmFhMiA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5sZWZ0LWltZ3tcbiAgd2lkdGg6NDUlO1xuICBtYXJnaW4tbGVmdDogODBweDtcbn1cblxuLmlucHV0c3tcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG4ubGVmdHtcbm1hcmdpbi10b3A6IDE0NXB4IDtcbn1cbi5yaWdodHtcbm1hcmdpbi10b3A6IDIyMHB4IDtcbn1cbi5pbnB1dC1hcmVhMXtcbiAgXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgetpassComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forgetpass',
                templateUrl: './forgetpass.component.html',
                styleUrls: ['./forgetpass.component.css']
            }]
    }], function () { return [{ type: _services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "wB38":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/users/add-users/add-users.component.ts ***!
  \******************************************************************/
/*! exports provided: AddUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUsersComponent", function() { return AddUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/Authentication/authentication.service */ "6q8g");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");









function AddUsersComponent_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Id is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddUsersComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddUsersComponent_div_17_div_1_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.userId.errors.required);
} }
function AddUsersComponent_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddUsersComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddUsersComponent_div_23_div_1_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.fullname.errors.required);
} }
function AddUsersComponent_div_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contact is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddUsersComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddUsersComponent_div_30_div_1_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.contact.errors.required);
} }
function AddUsersComponent_div_37_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Location is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddUsersComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddUsersComponent_div_37_div_1_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.location.errors.required);
} }
function AddUsersComponent_div_45_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddUsersComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddUsersComponent_div_45_div_1_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.f.email.errors.required);
} }
function AddUsersComponent_div_53_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Access is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddUsersComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddUsersComponent_div_53_div_1_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.f.access.errors.required);
} }
function AddUsersComponent_div_68_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Status is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddUsersComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddUsersComponent_div_68_div_1_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.f.status.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class AddUsersComponent {
    constructor(formBuilder, authService, router, toastr) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.submitted = false;
    }
    // tslint:disable-next-line: typedef
    formDeclare() {
        this.adduserForm = this.formBuilder.group({
            location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            userId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            fullname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            contact: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            access: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    // convenience getter for easy access to form fields
    // tslint:disable-next-line: typedef
    get f() { return this.adduserForm.controls; }
    ngOnInit() {
        this.formDeclare();
    }
    // tslint:disable-next-line: typedef
    createUser() {
        this.authService.createUsers(this.adduserForm).subscribe((res) => {
            console.log('Subscribed data: ', res);
        });
    }
    // tslint:disable-next-line: typedef
    submitForm() {
        this.submitted = true; // stop here if form is invalid
        if (this.adduserForm.invalid) {
            this.toastr.error('Fields Empty', 'Error', {
                timeOut: 5000
            });
            // console.log('Erroneous')
            return;
        }
        else {
            console.log('calling the service: ', this.adduserForm.value);
            this.authService.createUsers(this.adduserForm.value).subscribe((res) => {
                this.adduserForm.reset();
                this.toastr.success('User Added', 'Success', {
                    timeOut: 9000
                });
                console.log('Subscribed data: ', res);
            });
        }
    }
}
AddUsersComponent.ɵfac = function AddUsersComponent_Factory(t) { return new (t || AddUsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
AddUsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddUsersComponent, selectors: [["app-add-users"]], decls: 82, vars: 29, consts: [[1, "register"], [1, "row"], [1, "col-md-2", "register-left"], ["src", "assets/icons/asasa.gif", "alt", ""], [1, "col-md-10", "col-sm-10", "register-right"], [1, "form-register", 3, "formGroup"], [1, "register-heading"], [1, "row", "register-form"], [1, "col-md-6", "col-sm-6"], [1, "form-group"], [1, ""], ["type", "number", "formControlName", "userId", "id", "userId", "required", "", "autocomplete", "off", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "formControlName", "fullname", "id", "fullname", "required", "", "autocomplete", "off", 1, "form-control", 3, "ngClass"], ["type", "number", "formControlName", "contact", "id", "contact", "required", "", "autocomplete", "off", 1, "form-control", 3, "ngClass"], ["type", "text", "formControlName", "location", "required", "", "autocomplete", "off", 1, "form-control", 3, "ngClass"], ["type", "email", "formControlName", "email", "required", "", "autocomplete", "off", 1, "form-control", 3, "ngClass"], ["formControlName", "access", "type", "text", "list", "productName", 1, "form-control", 3, "ngClass"], ["id", "productName"], ["value", "Pen"], ["value", "Pencil"], ["value", "Paper"], ["formControlName", "status", "type", "text", "list", "productName1", 1, "form-control", 3, "ngClass"], ["id", "productName1"], [1, "col-md-12", "col-sm-12"], [1, "pull-right"], [1, "btn", "btn-primary", 3, "click"], [1, "invalid-feedback"], [4, "ngIf"]], template: function AddUsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Asasa Real Estate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Add User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " User ID ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AddUsersComponent_div_17_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Full Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AddUsersComponent_div_23_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Contact # ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AddUsersComponent_div_30_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Location ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, AddUsersComponent_div_37_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Email Address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, AddUsersComponent_div_45_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Access ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, AddUsersComponent_div_53_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "datalist", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Pen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Pencil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Paper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, AddUsersComponent_div_68_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "datalist", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Pen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Pencil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Paper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddUsersComponent_Template_button_click_80_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.adduserForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.submitted && ctx.f.userId.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.userId.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.submitted && ctx.f.fullname.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.fullname.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.submitted && ctx.f.contact.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.contact.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx.submitted && ctx.f.location.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.location.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c0, ctx.submitted && ctx.f.access.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.access.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c0, ctx.submitted && ctx.f.status.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.status.errors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: [".center[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nh2[_ngcontent-%COMP%] {\n    font: 200 25px/30px Scribble, \"Scribble\", Scribble;\n    color: whitesmoke;\n}\n\nhtml[_ngcontent-%COMP%] {\n    font-family: 'Lora', sans-serif;\n    width: 100%;\n}\n\nbody[_ngcontent-%COMP%] {\n    margin: 5% auto 0 auto;\n    width: 90%;\n    max-width: 1125px;\n}\n\nh1[_ngcontent-%COMP%] {\n    font-size: 28px;\n    margin-bottom: 2.5%;\n}\n\ninput[_ngcontent-%COMP%], span[_ngcontent-%COMP%], label[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n    font-family: 'Ubuntu', sans-serif;\n    display: block;\n    padding: 12px;\n    border: none;\n    font-size: 14px;\n}\n\ntextarea[_ngcontent-%COMP%]:focus, input[_ngcontent-%COMP%]:focus {\n    outline: 0;\n}\n\ninput.question[_ngcontent-%COMP%], textarea.question[_ngcontent-%COMP%] {\n    font-size: 14px;\n    font-weight: 200;\n    border-radius: 2px;\n    margin: 0;\n    border: none;\n    width: 90%;\n    background: none;\n    transition: padding-top 0.1s ease, margin-top 0.1s ease;\n    overflow-x: hidden;\n}\n\ninput.question[_ngcontent-%COMP%] + label[_ngcontent-%COMP%], textarea.question[_ngcontent-%COMP%] + label[_ngcontent-%COMP%] {\n    display: block;\n    position: relative;\n    white-space: nowrap;\n    padding: 0;\n    margin: 0;\n    width: 90%;\n    border-top: 1px solid black;\n    transition: width 0.5s ease;\n    height: 0px;\n}\n\ninput.question[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%], textarea.question[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\ninput.question[_ngcontent-%COMP%]:focus, input.question[_ngcontent-%COMP%]:valid {\n    padding-top: -5px;\n}\n\ntextarea.question[_ngcontent-%COMP%]:valid, textarea.question[_ngcontent-%COMP%]:focus {\n    margin-top: 35px;\n}\n\ninput.question[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%], input.question[_ngcontent-%COMP%]:valid + label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] {\n    top: -100px;\n    font-size: 22px;\n    color: #333;\n}\n\ntextarea.question[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%], textarea.question[_ngcontent-%COMP%]:valid + label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] {\n    top: -150px;\n    font-size: 22px;\n    color: #333;\n}\n\ninput.question[_ngcontent-%COMP%]:valid + label[_ngcontent-%COMP%], textarea.question[_ngcontent-%COMP%]:valid + label[_ngcontent-%COMP%] {\n    border-color: black;\n}\n\ninput.question[_ngcontent-%COMP%]:invalid, textarea.question[_ngcontent-%COMP%]:invalid {\n    box-shadow: none;\n}\n\ninput.question[_ngcontent-%COMP%] + label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%], textarea.question[_ngcontent-%COMP%] + label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] {\n    font-weight: 300;\n    margin: 0;\n    position: absolute;\n    color: black;\n    font-size: 28px;\n    top: -66px;\n    left: 0px;\n    z-index: -1;\n    transition: top 0.6s ease, font-size 0.6s ease, color 0.6s ease;\n}\n\ninput[type=\"submit\"][_ngcontent-%COMP%] {\n    transition: opacity 0.5s ease, background 0.5s ease;\n    display: block;\n    opacity: 0;\n    margin: 10px 0 0 0;\n    padding: 10px;\n    cursor: pointer;\n}\n\ninput[type=\"submit\"][_ngcontent-%COMP%]:hover {\n    background: #EEE;\n}\n\ninput[type=\"submit\"][_ngcontent-%COMP%]:active {\n    background: #999;\n}\n\ninput.question[_ngcontent-%COMP%]:valid ~ input[type=\"submit\"][_ngcontent-%COMP%], textarea.question[_ngcontent-%COMP%]:valid ~ input[type=\"submit\"][_ngcontent-%COMP%] {\n    -webkit-animation: appear 1s forwards;\n    animation: appear 1s forwards;\n}\n\ninput.question[_ngcontent-%COMP%]:invalid ~ input[type=\"submit\"][_ngcontent-%COMP%], textarea.question[_ngcontent-%COMP%]:invalid ~ input[type=\"submit\"][_ngcontent-%COMP%] {\n    display: none;\n}\n\n@-webkit-keyframes appear {\n    100% {\n        opacity: 0.8;\n    }\n}\n\n@keyframes appear {\n    100% {\n        opacity: 0.8;\n    }\n}\n\n.form-control[_ngcontent-%COMP%] {\n    border: 1px solid;\n    margin-top: 10px;\n    border-radius: 1rem;\n    width: 92%;\n}\n\n.btn[_ngcontent-%COMP%] {\n    width: 100px;\n    font-size: 14px;\n    background-color: #38baa2;\n    color: white;\n    border: 1px solid transparent;\n}\n\n.btn-danger[_ngcontent-%COMP%] {\n    background-color: red;\n    border-radius: 5px;\n    height: 35px;\n    width: 100px;\n    font-size: 14px;\n    color: white;\n    border: 1px solid transparent;\n}\n\n.register[_ngcontent-%COMP%] {\n    background: -webkit-linear-gradient(left, rgb(26, 23, 23), #38baa2);\n    padding: 3%;\n}\n\n.register-left[_ngcontent-%COMP%] {\n    text-align: center;\n    color: #fff;\n    margin-top: 4%;\n}\n\n.register-left[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    border: none;\n    border-radius: 1.5rem;\n    padding: 2%;\n    width: 60%;\n    background: #f8f9fa;\n    font-weight: bold;\n    color: #383d41;\n    margin-top: 30%;\n    margin-bottom: 3%;\n    cursor: pointer;\n}\n\n.register-right[_ngcontent-%COMP%] {\n    background: white;\n    border-top-left-radius: 10% 50%;\n    border-bottom-left-radius: 10% 50%;\n}\n\n.register-left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-top: 15%;\n    margin-bottom: 5%;\n    width: 50%;\n    -webkit-animation: mover 3s infinite alternate;\n    animation: mover 0.5s infinite alternate;\n}\n\n@-webkit-keyframes mover {\n    0% {\n        transform: translateY(0);\n    }\n    100% {\n        transform: translateY(-20px);\n    }\n}\n\n@keyframes mover {\n    0% {\n        transform: translateY(0);\n    }\n    100% {\n        transform: translateY(-20px);\n    }\n}\n\n.register-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: lighter;\n    padding: 12%;\n    margin-top: -9%;\n}\n\n.register[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%] {\n    padding: 10%;\n    margin-top: 10%;\n}\n\n.register-heading[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-top: 8%;\n    margin-bottom: -15%;\n    color: #495057;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3VzZXJzL2FkZC11c2Vycy9hZGQtdXNlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0RBQWtEO0lBQ2xELGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7Ozs7SUFJSSxpQ0FBaUM7SUFDakMsY0FBYztJQUNkLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFlBQVk7SUFDWixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLHVEQUF1RDtJQUN2RCxrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFNBQVM7SUFDVCxVQUFVO0lBQ1YsMkJBQTJCO0lBRTNCLDJCQUEyQjtJQUMzQixXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUVBOztJQUVJLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksV0FBVztJQUNYLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksV0FBVztJQUNYLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtJQUNmLFVBQVU7SUFDVixTQUFTO0lBQ1QsV0FBVztJQUVYLCtEQUErRDtBQUNuRTs7QUFFQTtJQUVJLG1EQUFtRDtJQUNuRCxjQUFjO0lBQ2QsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxxQ0FBcUM7SUFDckMsNkJBQTZCO0FBQ2pDOztBQUVBOztJQUVJLGFBQWE7QUFDakI7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFKQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtBQUNKOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLG1FQUFtRTtJQUNuRSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLCtCQUErQjtJQUMvQixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDViw4Q0FBOEM7SUFDOUMsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0k7UUFDSSx3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLDRCQUE0QjtJQUNoQztBQUNKOztBQUVBO0lBQ0k7UUFDSSx3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLDRCQUE0QjtJQUNoQztBQUNKOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL3VzZXJzL2FkZC11c2Vycy9hZGQtdXNlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaDIge1xuICAgIGZvbnQ6IDIwMCAyNXB4LzMwcHggU2NyaWJibGUsIFwiU2NyaWJibGVcIiwgU2NyaWJibGU7XG4gICAgY29sb3I6IHdoaXRlc21va2U7XG59XG5cbmh0bWwge1xuICAgIGZvbnQtZmFtaWx5OiAnTG9yYScsIHNhbnMtc2VyaWY7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmJvZHkge1xuICAgIG1hcmdpbjogNSUgYXV0byAwIGF1dG87XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXgtd2lkdGg6IDExMjVweDtcbn1cblxuaDEge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyLjUlO1xufVxuXG5pbnB1dCxcbnNwYW4sXG5sYWJlbCxcbnRleHRhcmVhIHtcbiAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG50ZXh0YXJlYTpmb2N1cyxcbmlucHV0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiAwO1xufVxuXG5pbnB1dC5xdWVzdGlvbixcbnRleHRhcmVhLnF1ZXN0aW9uIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDogOTAlO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogcGFkZGluZy10b3AgMC4xcyBlYXNlLCBtYXJnaW4tdG9wIDAuMXMgZWFzZTtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbmlucHV0LnF1ZXN0aW9uK2xhYmVsLFxudGV4dGFyZWEucXVlc3Rpb24rbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggMC41cyBlYXNlO1xuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNXMgZWFzZTtcbiAgICBoZWlnaHQ6IDBweDtcbn1cblxuaW5wdXQucXVlc3Rpb246Zm9jdXMrbGFiZWwsXG50ZXh0YXJlYS5xdWVzdGlvbjpmb2N1cytsYWJlbCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmlucHV0LnF1ZXN0aW9uOmZvY3VzLFxuaW5wdXQucXVlc3Rpb246dmFsaWQge1xuICAgIHBhZGRpbmctdG9wOiAtNXB4O1xufVxuXG50ZXh0YXJlYS5xdWVzdGlvbjp2YWxpZCxcbnRleHRhcmVhLnF1ZXN0aW9uOmZvY3VzIHtcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xufVxuXG5pbnB1dC5xdWVzdGlvbjpmb2N1cytsYWJlbD5zcGFuLFxuaW5wdXQucXVlc3Rpb246dmFsaWQrbGFiZWw+c3BhbiB7XG4gICAgdG9wOiAtMTAwcHg7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGNvbG9yOiAjMzMzO1xufVxuXG50ZXh0YXJlYS5xdWVzdGlvbjpmb2N1cytsYWJlbD5zcGFuLFxudGV4dGFyZWEucXVlc3Rpb246dmFsaWQrbGFiZWw+c3BhbiB7XG4gICAgdG9wOiAtMTUwcHg7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGNvbG9yOiAjMzMzO1xufVxuXG5pbnB1dC5xdWVzdGlvbjp2YWxpZCtsYWJlbCxcbnRleHRhcmVhLnF1ZXN0aW9uOnZhbGlkK2xhYmVsIHtcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xufVxuXG5pbnB1dC5xdWVzdGlvbjppbnZhbGlkLFxudGV4dGFyZWEucXVlc3Rpb246aW52YWxpZCB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuaW5wdXQucXVlc3Rpb24rbGFiZWw+c3BhbixcbnRleHRhcmVhLnF1ZXN0aW9uK2xhYmVsPnNwYW4ge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIHRvcDogLTY2cHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHotaW5kZXg6IC0xO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogdG9wIDAuNnMgZWFzZSwgZm9udC1zaXplIDAuNnMgZWFzZSwgY29sb3IgMC42cyBlYXNlO1xuICAgIHRyYW5zaXRpb246IHRvcCAwLjZzIGVhc2UsIGZvbnQtc2l6ZSAwLjZzIGVhc2UsIGNvbG9yIDAuNnMgZWFzZTtcbn1cblxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZSwgYmFja2dyb3VuZCAwLjVzIGVhc2U7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UsIGJhY2tncm91bmQgMC41cyBlYXNlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjRUVFO1xufVxuXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogIzk5OTtcbn1cblxuaW5wdXQucXVlc3Rpb246dmFsaWR+aW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcbnRleHRhcmVhLnF1ZXN0aW9uOnZhbGlkfmlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBhcHBlYXIgMXMgZm9yd2FyZHM7XG4gICAgYW5pbWF0aW9uOiBhcHBlYXIgMXMgZm9yd2FyZHM7XG59XG5cbmlucHV0LnF1ZXN0aW9uOmludmFsaWR+aW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcbnRleHRhcmVhLnF1ZXN0aW9uOmludmFsaWR+aW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuQGtleWZyYW1lcyBhcHBlYXIge1xuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgfVxufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgd2lkdGg6IDkyJTtcbn1cblxuLmJ0biB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzhiYWEyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLmJ0bi1kYW5nZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4ucmVnaXN0ZXIge1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYigyNiwgMjMsIDIzKSwgIzM4YmFhMik7XG4gICAgcGFkZGluZzogMyU7XG59XG5cbi5yZWdpc3Rlci1sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLXRvcDogNCU7XG59XG5cbi5yZWdpc3Rlci1sZWZ0IGlucHV0IHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xuICAgIHBhZGRpbmc6IDIlO1xuICAgIHdpZHRoOiA2MCU7XG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzM4M2Q0MTtcbiAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucmVnaXN0ZXItcmlnaHQge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwJSA1MCU7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTAlIDUwJTtcbn1cblxuLnJlZ2lzdGVyLWxlZnQgaW1nIHtcbiAgICBtYXJnaW4tdG9wOiAxNSU7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gICAgd2lkdGg6IDUwJTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogbW92ZXIgM3MgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAgIGFuaW1hdGlvbjogbW92ZXIgMC41cyBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBtb3ZlciB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBtb3ZlciB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICAgIH1cbn1cblxuLnJlZ2lzdGVyLWxlZnQgcCB7XG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgcGFkZGluZzogMTIlO1xuICAgIG1hcmdpbi10b3A6IC05JTtcbn1cblxuLnJlZ2lzdGVyIC5yZWdpc3Rlci1mb3JtIHtcbiAgICBwYWRkaW5nOiAxMCU7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xufVxuXG4ucmVnaXN0ZXItaGVhZGluZyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDglO1xuICAgIG1hcmdpbi1ib3R0b206IC0xNSU7XG4gICAgY29sb3I6ICM0OTUwNTc7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddUsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-users',
                templateUrl: './add-users.component.html',
                styleUrls: ['./add-users.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "xDWS":
/*!****************************************************************!*\
  !*** ./src/app/forgetpassverify/forgetpassverify.component.ts ***!
  \****************************************************************/
/*! exports provided: ForgetpassverifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetpassverifyComponent", function() { return ForgetpassverifyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/Authentication/authentication.service */ "6q8g");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");








function ForgetpassverifyComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Code is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ForgetpassverifyComponent_div_19_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Code must be at least 6 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ForgetpassverifyComponent_div_19_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Code should not be greater than 6 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ForgetpassverifyComponent_div_19_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Code must be a valid number sequence");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ForgetpassverifyComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForgetpassverifyComponent_div_19_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ForgetpassverifyComponent_div_19_div_2_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ForgetpassverifyComponent_div_19_div_3_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ForgetpassverifyComponent_div_19_div_4_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.code.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.code.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.code.errors.maxlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.code.errors.pattern);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class ForgetpassverifyComponent {
    constructor(authServ, formBuilder, router, route) {
        this.authServ = authServ;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.submitted = false;
    }
    ngOnInit() {
        this.route.params.subscribe(param => {
            this.email = param.email;
            // console.log(this.email);
        });
        this.initialize();
    }
    initialize() {
        this.forgetpassForm = this.formBuilder.group({
            code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]+$')]]
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
                alert(msg);
                this.router.navigate(['newpass-component', this.email]);
            }
            else {
                alert(msg);
            }
        });
    }
}
ForgetpassverifyComponent.ɵfac = function ForgetpassverifyComponent_Factory(t) { return new (t || ForgetpassverifyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
ForgetpassverifyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgetpassverifyComponent, selectors: [["app-forgetpassverify"]], decls: 25, vars: 5, consts: [["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], ["href", "//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css", "rel", "stylesheet", "id", "bootstrap-css"], [1, "container"], [1, "row"], [1, "col-sm-5", "col-md-5", "left"], ["src", "assets/icons/asasa.gif", 1, "left-img"], [1, "col-1", "v2"], [1, "vl"], [1, "col-sm-6", "col-md-6", "right"], [1, "form-register", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "input-group"], [1, "fa", "fa-user", "icon"], ["type", "text", "formControlName", "code", "name", "code", "id", "code", "placeholder", "Enter 6-digit verify code", 1, "form-control", "inputs", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "rounded-pill"], ["routerLink", "/forgetpass-component", 1, "btn", "btn-primary", "rounded-pill"], [1, "invalid-feedback"], [4, "ngIf"]], template: function ForgetpassverifyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Verification ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Welcome to my asasa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ForgetpassverifyComponent_Template_form_ngSubmit_14_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ForgetpassverifyComponent_div_19_Template, 5, 4, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Verify");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.forgetpassForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.submitted && ctx.f.code.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.code.errors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".btn[_ngcontent-%COMP%]{\n  \n  \n  width: 100px;\n  font-size: 14px;\n  background-color: #38baa2 ;\n  color: white;\n  border: 1px solid transparent;\n}\n\n.btn1[_ngcontent-%COMP%]{\n  \n  width: 100px;\n  font-size: 13px;\n  background-color: #38baa2 ;\n  color: white;\n  border: 1px solid transparent;\n  \n}\n\nh2[_ngcontent-%COMP%]{\n  color: #38baa2;\n  font-weight: 600;\n  margin-left: 200px;\n  margin-top: -10px;\n}\n\ninput[_ngcontent-%COMP%]{\n  border: 2px solid #0000001a !important;\n  border-radius: 50rem!important;\n}\n\ni[_ngcontent-%COMP%]:before {\n  position: relative;\n  top: 30%;\n  font-size: 22px;\n  color: #38bba3;\n  margin-right: 1px;\n}\n\n.word[_ngcontent-%COMP%] {\n    color: #38baa2;\n    letter-spacing: 1px;\n    padding: 20 px;\n    font: bold 14px arial,sans-serif;\n    \n}\n\n.emailInput[_ngcontent-%COMP%]{\nmargin-left: 12px;\n}\n\n.input-field[_ngcontent-%COMP%] { \n\twidth: 100%; \n\tpadding: 10px; \n\ttext-align: center; \n}\n\n.input-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { \n\tposition: absolute; \n}\n\n.input-container[_ngcontent-%COMP%] { \n\tdisplay: flex;\n\twidth: 100%;\n\tmargin-bottom: 15px;\n  }\n\n.a[_ngcontent-%COMP%]{\n\ttext-align: left;\n}\n\n.vl[_ngcontent-%COMP%]{\n  border-left: 2.2px solid #38baa2;\n  height: 250px;\n  margin-left: 22px;\n}\n\n.v2[_ngcontent-%COMP%]{\n  margin-top: 40px ;\n  color: #38baa2;\n  font-weight: bold;\n}\n\n.login[_ngcontent-%COMP%]{\n\theight:auto;\n  min-height: 100vh;\n}\n\n.left-img[_ngcontent-%COMP%]{\n  width:45%;\n  margin-left: 80px;\n}\n\n.inputs[_ngcontent-%COMP%]{\n  margin-left: 15px;\n}\n\n.left[_ngcontent-%COMP%]{\nmargin-top: 145px ;\n}\n\n.right[_ngcontent-%COMP%]{\nmargin-top: 220px ;\n}\n\n.input-area1[_ngcontent-%COMP%]{\n  \n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ2V0cGFzc3ZlcmlmeS9mb3JnZXRwYXNzdmVyaWZ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0Isd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLDhCQUE4QjtBQUNoQzs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxnQ0FBZ0M7SUFDaEMsdUJBQXVCO0FBQzNCOztBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUNBO0NBQ0MsV0FBVztDQUNYLGFBQWE7Q0FDYixrQkFBa0I7QUFDbkI7O0FBQ0E7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBQ0EsbUJBQ3VCLFNBQVM7Q0FDL0IsYUFBYTtDQUNiLFdBQVc7Q0FDWCxtQkFBbUI7RUFDbEI7O0FBQ0Y7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUNBO0NBQ0MsV0FBVztFQUNWLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLFNBQVM7RUFDVCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBQ0E7O0VBRUUsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvZm9yZ2V0cGFzc3ZlcmlmeS9mb3JnZXRwYXNzdmVyaWZ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5idG57XG4gIC8qIHBhZGRpbmc6IDBweDsgKi9cbiAgLyogaGVpZ2h0OiAzMHB4OyAqL1xuICB3aWR0aDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4YmFhMiA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5idG4xe1xuICAvKiBoZWlnaHQ6IDMwcHg7ICovXG4gIHdpZHRoOiAxMDBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzhiYWEyIDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgLyogYm9yZGVyLXJhZGl1czogM3B4OyAqL1xufVxuXG5oMntcbiAgY29sb3I6ICMzOGJhYTI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1sZWZ0OiAyMDBweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG59XG5cbmlucHV0e1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwMWEgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTByZW0haW1wb3J0YW50O1xufVxuaTpiZWZvcmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMzAlO1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiAjMzhiYmEzO1xuICBtYXJnaW4tcmlnaHQ6IDFweDtcbn1cbi53b3JkIHtcbiAgICBjb2xvcjogIzM4YmFhMjtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIHBhZGRpbmc6IDIwIHB4O1xuICAgIGZvbnQ6IGJvbGQgMTRweCBhcmlhbCxzYW5zLXNlcmlmO1xuICAgIC8qIGJhY2tncm91bmQ6LiAjZmZmOyAqL1xufVxuLmVtYWlsSW5wdXR7XG5tYXJnaW4tbGVmdDogMTJweDtcbn1cbi5pbnB1dC1maWVsZCB7IFxuXHR3aWR0aDogMTAwJTsgXG5cdHBhZGRpbmc6IDEwcHg7IFxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7IFxufSBcbi5pbnB1dC1pY29ucyBpIHsgXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG59IFxuLmlucHV0LWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94OyAvKiBJRTEwICovXG5cdGRpc3BsYXk6IGZsZXg7XG5cdHdpZHRoOiAxMDAlO1xuXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG4uYXtcblx0dGV4dC1hbGlnbjogbGVmdDtcbn1cbi52bHtcbiAgYm9yZGVyLWxlZnQ6IDIuMnB4IHNvbGlkICMzOGJhYTI7XG4gIGhlaWdodDogMjUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMnB4O1xufVxuLnYye1xuICBtYXJnaW4tdG9wOiA0MHB4IDtcbiAgY29sb3I6ICMzOGJhYTI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmxvZ2lue1xuXHRoZWlnaHQ6YXV0bztcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG4ubGVmdC1pbWd7XG4gIHdpZHRoOjQ1JTtcbiAgbWFyZ2luLWxlZnQ6IDgwcHg7XG59XG5cbi5pbnB1dHN7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuLmxlZnR7XG5tYXJnaW4tdG9wOiAxNDVweCA7XG59XG4ucmlnaHR7XG5tYXJnaW4tdG9wOiAyMjBweCA7XG59XG4uaW5wdXQtYXJlYTF7XG4gIFxuICBtYXJnaW4tbGVmdDogMjBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgetpassverifyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forgetpassverify',
                templateUrl: './forgetpassverify.component.html',
                styleUrls: ['./forgetpassverify.component.css']
            }]
    }], function () { return [{ type: _services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map