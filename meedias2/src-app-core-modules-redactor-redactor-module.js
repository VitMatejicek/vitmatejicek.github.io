(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-core-modules-redactor-redactor-module"],{

/***/ "./src/app/common/modules/routes.ts":
/*!******************************************!*\
  !*** ./src/app/common/modules/routes.ts ***!
  \******************************************/
/*! exports provided: common_routes, common_redactor_routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "common_routes", function() { return common_routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "common_redactor_routes", function() { return common_redactor_routes; });
/* harmony import */ var _categories_categories_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories/categories.routing */ "./src/app/common/modules/categories/categories.routing.ts");
/* harmony import */ var _dashboard_dashboard_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard.routing */ "./src/app/common/modules/dashboard/dashboard.routing.ts");
/* harmony import */ var _articles_articles_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./articles/articles.routing */ "./src/app/common/modules/articles/articles.routing.ts");
/* harmony import */ var _pages_pages_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/pages.routing */ "./src/app/common/modules/pages/pages.routing.ts");
/* harmony import */ var _users_users_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users/users.routing */ "./src/app/common/modules/users/users.routing.ts");
/* harmony import */ var _tags_tags_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tags/tags.routing */ "./src/app/common/modules/tags/tags.routing.ts");






/**
 * This file contains all the common routes
 */
var common_routes = [];
var common_redactor_routes = _categories_categories_routing__WEBPACK_IMPORTED_MODULE_0__["categories_routes"].concat(_dashboard_dashboard_routing__WEBPACK_IMPORTED_MODULE_1__["dashboard_routes"], _articles_articles_routing__WEBPACK_IMPORTED_MODULE_2__["articles_routes"], _pages_pages_routing__WEBPACK_IMPORTED_MODULE_3__["pages_routes"], _users_users_routing__WEBPACK_IMPORTED_MODULE_4__["users_routes"], _tags_tags_routing__WEBPACK_IMPORTED_MODULE_5__["tags_routes"]);


/***/ }),

/***/ "./src/app/core/modules/redactor/redactor.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/modules/redactor/redactor.component.ts ***!
  \*************************************************************/
/*! exports provided: RedactorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedactorComponent", function() { return RedactorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services */ "./src/app/core/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_common_modules_users_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/modules/users/users.service */ "./src/app/common/modules/users/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * @author Schwada
 * @since 11.1.2018
 *
 * The actual component/template that all the
 * redactor pages ( authenticated users ) use
 */
var RedactorComponent = /** @class */ (function () {
    function RedactorComponent(authentication, userService, router) {
        this.authentication = authentication;
        this.userService = userService;
        this.router = router;
        //move to core dateservice
        this.days = ['Neděle', 'Pondělí', 'Úterý', 'Středa', 'Čtvrtek', 'Pátek', 'Sobota'];
        this.months = ["Ledna", "Unora", "Brezna", "Dubna", "Kvetna", "Cervna",
            "Cervence", "Sprena", "Septemberu", "Octobru", "Novemberu", "Decemberu"];
    }
    RedactorComponent.prototype.ngOnInit = function () {
        var _this = this;
        //get date and notifications and add them to the sidebar
        var now = new Date();
        this.day = this.days[now.getDay()];
        this.date = now.getDate() + "." + this.months[now.getMonth()] + " " + now.getFullYear();
        // get info about user and display on sidebar
        //tohle chceme spravit v authentifikaci aby nam to vrtilo rovnou
        this.userService.getUser(this.authentication._credentials['id']).then(function (user) {
            _this.name = user.nick;
        });
        //this.userService.getUser();
    };
    RedactorComponent.prototype.logoff = function () {
        var _this = this;
        this.authentication.dismissExpiredIdentity().then(function (data) {
            if (data == true) {
                _this.router.navigate(['/login']);
            }
        });
    };
    RedactorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./redactor.template.html */ "./src/app/core/modules/redactor/redactor.template.html"),
            styles: [__webpack_require__(/*! ./redactor.styles.scss */ "./src/app/core/modules/redactor/redactor.styles.scss")],
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"],
            src_app_common_modules_users_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RedactorComponent);
    return RedactorComponent;
}());



/***/ }),

/***/ "./src/app/core/modules/redactor/redactor.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/modules/redactor/redactor.module.ts ***!
  \**********************************************************/
/*! exports provided: redactor_routes, RedactorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redactor_routes", function() { return redactor_routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedactorModule", function() { return RedactorModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _redactor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redactor.component */ "./src/app/core/modules/redactor/redactor.component.ts");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_common_modules_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/modules/routes */ "./src/app/common/modules/routes.ts");
/* harmony import */ var src_app_common_modules_users_users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common/modules/users/users.service */ "./src/app/common/modules/users/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/* Internal */





/**
 * @author Schwada
 * @since 9.1.2018
 *
 * This is a wrapper/template for redactor pages e.g. editor,article editor,
 * dashboard,etc..and should only be accessed by uthenicated users.
 * It also collects all the redactor page routes
 */
var redactor_routes = [
    {
        path: '',
        component: _redactor_component__WEBPACK_IMPORTED_MODULE_3__["RedactorComponent"],
        children: src_app_common_modules_routes__WEBPACK_IMPORTED_MODULE_6__["common_redactor_routes"].slice()
    },
];
var RedactorModule = /** @class */ (function () {
    function RedactorModule() {
    }
    RedactorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_redactor_component__WEBPACK_IMPORTED_MODULE_3__["RedactorComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedMoudle"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(redactor_routes)],
            providers: [
                [{ provide: src_app_common_modules_users_users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"], useClass: src_app_common_modules_users_users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"] }],
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], RedactorModule);
    return RedactorModule;
}());



/***/ }),

/***/ "./src/app/core/modules/redactor/redactor.styles.scss":
/*!************************************************************!*\
  !*** ./src/app/core/modules/redactor/redactor.styles.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main {\n  background-color: #f5f6fa;\n  font-family: 'Raleway', sans-serif; }\n  #main .row {\n    margin-top: 4rem; }\n  .card {\n  box-shadow: 0 1px 15px 0 rgba(123, 123, 123, 0.05); }\n  #redactor-navbar {\n  background-color: white;\n  box-shadow: 0px -30px 40px black;\n  color: #999;\n  height: 2.5rem; }\n  #redactor-navbar .search-text {\n    font-family: 'Raleway',sans-serif;\n    font-weight: 600;\n    padding-left: 0.5rem;\n    font-size: 0.8rem; }\n  #redactor-navbar .middle {\n    text-align: center; }\n  #redactor-navbar * {\n    display: inline-block; }\n  #redactor-navigation {\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .redactor-row {\n  width: 100%; }\n  .redactor-item {\n  text-align: center;\n  height: 6rem;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  border-right: 1px solid lightgray;\n  flex-direction: column;\n  color: gray; }\n  .redactor-item.active {\n    color: #00add9 !important;\n    border-right: 2px solid #00add9; }\n  .redactor-item:hover:not(.active) {\n    color: dimgrey !important;\n    border-right: 1px solid gray;\n    cursor: pointer;\n    transition: 0.7s all; }\n  .redactor-item p {\n    font-size: 0.7rem;\n    font-weight: 300;\n    font-family: 'Nunito', sans-serif;\n    padding-top: 2px; }\n  .sidebar {\n  background-image: linear-gradient(#00add9, #96eaff) !important;\n  box-shadow: 0px 0px 40px -25px black; }\n  .sidebar-user {\n  border-bottom: 1px solid #fff3;\n  color: #ffffffb3;\n  height: 2.5rem; }\n  .sidebar-user div > * {\n    cursor: pointer; }\n  .sidebar-tasks #day {\n  color: white;\n  font-family: 'Raleway',sans-serif;\n  font-size: 1.5rem; }\n  .sidebar-tasks #date {\n  color: #ffffffb3;\n  font-family: 'Raleway',sans-serif;\n  font-size: 0.7rem; }\n  .sidebar-tasks #notifications {\n  color: white;\n  font-family: 'Raleway',sans-serif;\n  font-size: 1.2rem;\n  padding-bottom: 1rem; }\n  .sticky-bottom {\n  position: fixed;\n  bottom: 0; }\n  .notif-blue {\n  border-left: 4px solid darkcyan; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3JlbWVkaWFzL21lZWRpYXNfZnJvbnRlbmQvc3JjL2FwcC9jb3JlL21vZHVsZXMvcmVkYWN0b3IvcmVkYWN0b3Iuc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBeUI7RUFDekIsbUNBQWtDLEVBS3JDO0VBUEQ7SUFLUSxpQkFBZ0IsRUFDbkI7RUFHTDtFQUVJLG1EQUE2QyxFQUNoRDtFQUVEO0VBQ0ksd0JBQXNCO0VBQ3RCLGlDQUFnQztFQUNoQyxZQUFXO0VBQ1gsZUFBYyxFQWdCakI7RUFwQkQ7SUFPUSxrQ0FBaUM7SUFDakMsaUJBQWdCO0lBQ2hCLHFCQUFvQjtJQUNwQixrQkFBaUIsRUFDcEI7RUFYTDtJQWNRLG1CQUFrQixFQUNyQjtFQWZMO0lBa0JRLHNCQUFxQixFQUN4QjtFQUlMO0VBQ0ksYUFBWTtFQUNaLFdBQVU7RUFDVixVQUFTO0VBS1QsY0FBYTtFQUNiLG9CQUFtQjtFQUNuQix3QkFBdUIsRUFDMUI7RUFFRDtFQUNJLFlBQVcsRUFDZDtFQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLGFBQVk7RUFDWixvQkFBbUI7RUFDbkIsY0FBYTtFQUNiLHdCQUF1QjtFQUN2QixrQ0FBaUM7RUFDakMsdUJBQXNCO0VBQ3RCLFlBQVUsRUFvQmI7RUE1QkQ7SUFXUSwwQkFBd0I7SUFDeEIsZ0NBQStCLEVBQ2xDO0VBYkw7SUFnQlEsMEJBQXlCO0lBQ3pCLDZCQUE0QjtJQUM1QixnQkFBZTtJQUNmLHFCQUFvQixFQUN2QjtFQXBCTDtJQXVCUSxrQkFBaUI7SUFDakIsaUJBQWdCO0lBQ2hCLGtDQUFpQztJQUNqQyxpQkFBZ0IsRUFDbkI7RUFJTDtFQUNJLCtEQUE4RDtFQUM5RCxxQ0FBb0MsRUFDdkM7RUFFRDtFQUNJLCtCQUE4QjtFQUM5QixpQkFBZ0I7RUFDaEIsZUFBYyxFQUtqQjtFQVJEO0lBTVEsZ0JBQWUsRUFDbEI7RUFHTDtFQUdRLGFBQVk7RUFDWixrQ0FBaUM7RUFDakMsa0JBQWlCLEVBQ3BCO0VBTkw7RUFRUSxpQkFBZ0I7RUFDaEIsa0NBQWlDO0VBQ2pDLGtCQUFpQixFQUNwQjtFQVhMO0VBYVEsYUFBWTtFQUNaLGtDQUFpQztFQUNqQyxrQkFBaUI7RUFDakIscUJBQW9CLEVBQ3ZCO0VBS0w7RUFDSSxnQkFBZTtFQUNmLFVBQVEsRUFDWDtFQUlEO0VBQ0ksZ0NBQStCLEVBQ2xDIiwiZmlsZSI6InNyYy9hcHAvY29yZS9tb2R1bGVzL3JlZGFjdG9yL3JlZGFjdG9yLnN0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21haW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY2ZmE7XG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcblxuICAgIC5yb3cge1xuICAgICAgICBtYXJnaW4tdG9wOiA0cmVtO1xuICAgIH1cbn1cblxuLmNhcmQge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMTVweCAwIGhzbGEoMCwwJSw0OC4yJSwuMDUpO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDE1cHggMCBoc2xhKDAsMCUsNDguMiUsLjA1KTtcbn1cblxuI3JlZGFjdG9yLW5hdmJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAwcHggLTMwcHggNDBweCBibGFjaztcbiAgICBjb2xvcjogIzk5OTtcbiAgICBoZWlnaHQ6IDIuNXJlbTtcblxuICAgIC5zZWFyY2gtdGV4dHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSYWxld2F5JyxzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgfVxuXG4gICAgLm1pZGRsZSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAqIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbn1cblxuXG4jcmVkYWN0b3ItbmF2aWdhdGlvbiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5yZWRhY3Rvci1yb3cge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ucmVkYWN0b3ItaXRlbSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogNnJlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgY29sb3I6Z3JheTtcblxuICAgICYuYWN0aXZle1xuICAgICAgICBjb2xvcjojMDBhZGQ5ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMwMGFkZDk7XG4gICAgfVxuXG4gICAgJjpob3Zlcjpub3QoLmFjdGl2ZSl7XG4gICAgICAgIGNvbG9yOiBkaW1ncmV5ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyYXk7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogMC43cyBhbGw7XG4gICAgfVxuXG4gICAgcHtcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgcGFkZGluZy10b3A6IDJweDtcbiAgICB9XG59XG5cblxuLnNpZGViYXJ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCMwMGFkZDksICM5NmVhZmYpICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA0MHB4IC0yNXB4IGJsYWNrO1xufVxuXG4uc2lkZWJhci11c2VyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjM7XG4gICAgY29sb3I6ICNmZmZmZmZiMztcbiAgICBoZWlnaHQ6IDIuNXJlbTtcblxuICAgIGRpdiA+ICoge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuXG4uc2lkZWJhci10YXNrcyB7XG5cbiAgICAjZGF5IHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIH1cbiAgICAjZGF0ZSB7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmYjM7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgfVxuICAgICNub3RpZmljYXRpb25zIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICB9XG5cbn1cblxuXG4uc3RpY2t5LWJvdHRvbXtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOjA7XG59XG5cblxuXG4ubm90aWYtYmx1ZSB7XG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCBkYXJrY3lhbjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/core/modules/redactor/redactor.template.html":
/*!**************************************************************!*\
  !*** ./src/app/core/modules/redactor/redactor.template.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid h-100\">\n    <div class=\"row h-100\">\n        <div class=\"col px-0\" id=\"main\">\n            <div class=\"container-fluid d-flex align-items-center py-2 px-4\" id=\"redactor-navbar\">\n                <!-- TODO -->\n                <i class=\"fas fa-search\"></i> <span class=\"search-text\">HLEDAT</span>\n                <!-- <span class=\"middle\">meedias</span> -->\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-2\">\n                        <div id=\"redactor-navigation\">\n                            <div class=\"redactor-row align-self-start\">\n                                <div routerLink=\"/redactor/dashboard\" routerLinkActive=\"active\" class=\"redactor-item\">\n                                    <i class=\"fas fa-chart-line fa-2x\"></i>\n                                    <p>Statistiky</p>\n                                </div>\n                                <div routerLink=\"/redactor/articles\" routerLinkActive=\"active\" class=\"redactor-item\">\n                                    <i class=\"far fa-newspaper fa-2x\"></i>\n                                    <p>Články</p>\n                                </div>\n                                <div routerLink=\"/redactor/pages\" routerLinkActive=\"active\" class=\"redactor-item\">\n                                    <i class=\"fas fa-list fa-2x\"></i>\n                                    <p>Stránky</p>\n                                </div>\n                                <div routerLink=\"/redactor/categories\" routerLinkActive=\"active\" class=\"redactor-item\">\n                                    <i class=\"fas fa-clipboard-list fa-2x\"></i>\n                                    <p>Kategorie</p>\n                                </div>\n                                <div routerLink=\"/redactor/tags\" routerLinkActive=\"active\" class=\"redactor-item\">\n                                    <i class=\"fas fa-tags fa-2x\"></i>\n                                    <p>Tagy</p>\n                                </div>\n                                <div routerLink=\"/redactor/users\" routerLinkActive=\"active\" class=\"redactor-item\">\n                                    <i class=\"fas fa-users fa-2x\"></i>\n                                    <p>Uživatelé</p>\n                                </div>\n                                <!-- SETTINGS <div routerLink=\"/redactor/users\" routerLinkActive=\"active\" class=\"redactor-item\">\n                                    <i class=\"fas fa-users fa-2x\"></i>\n                                    <p>Uživatelé</p>\n                                </div> -->\n                            </div>\n                        </div>\n                </div>\n                <div class=\"col px-5\">\n                    <router-outlet></router-outlet>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-2 px-0 sidebar\">\n            <div class=\"sidebar-user px-0 py-2\">\n                <div class=\"d-flex px-4 align-items-center flex-row-reverse bd-highlight\">\n                    <i class=\"fas fa-sign-out-alt\" (mousedown)=\"logoff()\"></i>\n                    <div style=\"flex-grow: 1;\">{{name}}</div>\n                </div>\n            </div>\n            <div class=\"sidebar-tasks py-4 px-4 sticky-top flex-grow-1\">\n                <div class=\"nav flex-sm-column\">\n                    <span id=\"day\">{{day}}</span>\n                    <span id=\"date\">{{date}}</span>\n                </div>\n            </div>\n\n            <div class=\"sidebar-tasks py-4 px-4 sticky-bottom flex-grow-1\">\n                <span id=\"notifications\">Notifikace</span>\n                <div class=\"flex-sm-column pt-2\">\n                    <p class=\"notifications text-white small\">Nemáte žádne nové notifikace</p>\n                    <!-- <div class=\"card mb-3 notif-blue\" style=\"max-width: 18rem;\">\n                        <div class=\"card-header small\">komentář</div>\n                        <div class=\"card-body text-info\">\n                          <p class=\"card-text small\">Nový komentář na článku...</p>\n                        </div>\n                    </div>\n                    <div class=\"card mb-3 notif-blue\" style=\"max-width: 18rem;\">\n                            <div class=\"card-header small\">komentář</div>\n                            <div class=\"card-body text-info\">\n                              <p class=\"card-text small\">Nový komentář na článku...</p>\n                            </div>\n                        </div> -->\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n"

/***/ })

}]);
//# sourceMappingURL=src-app-core-modules-redactor-redactor-module.js.map