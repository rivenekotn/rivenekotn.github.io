webpackJsonp(["template-editor.module"],{

/***/ "../../../../../src/app/components/app-template-editor-newsletter/app-template-editor-newsletter.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"gjs\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/components/app-template-editor-newsletter/app-template-editor-newsletter.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/app-template-editor-newsletter/app-template-editor-newsletter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppTemplateEditorNewsletterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppTemplateEditorNewsletterComponent = /** @class */ (function () {
    function AppTemplateEditorNewsletterComponent() {
    }
    AppTemplateEditorNewsletterComponent.prototype.ngOnInit = function () {
        this.editor = grapesjs.init({
            container: '#gjs',
            components: '<div class="txt-red">Hello world!</div>',
            style: '.txt-red{color: red}',
            plugins: ['gjs-preset-newsletter'],
        });
        this.editor.Panels.addButton('options', [{
                id: 'save',
                className: 'fa fa-floppy-o icon-blank',
                command: function (editor, sender) {
                    if (sender) {
                        sender.set('active', 0);
                    }
                    var commandGetHTML = editor.Commands.get('gjs-get-inlined-html');
                    var html_output = commandGetHTML.run(editor);
                    console.log(html_output);
                    // TODO
                },
                attributes: { title: 'Save Template' }
            }]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AppTemplateEditorNewsletterComponent.prototype, "htmlInput", void 0);
    AppTemplateEditorNewsletterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-template-editor-newsletter',
            template: __webpack_require__("../../../../../src/app/components/app-template-editor-newsletter/app-template-editor-newsletter.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/app-template-editor-newsletter/app-template-editor-newsletter.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppTemplateEditorNewsletterComponent);
    return AppTemplateEditorNewsletterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/template-editor/template-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/views/template-editor/template-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TemplateEditorComponent = /** @class */ (function () {
    function TemplateEditorComponent() {
    }
    TemplateEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/template-editor/template-editor.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], TemplateEditorComponent);
    return TemplateEditorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/template-editor/template-editor.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateEditorModule", function() { return TemplateEditorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__template_editor_component__ = __webpack_require__("../../../../../src/app/views/template-editor/template-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__template_editor_routing__ = __webpack_require__("../../../../../src/app/views/template-editor/template-editor.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_httpServices_template_service__ = __webpack_require__("../../../../../src/app/services/httpServices/template.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__global_components_app_template_editor_newsletter_app_template_editor_newsletter_component__ = __webpack_require__("../../../../../src/app/components/app-template-editor-newsletter/app-template-editor-newsletter.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var APP_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_6__global_components_app_template_editor_newsletter_app_template_editor_newsletter_component__["a" /* AppTemplateEditorNewsletterComponent */]
];
var TEMPLATE_EDITOR_MODULE_COMPONENTS = [];
var TemplateEditorModule = /** @class */ (function () {
    function TemplateEditorModule() {
    }
    TemplateEditorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__template_editor_routing__["a" /* TemplateEditorRouting */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__template_editor_component__["a" /* TemplateEditorComponent */]
            ].concat(APP_COMPONENTS, TEMPLATE_EDITOR_MODULE_COMPONENTS),
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__services_httpServices_template_service__["a" /* TemplateService */]
            ]
        })
    ], TemplateEditorModule);
    return TemplateEditorModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/template-editor/template-editor.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateEditorRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template_editor_component__ = __webpack_require__("../../../../../src/app/views/template-editor/template-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_components_app_template_editor_newsletter_app_template_editor_newsletter_component__ = __webpack_require__("../../../../../src/app/components/app-template-editor-newsletter/app-template-editor-newsletter.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__template_editor_component__["a" /* TemplateEditorComponent */],
        data: {
            title: 'Mail'
        },
        children: [
            {
                path: 'mail',
                component: __WEBPACK_IMPORTED_MODULE_3__global_components_app_template_editor_newsletter_app_template_editor_newsletter_component__["a" /* AppTemplateEditorNewsletterComponent */]
            }
        ]
    }
];
var TemplateEditorRouting = /** @class */ (function () {
    function TemplateEditorRouting() {
    }
    TemplateEditorRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], TemplateEditorRouting);
    return TemplateEditorRouting;
}());



/***/ })

});
//# sourceMappingURL=template-editor.module.chunk.js.map