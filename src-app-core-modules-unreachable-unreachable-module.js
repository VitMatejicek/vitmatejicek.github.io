(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-core-modules-unreachable-unreachable-module"],{

/***/ "./src/app/core/modules/unreachable/unreachable.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/modules/unreachable/unreachable.module.ts ***!
  \****************************************************************/
/*! exports provided: UnreachableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnreachableModule", function() { return UnreachableModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _unreachable_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unreachable.routing */ "./src/app/core/modules/unreachable/unreachable.routing.ts");
/* harmony import */ var _unreachable_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./unreachable.component */ "./src/app/core/modules/unreachable/unreachable.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/**
 *
 */
var UnreachableModule = /** @class */ (function () {
    function UnreachableModule() {
    }
    UnreachableModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _unreachable_component__WEBPACK_IMPORTED_MODULE_4__["UnrechablePage"]
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_unreachable_routing__WEBPACK_IMPORTED_MODULE_3__["routes"])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UnreachableModule);
    return UnreachableModule;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-core-modules-unreachable-unreachable-module.js.map