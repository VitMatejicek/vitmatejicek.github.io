(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/common/modules/dashboard/dashboard.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/common/modules/dashboard/dashboard.component.ts ***!
  \*****************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./dashboard.template.html */ "./src/app/common/modules/dashboard/dashboard.template.html"),
            styles: [__webpack_require__(/*! ./dashboard.styles.scss */ "./src/app/common/modules/dashboard/dashboard.styles.scss")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/common/modules/dashboard/dashboard.routing.ts":
/*!***************************************************************!*\
  !*** ./src/app/common/modules/dashboard/dashboard.routing.ts ***!
  \***************************************************************/
/*! exports provided: dashboard_routes, routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dashboard_routes", function() { return dashboard_routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/common/modules/dashboard/dashboard.component.ts");

/**
 *
 *
 *
 */
// Actual moudule routes
var dashboard_routes = [
    {
        path: 'dashboard',
        loadChildren: 'src/app/common/modules/dashboard/dashboard.module#DashboardModule'
    }
];
// Required for lazy-loading
var routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"]
    },
];


/***/ }),

/***/ "./src/app/common/modules/dashboard/dashboard.styles.scss":
/*!****************************************************************!*\
  !*** ./src/app/common/modules/dashboard/dashboard.styles.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQuc3R5bGVzLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/common/modules/dashboard/dashboard.template.html":
/*!******************************************************************!*\
  !*** ./src/app/common/modules/dashboard/dashboard.template.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>dashboard</p>"

/***/ }),

/***/ "./src/app/common/modules/tags/tags.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/common/modules/tags/tags.component.ts ***!
  \*******************************************************/
/*! exports provided: TagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsComponent", function() { return TagsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tags_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tags.service */ "./src/app/common/modules/tags/tags.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TagsComponent = /** @class */ (function () {
    function TagsComponent(tagService) {
        this.tagService = tagService;
    }
    TagsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tagService.getTags().then(function (data) {
            _this.tags = data;
        });
    };
    TagsComponent.prototype.removeTag = function (id) {
    };
    TagsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./tags.template.html */ "./src/app/common/modules/tags/tags.template.html"),
            styles: [__webpack_require__(/*! ./tags.styles.scss */ "./src/app/common/modules/tags/tags.styles.scss")]
        }),
        __metadata("design:paramtypes", [_tags_service__WEBPACK_IMPORTED_MODULE_1__["TagsService"]])
    ], TagsComponent);
    return TagsComponent;
}());



/***/ }),

/***/ "./src/app/common/modules/tags/tags.routing.ts":
/*!*****************************************************!*\
  !*** ./src/app/common/modules/tags/tags.routing.ts ***!
  \*****************************************************/
/*! exports provided: tags_routes, routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tags_routes", function() { return tags_routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _tags_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tags.component */ "./src/app/common/modules/tags/tags.component.ts");

/**
 *
 *
 *
 */
// Actual moudule routes
var tags_routes = [
    {
        path: 'tags',
        loadChildren: 'src/app/common/modules/tags/tags.module#TagsModule'
    }
];
// Required for lazy-loading
var routes = [
    {
        path: '',
        component: _tags_component__WEBPACK_IMPORTED_MODULE_0__["TagsComponent"]
    },
];


/***/ }),

/***/ "./src/app/common/modules/tags/tags.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/common/modules/tags/tags.service.ts ***!
  \*****************************************************/
/*! exports provided: TagsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsService", function() { return TagsService; });
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




var TagsService = /** @class */ (function () {
    function TagsService(http, envService, cookies, authentication) {
        this.http = http;
        this.envService = envService;
        this.cookies = cookies;
        this.authentication = authentication;
    }
    TagsService.prototype.getTags = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.envService.read('apiUrl') + '/' + window['instance_id'] + '/tags/global').subscribe(resolve, reject);
        });
    };
    TagsService.prototype.deleteTag = function (id) {
        var tags = [];
        tags.push(id);
        // return new Promise((resolve,reject) => {
        //     this.http.delete(this.envService.read('apiUrl') +'/'+ window['instance_id'] + '/tags/global',{""tags}).subscribe(resolve, reject);
        // });  
    };
    // public editTag(data,id):any{
    //     return new Promise((resolve,reject) => {
    //         this.http.get(this.envService.read('apiUrl') +'/'+ window['instance_id'] + '/tags/global').subscribe(resolve, reject);
    //     });
    // }
    TagsService.prototype.createTag = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.patch(_this.envService.read('apiUrl') + '/' + window['instance_id'] + '/tags/global', data).subscribe(resolve, reject);
        });
    };
    TagsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            src_app_core_services__WEBPACK_IMPORTED_MODULE_2__["EnvironmentService"],
            src_app_core_services_cookies_cookies_service__WEBPACK_IMPORTED_MODULE_3__["CookiesService"],
            src_app_core_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], TagsService);
    return TagsService;
}());



/***/ }),

/***/ "./src/app/common/modules/tags/tags.styles.scss":
/*!******************************************************!*\
  !*** ./src/app/common/modules/tags/tags.styles.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-header {\n  display: flex;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3JlbWVkaWFzL21lZWRpYXNfZnJvbnRlbmQvc3JjL2FwcC9jb21tb24vbW9kdWxlcy90YWdzL3RhZ3Muc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2Isb0JBQW1CLEVBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL21vZHVsZXMvdGFncy90YWdzLnN0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24taGVhZGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/common/modules/tags/tags.template.html":
/*!********************************************************!*\
  !*** ./src/app/common/modules/tags/tags.template.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section-header\">\n    <h4 style=\"flex:1;\">Tagy</h4>\n    <div routerLink=\"/redactor/tags/create\" class=\"btn btn-light\">\n        <!-- <i class=\"fa fa-plus fa-2x\"></i> -->\n        Přidat\n    </div>\n</div>\n    \n\n<div class=\"container px-0 pt-4\">\n    <div class=\"row\">\n        <div *ngFor=\"let tag of tags\" class=\"col-sm-3\">\n            <meedias-redactor-tag (tagDeleted)=\"removeTag($event)\" [loadedTag]=\"tag\"></meedias-redactor-tag>\n        </div>\n    </div>\n</div>"

/***/ })

}]);
//# sourceMappingURL=common.js.map