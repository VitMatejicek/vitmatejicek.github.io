(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-core-modules-login-login-module"],{

/***/ "./src/app/core/modules/login/login.module.ts":
/*!****************************************************!*\
  !*** ./src/app/core/modules/login/login.module.ts ***!
  \****************************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/core/modules/login/login.component.ts");
/* harmony import */ var _login_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.routing */ "./src/app/core/modules/login/login.routing.ts");
/* harmony import */ var _login_twofactor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.twofactor.component */ "./src/app/core/modules/login/login.twofactor.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/* */





/**
 *
 *
 */
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                _login_twofactor_component__WEBPACK_IMPORTED_MODULE_5__["TwoFactorComponent"],
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedMoudle"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_login_routing__WEBPACK_IMPORTED_MODULE_4__["routes"])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/shared.module.ts":
/*!**********************************!*\
  !*** ./src/app/shared.module.ts ***!
  \**********************************/
/*! exports provided: SharedMoudle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedMoudle", function() { return SharedMoudle; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core */ "./src/app/core/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/*Internal */

/**
 * @author Schwada
 * @since 9.1.2019
 *
 * Shared module that defines services, pipes
 * and directives that feature modules
 * and all lazy-loaded modules can use.
 */
var SharedMoudle = /** @class */ (function () {
    function SharedMoudle() {
    }
    SharedMoudle = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: use(_core__WEBPACK_IMPORTED_MODULE_2__["components"]).concat(use(_core__WEBPACK_IMPORTED_MODULE_2__["pipes"])),
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ].concat(use(_core__WEBPACK_IMPORTED_MODULE_2__["dependencies"])),
            providers: [],
            exports: use(_core__WEBPACK_IMPORTED_MODULE_2__["components"]).concat(use(_core__WEBPACK_IMPORTED_MODULE_2__["pipes"]))
        })
    ], SharedMoudle);
    return SharedMoudle;
}());

function use(values) {
    return Object.values(values);
}


/***/ })

}]);
//# sourceMappingURL=src-app-core-modules-login-login-module.js.map