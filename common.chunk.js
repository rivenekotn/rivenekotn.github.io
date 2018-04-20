webpackJsonp(["common"],{

/***/ "../../../../../src/app/app.setting.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = /** @class */ (function () {
    function AppSettings() {
    }
    AppSettings.API_ENDPOINT = 'http://localhost:3000';
    return AppSettings;
}());



/***/ }),

/***/ "../../../../../src/app/services/httpServices/template.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_setting__ = __webpack_require__("../../../../../src/app/app.setting.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TemplateService = /** @class */ (function () {
    function TemplateService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
    }
    TemplateService.prototype.getMyTemplates = function (params) {
        // add authorization header with jwt token
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* RequestOptions */]({ headers: headers });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_setting__["a" /* AppSettings */].API_ENDPOINT + "/my_templates", options)
            .map(function (response) { return response.json(); });
    };
    TemplateService.prototype.getPredefinedTemplates = function (params) {
        // add authorization header with jwt token
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* RequestOptions */]({ headers: headers });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_setting__["a" /* AppSettings */].API_ENDPOINT + "/predefined_templates", options)
            .map(function (response) { return response.json(); });
    };
    TemplateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__authentication_service__["a" /* AuthenticationService */]])
    ], TemplateService);
    return TemplateService;
}());



/***/ })

});
//# sourceMappingURL=common.chunk.js.map