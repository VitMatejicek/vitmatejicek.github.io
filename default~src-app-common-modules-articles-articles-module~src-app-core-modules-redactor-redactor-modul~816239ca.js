(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~src-app-common-modules-articles-articles-module~src-app-core-modules-redactor-redactor-modul~816239ca"],{

/***/ "./src/app/common/modules/articles/articles.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/common/modules/articles/articles.component.ts ***!
  \***************************************************************/
/*! exports provided: ArticlesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesComponent", function() { return ArticlesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _articles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articles.service */ "./src/app/common/modules/articles/articles.service.ts");
/* harmony import */ var _models_Article__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/Article */ "./src/app/common/modules/articles/models/Article.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArticlesComponent = /** @class */ (function () {
    function ArticlesComponent(articleService) {
        this.articleService = articleService;
        this.articles = [];
    }
    ArticlesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.articleService.getArticles().then(function (data) {
            var articles = _this.articles;
            for (var i = 0; i < data.length; i++) {
                var element = data[i];
                var article = new _models_Article__WEBPACK_IMPORTED_MODULE_2__["Article"](element);
                articles.push(article);
            }
        });
    };
    ArticlesComponent.prototype.removeArticle = function (articleId) {
        var _this = this;
        this.articles.forEach(function (element) {
            if (element.id == articleId) {
                var index = _this.articles.indexOf(element);
                _this.articles.splice(index, 1);
            }
        });
    };
    ArticlesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./articles.template.html */ "./src/app/common/modules/articles/articles.template.html"),
            styles: [__webpack_require__(/*! ./articles.styles.scss */ "./src/app/common/modules/articles/articles.styles.scss")]
        }),
        __metadata("design:paramtypes", [_articles_service__WEBPACK_IMPORTED_MODULE_1__["ArticlesService"]])
    ], ArticlesComponent);
    return ArticlesComponent;
}());



/***/ }),

/***/ "./src/app/common/modules/articles/articles.routing.ts":
/*!*************************************************************!*\
  !*** ./src/app/common/modules/articles/articles.routing.ts ***!
  \*************************************************************/
/*! exports provided: articles_routes, routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articles_routes", function() { return articles_routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _articles_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./articles.component */ "./src/app/common/modules/articles/articles.component.ts");
/* harmony import */ var _create_article_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create/article.create.component */ "./src/app/common/modules/articles/create/article.create.component.ts");
/* harmony import */ var _edit_article_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit/article.edit.component */ "./src/app/common/modules/articles/edit/article.edit.component.ts");



/**
 *
 *
 *
 */
// Actual moudule routes
var articles_routes = [
    {
        path: 'articles',
        loadChildren: 'src/app/common/modules/articles/articles.module#ArticlesModule'
    }
];
// Required for lazy-loading
var routes = [
    {
        path: '',
        component: _articles_component__WEBPACK_IMPORTED_MODULE_0__["ArticlesComponent"]
    },
    {
        path: 'create',
        component: _create_article_create_component__WEBPACK_IMPORTED_MODULE_1__["ArticlesCreateComponent"]
    },
    {
        path: 'edit/:pageId',
        component: _edit_article_edit_component__WEBPACK_IMPORTED_MODULE_2__["ArticlesEditComponent"]
    },
];


/***/ }),

/***/ "./src/app/common/modules/articles/articles.styles.scss":
/*!**************************************************************!*\
  !*** ./src/app/common/modules/articles/articles.styles.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link {\n  border-radius: 0.25rem;\n  color: #aaa;\n  font-family: 'Raleway',sans-serif;\n  font-size: 0.6rem;\n  font-weight: bold;\n  text-transform: uppercase;\n  padding: .2rem; }\n\n.nav-item {\n  padding: 0;\n  margin-right: 1rem; }\n\n.nav-item.active {\n    border-bottom: 1px solid #00add9; }\n\n.add-button {\n  border-radius: 50%;\n  background-color: white;\n  width: 3rem;\n  text-align: center;\n  height: 3rem;\n  color: black;\n  display: flex;\n  align-items: center;\n  align-self: center;\n  justify-content: center;\n  box-shadow: 0px 0px 15px -10px #333; }\n\n.section-header {\n  display: flex;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3JlbWVkaWFzL21lZWRpYXNfZnJvbnRlbmQvc3JjL2FwcC9jb21tb24vbW9kdWxlcy9hcnRpY2xlcy9hcnRpY2xlcy5zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFzQjtFQUN0QixZQUFXO0VBQ1gsa0NBQWlDO0VBQ2pDLGtCQUFpQjtFQUNqQixrQkFBaUI7RUFDakIsMEJBQXlCO0VBQ3pCLGVBQWMsRUFFakI7O0FBRUQ7RUFDSSxXQUFVO0VBQ1YsbUJBQWtCLEVBS3JCOztBQVBEO0lBS1EsaUNBQWdDLEVBQ25DOztBQUlMO0VBQ0ksbUJBQWtCO0VBQ2xCLHdCQUF1QjtFQUN2QixZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLGFBQVk7RUFDWixhQUFZO0VBQ1osY0FBYTtFQUNiLG9CQUFtQjtFQUNuQixtQkFBa0I7RUFDbEIsd0JBQXVCO0VBQ3ZCLG9DQUFtQyxFQUN0Qzs7QUFFRDtFQUNJLGNBQWE7RUFDYixvQkFBbUIsRUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vbW9kdWxlcy9hcnRpY2xlcy9hcnRpY2xlcy5zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtbGlua3tcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgIGNvbG9yOiAjYWFhO1xuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDAuNnJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHBhZGRpbmc6IC4ycmVtO1xuXG59XG5cbi5uYXYtaXRlbSB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgXG4gICAgJi5hY3RpdmUge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwYWRkOTtcbiAgICB9XG59XG5cblxuLmFkZC1idXR0b257XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiAzcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IC0xMHB4ICMzMzM7XG59XG5cbi5zZWN0aW9uLWhlYWRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/common/modules/articles/articles.template.html":
/*!****************************************************************!*\
  !*** ./src/app/common/modules/articles/articles.template.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section-header\">\n    <h4 style=\"flex:1;\">Články</h4>\n    <div routerLink=\"/redactor/articles/create\" class=\"btn btn-light mr-5\">\n        <!-- <i class=\"fa fa-plus fa-2x\"></i> -->\n        Přidat\n    </div>\n</div>\n\n<ul class=\"nav nav-pills mb-3 mt-3\" id=\"pills-tab\" role=\"tablist\">\n    <li class=\"nav-item active\">\n        <div class=\"nav-link\" id=\"pills-home-tab\" data-toggle=\"pill\" role=\"tab\" aria-controls=\"pills-home\"\n            aria-selected=\"true\">Publikované</div>\n    </li>\n    <li class=\"nav-item\">\n        <div class=\"nav-link\" id=\"pills-profile-tab\" data-toggle=\"pill\" role=\"tab\" aria-controls=\"pills-profile\"\n            aria-selected=\"false\">Všechny</div>\n    </li>\n</ul>\n<div class=\"tab-content\" id=\"pills-tabContent\">\n    <div class=\"tab-pane fade show active\" id=\"pills-home\" role=\"tabpanel\" aria-labelledby=\"pills-home-tab\"></div>\n    <div class=\"tab-pane fade\" id=\"pills-profile\" role=\"tabpanel\" aria-labelledby=\"pills-profile-tab\"></div>\n    <div class=\"tab-pane fade\" id=\"pills-contact\" role=\"tabpanel\" aria-labelledby=\"pills-contact-tab\"></div>\n</div>\n\n\n<div class=\"container p-0\">\n    <div class=\"row\">\n            <!-- *ngFor=\"let item of items; let i = index\" -->\n        <div *ngFor=\"let article of articles\" class=\"col-sm-4\">\n            <meedias-redactor-article (articleDeleted)=\"removeArticle($event)\" [loadedArticle]=\"article\"></meedias-redactor-article>\n        </div>\n        \n    </div>\n</div> "

/***/ }),

/***/ "./src/app/common/modules/articles/create/article.create.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/common/modules/articles/create/article.create.component.ts ***!
  \****************************************************************************/
/*! exports provided: ArticlesCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesCreateComponent", function() { return ArticlesCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _articles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../articles.service */ "./src/app/common/modules/articles/articles.service.ts");
/* harmony import */ var _categories_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../categories/categories.service */ "./src/app/common/modules/categories/categories.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_core_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services */ "./src/app/core/services/index.ts");
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







var ArticlesCreateComponent = /** @class */ (function () {
    function ArticlesCreateComponent(authentication, categoryService, articleService, formBuilder, toast, router) {
        this.authentication = authentication;
        this.categoryService = categoryService;
        this.articleService = articleService;
        this.formBuilder = formBuilder;
        this.toast = toast;
        this.router = router;
        this.categoryids = [];
        this.categories = [];
        this.subcategories = [];
    }
    ArticlesCreateComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _loop_1, this_1, index;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loaded = false;
                        this.submitted = false;
                        this.articleForm = this.formBuilder.group({
                            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                            desc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                            image_url: [''],
                            category: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                            subcategory: [''],
                            content: ['']
                        });
                        return [4 /*yield*/, this.categoryService.getCategories().then(function (data) {
                                _this.categoryids = data;
                            })];
                    case 1:
                        _a.sent();
                        _loop_1 = function (index) {
                            var element = this_1.categoryids[index];
                            this_1.categoryService.getCategory(element).then(function (data) {
                                _this.categories.push(data);
                                if (index + 1 == _this.categoryids.length) {
                                    _this.loaded = true;
                                }
                            });
                        };
                        this_1 = this;
                        for (index = 0; index < this.categoryids.length; index++) {
                            _loop_1(index);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ArticlesCreateComponent.prototype.loadSubcategories = function () {
        var _this = this;
        this.subcategories = [];
        this.categories.forEach(function (element) {
            if (element.info.id == _this.articleForm.get('category').value) {
                if (element.sub.length < 1)
                    return;
                _this.categoryService.getCategory(element.sub).then(function (data) {
                    _this.subcategories.push(data);
                });
            }
        });
    };
    ArticlesCreateComponent.prototype.create = function () {
        var _this = this;
        console.log(this.articleForm);
        this.submitted = true;
        if (!this.articleForm.valid) {
            //eerorservice
            this.toast.error("oops neco se nezdarilo..zkontrolujte pole");
            return;
        }
        var categories = [];
        categories.push(this.articleForm.get('category').value);
        if (this.articleForm.get('subcategory').value != "") {
            categories.push(this.articleForm.get('subcategory').value);
        }
        console.log(categories);
        var data = {
            "author": this.authentication._credentials['id'],
            "contents": this.articleForm.get('content').value,
            "datum": new Date(),
            "name": this.articleForm.get('title').value,
            "location": "",
            "perms": [""],
            "tags": [""],
            "image_url": this.articleForm.get('image_url').value,
            "description": this.articleForm.get('desc').value,
            "categories": categories,
            "published": true,
        };
        console.log(data);
        this.articleService.createArticle(data).then(function (data) {
            console.log(data);
            _this.router.navigate(['/redactor/articles']);
        }, function (error) {
            _this.toast.error("oops neco se nezdarilo..zkontrolujte pole");
            //todo errorhandler
            _this.submitted = false;
            console.log("error:" + error);
        });
    };
    ArticlesCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./article.create.template.html */ "./src/app/common/modules/articles/create/article.create.template.html"),
            styles: [__webpack_require__(/*! ./article.create.styles.scss */ "./src/app/common/modules/articles/create/article.create.styles.scss")]
        }),
        __metadata("design:paramtypes", [src_app_core_services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
            _categories_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"],
            _articles_service__WEBPACK_IMPORTED_MODULE_1__["ArticlesService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ArticlesCreateComponent);
    return ArticlesCreateComponent;
}());



/***/ }),

/***/ "./src/app/common/modules/articles/create/article.create.styles.scss":
/*!***************************************************************************!*\
  !*** ./src/app/common/modules/articles/create/article.create.styles.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-header {\n  display: flex;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3JlbWVkaWFzL21lZWRpYXNfZnJvbnRlbmQvc3JjL2FwcC9jb21tb24vbW9kdWxlcy9hcnRpY2xlcy9jcmVhdGUvYXJ0aWNsZS5jcmVhdGUuc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2Isb0JBQW1CLEVBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL21vZHVsZXMvYXJ0aWNsZXMvY3JlYXRlL2FydGljbGUuY3JlYXRlLnN0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24taGVhZGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/common/modules/articles/create/article.create.template.html":
/*!*****************************************************************************!*\
  !*** ./src/app/common/modules/articles/create/article.create.template.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section-header\">\n    <h4 style=\"flex:1;\">Vytvořit článek</h4>\n    <div routerLink=\"/redactor/articles\" class=\"btn btn-light\">Zpět</div>\n</div>\n\n<form class=\"pt-5\" [formGroup]=\"articleForm\" (ngSubmit)=\"create()\"  *ngIf=\"loaded\">\n    <div class=\"form-group\">\n        <label for=\"title\">Titulek článku</label>\n        <input type=\"text\" formControlName=\"title\" class=\"form-control\" id=\"title\" >\n\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"title\">Url image</label>\n        <input type=\"text\" formControlName=\"image_url\" class=\"form-control\" id=\"image_url\" >\n\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"catrgory\">Kategorie a podkategorie</label>\n        <select formControlName=\"category\" (change)=\"loadSubcategories()\" class=\"form-control mb-1\">\n            <option [ngValue]=\"category.info.id\" *ngFor=\"let category of categories\">{{category.info.name}}</option>\n        </select>\n        <select formControlName=\"subcategory\" class=\"form-control\" *ngIf=\"subcategories.length > 0\">\n            <option [ngValue]=\"subcategory.info.id\" *ngFor=\"let subcategory of subcategories\">{{subcategory.info.name}}</option>\n        </select>\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"exampleFormControlTextarea1\">Popis článku</label>\n        <textarea class=\"form-control\" formControlName=\"desc\" rows=\"3\"></textarea>\n        <!-- <small id=\"emailHelp\" class=\"form-text text-muted\">stručný popis</small> -->\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"exampleFormControlTextarea1\">Obsah článku</label>\n        <quill-editor formControlName=\"content\" [style]=\"{height: '200px'}\" ></quill-editor>\n        <!-- (onEditorCreated)=\"setFocus($event)\" -->\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-primary\">Vytvořit</button>\n</form>\n\n<div class=\"pt-5\"  *ngIf=\"!loaded\">\n    <meedias-spinner></meedias-spinner>\n</div>\n"

/***/ }),

/***/ "./src/app/common/modules/articles/edit/article.edit.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/common/modules/articles/edit/article.edit.component.ts ***!
  \************************************************************************/
/*! exports provided: ArticlesEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesEditComponent", function() { return ArticlesEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _articles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../articles.service */ "./src/app/common/modules/articles/articles.service.ts");
/* harmony import */ var _categories_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../categories/categories.service */ "./src/app/common/modules/categories/categories.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_core_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services */ "./src/app/core/services/index.ts");
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







var ArticlesEditComponent = /** @class */ (function () {
    function ArticlesEditComponent(authentication, categoryService, articleService, formBuilder, route, toast, router) {
        this.authentication = authentication;
        this.categoryService = categoryService;
        this.articleService = articleService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.toast = toast;
        this.router = router;
        this.categoryids = [];
        this.categories = [];
        this.subcategories = [];
    }
    ArticlesEditComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _loop_1, this_1, index;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.route.paramMap.subscribe(function (params) { _this.articleId = params.get("pageId"); })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.articleService.getArticle(this.articleId).then(function (data) {
                                _this.articleData = data;
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.categoryService.getCategories().then(function (data) {
                                _this.categoryids = data;
                            })];
                    case 3:
                        _a.sent();
                        _loop_1 = function (index) {
                            var element = this_1.categoryids[index];
                            this_1.categoryService.getCategory(element).then(function (data) {
                                _this.categories.push(data);
                                if (index + 1 == _this.categoryids.length) {
                                    _this.loaded = true;
                                }
                            });
                        };
                        this_1 = this;
                        for (index = 0; index < this.categoryids.length; index++) {
                            _loop_1(index);
                        }
                        this.loaded = false;
                        this.submitted = false;
                        this.articleForm = this.formBuilder.group({
                            title: [this.articleData['name'], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                            desc: [this.articleData['description'], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                            category: [this.articleData.categories[0], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                            subcategory: [''],
                            image_url: [''],
                            content: [this.articleData.contents]
                        });
                        this.loadSubcategories();
                        return [2 /*return*/];
                }
            });
        });
    };
    ArticlesEditComponent.prototype.loadSubcategories = function () {
        var _this = this;
        this.subcategories = [];
        this.categories.forEach(function (element) {
            if (element.info.id == _this.articleForm.get('category').value) {
                if (element.sub.length < 1)
                    return;
                _this.categoryService.getCategory(element.sub).then(function (data) {
                    _this.subcategories.push(data);
                });
            }
        });
    };
    ArticlesEditComponent.prototype.create = function () {
        var _this = this;
        console.log(this.articleForm);
        this.submitted = true;
        if (!this.articleForm.valid) {
            //eerorservice
            this.toast.error("oops neco se nezdarilo..zkontrolujte pole");
            return;
        }
        var categories = [];
        categories.push(this.articleForm.get('category').value);
        if (this.articleForm.get('subcategory').value != "") {
            categories.push(this.articleForm.get('subcategory').value);
        }
        console.log(categories);
        var data = {
            "author": this.authentication._credentials['id'],
            "contents": this.articleForm.get('content').value,
            "datum": new Date(),
            "name": this.articleForm.get('title').value,
            "location": "",
            "perms": [""],
            "tags": [""],
            "image_url": this.articleForm.get('image_url').value,
            "description": this.articleForm.get('desc').value,
            "categories": categories
        };
        console.log(data);
        this.articleService.editArticle(data, this.articleId).then(function (data) {
            //spis toast tady
            _this.router.navigate(['/redactor/articles']);
        }, function (error) {
            _this.toast.error("oops neco se nezdarilo..zkontrolujte pole");
            //todo errorhandler
            _this.submitted = false;
            console.log("error:" + error);
        });
    };
    ArticlesEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./article.edit.template.html */ "./src/app/common/modules/articles/edit/article.edit.template.html"),
            styles: [__webpack_require__(/*! ./article.edit.styles.scss */ "./src/app/common/modules/articles/edit/article.edit.styles.scss")]
        }),
        __metadata("design:paramtypes", [src_app_core_services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
            _categories_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"],
            _articles_service__WEBPACK_IMPORTED_MODULE_1__["ArticlesService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ArticlesEditComponent);
    return ArticlesEditComponent;
}());



/***/ }),

/***/ "./src/app/common/modules/articles/edit/article.edit.styles.scss":
/*!***********************************************************************!*\
  !*** ./src/app/common/modules/articles/edit/article.edit.styles.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-header {\n  display: flex;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3JlbWVkaWFzL21lZWRpYXNfZnJvbnRlbmQvc3JjL2FwcC9jb21tb24vbW9kdWxlcy9hcnRpY2xlcy9lZGl0L2FydGljbGUuZWRpdC5zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYixvQkFBbUIsRUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vbW9kdWxlcy9hcnRpY2xlcy9lZGl0L2FydGljbGUuZWRpdC5zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uLWhlYWRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/common/modules/articles/edit/article.edit.template.html":
/*!*************************************************************************!*\
  !*** ./src/app/common/modules/articles/edit/article.edit.template.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section-header\">\n        <h4 style=\"flex:1;\">Upravit článek</h4>\n        <div routerLink=\"/redactor/articles\" class=\"btn btn-light\">Zpět</div>\n    </div>\n\n    <form class=\"pt-5\" [formGroup]=\"articleForm\" (ngSubmit)=\"create()\"  *ngIf=\"loaded\">\n        <div class=\"form-group\">\n            <label for=\"title\">Titulek článku</label>\n            <input type=\"text\" formControlName=\"title\" class=\"form-control\" id=\"title\" >\n\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"title\">Url image</label>\n            <input type=\"text\" formControlName=\"image_url\" class=\"form-control\" id=\"image_url\" >\n\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"catrgory\">Kategorie a podkategorie</label>\n            <select formControlName=\"category\" (change)=\"loadSubcategories()\" class=\"form-control mb-1\">\n                <option [ngValue]=\"category.info.id\" *ngFor=\"let category of categories\">{{category.info.name}}</option>\n            </select>\n            <select formControlName=\"subcategory\" class=\"form-control\" *ngIf=\"subcategories.length > 0\">\n                <option [ngValue]=\"subcategory.info.id\" *ngFor=\"let subcategory of subcategories\">{{subcategory.info.name}}</option>\n            </select>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"exampleFormControlTextarea1\">Popis článku</label>\n            <textarea class=\"form-control\" formControlName=\"desc\" rows=\"3\"></textarea>\n            <!-- <small id=\"emailHelp\" class=\"form-text text-muted\">stručný popis</small> -->\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"exampleFormControlTextarea1\">Obsah článku</label>\n            <quill-editor formControlName=\"content\" [style]=\"{height: '200px'}\" ></quill-editor>\n            <!-- (onEditorCreated)=\"setFocus($event)\" -->\n        </div>\n\n        <button type=\"submit\" class=\"btn btn-primary\">Vytvořit</button>\n    </form>\n\n    <div class=\"pt-5\"  *ngIf=\"!loaded\">\n        <meedias-spinner></meedias-spinner>\n    </div>\n"

/***/ }),

/***/ "./src/app/common/modules/articles/models/Article.ts":
/*!***********************************************************!*\
  !*** ./src/app/common/modules/articles/models/Article.ts ***!
  \***********************************************************/
/*! exports provided: Article */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return Article; });
var Article = /** @class */ (function () {
    function Article(id) {
        this.id = id;
        this.loaded = false;
    }
    return Article;
}());



/***/ })

}]);
//# sourceMappingURL=default~src-app-common-modules-articles-articles-module~src-app-core-modules-redactor-redactor-modul~816239ca.js.map