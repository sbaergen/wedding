(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/accomodations/accomodations.component.css":
/*!***********************************************************!*\
  !*** ./src/app/accomodations/accomodations.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\n    color: white;\n    background-color: #D0E6EE;\n}\n\nfigure {\n    float: right;\n    max-width: 50%;\n}\n\np {\n    font-size: 20px;\n    font-family: 'Slabo 27px', serif;\n}\n"

/***/ }),

/***/ "./src/app/accomodations/accomodations.component.html":
/*!************************************************************!*\
  !*** ./src/app/accomodations/accomodations.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<figure>\n<iframe width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" src=\"https://www.google.com/maps/embed/v1/place?q=place_id:ChIJGyT-PdweoFMR-pJ0q0j0oVo&key=AIzaSyCl27vT153QwUXeuFuopKm5M5TLQUlKRNU\" allowfullscreen></iframe></figure>\n<p> If you require accomodations in Edmonton, we have reserved a block of rooms from June 14-16 near the venue for your convienence at:</p>\n<br>\n<p><strong>Holiday Inn Express & Suites Edmonton South</strong></p>\n<p>2440 Calgary Trail</p>\n<p>Edmonton, AB, T6J 5J6</p>\n<p>1-780-440-5000</p>\n<p><a href=\"http://bit.ly/HIExpressYEG\">http://bit.ly/HIExpressYEG</a>\n<p><strong>Please book by May 14 with the group name \"Sean and Tiffanie Wedding\"</strong></p>\n\n"

/***/ }),

/***/ "./src/app/accomodations/accomodations.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/accomodations/accomodations.component.ts ***!
  \**********************************************************/
/*! exports provided: AccomodationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccomodationsComponent", function() { return AccomodationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccomodationsComponent = /** @class */ (function () {
    function AccomodationsComponent() {
    }
    AccomodationsComponent.prototype.ngOnInit = function () {
    };
    AccomodationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-accomodations',
            template: __webpack_require__(/*! ./accomodations.component.html */ "./src/app/accomodations/accomodations.component.html"),
            styles: [__webpack_require__(/*! ./accomodations.component.css */ "./src/app/accomodations/accomodations.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AccomodationsComponent);
    return AccomodationsComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _accomodations_accomodations_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accomodations/accomodations.component */ "./src/app/accomodations/accomodations.component.ts");
/* harmony import */ var _event_event_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event/event.component */ "./src/app/event/event.component.ts");
/* harmony import */ var _photos_photos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./photos/photos.component */ "./src/app/photos/photos.component.ts");
/* harmony import */ var _registry_registry_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registry/registry.component */ "./src/app/registry/registry.component.ts");
/* harmony import */ var _rsvp_rsvp_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rsvp/rsvp.component */ "./src/app/rsvp/rsvp.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'accomodations', component: _accomodations_accomodations_component__WEBPACK_IMPORTED_MODULE_2__["AccomodationsComponent"] },
    { path: 'event', component: _event_event_component__WEBPACK_IMPORTED_MODULE_3__["EventComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: 'photos', component: _photos_photos_component__WEBPACK_IMPORTED_MODULE_4__["PhotosComponent"] },
    { path: 'registry', component: _registry_registry_component__WEBPACK_IMPORTED_MODULE_5__["RegistryComponent"] },
    { path: 'rsvp', component: _rsvp_rsvp_component__WEBPACK_IMPORTED_MODULE_6__["RsvpComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#MyNavbar\" (click)=\"isCollapsed = !isCollapsed\">\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\"><img height=\"30\" src=\"./static/wedding/Weddinglogo.jpg\"></a>\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"MyNavbar\" [ngbCollapse]=\"isCollapsed\">\n            <ul class=\"nav navbar-nav\">\n                <li><a [routerLink]=\"['/']\">Home</a></li>\n                <li><a [routerLink]=\"['/accomodations']\">Accomodations</a></li>\n                <li><a [routerLink]=\"['/event']\">Event Details</a></li>\n                <li><a [routerLink]=\"['/registry']\">Registry</a></li>\n                <li><a [routerLink]=\"['/photos']\">Photos</a></li>\n                <li><a [routerLink]=\"['/rsvp']\">RSVP</a></li>\n            </ul>\n        </div>\n    </div>\n</nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.title = 'Sean and Tiffanie\'s Wedding';
        this.url = 'http://seanandtiffanie2019.ca/guest/all/';
    }
    AppComponent.prototype.getGuests = function () {
        this.http.get(this.url).toPromise().then(function (res) {
            console.log(res.json());
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _accomodations_accomodations_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./accomodations/accomodations.component */ "./src/app/accomodations/accomodations.component.ts");
/* harmony import */ var _event_event_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./event/event.component */ "./src/app/event/event.component.ts");
/* harmony import */ var _registry_registry_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./registry/registry.component */ "./src/app/registry/registry.component.ts");
/* harmony import */ var _photos_photos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./photos/photos.component */ "./src/app/photos/photos.component.ts");
/* harmony import */ var _rsvp_rsvp_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./rsvp/rsvp.component */ "./src/app/rsvp/rsvp.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _show_errors_show_errors_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./show-errors/show-errors.component */ "./src/app/show-errors/show-errors.component.ts");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-sidebar */ "./node_modules/ng-sidebar/lib/index.js");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(ng_sidebar__WEBPACK_IMPORTED_MODULE_18__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _accomodations_accomodations_component__WEBPACK_IMPORTED_MODULE_7__["AccomodationsComponent"],
                _event_event_component__WEBPACK_IMPORTED_MODULE_8__["EventComponent"],
                _registry_registry_component__WEBPACK_IMPORTED_MODULE_9__["RegistryComponent"],
                _photos_photos_component__WEBPACK_IMPORTED_MODULE_10__["PhotosComponent"],
                _rsvp_rsvp_component__WEBPACK_IMPORTED_MODULE_11__["RsvpComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _show_errors_show_errors_component__WEBPACK_IMPORTED_MODULE_17__["ShowErrorsComponent"],
                _rsvp_rsvp_component__WEBPACK_IMPORTED_MODULE_11__["DoneDialog"],
                _registry_registry_component__WEBPACK_IMPORTED_MODULE_9__["RegistryDialog"],
                _registry_registry_component__WEBPACK_IMPORTED_MODULE_9__["EditDialog"],
                _registry_registry_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundDialog"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot(),
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"],
                ng_sidebar__WEBPACK_IMPORTED_MODULE_18__["SidebarModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"]
            ],
            entryComponents: [
                _rsvp_rsvp_component__WEBPACK_IMPORTED_MODULE_11__["DoneDialog"],
                _registry_registry_component__WEBPACK_IMPORTED_MODULE_9__["RegistryDialog"],
                _registry_registry_component__WEBPACK_IMPORTED_MODULE_9__["EditDialog"],
                _registry_registry_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundDialog"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/event/event.component.css":
/*!*******************************************!*\
  !*** ./src/app/event/event.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Rouge+Script|Slabo+27px');\n\nh2 {\n    font-family: 'Rouge Script', cursive;\n    font-size: 48px;\n}\n\np {\n    font-size: 20px;\n    font-family: 'Slabo 27px', serif;\n}\n"

/***/ }),

/***/ "./src/app/event/event.component.html":
/*!********************************************!*\
  !*** ./src/app/event/event.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<figure>\n<iframe width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" src=\"https://www.google.com/maps/embed/v1/place?q=place_id:ChIJk8OGjNUYoFMROG4gLRGqR3g&key=AIzaSyCl27vT153QwUXeuFuopKm5M5TLQUlKRNU\" allowfullscreen></iframe></figure>\n<h2>Ceremony</h2>\n<p>Saturday June 15, 2019</p>\n<p>3:00pm</p>\n<p>First Mennonite Church</p>\n<p>3650 91 St NW</p>\n<p>Edmonton, AB T6E 6P1</p>\n\n<h2>Reception</h2>\n<p>5:15pm</p>\n<p>Dinner at 6:00pm</p>\n<p>First Mennonite Church</p>\n<p>Program and Board Games to follow</p>\n\n"

/***/ }),

/***/ "./src/app/event/event.component.ts":
/*!******************************************!*\
  !*** ./src/app/event/event.component.ts ***!
  \******************************************/
/*! exports provided: EventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventComponent", function() { return EventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventComponent = /** @class */ (function () {
    function EventComponent() {
    }
    EventComponent.prototype.ngOnInit = function () {
    };
    EventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event',
            template: __webpack_require__(/*! ./event.component.html */ "./src/app/event/event.component.html"),
            styles: [__webpack_require__(/*! ./event.component.css */ "./src/app/event/event.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EventComponent);
    return EventComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rounded {\n    border-radius: 50%;\n    width: 300px;\n    height: 300px;\n    display: block;\n    margin-right: auto;\n    margin-left: auto;\n    background-size: cover;\n}\n\nh1 {\n    font-family: 'Rouge Script', cursive;\n    font-size: 48px;\n}\n\n.thirty {\n    font-size: 30px;\n    font-family: 'Slabo 27px', serif;\n}\n\nfooter {\n    font-size: 15px;\n    font-family: 'Slabo 27px', serif;\n}\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n        <img class=rounded src=\"./static/wedding/test.jpg\" alt=\"logo\">\n        <h1>Sean & Tiffanie's Wedding</h1>\n        <div class=\"thirty\">\n            <a routerLink=\"/event\">Details</a>\n            <br>\n            <a routerLink=\"/rsvp\">RSVP</a>\n            <br>\n            <a routerLink=\"/accomodations\">Accomodations</a>\n            <br>\n            <a routerLink=\"/registry\">Registry</a>\n            <br>\n            <a routerLink=\"/photos\">Photos</a>\n            <br>\n        </div>\n        <footer>\n            <p>Contact us if you have any questions at <a href=\"mailto:sean.tiffanie@gmail.com\">sean.tiffanie@gmail.com</a></p>\n        </footer>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/photos/photos.component.css":
/*!*********************************************!*\
  !*** ./src/app/photos/photos.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/photos/photos.component.html":
/*!**********************************************!*\
  !*** ./src/app/photos/photos.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "COMING SOON\n"

/***/ }),

/***/ "./src/app/photos/photos.component.ts":
/*!********************************************!*\
  !*** ./src/app/photos/photos.component.ts ***!
  \********************************************/
/*! exports provided: PhotosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosComponent", function() { return PhotosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PhotosComponent = /** @class */ (function () {
    function PhotosComponent() {
    }
    PhotosComponent.prototype.ngOnInit = function () {
    };
    PhotosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-photos',
            template: __webpack_require__(/*! ./photos.component.html */ "./src/app/photos/photos.component.html"),
            styles: [__webpack_require__(/*! ./photos.component.css */ "./src/app/photos/photos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PhotosComponent);
    return PhotosComponent;
}());



/***/ }),

/***/ "./src/app/registry/edit-dialog.component.css":
/*!****************************************************!*\
  !*** ./src/app/registry/edit-dialog.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n    float: right;\n    max-height: 60px;\n    display: inline-block;\n}\n\ninput {\n    width: 100%;\n}\n\nmat-form-field {\n    width: 100%;\n}\n"

/***/ }),

/***/ "./src/app/registry/edit-dialog.component.html":
/*!*****************************************************!*\
  !*** ./src/app/registry/edit-dialog.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Update Commitments</h2>\n<span *ngIf=\"!noItems()\">\n    <mat-horizontal-stepper [linear]=\"true\">\n        <mat-step label=\"Review Items\">\n            <strong>Reminder: This is not a payment. This is only a way to designate money towards a specific purpose.</strong>\n            <hr>\n            <mat-dialog-content>\n                <strong>Items Designated:</strong>\n                <hr>\n                <div *ngFor=\"let b of data.bought; let i = index\">\n                    <span *ngIf=\"b\">\n                        <figure>\n                            <img float=\"right\" src=\"{{data.items[i].picture}}\">\n                        </figure>\n                        Item: {{data.items[i].name}}\n                        <br>\n                        <br>\n                        Designated: ${{b}}\n                        <hr>\n                    </span>\n                </div>\n            </mat-dialog-content>\n            <strong>Total: ${{getTotal()}}</strong>\n            <mat-dialog-actions>\n                <button mat-raised-button [mat-dialog-close]=\"'Cancel'\">Cancel</button>\n                <button mat-raised-button matStepperNext cdkFocusInitial>Next</button>\n            </mat-dialog-actions>\n        </mat-step>\n        <mat-step label=\"Information\">\n            <form [formGroup]=\"form\">\n                <mat-form-field>\n                    <input formControlName=\"personName\" name=\"personName\" matInput placeholder=\"Name (Optional)\">\n                </mat-form-field>\n                <br>\n                <mat-form-field>\n                    <input formControlName=\"email\" name=\"email\" placeholder=\"Enter Email for Confirmation (Optional)\" matInput>\n                    <mat-error>{{getErrorMessage()}}</mat-error>\n                </mat-form-field>\n                <mat-form-field>\n                    <textarea matInput formControlName=\"message\" name=\"message\" placeholder=\"Message to Sean and Tiffanie (Optional)\"></textarea>\n                </mat-form-field>\n            </form>\n            <mat-dialog-actions>\n                <button mat-raised-button [mat-dialog-close]=\"'Cancel'\">Cancel</button>\n                <button mat-raised-button matStepperPrevious>Go Back</button>\n                <button mat-raised-button [disabled]=\"form.invalid\" matStepperNext cdkFocusInitial>Next</button>\n            </mat-dialog-actions>\n        </mat-step>\n        <mat-step label=\"Confirmation Code\">\n            Your confirmation code remains: <strong>{{data.code}}</strong>\n            <br>\n            <br>\n            Please note this code to make changes to your commitments\n            <button mat-raised-button [mat-dialog-close]=\"'Cancel'\">Cancel</button>\n            <button mat-raised-button matStepperPrevious>Go Back</button>\n            <button mat-raised-button [mat-dialog-close]=\"{'name':form.controls.personName.value, 'email':form.controls.email.value, 'message':form.controls.message.value}\" cdkFocusInitial>Done</button>\n        </mat-step>\n    </mat-horizontal-stepper>\n</span>\n<span *ngIf=\"noItems()\">\n    <mat-dialog-content>\n        Remove all commitments? (To make a new commitment all information will need to be re-entered and a new code will be issued)\n    </mat-dialog-content>\n    <mat-dialog-actions>\n        <button mat-raised-button [mat-dialog-close]=\"'Cancel'\" cdkFocusInitial>Cancel</button>\n        <button mat-raised-button [mat-dialog-close]=\"'Done'\">Done</button>\n    </mat-dialog-actions>\n</span>\n"

/***/ }),

/***/ "./src/app/registry/registry-dialog.component.css":
/*!********************************************************!*\
  !*** ./src/app/registry/registry-dialog.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n    float: right;\n    max-height: 60px;\n    display: inline-block;\n}\n\ninput {\n    width: 100%;\n}\n\nmat-form-field {\n    width: 100%;\n}\n"

/***/ }),

/***/ "./src/app/registry/registry-dialog.component.html":
/*!*********************************************************!*\
  !*** ./src/app/registry/registry-dialog.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Confirm Commitments</h2>\n<mat-horizontal-stepper [linear]=\"true\">\n    <mat-step label=\"Review Items\" [stepControl]=\"firstGroup\">\n        <strong>Reminder: This is not a payment. This is only a way to designate money towards a specific purpose.</strong>\n        <hr>\n        <mat-dialog-content>\n            <strong>Items Designated:</strong>\n            <hr>\n            <div *ngFor=\"let b of data.bought; let i = index\">\n                <span *ngIf=\"b\">\n                    <figure>\n                        <img float=\"right\" src=\"{{data.items[i].picture}}\">\n                    </figure>\n                    Item: {{data.items[i].name}}\n                    <br>\n                    <br>\n                    Designated: ${{b}}\n                    <hr>\n                </span>\n            </div>\n        </mat-dialog-content>\n        <strong>Total: ${{getTotal()}}</strong>\n        <mat-dialog-actions>\n            <button mat-raised-button [mat-dialog-close]=\"'Cancel'\">Cancel</button>\n            <button mat-raised-button matStepperNext cdkFocusInitial>Next</button>\n        </mat-dialog-actions>\n    </mat-step>\n    <mat-step label=\"Information\" [stepControl]=\"secondGroup\">\n        <form #infoForm=\"ngForm\">\n            <mat-form-field>\n                <input [(ngModel)]=\"personName\" name=\"personName\" matInput placeholder=\"Name (Optional)\" value=\"Anonymous\">\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n                <input [formControl]=\"email\" name=\"emailValue\" placeholder=\"Enter Email for Confirmation (Optional)\" matInput>\n                <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\n            </mat-form-field>\n            <mat-form-field>\n                <textarea matInput name=\"message\" [(ngModel)]=\"message\" placeholder=\"Message to Sean and Tiffanie (Optional)\"></textarea>\n            </mat-form-field>\n        </form>\n        <mat-dialog-actions>\n            <button mat-raised-button [mat-dialog-close]=\"'Cancel'\">Cancel</button>\n            <button mat-raised-button matStepperPrevious>Go Back</button>\n            <button mat-raised-button [disabled]=\"email.invalid\" matStepperNext cdkFocusInitial>Next</button>\n        </mat-dialog-actions>\n    </mat-step>\n    <mat-step label=\"Confirmation Code\" [stepControl]=\"thirdGroup\">\n        Your confirmation code is: <strong>{{data.code}}</strong>\n        <br>\n        <br>\n        Please note this code to make changes to your contributions\n        <button mat-raised-button [mat-dialog-close]=\"'Cancel'\">Cancel</button>\n        <button mat-raised-button matStepperPrevious>Go Back</button>\n        <button mat-raised-button [mat-dialog-close]=\"{'name':personName, 'email':email.value, 'message':message}\" cdkFocusInitial>Done</button>\n    </mat-step>\n</mat-horizontal-stepper>\n"

/***/ }),

/***/ "./src/app/registry/registry.component.css":
/*!*************************************************!*\
  !*** ./src/app/registry/registry.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card_image {\n    max-width: 140px;\n    height: auto;\n    float: left;\n    margin: 1%;\n}\n\n.card_format {\n    width: 90%;\n    width: 480px;\n    height: auto;\n    min-height: 300px;\n    margin: 10px;\n}\n\n.card_text {\n    display: inline-block;\n}\n\n.sidebar {\n    position: absolute;\n}\n\n.navbar {\n    z-index: 1;\n}\n\nhr {\n    margin: 0;\n}\n\nmat-grid-list {\n    height: 100%;\n}\n\n.flex-container {\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-evenly;\n    align-content: space-between;\n}\n\n.CodeEntry {\n    text-align: center;\n}\n\n#codeInput {\n    width: 300px !important;\n}\n\n.jumbotron {\n    text-align: center;\n    padding: 10px 50px 10px 50px;\n}\n\n.jumbotron p {\n    font-size: 17px;\n    font-weight: 400;\n}\n\n.jumbotron h1 {\n    font-size: 40px\n}\n\n.blueButton {\n    background-color: #3f51b5;\n    color: white;\n    border-radius: 20px !important;\n}\n\n.iconButton {\n    color: #3f51b5;\n}\n\nhtml, button, mat-card{\n    font-family: 'Slabo 27px', serif;\n    font-size: 15px;\n}\n\n/*button {\n    font-family: 'Slabo 27px', serif;\n    font-size: 15px;\n}*/\n\n\n"

/***/ }),

/***/ "./src/app/registry/registry.component.html":
/*!**************************************************!*\
  !*** ./src/app/registry/registry.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"jumbotron\">\n            <h1>Registry</h1>\n            <p>Our registry is a bit different than other registries. Since we are having the wedding in Edmonton and not living in Edmonton, we want to avoid having to ship a lot of things back home. However, we still wanted to give you the opportunity to choose out a specific gift. Therefore, we have set up this page where you can designate a certain amount of money towards a certain item. We still ask that you only give us money, but we will only use your money towards the item it was meant for. Another benefit of this is that you can feel free to contribute to a portion of an item. Therefore you are completely free to spend however much you are comfortable with without feeling like you need to buy a whole item. After designating your contribution, you will have the opportunity to enter your name, email, and/or a message to go along with your gift. The email will be used to send you a record of what you contributed to and a code you can use to change your gift. These entries are completely optional. If you have any questions, please email us at <a href=\"mailto:sean.tiffanie@gmail.com\">sean.tiffanie@gmail.com</a>.</p>\n        </div>\n<ng-sidebar-container class=\"sidebar\">\n    <ng-sidebar [(opened)]=\"opened\" mode=\"push\">\n        <strong>Contributions</strong>\n        <div *ngFor=\"let b of bought; let i = index\">\n            <div *ngIf=\"bought[i]\">\n                {{items[i].name}}\n                ${{bought[i].toFixed(2)}}\n            </div>\n        </div>\n        <br>\n        <strong>TOTAL</strong>\n        <hr>\n        ${{getTotal()}}\n        <hr>\n        <button class=\"blueButton\" mat-raised-button (click)=\"submit()\">Confirm Commitment</button>\n    </ng-sidebar>\n    <div ng-sidebar-content>\n        <form class=\"CodeEntry\">\n            <div *ngIf=\"!enterCode && !edit\">\n                <button class=\"blueButton\" mat-raised-button (click)=\"triggerCode()\">Change Existing Contribution</button>\n            </div>\n            <div *ngIf=\"enterCode && !edit\">\n                <mat-form-field appearance=\"outline\" id=\"codeInput\">\n                    <input matInput text-align=\"center\" matTooltip=\"Your code can be found in your confirmation email\" matTooltipPosition=\"left\" placeholder=\"Confirmation Code (Not RSVP Code)\" cdkTextareaAutosize #codeInput>\n                    <mat-hint>Email <a href=\"mailto:sean.tiffanie@gmail.com\">sean.tiffanie@gmail.com</a> if you have lost your code</mat-hint>\n                </mat-form-field>\n                <button mat-fab (click)=\"checkCode(codeInput)\" color=\"primary\" [disabled]=\"!codeInput.value\">Submit</button>\n            </div>\n                <span *ngIf=\"edit && !enterCode\">\n                    <button class=\"blueButton\" mat-raised-button float=\"right\" (click)=\"submit()\">Save Changes</button>\n                </span>\n        </form>\n        <br>\n        <!-- <mat-grid-list cols=\"2\" rowHeight=\"fit\" gutterSize=\"10px\"> -->\n            <div class=\"flex-container\">\n            <div *ngFor=\"let item of items; let i = index\">\n                <!-- <mat-grid-tile role=\"listitem\"> -->\n                    <mat-card class=\"card_format\">\n                        <mat-card-header>\n                            <mat-card-title><strong>{{item.name}}</strong></mat-card-title>\n                        </mat-card-header>\n                        <img mat-card-image class=\"card_image\" max-width=\"100%\" src=\"{{item.picture}}\" alt=\"item.name\">\n                        <mat-card-content class=\"card_text\">\n                            PRICE: ${{item.price}} <br>\n                            Remaining: ${{getRemaining(i)}} <br>\n                            <span *ngIf=\"!contribute[i] && getRemaining(i)!=0\">\n                                <button class=\"blueButton\" mat-raised-button (click)=\"triggerContribute(i)\">Contribute</button>\n                            </span>\n                            <span *ngIf=\"contribute[i]\">\n                                Contribution: <br>$\n                                <mat-form-field>\n                                    <input matInput name=\"{{money[i] + amount}}\" [(ngModel)]=\"money[i]\" type=\"number\" placeholder=\"Amount\" value=\"0\" required #amount=\"ngModel\">\n                                </mat-form-field>\n                                <button class=\"iconButton\" mat-icon-button (click)=\"buy(i, money[i])\" [disabled]=\"!checkValid(i)\"><mat-icon>done</mat-icon></button>\n                                <button class=\"iconButton\" mat-icon-button (click)=unbuy(i)><mat-icon>cancel</mat-icon></button>\n                            </span>\n                        </mat-card-content>\n                    </mat-card>\n                <!-- </mat-grid-tile> -->\n            </div>\n        </div>\n        <!-- </mat-grid-list> -->\n    </div>\n</ng-sidebar-container>\n\n"

/***/ }),

/***/ "./src/app/registry/registry.component.ts":
/*!************************************************!*\
  !*** ./src/app/registry/registry.component.ts ***!
  \************************************************/
/*! exports provided: RegistryComponent, RegistryDialog, EditDialog, NotFoundDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistryComponent", function() { return RegistryComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistryDialog", function() { return RegistryDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDialog", function() { return EditDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundDialog", function() { return NotFoundDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var RegistryComponent = /** @class */ (function () {
    function RegistryComponent(http, dialog, router, snackBar) {
        this.http = http;
        this.dialog = dialog;
        this.router = router;
        this.snackBar = snackBar;
        this.columns = 2;
        this.rowHeight = "fit";
        this.opened = false;
        this.config = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarConfig"]();
        this.edit = false;
        this.enterCode = false;
        this.items = [];
        this.oldAmounts = [];
        this.contribute = [];
        this.money = [];
        this.bought = [];
        this.raised = [];
        this.editName = "";
        this.editEmail = "";
        this.editMessage = "";
        this.code = "";
        this.registryUrl = '/wedding/registryapi/';
        this.contributionUrl = '/wedding/contributionapi/';
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'X-CSRFToken': this.getCookie('csrftoken')
        });
    }
    RegistryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.registryUrl).toPromise().then(function (res) {
            _this.items = res.json();
            for (var i in _this.items) {
                _this.contribute[i] = false;
                if (_this.items[i].raised) {
                    _this.raised[i] = _this.items[i].raised;
                }
                else {
                    _this.raised[i] = 0;
                }
            }
        });
        this.config.duration = 1000;
        this.config.panelClass = ['snackClass'];
    };
    RegistryComponent.prototype.getCookie = function (name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2)
            return parts.pop().split(";").shift();
    };
    RegistryComponent.prototype.triggerContribute = function (i) {
        this.contribute[i] = !this.contribute[i];
        this.bought[i] = 0;
    };
    RegistryComponent.prototype.triggerCode = function () {
        this.enterCode = !this.enterCode;
    };
    RegistryComponent.prototype.buy = function (i, amount) {
        this.bought[i] = amount;
        this.opened = true;
        this.raised[i] = Number(this.items[i].raised) + amount;
        this.snackBar.open(this.items[i].name + " added to cart", undefined, this.config);
    };
    RegistryComponent.prototype.getTotal = function () {
        return (this.bought.reduce(function (a, b) { return a + b; }, 0)).toFixed(2);
    };
    RegistryComponent.prototype.getRemaining = function (i) {
        return (this.items[i].price - this.raised[i]).toFixed(2);
    };
    RegistryComponent.prototype.unbuy = function (i) {
        this.triggerContribute(i);
        if (this.edit && this.oldAmounts[i]) {
            this.raised[i] = this.items[i].raised - this.oldAmounts[i];
        }
        else {
            this.raised[i] = this.items[i].raised;
        }
        if (this.getTotal() == 0) {
            this.opened = false;
        }
        this.snackBar.open(this.items[i].name + " removed from cart", undefined, this.config);
    };
    RegistryComponent.prototype.checkValid = function (i) {
        if (!this.money[i]) {
            return false;
        }
        ;
        if (this.money[i] <= 0) {
            return false;
        }
        ;
        if (this.money[i] > this.items[i].price - this.items[i].raised) {
            return false;
        }
        ;
        var temp = (this.money[i] + "").split('.');
        if (temp.length > 2) {
            return false;
        }
        ;
        if (temp.length == 2 && temp[1].length > 2) {
            return false;
        }
        ;
        return true;
    };
    RegistryComponent.prototype.submit = function () {
        var _this = this;
        var dialogRef;
        if (this.code == "") {
            this.code = Math.random().toString(36).substring(2, 6).toUpperCase();
        }
        if (this.edit) {
            dialogRef = this.dialog.open(EditDialog, {
                disableClose: true,
                width: '500px',
                data: {
                    items: this.items,
                    bought: this.bought,
                    code: this.code,
                    name: this.editName,
                    message: this.editMessage,
                    email: this.editEmail
                }
            });
        }
        else {
            dialogRef = this.dialog.open(RegistryDialog, {
                disableClose: true,
                width: '500px',
                data: {
                    items: this.items,
                    bought: this.bought,
                    code: this.code
                }
            });
        }
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != "Cancel") {
                _this.http.delete(_this.contributionUrl + "?code=" + _this.code).toPromise().then(function (res) {
                    for (var c in _this.contribute) {
                        if (_this.contribute[c] && _this.bought[c] > 0) {
                            var newContribution = {};
                            newContribution["name"] = result.name;
                            newContribution["email"] = result.email;
                            newContribution["message"] = result.message;
                            newContribution["amount"] = _this.bought[c];
                            newContribution["itemid"] = _this.items[c].id;
                            newContribution["code"] = _this.code;
                            _this.http.post(_this.contributionUrl, newContribution, new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: _this.headers })).toPromise().then(function (res) {
                            });
                        }
                        if (_this.edit || (_this.contribute && _this.bought[c] > 0)) {
                            var newItem = {};
                            newItem["raised"] = _this.raised[c];
                            var patchRequest = _this.http.patch(_this.registryUrl + _this.items[c].id + "/", JSON.stringify(newItem), new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: _this.headers }));
                            patchRequest.subscribe();
                        }
                    }
                });
                if (result.email || (_this.getTotal() == 0)) {
                    var email = {};
                    var body = "<h2>Hello";
                    if (result.name) {
                        body = body + " " + result.name + "!</h2>";
                    }
                    else {
                        body = body + "!</h2>";
                    }
                    if (_this.getTotal() == 0) {
                        body = body + "<p>We realize that supporting us financially is not always possible. Please know that we still value your continued support in ways of prayer and love as we start this new chapter in our lives!</p><hr><p><strong>Sean and Tiffanie</strong></p>";
                    }
                    else if (!_this.edit) {
                        body = body + "<p>Thank you for your contribution to our Registry! What you have committed to can be found below. At the wedding there will be an opportunity to leave cash or cheque (payable to Sean Baergen) in order to pay for your committments. If you prefer you can also e-transfer us (sean.tiffanie@gmail.com).</p><p>If you would like to modify your commitment, just return to <a href=http://seanandtiffanie2019.ca/registry>the registry</a> and enter in your code: <strong>" + _this.code + "</strong>";
                    }
                    else {
                        body = body + "<p>Your contribution has been modified. What you have committed to can be found below. At the wedding there will be an opportunity to leave cash or cheque (payable to Sean Baergen) in order to pay for your committments. If you prefer you can also e-transfer us (sean.tiffanie@gmail.com).</p><p>If you would like to further modify your commitment, just return to <a href=http://http://seanandtiffanie2019.ca/registry>the registry</a> and enter in your code: <strong>" + _this.code + "</strong>";
                    }
                    if (_this.getTotal() != 0) {
                        body = body + "<h3>Items Commited To</h3><hr>";
                        for (var b in _this.bought) {
                            if (_this.bought[b]) {
                                body = body + "<p>Item: " + _this.items[b].name + "</p>";
                                body = body + "<p>Designated: $" + _this.bought[b] + "</p><hr>";
                            }
                        }
                        body = body + "<strong>Total: $" + _this.getTotal() + "</strong><hr>";
                        if (result.message) {
                            body = body + "<p>Message: " + result.message + "</p>";
                        }
                        body = body + "<br><p>You can respond to this email with any questions you might have</p><p>Thank you for your support towards us starting this new chapter in our lives!</p><hr><p><strong>Sean and Tiffanie</strong></p>";
                        email["toEmail"] = result.email;
                    }
                    else {
                        email["toEmail"] = _this.editEmail;
                    }
                    email["message"] = body;
                    email["subject"] = "Registry Contribution Confirmation";
                    _this.http.post(_this.contributionUrl + "email/", JSON.stringify(email), new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: _this.headers })).toPromise().then(function (res) {
                    });
                }
                _this.router.navigateByUrl('/home');
            }
        });
    };
    RegistryComponent.prototype.checkCode = function (code) {
        var _this = this;
        this.http.get(this.contributionUrl + "?code=" + code.value.toUpperCase()).toPromise().then(function (res) {
            if (res.json().length != 0) {
                _this.code = code.value.toUpperCase();
                _this.edit = true;
                _this.enterCode = false;
            }
            else {
                var dialog = _this.dialog.open(NotFoundDialog);
                _this.edit = false;
                _this.code = "";
                return;
            }
            for (var _i = 0, _a = res.json(); _i < _a.length; _i++) {
                var c = _a[_i];
                for (var i in _this.items) {
                    _this.opened = true;
                    if (_this.items[i].id == c.itemid) {
                        _this.contribute[i] = true;
                        _this.money[i] = Number(c.amount);
                        _this.bought[i] = Number(c.amount);
                        _this.oldAmounts[i] = Number(c.amount);
                        _this.editName = res.json()[0].name;
                        _this.editMessage = res.json()[0].message;
                        _this.editEmail = res.json()[0].email;
                        break;
                    }
                }
            }
        });
    };
    RegistryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registry',
            template: __webpack_require__(/*! ./registry.component.html */ "./src/app/registry/registry.component.html"),
            styles: [__webpack_require__(/*! ./registry.component.css */ "./src/app/registry/registry.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], RegistryComponent);
    return RegistryComponent;
}());

var RegistryDialog = /** @class */ (function () {
    function RegistryDialog(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]);
    }
    RegistryDialog.prototype.getTotal = function () {
        return (this.data.bought.reduce(function (a, b) { return a + b; }, 0)).toFixed(2);
    };
    RegistryDialog.prototype.getErrorMessage = function () {
        return this.email.hasError('email') ? 'Not a valid email' : '';
    };
    RegistryDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'Registry-Dialog',
            template: __webpack_require__(/*! ./registry-dialog.component.html */ "./src/app/registry/registry-dialog.component.html"),
            styles: [__webpack_require__(/*! ./registry-dialog.component.css */ "./src/app/registry/registry-dialog.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
    ], RegistryDialog);
    return RegistryDialog;
}());

var EditDialog = /** @class */ (function () {
    function EditDialog(data, dialogRef, formBuilder) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.formBuilder = formBuilder;
    }
    EditDialog.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            personName: this.data.name,
            email: [this.data.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            message: this.data.message
        });
    };
    EditDialog.prototype.getTotal = function () {
        return (this.data.bought.reduce(function (a, b) { return a + b; }, 0)).toFixed(2);
    };
    EditDialog.prototype.noItems = function () {
        for (var _i = 0, _a = this.data.bought; _i < _a.length; _i++) {
            var b = _a[_i];
            if (b && b != 0) {
                return false;
            }
        }
        return true;
    };
    EditDialog.prototype.getErrorMessage = function () {
        return this.form.invalid ? 'Not a valid email' : '';
    };
    EditDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'Edit-Dialog',
            template: __webpack_require__(/*! ./edit-dialog.component.html */ "./src/app/registry/edit-dialog.component.html"),
            styles: [__webpack_require__(/*! ./edit-dialog.component.css */ "./src/app/registry/edit-dialog.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], EditDialog);
    return EditDialog;
}());

var NotFoundDialog = /** @class */ (function () {
    function NotFoundDialog() {
    }
    NotFoundDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'Not-Found-Dialog',
            template: "\n    <mat-dialog-content><strong>Code Not Found!</strong><br>\n    Email <a href=\"mailto:sean.tiffanie@gmail.com\">sean.tiffanie@gmail.com</a> if you have lost your code</mat-dialog-content>\n    <mat-dialog-actions>\n    <button mat-raised-button [mat-dialog-close]=\"'OK'\" cdkFocusInitial>OK</button>\n    </mat-dialog-actions>\n    "
        })
    ], NotFoundDialog);
    return NotFoundDialog;
}());



/***/ }),

/***/ "./src/app/rsvp/rsvp.component.css":
/*!*****************************************!*\
  !*** ./src/app/rsvp/rsvp.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n    text-align: center;\n}\n\nmat-radio-button {\n    padding-left: 10px !important;\n    padding-right: 10px !important;\n}\n\nmat-form-field {\n    padding-left: 1%;\n}\n\n.submitButton {\n    text-align: center;\n    display: block;\n    margin: auto;\n    border-radius: 20px !important;\n    background-color: #3f51b5;\n    color: white;\n}\n\n.movein {\n    margin-left: 5%;\n    margin-right: 5%;\n}\n\nhtml {\n    font-family: 'Slabo 27px', serif;\n    font-size: 15px;\n}\n\nbutton {\n    font-family: 'Slabo 27px', serif;\n    font-size: 15px;\n}\n"

/***/ }),

/***/ "./src/app/rsvp/rsvp.component.html":
/*!******************************************!*\
  !*** ./src/app/rsvp/rsvp.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div *ngIf=\"!loggedin\">\n        <form class=\"center\">\n            <p>Plea enter the RSVP code found on your invitation:</p>\n            <mat-form-field appearance=\"outline\">\n                <input matInput placeholder=\"RSVP Code\" name=\"code\" [(ngModel)]=\"code\">\n                <mat-hint>The Code is on the Invitation</mat-hint>\n            </mat-form-field>\n            <button mat-fab (click)=\"checkCode()\" color=\"primary\">Submit</button>\n            <div *ngIf=\"incorrect\">\n                <mat-error>Incorrect Code!</mat-error>\n            </div>\n        </form>\n    </div>\n    <div *ngIf=\"loggedin\">\n        <p class=\"center\">Enter your name to RSVP for your party:</p>\n        <form class=\"center\">\n            <mat-form-field appearance=\"outline\">\n            <input matInput ngModel name=\"firstNameLabel\" placeholder=\"First Name\" #firstName required>\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\">\n            <input matInput ngModel name=\"lastNameLabel\" placeholder=\"Last Name\" #lastName required>\n            </mat-form-field>\n            <button mat-fab (click)=\"getNames(firstName.value, lastName.value)\" [disabled]=\"!firstName.value || !lastName.value\" color=\"primary\">Search</button>\n        </form>\n        <div *ngIf=\"incorrect\">\n                <mat-error class=\"center\">Name not Found!</mat-error>\n            </div>\n\n        <div *ngIf=\"guests.length!=0\">\n            <form #rsvpForm=\"ngForm\" (ngSubmit)=\"actionOnSubmit(rsvpForm)\" novalidate class=\"movein\">\n                <div *ngFor=\"let g of guests; let i = index\">\n                    <hr>\n                    <span *ngIf=\"!g.added\">\n                    <h3>Guest {{i+1}}: {{g.name}}</h3>\n                    <br>\n                        <mat-radio-group name=\"{{g.name + 'rsvp'}}\" [(ngModel)]=\"radio[i]\" required>\n                            <mat-radio-button color=\"primary\" value=\"true\">Attending :)</mat-radio-button>\n                            <mat-radio-button color=\"primary\" value=\"false\">Not Attending :(</mat-radio-button>\n                        </mat-radio-group>\n                        <span *ngIf=\"radio[i]=='true'\">\n                            <mat-form-field>\n                                <mat-select name=\"{{g.name + 'dietSelect'}}\" placeholder=\"Dietary Restrictions\" [(ngModel)]=\"restrictions[i]\" multiple required #select=\"ngModel\">\n                                    <mat-option (click)=\"deselect(restrictions[i], i)\" value=\"none\">None</mat-option>\n                                    <mat-option (click)=\"removeNone(restrictions[i], i)\" value=\"gluten\">Gluten Free</mat-option>\n                                    <mat-option (click)=\"removeNone(restrictions[i], i)\" value=\"dairy\">Dairy Free</mat-option>\n                                    <mat-option (click)=\"removeNone(restrictions[i], i)\" value=\"vegetarian\">Vegetarian</mat-option>\n                                    <mat-option (click)=\"removeNone(restrictions[i], i)\" value=\"vegan\">Vegan</mat-option>\n                                    <mat-option (click)=\"removeNone(restrictions[i], i)\" value=\"other\">Other</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                            <span *ngIf=\"needOther(i)\">\n                                <mat-form-field [style.fontSize.px]=12>\n                                    <textarea matInput name=\"{{g.name + 'otherDiet'}}\" [(ngModel)]=\"extra[i]\" default=\"\" placeholder=\"Other Dietary Restictions\" #ogother=\"ngModel\"[maxlength]=100 required></textarea>\n                                </mat-form-field>\n                                <show-errors [control]=\"ogother\"></show-errors>\n                            </span>\n                            <mat-form-field [style.fontSize.px]=12>\n                                <textarea matInput name=\"{{g.name + 'tea'}}\" [(ngModel)]=\"tea[i]\" default=\"\" placeholder=\"Tea Suggestions\" [maxlength]=100></textarea>\n                                <mat-hint>Tea you would drink at the reception</mat-hint>\n                            </mat-form-field>\n                            <mat-form-field [style.fontSize.px]=12>\n                                <textarea matInput name=\"{{g.name + 'game'}}\" [(ngModel)]=\"game[i]\" default=\"\" placeholder=\"Board Game Suggestions\" [maxlength]=100></textarea>\n                                <mat-hint>Game you would play at the reception</mat-hint>\n                            </mat-form-field>\n                        </span>\n                    </span>\n                </div>\n                <div *ngIf=\"plusone\">\n                    <hr>\n                    Will you bring an additional guest?\n                    <mat-radio-group name=\"plusRsvp\" [(ngModel)]=\"plusOneRadio\" required>\n                        <mat-radio-button color=\"primary\" value=\"true\">Yes</mat-radio-button>\n                        <mat-radio-button color=\"primary\" value=\"false\">No</mat-radio-button>\n                    </mat-radio-group>\n                    <div *ngIf=\"plusOneRadio=='true'\">\n                        <mat-form-field appearance=\"standard\">\n                        <input [(ngModel)]=\"plusFirst\" name=\"first\" matInput placeholder=\"First Name\" required>\n                        </mat-form-field>\n                        <mat-form-field appearance=\"standard\">\n                        <input [(ngModel)]=\"plusLast\" name=\"last\" matInput placeholder=\"Last Name\" required>\n                        </mat-form-field>\n                        <span *ngIf=\"plusOneRadio=='true'\">\n                            <mat-form-field>\n                            <mat-select name=\"plusDietSelect\" placeholder=\"Dietary Restrictions\" [(ngModel)]=\"restrictions['a']\" multiple required #plusSelect=\"ngModel\">\n                                <mat-option (click)=\"deselect(restrictions['a'], 'a')\" value=\"none\">None</mat-option>\n                                <mat-option (click)=\"removeNone(restrictions['a'], 'a')\" value=\"gluten\">Gluten Free</mat-option>\n                                <mat-option (click)=\"removeNone(restrictions['a'], 'a')\" value=\"dairy\">Dairy Free</mat-option>\n                                <mat-option (click)=\"removeNone(restrictions['a'], 'a')\" value=\"vegetarian\">Vegetarian</mat-option>\n                                <mat-option (click)=\"removeNone(restrictions['a'], 'a')\" value=\"vegan\">Vegan</mat-option>\n                                <mat-option (click)=\"removeNone(restrictions['a'], 'a')\" value=\"other\">Other</mat-option>\n                            </mat-select>\n                            </mat-form-field>\n                            <span *ngIf=\"needOther('a')\">\n                                <mat-form-field [style.fontSize.px]=12>\n                                    <textarea matInput name=\"plusOtherDiet\" [(ngModel)]=\"extra['a']\" default=\"\" placeholder=\"Other Dietary Restictions\" [maxlength]=100 #other=\"ngModel\" required></textarea>\n                                </mat-form-field>\n                                <show-errors [control]=\"other\"></show-errors>\n                            </span>\n                            <mat-form-field [style.fontSize.px]=12>\n                                <textarea matInput name=\"{{'otherTea'}}\" [(ngModel)]=\"tea['a']\" default=\"\" placeholder=\"Tea Suggestions\" [maxlength]=100></textarea>\n                                <mat-hint>Tea you would drink at the reception</mat-hint>\n                            </mat-form-field>\n                            <mat-form-field [style.fontSize.px]=12>\n                                <textarea matInput name=\"{{'otherGame'}}\" [(ngModel)]=\"game['a']\" default=\"\" placeholder=\"Board Game Suggestions\" [maxlength]=100></textarea>\n                                <mat-hint>Game you would play at the reception</mat-hint>\n                            </mat-form-field>\n                        </span>\n                    </div>\n                </div>\n            </form>\n            <hr class=\"movein\">\n            <div class=center *ngIf=\"!rsvpForm.valid\">\n                <p style=\"color:red\">There seems to be some missing information!</p>\n            </div>\n    <span class=\"outside\">\n            <button class=\"submitButton\" mat-raised-button (click)=\"submitInfo()\" [disabled]=\"!rsvpForm.valid\">Submit RSVP</button>\n        </span>\n        </div>\n    </div>\n    <p class=\"center\" style=\"margin-top:10px\">Please contact us at <a href=\"mailto:sean.tiffanie@gmail.com\">sean.tiffanie@gmail.com</a> if you have any questions</p>\n"

/***/ }),

/***/ "./src/app/rsvp/rsvp.component.ts":
/*!****************************************!*\
  !*** ./src/app/rsvp/rsvp.component.ts ***!
  \****************************************/
/*! exports provided: RsvpComponent, DoneDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RsvpComponent", function() { return RsvpComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoneDialog", function() { return DoneDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RsvpComponent = /** @class */ (function () {
    function RsvpComponent(http, dialog, router) {
        this.http = http;
        this.dialog = dialog;
        this.router = router;
        this.loggedin = false;
        this.incorrect = false;
        this.found = false;
        this.plusone = false;
        this.guests = [];
        this.restrictions = [];
        this.radio = [];
        this.extra = [];
        this.game = [];
        this.tea = [];
        this.host = 'http://django-envtwo.juxsripmvg.ca-central-1.elasticbeanstalk.com';
        // host = 'http://localhost:8000'
        this.url = this.host + '/wedding/guestsapi/';
        this.dieturl = this.host + '/wedding/dietaryapi/';
        this.contributionUrl = this.host + '/';
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            'Content-Type': 'application/json',
            'X-CSRFToken': this.getCookie('csrftoken')
        });
    }
    RsvpComponent.prototype.ngOnInit = function () {
    };
    /** from https://stackoverflow.com/questions/43248131/csrf-token-missing-or-incorrect-in-angular-2-django-1-10-6 **/
    RsvpComponent.prototype.getCookie = function (name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2)
            return parts.pop().split(";").shift();
    };
    RsvpComponent.prototype.checkCode = function () {
        if (this.code.toUpperCase() == "ST2019") {
            this.loggedin = true;
            this.incorrect = false;
        }
        else {
            this.loggedin = false;
            this.incorrect = true;
            this.code = "";
        }
    };
    RsvpComponent.prototype.getDiet = function (guestid, index) {
        var _this = this;
        return this.http.get(this.dieturl + "?guest=" + guestid).toPromise().then(function (res) {
            _this.restrictions[index] = [];
            for (var _i = 0, _a = res.json(); _i < _a.length; _i++) {
                var r = _a[_i];
                if (!['gluten', 'dairy', 'vegetarian', 'vegan'].includes(r.restriction)) {
                    _this.restrictions[index].push("other");
                    _this.extra[index] = r.restriction;
                }
                else {
                    _this.restrictions[index].push(r.restriction);
                }
            }
            if (_this.restrictions[index].length == 0) {
                _this.restrictions[index].push('none');
            }
        });
    };
    RsvpComponent.prototype.getNames = function (first, last) {
        var _this = this;
        var rsvp = 0;
        var url1 = this.url + "?name=" + first + " " + last;
        this.http.get(url1).toPromise().then(function (res) {
            return res.json()[0];
        }).then(function (res) {
            if (!res) {
                _this.incorrect = true;
                return;
            }
            else {
                _this.incorrect = false;
            }
            var rsvp = res.rsvp;
            var url2 = _this.url + "?rsvp=" + rsvp;
            _this.http.get(url2).toPromise().then(function (resp) {
                _this.guests = resp.json();
                _this.plusOneRadio = "false";
                for (var g in _this.guests) {
                    if (_this.guests[g].plusone) {
                        _this.plusone = true;
                    }
                    if (_this.guests[g].added) {
                        _this.plusOneRadio = "true";
                        _this.plusFirst = _this.guests[g].name.split(" ")[0];
                        _this.plusLast = _this.guests[g].name.slice(_this.plusFirst.length + 1);
                        _this.getDiet(_this.guests[g].guestid, 'a');
                        _this.tea['a'] = _this.guests[g].tea;
                        _this.game['a'] = _this.guests[g].game;
                    }
                    else {
                        if (_this.guests[g].response == undefined) {
                            _this.plusOneRadio = "";
                        }
                        _this.radio[g] = _this.guests[g].response + "";
                        _this.getDiet(_this.guests[g].guestid, g);
                        _this.tea[g] = _this.guests[g].tea;
                        _this.game[g] = _this.guests[g].game;
                    }
                }
            });
        });
    };
    RsvpComponent.prototype.deselect = function (values, i) {
        if (values[0] == "none") {
            this.restrictions[i] = ["none"];
        }
    };
    RsvpComponent.prototype.removeNone = function (values, i) {
        if (values[0] == "none") {
            this.restrictions[i] = values.slice(1);
        }
    };
    RsvpComponent.prototype.needOther = function (i) {
        if (this.restrictions[i] && this.restrictions[i].includes("other")) {
            return true;
        }
        else {
            return false;
        }
    };
    RsvpComponent.prototype.submitInfo = function () {
        var _this = this;
        for (var i in this.guests) {
            this.updateResponse(i);
        }
        if (this.plusone) {
            this.addPlusOne();
        }
        var dialogRef = this.dialog.open(DoneDialog, {
            width: '350px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.email) {
                var email = {};
                var body = "<p>Your RSVP details for Sean and Tiffanie's wedding on June 15, 2019 are below (To change anything just return to <a href=http://seanandtiffanie2019.ca/rsvp>the rsvp page</a> and make any necessary changes):</p><hr>";
                for (var g in _this.guests) {
                    if (_this.guests[g].added && _this.plusOneRadio == 'false') {
                        continue;
                    }
                    body = body + "<p><strong>" + _this.guests[g].name + "</strong></p><p> Response: ";
                    if (!_this.guests[g].added) {
                        var attend = (_this.radio[g] == 'true') ? "Yes" : "No";
                        body = body + attend;
                        if (_this.radio[g] == 'true') {
                            body = body + "</p><p>Dietary Restrictions: ";
                            var needExtra = false;
                            for (var _i = 0, _a = _this.restrictions[g]; _i < _a.length; _i++) {
                                var r = _a[_i];
                                if (r == "other") {
                                    needExtra = true;
                                }
                                else {
                                    body = body + r + ", ";
                                }
                            }
                            if (needExtra) {
                                body = body + _this.extra[g];
                            }
                            else {
                                body = body.slice(0, -2);
                            }
                            body = body + "</p><p>Game Suggestion: " + _this.game[g];
                            body = body + "</p><p>Tea Suggestion: " + _this.tea[g];
                        }
                    }
                    else {
                        body = body + "Yes";
                        body = body + "</p><p>Dietary Restrictions: ";
                        var needExtra = false;
                        for (var _b = 0, _c = _this.restrictions['a']; _b < _c.length; _b++) {
                            var r = _c[_b];
                            if (r == "other") {
                                needExtra = true;
                            }
                            else {
                                body = body + r + ", ";
                            }
                        }
                        if (needExtra) {
                            body = body + _this.extra['a'];
                        }
                        else {
                            body = body.slice(0, -2);
                        }
                        body = body + "</p><p>Game Suggestion: " + _this.game['a'];
                        body = body + "</p><p>Tea Suggestion: " + _this.tea['a'];
                    }
                    body = body + "</p><hr>";
                }
                if (_this.plusone && _this.plusOneRadio == 'false') {
                    body = body + "<p>No Plus One</p>";
                }
                email["toEmail"] = result.email;
                email["message"] = body;
                email["subject"] = "Your RSVP Details";
                _this.http.post(_this.contributionUrl + "email/", JSON.stringify(email), new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: _this.headers })).toPromise().then(function (res) {
                });
            }
            // this.router.navigateByUrl('/home');
        });
    };
    RsvpComponent.prototype.updateResponse = function (i) {
        var _this = this;
        if (this.guests[i].added) {
            return;
        }
        var guest = this.guests[i];
        var id = guest.guestid;
        var other = this.extra[i];
        var restrictions = this.restrictions[i];
        var rsvp = this.radio[i];
        if (rsvp == "false") {
            restrictions = {};
        }
        this.http.delete(this.dieturl + "?guest=" + id, new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: this.headers })).toPromise().then(function (res) {
            for (var _i = 0, restrictions_1 = restrictions; _i < restrictions_1.length; _i++) {
                var r = restrictions_1[_i];
                if (r == 'none') {
                    break;
                }
                var dietBody = {};
                if (r == 'other') {
                    dietBody["restriction"] = other;
                }
                else {
                    dietBody["restriction"] = r;
                }
                dietBody["guest_id"] = id;
                var dietRequest = _this.http.post(_this.dieturl, dietBody, new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: _this.headers }));
                dietRequest.subscribe();
            }
        });
        // var headers = new Headers();
        if (rsvp == "true") {
            guest.response = true;
        }
        else if (rsvp == "false") {
            guest.response = false;
        }
        guest.tea = this.tea[i];
        guest.game = this.game[i];
        var putRequest = this.http.put(this.url + id + "/", JSON.stringify(guest), new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: this.headers }));
        putRequest.subscribe();
    };
    RsvpComponent.prototype.addPlusOne = function () {
        var _this = this;
        var restrictions = this.restrictions['a'];
        var other = this.extra['a'];
        var newGuest = {};
        newGuest["name"] = this.plusFirst + " " + this.plusLast;
        newGuest["response"] = true;
        newGuest["rsvp"] = this.guests[0].rsvp;
        newGuest["plusone"] = false;
        newGuest["added"] = true;
        newGuest["game"] = this.game['a'];
        newGuest["tea"] = this.tea['a'];
        this.http.delete(this.url + "?rsvp=" + this.guests[0].rsvp, new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: this.headers })).toPromise().then(function (res) {
            if (_this.plusOneRadio == "true") {
                _this.http.post(_this.url, newGuest, new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: _this.headers })).toPromise().then(function (res) {
                    _this.http.delete(_this.dieturl + "?guest=" + res.json().guestid).toPromise().then(function () {
                        for (var _i = 0, restrictions_2 = restrictions; _i < restrictions_2.length; _i++) {
                            var r = restrictions_2[_i];
                            if (r == 'none') {
                                break;
                            }
                            var dietBody = {};
                            if (r == 'other') {
                                dietBody["restriction"] = other;
                            }
                            else {
                                dietBody["restriction"] = r;
                            }
                            dietBody["guest_id"] = res.json().guestid;
                            var dietRequest = _this.http.post(_this.dieturl, dietBody, new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: _this.headers }));
                            dietRequest.subscribe();
                        }
                    });
                });
            }
        });
    };
    RsvpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rsvp',
            template: __webpack_require__(/*! ./rsvp.component.html */ "./src/app/rsvp/rsvp.component.html"),
            styles: [__webpack_require__(/*! ./rsvp.component.css */ "./src/app/rsvp/rsvp.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RsvpComponent);
    return RsvpComponent;
}());

var DoneDialog = /** @class */ (function () {
    function DoneDialog(dialogRef) {
        this.dialogRef = dialogRef;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]);
    }
    DoneDialog.prototype.getErrorMessage = function () {
        return this.email.hasError('email') ? 'Not a valid email' : '';
    };
    DoneDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'Done-Dialog',
            template: "\n        <h2 mat-dialog-title>Thank you for your response!</h2>\n        <p>If you would like to receive an email confirmation of your rsvp, please enter your email below</p>\n        <form #rsvpEmail=\"ngForm\">\n          <mat-form-field>\n            <input [formControl]=\"email\" name=\"emailValue\" placeholder=\"Enter Email for Confirmation (Optional)\" matInput>\n            <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\n          </mat-form-field>\n        </form>\n        <mat-dialog-actions>\n        <button mat-raised-button [mat-dialog-close]=\"{'email':email.value}\" [disabled]=\"email.invalid\">OK</button>\n        </mat-dialog-actions>\n    "
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], DoneDialog);
    return DoneDialog;
}());



/***/ }),

/***/ "./src/app/show-errors/show-errors.component.css":
/*!*******************************************************!*\
  !*** ./src/app/show-errors/show-errors.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/show-errors/show-errors.component.html":
/*!********************************************************!*\
  !*** ./src/app/show-errors/show-errors.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span *ngIf=\"shouldShowErrors()\">\n    <span style=\"color: red\" *ngFor=\"let error of listOfErrors()\">{{error}}</span>\n</span>\n"

/***/ }),

/***/ "./src/app/show-errors/show-errors.component.ts":
/*!******************************************************!*\
  !*** ./src/app/show-errors/show-errors.component.ts ***!
  \******************************************************/
/*! exports provided: ShowErrorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowErrorsComponent", function() { return ShowErrorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowErrorsComponent = /** @class */ (function () {
    function ShowErrorsComponent() {
    }
    ShowErrorsComponent_1 = ShowErrorsComponent;
    ShowErrorsComponent.prototype.shouldShowErrors = function () {
        return !!(this.control && this.control.errors);
    };
    ShowErrorsComponent.prototype.listOfErrors = function () {
        var _this = this;
        return Object.keys(this.control.errors)
            .map(function (field) { return _this.getMessage(field, _this.control.errors[field]); });
    };
    ShowErrorsComponent.prototype.getMessage = function (type, params) {
        return ShowErrorsComponent_1.errorMessages[type](params);
    };
    ShowErrorsComponent.prototype.ngOnInit = function () {
    };
    ShowErrorsComponent.errorMessages = {
        'required': function () { return 'This field is required!'; }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ShowErrorsComponent.prototype, "control", void 0);
    ShowErrorsComponent = ShowErrorsComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'show-errors',
            template: __webpack_require__(/*! ./show-errors.component.html */ "./src/app/show-errors/show-errors.component.html"),
            styles: [__webpack_require__(/*! ./show-errors.component.css */ "./src/app/show-errors/show-errors.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShowErrorsComponent);
    return ShowErrorsComponent;
    var ShowErrorsComponent_1;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/seanbaergen/Documents/wedding/weddingsitedjango/front/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map