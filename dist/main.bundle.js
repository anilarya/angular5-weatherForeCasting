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

module.exports = ".span{\n  display:block;\n  border-bottom:0;\n}\n\n.form-controll-main{\n  height: 34px;\n    padding: 6px 12px;\n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-header></app-header>\n \n<div class=\"container\">\n  <div class=\"col-sm-12\">\n    <h2>Next 5 day / 3 hour forecast data</h2>\n\n    <div class=\"col-sm-4\">\n    Mode of search : \n      <select class=\"form-controll-main\" (change)=\"onSelectSearchMode($event.target.value)\" [(ngModel)]=\"searchMode\" >\n          <option value='city_name'> City Name</option>\n          <option value='city_id'> City Id</option>\n          <option value='geo_ordinates'> Geographic Co-ordinates</option>\n          <option value='zip_code'> ZIP code</option>\n        </select>\n    </div> \n    <div class=\"col-sm-8\">\n      <input type=\"text\" name=\"\" class=\"form-controll-main\" [(ngModel)]=\"searchKey\" placeholder=\"{{placeholder}}\" *ngIf=\"searchMode!='geo_ordinates'\"> \n\n      <div *ngIf=\"searchMode=='geo_ordinates'\">\n        Lat :<input type=\"text\" name=\"\" class=\"form-controll-main\" [(ngModel)]=\"latitude\" placeholder=\"<latitude>\" > \n\n        Long :<input type=\"text\" name=\"\" class=\"form-controll-main\" [(ngModel)]=\"longitude\" placeholder=\"<longitude>\"> \n\n        <button class=\"btn btn-sm btn-info\" (click) = 'getWeatherDetails()'>Fetch</button> \n\n      </div>\n      <button class=\"btn btn-sm btn-info\" (click) = 'getWeatherDetails()' *ngIf=\"searchMode!='geo_ordinates'\">Fetch</button> \n    </div> \n\n  </div><hr>\n  <div class=\"col-sm-12\">\n    <span *ngIf=\"weatherForcaseDetails.city\"><h2>{{ weatherForcaseDetails.city.name }},{{ weatherForcaseDetails.city.country }}</h2></span> \n  </div>\n  <div class=\"col-sm-4\" *ngFor=\"let list of weatherForcaseDetails.list\">\n    <div class=\"panel panel-info\">\n      <div class=\"panel-heading\">\n        {{ list.dt_txt | date: 'dd MMM yyyy T hh:mm:ss a' }}\n\n      </div>\n      <div class=\"panel-body\">\n        <div *ngFor=\"let weather of list.weather\">\n          <font size=\"4\"><img [src]=\"getIconImageUrl(weather.icon)\">  {{ getTemperature(list.main.temp) }}*c , {{weather.main }} </font>\n\n          <div> {{weather.description}} -- High : {{ getTemperature(list.main.temp_max) }}*c ~ Low : {{ getTemperature(list.main.temp_min) }}*c</div>\n        </div>\n      </div>\n      <div class=\"panel-footer\">Pressure: {{list.main.pressure}}hPa , Humidity:{{list.main.humidity}}% </div>\n    </div>\n  </div> \n\n  <div class=\"col-sm-12\">\n    <div *ngIf='errorMessage' > \n        <div class=\"alert alert-danger\">\n          <strong>Oops!</strong>  {{errorMessage}}\n        </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utility_service__ = __webpack_require__("./src/app/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_const__ = __webpack_require__("./src/app/app.const.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(http, Utility) {
        this.http = http;
        this.Utility = Utility;
        this.searchKey = 'Bangalore';
        this.searchMode = 'city_name';
        this.errorMessage = '';
        this.placeholder = '';
        this.weatherForcaseDetails = [];
        this.longitude = 0.0;
        this.latitude = 0.0;
    }
    AppComponent.prototype.onSelectSearchMode = function (_value) {
        this.searchKey = '';
        switch (_value) {
            case 'city_id': {
                this.placeholder = '<City Id>';
                break;
            }
            case 'zip_code': {
                this.placeholder = '<Zip code>';
                break;
            }
            case 'city_name': {
                this.placeholder = '<City Name>';
                break;
            }
            default: {
                //statements; 
                break;
            }
        }
    };
    AppComponent.prototype.contructQParams = function () {
        var qParams = '';
        switch (this.searchMode) {
            case 'city_id': {
                qParams = "id=" + this.searchKey;
                break;
            }
            case 'zip_code': {
                qParams = "zip=" + this.searchKey;
                break;
            }
            case 'city_name': {
                qParams = "q=" + this.searchKey;
                break;
            }
            case 'geo_ordinates': {
                qParams = "lon=" + this.longitude + "&lat=" + this.latitude;
                break;
            }
            default: {
                //statements; 
                break;
            }
        }
        return qParams;
    };
    AppComponent.prototype.getWeatherDetails = function () {
        var _this = this;
        var qParams = this.contructQParams();
        this.errorMessage = '';
        var __URL = __WEBPACK_IMPORTED_MODULE_3__app_const__["b" /* BASE_URI */] + qParams + ("&appid=" + __WEBPACK_IMPORTED_MODULE_3__app_const__["a" /* API_KEY */]);
        this.http.get(__URL).subscribe(function (_res) {
            _this.weatherForcaseDetails = _res.json();
            console.error(_this.weatherForcaseDetails);
        }, function (_msg) { _this.weatherForcaseDetails = []; _this.errorMessage = _msg._body; });
    };
    AppComponent.prototype.getTemperature = function (_temp) {
        return (_temp - 273.15).toFixed(2);
    };
    AppComponent.prototype.getIconImageUrl = function (iconName) {
        return (iconName ? __WEBPACK_IMPORTED_MODULE_3__app_const__["c" /* ICON_BASE_URL */] + iconName + '.png' : '');
    };
    ;
    AppComponent.prototype.ngOnInit = function () {
        this.getWeatherDetails();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__utility_service__["a" /* UtilityService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.const.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BASE_URI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ICON_BASE_URL; });

var API_KEY = '97ed7afbc7cd322f478581ebb18ab89d';
var BASE_URI = 'http://api.openweathermap.org/data/2.5/forecast?';
var ICON_BASE_URL = 'http://openweathermap.org/img/w/';


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utility_service__ = __webpack_require__("./src/app/utility.service.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__utility_service__["a" /* UtilityService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,600,300,700);\nheader {\n  height: 64px;\n}\n.header-container {\n  height: 64px;\n  background-color: #2d384a;\n  color: #fff;\n  width: 100%;\n}\n.logo {\n  padding: 16px;\n  display: inline-block;\n  vertical-align: top;\n}\n.logo img {\n  height: 32px;\n}\n.header-tab {\n  float: right;\n  cursor: pointer;\n  height: 100%;\n}\n.header-tab .toggle-container {\n  padding: 20px 16px;\n  display: inline-block;\n  position: relative;\n}\n.header-tab .icon {\n  float: left;\n  color: #fff;\n}\n.header-tab .name {\n  float: left;\n  line-height: 24px;\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.header-tab.icon-with-name .icon {\n  padding-right: 8px;\n}\n.header-tab .superscript {\n  height: 18px;\n  width: 18px;\n  background-color: #2d384a;\n  border-radius: 9px;\n  position: absolute;\n  left: 30px;\n  top: 10px;\n  color: #fff;\n  text-align: center;\n}\n.header-tab .dropdown-menu {\n  border: none;\n  border-radius: 2px;\n  -webkit-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.20);\n          box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.20);\n  min-width: 180px;\n  right: 24px;\n  left: auto;\n  color: rgba(0, 0, 0, 0.87);\n}\n.hamburger-menu {\n  float: none;\n  display: inline-block;\n}\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n    <div class=\"header-container\" id=\"top-view\"> \n        <a data-ui-sref=\"dashboard\" class=\"logo pull-left\">\n            <img src=\"../assets/images/favicon.svg\" alt=\"CF Logo\" />\n        </a>\n        <div class=\"pull-right\"> \n            \n            <div class=\"header-tab\" dropdown auto-close=\"outsideClick\">\n                <span class=\"toggle-container\" dropdown-toggle>\n                    <span class=\"icon account-icon\">\n                        <i class=\"material-icons\">account_circle</i>\n                    </span>\n                </span>\n                <ul class=\"dropdown-menu\" role=\"menu\">\n                    <div class=\"account-div\">\n                        <div class=\"name-container\">\n                            <div class=\"first-letter\"> </div>\n                            <div class=\"name-mail-container\">\n                                <p>[[loginFName | lowercase]]</p>\n                                <p>[[loginEmail | lowercase]]</p>\n                            </div>\n                        </div>\n                        <div class=\"log-out-container\">\n                            <button class=\"btn pull-right\" (click)=\"logoutFn()\">Logout</button>\n                        </div>\n                    </div>\n                </ul>\n            </div>  \n        </div>\n    </div>\n</header>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/utility.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilityService; });
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

var UtilityService = /** @class */ (function () {
    function UtilityService() {
    }
    UtilityService.prototype.findInObjectsArrayFromKey = function (objects, keyName, value, ignoreCase) {
        if (ignoreCase) {
            return objects.find(function (item) {
                return item[keyName].toLowerCase() == value.toLowerCase();
            });
        }
        return objects.find(function (item) {
            return item[keyName] == value;
        });
    };
    ;
    UtilityService.prototype.extractKeysFromObjectsList = function (objects, keyName) {
        return objects.map(function (item) {
            return item[keyName];
        });
    };
    ;
    UtilityService.prototype.objectArrayIndexOf = function (objects, key, value) {
        return this.extractKeysFromObjectsList(objects, key).indexOf(value);
    };
    ;
    UtilityService.prototype.objectArrayFindFromKey = function (objects, key, value) {
        var index = this.extractKeysFromObjectsList(objects, key).indexOf(value);
        if (index === -1) {
            return;
        }
        return objects[index];
    };
    ;
    UtilityService.prototype.filterObjectsFromKeys = function (objects, keys, keyName) {
        return objects.filter(function (item) {
            return keys.indexOf(item[keyName]) !== -1;
        });
    };
    ;
    UtilityService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UtilityService);
    return UtilityService;
}());



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
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map