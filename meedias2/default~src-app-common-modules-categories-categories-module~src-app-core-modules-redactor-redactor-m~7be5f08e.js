(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~src-app-common-modules-categories-categories-module~src-app-core-modules-redactor-redactor-m~7be5f08e"],{

/***/ "./src/app/common/modules/categories/categories.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/common/modules/categories/categories.component.ts ***!
  \*******************************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories.service */ "./src/app/common/modules/categories/categories.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(categoryServie) {
        this.categoryServie = categoryServie;
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryServie.getCategories().then(function (data) {
            _this.categories = data;
        });
    };
    CategoriesComponent.prototype.removeCategory = function (category) {
        var _this = this;
        this.categories.forEach(function (element) {
            if (category == element) {
                var index = _this.categories.indexOf(category);
                _this.categories.splice(index, 1);
            }
        });
    };
    CategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./categories.template.html */ "./src/app/common/modules/categories/categories.template.html"),
            styles: [__webpack_require__(/*! ./categories.styles.scss */ "./src/app/common/modules/categories/categories.styles.scss")]
        }),
        __metadata("design:paramtypes", [_categories_service__WEBPACK_IMPORTED_MODULE_1__["CategoriesService"]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/common/modules/categories/categories.routing.ts":
/*!*****************************************************************!*\
  !*** ./src/app/common/modules/categories/categories.routing.ts ***!
  \*****************************************************************/
/*! exports provided: categories_routes, routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categories_routes", function() { return categories_routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _categories_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories.component */ "./src/app/common/modules/categories/categories.component.ts");
/* harmony import */ var _create_categories_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create/categories.create.component */ "./src/app/common/modules/categories/create/categories.create.component.ts");
/* harmony import */ var _edit_categories_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit/categories.edit.component */ "./src/app/common/modules/categories/edit/categories.edit.component.ts");



/**
 *
 *
 *
 */
// Actual moudule routes
var categories_routes = [
    {
        path: 'categories',
        loadChildren: 'src/app/common/modules/categories/categories.module#CategoriesModule'
    }
];
// Required for lazy-loading
var routes = [
    {
        path: '',
        component: _categories_component__WEBPACK_IMPORTED_MODULE_0__["CategoriesComponent"]
    },
    {
        path: 'create',
        component: _create_categories_create_component__WEBPACK_IMPORTED_MODULE_1__["CategoriesCreateComponent"]
    },
    {
        path: 'edit/:categoryId',
        component: _edit_categories_edit_component__WEBPACK_IMPORTED_MODULE_2__["CategoriesEditComponent"]
    },
];


/***/ }),

/***/ "./src/app/common/modules/categories/categories.styles.scss":
/*!******************************************************************!*\
  !*** ./src/app/common/modules/categories/categories.styles.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-header {\n  display: flex;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3JlbWVkaWFzL21lZWRpYXNfZnJvbnRlbmQvc3JjL2FwcC9jb21tb24vbW9kdWxlcy9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2Isb0JBQW1CLEVBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL21vZHVsZXMvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLnN0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24taGVhZGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/common/modules/categories/categories.template.html":
/*!********************************************************************!*\
  !*** ./src/app/common/modules/categories/categories.template.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section-header\">\n    <h4 style=\"flex:1;\">Kategorie</h4>\n    <div routerLink=\"/redactor/categories/create\" class=\"btn btn-light\">\n        <!-- <i class=\"fa fa-plus fa-2x\"></i> -->\n        Přidat\n    </div>\n</div>\n    \n\n<div class=\"container px-0 pt-4\">\n    <div class=\"row\">\n        <div *ngFor=\"let category of categories\" class=\"col-sm-12 mb-2\">\n            <meedias-redactor-category (categoryDeleted)=\"removeCategory($event)\" [loadedCategory]=\"category\"></meedias-redactor-category>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/common/modules/categories/create/categories.create.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/common/modules/categories/create/categories.create.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CategoriesCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesCreateComponent", function() { return CategoriesCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_core_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _categories_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../categories.service */ "./src/app/common/modules/categories/categories.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CategoriesCreateComponent = /** @class */ (function () {
    function CategoriesCreateComponent(authentication, categoryService, formBuilder, toast, router) {
        this.authentication = authentication;
        this.categoryService = categoryService;
        this.formBuilder = formBuilder;
        this.toast = toast;
        this.router = router;
    }
    CategoriesCreateComponent.prototype.ngOnInit = function () {
        this.loaded = true;
        this.categoryForm = this.formBuilder.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
    };
    CategoriesCreateComponent.prototype.create = function () {
        var _this = this;
        this.submitted = true;
        if (!this.categoryForm.valid) {
            //eerorservice
            this.toast.error("oops neco se nezdarilo..zkontrolujte pole");
            return;
        }
        var data = {
            "slug": this.categoryForm.get("title").value.split(' ').join(''),
            "name": this.categoryForm.get("title").value,
            "parent": null,
            "perms": [""]
        };
        this.categoryService.createCategory(data).then(function (data) {
            console.log(data);
            _this.router.navigate(['redactor/categories']);
        }, function (error) {
            //todo errorhandler
            _this.submitted = false;
            console.log("error:" + error);
        });
    };
    CategoriesCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./categories.create.template.html */ "./src/app/common/modules/categories/create/categories.create.template.html"),
            styles: [__webpack_require__(/*! ./categories.create.styles.scss */ "./src/app/common/modules/categories/create/categories.create.styles.scss")]
        }),
        __metadata("design:paramtypes", [src_app_core_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _categories_service__WEBPACK_IMPORTED_MODULE_5__["CategoriesService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CategoriesCreateComponent);
    return CategoriesCreateComponent;
}());



/***/ }),

/***/ "./src/app/common/modules/categories/create/categories.create.styles.scss":
/*!********************************************************************************!*\
  !*** ./src/app/common/modules/categories/create/categories.create.styles.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-header {\n  display: flex;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3JlbWVkaWFzL21lZWRpYXNfZnJvbnRlbmQvc3JjL2FwcC9jb21tb24vbW9kdWxlcy9jYXRlZ29yaWVzL2NyZWF0ZS9jYXRlZ29yaWVzLmNyZWF0ZS5zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYixvQkFBbUIsRUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vbW9kdWxlcy9jYXRlZ29yaWVzL2NyZWF0ZS9jYXRlZ29yaWVzLmNyZWF0ZS5zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uLWhlYWRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/common/modules/categories/create/categories.create.template.html":
/*!**********************************************************************************!*\
  !*** ./src/app/common/modules/categories/create/categories.create.template.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section-header\">\n    <h4 style=\"flex:1;\">Vytvořit kategorii</h4>\n    <div routerLink=\"/redactor/categories\" class=\"btn btn-light\">Zpět</div>\n</div>\n\n\n<form *ngIf=\"loaded\" class=\"pt-4\" [formGroup]=\"categoryForm\" (ngSubmit)=\"create()\">\n    <div class=\"form-group\">\n        <label for=\"title\">Titulek kategorie</label>\n        <input type=\"text\" formControlName=\"title\" class=\"form-control\" id=\"title\" >\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-primary\">Vytvořit</button>\n</form>\n\n<div class=\"pt-5\"  *ngIf=\"!loaded\">\n    <meedias-spinner></meedias-spinner>\n</div>"

/***/ }),

/***/ "./src/app/common/modules/categories/edit/categories.edit.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/common/modules/categories/edit/categories.edit.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CategoriesEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesEditComponent", function() { return CategoriesEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _categories_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../categories.service */ "./src/app/common/modules/categories/categories.service.ts");
/* harmony import */ var src_app_core_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services */ "./src/app/core/services/index.ts");
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






var CategoriesEditComponent = /** @class */ (function () {
    function CategoriesEditComponent(authentication, categoryService, formBuilder, route, toast, router) {
        this.authentication = authentication;
        this.categoryService = categoryService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.toast = toast;
        this.router = router;
    }
    CategoriesEditComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.route.paramMap.subscribe(function (params) { _this.categoryId = params.get("categoryId"); })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.categoryService.getCategory(this.categoryId).then(function (data) {
                                console.log(data);
                                _this.loaded = true;
                                _this.categoryForm = _this.formBuilder.group({
                                    title: [data.info.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
                                });
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CategoriesEditComponent.prototype.create = function () {
        var _this = this;
        this.submitted = true;
        if (!this.categoryForm.valid) {
            //eerorservice
            this.toast.error("oops neco se nezdarilo..zkontrolujte pole");
            return;
        }
        var data = {
            "slug": this.categoryForm.get("title").value.split(' ').join(''),
            "name": this.categoryForm.get("title").value,
            "parent": null,
            "perms": [""]
        };
        this.categoryService.editCategory(this.categoryId, data).then(function (data) {
            console.log(data);
            _this.router.navigate(['redactor/categories']);
        }, function (error) {
            //todo errorhandler
            _this.submitted = false;
            console.log("error:" + error);
        });
    };
    CategoriesEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./categories.edit.template.html */ "./src/app/common/modules/categories/edit/categories.edit.template.html"),
            styles: [__webpack_require__(/*! ./categories.edit.styles.scss */ "./src/app/common/modules/categories/edit/categories.edit.styles.scss")]
        }),
        __metadata("design:paramtypes", [src_app_core_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _categories_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CategoriesEditComponent);
    return CategoriesEditComponent;
}());



/***/ }),

/***/ "./src/app/common/modules/categories/edit/categories.edit.styles.scss":
/*!****************************************************************************!*\
  !*** ./src/app/common/modules/categories/edit/categories.edit.styles.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-header {\n  display: flex;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3JlbWVkaWFzL21lZWRpYXNfZnJvbnRlbmQvc3JjL2FwcC9jb21tb24vbW9kdWxlcy9jYXRlZ29yaWVzL2VkaXQvY2F0ZWdvcmllcy5lZGl0LnN0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYTtFQUNiLG9CQUFtQixFQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9tb2R1bGVzL2NhdGVnb3JpZXMvZWRpdC9jYXRlZ29yaWVzLmVkaXQuc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi1oZWFkZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/common/modules/categories/edit/categories.edit.template.html":
/*!******************************************************************************!*\
  !*** ./src/app/common/modules/categories/edit/categories.edit.template.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section-header\">\n    <h4 style=\"flex:1;\">Upravit kategorii</h4>\n    <div routerLink=\"/redactor/categories\" class=\"btn btn-light\">Zpět</div>\n</div>\n\n\n<form *ngIf=\"loaded\" class=\"pt-4\" [formGroup]=\"categoryForm\" (ngSubmit)=\"create()\">\n    <div class=\"form-group\">\n        <label for=\"title\">Titulek kategorie</label>\n        <input type=\"text\" formControlName=\"title\" class=\"form-control\" id=\"title\" >\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-primary\">Upravit</button>\n</form>\n\n<div class=\"pt-5\"  *ngIf=\"!loaded\">\n    <meedias-spinner></meedias-spinner>\n</div>"

/***/ })

}]);
//# sourceMappingURL=default~src-app-common-modules-categories-categories-module~src-app-core-modules-redactor-redactor-m~7be5f08e.js.map