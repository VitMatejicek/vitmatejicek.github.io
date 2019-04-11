(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-common-modules-articles-articles-module"],{

/***/ "./src/app/common/components/article/article.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/common/components/article/article.component.ts ***!
  \****************************************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_articles_models_Article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/articles/models/Article */ "./src/app/common/modules/articles/models/Article.ts");
/* harmony import */ var _modules_articles_articles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/articles/articles.service */ "./src/app/common/modules/articles/articles.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArticleComponent = /** @class */ (function () {
    function ArticleComponent(articleService) {
        this.articleService = articleService;
        //@Output() articleDeleted = new EventEmitter();
        this.articleDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        var article = this.loadedArticle;
        this.loaded = false;
        this.articleService.getArticle(this.loadedArticle.id).then(function (data) {
            //console.log(data);
            article.name = data.name;
            article.categories = data.categories;
            article.contents = data.contents;
            article.description = data.description;
            article.date = _this.humanReadableDate(data.datum);
            _this.loaded = true;
        });
        this.article = article;
    };
    ArticleComponent.prototype.deleteArticle = function (id) {
        var _this = this;
        this.loaded = false;
        this.articleService.deleteArticle(id).then(function () {
            _this.articleDeleted.emit(id);
        });
    };
    //Nothin too fancy here rn
    ArticleComponent.prototype.humanReadableDate = function (date) {
        var nonReadableDate = new Date(date); // type any
        var delta = Math.round((+new Date - nonReadableDate) / 1000);
        var minute = 60, hour = minute * 60, day = hour * 24, week = day * 7;
        var humanReadableDate;
        if (delta < 30) {
            humanReadableDate = 'právě ted';
        }
        else if (delta < minute) {
            humanReadableDate = 'před ' + delta + ' sekundami';
        }
        else if (delta < 2 * minute) {
            humanReadableDate = 'před minutou';
        }
        else if (delta < hour) {
            humanReadableDate = 'před ' + Math.floor(delta / minute) + ' minutami';
        }
        else if (Math.floor(delta / hour) == 1) {
            humanReadableDate = 'před hodinou';
        }
        else if (delta < day) {
            humanReadableDate = 'před ' + Math.floor(delta / hour) + ' hours ago.';
        }
        else if (delta < day * 2) {
            humanReadableDate = 'včera';
        }
        else if (delta < day * 6) {
            humanReadableDate = 'tenhle týden';
        }
        else if (delta < week) {
            humanReadableDate = 'minulý týden';
        }
        return humanReadableDate;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ArticleComponent.prototype, "articleDeleted", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _modules_articles_models_Article__WEBPACK_IMPORTED_MODULE_1__["Article"])
    ], ArticleComponent.prototype, "loadedArticle", void 0);
    ArticleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'meedias-redactor-article',
            template: __webpack_require__(/*! ./article.template.html */ "./src/app/common/components/article/article.template.html"),
            styles: [__webpack_require__(/*! ./article.styles.scss */ "./src/app/common/components/article/article.styles.scss")]
        }),
        __metadata("design:paramtypes", [_modules_articles_articles_service__WEBPACK_IMPORTED_MODULE_2__["ArticlesService"]])
    ], ArticleComponent);
    return ArticleComponent;
}());



/***/ }),

/***/ "./src/app/common/components/article/article.styles.scss":
/*!***************************************************************!*\
  !*** ./src/app/common/components/article/article.styles.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-top {\n  border-radius: 0.25rem;\n  color: #aaa;\n  font-family: 'Raleway',sans-serif;\n  font-size: 0.6rem;\n  font-weight: bold;\n  text-transform: uppercase; }\n\n.card-content-stats {\n  border: 1px solid lightgray;\n  text-align: center;\n  border-radius: 2px;\n  padding: 0.1rem; }\n\n.card-content-stats .ccs-subtext {\n    font-family: 'Raleway',sans-serif;\n    font-weight: 300;\n    font-size: 0.5rem;\n    text-transform: uppercase;\n    color: #999; }\n\n.card-content-stats .ccs-number {\n    font-size: 1.4rem;\n    font-weight: bold;\n    color: #333;\n    font-family: 'Raleway',sans-serif; }\n\n.card-stats .blue {\n  width: 80%;\n  height: 10px;\n  background-color: lightblue; }\n\n.card-stats .green {\n  width: 60%;\n  height: 10px;\n  background-color: lightgreen; }\n\n.card {\n  margin-top: 1.2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3JlbWVkaWFzL21lZWRpYXNfZnJvbnRlbmQvc3JjL2FwcC9jb21tb24vY29tcG9uZW50cy9hcnRpY2xlL2FydGljbGUuc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBc0I7RUFDdEIsWUFBVztFQUNYLGtDQUFpQztFQUNqQyxrQkFBaUI7RUFDakIsa0JBQWlCO0VBQ2pCLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLDRCQUEyQjtFQUMzQixtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLGdCQUFlLEVBZ0JsQjs7QUFwQkQ7SUFPUSxrQ0FBaUM7SUFDakMsaUJBQWdCO0lBQ2hCLGtCQUFpQjtJQUNqQiwwQkFBeUI7SUFDekIsWUFBVSxFQUNiOztBQVpMO0lBZVEsa0JBQWlCO0lBQ2pCLGtCQUFpQjtJQUNqQixZQUFVO0lBQ1Ysa0NBQWlDLEVBQ3BDOztBQUdMO0VBR1EsV0FBVTtFQUNWLGFBQVk7RUFDWiw0QkFBMkIsRUFDOUI7O0FBTkw7RUFRUSxXQUFVO0VBQ1YsYUFBWTtFQUNaLDZCQUE0QixFQUMvQjs7QUFHTDtFQUNJLG1CQUFrQixFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jb21wb25lbnRzL2FydGljbGUvYXJ0aWNsZS5zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLXRvcHtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgIGNvbG9yOiAjYWFhO1xuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDAuNnJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uY2FyZC1jb250ZW50LXN0YXRze1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIHBhZGRpbmc6IDAuMXJlbTtcblxuICAgIC5jY3Mtc3VidGV4dHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSYWxld2F5JyxzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBmb250LXNpemU6IDAuNXJlbTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgY29sb3I6Izk5OTtcbiAgICB9XG5cbiAgICAuY2NzLW51bWJlcntcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjojMzMzO1xuICAgICAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLHNhbnMtc2VyaWY7XG4gICAgfVxufVxuXG4uY2FyZC1zdGF0c3tcblxuICAgIC5ibHVle1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgICB9XG4gICAgLmdyZWVue1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XG4gICAgfVxufVxuXG4uY2FyZCB7XG4gICAgbWFyZ2luLXRvcDogMS4ycmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/common/components/article/article.template.html":
/*!*****************************************************************!*\
  !*** ./src/app/common/components/article/article.template.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-body\" *ngIf=\"!loaded\">\n        <meedias-spinner></meedias-spinner>\n    </div>\n    <div class=\"card-body pb-0 d-flex align-items-center\" *ngIf=\"loaded\">\n        <h6 class=\"card-title card-top float-left flex-grow-1\">Project</h6>\n        <h6 class=\"card-title card-top text-dark float-right\">{{article.date}}</h6>\n        <h6 class=\"card-title card-top text-dark pl-1 float-right\" (click)=\"deleteArticle(article.id)\">\n            <i class=\"fa fa-times fa-2x\"></i>\n        </h6>\n    </div>\n    <div class=\"card-body pt-0\" *ngIf=\"loaded\">\n        <div style=\"cursor: pointer;\" routerLink=\"/redactor/articles/edit/{{article.id}}\">\n            <p class=\"p-0 mb-0\">{{article.name}}</p>\n            <p class=\"p-0 small\">        \n                    {{ (article.description.length > 30)? (article.description | slice:0:25)+'..':(article.description) }}\n            </p>\n        </div>\n\n        <!-- <div class=\"row\">\n            <div class=\"col-sm-4 p-2\">\n                <div class=\"card-content-stats py-2\">\n                    <div class=\"ccs-number\"> 42</div>\n                    <div class=\"ccs-subtext\"> zhlednuti</div>\n                </div>\n            </div>\n            <div class=\"col-sm-4 p-2\">\n                <div class=\"card-content-stats py-2\">\n                    <div class=\"ccs-number\"> 8</div>\n                    <div class=\"ccs-subtext\"> komentářů</div>\n                </div>\n            </div>\n            <div class=\"col-md-4 p-2\">\n                <div class=\"card-content-stats py-2\">\n                    <div class=\"ccs-number\">2</div>\n                    <div class=\"ccs-subtext\">sdíleno</div>\n                </div>\n            </div>\n        </div>\n    -->\n    </div> \n    <!--\n        implement into data ... make into component \n    <div class=\"card-stats\">\n        <div class=\"green\"></div>\n        <div class=\"blue\"></div>\n    </div> -->\n</div>"

/***/ }),

/***/ "./src/app/common/modules/articles/articles.module.ts":
/*!************************************************************!*\
  !*** ./src/app/common/modules/articles/articles.module.ts ***!
  \************************************************************/
/*! exports provided: ArticlesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesModule", function() { return ArticlesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _create_article_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create/article.create.component */ "./src/app/common/modules/articles/create/article.create.component.ts");
/* harmony import */ var _articles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./articles.component */ "./src/app/common/modules/articles/articles.component.ts");
/* harmony import */ var _components_article_article_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/article/article.component */ "./src/app/common/components/article/article.component.ts");
/* harmony import */ var _articles_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./articles.service */ "./src/app/common/modules/articles/articles.service.ts");
/* harmony import */ var _articles_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./articles.routing */ "./src/app/common/modules/articles/articles.routing.ts");
/* harmony import */ var _edit_article_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit/article.edit.component */ "./src/app/common/modules/articles/edit/article.edit.component.ts");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/fesm5/ngx-quill.js");
/* harmony import */ var _categories_categories_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../categories/categories.service */ "./src/app/common/modules/categories/categories.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
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
var ArticlesModule = /** @class */ (function () {
    function ArticlesModule() {
    }
    ArticlesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _articles_component__WEBPACK_IMPORTED_MODULE_4__["ArticlesComponent"],
                _create_article_create_component__WEBPACK_IMPORTED_MODULE_3__["ArticlesCreateComponent"],
                _edit_article_edit_component__WEBPACK_IMPORTED_MODULE_8__["ArticlesEditComponent"],
                _components_article_article_component__WEBPACK_IMPORTED_MODULE_5__["ArticleComponent"] // items on page
            ],
            providers: [
                [{ provide: _articles_service__WEBPACK_IMPORTED_MODULE_6__["ArticlesService"], useClass: _articles_service__WEBPACK_IMPORTED_MODULE_6__["ArticlesService"] }],
                [{ provide: _categories_categories_service__WEBPACK_IMPORTED_MODULE_11__["CategoriesService"], useClass: _categories_categories_service__WEBPACK_IMPORTED_MODULE_11__["CategoriesService"] }],
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedMoudle"], ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_10__["QuillModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_articles_routing__WEBPACK_IMPORTED_MODULE_7__["routes"])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ArticlesModule);
    return ArticlesModule;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-common-modules-articles-articles-module.js.map