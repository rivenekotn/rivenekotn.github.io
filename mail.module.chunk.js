webpackJsonp(["mail.module"],{

/***/ "../../../../../src/app/services/httpServices/journey.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JourneyService; });
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





var JourneyService = /** @class */ (function () {
    function JourneyService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
    }
    JourneyService.prototype.getJourneys = function () {
        // add authorization header with jwt token
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* RequestOptions */]({ headers: headers });
        // get users from api
        // return this.http.get('/api/journeys', options)
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_setting__["a" /* AppSettings */].API_ENDPOINT + "/journeys", options)
            .map(function (response) { return response.json(); });
    };
    JourneyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__authentication_service__["a" /* AuthenticationService */]])
    ], JourneyService);
    return JourneyService;
}());



/***/ }),

/***/ "../../../../../src/app/views/mail/_components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mail_journey_listing__ = __webpack_require__("../../../../../src/app/views/mail/_components/mail-journey-listing/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__mail_journey_listing__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mail_template_listing__ = __webpack_require__("../../../../../src/app/views/mail/_components/mail-template-listing/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__mail_template_listing__["a"]; });




/***/ }),

/***/ "../../../../../src/app/views/mail/_components/mail-journey-listing/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mail_journey_listing__ = __webpack_require__("../../../../../src/app/views/mail/_components/mail-journey-listing/mail-journey-listing.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__mail_journey_listing__["a"]; });



/***/ }),

/***/ "../../../../../src/app/views/mail/_components/mail-journey-listing/mail-journey-listing.html":
/***/ (function(module, exports) {

module.exports = "<app-table [config_options]=\"config_table\"></app-table>\n"

/***/ }),

/***/ "../../../../../src/app/views/mail/_components/mail-journey-listing/mail-journey-listing.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/mail/_components/mail-journey-listing/mail-journey-listing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppMailJourneyListingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_httpServices_journey_service__ = __webpack_require__("../../../../../src/app/services/httpServices/journey.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppMailJourneyListingComponent = /** @class */ (function () {
    function AppMailJourneyListingComponent(journeyService) {
        this.journeyService = journeyService;
        this.config_table = {
            service: this.journeyService,
            function: 'getJourneys',
            params: {}
        };
    }
    AppMailJourneyListingComponent.prototype.ngOnInit = function () {
    };
    AppMailJourneyListingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mail-journey-listing',
            template: __webpack_require__("../../../../../src/app/views/mail/_components/mail-journey-listing/mail-journey-listing.html"),
            styles: [__webpack_require__("../../../../../src/app/views/mail/_components/mail-journey-listing/mail-journey-listing.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_httpServices_journey_service__["a" /* JourneyService */]])
    ], AppMailJourneyListingComponent);
    return AppMailJourneyListingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/mail/_components/mail-template-listing/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mail_template_listing__ = __webpack_require__("../../../../../src/app/views/mail/_components/mail-template-listing/mail-template-listing.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__mail_template_listing__["a"]; });



/***/ }),

/***/ "../../../../../src/app/views/mail/_components/mail-template-listing/mail-template-listing.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"navbar-brand mb-3\">Create Template</h1>\n<div class=\"d-flex flex-wrap template-container\">\n  <app-widget-template-add\n    class=\"item\"\n    [type]=\"'from_blank'\"\n    [currentMethod]=\"create_method\"\n    (onAction)=\"changeCreateMethod($event)\"\n  ></app-widget-template-add>\n  <app-widget-template-add\n    class=\"item\"\n    [type]=\"'from_predefined'\"\n    [currentMethod]=\"create_method\"\n    (onAction)=\"changeCreateMethod($event)\"\n  ></app-widget-template-add>\n  <!--<app-widget-template-add-->\n    <!--class=\"item\"-->\n    <!--[type]=\"'from_html'\"-->\n    <!--[currentMethod]=\"create_method\"-->\n    <!--(onAction)=\"changeCreateMethod($event)\"-->\n  <!--&gt;</app-widget-template-add>-->\n</div>\n<h1 *ngIf=\"create_method !== 'from_blank'\" class=\"navbar-brand mb-3 d-block\">{{create_method === 'from_predefined'?'Predefined Templates':'Input your HTML'}}</h1>\n<div *ngIf=\"create_method === 'from_predefined'\" class=\"d-flex flex-wrap template-container\">\n  <app-widget-template class=\"item\" *ngFor=\"let template of predefined_template.data\" [data]=\"template\"></app-widget-template>\n  <p *ngIf=\"predefined_template.no_data\">There is no predefined template</p>\n  <p *ngIf=\"predefined_template.loading\">Loading...</p>\n</div>\n<a *ngIf=\"create_method === 'from_predefined'\" (click)=\"loadPredefinedtemplate()\" href=\"javascript:void(0)\" role=\"button\" class=\"d-block mb-3\">View more ...</a>\n\n<h1 class=\"navbar-brand mb-3 d-block\">My Templates</h1>\n<div class=\"d-flex flex-wrap template-container\">\n  <app-widget-template class=\"item\" *ngFor=\"let template of my_template.data\" [data]=\"template\"></app-widget-template>\n</div>\n<a (click)=\"loadMytemplate()\" href=\"javascript:void(0)\" role=\"button\" class=\"d-block mb-3\">View more ...</a>\n<!--<h1 class=\"navbar-brand mb-3\">My Templates</h1>-->\n<!--<div class=\"d-flex flex-wrap template-container\">-->\n  <!--<app-widget-template class=\"item\"></app-widget-template>-->\n  <!--<app-widget-template class=\"item\"></app-widget-template>-->\n  <!--<app-widget-template class=\"item\"></app-widget-template>-->\n  <!--<app-widget-template class=\"item\"></app-widget-template>-->\n<!--</div>-->\n<!--<a href=\"#\" role=\"button\" class=\"d-block mb-3\">View more ...</a>-->\n"

/***/ }),

/***/ "../../../../../src/app/views/mail/_components/mail-template-listing/mail-template-listing.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".template-container > .item {\n  margin-right: 50px;\n  margin-bottom: 30px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/mail/_components/mail-template-listing/mail-template-listing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppMailTemplateListingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_httpServices_template_service__ = __webpack_require__("../../../../../src/app/services/httpServices/template.service.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppMailTemplateListingComponent = /** @class */ (function () {
    function AppMailTemplateListingComponent(templateService) {
        this.templateService = templateService;
        this.create_method = 'from_blank';
        this.my_template = {
            loading: true,
            is_empty: false,
            data: [],
            page: 1,
            total: 0
        };
        this.predefined_template = {
            loading: true,
            is_empty: false,
            data: [],
            page: 1,
            total: 0
        };
    }
    AppMailTemplateListingComponent.prototype.ngOnInit = function () {
        this.loadMytemplate();
    };
    AppMailTemplateListingComponent.prototype.loadMytemplate = function () {
        var _this = this;
        this.my_template.loading = true;
        this.templateService.getMyTemplates({
            // user_id:...
            page: this.my_template.page
        }).subscribe(function (res) {
            _this.my_template = __assign({}, _this.my_template, { loading: false, data: _this.my_template.data.concat(res.data), page: _this.my_template.page++, total: res.total, is_empty: res.total === 0 });
        });
    };
    AppMailTemplateListingComponent.prototype.loadPredefinedtemplate = function () {
        var _this = this;
        this.my_template.loading = true;
        this.templateService.getPredefinedTemplates({
            // user_id:...
            page: this.predefined_template.page
        }).subscribe(function (res) {
            _this.predefined_template = __assign({}, _this.predefined_template, { loading: false, data: _this.predefined_template.data.concat(res.data), page: _this.predefined_template.page++, total: res.total, is_empty: res.total === 0 });
        });
    };
    AppMailTemplateListingComponent.prototype.changeCreateMethod = function (create_method) {
        this.create_method = create_method;
        if (create_method === 'from_predefined') {
            if (this.predefined_template.data.length === 0 && this.predefined_template.is_empty === false) {
                this.loadPredefinedtemplate();
            }
        }
    };
    AppMailTemplateListingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mail-template-listing',
            template: __webpack_require__("../../../../../src/app/views/mail/_components/mail-template-listing/mail-template-listing.html"),
            styles: [__webpack_require__("../../../../../src/app/views/mail/_components/mail-template-listing/mail-template-listing.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_httpServices_template_service__["a" /* TemplateService */]])
    ], AppMailTemplateListingComponent);
    return AppMailTemplateListingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/mail/_config/left-nav.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return navigation; });
var navigation = [
    {
        title: true,
        name: 'E-Mail'
    },
    {
        name: 'Journey',
        url: '/mail/journeys',
        icon: 'icon-directions',
    },
    {
        name: 'Template',
        url: '/mail/templates',
        icon: 'icon-doc'
    }
];


/***/ }),

/***/ "../../../../../src/app/views/mail/mail.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/views/mail/mail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_left_nav_data__ = __webpack_require__("../../../../../src/app/views/mail/_config/left-nav.data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_leftNavContentHandle_service__ = __webpack_require__("../../../../../src/app/services/leftNavContentHandle.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MailComponent = /** @class */ (function () {
    function MailComponent(leftNavContentHandleServices) {
        this.leftNavContentHandleServices = leftNavContentHandleServices;
        this.leftNavContentHandleServices.setNavigation(__WEBPACK_IMPORTED_MODULE_1__config_left_nav_data__["a" /* navigation */]);
    }
    MailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/mail/mail.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_leftNavContentHandle_service__["a" /* LeftNavContentHandleService */]])
    ], MailComponent);
    return MailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/mail/mail.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailModule", function() { return MailModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mail_component__ = __webpack_require__("../../../../../src/app/views/mail/mail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mail_routing__ = __webpack_require__("../../../../../src/app/views/mail/mail.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_httpServices_journey_service__ = __webpack_require__("../../../../../src/app/services/httpServices/journey.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_httpServices_template_service__ = __webpack_require__("../../../../../src/app/services/httpServices/template.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components__ = __webpack_require__("../../../../../src/app/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components__ = __webpack_require__("../../../../../src/app/views/mail/_components/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// Import components

var APP_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_7__components__["k" /* AppTableComponent */],
    __WEBPACK_IMPORTED_MODULE_7__components__["m" /* AppWidgetTemplateComponent */],
    __WEBPACK_IMPORTED_MODULE_7__components__["l" /* AppWidgetTemplateAddComponent */]
];

var MAIL_MODULES_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_8__components__["a" /* AppMailJourneyListingComponent */],
    __WEBPACK_IMPORTED_MODULE_8__components__["b" /* AppMailTemplateListingComponent */]
];
var MailModule = /** @class */ (function () {
    function MailModule() {
    }
    MailModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__mail_routing__["a" /* MailRouting */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__mail_component__["a" /* MailComponent */]
            ].concat(APP_COMPONENTS, MAIL_MODULES_COMPONENTS),
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__services_httpServices_journey_service__["a" /* JourneyService */],
                __WEBPACK_IMPORTED_MODULE_6__services_httpServices_template_service__["a" /* TemplateService */]
            ]
        })
    ], MailModule);
    return MailModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/mail/mail.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mail_component__ = __webpack_require__("../../../../../src/app/views/mail/mail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components__ = __webpack_require__("../../../../../src/app/views/mail/_components/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        redirectTo: 'journeys'
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__mail_component__["a" /* MailComponent */],
        data: {
            title: 'Mail'
        },
        children: [
            {
                path: 'journeys',
                component: __WEBPACK_IMPORTED_MODULE_3__components__["a" /* AppMailJourneyListingComponent */],
                data: {
                    title: 'Journeys'
                }
            },
            {
                path: 'templates',
                component: __WEBPACK_IMPORTED_MODULE_3__components__["b" /* AppMailTemplateListingComponent */],
                data: {
                    title: 'Templates'
                }
            }
        ]
    }
];
var MailRouting = /** @class */ (function () {
    function MailRouting() {
    }
    MailRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], MailRouting);
    return MailRouting;
}());



/***/ })

});
//# sourceMappingURL=mail.module.chunk.js.map