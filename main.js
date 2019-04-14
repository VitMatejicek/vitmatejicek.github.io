(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"src/app/common/modules/articles/articles.module": [
		"./src/app/common/modules/articles/articles.module.ts",
		"default~src-app-common-modules-articles-articles-module~src-app-core-modules-landing-landing-module~~27b9eab4",
		"default~src-app-common-modules-articles-articles-module~src-app-core-modules-landing-landing-module",
		"default~src-app-common-modules-articles-articles-module~src-app-core-modules-redactor-redactor-modul~816239ca",
		"common",
		"src-app-common-modules-articles-articles-module"
	],
	"src/app/common/modules/categories/categories.module": [
		"./src/app/common/modules/categories/categories.module.ts",
		"default~src-app-common-modules-categories-categories-module~src-app-core-modules-redactor-redactor-m~7be5f08e",
		"common",
		"src-app-common-modules-categories-categories-module"
	],
	"src/app/common/modules/dashboard/dashboard.module": [
		"./src/app/common/modules/dashboard/dashboard.module.ts",
		"common",
		"src-app-common-modules-dashboard-dashboard-module"
	],
	"src/app/common/modules/pages/pages.module": [
		"./src/app/common/modules/pages/pages.module.ts",
		"default~src-app-common-modules-pages-pages-module~src-app-core-modules-redactor-redactor-module",
		"common",
		"src-app-common-modules-pages-pages-module"
	],
	"src/app/common/modules/tags/tags.module": [
		"./src/app/common/modules/tags/tags.module.ts",
		"common",
		"src-app-common-modules-tags-tags-module"
	],
	"src/app/common/modules/users/users.module": [
		"./src/app/common/modules/users/users.module.ts",
		"default~src-app-common-modules-users-users-module~src-app-core-modules-redactor-redactor-module",
		"common",
		"src-app-common-modules-users-users-module"
	],
	"src/app/core/modules/landing/landing.module": [
		"./src/app/core/modules/landing/landing.module.ts",
		"default~src-app-common-modules-articles-articles-module~src-app-core-modules-landing-landing-module~~27b9eab4",
		"default~src-app-common-modules-articles-articles-module~src-app-core-modules-landing-landing-module",
		"default~src-app-core-modules-landing-landing-module~src-app-core-modules-redactor-redactor-module",
		"default~src-app-core-modules-landing-landing-module~src-app-core-modules-login-login-module",
		"common",
		"src-app-core-modules-landing-landing-module"
	],
	"src/app/core/modules/login/login.module": [
		"./src/app/core/modules/login/login.module.ts",
		"default~src-app-core-modules-landing-landing-module~src-app-core-modules-login-login-module",
		"common",
		"src-app-core-modules-login-login-module"
	],
	"src/app/core/modules/redactor/redactor.module": [
		"./src/app/core/modules/redactor/redactor.module.ts",
		"default~src-app-common-modules-articles-articles-module~src-app-core-modules-landing-landing-module~~27b9eab4",
		"default~src-app-core-modules-landing-landing-module~src-app-core-modules-redactor-redactor-module",
		"default~src-app-common-modules-articles-articles-module~src-app-core-modules-redactor-redactor-modul~816239ca",
		"default~src-app-common-modules-users-users-module~src-app-core-modules-redactor-redactor-module",
		"default~src-app-common-modules-categories-categories-module~src-app-core-modules-redactor-redactor-m~7be5f08e",
		"default~src-app-common-modules-pages-pages-module~src-app-core-modules-redactor-redactor-module",
		"common",
		"src-app-core-modules-redactor-redactor-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(lifeCycle, authentication, router) {
        //dev only
        // authentication.login("vyspdemo","","demo").then((authdata) => {
        //  	authentication.authenticate(authdata).then((data) => {
        //  		console.log("Data: " + data);
        //  		console.log(authentication.checkSession());
        //  	});
        // });
        this.lifeCycle = lifeCycle;
        this.authentication = authentication;
        this.router = router;
        this.title = 'meedias';
        // style loader something like this i guess....
        //https://medium.com/@tomastrajan/how-to-style-angular-application-loading-with-angular-cli-like-a-boss-cdd4f5358554
        //TODO
    }
    AppComponent.prototype.onResize = function (event) {
        if (window.innerWidth < 640) {
            window.location.href = 'http://kavarnavsedmemnebi.cz/m';
        }
    };
    AppComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "onResize", null);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: "<router-outlet></router-outlet>",
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_1__["LifeCycleService"],
            _core_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core */ "./src/app/core/index.ts");
/* harmony import */ var _core_interceptors_httpDefaultsInterceptor_app_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/interceptors/httpDefaultsInterceptor/app.interceptor */ "./src/app/core/interceptors/httpDefaultsInterceptor/app.interceptor.ts");
/* harmony import */ var _core_services_lifecycle_lifecycle_factory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/services/lifecycle/lifecycle.factory */ "./src/app/core/services/lifecycle/lifecycle.factory.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_2__["RoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastNoAnimationModule"].forRoot()
            ],
            providers: [
                [{ provide: _core__WEBPACK_IMPORTED_MODULE_6__["services"].LifeCycleService, useClass: _core__WEBPACK_IMPORTED_MODULE_6__["services"].LifeCycleService }],
                [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"], useFactory: _core_services_lifecycle_lifecycle_factory__WEBPACK_IMPORTED_MODULE_8__["init_app"], deps: [_core__WEBPACK_IMPORTED_MODULE_6__["services"].LifeCycleService], multi: true }],
                //[{ provide: APP_BASE_HREF, useValue: window['_app_base'] || '/' }],
                [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _core_interceptors_httpDefaultsInterceptor_app_interceptor__WEBPACK_IMPORTED_MODULE_7__["HttpDefaultsInterceptor"], multi: true }],
                [{ provide: _core__WEBPACK_IMPORTED_MODULE_6__["services"].EnvironmentService, useClass: _core__WEBPACK_IMPORTED_MODULE_6__["services"].EnvironmentService }],
                [{ provide: _core__WEBPACK_IMPORTED_MODULE_6__["services"].LoggingService, useClass: _core__WEBPACK_IMPORTED_MODULE_6__["services"].LoggingService }],
                [{ provide: _core__WEBPACK_IMPORTED_MODULE_6__["services"].AuthenticationService, useClass: _core__WEBPACK_IMPORTED_MODULE_6__["services"].AuthenticationService }],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

function use(values) {
    return Object.values(values);
}


/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/guards/auth/auth.guard */ "./src/app/core/guards/auth/auth.guard.ts");
/* harmony import */ var _core_guards_auth_unauth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/guards/auth/unauth.guard */ "./src/app/core/guards/auth/unauth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        canActivate: [_core_guards_auth_unauth_guard__WEBPACK_IMPORTED_MODULE_3__["UnauthGuard"]],
        loadChildren: 'src/app/core/modules/landing/landing.module#LandingModule'
    },
    {
        path: 'redactor',
        canActivate: [_core_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        loadChildren: 'src/app/core/modules/redactor/redactor.module#RedactorModule'
    }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload' })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/core/components/index.ts":
/*!******************************************!*\
  !*** ./src/app/core/components/index.ts ***!
  \******************************************/
/*! exports provided: core_components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "core_components", function() { return core_components; });
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spinner/spinner.component */ "./src/app/core/components/spinner/spinner.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/core/components/modal/modal.component.ts");


/**
 * This file exports all core components
 */
var core_components = [
    _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_0__["SpinnerComponent"],
    _modal_modal_component__WEBPACK_IMPORTED_MODULE_1__["ModalComponent"],
];


/***/ }),

/***/ "./src/app/core/components/modal/modal.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/components/modal/modal.component.ts ***!
  \**********************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
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

var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'meedias-modal',
            template: __webpack_require__(/*! ./modal.template.html */ "./src/app/core/components/modal/modal.template.html"),
            styles: [__webpack_require__(/*! ./modal.styles.scss */ "./src/app/core/components/modal/modal.styles.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/core/components/modal/modal.styles.scss":
/*!*********************************************************!*\
  !*** ./src/app/core/components/modal/modal.styles.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5zdHlsZXMuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/core/components/modal/modal.template.html":
/*!***********************************************************!*\
  !*** ./src/app/core/components/modal/modal.template.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/components/spinner/spinner.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/components/spinner/spinner.component.ts ***!
  \**************************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
    }
    SpinnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'meedias-spinner',
            template: __webpack_require__(/*! ./spinner.template.html */ "./src/app/core/components/spinner/spinner.template.html"),
            styles: [__webpack_require__(/*! ./spinner.styles.scss */ "./src/app/core/components/spinner/spinner.styles.scss")]
        })
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/app/core/components/spinner/spinner.styles.scss":
/*!*************************************************************!*\
  !*** ./src/app/core/components/spinner/spinner.styles.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner {\n  width: 40px;\n  height: 40px;\n  position: relative;\n  margin: 100px auto; }\n\n.double-bounce1, .double-bounce2 {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: lightblue;\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n  animation: sk-bounce 2.0s infinite ease-in-out; }\n\n.double-bounce2 {\n  -webkit-animation-delay: -1.0s;\n  animation-delay: -1.0s; }\n\n@-webkit-keyframes sk-bounce {\n  0%, 100% {\n    -webkit-transform: scale(0); }\n  50% {\n    -webkit-transform: scale(1); } }\n\n@keyframes sk-bounce {\n  0%, 100% {\n    transform: scale(0);\n    -webkit-transform: scale(0); }\n  50% {\n    transform: scale(1);\n    -webkit-transform: scale(1); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3JlbWVkaWFzL21lZWRpYXNfZnJvbnRlbmQvc3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlubmVyLnN0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBVztFQUNYLGFBQVk7RUFFWixtQkFBa0I7RUFDbEIsbUJBQWtCLEVBQ25COztBQUVEO0VBQ0UsWUFBVztFQUNYLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsNEJBQTJCO0VBQzNCLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLFFBQU87RUFFUCx1REFBc0Q7RUFDdEQsK0NBQThDLEVBQy9DOztBQUVEO0VBQ0UsK0JBQThCO0VBQzlCLHVCQUFzQixFQUN2Qjs7QUFFRDtFQUNFO0lBQVcsNEJBQTZCLEVBQUE7RUFDeEM7SUFBTSw0QkFBNkIsRUFBQSxFQUFBOztBQUdyQztFQUNFO0lBQ0Usb0JBQXFCO0lBQ3JCLDRCQUE2QixFQUFBO0VBQzdCO0lBQ0Esb0JBQXFCO0lBQ3JCLDRCQUE2QixFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlubmVyLnN0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwaW5uZXIge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMTAwcHggYXV0bztcbiAgfVxuICBcbiAgLmRvdWJsZS1ib3VuY2UxLCAuZG91YmxlLWJvdW5jZTIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNrLWJvdW5jZSAyLjBzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICAgIGFuaW1hdGlvbjogc2stYm91bmNlIDIuMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgXG4gIC5kb3VibGUtYm91bmNlMiB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xLjBzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTEuMHM7XG4gIH1cbiAgXG4gIEAtd2Via2l0LWtleWZyYW1lcyBzay1ib3VuY2Uge1xuICAgIDAlLCAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMCkgfVxuICAgIDUwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBzay1ib3VuY2Uge1xuICAgIDAlLCAxMDAlIHsgXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMCk7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4wKTtcbiAgICB9IDUwJSB7IFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCk7XG4gICAgfVxuICB9Il19 */"

/***/ }),

/***/ "./src/app/core/components/spinner/spinner.template.html":
/*!***************************************************************!*\
  !*** ./src/app/core/components/spinner/spinner.template.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\">\n    <div class=\"double-bounce1\"></div>\n    <div class=\"double-bounce2\"></div>\n</div>"

/***/ }),

/***/ "./src/app/core/dependencies/bootstrap/bootstrap.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/dependencies/bootstrap/bootstrap.module.ts ***!
  \*****************************************************************/
/*! exports provided: BootstrapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootstrapModule", function() { return BootstrapModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BootstrapModule = /** @class */ (function () {
    function BootstrapModule() {
    }
    BootstrapModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownModule"].forRoot()
            ],
            exports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModalModule"]]
        })
    ], BootstrapModule);
    return BootstrapModule;
}());



/***/ }),

/***/ "./src/app/core/dependencies/index.ts":
/*!********************************************!*\
  !*** ./src/app/core/dependencies/index.ts ***!
  \********************************************/
/*! exports provided: core_dependencies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "core_dependencies", function() { return core_dependencies; });
/* harmony import */ var _bootstrap_bootstrap_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap/bootstrap.module */ "./src/app/core/dependencies/bootstrap/bootstrap.module.ts");
/* harmony import */ var _toast_toast_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toast/toast.module */ "./src/app/core/dependencies/toast/toast.module.ts");


/**
 * This file exports all the third party dependencies
 * that are initialized and configured
 */
var core_dependencies = [
    _bootstrap_bootstrap_module__WEBPACK_IMPORTED_MODULE_0__["BootstrapModule"],
    _toast_toast_module__WEBPACK_IMPORTED_MODULE_1__["ToastsModule"]
];


/***/ }),

/***/ "./src/app/core/dependencies/toast/toast.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/dependencies/toast/toast.module.ts ***!
  \*********************************************************/
/*! exports provided: ToastsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastsModule", function() { return ToastsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ToastsModule = /** @class */ (function () {
    function ToastsModule() {
    }
    ToastsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastNoAnimationModule"].forRoot()],
            exports: [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastNoAnimationModule"]]
        })
    ], ToastsModule);
    return ToastsModule;
}());



/***/ }),

/***/ "./src/app/core/guards/auth/auth.guard.ts":
/*!************************************************!*\
  !*** ./src/app/core/guards/auth/auth.guard.ts ***!
  \************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/app/core/services/index.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authentication, router, toast) {
        this.authentication = authentication;
        this.router = router;
        this.toast = toast;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.authentication._authenticated == true) {
            return true;
        }
        else {
            console.log("oka");
            this.toast.info("Ooops!", "Nemáte práva"); //{ positionClass: 'toast-bottom-right'});
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/core/guards/auth/unauth.guard.ts":
/*!**************************************************!*\
  !*** ./src/app/core/guards/auth/unauth.guard.ts ***!
  \**************************************************/
/*! exports provided: UnauthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnauthGuard", function() { return UnauthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/app/core/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UnauthGuard = /** @class */ (function () {
    function UnauthGuard(router, authentication) {
        this.router = router;
        this.authentication = authentication;
    }
    UnauthGuard.prototype.canActivate = function (route, state) {
        //if (this.authentication._authenticated == false) {
        return true;
        /*         }else{
                    this.router.navigate(['redactor']);
                    return false;
                } */
    };
    UnauthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], UnauthGuard);
    return UnauthGuard;
}());



/***/ }),

/***/ "./src/app/core/index.ts":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! exports provided: dependencies, components, services, pipes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dependencies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dependencies */ "./src/app/core/dependencies/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "dependencies", function() { return _dependencies__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./src/app/core/components/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _components__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ "./src/app/core/services/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "services", function() { return _services__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes */ "./src/app/core/pipes/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "pipes", function() { return _pipes__WEBPACK_IMPORTED_MODULE_3__; });




/**
 * @author Schwada
 * @since 9.1.2019
 *
 * This is a barrel file for core services,components...etc that
 * the app needs for it's minimal functioning. It rolls up exports from
 * several modules into a single convenient module.
 */



/***/ }),

/***/ "./src/app/core/interceptors/httpDefaultsInterceptor/app.interceptor.ts":
/*!******************************************************************************!*\
  !*** ./src/app/core/interceptors/httpDefaultsInterceptor/app.interceptor.ts ***!
  \******************************************************************************/
/*! exports provided: HttpDefaultsInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpDefaultsInterceptor", function() { return HttpDefaultsInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services */ "./src/app/core/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @author Schwada
 * @since 9.1.2018
 *
 * Sets the default headers that should be sent
 * (and token if seding a POST) with each request
 */
var HttpDefaultsInterceptor = /** @class */ (function () {
    function HttpDefaultsInterceptor(authentication) {
        this.authentication = authentication;
    }
    HttpDefaultsInterceptor.prototype.intercept = function (req, next) {
        var authReq = req.clone({
            withCredentials: true,
            setHeaders: { 'X-Requested-With': 'XMLHttpRequest', },
        });
        return next.handle(authReq);
    };
    HttpDefaultsInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], HttpDefaultsInterceptor);
    return HttpDefaultsInterceptor;
}());



/***/ }),

/***/ "./src/app/core/pipes/asset/asset.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/core/pipes/asset/asset.pipe.ts ***!
  \************************************************/
/*! exports provided: AssetPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetPipe", function() { return AssetPipe; });
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

var AssetPipe = /** @class */ (function () {
    function AssetPipe() {
        this.baseUrl = '/';
    }
    AssetPipe.prototype.transform = function (value) {
        var newval = this.baseUrl + value;
        return newval;
    };
    AssetPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'asset'
        }),
        __metadata("design:paramtypes", [])
    ], AssetPipe);
    return AssetPipe;
}());



/***/ }),

/***/ "./src/app/core/pipes/index.ts":
/*!*************************************!*\
  !*** ./src/app/core/pipes/index.ts ***!
  \*************************************/
/*! exports provided: core_pipes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "core_pipes", function() { return core_pipes; });
/* harmony import */ var _asset_asset_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asset/asset.pipe */ "./src/app/core/pipes/asset/asset.pipe.ts");

/**
 * This file exports all core pipes
 */
var core_pipes = [
    _asset_asset_pipe__WEBPACK_IMPORTED_MODULE_0__["AssetPipe"]
];


/***/ }),

/***/ "./src/app/core/services/authentication/authentication.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/core/services/authentication/authentication.service.ts ***!
  \************************************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_models_Authinfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/models/Authinfo */ "./src/app/shared/models/Authinfo.ts");
/* harmony import */ var _cookies_cookies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cookies/cookies.service */ "./src/app/core/services/cookies/cookies.service.ts");
/* harmony import */ var _environment_environment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environment/environment.service */ "./src/app/core/services/environment/environment.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * @author Schwada
 * @since  9.1.2019
 *
 *
 * TODO FIX SHITTY AUTHENTICATION
 *
 * This essential service contains all the authentication
 * logic ( password validation, session initialization... )
 * aswell as stores information about currently authenticated user
 */
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, envService, cookies) {
        this.http = http;
        this.envService = envService;
        this.cookies = cookies;
        /* User authinfo */
        this.authinfo = null;
        /* User information was compared to credentials */
        this.authenticated = false;
        // Credentials - either email/username/id or 2fa data 
        this.credentials = {};
        // dev this.authenticated = true;
    }
    /**
     * Returns promise which calls login on REST
     *
     * @method
     * @param {string} username
     * @param {string} email
     * @param {string} password
     * @return {Promise<{}>}
     */
    AuthenticationService.prototype.login = function (username, email, password) {
        var _this = this;
        // let headers = { authorization: "Basic " + btoa(username + ":" + password) };
        var credentials = { "name": username, "pass": password };
        this.credentials = credentials;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.envService.read('apiUrl') + '/' + window['instance_id'] + '/login', credentials).subscribe(resolve, reject);
        });
    };
    /**
     * Returns promise which checks in the backend that session is still
     * alive, returns current user's identity
     *
     * @method
     * @return {object} current user's identity
     */
    AuthenticationService.prototype.checkSession = function (auth) {
        var _this = this;
        var authinfo = null;
        if (auth == undefined && this.authinfo != null) {
            authinfo = this.authinfo.get();
        }
        else {
            authinfo = auth;
        }
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.envService.read('apiUrl') + "/me", authinfo).subscribe(resolve, reject);
        });
    };
    /**
     * Returns promise which calls logout on REST
     *
     * @method
     * @return {Observable<any>}
     */
    AuthenticationService.prototype.logout = function () {
        // return new Promise((resolve,reject) => {
        //     this.http.post(this.envService.read('apiUrl') +'/'+ window['instance_id'] + '/login', credentials).subscribe(resolve, reject);
        // });
    };
    /**
     * Returns promise which sets user's new authinfo from credentials
     * saves the authinfo id to cookies
     *
     * @method authenticate
     * @param {string} authdata
     * @return {Promise<{}>}
     */
    AuthenticationService.prototype.authenticate = function (authdata, credentials, authinfo) {
        var _this = this;
        var authenticate = new Promise(function (resolve, reject) {
            console.log(_this.cookies.get("authinfo"));
            console.log(_this.cookies.get("authinfo") == undefined);
            if (_this.credentials != null && authdata != null) {
                _this.credentials['id'] = authdata.split('|')[0];
                var parsed = new _shared_models_Authinfo__WEBPACK_IMPORTED_MODULE_2__["Authinfo"](_this.credentials['name'], _this.credentials['email'], authdata.split('|')[1]);
                _this.authinfo = parsed;
                _this.authenticated = _this._authinfo != null;
                _this.cookies.set("authinfo", parsed._name + "|" + parsed._email + "|" + parsed._token, 1);
                resolve(true);
            }
            else {
                if (credentials != undefined && credentials['id'] != undefined && authinfo != undefined) {
                    _this.credentials['id'] = credentials['id'];
                    _this.authinfo = authinfo;
                    _this.authenticated = true;
                    _this.cookies.set("authinfo", authinfo._name + "|" + authinfo._email + "|" + authinfo._token, 1);
                    resolve(true);
                }
                else {
                    reject();
                }
            }
        });
        return authenticate;
    };
    /**
     * Returns promise which erases identity from
     * this service ( aka. logs the user out from angular app )
     *
     * @method
     * @return {Promise<{}>}
     */
    AuthenticationService.prototype.dismissExpiredIdentity = function () {
        var _this = this;
        var dismissIdentity = new Promise(function (resolve) {
            _this.authinfo = null;
            _this.credentials = null;
            _this.authenticated = false;
            _this.cookies.delete("authinfo");
            resolve(true);
        });
        return dismissIdentity;
    };
    Object.defineProperty(AuthenticationService.prototype, "_authinfo", {
        /**
         * Returns ( a copy of ) data of current
         * angular authinfo ( name+token )
         *
         * @method
         * @return {Authinfo} authinfo
         */
        get: function () {
            return this.authinfo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationService.prototype, "_credentials", {
        /**
         * Returns ( a copy of ) data of current
         * angular identity ( name...etc )
         *
         * @method
         * @return {object} credentials
         */
        get: function () {
            return this.credentials;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationService.prototype, "_authenticated", {
        /**
         * Returns ( a copy of ) data of current
         * angular authentication state (
         *
         * @method
         * @return {boolean}
         */
        get: function () {
            return this.authenticated;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _environment_environment_service__WEBPACK_IMPORTED_MODULE_4__["EnvironmentService"],
            _cookies_cookies_service__WEBPACK_IMPORTED_MODULE_3__["CookiesService"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/core/services/cookies/cookies.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/services/cookies/cookies.service.ts ***!
  \**********************************************************/
/*! exports provided: CookiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookiesService", function() { return CookiesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


/**
 * @author Schwada
 * @since  9.1.2019
 *
 * This essential service contains all the authentication
 * logic ( password validation, session initialization... )
 * aswell as stores information about currently authenticated user
 */
var CookiesService = /** @class */ (function () {
    function CookiesService(document) {
        this.document = document;
        /* User has accepted the use of cookies */
        this.cookiesEnabled = true;
        this.cookiesEnabled = this.userAcceptedCookies();
    }
    /**
     * Sets that the user has
     * agreed to the use of cookies
     *
     * @method
     * @param value
     * @returns {void}
     */
    CookiesService.prototype.setAcceptedCookies = function (value) {
        var now = new Date();
        var exp = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate());
        this.cookiesEnabled = value;
        this.set('cookies-allowed', "" + value, exp);
    };
    /**
     * Cheks if user has already
     * agreed to the use of cookies
     *
     * @method
     * @returns {boolean}
     */
    CookiesService.prototype.userAcceptedCookies = function () {
        return this.check('cookies-allowed');
    };
    /**
     * Asks if cookies
     * are enabled in the browser
     *
     * @method
     * @returns {boolean}
     */
    CookiesService.prototype.browserEnabledCookies = function () {
        return navigator.cookieEnabled;
    };
    /* Actual cookie manipulation below */
    /**
     * Check if the cookie exists
     *
     * @param name Cookie name
     * @returns {boolean}
     */
    CookiesService.prototype.check = function (name) {
        name = encodeURIComponent(name);
        var regExp = this.getCookieRegExp(name);
        var exists = regExp.test(this.document.cookie);
        return exists;
    };
    /**
     * Get the cookie value
     *
     * @param name Cookie name
     * @returns {any}
     */
    CookiesService.prototype.get = function (name) {
        if (this.check(name)) {
            name = encodeURIComponent(name);
            var regExp = this.getCookieRegExp(name);
            var result = regExp.exec(this.document.cookie);
            return decodeURIComponent(result[1]);
        }
        else {
            return '';
        }
    };
    /**
     * Get all the cookies
     *
     * @returns {object}
     */
    CookiesService.prototype.getAll = function () {
        var cookies = {};
        if (this.document.cookie && this.document.cookie !== '') {
            var split = this.document.cookie.split(';');
            for (var i = 0; i < split.length; i += 1) {
                var currentCookie = split[i].split('=');
                currentCookie[0] = currentCookie[0].replace(/^ /, '');
                cookies[decodeURIComponent(currentCookie[0])] = decodeURIComponent(currentCookie[1]);
            }
        }
        return cookies;
    };
    /**
     * Creates a cookie
     *
     * @param {string} name Cookie name
     * @param {string} value Cookie value
     * @param { number | Date } expires Number of days until the cookies expires or an actual Date
     */
    CookiesService.prototype.set = function (name, value, expires, path) {
        var cookieString = encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';';
        if (expires) {
            if (typeof expires === 'number') {
                var dateExpires = new Date(new Date().getTime() + expires * 1000 * 60 * 60 * 24);
                cookieString += 'expires=' + dateExpires.toUTCString() + ';';
            }
            else {
                cookieString += 'expires=' + expires.toUTCString() + ';';
            }
        }
        cookieString += "; path=/";
        this.document.cookie = cookieString;
    };
    /**
     * Deletes a cookie
     *
     * @method
     * @param {string} name Cookie name
     * @return {void}
     */
    CookiesService.prototype.delete = function (name) {
        this.set(name, '', new Date('Thu, 01 Jan 1970 00:00:01 GMT'));
    };
    /**
     * Clear all cookies
     *
     * @method
     * @return {void}
     */
    CookiesService.prototype.clear = function (path, domain) {
        var cookies = this.getAll();
        for (var cookieName in cookies) {
            if (cookies.hasOwnProperty(cookieName)) {
                this.delete(cookieName);
            }
        }
    };
    /* Private instance methods below */
    /**
     * @method
     * @param {string} cookie
     * @returns {RegExp}
     */
    CookiesService.prototype.getCookieRegExp = function (name) {
        var escapedName = name.replace(/([\[\]\{\}\(\)\|\=\;\+\?\,\.\*\^\$])/ig, '\\$1');
        return new RegExp('(?:^' + escapedName + '|;\\s*' + escapedName + ')=(.*?)(?:;|$)', 'g');
    };
    CookiesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [Document])
    ], CookiesService);
    return CookiesService;
}());



/***/ }),

/***/ "./src/app/core/services/environment/environment.config.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/services/environment/environment.config.ts ***!
  \*****************************************************************/
/*! exports provided: environmentConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environmentConfig", function() { return environmentConfig; });
/**
 * @author Schwada
 * @since 9.1.2019
 *
 * Enviroment specific data for
 * api endpoints, urls, variables, etc..
 *
 */
var environmentConfig = {
    domains: {
        development: ['localhost'],
        stage: ['localhost'],
        production: ['localhost'],
        localhost: [window.location.protocol + '//magnusi.tech'],
    },
    vars: {
        localhost: {
            apiUrl: window.location.protocol + '//magnusi.tech',
            logEnabled: true,
        },
        development: {
            apiUrl: window.location.protocol + '//magnusi.tech',
            logEnabled: false,
        },
        stage: {
            apiUrl: '//localhost:8080',
            logEnabled: false,
        },
        production: {
            apiUrl: window.location.protocol + '//' + window.location.host + '/api',
            logEnabled: false,
        },
    }
};


/***/ }),

/***/ "./src/app/core/services/environment/environment.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/services/environment/environment.service.ts ***!
  \******************************************************************/
/*! exports provided: EnvironmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvironmentService", function() { return EnvironmentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environment_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environment.config */ "./src/app/core/services/environment/environment.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @author Schwada
 * @since 9.1.2019
 *
 * allows for the set up and retriving of different information
 * such as api endpoints, urls, variables, etc, based on the context of execution:
 * devel, stage, production or any other environment
 *
 * Migrated to Angular from https://github.com/juanpablob/angular-environment
 */
var EnvironmentService = /** @class */ (function () {
    function EnvironmentService() {
        // Current enviroment defaulted to devel
        this.environment = "development";
        // User defined environment data
        this.data = {};
        this.pregQuote = function (text, delimiter) {
            return (text + '').replace(new RegExp('[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\' + (delimiter || '') + '-]', 'g'), '\\$&');
        };
        this.stringToRegex = function (text) {
            return new RegExp(this.pregQuote(text).replace(/\\\*/g, '.*').replace(/\\\?/g, '.'), 'g');
        };
        this.config(_environment_config__WEBPACK_IMPORTED_MODULE_1__["environmentConfig"]);
        this.check();
    }
    /**
     * config() allow pass as object the
     * desired environments with their domains
     * and variables
     *
     * @method
     * @param {Object} config
     * @return {Void}
     */
    EnvironmentService.prototype.config = function (config) {
        this.data = config;
    };
    ;
    /**
     * set() set the desired environment
     * based on the passed string
     *
     * @method
     * @param {String} environment
     * @return {Void}
     */
    EnvironmentService.prototype.set = function (environment) {
        this.environment = environment;
    };
    ;
    /**
     * get() returns the current environment
     *
     * @method
     * @return {String}
     */
    EnvironmentService.prototype.get = function () {
        return this.environment;
    };
    ;
    /**
     * read() returns the desired variable based
     * on passed argument
     *
     * @method
     * @param {String} variable
     * @return {any} environment specific variable
     */
    EnvironmentService.prototype.read = function (variable) {
        if (typeof variable === 'undefined' || variable === '' || variable === 'all') {
            return this.data.vars[this.get()];
        }
        else if (typeof this.data.vars[this.get()][variable] === 'undefined') {
            return this.data.vars.defaults[variable];
        }
        return this.data.vars[this.get()][variable];
    };
    ;
    /**
     * is() checks if the passed environment
     * matches with the current environment
     *
     * @method
     * @param {String} environment
     * @return {Boolean}
     */
    EnvironmentService.prototype.is = function (environment) {
        return (environment === this.environment);
    };
    ;
    /**
     * check() looks for a match between
     * the actual domain (where the script is running)
     * and any of the domains under env constant in
     * order to set the running environment
     *
     * @method
     * @return {Void}
     */
    EnvironmentService.prototype.check = function () {
        var self = this, location = window.location.host, matches = [], keepGoing = true;
        for (var k in this.data.domains) {
            var v = this.data.domains[k];
            for (var k2 in v) {
                if (location.match(this.stringToRegex(v[k]))) {
                    matches.push({
                        environment: k2,
                        domain: v[k2]
                    });
                }
            }
        }
        for (var k in matches) {
            if (keepGoing) {
                if (location === matches[k].domain) {
                    keepGoing = false;
                }
                console.log(matches[k].domain);
                self.environment = matches[k].environment;
            }
        }
    };
    ;
    EnvironmentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], EnvironmentService);
    return EnvironmentService;
}());



/***/ }),

/***/ "./src/app/core/services/index.ts":
/*!****************************************!*\
  !*** ./src/app/core/services/index.ts ***!
  \****************************************/
/*! exports provided: EnvironmentService, LoggingService, LifeCycleService, AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _environment_environment_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment/environment.service */ "./src/app/core/services/environment/environment.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnvironmentService", function() { return _environment_environment_service__WEBPACK_IMPORTED_MODULE_0__["EnvironmentService"]; });

/* harmony import */ var _logging_logging_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logging/logging.service */ "./src/app/core/services/logging/logging.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoggingService", function() { return _logging_logging_service__WEBPACK_IMPORTED_MODULE_1__["LoggingService"]; });

/* harmony import */ var _lifecycle_lifecycle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lifecycle/lifecycle.service */ "./src/app/core/services/lifecycle/lifecycle.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LifeCycleService", function() { return _lifecycle_lifecycle_service__WEBPACK_IMPORTED_MODULE_2__["LifeCycleService"]; });

/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication/authentication.service */ "./src/app/core/services/authentication/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]; });





/**
 * @author Schwada
 * @since
 * Barrel File
 *
 */



/***/ }),

/***/ "./src/app/core/services/lifecycle/lifecycle.factory.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/services/lifecycle/lifecycle.factory.ts ***!
  \**************************************************************/
/*! exports provided: init_app */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init_app", function() { return init_app; });
function init_app(lifecycle) {
    return function () { return lifecycle.initializeApp(); };
}


/***/ }),

/***/ "./src/app/core/services/lifecycle/lifecycle.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/services/lifecycle/lifecycle.service.ts ***!
  \**************************************************************/
/*! exports provided: LifeCycleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifeCycleService", function() { return LifeCycleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authentication/authentication.service */ "./src/app/core/services/authentication/authentication.service.ts");
/* harmony import */ var _cookies_cookies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cookies/cookies.service */ "./src/app/core/services/cookies/cookies.service.ts");
/* harmony import */ var src_app_shared_models_Authinfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/models/Authinfo */ "./src/app/shared/models/Authinfo.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * @author Schwada
 * @since 9.1.2019
 *
 */
var LifeCycleService = /** @class */ (function () {
    function LifeCycleService(authentication, cookies) {
        this.authentication = authentication;
        this.cookies = cookies;
        this.appInitialized = false;
    }
    Object.defineProperty(LifeCycleService.prototype, "isAppInitialized", {
        get: function () { return this.appInitialized; },
        enumerable: true,
        configurable: true
    });
    LifeCycleService.prototype.initializeApp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                            //dev
                            //resolve();
                            if (!_this.authentication._authenticated) {
                                // check if user is actually not logged in
                                var auth = _this.cookies.get("authinfo");
                                if (auth != "") {
                                    var authinfo_1 = src_app_shared_models_Authinfo__WEBPACK_IMPORTED_MODULE_3__["Authinfo"].fromString(auth);
                                    // got authinfo ...check if still valid
                                    _this.authentication.checkSession(authinfo_1).then(function (data) {
                                        _this.authentication.authenticate(null, data, authinfo_1).then(function (data) {
                                            _this.appInitialized = true;
                                            // start checking if still active
                                            _this.checkActivity();
                                            resolve();
                                        });
                                    }, function (error) {
                                        // is no longer valid so delete identity
                                        _this.authentication.dismissExpiredIdentity();
                                        _this.appInitialized = true;
                                        resolve();
                                        //console.log(error);
                                    });
                                }
                                else {
                                    console.log("no authdata");
                                    _this.appInitialized = true;
                                    _this.checkActivity();
                                    resolve();
                                }
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LifeCycleService.prototype.checkActivity = function () {
        var _this = this;
        if (this.authentication._authenticated) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(800000).subscribe(function (value) {
                _this.authentication.checkSession().then(function (data) {
                    //log is still active
                }, function (error) {
                    _this.authentication.dismissExpiredIdentity();
                });
            });
        }
    };
    LifeCycleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"],
            _cookies_cookies_service__WEBPACK_IMPORTED_MODULE_2__["CookiesService"]])
    ], LifeCycleService);
    return LifeCycleService;
}());



/***/ }),

/***/ "./src/app/core/services/logging/logging.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/services/logging/logging.service.ts ***!
  \**********************************************************/
/*! exports provided: LoggingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggingService", function() { return LoggingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environment_environment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environment/environment.service */ "./src/app/core/services/environment/environment.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @author Schwada
 * @since 9.1.2019
 *
 * Simple service for logging. Default implementation safely writes the message
 * into the browser's console based on the environment.
 * The main purpose of this service is to simplify debugging and troubleshooting.
 */
var LoggingService = /** @class */ (function () {
    function LoggingService(envService) {
        this.envService = envService;
        this.enabled = false;
        this.timestamps = false;
        this.traceEnabled = false; //TODO
        this.enabled = envService.read('logEnabled');
    }
    Object.defineProperty(LoggingService.prototype, "info", {
        get: function () { return this.log('info'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoggingService.prototype, "warn", {
        get: function () { return this.log('warn'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoggingService.prototype, "error", {
        get: function () { return this.log('error'); },
        enumerable: true,
        configurable: true
    });
    /**
     * General logging method that extends
     * the console function by checking if
     * debug is enabled for this environment
     *
     * @param type
     */
    LoggingService.prototype.log = function (type) {
        if (this.enabled) {
            if (this.timestamps == true) {
                var timestamp = "[ " + type.toUpperCase() + " " + (new Date).toLocaleTimeString() + " ]";
                return console[type].bind(console, '%s', timestamp);
            }
            else {
                return console[type].bind(console);
            }
        }
    };
    LoggingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_environment_environment_service__WEBPACK_IMPORTED_MODULE_1__["EnvironmentService"]])
    ], LoggingService);
    return LoggingService;
}());



/***/ }),

/***/ "./src/app/shared/models/Authinfo.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/models/Authinfo.ts ***!
  \*******************************************/
/*! exports provided: Authinfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Authinfo", function() { return Authinfo; });
/**
 * @author schwada
 * @since 9.1.2019
 *
 * A wrapper class around the authentication data
 * available for different providers and authentication methods
 * in the central backend and frontend aswell.
 */
var Authinfo = /** @class */ (function () {
    function Authinfo(name, email, token) {
        this.name = name;
        this.email = email;
        this.token = token;
    }
    Authinfo.fromString = function (authinfo) {
        var data = authinfo.split("|");
        for (var index = 0; index < data.length; index++) {
            data[index] = (data[index] == "undefined") ? null : data[index];
        }
        return new Authinfo(data[0], data[1], data[2]);
    };
    Object.defineProperty(Authinfo.prototype, "_name", {
        get: function () { return this.name; },
        set: function (name) { this.name = name; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authinfo.prototype, "_email", {
        get: function () { return this.email; },
        set: function (email) { this.email = email; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authinfo.prototype, "_token", {
        get: function () { return this.token; },
        set: function (token) { this.token = token; },
        enumerable: true,
        configurable: true
    });
    Authinfo.prototype.get = function () {
        var auth_info = {};
        if (this.name != null) {
            auth_info['name'] = this.name;
        }
        else if (this.email != null) {
            auth_info['email'] = this.email;
        }
        else {
            return {};
        }
        auth_info['token'] = this.token;
        return auth_info;
    };
    return Authinfo;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /root/remedias/meedias_frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map