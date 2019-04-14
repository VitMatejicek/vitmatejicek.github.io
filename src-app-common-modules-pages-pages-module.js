(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-common-modules-pages-pages-module"],{

/***/ "./src/app/common/components/page/page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/common/components/page/page.component.ts ***!
  \**********************************************************/
/*! exports provided: PageOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageOverviewComponent", function() { return PageOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_pages_pages_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/pages/pages.service */ "./src/app/common/modules/pages/pages.service.ts");
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



var PageOverviewComponent = /** @class */ (function () {
    function PageOverviewComponent(pageService, router) {
        this.pageService = pageService;
        this.router = router;
        this.pageDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.repalceOrder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PageOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("init pyčo");
        console.log(this.loadedPage);
        this.loaded = false;
        this.pageService.getPageInfo(this.loadedPage[1]).then(function (data) {
            _this.page = data || [];
            _this.loaded = true;
            // Tohle asi nutne predelat na backend
            _this.placeInArrayOrder();
        });
    };
    PageOverviewComponent.prototype.pageDelete = function (id) {
        var _this = this;
        this.loaded = false;
        this.pageService.deletePage(id).then(function () {
            _this.pageDeleted.emit(id);
        });
    };
    PageOverviewComponent.prototype.editPage = function (id) {
        var url = 'redactor/pages/edit/' + id;
        this.router.navigate([url]);
    };
    PageOverviewComponent.prototype.placeInArrayOrder = function () {
        // Tohle asi nutne predelat na backend
        switch (this.page.page_type) {
            case 'index':
                this.repalceOrder.emit(this.page.id + '|0');
                break;
            case 'article':
                this.repalceOrder.emit(this.page.id + '|1');
                break;
            case 'categories':
                this.repalceOrder.emit(this.page.id + '|2');
                break;
            case '':
                break;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PageOverviewComponent.prototype, "pageDeleted", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PageOverviewComponent.prototype, "repalceOrder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PageOverviewComponent.prototype, "loadedPage", void 0);
    PageOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'meedias-redactor-page',
            template: __webpack_require__(/*! ./page.template.html */ "./src/app/common/components/page/page.template.html"),
            styles: [__webpack_require__(/*! ./page.styles.scss */ "./src/app/common/components/page/page.styles.scss")]
        }),
        __metadata("design:paramtypes", [_modules_pages_pages_service__WEBPACK_IMPORTED_MODULE_1__["PagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PageOverviewComponent);
    return PageOverviewComponent;
}());



/***/ }),

/***/ "./src/app/common/components/page/page.styles.scss":
/*!*********************************************************!*\
  !*** ./src/app/common/components/page/page.styles.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  border: 1px solid #ededed;\n  box-shadow: 0 1px 15px 0 rgba(123, 123, 123, 0.05) !important; }\n\n.ccli {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3JlbWVkaWFzL21lZWRpYXNfZnJvbnRlbmQvc3JjL2FwcC9jb21tb24vY29tcG9uZW50cy9wYWdlL3BhZ2Uuc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBeUI7RUFFekIsOERBQXdELEVBQzNEOztBQUVEO0VBQ0MsZ0JBQWMsRUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jb21wb25lbnRzL3BhZ2UvcGFnZS5zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWRlZGVkO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMTVweCAwIGhzbGEoMCwwJSw0OC4yJSwuMDUpICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMTVweCAwIGhzbGEoMCwwJSw0OC4yJSwuMDUpICFpbXBvcnRhbnQ7XG59XG5cbi5jY2xpIHtcbiBjdXJzb3I6cG9pbnRlcjtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/common/components/page/page.template.html":
/*!***********************************************************!*\
  !*** ./src/app/common/components/page/page.template.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n        <div *ngIf=\"loaded\" class=\"card-body pb-0\">\n            <h6 class=\"card-title card-top float-left mr-2\">{{page.url}}</h6>\n\n\n            <div *ngIf=\"page.page_type == 'index'\" class=\"card-title card-top float-left small ml-1 text-secondary\">\n                index/\n            </div>\n            <div *ngIf=\"page.page_type == 'article'\" class=\"card-title card-top float-left small ml-1 text-secondary\">\n                article/*jmeno-clanku*\n            </div>\n            <div *ngIf=\"page.page_type == 'categories'\" class=\"card-title card-top float-left small ml-1 text-secondary\">\n                categories/*jmeno-categorie*\n            </div>\n            <div *ngIf=\"page.page_type == 'page' || page.page_type == ''\" class=\"card-title card-top float-left small ml-1 text-secondary\">\n                page/{{page.url}}\n            </div>\n\n\n            <h6 *ngIf=\"page.page_type == ''\" class=\"card-title card-top text-dark ccli float-right px-1\" (mousedown)=\"editPage(page)\" (mousedown)=\"editPage(page.id)\">změnit</h6>\n            <h6 *ngIf=\"page.page_type == ''\" class=\"card-title card-top text-dark ccli float-right px-1\" (mousedown)=\"pageDelete(page.id)\">smazat</h6>\n            <h6 class=\"card-title card-top text-dark float-right px-1 ccli\" target=\"_blank\" routerLink=\"/page/{{page.url}}\"><i>editor</i></h6>\n        </div>\n        <div *ngIf=\"loaded\" class=\"card-body pt-0\">\n            <p class=\"p-0 mb-0\">Nějaký popisek </p>\n            <p class=\"p-0 small\">Nějký info o téhle stránce</p>\n        </div>\n        <div *ngIf=\"!loaded\"  class=\"card-body pt-0\">\n            <meedias-spinner></meedias-spinner>\n        </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/common/modules/pages/pages.module.ts":
/*!******************************************************!*\
  !*** ./src/app/common/modules/pages/pages.module.ts ***!
  \******************************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages.component */ "./src/app/common/modules/pages/pages.component.ts");
/* harmony import */ var _pages_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages.routing */ "./src/app/common/modules/pages/pages.routing.ts");
/* harmony import */ var _pages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages.service */ "./src/app/common/modules/pages/pages.service.ts");
/* harmony import */ var _components_page_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/page/page.component */ "./src/app/common/components/page/page.component.ts");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _edit_pages_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit/pages.edit.component */ "./src/app/common/modules/pages/edit/pages.edit.component.ts");
/* harmony import */ var _create_pages_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./create/pages.create.component */ "./src/app/common/modules/pages/create/pages.create.component.ts");
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
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _pages_component__WEBPACK_IMPORTED_MODULE_3__["PagesComponent"],
                _components_page_page_component__WEBPACK_IMPORTED_MODULE_6__["PageOverviewComponent"],
                _edit_pages_edit_component__WEBPACK_IMPORTED_MODULE_10__["PagesEditComponent"],
                _create_pages_create_component__WEBPACK_IMPORTED_MODULE_11__["PagesCreateComponent"]
            ],
            providers: [[{ provide: _pages_service__WEBPACK_IMPORTED_MODULE_5__["PagesService"], useClass: _pages_service__WEBPACK_IMPORTED_MODULE_5__["PagesService"] }]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedMoudle"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_pages_routing__WEBPACK_IMPORTED_MODULE_4__["routes"])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PagesModule);
    return PagesModule;
}());



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
//# sourceMappingURL=src-app-common-modules-pages-pages-module.js.map