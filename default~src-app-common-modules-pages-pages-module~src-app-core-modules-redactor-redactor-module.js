(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~src-app-common-modules-pages-pages-module~src-app-core-modules-redactor-redactor-module"],{

/***/ "./src/app/common/modules/pages/create/pages.create.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/common/modules/pages/create/pages.create.component.ts ***!
  \***********************************************************************/
/*! exports provided: PagesCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesCreateComponent", function() { return PagesCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages.service */ "./src/app/common/modules/pages/pages.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PagesCreateComponent = /** @class */ (function () {
    function PagesCreateComponent(pageService, formBuilder, toast, router) {
        this.pageService = pageService;
        this.formBuilder = formBuilder;
        this.toast = toast;
        this.router = router;
    }
    PagesCreateComponent.prototype.ngOnInit = function () {
        this.loaded = true;
        this.pageForm = this.formBuilder.group({
            url: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
    };
    PagesCreateComponent.prototype.create = function () {
        var _this = this;
        this.submitted = true;
        if (!this.pageForm.valid) {
            //eerorservice
            this.toast.error("oops neco se nezdarilo..zkontrolujte pole");
            return;
        }
        var data = {
            instance: window['instance_id'],
            url: this.pageForm.get("url").value,
            page_type: ""
        };
        this.pageService.createPage(data).then(function (data) {
            console.log(data);
            //TODO get id and set perms 
            _this.router.navigate(['redactor/pages']);
        }, function (error) {
            //todo errorhandler
            _this.submitted = false;
            console.log("error:" + error);
        });
    };
    PagesCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./pages.create.template.html */ "./src/app/common/modules/pages/create/pages.create.template.html"),
            styles: [__webpack_require__(/*! ./pages.create.styles.scss */ "./src/app/common/modules/pages/create/pages.create.styles.scss")]
        }),
        __metadata("design:paramtypes", [_pages_service__WEBPACK_IMPORTED_MODULE_4__["PagesService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PagesCreateComponent);
    return PagesCreateComponent;
}());



/***/ }),

/***/ "./src/app/common/modules/pages/create/pages.create.styles.scss":
/*!**********************************************************************!*\
  !*** ./src/app/common/modules/pages/create/pages.create.styles.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-header {\n  display: flex;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3JlbWVkaWFzL21lZWRpYXNfZnJvbnRlbmQvc3JjL2FwcC9jb21tb24vbW9kdWxlcy9wYWdlcy9jcmVhdGUvcGFnZXMuY3JlYXRlLnN0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYTtFQUNiLG9CQUFtQixFQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9tb2R1bGVzL3BhZ2VzL2NyZWF0ZS9wYWdlcy5jcmVhdGUuc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi1oZWFkZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufSAiXX0= */"

/***/ }),

/***/ "./src/app/common/modules/pages/create/pages.create.template.html":
/*!************************************************************************!*\
  !*** ./src/app/common/modules/pages/create/pages.create.template.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section-header\">\n    <h4 style=\"flex:1;\">Vytvořit stránku</h4>\n    <div class=\"btn btn-light mr-5\" routerLink=\"/redactor/pages\">\n            <!-- routerLink=\"/redactor/articles/create\" -->\n        <!-- <i class=\"fa fa-plus fa-2x\"></i> -->\n        Zpět\n    </div>\n</div>\n\n\n<form class=\"pt-4\" [formGroup]=\"pageForm\" *ngIf=\"loaded\" (ngSubmit)=\"create()\">\n      <div class=\"form-group\">\n        <label>Addresa stránky</label>\n        <input type=\"text\"  formControlName=\"url\"  class=\"form-control\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\">Vytvořit</button>\n</form>"

/***/ }),

/***/ "./src/app/common/modules/pages/edit/pages.edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/common/modules/pages/edit/pages.edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: PagesEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesEditComponent", function() { return PagesEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages.service */ "./src/app/common/modules/pages/pages.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PagesEditComponent = /** @class */ (function () {
    function PagesEditComponent(pageService, formBuilder, route, toast, router) {
        this.pageService = pageService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.toast = toast;
        this.router = router;
    }
    PagesEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loaded = false;
        this.route.paramMap.subscribe(function (params) { _this.pageId = params.get("pageId"); });
        this.pageService.getPageInfo(this.pageId).then(function (data) {
            _this.pageForm = _this.formBuilder.group({
                url: [data.url, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            });
            _this.loaded = true;
        });
    };
    PagesEditComponent.prototype.create = function () {
        var _this = this;
        this.submitted = true;
        if (!this.pageForm.valid) {
            //eerorservice
            this.toast.error("oops neco se nezdarilo..zkontrolujte pole");
            return;
        }
        var data = {
            instance: window['instance_id'],
            url: this.pageForm.get("url").value,
            page_type: ""
        };
        this.pageService.editPage(this.pageId, data).then(function (data) {
            console.log(data);
            //TODO get id and set perms 
            _this.router.navigate(['redactor/pages']);
        }, function (error) {
            //todo errorhandler
            _this.submitted = false;
            console.log("error:" + error);
        });
    };
    PagesEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./pages.edit.template.html */ "./src/app/common/modules/pages/edit/pages.edit.template.html"),
            styles: [__webpack_require__(/*! ./pages.edit.styles.scss */ "./src/app/common/modules/pages/edit/pages.edit.styles.scss")]
        }),
        __metadata("design:paramtypes", [_pages_service__WEBPACK_IMPORTED_MODULE_4__["PagesService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PagesEditComponent);
    return PagesEditComponent;
}());



/***/ }),

/***/ "./src/app/common/modules/pages/edit/pages.edit.styles.scss":
/*!******************************************************************!*\
  !*** ./src/app/common/modules/pages/edit/pages.edit.styles.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-header {\n  display: flex;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3JlbWVkaWFzL21lZWRpYXNfZnJvbnRlbmQvc3JjL2FwcC9jb21tb24vbW9kdWxlcy9wYWdlcy9lZGl0L3BhZ2VzLmVkaXQuc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2Isb0JBQW1CLEVBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL21vZHVsZXMvcGFnZXMvZWRpdC9wYWdlcy5lZGl0LnN0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24taGVhZGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0gIl19 */"

/***/ }),

/***/ "./src/app/common/modules/pages/edit/pages.edit.template.html":
/*!********************************************************************!*\
  !*** ./src/app/common/modules/pages/edit/pages.edit.template.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section-header\">\n    <h4 style=\"flex:1;\">Upravit stránku</h4>\n    <div class=\"btn btn-light mr-5\" routerLink=\"/redactor/pages\">\n            <!-- routerLink=\"/redactor/articles/create\" -->\n        <!-- <i class=\"fa fa-plus fa-2x\"></i> -->\n        Zpět\n    </div>\n</div>\n\n\n<form class=\"pt-4\" [formGroup]=\"pageForm\" *ngIf=\"loaded\" (ngSubmit)=\"create()\">\n      <div class=\"form-group\">\n        <label>Addresa stránky</label>\n        <input type=\"text\" formControlName=\"url\"  class=\"form-control\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\">Uložit</button>\n</form>"

/***/ }),

/***/ "./src/app/common/modules/pages/pages.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/common/modules/pages/pages.component.ts ***!
  \*********************************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages.service */ "./src/app/common/modules/pages/pages.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PagesComponent = /** @class */ (function () {
    function PagesComponent(pageService) {
        this.pageService = pageService;
    }
    PagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("big oof here");
        this.pageService.getPages().then(function (data) {
            _this.pages = data || [];
        });
    };
    PagesComponent.prototype.editPage = function (pageName) {
    };
    PagesComponent.prototype.deletePage = function (id) {
        var _this = this;
        this.pages.forEach(function (page) {
            if (page[1] == id) {
                var index = _this.pages.indexOf(page);
                _this.pages.splice(index, 1);
            }
        });
        console.log(id);
    };
    PagesComponent.prototype.replaceOrder = function (page) {
        var _this = this;
        var _a, _b;
        var id, position, currentPostition;
        _a = page.split('|'), id = _a[0], position = _a[1];
        this.pages.forEach(function (page) {
            if (page[1] == id) {
                currentPostition = _this.pages.indexOf(page);
            }
        });
        _b = [this.pages[currentPostition], this.pages[position]], this.pages[position] = _b[0], this.pages[currentPostition] = _b[1];
    };
    PagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./pages.template.html */ "./src/app/common/modules/pages/pages.template.html"),
            styles: [__webpack_require__(/*! ./pages.styles.scss */ "./src/app/common/modules/pages/pages.styles.scss")]
        }),
        __metadata("design:paramtypes", [_pages_service__WEBPACK_IMPORTED_MODULE_1__["PagesService"]])
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "./src/app/common/modules/pages/pages.routing.ts":
/*!*******************************************************!*\
  !*** ./src/app/common/modules/pages/pages.routing.ts ***!
  \*******************************************************/
/*! exports provided: pages_routes, routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pages_routes", function() { return pages_routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages.component */ "./src/app/common/modules/pages/pages.component.ts");
/* harmony import */ var _create_pages_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create/pages.create.component */ "./src/app/common/modules/pages/create/pages.create.component.ts");
/* harmony import */ var _edit_pages_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit/pages.edit.component */ "./src/app/common/modules/pages/edit/pages.edit.component.ts");



/**
 *
 *
 *
 */
// Actual moudule routes
var pages_routes = [
    {
        path: 'pages',
        loadChildren: 'src/app/common/modules/pages/pages.module#PagesModule'
    }
];
// Required for lazy-loading
var routes = [
    {
        path: '',
        component: _pages_component__WEBPACK_IMPORTED_MODULE_0__["PagesComponent"]
    },
    {
        path: 'create',
        component: _create_pages_create_component__WEBPACK_IMPORTED_MODULE_1__["PagesCreateComponent"]
    },
    {
        path: 'edit/:pageId',
        component: _edit_pages_edit_component__WEBPACK_IMPORTED_MODULE_2__["PagesEditComponent"]
    },
];


/***/ }),

/***/ "./src/app/common/modules/pages/pages.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/common/modules/pages/pages.service.ts ***!
  \*******************************************************/
/*! exports provided: PagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesService", function() { return PagesService; });
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




var PagesService = /** @class */ (function () {
    function PagesService(http, envService, cookies, authentication) {
        this.http = http;
        this.envService = envService;
        this.cookies = cookies;
        this.authentication = authentication;
    }
    PagesService.prototype.getPages = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.envService.read('apiUrl') + '/' + window['instance_id'] + '/pages').subscribe(resolve, reject);
        });
    };
    PagesService.prototype.getPageInfo = function (gridId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.envService.read('apiUrl') + '/grid/' + gridId).subscribe(resolve, reject);
        });
    };
    PagesService.prototype.deletePage = function (gridId) {
        var _this = this;
        var authinfo = this.authentication._authinfo.get();
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
            body: authinfo
        };
        return new Promise(function (resolve, reject) {
            _this.http.delete(_this.envService.read('apiUrl') + '/grid/' + gridId, options).subscribe(resolve, reject);
        });
    };
    PagesService.prototype.editPage = function (gridId, data) {
        var _this = this;
        var authinfo = this.authentication._authinfo.get();
        return new Promise(function (resolve, reject) {
            _this.http.patch(_this.envService.read('apiUrl') + '/grid/' + gridId, { auth_info: authinfo, grid: data }).subscribe(resolve, reject);
        });
    };
    PagesService.prototype.createPage = function (data) {
        var _this = this;
        var authinfo = this.authentication._authinfo.get();
        var grid = {
            auth_info: authinfo,
            grid: data
        };
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.envService.read('apiUrl') + '/grid/new', grid).subscribe(resolve, reject);
        });
    };
    PagesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            src_app_core_services__WEBPACK_IMPORTED_MODULE_2__["EnvironmentService"],
            src_app_core_services_cookies_cookies_service__WEBPACK_IMPORTED_MODULE_3__["CookiesService"],
            src_app_core_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], PagesService);
    return PagesService;
}());



/***/ }),

/***/ "./src/app/common/modules/pages/pages.styles.scss":
/*!********************************************************!*\
  !*** ./src/app/common/modules/pages/pages.styles.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-header {\n  display: flex;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3JlbWVkaWFzL21lZWRpYXNfZnJvbnRlbmQvc3JjL2FwcC9jb21tb24vbW9kdWxlcy9wYWdlcy9wYWdlcy5zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYixvQkFBbUIsRUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vbW9kdWxlcy9wYWdlcy9wYWdlcy5zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uLWhlYWRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/common/modules/pages/pages.template.html":
/*!**********************************************************!*\
  !*** ./src/app/common/modules/pages/pages.template.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section-header\">\n    <h4 class=\"pl-4\" style=\"flex:1;\">Stránky</h4>\n    <div class=\"btn btn-light mr-4\" routerLink=\"/redactor/pages/create\">\n            <!-- routerLink=\"/redactor/articles/create\" -->\n        <!-- <i class=\"fa fa-plus fa-2x\"></i> -->\n        Přidat\n    </div>\n</div>\n\n<div class=\"container pt-4\">\n    <div class=\"row\">\n\n        <div *ngFor=\"let page of pages\" class=\"col-sm-12 mb-2\">\n            <meedias-redactor-page (pageDeleted)=\"deletePage($event)\" (repalceOrder)=\"replaceOrder($event)\" [loadedPage]=\"page\"></meedias-redactor-page>\n        </div>\n\n    </div>\n</div>\n"

/***/ })

}]);
//# sourceMappingURL=default~src-app-common-modules-pages-pages-module~src-app-core-modules-redactor-redactor-module.js.map