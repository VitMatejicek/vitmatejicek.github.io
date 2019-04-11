(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~src-app-common-modules-users-users-module~src-app-core-modules-redactor-redactor-module"],{

/***/ "./src/app/common/modules/users/create/users.create.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/common/modules/users/create/users.create.component.ts ***!
  \***********************************************************************/
/*! exports provided: UsersCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersCreateComponent", function() { return UsersCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_core_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../users.service */ "./src/app/common/modules/users/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UsersCreateComponent = /** @class */ (function () {
    function UsersCreateComponent(authentication, userService, formBuilder, toast, router) {
        this.authentication = authentication;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.toast = toast;
        this.router = router;
    }
    UsersCreateComponent.prototype.ngOnInit = function () {
        this.loaded = true;
        this.userForm = this.formBuilder.group({
            nick: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            display: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            pass: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
    };
    UsersCreateComponent.prototype.create = function () {
        var _this = this;
        console.log(this.userForm);
        this.submitted = true;
        if (!this.userForm.valid) {
            //eerorservice
            this.toast.error("oops neco se nezdarilo..zkontrolujte pole");
            return;
        }
        var data = {
            nick: this.userForm.get("nick").value,
            display: this.userForm.get("display").value,
            email: this.userForm.get("email").value,
            pass: this.userForm.get("pass").value
        };
        this.userService.createNewUser(data).then(function (data) {
            console.log(data);
            //TODO get id and set perms 
            // this.userService.setUserToRedactorPermisions(data).then((data) => {
            _this.router.navigate(['redactor/users']);
            // })
        }, function (error) {
            //todo errorhandler
            _this.submitted = false;
            console.log("error:" + error);
        });
    };
    UsersCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./users.create.template.html */ "./src/app/common/modules/users/create/users.create.template.html"),
            styles: [__webpack_require__(/*! ./users.create.styles.scss */ "./src/app/common/modules/users/create/users.create.styles.scss")]
        }),
        __metadata("design:paramtypes", [src_app_core_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UsersCreateComponent);
    return UsersCreateComponent;
}());



/***/ }),

/***/ "./src/app/common/modules/users/create/users.create.styles.scss":
/*!**********************************************************************!*\
  !*** ./src/app/common/modules/users/create/users.create.styles.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-header {\n  display: flex;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3JlbWVkaWFzL21lZWRpYXNfZnJvbnRlbmQvc3JjL2FwcC9jb21tb24vbW9kdWxlcy91c2Vycy9jcmVhdGUvdXNlcnMuY3JlYXRlLnN0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYTtFQUNiLG9CQUFtQixFQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9tb2R1bGVzL3VzZXJzL2NyZWF0ZS91c2Vycy5jcmVhdGUuc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi1oZWFkZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufSAiXX0= */"

/***/ }),

/***/ "./src/app/common/modules/users/create/users.create.template.html":
/*!************************************************************************!*\
  !*** ./src/app/common/modules/users/create/users.create.template.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section-header\">\n    <h4 style=\"flex:1;\">Vytvořit uživatele</h4>\n    <div class=\"btn btn-light mr-5\" routerLink=\"/redactor/users\">\n            <!-- routerLink=\"/redactor/articles/create\" -->\n        <!-- <i class=\"fa fa-plus fa-2x\"></i> -->\n        Zpět\n    </div>\n</div>\n\n\n\n<form class=\"pt-4\" [formGroup]=\"userForm\" (ngSubmit)=\"create()\">\n    <div class=\"form-group\">\n        <label>Email</label>\n        <input type=\"email\"  formControlName=\"email\" class=\"form-control\" >\n      </div>\n      <div class=\"form-group\">\n        <label>Jméno</label>\n        <input type=\"text\"  formControlName=\"display\"  class=\"form-control\">\n      </div>\n          <div class=\"form-group\">\n        <label>Nick</label>\n        <input type=\"text\"  formControlName=\"nick\"  class=\"form-control\" >\n      </div>\n      <div class=\"form-group\">\n        <label>Heslo</label>\n        <input type=\"password\"  formControlName=\"pass\"  class=\"form-control\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\">Vytvořit</button>\n</form>"

/***/ }),

/***/ "./src/app/common/modules/users/edit/users.edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/common/modules/users/edit/users.edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: UsersEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersEditComponent", function() { return UsersEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../users.service */ "./src/app/common/modules/users/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UsersEditComponent = /** @class */ (function () {
    function UsersEditComponent(authentication, userService, formBuilder, toast, route, router) {
        this.authentication = authentication;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.toast = toast;
        this.route = route;
        this.router = router;
    }
    UsersEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) { _this.userId = params.get("userId"); });
        this.userService.getUser(this.userId).then(function (data) {
            //this.data = data;
            _this.userForm = _this.formBuilder.group({
                nick: [data.nick, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                display: [data.display, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                email: [data.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                pass: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
            });
            _this.loaded = true;
        });
        //this.loaded = true;
    };
    UsersEditComponent.prototype.create = function () {
        var _this = this;
        console.log(this.userForm);
        this.submitted = true;
        if (!this.userForm.valid) {
            //eerorservice
            this.toast.error("oops neco se nezdarilo..zkontrolujte pole");
            return;
        }
        var data = {
            nick: this.userForm.get("nick").value,
            display: this.userForm.get("display").value,
            email: this.userForm.get("email").value,
            pass: this.userForm.get("pass").value
        };
        this.userService.editUser(data, this.userId).then(function (data) {
            console.log(data);
            //TODO get id and set perms 
            // this.userService.setUserToRedactorPermisions(data).then((data) => {
            _this.router.navigate(['redactor/users']);
            // })
        }, function (error) {
            //todo errorhandler
            _this.submitted = false;
            console.log("error:" + error);
        });
    };
    UsersEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./users.edit.template.html */ "./src/app/common/modules/users/edit/users.edit.template.html"),
            styles: [__webpack_require__(/*! ./users.edit.styles.scss */ "./src/app/common/modules/users/edit/users.edit.styles.scss")]
        }),
        __metadata("design:paramtypes", [src_app_core_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UsersEditComponent);
    return UsersEditComponent;
}());



/***/ }),

/***/ "./src/app/common/modules/users/edit/users.edit.styles.scss":
/*!******************************************************************!*\
  !*** ./src/app/common/modules/users/edit/users.edit.styles.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-header {\n  display: flex;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3JlbWVkaWFzL21lZWRpYXNfZnJvbnRlbmQvc3JjL2FwcC9jb21tb24vbW9kdWxlcy91c2Vycy9lZGl0L3VzZXJzLmVkaXQuc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2Isb0JBQW1CLEVBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL21vZHVsZXMvdXNlcnMvZWRpdC91c2Vycy5lZGl0LnN0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24taGVhZGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0gIl19 */"

/***/ }),

/***/ "./src/app/common/modules/users/edit/users.edit.template.html":
/*!********************************************************************!*\
  !*** ./src/app/common/modules/users/edit/users.edit.template.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section-header\">\n    <h4 style=\"flex:1;\">Upravit uživatele</h4>\n    <div class=\"btn btn-light mr-5\" routerLink=\"/redactor/users\">\n            <!-- routerLink=\"/redactor/articles/create\" -->\n        <!-- <i class=\"fa fa-plus fa-2x\"></i> -->\n        Zpět\n    </div>\n</div>\n\n\n<form class=\"pt-4\" [formGroup]=\"userForm\" *ngIf=\"loaded\" (ngSubmit)=\"create()\">\n    <div class=\"form-group\">\n        <label>Email</label>\n        <input type=\"email\"  formControlName=\"email\" class=\"form-control\" >\n      </div>\n      <div class=\"form-group\">\n        <label>Jméno</label>\n        <input type=\"text\"  formControlName=\"display\"  class=\"form-control\">\n      </div>\n          <div class=\"form-group\">\n        <label>Nick</label>\n        <input type=\"text\"  formControlName=\"nick\"  class=\"form-control\" >\n      </div>\n      <div class=\"form-group\">\n        <label>Heslo</label>\n        <input type=\"password\"  formControlName=\"pass\"  class=\"form-control\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\">Upravit údaje</button>\n</form>"

/***/ }),

/***/ "./src/app/common/modules/users/users.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/common/modules/users/users.component.ts ***!
  \*********************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.service */ "./src/app/common/modules/users/users.service.ts");
/* harmony import */ var src_app_shared_models_Identity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/Identity */ "./src/app/shared/models/Identity.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersComponent = /** @class */ (function () {
    function UsersComponent(userService) {
        var _this = this;
        this.userService = userService;
        this.users = [];
        this.userService.getUsers().then(function (data) {
            data.forEach(function (element) {
                _this.users.push(new src_app_shared_models_Identity__WEBPACK_IMPORTED_MODULE_2__["Identity"](element, null, null, null, null, null));
            });
        });
    }
    UsersComponent.prototype.removeUser = function (id) {
        var _this = this;
        this.users.forEach(function (user) {
            if (user.id == id) {
                var index = _this.users.indexOf(user);
                _this.users.splice(index, 1);
            }
        });
        console.log(id);
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./users.template.html */ "./src/app/common/modules/users/users.template.html"),
            styles: [__webpack_require__(/*! ./users.styles.scss */ "./src/app/common/modules/users/users.styles.scss")]
        }),
        __metadata("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/common/modules/users/users.routing.ts":
/*!*******************************************************!*\
  !*** ./src/app/common/modules/users/users.routing.ts ***!
  \*******************************************************/
/*! exports provided: users_routes, routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "users_routes", function() { return users_routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.component */ "./src/app/common/modules/users/users.component.ts");
/* harmony import */ var _create_users_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create/users.create.component */ "./src/app/common/modules/users/create/users.create.component.ts");
/* harmony import */ var _edit_users_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit/users.edit.component */ "./src/app/common/modules/users/edit/users.edit.component.ts");



/**
 *
 *
 *
 */
// Actual moudule routes
var users_routes = [
    {
        path: 'users',
        loadChildren: 'src/app/common/modules/users/users.module#UsersModule'
    }
];
// Required for lazy-loading
var routes = [
    {
        path: '',
        component: _users_component__WEBPACK_IMPORTED_MODULE_0__["UsersComponent"]
    },
    {
        path: 'create',
        component: _create_users_create_component__WEBPACK_IMPORTED_MODULE_1__["UsersCreateComponent"]
    },
    {
        path: 'edit/:userId',
        component: _edit_users_edit_component__WEBPACK_IMPORTED_MODULE_2__["UsersEditComponent"]
    },
];


/***/ }),

/***/ "./src/app/common/modules/users/users.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/common/modules/users/users.service.ts ***!
  \*******************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var src_app_core_services_cookies_cookies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/cookies/cookies.service */ "./src/app/core/services/cookies/cookies.service.ts");
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




var UsersService = /** @class */ (function () {
    function UsersService(http, envService, cookies, authentication) {
        this.http = http;
        this.envService = envService;
        this.cookies = cookies;
        this.authentication = authentication;
    }
    UsersService.prototype.getUsers = function () {
        var _this = this;
        var credentials = this.authentication._authinfo.get;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.envService.read('apiUrl') + '/user/by-instance/' + window['instance_id']).subscribe(resolve, reject);
        });
    };
    UsersService.prototype.getUser = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var credentials, birthday, location, display, email, nick;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        credentials = this.authentication._authinfo.get;
                        return [4 /*yield*/, this.getUserBirthday(userId).then(function (data) { birthday = data; }, function (error) {
                                console.log("unable to load user birthday");
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getUserNick(userId).then(function (data) { nick = data; }, function (error) {
                                console.log("unable to load user nick");
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.getUserEmail(userId).then(function (data) { email = data; }, function (error) {
                                console.log("unable to load user email");
                            })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.getUserDisplay(userId).then(function (data) { display = data; }, function (error) {
                                console.log("unable to load user display");
                            })];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.getUserLocation(userId).then(function (data) { location = data; }, function (error) {
                                console.log("unable to load user location");
                            })];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, { nick: nick, display: display, email: email, location: location, birthday: birthday }];
                }
            });
        });
    };
    UsersService.prototype.getUserBirthday = function (userid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.envService.read('apiUrl') + '/' + userid + '/birthday').subscribe(resolve, reject);
        });
    };
    UsersService.prototype.getUserNick = function (userid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.envService.read('apiUrl') + '/' + userid + '/nick').subscribe(resolve, reject);
        });
    };
    UsersService.prototype.getUserDisplay = function (userid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.envService.read('apiUrl') + '/' + userid + '/display').subscribe(resolve, reject);
        });
    };
    UsersService.prototype.getUserEmail = function (userid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.envService.read('apiUrl') + '/' + userid + '/email').subscribe(resolve, reject);
        });
    };
    UsersService.prototype.getUserLocation = function (userid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.envService.read('apiUrl') + '/' + userid + '/location').subscribe(resolve, reject);
        });
    };
    UsersService.prototype.editUser = function (data, userId) {
        return __awaiter(this, void 0, void 0, function () {
            var authinfo, options, nick, display, email;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        authinfo = this.authentication._authinfo.get();
                        options = {
                            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
                            body: authinfo
                        };
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                _this.http.patch(_this.envService.read('apiUrl') + '/user/' + userId + '/nick', options).subscribe(resolve, reject);
                            })];
                    case 1:
                        nick = _a.sent();
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                _this.http.patch(_this.envService.read('apiUrl') + '/user/' + userId + '/display', options).subscribe(resolve, reject);
                            })];
                    case 2:
                        display = _a.sent();
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                _this.http.patch(_this.envService.read('apiUrl') + '/user/' + userId + '/email', options).subscribe(resolve, reject);
                            })];
                    case 3:
                        email = _a.sent();
                        return [2 /*return*/, { nick: nick, display: display, email: email }];
                }
            });
        });
    };
    UsersService.prototype.removeUser = function (userid) {
        var _this = this;
        var authinfo = this.authentication._authinfo.get();
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
            body: authinfo
        };
        return new Promise(function (resolve, reject) {
            _this.http.delete(_this.envService.read('apiUrl') + '/' + window['instance_id'] + '/user/' + userid, options).subscribe(resolve, reject);
        });
    };
    UsersService.prototype.createNewUser = function (userData) {
        var _this = this;
        var authinfo = this.authentication._authinfo.get();
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
            body: userData
        };
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.envService.read('apiUrl') + '/' + window['instance_id'] + '/register', userData).subscribe(resolve, reject);
        });
    };
    UsersService.prototype.setUserToRedactorPermisions = function (userId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.patch(_this.envService.read('apiUrl') + '/' + userId + '/perms', userId).subscribe(resolve, reject);
        });
    };
    UsersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            src_app_core_services__WEBPACK_IMPORTED_MODULE_2__["EnvironmentService"],
            src_app_core_services_cookies_cookies_service__WEBPACK_IMPORTED_MODULE_3__["CookiesService"],
            src_app_core_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/common/modules/users/users.styles.scss":
/*!********************************************************!*\
  !*** ./src/app/common/modules/users/users.styles.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-header {\n  display: flex;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3JlbWVkaWFzL21lZWRpYXNfZnJvbnRlbmQvc3JjL2FwcC9jb21tb24vbW9kdWxlcy91c2Vycy91c2Vycy5zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYixvQkFBbUIsRUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vbW9kdWxlcy91c2Vycy91c2Vycy5zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uLWhlYWRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59ICJdfQ== */"

/***/ }),

/***/ "./src/app/common/modules/users/users.template.html":
/*!**********************************************************!*\
  !*** ./src/app/common/modules/users/users.template.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section-header\">\n    <h4 style=\"flex:1;\">Uživatelé</h4>\n    <div class=\"btn btn-light mr-5\" routerLink=\"/redactor/users/create\">\n            <!-- routerLink=\"/redactor/articles/create\" -->\n        <!-- <i class=\"fa fa-plus fa-2x\"></i> -->\n        Přidat\n    </div>\n</div>\n\n<div class=\"container pt-4 p-0\">\n    <div class=\"row mb-2\">\n        <div *ngFor=\"let user of users\" class=\"col-sm-3\">\n            <meedias-redactor-user  (userDeleted)=\"removeUser($event)\" [loadedUser]=\"user\"></meedias-redactor-user>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/models/Identity.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/models/Identity.ts ***!
  \*******************************************/
/*! exports provided: Identity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Identity", function() { return Identity; });
/**
 * @author schwada
 * @since 10.1.2019
 *
 * A wrapper class around the user identity data
 * available for different components in the app.
 */
var Identity = /** @class */ (function () {
    function Identity(id, nick, email, display, location, brithdate) {
        this.id = id;
        this.nick = nick;
        this.email = email;
        this.display = display;
        this.location = location;
        this.birthdate = brithdate;
    }
    Object.defineProperty(Identity.prototype, "_id", {
        get: function () { return this.id; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Identity.prototype, "_nick", {
        get: function () { return this.nick; },
        set: function (nick) { this.nick = nick; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Identity.prototype, "_email", {
        get: function () { return this.email; },
        set: function (email) { this.email = email; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Identity.prototype, "_display", {
        get: function () { return this.display; },
        set: function (display) { this.display = display; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Identity.prototype, "_location", {
        get: function () { return this.location; },
        set: function (location) { this.location = location; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Identity.prototype, "_birthdate", {
        get: function () { return this.birthdate; },
        set: function (birthdate) { this.birthdate = birthdate; },
        enumerable: true,
        configurable: true
    });
    return Identity;
}());



/***/ })

}]);
//# sourceMappingURL=default~src-app-common-modules-users-users-module~src-app-core-modules-redactor-redactor-module.js.map