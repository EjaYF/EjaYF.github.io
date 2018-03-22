webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "@media (max-width: 767px) {\r\n  /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\r\n  .body-content {\r\n    padding-top: 50px;\r\n  }\r\n}\r\n\r\n\r\n#maincontainer {\r\n  display: block;\r\n}\r\n\r\n\r\nmat-sidenav-container {\r\n  margin-top: 64px !important;\r\n}\r\n\r\n\r\n#contentcontainer {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 100%;\r\n          flex: 1 1 100%;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  min-height: 100%;\r\n  max-height: 100%;\r\n}\r\n\r\n\r\n.mat-sidenav-content {\r\n  top: 200px;\r\n  position: relative;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-toolbar></app-toolbar>\r\n<mat-sidenav-container fullscreen>\r\n  <mat-sidenav #end align=\"end\" mode=\"side\">\r\n    <button md-button #mybutton (click)=\"end.close()\">Close</button>\r\n  </mat-sidenav>\r\n  <div id=\"contentcontainer\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__map_map_component__ = __webpack_require__("./src/app/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__search_search_component__ = __webpack_require__("./src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__results_results_component__ = __webpack_require__("./src/app/results/results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_material_module__ = __webpack_require__("./src/app/shared/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__toolbar_toolbar_component__ = __webpack_require__("./src/app/toolbar/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__environments_environment_prod__ = __webpack_require__("./src/environments/environment.prod.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_services_zipcode_service__ = __webpack_require__("./src/app/shared/services/zipcode.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__like_like_component__ = __webpack_require__("./src/app/like/like.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__map_map_component__["a" /* MapComponent */],
                __WEBPACK_IMPORTED_MODULE_8__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_9__results_results_component__["a" /* ResultsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__toolbar_toolbar_component__["a" /* ToolbarComponent */],
                __WEBPACK_IMPORTED_MODULE_17__like_like_component__["a" /* LikeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_11__shared_material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */].withServerTransition({ appId: 'ng-cli-universal' }),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_routes__["a" /* AppRoutes */]),
                __WEBPACK_IMPORTED_MODULE_14__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: __WEBPACK_IMPORTED_MODULE_15__environments_environment_prod__["a" /* environment */].googleapikey
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_16__shared_services_zipcode_service__["a" /* ZipCodeService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map_map_component__ = __webpack_require__("./src/app/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search_component__ = __webpack_require__("./src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__like_like_component__ = __webpack_require__("./src/app/like/like.component.ts");




var AppRoutes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'Home', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    { path: 'Search', component: __WEBPACK_IMPORTED_MODULE_2__search_search_component__["a" /* SearchComponent */] },
    { path: 'Map', component: __WEBPACK_IMPORTED_MODULE_0__map_map_component__["a" /* MapComponent */] },
    { path: 'Like', component: __WEBPACK_IMPORTED_MODULE_3__like_like_component__["a" /* LikeComponent */] },
    {
        // catch all route
        path: '**',
        redirectTo: 'Home'
    }
];


/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".explanation-card {\r\n  max-width: 400px;\r\n  -webkit-box-align:center;\r\n      -ms-flex-align:center;\r\n          align-items:center;\r\n}\r\n\r\n.explanation-header-image {\r\n  background-image: url('ejay.f0cf314d1d78aeb5c898.png');\r\n  background-size: cover;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <mat-card class=\"explanation-card\">\r\n    <mat-card-header>\r\n      <div mat-card-avatar class=\"explanation-header-image\"></div>\r\n      <mat-card-title>Ejay's ZipTool</mat-card-title>\r\n      <mat-card-subtitle>Postcode zoek applicatie</mat-card-subtitle>\r\n    </mat-card-header>\r\n    <img mat-card-image src=\"../../assets/map-netherlands-small.jpg\" alt=\"Postcode map\">\r\n    <mat-card-content>\r\n      <p>\r\n        Met deze app kun je zoeken op een postcode en zal op de kaart getoond worden waar deze zich bevind.\r\n      </p>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <button mat-button [routerLink]='[\"/Search\"]'>BEGIN</button>\r\n      <button mat-button [routerLink]='[\"/Like\"]'>LIKE</button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")],
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/like/like.component.css":
/***/ (function(module, exports) {

module.exports = ".like-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.like-card {\r\n  max-width: 400px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/like/like.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <mat-card class=\"like-card\">\r\n    <mat-card-title>\r\n      Ik vind dit leuk!\r\n    </mat-card-title>\r\n    <mat-card-content>\r\n      <p>Ik ben blij verrast dat je dit leuk vind!</p>\r\n\r\n      <p>Ik heb dit gemaakt als proof-of-concept voor de Angular Fundamentals cursus van <a href=\"https://github.com/PeterKassenaar\" target=\"_blank\">Peter Kassenaar</a> die ik heb gevolgd.</p>\r\n\r\n      <p>Wil je meer informatie of contact met me opnemen, vind je me op:</p>\r\n\r\n      <a href=\"https://github.com/EjaYF\" target=\"_blank\">GitHub/EjaYF</a>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/like/like.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LikeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LikeComponent = /** @class */ (function () {
    function LikeComponent() {
    }
    LikeComponent.prototype.ngOnInit = function () {
    };
    LikeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-like',
            template: __webpack_require__("./src/app/like/like.component.html"),
            styles: [__webpack_require__("./src/app/like/like.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LikeComponent);
    return LikeComponent;
}());



/***/ }),

/***/ "./src/app/map/map.component.css":
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n  height: 300px;\r\n}\r\n\r\n.map-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.map-card {\r\n  max-width: 400px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <mat-card class=\"map-card\">\r\n    <mat-card-content>\r\n      <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\r\n        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n      </agm-map>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_zipcode_service__ = __webpack_require__("./src/app/shared/services/zipcode.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapComponent = /** @class */ (function () {
    function MapComponent(zipCodeService) {
        this.zipCodeService = zipCodeService;
        this.title = 'Map';
        this.lat = 52.2373951689151;
        this.lng = 6.8435707307834;
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.zipCodeService.Stream.subscribe((function (res) {
            if (res && res.details && res.details.length > 0) {
                _this.lat = parseFloat(res.details[0].lat);
                _this.lng = parseFloat(res.details[0].lon);
                console.log("New lat/long", _this.lat, _this.lng);
            }
        }));
    };
    MapComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    MapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-map',
            template: __webpack_require__("./src/app/map/map.component.html"),
            styles: [__webpack_require__("./src/app/map/map.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_zipcode_service__["a" /* ZipCodeService */]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/results/results.component.css":
/***/ (function(module, exports) {

module.exports = ".results-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.results-card {\r\n  max-width: 400px;\r\n}\r\n\r\n.noresult {\r\n  border-left: 5px solid rgba(255, 0, 0, 0.6);\r\n}\r\n\r\n.result {\r\n  border-left: 5px solid rgba(0, 255, 0, 0.6);\r\n}\r\n"

/***/ }),

/***/ "./src/app/results/results.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\r\n  <mat-card class=\"results-card\" [ngClass]=\"{'result' : hasResult, 'noresult' : !hasResult}\">\r\n    <mat-card-title *ngIf=\"hasResult\">\r\n      Resultaat:\r\n    </mat-card-title>\r\n    <mat-card-content>\r\n      <div *ngIf=\"hasResult\">\r\n\r\n        <div>{{street}}</div>\r\n        <div>{{city}} ({{province}})</div>\r\n      </div>\r\n      <div *ngIf=\"!hasResult && !isFirstResult\">Geen resultaten. Geef een nieuwe zoekopdracht in.</div>\r\n      <div *ngIf=\"isFirstResult\">Geef een nieuwe zoekopdracht in om resultaten te tonen.</div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/results/results.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_zipcode_service__ = __webpack_require__("./src/app/shared/services/zipcode.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResultsComponent = /** @class */ (function () {
    function ResultsComponent(zipCodeService) {
        this.zipCodeService = zipCodeService;
        this.isFirstResult = true;
    }
    ResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.zipCodeService.Stream.subscribe((function (res) {
            _this.isFirstResult = false;
            if (res && res.details && res.details.length > 0) {
                _this.hasResult = true;
                _this.street = res.details[0].street;
                _this.city = res.details[0].city;
                _this.province = res.details[0].province;
            }
            else {
                _this.hasResult = false;
            }
        }));
    };
    ResultsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], ResultsComponent.prototype, "zipCodeResult", void 0);
    ResultsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-results',
            template: __webpack_require__("./src/app/results/results.component.html"),
            styles: [__webpack_require__("./src/app/results/results.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_zipcode_service__["a" /* ZipCodeService */]])
    ], ResultsComponent);
    return ResultsComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/***/ (function(module, exports) {

module.exports = ".search-full-width\r\n{\r\n  width:100%;\r\n}\r\n\r\n.search-card\r\n{\r\n  max-width:400px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <mat-card class=\"search-card\">\r\n    <mat-card-content>\r\n      <form #myForm=\"ngForm\">\r\n        <mat-form-field class=\"search-full-width\">\r\n          <input matInput placeholder=\"Postcode\" value=\"\" #zipcode pattern=\"[A-Za-z]{4}/s{0,1}[0-9]*\">\r\n        </mat-form-field>\r\n        <mat-form-field class=\"search-full-width\">\r\n          <input matInput placeholder=\"Huisnummer\" value=\"\" #housenumber>\r\n        </mat-form-field>\r\n      </form>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <button mat-button (click)=\"getAddress(zipcode, housenumber)\" [disabled]=\"zipcode.value.length==0 || housenumber.value.length==0\">ZOEKEN</button>\r\n      <button mat-button (click)=\"clearAddress(zipcode, housenumber)\" [disabled]=\"zipcode.value.length==0 || housenumber.value.length==0\">LEEGMAKEN</button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</div>\r\n\r\n<app-results></app-results>\r\n\r\n<app-map *ngIf=\"hasResult\">\r\n\r\n</app-map>\r\n\r\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_zipcode_service__ = __webpack_require__("./src/app/shared/services/zipcode.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponent = /** @class */ (function () {
    function SearchComponent(zipCodeService) {
        this.zipCodeService = zipCodeService;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.zipCodeService.Stream.subscribe(function (next) {
            _this.hasResult = (next != null && next.details != null && next.details.length > 0);
        });
    };
    SearchComponent.prototype.getAddress = function (zipcode, housenumber) {
        this.currentAddress = {
            zipcode: zipcode.value,
            housenumber: housenumber.value
        };
        this.zipCodeService.search(this.currentAddress);
        console.log("Search request : " + this.currentAddress.zipcode + " - " + this.currentAddress.housenumber);
    };
    SearchComponent.prototype.clearAddress = function (zipcode, place) {
        zipcode.value = '';
        place.value = '';
        this.currentAddress = null;
        this.zipCodeService.clear();
        console.log("Cleared the form");
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("./src/app/search/search.component.html"),
            styles: [__webpack_require__("./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_zipcode_service__["a" /* ZipCodeService */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/shared/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatTabsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatTabsModule */]
            ],
            providers: [],
            bootstrap: []
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/shared/services/zipcode.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZipCodeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment_prod__ = __webpack_require__("./src/environments/environment.prod.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// This is a shared service
var ZipCodeService = /** @class */ (function () {
    function ZipCodeService(httpClient) {
        this.httpClient = httpClient;
        this.Stream = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["a" /* Subject */]();
    }
    ZipCodeService.prototype.search = function (address) {
        var _this = this;
        var serviceURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment_prod__["a" /* environment */].zipcodeurl + "?postcode=" + address.zipcode + "&streetnumber=" + address.housenumber + "&ref=localhost";
        var request = this.httpClient.get(serviceURL);
        request.subscribe(function (next) {
            _this.Stream.next(next);
            console.log("Response retreived from ZipCode API", next);
        }, function (error) { console.error("Error in searching ZipCode API"); }, function () { console.log("Request completed!"); });
    };
    ZipCodeService.prototype.clear = function () {
        this.Stream.next();
    };
    ZipCodeService.prototype.ngOnInit = function () {
    };
    ZipCodeService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(errMsg);
    };
    ZipCodeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ZipCodeService);
    return ZipCodeService;
}());



/***/ }),

/***/ "./src/app/toolbar/toolbar.component.css":
/***/ (function(module, exports) {

module.exports = "mat-toolbar {\r\n  background: rgb(0,87,142) !important;\r\n  position: relative;\r\n  z-index: 2;\r\n  -webkit-box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 0px 2px 2px rgba(0, 0, 0, 0.098), 0px 0px 5px 1px rgba(0, 0, 0, 0.084);\r\n          box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 0px 2px 2px rgba(0, 0, 0, 0.098), 0px 0px 5px 1px rgba(0, 0, 0, 0.084);\r\n}\r\n\r\n.site-content-toolbar h1 {\r\n  color:#ffffff;\r\n  padding-left:10px;\r\n}\r\n\r\n.mat-whiteframe-glow-z1 {\r\n  -webkit-box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 0px 2px 2px rgba(0, 0, 0, 0.098), 0px 0px 5px 1px rgba(0, 0, 0, 0.084);\r\n          box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 0px 2px 2px rgba(0, 0, 0, 0.098), 0px 0px 5px 1px rgba(0, 0, 0, 0.084);\r\n}\r\n\r\n.menu--off {\r\n  position: absolute;\r\n  left: -50%;\r\n  width: 50%;\r\n  display: block;\r\n  background: #eee;\r\n  min-height: 600px;\r\n  height: 125%;\r\n  margin-top: 1em;\r\n  -webkit-transition: all 300ms;\r\n  transition: all 300ms;\r\n}\r\n\r\n.menu--on {\r\n  left: 0;\r\n  -webkit-box-shadow: 8px 8px 20px 0 rgba(0, 0, 0, 0.2);\r\n          box-shadow: 8px 8px 20px 0 rgba(0, 0, 0, 0.2);\r\n  -webkit-transition: all 300ms;\r\n  transition: all 300ms;\r\n}\r\n\r\n.material-design-hamburger {\r\n  margin-left: -4px;\r\n}\r\n\r\n.material-design-hamburger button {\r\n    display: block;\r\n    border: none;\r\n    background: none;\r\n    outline: 0;\r\n  }\r\n\r\n.material-design-hamburger__icon {\r\n  padding: 1rem 1rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.material-design-hamburger__layer {\r\n  display: block;\r\n  width: 24px;\r\n  height: 3px;\r\n  background: #eee;\r\n  position: relative;\r\n  -webkit-animation-duration: 300ms;\r\n  animation-duration: 300ms;\r\n  -webkit-animation-timing-function: ease-in-out;\r\n  animation-timing-function: ease-in-out;\r\n}\r\n\r\n.material-design-hamburger__layer:before, .material-design-hamburger__layer:after {\r\n    display: block;\r\n    width: inherit;\r\n    height: 3px;\r\n    position: absolute;\r\n    background: inherit;\r\n    left: 0;\r\n    content: '';\r\n    -webkit-animation-duration: 300ms;\r\n    animation-duration: 300ms;\r\n    -webkit-animation-timing-function: ease-in-out;\r\n    animation-timing-function: ease-in-out;\r\n  }\r\n\r\n.material-design-hamburger__layer:before {\r\n    bottom: 200%;\r\n  }\r\n\r\n.material-design-hamburger__layer:after {\r\n    top: 200%;\r\n  }\r\n\r\n.material-design-hamburger__icon--to-arrow {\r\n  -webkit-animation-name: material-design-hamburger__icon--slide;\r\n  animation-name: material-design-hamburger__icon--slide;\r\n  -webkit-animation-fill-mode: forwards;\r\n  animation-fill-mode: forwards;\r\n}\r\n\r\n.material-design-hamburger__icon--to-arrow:before {\r\n    -webkit-animation-name: material-design-hamburger__icon--slide-before;\r\n    animation-name: material-design-hamburger__icon--slide-before;\r\n    -webkit-animation-fill-mode: forwards;\r\n    animation-fill-mode: forwards;\r\n  }\r\n\r\n.material-design-hamburger__icon--to-arrow:after {\r\n    -webkit-animation-name: material-design-hamburger__icon--slide-after;\r\n    animation-name: material-design-hamburger__icon--slide-after;\r\n    -webkit-animation-fill-mode: forwards;\r\n    animation-fill-mode: forwards;\r\n  }\r\n\r\n.material-design-hamburger__icon--from-arrow {\r\n  -webkit-animation-name: material-design-hamburger__icon--slide-from;\r\n  animation-name: material-design-hamburger__icon--slide-from;\r\n}\r\n\r\n.material-design-hamburger__icon--from-arrow:before {\r\n    -webkit-animation-name: material-design-hamburger__icon--slide-before-from;\r\n    animation-name: material-design-hamburger__icon--slide-before-from;\r\n  }\r\n\r\n.material-design-hamburger__icon--from-arrow:after {\r\n    -webkit-animation-name: material-design-hamburger__icon--slide-after-from;\r\n    animation-name: material-design-hamburger__icon--slide-after-from;\r\n  }\r\n\r\n@-webkit-keyframes material-design-hamburger__icon--slide {\r\n  0% {\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: rotate(180deg);\r\n    transform: rotate(180deg);\r\n  }\r\n}\r\n\r\n@keyframes material-design-hamburger__icon--slide {\r\n  0% {\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: rotate(180deg);\r\n    transform: rotate(180deg);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes material-design-hamburger__icon--slide-before {\r\n  0% {\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n    margin: 3% 37%;\r\n    width: 75%;\r\n  }\r\n}\r\n\r\n@keyframes material-design-hamburger__icon--slide-before {\r\n  0% {\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n    margin: 3% 37%;\r\n    width: 75%;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes material-design-hamburger__icon--slide-after {\r\n  0% {\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: rotate(-45deg);\r\n    transform: rotate(-45deg);\r\n    margin: 3% 37%;\r\n    width: 75%;\r\n  }\r\n}\r\n\r\n@keyframes material-design-hamburger__icon--slide-after {\r\n  0% {\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: rotate(-45deg);\r\n    transform: rotate(-45deg);\r\n    margin: 3% 37%;\r\n    width: 75%;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes material-design-hamburger__icon--slide-from {\r\n  0% {\r\n    -webkit-transform: rotate(-180deg);\r\n    transform: rotate(-180deg);\r\n  }\r\n\r\n  100% {\r\n  }\r\n}\r\n\r\n@keyframes material-design-hamburger__icon--slide-from {\r\n  0% {\r\n    -webkit-transform: rotate(-180deg);\r\n    transform: rotate(-180deg);\r\n  }\r\n\r\n  100% {\r\n  }\r\n}\r\n\r\n@-webkit-keyframes material-design-hamburger__icon--slide-before-from {\r\n  0% {\r\n    -webkit-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n    margin: 3% 37%;\r\n    width: 75%;\r\n  }\r\n\r\n  100% {\r\n  }\r\n}\r\n\r\n@keyframes material-design-hamburger__icon--slide-before-from {\r\n  0% {\r\n    -webkit-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n    margin: 3% 37%;\r\n    width: 75%;\r\n  }\r\n\r\n  100% {\r\n  }\r\n}\r\n\r\n@-webkit-keyframes material-design-hamburger__icon--slide-after-from {\r\n  0% {\r\n    -webkit-transform: rotate(-45deg);\r\n    transform: rotate(-45deg);\r\n    margin: 3% 37%;\r\n    width: 75%;\r\n  }\r\n\r\n  100% {\r\n  }\r\n}\r\n\r\n@keyframes material-design-hamburger__icon--slide-after-from {\r\n  0% {\r\n    -webkit-transform: rotate(-45deg);\r\n    transform: rotate(-45deg);\r\n    margin: 3% 37%;\r\n    width: 75%;\r\n  }\r\n\r\n  100% {\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/toolbar/toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar layout=\"row\" class=\"mat-whiteframe-glow-z1 site-content-toolbar\">\r\n\r\n  <section class=\"material-design-hamburger\">\r\n    <button class=\"material-design-hamburger__icon\" [matMenuTriggerFor]=\"menu\">\r\n      <span class=\"material-design-hamburger__layer\"></span>\r\n    </button>\r\n  </section>\r\n\r\n  <mat-menu #menu>\r\n    <button mat-menu-item [routerLink]='[\"/Home\"]'>\r\n      <mat-icon>info outline</mat-icon>\r\n      <span>Over</span>\r\n    </button>\r\n    <button mat-menu-item [routerLink]='[\"/Search\"]'>\r\n      <mat-icon>streetview</mat-icon>\r\n      <span>Zoeken</span>\r\n    </button>\r\n  </mat-menu>\r\n\r\n  <h1>Ejay's ZipTool</h1>\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "./src/app/toolbar/toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    ToolbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-toolbar',
            template: __webpack_require__("./src/app/toolbar/toolbar.component.html"),
            styles: [__webpack_require__("./src/app/toolbar/toolbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    zipcodeurl: "https://api.postcodedata.nl/v1/postcode/",
    googleapikey: "AIzaSyCuT4JBnVEta4hu9OgiSHr-D7f6gV56T7A"
};


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    zipcodeurl: "http://api.postcodedata.nl/v1/postcode/",
    googleapikey: "AIzaSyCuT4JBnVEta4hu9OgiSHr-D7f6gV56T7A"
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["getBaseUrl"] = getBaseUrl;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
var providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])(providers).bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map