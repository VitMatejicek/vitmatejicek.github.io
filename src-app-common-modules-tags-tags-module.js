(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-common-modules-tags-tags-module"],{

/***/ "./src/app/common/components/tag/tag.component.ts":
/*!********************************************************!*\
  !*** ./src/app/common/components/tag/tag.component.ts ***!
  \********************************************************/
/*! exports provided: TagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagComponent", function() { return TagComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_tags_tags_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/tags/tags.service */ "./src/app/common/modules/tags/tags.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TagComponent = /** @class */ (function () {
    function TagComponent(tagService) {
        this.tagService = tagService;
        this.tagDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TagComponent.prototype.ngOnInit = function () {
        this.loaded = false;
        this.tag = this.loadedTag;
        this.loaded = true;
    };
    TagComponent.prototype.deleteTag = function (id) {
        this.loaded = false;
        //this.categoryService.deleteCategory(id).then(() => {
        this.tagDeleted.emit(id);
        //});
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TagComponent.prototype, "tagDeleted", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TagComponent.prototype, "loadedTag", void 0);
    TagComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'meedias-redactor-tag',
            template: __webpack_require__(/*! ./tag.template.html */ "./src/app/common/components/tag/tag.template.html"),
            styles: [__webpack_require__(/*! ./tag.styles.scss */ "./src/app/common/components/tag/tag.styles.scss")]
        }),
        __metadata("design:paramtypes", [_modules_tags_tags_service__WEBPACK_IMPORTED_MODULE_1__["TagsService"]])
    ], TagComponent);
    return TagComponent;
}());



/***/ }),

/***/ "./src/app/common/components/tag/tag.styles.scss":
/*!*******************************************************!*\
  !*** ./src/app/common/components/tag/tag.styles.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jb21wb25lbnRzL3RhZy90YWcuc3R5bGVzLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/common/components/tag/tag.template.html":
/*!*********************************************************!*\
  !*** ./src/app/common/components/tag/tag.template.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"card\">\n        <div class=\"card-body pb-0\">\n            <h6 class=\"card-title card-top float-left small\"><b>upravit</b></h6>\n            <h6 class=\"card-title card-top float-right text-danger small\">smazat</h6>\n        </div>\n        <div class=\"card-body pb-0 pt-0\">\n            <h6 class=\"card-title card-top float-left\">{{tag}}</h6>\n        </div>\n        <div class=\"card-body pt-0\">\n            <p class=\"p-0 small\">Text tagu</p>\n        </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/common/modules/tags/tags.module.ts":
/*!****************************************************!*\
  !*** ./src/app/common/modules/tags/tags.module.ts ***!
  \****************************************************/
/*! exports provided: TagsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsModule", function() { return TagsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tags_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tags.component */ "./src/app/common/modules/tags/tags.component.ts");
/* harmony import */ var _tags_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tags.routing */ "./src/app/common/modules/tags/tags.routing.ts");
/* harmony import */ var _tags_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tags.service */ "./src/app/common/modules/tags/tags.service.ts");
/* harmony import */ var _components_tag_tag_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/tag/tag.component */ "./src/app/common/components/tag/tag.component.ts");
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
var TagsModule = /** @class */ (function () {
    function TagsModule() {
    }
    TagsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _tags_component__WEBPACK_IMPORTED_MODULE_3__["TagsComponent"],
                _components_tag_tag_component__WEBPACK_IMPORTED_MODULE_6__["TagComponent"]
            ],
            providers: [
                [{ provide: _tags_service__WEBPACK_IMPORTED_MODULE_5__["TagsService"], useClass: _tags_service__WEBPACK_IMPORTED_MODULE_5__["TagsService"] }],
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_tags_routing__WEBPACK_IMPORTED_MODULE_4__["routes"])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TagsModule);
    return TagsModule;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-common-modules-tags-tags-module.js.map