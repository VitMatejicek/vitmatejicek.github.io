(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-common-modules-users-users-module"],{

/***/ "./src/app/common/components/user/user.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/common/components/user/user.component.ts ***!
  \**********************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_users_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/users/users.service */ "./src/app/common/modules/users/users.service.ts");
/* harmony import */ var src_app_shared_models_Identity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/Identity */ "./src/app/shared/models/Identity.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserComponent = /** @class */ (function () {
    function UserComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.userDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loaded = false;
        this.userService.getUser(this.loadedUser._id).then(function (data) {
            var user = new src_app_shared_models_Identity__WEBPACK_IMPORTED_MODULE_2__["Identity"](_this.loadedUser._id, data.nick, data.email, data.display, data.location, data.birthday);
            _this.user = user;
            _this.loaded = true;
        });
    };
    UserComponent.prototype.editUser = function (id) {
        var url = 'redactor/users/edit/' + id;
        this.router.navigate([url]);
    };
    UserComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.loaded = false;
        this.userService.removeUser(id).then(function () {
            _this.userDeleted.emit(id);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UserComponent.prototype, "userDeleted", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_shared_models_Identity__WEBPACK_IMPORTED_MODULE_2__["Identity"])
    ], UserComponent.prototype, "loadedUser", void 0);
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'meedias-redactor-user',
            template: __webpack_require__(/*! ./user.template.html */ "./src/app/common/components/user/user.template.html"),
            styles: [__webpack_require__(/*! ./user.styles.scss */ "./src/app/common/components/user/user.styles.scss")]
        }),
        __metadata("design:paramtypes", [_modules_users_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/common/components/user/user.styles.scss":
/*!*********************************************************!*\
  !*** ./src/app/common/components/user/user.styles.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jb21wb25lbnRzL3VzZXIvdXNlci5zdHlsZXMuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/common/components/user/user.template.html":
/*!***********************************************************!*\
  !*** ./src/app/common/components/user/user.template.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n\n        <div *ngIf=\"loaded\" class=\"card-body mb-0 mt-0 pt-2 pb-1\">\n            <h6 class=\"card-title card-top small my-0 pr-1 text-dark float-left\" (click)=\"editUser(user.id)\"><b>edit</b></h6>\n            <h6 class=\"card-title card-top small my-0 pr-0 text-danger float-right\" (click)=\"deleteUser(user.id)\">smazat</h6>\n        </div>\n        <div *ngIf=\"loaded\" class=\"card-body mt-0 pt-0 pb-0\">\n            <h6 class=\"card-title card-top float-left\">{{user.nick}}</h6>\n        </div>\n        <div *ngIf=\"loaded\" class=\"card-body pt-0\">\n            <p class=\"p-0 m-0 small\"><b>email:</b><br> {{user.email}}</p>\n            <p class=\"p-0 m-0 small\"><b>jmeno:</b><br> {{user.display}}</p>\n            <!-- <p class=\"p-0 small\">Text tagu</p> -->\n        </div>\n        <div *ngIf=\"!loaded\"  class=\"card-body pt-0\">\n            <meedias-spinner></meedias-spinner>\n        </div>\n</div> "

/***/ }),

/***/ "./src/app/common/modules/users/users.module.ts":
/*!******************************************************!*\
  !*** ./src/app/common/modules/users/users.module.ts ***!
  \******************************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users.component */ "./src/app/common/modules/users/users.component.ts");
/* harmony import */ var _users_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users.routing */ "./src/app/common/modules/users/users.routing.ts");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users.service */ "./src/app/common/modules/users/users.service.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/user/user.component */ "./src/app/common/components/user/user.component.ts");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _create_users_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create/users.create.component */ "./src/app/common/modules/users/create/users.create.component.ts");
/* harmony import */ var _edit_users_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit/users.edit.component */ "./src/app/common/modules/users/edit/users.edit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
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
var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"],
                _create_users_create_component__WEBPACK_IMPORTED_MODULE_8__["UsersCreateComponent"],
                _edit_users_edit_component__WEBPACK_IMPORTED_MODULE_9__["UsersEditComponent"],
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"]
            ],
            providers: [
                [{ provide: _users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"], useClass: _users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"] }],
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedMoudle"], ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_users_routing__WEBPACK_IMPORTED_MODULE_4__["routes"])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UsersModule);
    return UsersModule;
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
//# sourceMappingURL=src-app-common-modules-users-users-module.js.map