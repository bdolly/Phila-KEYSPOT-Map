webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = " <loading-bar #loadingBar [animationTime]=\"0.3\" [height]=\"height\" [color]=\"color\" [runInterval]=\"runInterval\"></loading-bar>\n\n \n<div class=\"container-fluid\">\n  \n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n        <a class=\"navbar-brand\" href=\"#\">\n          <img src=\"/Phila-KEYSPOT-Map/assets/logo-keyspot-retina.png\" alt=\"\">\n        </a>        \n        <h4 class=\"navbar-text text-light\">{{title}}</h4>\n    </nav>\n\n\n\n    <div class=\"row\">\n\n        <nav class=\"col-sm-4 col-md-3 d-none d-sm-block bg-light sidebar\">\n            \n            <keyspot-card\n                *ngFor=\"let keySpotLocation of keyspots; let i = index\"\n                id=\"ks__card-{{i}}\"\n                [title]=\"keySpotLocation.title\"\n                [address]=\"keySpotLocation.address\"\n                [desc]=\"keySpotLocation.desc\"\n                [phone]=\"keySpotLocation.phone\"\n                [url]=\"keySpotLocation.url\"\n                [expanded]=\"keySpotLocation.expanded\"\n            ></keyspot-card>\n\n        </nav>\n\n\n\n        <main class=\"col-sm-8 col-md-9\" role=\"main\">\n\n          <agm-map \n            [latitude]=\"lat\" \n            [longitude]=\"lng\"\n            [zoom]=\"13\"\n          >\n                <agm-marker \n                    *ngFor=\"let keySpot of keyspots; let i = index;\"\n                    [latitude]=\"keySpot.lat\"\n                    [longitude]=\"keySpot.lng\"\n                    [opacity]=\"keySpot.opacity\"\n                    (markerClick)=\"clickedMarker(keySpot.label,infoWindow, i)\"\n                >\n                    <agm-info-window\n                        class=\"keyspot__infowindow\"\n                        #infoWindow\n                        [maxWidth]=\"200\"\n                        [latitude]=\"keySpot.lat\"\n                        [longitude]=\"keySpot.lng\"\n                        [isOpen]=\"false\"\n                        (infoWindowClose)=\"onInfoWindowClose(keySpot,infoWindow,i)\"\n                    >\n                        <h5 class=\"keyspot__infowindow_title\">{{keySpot.title}}</h5>\n                        <address class=\"keyspot__infowindow_address d-md-none d-lg-none\">{{keySpot.address}}</address>\n                        <a class=\"keyspot__infowindow_phone d-md-none d-lg-none d-block\" href=\"tel:{{keySpot.phone}}\"> <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>{{keySpot.phone}}</a>\n                        <a  class=\"keyspot__infowindow_url d-md-none d-lg-none d-block\" href=\"{{keySpot.url}}\" target=\"_blank\">\n                            <i class=\"fa fa-external-link\" aria-hidden=\"true\"></i>website\n                        </a>\n\n\n                    </agm-info-window>\n                </agm-marker>\n\n            </agm-map>\n\n          \n        </main>\n    </div>\n\n\n\n\n\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "loading-bar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100000; }\n\n.container-fluid {\n  padding: 0; }\n\nimg {\n  display: block;\n  max-width: 100%;\n  width: 100%; }\n\n.navbar {\n  -webkit-box-pack: justify !important;\n      -ms-flex-pack: justify !important;\n          justify-content: space-between !important; }\n\n.navbar-brand {\n  max-width: 200px; }\n\n.navbar-text {\n  float: right;\n  -ms-flex-item-align: end;\n      align-self: flex-end; }\n\n#navbarText {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n\n.sidebar {\n  height: 90vh;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  padding: 0; }\n\nagm-map {\n  height: 90vh; }\n\n.keyspot__infowindow_phone,\n.keyspot__infowindow_url {\n  padding-bottom: 5px; }\n  .keyspot__infowindow_phone .fa,\n  .keyspot__infowindow_url .fa {\n    padding: 0 10px 0 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_keyspots_api_service__ = __webpack_require__("../../../../../src/app/services/keyspots-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_loading_bar__ = __webpack_require__("../../../../ng2-loading-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_loading_bar__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    // inject our keyspots service 
    function AppComponent(_KeyspotsService, loadingBarService) {
        this._KeyspotsService = _KeyspotsService;
        this.loadingBarService = loadingBarService;
        // loading bar 
        this.height = 5;
        this.color = "#f0ad4e";
        this.runInterval = 100;
        this.title = 'KEYSPOTS';
        this.keyspots = [];
        this.infoWindowOpened = null;
        this.isFirst = false;
        // philadelphia city hall coordinates
        this.lat = 39.9524;
        this.lng = -75.1636;
    }
    /**
     * On compoent initialization grab our locations data stream.
     * Then format them to our marker interface.
     */
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // listen to the keyspots stream and process data as it's received 
        this._KeyspotsService.getKeyspots()
            .subscribe(function (_location) {
            // check for first result 
            if (!_this.isFirst) {
                _this.isFirst = !_this.isFirst;
                _this.loadingBarService.start();
            }
            // push our locations markers to our keyspots array 
            _this.keyspots.push(_this.formatMarker(_location.json()));
        }, function (err) { console.log(err); }, function () {
            console.log('complete');
            // once all the data is loaded update the markers 
            // opacity and markerClickable
            _this.keyspots = _this.keyspots.map(function (marker) {
                marker.opacity = 1;
                return marker;
            });
            _this.loadingBarService.complete();
        });
    };
    AppComponent.prototype.formatMarker = function (locationData) {
        return {
            lat: Number(locationData.sl_latitude),
            lng: Number(locationData.sl_longitude),
            label: locationData.sl_id,
            title: locationData.sl_store,
            draggable: false,
            opacity: 0.25,
            visible: true,
            init: true,
            expanded: false,
            address: locationData.sl_address + " " + (locationData.sl_address2 !== "" ? locationData.sl_address2 : '') + ", " + locationData.sl_city + "  " + locationData.sl_state + " ",
            markerClickable: false,
            phone: locationData.sl_phone,
            url: locationData.sl_url,
            desc: locationData.sl_description
        };
    };
    /**
     * On Marker Click scroll it's corresponding card into view;
     * Then fade out all other markers and expand the active card.
     * @param {sting}    label - id of sl_location
     * @param {number} index - zero based list index
     */
    AppComponent.prototype.clickedMarker = function (label, infoWindow, index) {
        // scroll card into view
        var locationCard = document.getElementById('ks__card-' + index);
        locationCard.scrollIntoView({ block: 'center' });
        // set expanded state 
        this.keyspots = this.keyspots.map(function (location) {
            location.expanded = location.label !== label ? false : true;
            return location;
        });
        // close any open infoWindows
        if (this.infoWindowOpened === infoWindow)
            return;
        if (this.infoWindowOpened !== null)
            this.infoWindowOpened.close();
        this.infoWindowOpened = infoWindow;
    };
    /**
     * Reset marker and card states when the infoWindow is closed
     * @param {marker} marker - marker object attached to map marker
     * @param {number} i      - zero based list index
     */
    AppComponent.prototype.onInfoWindowClose = function (marker, infoWindow, i) {
        var _this = this;
        this.keyspots = this.keyspots.map(function (location) {
            if (_this.infoWindowOpened === infoWindow)
                location.expanded = false;
            return location;
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_keyspots_api_service__["a" /* KeyspotsApiService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_keyspots_api_service__["a" /* KeyspotsApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_keyspots_api_service__["a" /* KeyspotsApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_loading_bar__["LoadingBarService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_loading_bar__["LoadingBarService"]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_loading_bar__ = __webpack_require__("../../../../ng2-loading-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_loading_bar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__keyspot_card_keyspot_card_component__ = __webpack_require__("../../../../../src/app/keyspot-card/keyspot-card.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__keyspot_card_keyspot_card_component__["a" /* KeyspotCardComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_loading_bar__["LoadingBarModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].GOOGLE_MAPS_API_KEY
            })
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/keyspot-card/keyspot-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div \n  class=\"card keyspot__card\" \n  [ngClass]=\"{'border-primary mb-3': expanded}\"\n>\n\n  <div  class=\"card-body keyspot__card_body row\">\n    <img src=\"...\" alt=\"\" class=\"col-md-3 keyspot__card__img rounded-circle\">\n    <div class=\"col-md-8\">\n      <h5 class=\"card-title keyspot__card__title\">{{title}}</h5>\n      <address class=\"keyspot__card__address\">{{address}}</address>  \n    </div>  \n  </div>\n\n  <ul \n    [hidden]=\"!expanded\"\n    class=\"list-group list-group-flush\"\n  >\n    <li *ngIf=\"desc !==''  \" class=\"list-group-item\">\n      <p class=\"keyspot__card__desc\">{{desc}}</p>\n    </li>\n\n    <li *ngIf=\"phone !=='' \" class=\"list-group-item\">\n      <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>{{phone}}\n    </li>\n\n    <li *ngIf=\"url !=='' \" class=\"list-group-item keyspot__card__url\">\n      <i class=\"fa fa-external-link\" aria-hidden=\"true\"></i>\n      <a href=\"{{url}}\" target=\"_blank\">website</a>\n\n    </li>\n\n  </ul>\n\n  <!-- <div \n    [hidden]=\"!expanded\"\n    class=\"card-body\"\n  >\n    <a href=\"#\" class=\"card-link\">Card link</a>\n    <a href=\"#\" class=\"card-link\">Another link</a>\n  </div> -->\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/keyspot-card/keyspot-card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".keyspot__card {\n  padding-left: 20px; }\n  .keyspot__card .list-group-item .fa {\n    padding: 0 14% 0 0; }\n\n.keyspot__card__img {\n  max-width: 50px;\n  max-height: 50px;\n  background: #ccc; }\n\n.keyspot__card_body {\n  padding: 10px 1.25rem; }\n\n.keyspot__card__title {\n  font-size: 1rem;\n  margin-bottom: 10px; }\n\n.keyspot__card__address {\n  font-size: .75rem; }\n\n.keyspot__card__desc {\n  font-size: .75rem;\n  padding: 0 5%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/keyspot-card/keyspot-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyspotCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var KeyspotCardComponent = (function () {
    function KeyspotCardComponent() {
    }
    KeyspotCardComponent.prototype.ngOnInit = function () {
    };
    return KeyspotCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], KeyspotCardComponent.prototype, "expanded", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], KeyspotCardComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], KeyspotCardComponent.prototype, "address", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], KeyspotCardComponent.prototype, "phone", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], KeyspotCardComponent.prototype, "url", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], KeyspotCardComponent.prototype, "desc", void 0);
KeyspotCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'keyspot-card',
        template: __webpack_require__("../../../../../src/app/keyspot-card/keyspot-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/keyspot-card/keyspot-card.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], KeyspotCardComponent);

//# sourceMappingURL=keyspot-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/keyspots-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyspotsApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var KeyspotsApiService = (function () {
    function KeyspotsApiService(_http) {
        this._http = _http;
        //set a constant for our locations endpoint 
        this.LOCATIONS_ENDPOINT = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].KEYSPOTS_API_BASE + "/locations";
    }
    /**
     * GET our keyspots data.
     * First grab all location ids as an observale stream (flatMap) for '/locations'.
     * Then mergeMap each id to a request to '/locations/<id:number>'.
     * This ensures that on the front-end each location will be added as it's response is returned
     * instead of waiting for all requests to return before delivering results to the front-end.
     * This makes for a smoother user experience.
     *
     * Data for this pulled from https://www.opendataphilly.org/dataset/philly-keyspot-locations
     *
     */
    KeyspotsApiService.prototype.getKeyspots = function () {
        var _this = this;
        return this._http
            .get(__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].KEYSPOTS_API_BASE + "/locations")
            .flatMap(function (res) { return res.json(); })
            .mergeMap(function (loc, i) {
            return _this._http.get(__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].KEYSPOTS_API_BASE + "/locations/" + loc["sl_id"]);
        });
    };
    return KeyspotsApiService;
}());
KeyspotsApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], KeyspotsApiService);

var _a;
//# sourceMappingURL=keyspots-api.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    GOOGLE_MAPS_API_KEY: 'AIzaSyCfyTZauO_2d_1lIUHm6d3T4IJOHAQceEY',
    KEYSPOTS_API_BASE: 'https://www.phillykeyspots.org/wp-json/store-locator-plus/v2'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map