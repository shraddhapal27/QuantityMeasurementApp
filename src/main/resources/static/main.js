"use strict";
(self["webpackChunkquantity_measurement_app"] = self["webpackChunkquantity_measurement_app"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule),
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_auth_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/auth/login.component */ 8442);
/* harmony import */ var _components_auth_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/auth/register.component */ 1728);
/* harmony import */ var _components_measurement_quantity_measurement_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/measurement/quantity-measurement.component */ 5411);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);






const routes = [{
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'
}, {
  path: 'login',
  component: _components_auth_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}, {
  path: 'register',
  component: _components_auth_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent
}, {
  path: 'measurement',
  component: _components_measurement_quantity_measurement_component__WEBPACK_IMPORTED_MODULE_2__.QuantityMeasurementComponent
}, {
  path: '**',
  redirectTo: '/login'
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_shared_error_banner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/shared/error-banner.component */ 3555);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




class AppComponent {
  constructor() {
    this.title = 'Quantity Measurement App';
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-error-banner")(1, "router-outlet");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _components_shared_error_banner_component__WEBPACK_IMPORTED_MODULE_0__.ErrorBannerComponent],
      styles: ["[_nghost-%COMP%] {\n    display: block;\n    width: 100%\n}\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUVRO0lBQUEsY0FBbUI7SUFBbkI7QUFBbUIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgOmhvc3Qge1xuICAgICAgICBAYXBwbHkgYmxvY2sgdy1mdWxsO1xuICAgICAgfVxuICAgICJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BRVE7SUFBQSxjQUFtQjtJQUFuQjtBQUFtQjs7QUFJM0Isd1VBQXdVIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICA6aG9zdCB7XG4gICAgICAgIEBhcHBseSBibG9jayB3LWZ1bGw7XG4gICAgICB9XG4gICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 289:
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appConfig: () => (/* binding */ appConfig)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interceptors/auth.interceptor */ 472);
/* harmony import */ var _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interceptors/error.interceptor */ 8036);





const appConfig = {
  providers: [(0,_angular_router__WEBPACK_IMPORTED_MODULE_3__.provideRouter)(_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.routes), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.withInterceptors)([])), {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HTTP_INTERCEPTORS,
    useClass: _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_1__.AuthInterceptor,
    multi: true
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HTTP_INTERCEPTORS,
    useClass: _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_2__.ErrorInterceptor,
    multi: true
  }]
};

/***/ }),

/***/ 8442:
/*!****************************************************!*\
  !*** ./src/app/components/auth/login.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _shared_loading_spinner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/loading-spinner.component */ 4824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ 4796);









function LoginComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please enter a valid email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class LoginComponent {
  constructor(fb, authService, router) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.isLoading = false;
    this.error = null;
    this.loginForm = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6)]]
    });
  }
  ngOnInit() {}
  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.isLoading = true;
    this.error = null;
    const credentials = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    };
    this.authService.login(credentials).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['/measurement']);
      },
      error: err => {
        this.isLoading = false;
        this.error = err.message;
      }
    });
  }
  static {
    this.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 36,
      vars: 7,
      consts: [[1, "min-h-screen", "bg-gradient-to-br", "from-primary", "to-primary-dark", "flex", "items-center", "justify-center", "p-4"], [1, "card", "w-full", "max-w-md", "shadow-xl"], [1, "flex", "justify-center", "mb-4"], ["viewBox", "0 0 100 100", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "w-16", "h-16", "text-primary"], ["x", "20", "y", "15", "width", "35", "height", "55", "rx", "2", "fill", "currentColor", "opacity", "0.3", "stroke", "currentColor", "stroke-width", "2.5"], ["x", "30", "y", "8", "width", "15", "height", "8", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["x1", "50", "y1", "25", "x2", "65", "y2", "20", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round"], ["x", "22", "y", "50", "width", "31", "height", "15", "fill", "currentColor", "opacity", "0.7"], ["x", "18", "y", "72", "width", "39", "height", "8", "rx", "1", "fill", "currentColor", "opacity", "0.4", "stroke", "currentColor", "stroke-width", "2"], ["x1", "48", "y1", "30", "x2", "58", "y2", "30", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["x1", "48", "y1", "38", "x2", "58", "y2", "38", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["x1", "48", "y1", "46", "x2", "58", "y2", "46", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], [1, "text-3xl", "font-bold", "text-center", "mb-2", "text-primary"], [1, "text-xl", "font-semibold", "text-center", "mb-6", "text-text-secondary"], [1, "space-y-4", 3, "ngSubmit", "formGroup"], [1, "block", "text-sm", "font-medium", "mb-2"], ["type", "email", "formControlName", "email", "placeholder", "Enter your email", "required", "", 1, "input-field"], ["class", "error-text", 4, "ngIf"], ["type", "password", "formControlName", "password", "placeholder", "Enter your password", "required", "", 1, "input-field"], [3, "isLoading"], ["type", "submit", 1, "btn", "btn-primary", "w-full", "justify-center", "text-lg", 3, "disabled"], [1, "mt-6", "border-t", "pt-4"], [1, "text-center", "text-text-secondary", "mb-4"], ["routerLink", "/register", 1, "text-primary", "font-semibold", "hover:underline"], [1, "error-text"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "svg", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "rect", 4)(5, "rect", 5)(6, "line", 6)(7, "rect", 7)(8, "rect", 8)(9, "line", 9)(10, "line", 10)(11, "line", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h1", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Quantity Measurement");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "h2", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Login");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "form", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_16_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div")(18, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, LoginComponent_div_21_Template, 2, 0, "div", 17)(22, LoginComponent_div_22_Template, 2, 0, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div")(24, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, LoginComponent_div_27_Template, 2, 0, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "app-loading-spinner", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 21)(32, "p", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " Don't have an account? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " Register here ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          let tmp_1_0;
          let tmp_2_0;
          let tmp_3_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.loginForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.hasError("required")) && ((tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.loginForm.get("email")) == null ? null : tmp_2_0.hasError("email")) && ((tmp_2_0 = ctx.loginForm.get("email")) == null ? null : tmp_2_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.loginForm.get("password")) == null ? null : tmp_3_0.hasError("required")) && ((tmp_3_0 = ctx.loginForm.get("password")) == null ? null : tmp_3_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isLoading", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.isLoading || ctx.loginForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.isLoading ? "Logging in..." : "Login", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _shared_loading_spinner_component__WEBPACK_IMPORTED_MODULE_0__.LoadingSpinnerComponent],
      styles: ["[_nghost-%COMP%] {\n    display: block;\n    width: 100%\n}\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BRVE7SUFBQSxjQUFtQjtJQUFuQjtBQUFtQiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIDpob3N0IHtcbiAgICAgICAgQGFwcGx5IGJsb2NrIHctZnVsbDtcbiAgICAgIH1cbiAgICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hdXRoL2xvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BRVE7SUFBQSxjQUFtQjtJQUFuQjtBQUFtQjs7QUFJM0IsNFVBQTRVIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICA6aG9zdCB7XG4gICAgICAgIEBhcHBseSBibG9jayB3LWZ1bGw7XG4gICAgICB9XG4gICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 1728:
/*!*******************************************************!*\
  !*** ./src/app/components/auth/register.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterComponent: () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _shared_loading_spinner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/loading-spinner.component */ 4824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ 4796);









function RegisterComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please enter a valid email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Password must be at least 6 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please confirm your password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Passwords do not match ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class RegisterComponent {
  constructor(fb, authService, router) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.isLoading = false;
    this.error = null;
    this.registerForm = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(2)]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6)]],
      confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    }, {
      validators: this.passwordMatchValidator
    });
  }
  ngOnInit() {}
  passwordMatchValidator(group) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : {
      passwordMismatch: true
    };
  }
  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    this.isLoading = true;
    this.error = null;
    const userData = {
      name: this.registerForm.get('name')?.value,
      email: this.registerForm.get('email')?.value,
      password: this.registerForm.get('password')?.value,
      confirmPassword: this.registerForm.get('confirmPassword')?.value
    };
    this.authService.register(userData).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['/measurement']);
      },
      error: err => {
        this.isLoading = false;
        this.error = err.message;
      }
    });
  }
  static {
    this.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 48,
      vars: 11,
      consts: [[1, "min-h-screen", "bg-gradient-to-br", "from-primary", "to-primary-dark", "flex", "items-center", "justify-center", "p-4"], [1, "card", "w-full", "max-w-md", "shadow-xl"], [1, "flex", "justify-center", "mb-4"], ["viewBox", "0 0 100 100", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "w-16", "h-16", "text-primary"], ["x", "20", "y", "15", "width", "35", "height", "55", "rx", "2", "fill", "currentColor", "opacity", "0.3", "stroke", "currentColor", "stroke-width", "2.5"], ["x", "30", "y", "8", "width", "15", "height", "8", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["x1", "50", "y1", "25", "x2", "65", "y2", "20", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round"], ["x", "22", "y", "50", "width", "31", "height", "15", "fill", "currentColor", "opacity", "0.7"], ["x", "18", "y", "72", "width", "39", "height", "8", "rx", "1", "fill", "currentColor", "opacity", "0.4", "stroke", "currentColor", "stroke-width", "2"], ["x1", "48", "y1", "30", "x2", "58", "y2", "30", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["x1", "48", "y1", "38", "x2", "58", "y2", "38", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["x1", "48", "y1", "46", "x2", "58", "y2", "46", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], [1, "text-3xl", "font-bold", "text-center", "mb-2", "text-primary"], [1, "text-xl", "font-semibold", "text-center", "mb-6", "text-text-secondary"], [1, "space-y-4", 3, "ngSubmit", "formGroup"], [1, "block", "text-sm", "font-medium", "mb-2"], ["type", "text", "formControlName", "name", "placeholder", "Enter your name", "required", "", 1, "input-field"], ["class", "error-text", 4, "ngIf"], ["type", "email", "formControlName", "email", "placeholder", "Enter your email", "required", "", 1, "input-field"], ["type", "password", "formControlName", "password", "placeholder", "Enter a strong password", "required", "", 1, "input-field"], ["type", "password", "formControlName", "confirmPassword", "placeholder", "Confirm your password", "required", "", 1, "input-field"], [3, "isLoading"], ["type", "submit", 1, "btn", "btn-primary", "w-full", "justify-center", "text-lg", 3, "disabled"], [1, "mt-6", "border-t", "pt-4"], [1, "text-center", "text-text-secondary", "mb-4"], ["routerLink", "/login", 1, "text-primary", "font-semibold", "hover:underline"], [1, "error-text"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "svg", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "rect", 4)(5, "rect", 5)(6, "line", 6)(7, "rect", 7)(8, "rect", 8)(9, "line", 9)(10, "line", 10)(11, "line", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h1", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Quantity Measurement");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "h2", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Register");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "form", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_16_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div")(18, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Full Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, RegisterComponent_div_21_Template, 2, 0, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div")(23, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, RegisterComponent_div_26_Template, 2, 0, "div", 17)(27, RegisterComponent_div_27_Template, 2, 0, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div")(29, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, RegisterComponent_div_32_Template, 2, 0, "div", 17)(33, RegisterComponent_div_33_Template, 2, 0, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div")(35, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Confirm Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, RegisterComponent_div_38_Template, 2, 0, "div", 17)(39, RegisterComponent_div_39_Template, 2, 0, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "app-loading-spinner", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 23)(44, "p", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, " Already have an account? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "a", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, " Login here ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          let tmp_1_0;
          let tmp_2_0;
          let tmp_3_0;
          let tmp_4_0;
          let tmp_5_0;
          let tmp_6_0;
          let tmp_7_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.registerForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.registerForm.get("name")) == null ? null : tmp_1_0.hasError("required")) && ((tmp_1_0 = ctx.registerForm.get("name")) == null ? null : tmp_1_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.registerForm.get("email")) == null ? null : tmp_2_0.hasError("required")) && ((tmp_2_0 = ctx.registerForm.get("email")) == null ? null : tmp_2_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.registerForm.get("email")) == null ? null : tmp_3_0.hasError("email")) && ((tmp_3_0 = ctx.registerForm.get("email")) == null ? null : tmp_3_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.registerForm.get("password")) == null ? null : tmp_4_0.hasError("required")) && ((tmp_4_0 = ctx.registerForm.get("password")) == null ? null : tmp_4_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.registerForm.get("password")) == null ? null : tmp_5_0.hasError("minlength")) && ((tmp_5_0 = ctx.registerForm.get("password")) == null ? null : tmp_5_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx.registerForm.get("confirmPassword")) == null ? null : tmp_6_0.hasError("required")) && ((tmp_6_0 = ctx.registerForm.get("confirmPassword")) == null ? null : tmp_6_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.registerForm.hasError("passwordMismatch") && ((tmp_7_0 = ctx.registerForm.get("confirmPassword")) == null ? null : tmp_7_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isLoading", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.isLoading || ctx.registerForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.isLoading ? "Registering..." : "Register", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _shared_loading_spinner_component__WEBPACK_IMPORTED_MODULE_0__.LoadingSpinnerComponent],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 5411:
/*!**************************************************************************!*\
  !*** ./src/app/components/measurement/quantity-measurement.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuantityMeasurementComponent: () => (/* binding */ QuantityMeasurementComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _shared_loading_spinner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/loading-spinner.component */ 4824);
/* harmony import */ var _pipes_comparison_symbol_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipes/comparison-symbol.pipe */ 4944);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_measurement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/measurement.service */ 7022);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ 4796);











function QuantityMeasurementComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Welcome, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const user_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](user_r1.email);
  }
}
function QuantityMeasurementComponent_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuantityMeasurementComponent_button_21_Template_button_click_0_listener() {
      const type_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.selectType(type_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r3 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("border-2", ctx_r3.state.selectedType === type_r3)("border-primary", ctx_r3.state.selectedType === type_r3)("bg-blue-50", ctx_r3.state.selectedType === type_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.getTypeIcon(type_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r3.formatTypeName(type_r3), " ");
  }
}
function QuantityMeasurementComponent_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuantityMeasurementComponent_button_26_Template_button_click_0_listener() {
      const action_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.selectAction(action_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const action_r6 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("bg-primary", ctx_r3.state.selectedAction === action_r6)("text-white", ctx_r3.state.selectedAction === action_r6)("bg-gray-100", ctx_r3.state.selectedAction !== action_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r3.formatActionName(action_r6), " ");
  }
}
function QuantityMeasurementComponent_div_29_option_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unit_r7 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", unit_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.formatUnitName(unit_r7));
  }
}
function QuantityMeasurementComponent_div_29_option_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unit_r8 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", unit_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.formatUnitName(unit_r8));
  }
}
function QuantityMeasurementComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 32)(1, "div", 33)(2, "div")(3, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div")(7, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "From");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "select", 36)(10, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Select Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, QuantityMeasurementComponent_div_29_option_12_Template, 2, 2, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div")(14, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "select", 39)(17, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Select Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, QuantityMeasurementComponent_div_29_option_19_Template, 2, 2, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.units);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.units);
  }
}
function QuantityMeasurementComponent_div_30_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unit_r9 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", unit_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.formatUnitName(unit_r9));
  }
}
function QuantityMeasurementComponent_div_30_option_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unit_r10 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", unit_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.formatUnitName(unit_r10));
  }
}
function QuantityMeasurementComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 41)(1, "div")(2, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " VALUE 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "select", 36)(6, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Select Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, QuantityMeasurementComponent_div_30_option_8_Template, 2, 2, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div")(10, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " VALUE 2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "select", 39)(14, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Select Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, QuantityMeasurementComponent_div_30_option_16_Template, 2, 2, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.units);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.units);
  }
}
function QuantityMeasurementComponent_div_31_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unit_r11 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", unit_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.formatUnitName(unit_r11));
  }
}
function QuantityMeasurementComponent_div_31_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuantityMeasurementComponent_div_31_button_14_Template_button_click_0_listener() {
      const op_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.selectOperator(op_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const op_r13 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("bg-primary", ctx_r3.state.operator === op_r13)("text-white", ctx_r3.state.operator === op_r13)("bg-gray-100", ctx_r3.state.operator !== op_r13)("border-primary", ctx_r3.state.operator === op_r13)("border-gray-200", ctx_r3.state.operator !== op_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", op_r13, " ");
  }
}
function QuantityMeasurementComponent_div_31_option_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unit_r14 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", unit_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.formatUnitName(unit_r14));
  }
}
function QuantityMeasurementComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 32)(1, "div", 33)(2, "div")(3, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Value 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "select", 36)(7, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Select Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, QuantityMeasurementComponent_div_31_option_9_Template, 2, 2, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 44)(11, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Operator");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, QuantityMeasurementComponent_div_31_button_14_Template, 2, 11, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div")(16, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Value 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "select", 39)(20, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Select Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, QuantityMeasurementComponent_div_31_option_22_Template, 2, 2, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.units);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.operators);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.units);
  }
}
function QuantityMeasurementComponent_div_37_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "comparisonSymbol");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const result_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, result_r15));
  }
}
function QuantityMeasurementComponent_div_37_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const result_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](result_r15);
  }
}
function QuantityMeasurementComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 49)(1, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Result");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, QuantityMeasurementComponent_div_37_span_4_Template, 3, 3, "span", 52)(5, QuantityMeasurementComponent_div_37_span_5_Template, 2, 1, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", ctx_r3.state.selectedAction);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "COMPARISON");
  }
}
function QuantityMeasurementComponent_div_41_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 58)(1, "div", 59)(2, "div")(3, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const record_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](record_r16.action);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](record_r16.expression);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("= ", record_r16.result, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](11, 4, record_r16.timestamp, "short"), " ");
  }
}
function QuantityMeasurementComponent_div_41_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, QuantityMeasurementComponent_div_41_div_3_div_1_Template, 12, 7, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const history_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", history_r17);
  }
}
function QuantityMeasurementComponent_div_41_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No history yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function QuantityMeasurementComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13)(1, "h2", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Calculation History");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, QuantityMeasurementComponent_div_41_div_3_Template, 2, 1, "div", 55)(4, QuantityMeasurementComponent_div_41_ng_template_4_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const history_r17 = ctx.ngIf;
    const noHistory_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", history_r17.length > 0)("ngIfElse", noHistory_r18);
  }
}
class QuantityMeasurementComponent {
  constructor(fb, measurementService, authService, router) {
    this.fb = fb;
    this.measurementService = measurementService;
    this.authService = authService;
    this.router = router;
    this.state$ = this.measurementService.getState$();
    this.result$ = this.measurementService.getResult$();
    this.isLoading$ = this.measurementService.getIsLoading$();
    this.error$ = this.measurementService.getError$();
    this.history$ = this.measurementService.getHistory$();
    this.currentUser$ = this.authService.getCurrentUser$();
    this.state = this.measurementService.state;
    this.units = [];
    this.measurementTypes = ['LENGTH', 'WEIGHT', 'TEMPERATURE', 'VOLUME'];
    this.actionTypes = ['COMPARISON', 'CONVERSION', 'ARITHMETIC'];
    this.operators = ['+', '-', '*', '/'];
    this.measurementForm = this.fb.group({
      value1: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(/^-?\d+\.?\d*$/)]],
      unit1: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      value2: [null],
      unit2: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      resultUnit: [null]
    });
  }
  ngOnInit() {
    this.initializeUnits();
    this.subscribeToStateChanges();
    this.updateFormValidators();
    // Subscribe to errors to see if there are any HTTP errors
    this.error$.subscribe(error => {
      if (error) {
        console.error('Error from service:', error);
      }
    });
    // Subscribe to results to debug
    this.result$.subscribe(result => {
      console.log('Result updated:', result);
    });
  }
  updateFormValidators() {
    const value1Control = this.measurementForm.get('value1');
    const value2Control = this.measurementForm.get('value2');
    if (this.state.selectedAction === 'CONVERSION') {
      // Conversion only needs: value1, unit1, unit2
      value1Control?.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(/^-?\d+\.?\d*$/)]);
      value2Control?.setValidators([]);
      value2Control?.reset();
    } else {
      // Comparison and Arithmetic need: value1, unit1, value2, unit2
      value1Control?.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(/^-?\d+\.?\d*$/)]);
      value2Control?.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(/^-?\d+\.?\d*$/)]);
    }
    value1Control?.updateValueAndValidity({
      emitEvent: false
    });
    value2Control?.updateValueAndValidity({
      emitEvent: false
    });
  }
  initializeUnits() {
    // Units must match backend enum names exactly (case-sensitive)
    const unitsByType = {
      LENGTH: ['METERS', 'CENTIMETERS', 'FEET', 'INCHES', 'YARDS'],
      WEIGHT: ['KILOGRAM', 'GRAM', 'MILLIGRAM', 'POUND', 'TONNE'],
      TEMPERATURE: ['CELSIUS', 'FAHRENHEIT', 'KELVIN'],
      VOLUME: ['LITRE', 'MILLILITRE', 'GALLON']
    };
    this.units = unitsByType[this.state.selectedType] || [];
  }
  subscribeToStateChanges() {
    this.state$.subscribe(state => {
      this.state = state;
      this.initializeUnits();
      this.updateFormValidators();
    });
  }
  selectType(type) {
    this.measurementService.setMeasurementType(type);
    this.measurementForm.reset();
    this.initializeUnits();
  }
  selectAction(action) {
    this.measurementService.setActionType(action);
    this.measurementForm.reset();
    this.updateFormValidators();
  }
  selectOperator(operator) {
    this.measurementService.setOperator(operator);
  }
  performCalculation() {
    const {
      value1,
      unit1,
      value2,
      unit2
    } = this.measurementForm.value;
    // Validate required fields based on action type
    if (!value1 || !unit1 || !unit2) {
      console.error('Missing required fields: value1, unit1, unit2');
      this.measurementService.error$.next('Missing required fields');
      return;
    }
    switch (this.state.selectedAction) {
      case 'CONVERSION':
        console.log('Converting:', value1, unit1, 'to', unit2);
        this.measurementService.convert(parseFloat(value1), unit1, unit2).subscribe({
          next: result => {
            console.log('✓ Conversion successful:', result);
          },
          error: error => {
            console.error('✗ Conversion failed:', error);
          },
          complete: () => {
            console.log('Conversion observable completed');
          }
        });
        break;
      case 'COMPARISON':
        if (!value2) {
          console.error('Missing value2 for comparison');
          this.measurementService.error$.next('Missing value for comparison');
          return;
        }
        console.log('Comparing:', value1, unit1, 'with', value2, unit2);
        this.measurementService.compare(parseFloat(value1), unit1, parseFloat(value2), unit2).subscribe({
          next: result => {
            console.log('✓ Comparison successful:', result);
          },
          error: error => {
            console.error('✗ Comparison failed:', error);
          },
          complete: () => {
            console.log('Comparison observable completed');
          }
        });
        break;
      case 'ARITHMETIC':
        if (!value2 || !this.state.operator) {
          console.error('Missing value2 or operator for arithmetic');
          this.measurementService.error$.next('Missing value or operator');
          return;
        }
        console.log('Arithmetic:', value1, unit1, this.state.operator, value2, unit2);
        this.measurementService.arithmetic(parseFloat(value1), unit1, parseFloat(value2), unit2, this.state.operator).subscribe({
          next: result => {
            console.log('✓ Arithmetic successful:', result);
          },
          error: error => {
            console.error('✗ Arithmetic failed:', error);
          },
          complete: () => {
            console.log('Arithmetic observable completed');
          }
        });
        break;
      default:
        console.error('Unknown action:', this.state.selectedAction);
    }
  }
  onSubmit() {
    console.log('Form submitted!');
    console.log('Form value:', this.measurementForm.value);
    console.log('Form valid:', this.measurementForm.valid);
    console.log('Selected action:', this.state.selectedAction);
    this.performCalculation();
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  formatTypeName(type) {
    return type.charAt(0) + type.slice(1).toLowerCase();
  }
  formatActionName(action) {
    return action.charAt(0) + action.slice(1).toLowerCase();
  }
  getTypeIcon(type) {
    const icons = {
      LENGTH: '📏',
      WEIGHT: '⚖️',
      TEMPERATURE: '🌡️',
      VOLUME: '🧃'
    };
    return icons[type] || '';
  }
  formatUnitName(unit) {
    // Convert 'METERS' to 'Meters', 'FAHRENHEIT' to 'Fahrenheit', etc.
    return unit.charAt(0) + unit.slice(1).toLowerCase();
  }
  static {
    this.ɵfac = function QuantityMeasurementComponent_Factory(t) {
      return new (t || QuantityMeasurementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_measurement_service__WEBPACK_IMPORTED_MODULE_2__.MeasurementService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: QuantityMeasurementComponent,
      selectors: [["app-quantity-measurement"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 43,
      vars: 24,
      consts: [["noHistory", ""], [1, "min-h-screen", "bg-surface"], [1, "bg-primary", "text-white", "py-4", "px-6", "shadow-lg"], [1, "max-w-6xl", "mx-auto", "flex", "justify-between", "items-center"], [1, "text-2xl", "font-bold"], [1, "flex", "items-center", "gap-6"], ["class", "text-sm", 4, "ngIf"], [1, "px-4", "py-2", "bg-red-500", "hover:bg-red-600", "rounded-lg", "font-semibold", "transition", 3, "click"], [1, "py-8"], [1, "max-w-6xl", "mx-auto", "px-4"], [1, "bg-gradient-to-r", "from-blue-500", "to-blue-600", "text-white", "py-6", "px-6", "rounded-lg", "mb-8", "shadow-lg"], [1, "text-4xl", "font-bold", "text-center"], [1, "space-y-8"], [1, "card"], [1, "text-sm", "font-bold", "text-text-secondary", "mb-4", "uppercase"], [1, "grid", "grid-cols-2", "md:grid-cols-4", "gap-4"], ["class", "p-6 rounded-lg border-2 border-gray-200 hover:border-primary transition-all text-center font-semibold", 3, "border-2", "border-primary", "bg-blue-50", "click", 4, "ngFor", "ngForOf"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-4"], ["class", "px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-md", 3, "bg-primary", "text-white", "bg-gray-100", "click", 4, "ngFor", "ngForOf"], [3, "ngSubmit", "formGroup"], ["class", "space-y-6", 4, "ngIf"], ["class", "grid grid-cols-1 md:grid-cols-2 gap-8", 4, "ngIf"], [1, "mt-8", "flex", "justify-center"], ["type", "submit", 1, "px-8", "py-3", "bg-primary", "text-white", "font-bold", "text-lg", "rounded-lg", "hover:bg-blue-700", "disabled:bg-gray-400", "disabled:cursor-not-allowed", "transition", 3, "disabled"], ["class", "mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-primary", 4, "ngIf"], [3, "isLoading"], ["class", "card", 4, "ngIf"], [1, "text-sm"], [1, "font-semibold"], [1, "p-6", "rounded-lg", "border-2", "border-gray-200", "hover:border-primary", "transition-all", "text-center", "font-semibold", 3, "click"], [1, "text-4xl", "mb-2"], [1, "px-6", "py-3", "rounded-lg", "font-semibold", "transition-all", "hover:shadow-md", 3, "click"], [1, "space-y-6"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-4", "items-end"], [1, "block", "text-sm", "font-bold", "text-text-secondary", "mb-4", "uppercase"], ["type", "number", "formControlName", "value1", "placeholder", "0", "step", "any", 1, "input-field", "text-2xl", "font-bold"], ["formControlName", "unit1", 1, "select-field"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "unit2", 1, "select-field"], [3, "value"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-8"], ["type", "number", "formControlName", "value1", "placeholder", "0", "step", "any", 1, "input-field", "text-2xl", "font-bold", "mb-4"], ["type", "number", "formControlName", "value2", "placeholder", "0", "step", "any", 1, "input-field", "text-2xl", "font-bold", "mb-4"], [1, "flex", "flex-col", "items-center", "gap-2"], [1, "text-sm", "font-bold", "text-text-secondary", "uppercase"], [1, "flex", "gap-2", "flex-wrap", "justify-center"], ["type", "button", "class", "px-4 py-2 rounded-lg font-bold text-lg border-2", 3, "bg-primary", "text-white", "bg-gray-100", "border-primary", "border-gray-200", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "px-4", "py-2", "rounded-lg", "font-bold", "text-lg", "border-2", 3, "click"], [1, "mt-8", "p-6", "bg-blue-50", "rounded-lg", "border-l-4", "border-primary"], [1, "text-sm", "font-bold", "text-text-secondary", "mb-2", "uppercase"], [1, "text-4xl", "font-bold", "text-primary", "mb-4", 3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "text-xl", "font-bold", "mb-4"], ["class", "space-y-2 max-h-96 overflow-y-auto", 4, "ngIf", "ngIfElse"], [1, "space-y-2", "max-h-96", "overflow-y-auto"], ["class", "p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow", 4, "ngFor", "ngForOf"], [1, "p-4", "bg-gray-50", "rounded-lg", "border", "border-gray-200", "hover:shadow-md", "transition-shadow"], [1, "flex", "justify-between", "items-start"], [1, "font-semibold", "text-text-primary"], [1, "text-sm", "text-text-secondary"], [1, "text-lg", "font-bold", "text-primary", "mt-2"], [1, "text-xs", "text-text-secondary"], [1, "text-center", "text-text-secondary", "py-8"]],
      template: function QuantityMeasurementComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "nav", 2)(2, "div", 3)(3, "div")(4, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Quantity Measurement");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, QuantityMeasurementComponent_span_7_Template, 4, 1, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuantityMeasurementComponent_Template_button_click_9_listener() {
            return ctx.logout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " Logout ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "h1", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Welcome To Quantity Measurement");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 12)(17, "div", 13)(18, "h2", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Choose Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, QuantityMeasurementComponent_button_21_Template, 4, 8, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 13)(23, "h2", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Choose Action");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, QuantityMeasurementComponent_button_26_Template, 2, 7, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 13)(28, "form", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function QuantityMeasurementComponent_Template_form_ngSubmit_28_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, QuantityMeasurementComponent_div_29_Template, 20, 2, "div", 20)(30, QuantityMeasurementComponent_div_30_Template, 17, 2, "div", 21)(31, QuantityMeasurementComponent_div_31_Template, 23, 3, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 22)(33, "button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](34, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](36, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, QuantityMeasurementComponent_div_37_Template, 6, 2, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](38, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "app-loading-spinner", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](40, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, QuantityMeasurementComponent_div_41_Template, 6, 2, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](42, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          let tmp_10_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 12, ctx.currentUser$));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.measurementTypes);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.actionTypes);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.measurementForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.state.selectedAction === "CONVERSION");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.state.selectedAction === "COMPARISON");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.state.selectedAction === "ARITHMETIC");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.measurementForm.invalid || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](34, 14, ctx.isLoading$));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](36, 16, ctx.isLoading$) ? "Calculating..." : "Calculate", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](38, 18, ctx.result$));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isLoading", (tmp_10_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](40, 20, ctx.isLoading$)) !== null && tmp_10_0 !== undefined ? tmp_10_0 : false);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](42, 22, ctx.history$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitchDefault, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _shared_loading_spinner_component__WEBPACK_IMPORTED_MODULE_0__.LoadingSpinnerComponent, _pipes_comparison_symbol_pipe__WEBPACK_IMPORTED_MODULE_1__.ComparisonSymbolPipe],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 3555:
/*!*************************************************************!*\
  !*** ./src/app/components/shared/error-banner.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorBannerComponent: () => (/* binding */ ErrorBannerComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_measurement_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/measurement.service */ 7022);






function ErrorBannerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ErrorBannerComponent_div_0_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " \u2715 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const error_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](error_r3);
  }
}
class ErrorBannerComponent {
  constructor(measurementService) {
    this.measurementService = measurementService;
    this.error$ = this.measurementService.getError$();
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  }
  ngOnInit() {
    this.error$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe(error => {
      if (error) {
        setTimeout(() => {
          // Auto-dismiss after 5 seconds
        }, 5000);
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  dismiss() {
    // Error will be cleared by service
  }
  static {
    this.ɵfac = function ErrorBannerComponent_Factory(t) {
      return new (t || ErrorBannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_measurement_service__WEBPACK_IMPORTED_MODULE_0__.MeasurementService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ErrorBannerComponent,
      selectors: [["app-error-banner"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [["class", "fixed top-4 right-4 bg-red-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-4 animate-in slide-in-from-top", 4, "ngIf"], [1, "fixed", "top-4", "right-4", "bg-red-500", "text-white", "px-6", "py-4", "rounded-lg", "shadow-lg", "flex", "items-center", "gap-4", "animate-in", "slide-in-from-top"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-5", "h-5", "flex-shrink-0"], ["fill-rule", "evenodd", "d", "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", "clip-rule", "evenodd"], [1, "ml-2", "text-white", "hover:text-red-200", 3, "click"]],
      template: function ErrorBannerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ErrorBannerComponent_div_0_Template, 7, 1, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.error$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 4824:
/*!****************************************************************!*\
  !*** ./src/app/components/shared/loading-spinner.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingSpinnerComponent: () => (/* binding */ LoadingSpinnerComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);



function LoadingSpinnerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class LoadingSpinnerComponent {
  constructor() {
    this.isLoading = false;
  }
  static {
    this.ɵfac = function LoadingSpinnerComponent_Factory(t) {
      return new (t || LoadingSpinnerComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoadingSpinnerComponent,
      selectors: [["app-loading-spinner"]],
      inputs: {
        isLoading: "isLoading"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 1,
      consts: [["class", "flex items-center justify-center p-4", 4, "ngIf"], [1, "flex", "items-center", "justify-center", "p-4"], [1, "animate-spin", "rounded-full", "h-10", "w-10", "border-b-2", "border-primary"]],
      template: function LoadingSpinnerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoadingSpinnerComponent_div_0_Template, 2, 0, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 472:
/*!**************************************************!*\
  !*** ./src/app/interceptors/auth.interceptor.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthInterceptor: () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 4334);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 4796);





class AuthInterceptor {
  constructor(authService) {
    this.authService = authService;
    this.isRefreshing = false;
    this.refreshTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
  }
  intercept(request, next) {
    const token = this.authService.getToken();
    if (token) {
      request = this.addToken(request, token);
    }
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpErrorResponse && error.status === 401 && !this.isRefreshing) {
        this.isRefreshing = true;
        this.refreshTokenSubject.next(null);
        return this.authService.refreshToken().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(response => {
          this.isRefreshing = false;
          const newToken = response.data.token;
          this.refreshTokenSubject.next(newToken);
          return next.handle(this.addToken(request, newToken));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => {
          this.isRefreshing = false;
          this.authService.logout();
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => err);
        }));
      } else if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpErrorResponse && error.status === 401) {
        return this.refreshTokenSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(token => token != null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(token => {
          return next.handle(this.addToken(request, token));
        }));
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => error);
    }));
  }
  addToken(request, token) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  static {
    this.ɵfac = function AuthInterceptor_Factory(t) {
      return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
      token: AuthInterceptor,
      factory: AuthInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 8036:
/*!***************************************************!*\
  !*** ./src/app/interceptors/error.interceptor.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorInterceptor: () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_measurement_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/measurement.service */ 7022);




class ErrorInterceptor {
  constructor(measurementService) {
    this.measurementService = measurementService;
  }
  intercept(request, next) {
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      let errorMessage = 'An unexpected error occurred';
      if (error.error instanceof ErrorEvent) {
        // Client-side error
        errorMessage = error.error.message;
      } else {
        // Server-side error
        if (error.error && error.error.error) {
          errorMessage = error.error.error.message;
        } else if (error.status === 0) {
          errorMessage = 'Cannot connect to server. Make sure the backend is running on http://localhost:8080';
        } else if (error.status === 404) {
          errorMessage = 'Resource not found';
        } else if (error.status === 400) {
          errorMessage = 'Bad request. Please check your input';
        } else if (error.status === 401) {
          errorMessage = 'Unauthorized. Please login again';
        } else if (error.status === 500) {
          errorMessage = 'Server error. Please try again later';
        }
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => new Error(errorMessage));
    }));
  }
  static {
    this.ɵfac = function ErrorInterceptor_Factory(t) {
      return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_measurement_service__WEBPACK_IMPORTED_MODULE_0__.MeasurementService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: ErrorInterceptor,
      factory: ErrorInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 4944:
/*!*************************************************!*\
  !*** ./src/app/pipes/comparison-symbol.pipe.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComparisonSymbolPipe: () => (/* binding */ ComparisonSymbolPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class ComparisonSymbolPipe {
  transform(result) {
    if (!result) {
      return '—';
    }
    // Return the full result string (no longer extract just the symbol)
    return result;
  }
  static {
    this.ɵfac = function ComparisonSymbolPipe_Factory(t) {
      return new (t || ComparisonSymbolPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "comparisonSymbol",
      type: ComparisonSymbolPipe,
      pure: true,
      standalone: true
    });
  }
}

/***/ }),

/***/ 4796:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 6443);





class AuthService {
  constructor(http) {
    this.http = http;
    this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.authUrl;
    this.authToken$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this.getStoredToken());
    this.currentUser$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this.getStoredUser());
    this.isAuthenticatedSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(!!this.getStoredToken());
    this.loadAuthState();
  }
  loadAuthState() {
    const token = this.getStoredToken();
    const user = this.getStoredUser();
    if (token && user) {
      this.authToken$.next(token);
      this.currentUser$.next(user);
      this.isAuthenticatedSubject$.next(true);
    }
  }
  getStoredToken() {
    return localStorage.getItem('auth_token');
  }
  getStoredUser() {
    const user = localStorage.getItem('current_user');
    return user ? JSON.parse(user) : null;
  }
  getToken$() {
    return this.authToken$.asObservable();
  }
  getCurrentUser$() {
    return this.currentUser$.asObservable();
  }
  isAuthenticated$() {
    return this.isAuthenticatedSubject$.asObservable();
  }
  getToken() {
    return this.authToken$.value;
  }
  getCurrentUser() {
    return this.currentUser$.value;
  }
  isAuthenticated() {
    return this.isAuthenticatedSubject$.value;
  }
  login(credentials) {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(response => {
      if (response.success && response.data) {
        const authData = response.data;
        localStorage.setItem('auth_token', authData.token);
        localStorage.setItem('current_user', JSON.stringify(authData.user));
        this.authToken$.next(authData.token);
        this.currentUser$.next(authData.user);
        this.isAuthenticatedSubject$.next(true);
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
  }
  register(userData) {
    return this.http.post(`${this.apiUrl}/register`, userData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(response => {
      if (response.success && response.data) {
        const authData = response.data;
        localStorage.setItem('auth_token', authData.token);
        localStorage.setItem('current_user', JSON.stringify(authData.user));
        this.authToken$.next(authData.token);
        this.currentUser$.next(authData.user);
        this.isAuthenticatedSubject$.next(true);
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
  }
  refreshToken() {
    const token = this.getToken();
    if (!token) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => new Error('No token available'));
    }
    const refreshRequest = {
      token
    };
    return this.http.post(`${this.apiUrl}/refresh`, refreshRequest).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(response => {
      if (response.success && response.data) {
        const authData = response.data;
        localStorage.setItem('auth_token', authData.token);
        this.authToken$.next(authData.token);
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
  }
  logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('current_user');
    this.authToken$.next(null);
    this.currentUser$.next(null);
    this.isAuthenticatedSubject$.next(false);
  }
  handleError(error) {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      if (error.error && error.error.error) {
        errorMessage = error.error.error.message || errorMessage;
      } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => new Error(errorMessage));
  }
  static {
    this.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 7022:
/*!*************************************************!*\
  !*** ./src/app/services/measurement.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MeasurementService: () => (/* binding */ MeasurementService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 6443);





class MeasurementService {
  constructor(http) {
    this.http = http;
    this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    this.initialState = {
      selectedType: 'LENGTH',
      selectedAction: 'COMPARISON',
      value1: null,
      unit1: null,
      value2: null,
      unit2: null,
      operator: null,
      result: null,
      isLoading: false,
      error: null
    };
    this.state$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this.initialState);
    this.result$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.error$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.isLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
    this.history$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
    this.loadHistory();
  }
  get state() {
    return this.state$.value;
  }
  getState$() {
    return this.state$.asObservable();
  }
  getResult$() {
    return this.result$.asObservable();
  }
  getError$() {
    return this.error$.asObservable();
  }
  getIsLoading$() {
    return this.isLoading$.asObservable();
  }
  getHistory$() {
    return this.history$.asObservable();
  }
  setMeasurementType(type) {
    const currentState = this.state$.value;
    this.state$.next({
      ...currentState,
      selectedType: type
    });
    this.result$.next(null);
    this.error$.next(null);
  }
  setActionType(action) {
    const currentState = this.state$.value;
    this.state$.next({
      ...currentState,
      selectedAction: action
    });
    this.result$.next(null);
    this.error$.next(null);
  }
  setValue1(value) {
    const currentState = this.state$.value;
    this.state$.next({
      ...currentState,
      value1: value
    });
  }
  setUnit1(unit) {
    const currentState = this.state$.value;
    this.state$.next({
      ...currentState,
      unit1: unit
    });
  }
  setValue2(value) {
    const currentState = this.state$.value;
    this.state$.next({
      ...currentState,
      value2: value
    });
  }
  setUnit2(unit) {
    const currentState = this.state$.value;
    this.state$.next({
      ...currentState,
      unit2: unit
    });
  }
  setOperator(operator) {
    const currentState = this.state$.value;
    this.state$.next({
      ...currentState,
      operator
    });
  }
  // Comparison
  compare(value1, unit1, value2, unit2) {
    this.isLoading$.next(true);
    const request = {
      thisQuantityDTO: {
        value: value1,
        unit: unit1
      },
      thatQuantityDTO: {
        value: value2,
        unit: unit2
      }
    };
    return this.http.post(`${this.apiUrl}/quantities/compare`, request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(response => {
      console.log('Compare response:', response);
      this.isLoading$.next(false);
      if (response) {
        const comparisonSymbol = response.resultString === 'true' ? '=' : '!=';
        const expression = `from ${value1} ${unit1} to ${value2} ${unit2}`;
        this.result$.next(comparisonSymbol);
        this.saveToHistory({
          type: this.state.selectedType,
          action: 'COMPARISON',
          expression: expression,
          result: comparisonSymbol
        });
      } else {
        const errorMsg = 'Comparison failed';
        console.error('Comparison error:', errorMsg);
        this.error$.next(errorMsg);
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error('Compare HTTP error:', error);
      this.isLoading$.next(false);
      this.handleError(error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => error);
    }));
  }
  // Conversion
  convert(value, fromUnit, toUnit) {
    console.log('Converting:', value, fromUnit, toUnit);
    this.isLoading$.next(true);
    const request = {
      thisQuantityDTO: {
        value,
        unit: fromUnit
      },
      thatQuantityDTO: {
        value: 0,
        unit: toUnit
      }
    };
    return this.http.post(`${this.apiUrl}/quantities/convert`, request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(response => {
      console.log('Convert response:', response);
      this.isLoading$.next(false);
      if (response) {
        const resultValue = response.resultValue;
        const formattedValue = this.formatNumber(resultValue);
        const result = `${formattedValue} ${toUnit}`;
        this.result$.next(result);
        this.saveToHistory({
          type: this.state.selectedType,
          action: 'CONVERSION',
          expression: `${value} ${fromUnit} = X ${toUnit}`,
          result: result
        });
      } else {
        const errorMsg = 'Conversion failed';
        console.error('Conversion error:', errorMsg);
        this.error$.next(errorMsg);
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error('Convert HTTP error:', error);
      this.isLoading$.next(false);
      this.handleError(error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => error);
    }));
  }
  // Arithmetic
  arithmetic(value1, unit1, value2, unit2, operator) {
    console.log('Arithmetic:', value1, unit1, operator, value2, unit2);
    this.isLoading$.next(true);
    const endpoint = operator === '+' ? 'add' : operator === '-' ? 'subtract' : operator === '/' ? 'divide' : 'subtract';
    const request = {
      thisQuantityDTO: {
        value: value1,
        unit: unit1
      },
      thatQuantityDTO: {
        value: value2,
        unit: unit2
      }
    };
    return this.http.post(`${this.apiUrl}/quantities/${endpoint}`, request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(response => {
      console.log('Arithmetic response:', response);
      this.isLoading$.next(false);
      if (response) {
        const resultValue = response.resultValue;
        const resultUnit = response.resultUnit || unit1;
        const formattedValue = this.formatNumber(resultValue);
        const result = `${formattedValue} ${resultUnit}`;
        this.result$.next(result);
        this.saveToHistory({
          type: this.state.selectedType,
          action: 'ARITHMETIC',
          expression: `${value1} ${unit1} ${operator} ${value2} ${unit2}`,
          result: result
        });
      } else {
        const errorMsg = 'Arithmetic failed';
        console.error('Arithmetic error:', errorMsg);
        this.error$.next(errorMsg);
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error('Arithmetic HTTP error:', error);
      this.isLoading$.next(false);
      this.handleError(error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => error);
    }));
  }
  saveToHistory(record) {
    const newRecord = {
      ...record,
      timestamp: new Date().toISOString()
    };
    const history = this.history$.value;
    this.history$.next([newRecord, ...history]);
  }
  formatNumber(value) {
    // Round to 2 decimal places
    const rounded = Math.round(value * 100) / 100;
    // If it's a whole number, return as integer
    if (rounded % 1 === 0) {
      return rounded.toString();
    }
    // Otherwise return with up to 2 decimal places, removing trailing zeros
    return parseFloat(rounded.toFixed(2)).toString();
  }
  loadHistory() {
    // The backend currently exposes history endpoints by operation/type only.
    // For the frontend, keep local session history until a general history API is added.
    this.history$.next([]);
  }
  clearHistory() {
    this.history$.next([]);
  }
  reset() {
    this.state$.next(this.initialState);
    this.result$.next(null);
    this.error$.next(null);
    this.isLoading$.next(false);
  }
  handleError(error) {
    let message = 'An error occurred';
    if (error.error && error.error.error) {
      message = error.error.error.message;
    } else if (error.message) {
      message = error.message;
    }
    this.error$.next(message);
  }
  static {
    this.ɵfac = function MeasurementService_Factory(t) {
      return new (t || MeasurementService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      token: MeasurementService,
      factory: MeasurementService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api/v1',
  authUrl: 'http://localhost:8080/auth'
};

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.config */ 289);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.component */ 92);



(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _app_app_config__WEBPACK_IMPORTED_MODULE_0__.appConfig).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map