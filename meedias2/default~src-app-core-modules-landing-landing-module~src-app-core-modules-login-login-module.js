(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~src-app-core-modules-landing-landing-module~src-app-core-modules-login-login-module"],{

/***/ "./src/app/core/modules/login/login.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/modules/login/login.component.ts ***!
  \*******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_logging_logging_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/logging/logging.service */ "./src/app/core/services/logging/logging.service.ts");
/* harmony import */ var _services_environment_environment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/environment/environment.service */ "./src/app/core/services/environment/environment.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services */ "./src/app/core/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(authentication, formBuilder, router, log, env) {
        this.authentication = authentication;
        this.formBuilder = formBuilder;
        this.router = router;
        this.log = log;
        this.env = env;
        console.log("loginComponent");
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.submitted = false;
        this.loginForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.submitted = true;
        if (!this.loginForm.valid) {
            return;
        }
        var username = this.loginForm.get('username').value;
        var password = this.loginForm.get('password').value;
        this.authentication.login(username, "", password).then(function (authdata) {
            console.log(authdata);
            _this.authentication.authenticate(authdata).then(function (data) {
                _this.submitted = false;
                _this.router.navigate(['/redactor/dashboard']);
            }, function (error) {
                //todo errorhandler
                _this.submitted = false;
                console.log("error:" + error);
            });
        }, function (error) {
            //todo errorhandler
            _this.submitted = false;
            console.log("error:" + error);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./login.template.html */ "./src/app/core/modules/login/login.template.html"),
            styles: [__webpack_require__(/*! ./login.styles.scss */ "./src/app/core/modules/login/login.styles.scss")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_logging_logging_service__WEBPACK_IMPORTED_MODULE_1__["LoggingService"],
            _services_environment_environment_service__WEBPACK_IMPORTED_MODULE_2__["EnvironmentService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/core/modules/login/login.routing.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/modules/login/login.routing.ts ***!
  \*****************************************************/
/*! exports provided: login_routes, routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login_routes", function() { return login_routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./src/app/core/modules/login/login.component.ts");
/* harmony import */ var _login_twofactor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.twofactor.component */ "./src/app/core/modules/login/login.twofactor.component.ts");


/**
 *
 *
 *
 */
// Actual moudule routes
var login_routes = [
    {
        path: 'login',
        loadChildren: 'src/app/core/modules/login/login.module#LoginModule'
    }
];
// Required for lazy-loading
var routes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]
    },
    {
        path: 'two-factor',
        component: _login_twofactor_component__WEBPACK_IMPORTED_MODULE_1__["TwoFactorComponent"]
    },
];


/***/ }),

/***/ "./src/app/core/modules/login/login.styles.scss":
/*!******************************************************!*\
  !*** ./src/app/core/modules/login/login.styles.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-backdrop {\n  background: linear-gradient(-45deg, darkcyan, #b5e9f5, #22afd4);\n  background-size: 400% 400%;\n  -webkit-animation: Gradient 30s ease infinite;\n  animation: Gradient 30s ease infinite; }\n\n@-webkit-keyframes Gradient {\n  0% {\n    background-position: 0% 50%; }\n  50% {\n    background-position: 100% 50%; }\n  100% {\n    background-position: 0% 50%; } }\n\n@keyframes Gradient {\n  0% {\n    background-position: 0% 50%; }\n  50% {\n    background-position: 100% 50%; }\n  100% {\n    background-position: 0% 50%; } }\n\n.login-card {\n  border-radius: 4px;\n  min-height: 80%;\n  min-width: 80%;\n  background-color: #ffffffe6;\n  border-radius: 4px;\n  font-family: 'Nunito', sans-serif; }\n\n.login-card-side {\n  background-color: white;\n  border-bottom-left-radius: 4px;\n  border-top-left-radius: 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3JlbWVkaWFzL21lZWRpYXNfZnJvbnRlbmQvc3JjL2FwcC9jb3JlL21vZHVsZXMvbG9naW4vbG9naW4uc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxnRUFBOEQ7RUFDOUQsMkJBQTBCO0VBQzFCLDhDQUE2QztFQUU3QyxzQ0FBcUMsRUFzQ3JDOztBQW5DRztFQUNJO0lBQ0ksNEJBQ0osRUFBQTtFQUNBO0lBQ0ksOEJBQ0osRUFBQTtFQUNBO0lBQ0ksNEJBQ0osRUFBQSxFQUFBOztBQWVKO0VBQ0k7SUFDSSw0QkFDSixFQUFBO0VBQ0E7SUFDSSw4QkFDSixFQUFBO0VBQ0E7SUFDSSw0QkFDSixFQUFBLEVBQUE7O0FBUVI7RUFDSSxtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixlQUFjO0VBQ2QsNEJBQTJCO0VBQzNCLG1CQUFrQjtFQUNsQixrQ0FBaUMsRUFDcEM7O0FBRUQ7RUFDSSx3QkFBc0I7RUFDdEIsK0JBQThCO0VBQzlCLDRCQUEyQixFQUM5QiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbW9kdWxlcy9sb2dpbi9sb2dpbi5zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1iYWNrZHJvcCB7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsZGFya2N5YW4sICNiNWU5ZjUsICMyMmFmZDQpO1xuXHRiYWNrZ3JvdW5kLXNpemU6IDQwMCUgNDAwJTtcblx0LXdlYmtpdC1hbmltYXRpb246IEdyYWRpZW50IDMwcyBlYXNlIGluZmluaXRlO1xuXHQtbW96LWFuaW1hdGlvbjogR3JhZGllbnQgMzBzIGVhc2UgaW5maW5pdGU7XG5cdGFuaW1hdGlvbjogR3JhZGllbnQgMzBzIGVhc2UgaW5maW5pdGU7XG5cblxuICAgIEAtd2Via2l0LWtleWZyYW1lcyBHcmFkaWVudCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJVxuICAgICAgICB9XG4gICAgICAgIDUwJSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJVxuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBALW1vei1rZXlmcmFtZXMgR3JhZGllbnQge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCVcbiAgICAgICAgfVxuICAgICAgICA1MCUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCVcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBHcmFkaWVudCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJVxuICAgICAgICB9XG4gICAgICAgIDUwJSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJVxuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG5cblxuLmxvZ2luLWNhcmR7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1pbi1oZWlnaHQ6IDgwJTtcbiAgICBtaW4td2lkdGg6IDgwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmZTY7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcbn1cblxuLmxvZ2luLWNhcmQtc2lkZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/core/modules/login/login.template.html":
/*!********************************************************!*\
  !*** ./src/app/core/modules/login/login.template.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex align-items-center justify-content-center h-100 login-backdrop\">\n    <div class=\"align-self-center login-card d-flex\">\n        <div class=\"container\">\n            <div class=\"row h-100\">\n                <div class=\"col-md-8 login-card-side\">\n\n                </div>\n                <div class=\"col-md-4\" *ngIf=\"!submitted\">\n                    <h3 class=\"pl-3 mt-5\">\n                        Login\n                    </h3>\n                    <form  [formGroup]=\"loginForm\" (ngSubmit)=\"login()\" class=\"p-3\">\n                        <div class=\"form-group\">\n                            <label for=\"login-form-username\">Username</label>\n                            <input type=\"text\" class=\"form-control\" \n                                formControlName=\"username\" required\n                                name=\"login-form-username\" id=\"login-form-username\"\n                                aria-describedby=\"usernameHelp\"\n                                placeholder=\"Enter username\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"login-form-password\">Password</label>\n                            <input  type=\"password\" class=\"form-control\"\n                                name=\"login-form-password\" \n                                formControlName=\"password\" required\n                                id=\"login-form-password\" \n                                placeholder=\"Password\">\n                        </div>\n                        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n                    </form>\n                </div>\n                <div class=\"col-md-4\" *ngIf=\"submitted\">\n                    <meedias-spinner></meedias-spinner>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/core/modules/login/login.twofactor.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/modules/login/login.twofactor.component.ts ***!
  \*****************************************************************/
/*! exports provided: TwoFactorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwoFactorComponent", function() { return TwoFactorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TwoFactorComponent = /** @class */ (function () {
    function TwoFactorComponent() {
        console.log("TwoFactor");
    }
    TwoFactorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./login.template.html */ "./src/app/core/modules/login/login.template.html"),
        }),
        __metadata("design:paramtypes", [])
    ], TwoFactorComponent);
    return TwoFactorComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~src-app-core-modules-landing-landing-module~src-app-core-modules-login-login-module.js.map