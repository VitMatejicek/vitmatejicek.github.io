(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~src-app-common-modules-articles-articles-module~src-app-core-modules-landing-landing-module~~27b9eab4"],{

/***/ "./src/app/common/modules/articles/articles.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/common/modules/articles/articles.service.ts ***!
  \*************************************************************/
/*! exports provided: ArticlesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesService", function() { return ArticlesService; });
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




var ArticlesService = /** @class */ (function () {
    function ArticlesService(http, envService, cookies, authentication) {
        this.http = http;
        this.envService = envService;
        this.cookies = cookies;
        this.authentication = authentication;
    }
    ArticlesService.prototype.getArticles = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.envService.read('apiUrl') + '/' + window['instance_id'] + '/content').subscribe(resolve, reject);
        });
    };
    ArticlesService.prototype.getByNth = function (order, start, amount) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.envService.read('apiUrl') + '/' + window['instance_id'] + '/content/by-date/' + order + '/' + start + '/' + amount).subscribe(resolve, reject);
        });
    };
    ArticlesService.prototype.getArticle = function (contentid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.envService.read('apiUrl') + '/' + window['instance_id'] + '/' + contentid).subscribe(resolve, reject);
        });
    };
    ArticlesService.prototype.deleteArticle = function (contentId) {
        var _this = this;
        var authinfo = this.authentication._authinfo.get();
        console.log(authinfo);
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
            body: authinfo
        };
        return new Promise(function (resolve, reject) {
            _this.http.delete(_this.envService.read('apiUrl') + '/' + window['instance_id'] + '/' + contentId, options).subscribe(resolve, reject);
        });
    };
    ArticlesService.prototype.createArticle = function (data) {
        var _this = this;
        var authinfo = this.authentication._authinfo.get();
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.envService.read('apiUrl') + '/' + window['instance_id'] + '/new', { "auth_info": authinfo, "content": data }).subscribe(resolve, reject);
        });
    };
    ArticlesService.prototype.editArticle = function (data, articleId) {
        return __awaiter(this, void 0, void 0, function () {
            var authinfo, name, desc, image_url, text;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        authinfo = this.authentication._authinfo.get();
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                _this.http.patch(_this.envService.read('apiUrl') + '/' + window['instance_id'] + '/' + articleId + '/name', { auth_info: authinfo, string: data.name }).subscribe(resolve, reject);
                            })];
                    case 1:
                        name = _a.sent();
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                _this.http.patch(_this.envService.read('apiUrl') + '/' + window['instance_id'] + '/' + articleId + '/description', { auth_info: authinfo, string: data.description }).subscribe(resolve, reject);
                            })];
                    case 2:
                        desc = _a.sent();
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                _this.http.patch(_this.envService.read('apiUrl') + '/' + window['instance_id'] + '/' + articleId + '/image_url', { auth_info: authinfo, string: data.image_url }).subscribe(resolve, reject);
                            })];
                    case 3:
                        image_url = _a.sent();
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                _this.http.patch(_this.envService.read('apiUrl') + '/' + window['instance_id'] + '/' + articleId + '/text', { auth_info: authinfo, string: data.contents }).subscribe(resolve, reject);
                            })];
                    case 4:
                        text = _a.sent();
                        return [2 /*return*/, { name: name, desc: desc, image_url: image_url, text: text }];
                }
            });
        });
    };
    ArticlesService.prototype.editArticleName = function (articleId, data) {
    };
    ArticlesService.prototype.editArticleDescription = function (articleId, data) {
    };
    ArticlesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            src_app_core_services__WEBPACK_IMPORTED_MODULE_3__["EnvironmentService"],
            src_app_core_services_cookies_cookies_service__WEBPACK_IMPORTED_MODULE_2__["CookiesService"],
            src_app_core_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], ArticlesService);
    return ArticlesService;
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
//# sourceMappingURL=default~src-app-common-modules-articles-articles-module~src-app-core-modules-landing-landing-module~~27b9eab4.js.map