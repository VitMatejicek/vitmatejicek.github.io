(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-common-modules-categories-categories-module"],{

/***/ "./src/app/common/components/category/category.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/common/components/category/category.component.ts ***!
  \******************************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_categories_categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/categories/categories.service */ "./src/app/common/modules/categories/categories.service.ts");
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



var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(categoryService, router) {
        this.categoryService = categoryService;
        this.router = router;
        this.categoryDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.subcategories = [];
    }
    CategoryComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _loop_1, this_1, index;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.detail = false;
                        this.loaded = false;
                        return [4 /*yield*/, this.categoryService.getCategory(this.loadedCategory).then(function (data) {
                                _this.category = data;
                                console.log(_this.category);
                                if (_this.category.sub.length == 0) {
                                    _this.loaded = true;
                                }
                            })];
                    case 1:
                        _a.sent();
                        if (this.category.sub.length != 0) {
                            _loop_1 = function (index) {
                                var element = this_1.category.sub[index];
                                this_1.categoryService.getCategory(element).then(function (data) {
                                    _this.subcategories.push(data);
                                    if (index + 1 == _this.category.sub.length) {
                                        _this.loaded = true;
                                    }
                                });
                            };
                            this_1 = this;
                            for (index = 0; index < this.category.sub.length; index++) {
                                _loop_1(index);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CategoryComponent.prototype.toggleDetail = function () {
        this.detail = (this.detail == true) ? false : true;
    };
    CategoryComponent.prototype.deleteCategory = function (id) {
        var _this = this;
        //TODO a modal i think would be nice here
        this.loaded = false;
        this.categoryService.deleteCategory(id).then(function () {
            _this.categoryDeleted.emit(id);
        });
    };
    CategoryComponent.prototype.editCategory = function (id) {
        var url = '/redactor/categories/edit/' + id;
        console.log(url);
        this.router.navigate([url]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CategoryComponent.prototype, "categoryDeleted", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CategoryComponent.prototype, "loadedCategory", void 0);
    CategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'meedias-redactor-category',
            template: __webpack_require__(/*! ./category.template.html */ "./src/app/common/components/category/category.template.html"),
            styles: [__webpack_require__(/*! ./category.styles.scss */ "./src/app/common/components/category/category.styles.scss")]
        }),
        __metadata("design:paramtypes", [_modules_categories_categories_service__WEBPACK_IMPORTED_MODULE_1__["CategoriesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/common/components/category/category.styles.scss":
/*!*****************************************************************!*\
  !*** ./src/app/common/components/category/category.styles.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".category-detail {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3JlbWVkaWFzL21lZWRpYXNfZnJvbnRlbmQvc3JjL2FwcC9jb21tb24vY29tcG9uZW50cy9jYXRlZ29yeS9jYXRlZ29yeS5zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFlLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL2NvbXBvbmVudHMvY2F0ZWdvcnkvY2F0ZWdvcnkuc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2F0ZWdvcnktZGV0YWlse1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/common/components/category/category.template.html":
/*!*******************************************************************!*\
  !*** ./src/app/common/components/category/category.template.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n        <div class=\"card-body pb-0\" *ngIf=\"loaded\">\n            <h6 class=\"card-title card-top float-left text-primary\">{{category.info.name}}</h6>\n            <h6 class=\"card-title card-top text-dark float-right category-detail\" (mousedown)=\"deleteCategory(category.info.id)\">delete</h6>\n            <h6 class=\"card-title card-top text-dark float-right pr-1 category-detail\" (mousedown)=\"editCategory(category.info.id)\">edit</h6>\n            <h6 class=\"card-title card-top text-secondary float-right pr-2 category-detail\" (mousedown)=\"toggleDetail()\" *ngIf=\"category.sub.length == 0\">detail</h6>\n        </div>\n        <div class=\"card-body pt-0 pb-0\" *ngIf=\"loaded\">\n                <p class=\"p-0 small\">some description</p>\n        </div>\n        <div class=\"card-body pt-0\" *ngIf=\"loaded && category.sub.length > 0 && !detail\">\n            <p class=\"p-0 mb-0 pt-0 small text-dark\"><b>Podkategorie:</b></p>\n            <p class=\"p-0 mb-0 pt-0 small text-secondary\" *ngFor=\"let sub of subcategories; let i = index;\">{{sub.info.name}}</p>\n        </div>\n        <div class=\"card-body pt-0\" *ngIf=\"detail && category.sub.length == 0\">\n            detail\n        </div>\n        <div class=\"card-body\" *ngIf=\"!loaded\">\n            <meedias-spinner></meedias-spinner>\n        </div>\n</div>"

/***/ }),

/***/ "./src/app/common/modules/categories/categories.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/common/modules/categories/categories.module.ts ***!
  \****************************************************************/
/*! exports provided: CategoriesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesModule", function() { return CategoriesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _categories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories.component */ "./src/app/common/modules/categories/categories.component.ts");
/* harmony import */ var _categories_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categories.routing */ "./src/app/common/modules/categories/categories.routing.ts");
/* harmony import */ var _categories_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categories.service */ "./src/app/common/modules/categories/categories.service.ts");
/* harmony import */ var _components_category_category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/category/category.component */ "./src/app/common/components/category/category.component.ts");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _create_categories_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create/categories.create.component */ "./src/app/common/modules/categories/create/categories.create.component.ts");
/* harmony import */ var _edit_categories_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit/categories.edit.component */ "./src/app/common/modules/categories/edit/categories.edit.component.ts");
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
var CategoriesModule = /** @class */ (function () {
    function CategoriesModule() {
    }
    CategoriesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _create_categories_create_component__WEBPACK_IMPORTED_MODULE_8__["CategoriesCreateComponent"],
                _edit_categories_edit_component__WEBPACK_IMPORTED_MODULE_9__["CategoriesEditComponent"],
                _categories_component__WEBPACK_IMPORTED_MODULE_3__["CategoriesComponent"],
                _components_category_category_component__WEBPACK_IMPORTED_MODULE_6__["CategoryComponent"]
            ],
            providers: [
                [{ provide: _categories_service__WEBPACK_IMPORTED_MODULE_5__["CategoriesService"], useClass: _categories_service__WEBPACK_IMPORTED_MODULE_5__["CategoriesService"] }],
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedMoudle"], ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_categories_routing__WEBPACK_IMPORTED_MODULE_4__["routes"])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CategoriesModule);
    return CategoriesModule;
}());



/***/ }),

/***/ "./src/app/common/modules/categories/categories.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/common/modules/categories/categories.service.ts ***!
  \*****************************************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_core_services_cookies_cookies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/cookies/cookies.service */ "./src/app/core/services/cookies/cookies.service.ts");
/* harmony import */ var src_app_core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services */ "./src/app/core/services/index.ts");
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




var CategoriesService = /** @class */ (function () {
    function CategoriesService(http, envService, cookies, authentication) {
        this.http = http;
        this.envService = envService;
        this.cookies = cookies;
        this.authentication = authentication;
    }
    CategoriesService.prototype.getCategories = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.envService.read('apiUrl') + '/category/by-owner/' + window['instance_id']).subscribe(resolve, reject);
        });
    };
    CategoriesService.prototype.getCategory = function (categoryid) {
        return __awaiter(this, void 0, void 0, function () {
            var categoryInfo, subcategories;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCategoryInfo(categoryid).then(function (data) { categoryInfo = data; }, function (error) {
                            console.log("unable to load category info");
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getSubcategories(categoryid).then(function (data) { subcategories = data; }, function (error) {
                                console.log("unable to load subcategories");
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, { "info": categoryInfo, "sub": subcategories }];
                }
            });
        });
    };
    CategoriesService.prototype.getCategoryInfo = function (categoryid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.envService.read('apiUrl') + '/' + window['instance_id'] + '/category/' + categoryid).subscribe(resolve, reject);
        });
    };
    CategoriesService.prototype.getSubcategories = function (categoryid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.envService.read('apiUrl') + '/' + window['instance_id'] + '/category/' + categoryid + '/children').subscribe(resolve, reject);
        });
    };
    CategoriesService.prototype.deleteCategory = function (categoryid) {
        var _this = this;
        var authinfo = this.authentication._authinfo.get();
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
            body: authinfo
        };
        return new Promise(function (resolve, reject) {
            _this.http.delete(_this.envService.read('apiUrl') + '/' + window['instance_id'] + '/category/' + categoryid, options).subscribe(resolve, reject);
        });
    };
    CategoriesService.prototype.createCategory = function (data) {
        var _this = this;
        var authinfo = this.authentication._authinfo.get();
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.envService.read('apiUrl') + '/' + window['instance_id'] + '/category', { "auth_info": authinfo, "category": data }).subscribe(resolve, reject);
        });
    };
    CategoriesService.prototype.editCategory = function (categoryId, data) {
        var _this = this;
        var authinfo = this.authentication._authinfo.get();
        return new Promise(function (resolve, reject) {
            _this.http.patch(_this.envService.read('apiUrl') + '/' + window['instance_id'] + '/category/' + categoryId + '/name', { "auth_info": authinfo, "string": data['name'] }).subscribe(resolve, reject);
        });
    };
    CategoriesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            src_app_core_services__WEBPACK_IMPORTED_MODULE_3__["EnvironmentService"],
            src_app_core_services_cookies_cookies_service__WEBPACK_IMPORTED_MODULE_2__["CookiesService"],
            src_app_core_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], CategoriesService);
    return CategoriesService;
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
//# sourceMappingURL=src-app-common-modules-categories-categories-module.js.map