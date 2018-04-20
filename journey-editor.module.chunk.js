webpackJsonp(["journey-editor.module"],{

/***/ "../../../../../src/app/views/journey-editor/components/delete-button/delete-button.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"delete-button-wrapper\">\n  <button role=\"button\" *ngIf=\"!confirmDelete && allowDelete\" class=\"btn delete-button\" (mouseenter)=\"checkCanDelete()\" (click)=\"showConfirmDelete()\">\n    <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n  </button>\n  <button role=\"button\" *ngIf=\"!allowDelete\" class=\"btn delete-button\" triggers=\"mouseenter:mouseleave\" (mouseleave)=\"reverseCheckCanDelete()\" [popover]=\"cannotDeletePopup\" [outsideClick]=\"true\" [placement]=\"'right'\">\n    <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n  </button>\n  <button role=\"button\" *ngIf=\"confirmDelete && allowDelete\" class=\"btn confirm-button\" (click)=\"actionDeleteNode()\" (mouseleave)=\"hideConfirmDelete()\">\n    <i class=\"fa fa-times\" aria-hidden=\"true\"></i> <strong class=\"font-xs\">Confirm Delete</strong>\n  </button>\n</div>\n\n<ng-template #cannotDeletePopup>\n  <div style=\"width: 220px\">\n    <p class=\"text-danger\">\n      <strong>\n        This step cannot be deleted\n      </strong>\n    </p>\n    <p>\n      Delete the step from one branch underneath to delete this condition\n    </p>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/views/journey-editor/components/delete-button/delete-button.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".delete-button-wrapper {\n  position: absolute; }\n  .delete-button-wrapper button.delete-button {\n    background-color: white;\n    border-radius: 50%;\n    width: 20px;\n    height: 20px;\n    color: #f86c6b;\n    line-height: 1;\n    padding: 0; }\n  .delete-button-wrapper button.delete-button i {\n      display: none; }\n  .delete-button-wrapper button.confirm-button {\n    background-color: #f86c6b;\n    border-radius: 2em;\n    width: auto;\n    height: 20px;\n    color: white;\n    line-height: 0.3;\n    padding: 0 10px;\n    margin-left: -5px; }\n  .delete-button-wrapper button.confirm-button i {\n      color: #d8281e; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/journey-editor/components/delete-button/delete-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_tree_struct_model__ = __webpack_require__("../../../../../src/app/views/journey-editor/models/tree-struct.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tree_service__ = __webpack_require__("../../../../../src/app/views/journey-editor/services/tree.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeleteButtonComponent = /** @class */ (function () {
    function DeleteButtonComponent(treeService) {
        this.treeService = treeService;
        this.confirmDelete = false;
        this.allowDelete = true;
    }
    DeleteButtonComponent.prototype.ngOnInit = function () {
    };
    DeleteButtonComponent.prototype.checkCanDelete = function () {
        if (this.node.type === __WEBPACK_IMPORTED_MODULE_1__models_tree_struct_model__["b" /* NodeTypes */].condition) {
            this.allowDelete = this.node.children[0].children[0].children.length + this.node.children[1].children[0].children.length < 2;
        }
        else {
            this.allowDelete = true;
        }
    };
    DeleteButtonComponent.prototype.reverseCheckCanDelete = function () {
        this.allowDelete = true;
    };
    DeleteButtonComponent.prototype.showConfirmDelete = function () {
        this.confirmDelete = true;
    };
    DeleteButtonComponent.prototype.hideConfirmDelete = function () {
        this.confirmDelete = false;
    };
    DeleteButtonComponent.prototype.actionDeleteNode = function () {
        this.treeService.removeNodeFromTree(this.parentNode, this.node);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_tree_struct_model__["a" /* NodeModel */])
    ], DeleteButtonComponent.prototype, "node", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_tree_struct_model__["a" /* NodeModel */])
    ], DeleteButtonComponent.prototype, "parentNode", void 0);
    DeleteButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-delete-button',
            template: __webpack_require__("../../../../../src/app/views/journey-editor/components/delete-button/delete-button.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/journey-editor/components/delete-button/delete-button.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_tree_service__["a" /* TreeService */]])
    ], DeleteButtonComponent);
    return DeleteButtonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/journey-editor/components/div-zoomable/div-zoomable.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"zoomable-wrapper\">\n  <div class=\"btn-group-vertical\">\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"zoomIn()\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button>\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"reset()\"><i class=\"fa fa-dot-circle-o\" aria-hidden=\"true\"></i></button>\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"zoomOut()\"><i class=\"fa fa-minus\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <ng-content [ngStyle]=\"{'transform': 'scale(' + ratio + ')', 'transform-origin': '0 0'}\"></ng-content>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/journey-editor/components/div-zoomable/div-zoomable.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".zoomable-wrapper {\n  position: relative; }\n  .zoomable-wrapper .btn-group-vertical {\n    position: fixed;\n    top: 100px;\n    left: 450px;\n    z-index: 1060; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/journey-editor/components/div-zoomable/div-zoomable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DivZoomableComponent; });
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

var DivZoomableComponent = /** @class */ (function () {
    function DivZoomableComponent() {
        this.ratio = 1;
        this.styleCss = "transform: scale(" + this.ratio + "); transform-origin: 0 0";
    }
    DivZoomableComponent.prototype.ngAfterViewInit = function () {
        this.content = document.querySelectorAll(this.selector)[0];
        console.log(this.content);
    };
    DivZoomableComponent.prototype.zoomIn = function () {
        this.ratio += 0.2;
        this.setCss();
    };
    DivZoomableComponent.prototype.zoomOut = function () {
        this.ratio -= 0.2;
        this.setCss();
    };
    DivZoomableComponent.prototype.reset = function () {
        this.ratio = 1;
        this.setCss();
    };
    DivZoomableComponent.prototype.setCss = function () {
        this.styleCss = "transform: scale(" + this.ratio + "); transform-origin: 0 0";
        this.content.setAttribute('style', this.styleCss);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], DivZoomableComponent.prototype, "selector", void 0);
    DivZoomableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-div-zoomable',
            template: __webpack_require__("../../../../../src/app/views/journey-editor/components/div-zoomable/div-zoomable.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/journey-editor/components/div-zoomable/div-zoomable.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DivZoomableComponent);
    return DivZoomableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/journey-editor/components/node-tree/add-node/add-node.component.html":
/***/ (function(module, exports) {

module.exports = "<a href=\"javascript:void(0)\">\n  <div class=\"add-node-wrapper\">\n    <button class=\"btn-success tree-add-node\" #createPopover=\"bs-popover\" [popover]=\"createNode\" [outsideClick]=\"true\" [placement]=\"'bottom'\">\n      <h5 class=\"mb-0\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></h5>\n    </button>\n  </div>\n</a>\n\n<ng-template #createNode>\n  <div class=\"create-node-wrapper\">\n    <h6>Add a step to your journey</h6>\n    <div class=\"button-wrapper\">\n      <button type=\"button\" class=\"btn btn-outline-dark btn-lg d-inline-block\" (click)=\"addNodeToTree(NodeTypes.delay); createPopover.hide()\">\n        <h1><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i></h1>\n        <h6>Delay</h6>\n      </button>\n      <button type=\"button\" class=\"btn btn-outline-dark btn-lg d-inline-block\" (click)=\"addNodeToTree(NodeTypes.email); createPopover.hide()\">\n        <h1><i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i></h1>\n        <h6>Email</h6>\n      </button>\n      <button type=\"button\" class=\"btn btn-outline-dark btn-lg d-inline-block\" (click)=\"addNodeToTree(NodeTypes.condition); createPopover.hide()\">\n        <h1><i class=\"fa fa-map-signs\" aria-hidden=\"true\"></i></h1>\n        <h6>Condition</h6>\n      </button>\n    </div>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/views/journey-editor/components/node-tree/add-node/add-node.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add-node-wrapper {\n  width: 249px; }\n\n.tree-add-node {\n  border-radius: 50%;\n  width: 31px;\n  height: 31px; }\n\na:hover {\n  background: none !important;\n  border: none !important; }\n\na:hover button.tree-add-node {\n    background-color: #14C852; }\n\na:focus, button:focus {\n  outline: none; }\n\n.create-node-wrapper {\n  color: #666; }\n\n.create-node-wrapper h6 {\n    margin: 5px 0; }\n\n:host /deep/ .popover {\n  max-width: 500px; }\n\n:host /deep/ .popover .popover-content {\n    width: 400px;\n    text-align: center; }\n\n:host /deep/ .popover .popover-content button {\n      width: 100px;\n      height: 100px;\n      margin: 10px 5px;\n      color: #666;\n      border: 1px solid rgba(0, 0, 0, 0.2); }\n\n:host /deep/ .popover .popover-content button:hover {\n        color: #666;\n        border: 1px solid rgba(0, 0, 0, 0.2);\n        background-color: #f5f6f8; }\n\n:host /deep/ .popover .popover-content button:focus {\n        color: #666;\n        border: 1px solid rgba(0, 0, 0, 0.2);\n        background-color: #f5f6f8; }\n\n:host /deep/ .popover .popover-arrow {\n    left: 47% !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/journey-editor/components/node-tree/add-node/add-node.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNodeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_tree_struct_model__ = __webpack_require__("../../../../../src/app/views/journey-editor/models/tree-struct.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tree_service__ = __webpack_require__("../../../../../src/app/views/journey-editor/services/tree.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddNodeComponent = /** @class */ (function () {
    function AddNodeComponent(treeService) {
        this.treeService = treeService;
        this.NodeTypes = __WEBPACK_IMPORTED_MODULE_1__models_tree_struct_model__["b" /* NodeTypes */];
    }
    AddNodeComponent.prototype.ngOnInit = function () {
    };
    AddNodeComponent.prototype.addNodeToTree = function (type) {
        this.treeService.addNodeToTree(this.node, type);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_tree_struct_model__["a" /* NodeModel */])
    ], AddNodeComponent.prototype, "node", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_tree_struct_model__["a" /* NodeModel */])
    ], AddNodeComponent.prototype, "parentNode", void 0);
    AddNodeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-node',
            template: __webpack_require__("../../../../../src/app/views/journey-editor/components/node-tree/add-node/add-node.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/journey-editor/components/node-tree/add-node/add-node.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_tree_service__["a" /* TreeService */]])
    ], AddNodeComponent);
    return AddNodeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/journey-editor/components/node-tree/condition-node-child/condition-node-child.component.html":
/***/ (function(module, exports) {

module.exports = "<a role=\"button\" href=\"javascript:void(0)\">\n  <div class=\"condition-node-child-wrapper\">\n    <div *ngIf=\"node.getType() === 'condition_yes'\" class=\"bg-success\"><h6>Yes</h6></div>\n    <div *ngIf=\"node.getType() === 'condition_no'\" class=\"bg-danger\"><h6>No</h6></div>\n  </div>\n</a>\n"

/***/ }),

/***/ "../../../../../src/app/views/journey-editor/components/node-tree/condition-node-child/condition-node-child.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".condition-node-child-wrapper {\n  width: 249px; }\n  .condition-node-child-wrapper > div {\n    width: 50px;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 20px;\n    border-radius: 20px; }\n  .condition-node-child-wrapper > div h6 {\n      padding: 5px 10px;\n      margin-bottom: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/journey-editor/components/node-tree/condition-node-child/condition-node-child.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConditionNodeChildComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_tree_struct_model__ = __webpack_require__("../../../../../src/app/views/journey-editor/models/tree-struct.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConditionNodeChildComponent = /** @class */ (function () {
    function ConditionNodeChildComponent() {
    }
    ConditionNodeChildComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_tree_struct_model__["a" /* NodeModel */])
    ], ConditionNodeChildComponent.prototype, "node", void 0);
    ConditionNodeChildComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-condition-node-child',
            template: __webpack_require__("../../../../../src/app/views/journey-editor/components/node-tree/condition-node-child/condition-node-child.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/journey-editor/components/node-tree/condition-node-child/condition-node-child.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ConditionNodeChildComponent);
    return ConditionNodeChildComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/journey-editor/components/node-tree/condition-node-root/condition-node-root.component.html":
/***/ (function(module, exports) {

module.exports = "<a role=\"button\" href=\"javascript:void(0)\">\n  <div class=\"condition-node-root-wrapper\">\n    <h3><i class=\"fa fa-map-signs text-light\" aria-hidden=\"true\"></i></h3>\n    <div class=\"card card-inverse card-primary\">\n      <div class=\"card-block\">\n        <div><p>{{node.data.text || 'Define condition rules'}}</p></div>\n      </div>\n      <app-delete-button [node]=\"node\" [parentNode]=\"parentNode\"></app-delete-button>\n    </div>\n  </div>\n\n</a>\n"

/***/ }),

/***/ "../../../../../src/app/views/journey-editor/components/node-tree/condition-node-root/condition-node-root.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".condition-node-root-wrapper {\n  position: relative; }\n  .condition-node-root-wrapper .card {\n    margin-top: 30px; }\n  .condition-node-root-wrapper .card:hover {\n      color: #000;\n      border: 1px solid #94a0b4; }\n  .condition-node-root-wrapper .card /deep/ .delete-button-wrapper {\n      top: 6px;\n      left: 220px; }\n  .condition-node-root-wrapper .card:hover /deep/ .delete-button-wrapper .delete-button i {\n      display: inline-block !important; }\n  .condition-node-root-wrapper .card::before {\n    background-color: #d2d7df;\n    border: 1px solid #a5afbe;\n    border-radius: 3px;\n    content: \"\";\n    display: block;\n    height: 3rem;\n    position: absolute;\n    -webkit-transform: rotate(45deg);\n    transform: rotate(45deg);\n    width: 3rem;\n    top: -25px;\n    left: 50%;\n    margin-left: -1.5rem; }\n  .condition-node-root-wrapper h3 {\n    position: absolute;\n    top: -16%;\n    left: 50%;\n    z-index: 1;\n    margin-left: -0.8rem; }\n  a:hover {\n  border: none !important; }\n  .card-block p {\n  margin-bottom: 0;\n  margin-top: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/journey-editor/components/node-tree/condition-node-root/condition-node-root.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConditionNodeRootComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_tree_struct_model__ = __webpack_require__("../../../../../src/app/views/journey-editor/models/tree-struct.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConditionNodeRootComponent = /** @class */ (function () {
    function ConditionNodeRootComponent() {
    }
    ConditionNodeRootComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_tree_struct_model__["a" /* NodeModel */])
    ], ConditionNodeRootComponent.prototype, "node", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_tree_struct_model__["a" /* NodeModel */])
    ], ConditionNodeRootComponent.prototype, "parentNode", void 0);
    ConditionNodeRootComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-condition-node-root',
            template: __webpack_require__("../../../../../src/app/views/journey-editor/components/node-tree/condition-node-root/condition-node-root.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/journey-editor/components/node-tree/condition-node-root/condition-node-root.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ConditionNodeRootComponent);
    return ConditionNodeRootComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/journey-editor/components/node-tree/delay-node/delay-node.component.html":
/***/ (function(module, exports) {

module.exports = "<a role=\"button\" href=\"javascript:void(0)\">\n  <div class=\"delay-node-wrapper\">\n    <div class=\"card card-inverse card-primary\">\n      <div class=\"card-body\">\n        <h3><i class=\"fa fa-clock-o text-light-gray\" aria-hidden=\"true\"></i></h3>\n        <p class=\"text-light-gray-2\">Wait </p> <p class=\"text-light-gray\">24 hours</p>\n        <app-delete-button [node]=\"node\" [parentNode]=\"parentNode\"></app-delete-button>\n      </div>\n    </div>\n  </div>\n</a>\n"

/***/ }),

/***/ "../../../../../src/app/views/journey-editor/components/node-tree/delay-node/delay-node.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".delay-node-wrapper {\n  width: 249px;\n  position: relative; }\n  .delay-node-wrapper .card {\n    margin-bottom: 0;\n    border-radius: 40px; }\n  .delay-node-wrapper .card .card-body h3 {\n      margin-bottom: 0;\n      display: inline-block;\n      vertical-align: middle;\n      line-height: 1; }\n  .delay-node-wrapper .card .card-body p {\n      display: inline-block;\n      font-size: 13px;\n      margin-bottom: 0; }\n  .delay-node-wrapper .card .card-body .text-light-gray {\n      color: #666; }\n  .delay-node-wrapper .card .card-body .text-light-gray-2 {\n      color: #777; }\n  .delay-node-wrapper /deep/ .delete-button-wrapper {\n    left: 86%;\n    top: 29%; }\n  .delay-node-wrapper:hover /deep/ .delete-button-wrapper .delete-button i {\n    display: inline-block !important; }\n  a, .card, .card-body {\n  outline: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/journey-editor/components/node-tree/delay-node/delay-node.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DelayNodeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_tree_struct_model__ = __webpack_require__("../../../../../src/app/views/journey-editor/models/tree-struct.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DelayNodeComponent = /** @class */ (function () {
    function DelayNodeComponent() {
    }
    DelayNodeComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_tree_struct_model__["a" /* NodeModel */])
    ], DelayNodeComponent.prototype, "node", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_tree_struct_model__["a" /* NodeModel */])
    ], DelayNodeComponent.prototype, "parentNode", void 0);
    DelayNodeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-delay-node',
            template: __webpack_require__("../../../../../src/app/views/journey-editor/components/node-tree/delay-node/delay-node.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/journey-editor/components/node-tree/delay-node/delay-node.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DelayNodeComponent);
    return DelayNodeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/journey-editor/components/node-tree/mail-node/mail-node.component.html":
/***/ (function(module, exports) {

module.exports = "<a role=\"button\" href=\"javascript:void(0)\">\n  <div class=\"mail-node-wrapper\">\n    <div class=\"card card-inverse card-primary\">\n      <div class=\"card-body\">\n        <h1><i class=\"fa fa-envelope-o text-light-gray\" aria-hidden=\"true\"></i></h1>\n      </div>\n      <div class=\"card-footer\">\n        Define email\n      </div>\n      <app-delete-button [node]=\"node\" [parentNode]=\"parentNode\"></app-delete-button>\n    </div>\n  </div>\n</a>\n"

/***/ }),

/***/ "../../../../../src/app/views/journey-editor/components/node-tree/mail-node/mail-node.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mail-node-wrapper {\n  width: 249px; }\n  .mail-node-wrapper /deep/ .delete-button-wrapper {\n    left: 86%;\n    top: 5%; }\n  .mail-node-wrapper:hover /deep/ .delete-button-wrapper .delete-button i {\n    display: inline-block !important; }\n  .mail-node-wrapper .card {\n    width: 219px;\n    margin: 0 auto; }\n  .mail-node-wrapper .card .card-body {\n      height: 150px;\n      padding: 0; }\n  .mail-node-wrapper .card .card-body h1 {\n        line-height: 150px;\n        margin-bottom: 0; }\n  .mail-node-wrapper .card .card-body h1.text-light-gray {\n        color: #666; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/journey-editor/components/node-tree/mail-node/mail-node.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailNodeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_tree_struct_model__ = __webpack_require__("../../../../../src/app/views/journey-editor/models/tree-struct.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MailNodeComponent = /** @class */ (function () {
    function MailNodeComponent() {
    }
    MailNodeComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_tree_struct_model__["a" /* NodeModel */])
    ], MailNodeComponent.prototype, "node", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_tree_struct_model__["a" /* NodeModel */])
    ], MailNodeComponent.prototype, "parentNode", void 0);
    MailNodeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mail-node',
            template: __webpack_require__("../../../../../src/app/views/journey-editor/components/node-tree/mail-node/mail-node.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/journey-editor/components/node-tree/mail-node/mail-node.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MailNodeComponent);
    return MailNodeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/journey-editor/components/node-tree/trigger-node/trigger-node.component.html":
/***/ (function(module, exports) {

module.exports = "<a role=\"button\" href=\"javascript:void(0)\" (click)=\"triggerActionModal.show()\">\n  <div class=\"trigger-node-wrapper\">\n    <div class=\"card card-inverse card-primary\">\n      <div class=\"card-block\">\n        <h1><i class=\"text-success fa fa-file-text-o\" aria-hidden=\"true\"></i></h1>\n        <div>{{node.data.text}}</div>\n      </div>\n    </div>\n  </div>\n</a>\n\n\n<div bsModal #triggerActionModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\"\n     role=\"dialog\" aria-labelledby=\"dialog-sizes-name1\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 id=\"dialog-sizes-name1\" class=\"modal-title pull-left\">What will trigger this journey?</h4>\n        <button type=\"button\" class=\"close pull-right\" (click)=\"triggerActionModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        ...\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\">Save</button>\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"triggerActionModal.hide()\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/journey-editor/components/node-tree/trigger-node/trigger-node.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".trigger-node-wrapper {\n  width: 249px; }\n  .trigger-node-wrapper .card {\n    margin-bottom: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/journey-editor/components/node-tree/trigger-node/trigger-node.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TriggerNodeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_tree_struct_model__ = __webpack_require__("../../../../../src/app/views/journey-editor/models/tree-struct.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TriggerNodeComponent = /** @class */ (function () {
    function TriggerNodeComponent() {
    }
    TriggerNodeComponent.prototype.ngOnInit = function () {
        if (this.node.data && !this.node.data.type) {
            this.node.data = {
                type: 'join_the_list',
                text: 'Subscribers joins the list',
                recipients_id: 1
            };
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_tree_struct_model__["a" /* NodeModel */])
    ], TriggerNodeComponent.prototype, "node", void 0);
    TriggerNodeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-trigger-node',
            template: __webpack_require__("../../../../../src/app/views/journey-editor/components/node-tree/trigger-node/trigger-node.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/journey-editor/components/node-tree/trigger-node/trigger-node.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TriggerNodeComponent);
    return TriggerNodeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/journey-editor/components/tree/tree.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"padding-start-0\">\n  <li *ngFor=\"let node of nodes\" [ngSwitch]=\"node.getType()\">\n    <app-trigger-node *ngSwitchCase=\"'trigger'\" [node]=\"node\"></app-trigger-node>\n    <app-add-node *ngSwitchCase=\"'add'\" [node]=\"node\" [parentNode]=\"parentNode\"></app-add-node>\n    <app-mail-node *ngSwitchCase=\"'email'\" [node]=\"node\" [parentNode]=\"parentNode\"></app-mail-node>\n    <app-delay-node *ngSwitchCase=\"'delay'\" [node]=\"node\" [parentNode]=\"parentNode\"></app-delay-node>\n    <app-condition-node-root *ngSwitchCase=\"'condition'\" [node]=\"node\" [parentNode]=\"parentNode\"></app-condition-node-root>\n    <app-condition-node-child *ngSwitchDefault [node]=\"node\"></app-condition-node-child>\n    <app-tree *ngIf=\"node.children.length > 0\" [nodes]=\"node.children\" [parentNode]=\"node\"></app-tree>\n  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/views/journey-editor/components/tree/tree.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul.padding-start-0 {\n  -webkit-padding-start: 0;\n  -moz-padding-start: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/journey-editor/components/tree/tree.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_tree_struct_model__ = __webpack_require__("../../../../../src/app/views/journey-editor/models/tree-struct.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TreeComponent = /** @class */ (function () {
    function TreeComponent() {
    }
    TreeComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], TreeComponent.prototype, "nodes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_tree_struct_model__["a" /* NodeModel */])
    ], TreeComponent.prototype, "parentNode", void 0);
    TreeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tree',
            template: __webpack_require__("../../../../../src/app/views/journey-editor/components/tree/tree.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/journey-editor/components/tree/tree.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TreeComponent);
    return TreeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/journey-editor/journey-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid journey-editor\">\n  <div class=\"row header\"></div>\n  <div class=\"row body\">\n    <div class=\"col-md-3 info-zone\"></div>\n    <div class=\"col-md-9 diagram-zone\">\n      <app-div-zoomable [selector]=\"'div.tree'\">\n        <div class=\"tree d-inline-block\">\n          <app-tree [nodes]=\"[journeyData._root]\" [parentNode]=\"null\"></app-tree>\n        </div>\n      </app-div-zoomable>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/journey-editor/journey-editor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".journey-editor {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  min-height: 100vh; }\n  .journey-editor .header {\n    -ms-flex-align: center;\n    -webkit-box-align: center;\n            align-items: center;\n    background-color: #fff;\n    border-bottom: 1px solid #d2d7df;\n    -webkit-box-shadow: 0 2px 0 rgba(67, 77, 93, 0.1);\n            box-shadow: 0 2px 0 rgba(67, 77, 93, 0.1);\n    min-height: 4.6875rem;\n    padding-bottom: 1rem;\n    padding-top: 1rem;\n    position: relative; }\n  .diagram-zone {\n  text-align: center;\n  -ms-flex: 1 0 0%;\n  -webkit-box-flex: 1;\n          flex: 1 0 0%;\n  max-height: calc(100vh - 75px);\n  -ms-flex-order: 1;\n  -webkit-box-ordinal-group: 2;\n          order: 1;\n  overflow: scroll;\n  padding: 3.5rem;\n  position: relative; }\n  .info-zone {\n  background-color: #fafafb;\n  border-right: 1px solid #d2d7df;\n  -webkit-box-shadow: 2px 0 0 rgba(67, 77, 93, 0.1);\n          box-shadow: 2px 0 0 rgba(67, 77, 93, 0.1);\n  height: calc(100vh - 75px);\n  max-width: 440px;\n  overflow: auto;\n  padding: 3rem;\n  position: relative;\n  width: 50%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/journey-editor/journey-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JourneyEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_tree_struct_model__ = __webpack_require__("../../../../../src/app/views/journey-editor/models/tree-struct.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tree_service__ = __webpack_require__("../../../../../src/app/views/journey-editor/services/tree.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JourneyEditorComponent = /** @class */ (function () {
    function JourneyEditorComponent(treeService) {
        this.treeService = treeService;
        this.addNodeToTree();
        this.removeNodeFromTree();
    }
    JourneyEditorComponent.prototype.ngOnInit = function () {
        // TODO: load and convert json to TreeModel => journeyData
        if (!this.journeyData) {
            this.journeyData = new __WEBPACK_IMPORTED_MODULE_1__models_tree_struct_model__["c" /* TreeModel */](__WEBPACK_IMPORTED_MODULE_1__models_tree_struct_model__["b" /* NodeTypes */].trigger, {});
            this.journeyData.addNode(this.journeyData._root, __WEBPACK_IMPORTED_MODULE_1__models_tree_struct_model__["b" /* NodeTypes */].add);
        }
    };
    JourneyEditorComponent.prototype.addNodeToTree = function () {
        var _this = this;
        this.treeService.addNode$.subscribe(function (_a) {
            var parentNode = _a.parentNode, nodeType = _a.nodeType;
            _this.journeyData.addNode(parentNode, nodeType);
        });
    };
    JourneyEditorComponent.prototype.removeNodeFromTree = function () {
        var _this = this;
        this.treeService.removeNode$.subscribe(function (_a) {
            var parentNode = _a.parentNode, node = _a.node;
            _this.journeyData.removeNode(parentNode, node);
        });
    };
    JourneyEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-journey-editor',
            template: __webpack_require__("../../../../../src/app/views/journey-editor/journey-editor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/journey-editor/journey-editor.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_tree_service__["a" /* TreeService */]])
    ], JourneyEditorComponent);
    return JourneyEditorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/journey-editor/journey-editor.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JourneyEditorModule", function() { return JourneyEditorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_tree_service__ = __webpack_require__("../../../../../src/app/views/journey-editor/services/tree.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__journey_editor_component__ = __webpack_require__("../../../../../src/app/views/journey-editor/journey-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__journey_editor_routing__ = __webpack_require__("../../../../../src/app/views/journey-editor/journey-editor.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_tree_tree_component__ = __webpack_require__("../../../../../src/app/views/journey-editor/components/tree/tree.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_node_tree_trigger_node_trigger_node_component__ = __webpack_require__("../../../../../src/app/views/journey-editor/components/node-tree/trigger-node/trigger-node.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_node_tree_add_node_add_node_component__ = __webpack_require__("../../../../../src/app/views/journey-editor/components/node-tree/add-node/add-node.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_popover__ = __webpack_require__("../../../../ngx-bootstrap/popover/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_node_tree_mail_node_mail_node_component__ = __webpack_require__("../../../../../src/app/views/journey-editor/components/node-tree/mail-node/mail-node.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_node_tree_delay_node_delay_node_component__ = __webpack_require__("../../../../../src/app/views/journey-editor/components/node-tree/delay-node/delay-node.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_node_tree_condition_node_root_condition_node_root_component__ = __webpack_require__("../../../../../src/app/views/journey-editor/components/node-tree/condition-node-root/condition-node-root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_node_tree_condition_node_child_condition_node_child_component__ = __webpack_require__("../../../../../src/app/views/journey-editor/components/node-tree/condition-node-child/condition-node-child.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_delete_button_delete_button_component__ = __webpack_require__("../../../../../src/app/views/journey-editor/components/delete-button/delete-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_div_zoomable_div_zoomable_component__ = __webpack_require__("../../../../../src/app/views/journey-editor/components/div-zoomable/div-zoomable.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var JourneyEditorModule = /** @class */ (function () {
    function JourneyEditorModule() {
    }
    JourneyEditorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__journey_editor_routing__["a" /* JourneyEditorRouting */],
                __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_popover__["a" /* PopoverModule */].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__journey_editor_component__["a" /* JourneyEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_tree_tree_component__["a" /* TreeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_node_tree_trigger_node_trigger_node_component__["a" /* TriggerNodeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_node_tree_add_node_add_node_component__["a" /* AddNodeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_node_tree_mail_node_mail_node_component__["a" /* MailNodeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_node_tree_delay_node_delay_node_component__["a" /* DelayNodeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_node_tree_condition_node_root_condition_node_root_component__["a" /* ConditionNodeRootComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_node_tree_condition_node_child_condition_node_child_component__["a" /* ConditionNodeChildComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_delete_button_delete_button_component__["a" /* DeleteButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_div_zoomable_div_zoomable_component__["a" /* DivZoomableComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_tree_service__["a" /* TreeService */]
            ]
        })
    ], JourneyEditorModule);
    return JourneyEditorModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/journey-editor/journey-editor.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JourneyEditorRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__journey_editor_component__ = __webpack_require__("../../../../../src/app/views/journey-editor/journey-editor.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__journey_editor_component__["a" /* JourneyEditorComponent */],
        data: {
            title: 'Journey'
        },
    }
];
var JourneyEditorRouting = /** @class */ (function () {
    function JourneyEditorRouting() {
    }
    JourneyEditorRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], JourneyEditorRouting);
    return JourneyEditorRouting;
}());



/***/ }),

/***/ "../../../../../src/app/views/journey-editor/models/tree-struct.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NodeTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TreeModel; });
var NodeTypes;
(function (NodeTypes) {
    NodeTypes[NodeTypes["trigger"] = 0] = "trigger";
    NodeTypes[NodeTypes["delay"] = 1] = "delay";
    NodeTypes[NodeTypes["email"] = 2] = "email";
    NodeTypes[NodeTypes["condition"] = 3] = "condition";
    NodeTypes[NodeTypes["condition_yes"] = 4] = "condition_yes";
    NodeTypes[NodeTypes["condition_no"] = 5] = "condition_no";
    NodeTypes[NodeTypes["blank"] = 6] = "blank";
    NodeTypes[NodeTypes["add"] = 7] = "add";
})(NodeTypes || (NodeTypes = {}));
var NodeModel = /** @class */ (function () {
    function NodeModel(type, children, data) {
        if (children === void 0) { children = []; }
        if (data === void 0) { data = {}; }
        this.type = type;
        // this.parent = parent;
        this.children = children;
        this.data = data;
    }
    NodeModel.prototype.canRemove = function () {
        if (this.type !== NodeTypes.condition) {
            return true;
        }
        else {
            if (this.children[0].children.length === 0 || this.children[1].children.length === 0) {
                return true;
            }
        }
        return false;
    };
    NodeModel.prototype.getType = function () {
        if (this.type === NodeTypes.trigger) {
            return 'trigger';
        }
        else if (this.type === NodeTypes.email) {
            return 'email';
        }
        else if (this.type === NodeTypes.delay) {
            return 'delay';
        }
        else if (this.type === NodeTypes.condition) {
            return 'condition';
        }
        else if (this.type === NodeTypes.condition_yes) {
            return 'condition_yes';
        }
        else if (this.type === NodeTypes.condition_no) {
            return 'condition_no';
        }
        else if (this.type === NodeTypes.add) {
            return 'add';
        }
        else {
            return 'blank';
        }
    };
    return NodeModel;
}());

var TreeModel = /** @class */ (function () {
    function TreeModel(node_type, node_data) {
        this._root = new NodeModel(node_type, [], node_data);
    }
    TreeModel.prototype.addNode = function (parentNode, nodeType) {
        // default: add-node
        var addNode = new NodeModel(NodeTypes.add);
        var nodeToAdd;
        switch (nodeType) {
            case NodeTypes.delay:
                nodeToAdd = new NodeModel(NodeTypes.delay, [addNode]);
                break;
            case NodeTypes.email:
                nodeToAdd = new NodeModel(NodeTypes.email, [addNode]);
                break;
            case NodeTypes.condition:
                var condition_yes = new NodeModel(NodeTypes.condition_yes, [new NodeModel(NodeTypes.add)]);
                var condition_no = new NodeModel(NodeTypes.condition_no, [new NodeModel(NodeTypes.add)]);
                nodeToAdd = new NodeModel(NodeTypes.condition, [condition_yes, condition_no]);
                break;
            default:
                nodeToAdd = new NodeModel(NodeTypes.add, [], {});
                break;
        }
        if (parentNode.children.length > 0) {
            if (nodeType === NodeTypes.condition) {
                nodeToAdd.children[0].children[0].children = parentNode.children.slice();
            }
            else {
                nodeToAdd.children[0].children = parentNode.children.slice();
            }
        }
        parentNode.children = [nodeToAdd];
    };
    TreeModel.prototype.removeNode = function (parentNode, nodeToRemove) {
        if (nodeToRemove.type !== NodeTypes.condition) {
            parentNode.children = nodeToRemove.children[0].children.slice();
        }
        else {
            parentNode.children = (nodeToRemove.children[0].children[0].children.length > 0 ? nodeToRemove.children[0].children[0].children : nodeToRemove.children[1].children[0].children).slice();
        }
    };
    return TreeModel;
}());



/***/ }),

/***/ "../../../../../src/app/views/journey-editor/services/tree.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TreeService = /** @class */ (function () {
    function TreeService() {
        // Observable string sources
        this.addNode = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.removeNode = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        // Observable string streams
        this.addNode$ = this.addNode.asObservable();
        this.removeNode$ = this.removeNode.asObservable();
    }
    // Service message commands
    TreeService.prototype.addNodeToTree = function (parentNode, nodeType) {
        this.addNode.next({
            parentNode: parentNode,
            nodeType: nodeType
        });
    };
    TreeService.prototype.removeNodeFromTree = function (parentNode, node) {
        this.removeNode.next({
            parentNode: parentNode,
            node: node
        });
    };
    TreeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], TreeService);
    return TreeService;
}());



/***/ }),

/***/ "../../../../ngx-bootstrap/modal/bs-modal-ref.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsModalRef; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

var BsModalRef = (function () {
    function BsModalRef() {
        /**
         * Hides the modal
         */
        this.hide = Function;
    }
    BsModalRef.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BsModalRef.ctorParameters = function () { return []; };
    return BsModalRef;
}());

//# sourceMappingURL=bs-modal-ref.service.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/modal/bs-modal.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_loader_component_loader_factory__ = __webpack_require__("../../../../ngx-bootstrap/component-loader/component-loader.factory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_backdrop_component__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal-backdrop.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_container_component__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal-container.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_options_class__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal-options.class.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bs_modal_ref_service__ = __webpack_require__("../../../../ngx-bootstrap/modal/bs-modal-ref.service.js");






var BsModalService = (function () {
    function BsModalService(rendererFactory, clf) {
        this.clf = clf;
        // constructor props
        this.config = __WEBPACK_IMPORTED_MODULE_4__modal_options_class__["e" /* modalConfigDefaults */];
        this.onShow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onShown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onHide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onHidden = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.modalsCount = 0;
        this.lastDismissReason = '';
        this.loaders = [];
        this._backdropLoader = this.clf.createLoader(null, null, null);
        this._renderer = rendererFactory.createRenderer(null, null);
    }
    /** Shows a modal */
    BsModalService.prototype.show = function (content, config) {
        this.modalsCount++;
        this._createLoaders();
        this.config = Object.assign({}, __WEBPACK_IMPORTED_MODULE_4__modal_options_class__["e" /* modalConfigDefaults */], config);
        this._showBackdrop();
        this.lastDismissReason = null;
        return this._showModal(content);
    };
    BsModalService.prototype.hide = function (level) {
        var _this = this;
        if (this.modalsCount === 1) {
            this._hideBackdrop();
            this.resetScrollbar();
        }
        this.modalsCount = this.modalsCount >= 1 ? this.modalsCount - 1 : 0;
        setTimeout(function () {
            _this._hideModal(level);
            _this.removeLoaders(level);
        }, this.config.animated ? __WEBPACK_IMPORTED_MODULE_4__modal_options_class__["d" /* TRANSITION_DURATIONS */].BACKDROP : 0);
    };
    BsModalService.prototype._showBackdrop = function () {
        var isBackdropEnabled = this.config.backdrop || this.config.backdrop === 'static';
        var isBackdropInDOM = !this.backdropRef || !this.backdropRef.instance.isShown;
        if (this.modalsCount === 1) {
            this.removeBackdrop();
            if (isBackdropEnabled && isBackdropInDOM) {
                this._backdropLoader
                    .attach(__WEBPACK_IMPORTED_MODULE_2__modal_backdrop_component__["a" /* ModalBackdropComponent */])
                    .to('body')
                    .show({ isAnimated: this.config.animated });
                this.backdropRef = this._backdropLoader._componentRef;
            }
        }
    };
    BsModalService.prototype._hideBackdrop = function () {
        var _this = this;
        if (!this.backdropRef) {
            return;
        }
        this.backdropRef.instance.isShown = false;
        var duration = this.config.animated ? __WEBPACK_IMPORTED_MODULE_4__modal_options_class__["d" /* TRANSITION_DURATIONS */].BACKDROP : 0;
        setTimeout(function () { return _this.removeBackdrop(); }, duration);
    };
    BsModalService.prototype._showModal = function (content) {
        var modalLoader = this.loaders[this.loaders.length - 1];
        var bsModalRef = new __WEBPACK_IMPORTED_MODULE_5__bs_modal_ref_service__["a" /* BsModalRef */]();
        var modalContainerRef = modalLoader
            .provide({ provide: __WEBPACK_IMPORTED_MODULE_4__modal_options_class__["c" /* ModalOptions */], useValue: this.config })
            .provide({ provide: __WEBPACK_IMPORTED_MODULE_5__bs_modal_ref_service__["a" /* BsModalRef */], useValue: bsModalRef })
            .attach(__WEBPACK_IMPORTED_MODULE_3__modal_container_component__["a" /* ModalContainerComponent */])
            .to('body')
            .show({ content: content, isAnimated: this.config.animated, initialState: this.config.initialState, bsModalService: this });
        modalContainerRef.instance.level = this.getModalsCount();
        bsModalRef.hide = function () {
            modalContainerRef.instance.hide();
        };
        bsModalRef.content = modalLoader.getInnerComponent() || null;
        return bsModalRef;
    };
    BsModalService.prototype._hideModal = function (level) {
        var modalLoader = this.loaders[level - 1];
        if (modalLoader) {
            modalLoader.hide();
        }
    };
    BsModalService.prototype.getModalsCount = function () {
        return this.modalsCount;
    };
    BsModalService.prototype.setDismissReason = function (reason) {
        this.lastDismissReason = reason;
    };
    BsModalService.prototype.removeBackdrop = function () {
        this._backdropLoader.hide();
        this.backdropRef = null;
    };
    /** AFTER PR MERGE MODAL.COMPONENT WILL BE USING THIS CODE */
    /** Scroll bar tricks */
    /** @internal */
    BsModalService.prototype.checkScrollbar = function () {
        this.isBodyOverflowing = document.body.clientWidth < window.innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    };
    BsModalService.prototype.setScrollbar = function () {
        if (!document) {
            return;
        }
        this.originalBodyPadding = parseInt(window
            .getComputedStyle(document.body)
            .getPropertyValue('padding-right') || '0', 10);
        if (this.isBodyOverflowing) {
            document.body.style.paddingRight = this.originalBodyPadding +
                this.scrollbarWidth + "px";
        }
    };
    BsModalService.prototype.resetScrollbar = function () {
        document.body.style.paddingRight = this.originalBodyPadding + "px";
    };
    // thx d.walsh
    BsModalService.prototype.getScrollbarWidth = function () {
        var scrollDiv = this._renderer.createElement('div');
        this._renderer.addClass(scrollDiv, __WEBPACK_IMPORTED_MODULE_4__modal_options_class__["a" /* CLASS_NAME */].SCROLLBAR_MEASURER);
        this._renderer.appendChild(document.body, scrollDiv);
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this._renderer.removeChild(document.body, scrollDiv);
        return scrollbarWidth;
    };
    BsModalService.prototype._createLoaders = function () {
        var loader = this.clf.createLoader(null, null, null);
        this.copyEvent(loader.onBeforeShow, this.onShow);
        this.copyEvent(loader.onShown, this.onShown);
        this.copyEvent(loader.onBeforeHide, this.onHide);
        this.copyEvent(loader.onHidden, this.onHidden);
        this.loaders.push(loader);
    };
    BsModalService.prototype.removeLoaders = function (level) {
        this.loaders.splice(level - 1, 1);
        this.loaders.forEach(function (loader, i) {
            loader.instance.level = i + 1;
        });
    };
    BsModalService.prototype.copyEvent = function (from, to) {
        var _this = this;
        from.subscribe(function () {
            to.emit(_this.lastDismissReason);
        });
    };
    BsModalService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BsModalService.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["RendererFactory2"], },
        { type: __WEBPACK_IMPORTED_MODULE_1__component_loader_component_loader_factory__["a" /* ComponentLoaderFactory */], },
    ]; };
    return BsModalService;
}());

//# sourceMappingURL=bs-modal.service.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/modal/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bs_modal_ref_service__ = __webpack_require__("../../../../ngx-bootstrap/modal/bs-modal-ref.service.js");
/* unused harmony reexport BsModalRef */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_backdrop_options__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal-backdrop.options.js");
/* unused harmony reexport ModalBackdropOptions */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_container_component__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal-container.component.js");
/* unused harmony reexport ModalContainerComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_backdrop_component__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal-backdrop.component.js");
/* unused harmony reexport ModalBackdropComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_options_class__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal-options.class.js");
/* unused harmony reexport ModalOptions */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_directive__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal.directive.js");
/* unused harmony reexport ModalDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modal_module__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal.module.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_6__modal_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bs_modal_service__ = __webpack_require__("../../../../ngx-bootstrap/modal/bs-modal.service.js");
/* unused harmony reexport BsModalService */








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/modal/modal-backdrop.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalBackdropComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_options_class__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal-options.class.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__ = __webpack_require__("../../../../ngx-bootstrap/utils/theme-provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_utils_class__ = __webpack_require__("../../../../ngx-bootstrap/utils/utils.class.js");




/** This component will be added as background layout for modals if enabled */
var ModalBackdropComponent = (function () {
    function ModalBackdropComponent(element, renderer) {
        this._isShown = false;
        this.element = element;
        this.renderer = renderer;
    }
    Object.defineProperty(ModalBackdropComponent.prototype, "isAnimated", {
        get: function () {
            return this._isAnimated;
        },
        set: function (value) {
            this._isAnimated = value;
            // this.renderer.setElementClass(this.element.nativeElement, `${ClassName.FADE}`, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalBackdropComponent.prototype, "isShown", {
        get: function () {
            return this._isShown;
        },
        set: function (value) {
            this._isShown = value;
            if (value) {
                this.renderer.addClass(this.element.nativeElement, "" + __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["a" /* CLASS_NAME */].IN);
            }
            else {
                this.renderer.removeClass(this.element.nativeElement, "" + __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["a" /* CLASS_NAME */].IN);
            }
            if (!Object(__WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__["a" /* isBs3 */])()) {
                if (value) {
                    this.renderer.addClass(this.element.nativeElement, "" + __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["a" /* CLASS_NAME */].SHOW);
                }
                else {
                    this.renderer.removeClass(this.element.nativeElement, "" + __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["a" /* CLASS_NAME */].SHOW);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    ModalBackdropComponent.prototype.ngOnInit = function () {
        if (this.isAnimated) {
            this.renderer.addClass(this.element.nativeElement, "" + __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["a" /* CLASS_NAME */].FADE);
            __WEBPACK_IMPORTED_MODULE_3__utils_utils_class__["a" /* Utils */].reflow(this.element.nativeElement);
        }
        this.isShown = true;
    };
    ModalBackdropComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'bs-modal-backdrop',
                    template: ' ',
                    host: { class: __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["a" /* CLASS_NAME */].BACKDROP }
                },] },
    ];
    /** @nocollapse */
    ModalBackdropComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    ]; };
    return ModalBackdropComponent;
}());

//# sourceMappingURL=modal-backdrop.component.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/modal/modal-backdrop.options.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ModalBackdropOptions */
var ModalBackdropOptions = (function () {
    function ModalBackdropOptions(options) {
        this.animate = true;
        Object.assign(this, options);
    }
    return ModalBackdropOptions;
}());

//# sourceMappingURL=modal-backdrop.options.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/modal/modal-container.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_options_class__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal-options.class.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__ = __webpack_require__("../../../../ngx-bootstrap/utils/theme-provider.js");



var ModalContainerComponent = (function () {
    function ModalContainerComponent(options, _element, _renderer) {
        this._element = _element;
        this._renderer = _renderer;
        this.isShown = false;
        this.isModalHiding = false;
        this.config = Object.assign({}, options);
    }
    ModalContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.isAnimated) {
            this._renderer.addClass(this._element.nativeElement, __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["a" /* CLASS_NAME */].FADE);
        }
        this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
        setTimeout(function () {
            _this.isShown = true;
            _this._renderer.addClass(_this._element.nativeElement, Object(__WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__["a" /* isBs3 */])() ? __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["a" /* CLASS_NAME */].IN : __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["a" /* CLASS_NAME */].SHOW);
        }, this.isAnimated ? __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["d" /* TRANSITION_DURATIONS */].BACKDROP : 0);
        if (document && document.body) {
            if (this.bsModalService.getModalsCount() === 1) {
                this.bsModalService.checkScrollbar();
                this.bsModalService.setScrollbar();
            }
            this._renderer.addClass(document.body, __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["a" /* CLASS_NAME */].OPEN);
        }
        if (this._element.nativeElement) {
            this._element.nativeElement.focus();
        }
    };
    ModalContainerComponent.prototype.onClick = function (event) {
        if (this.config.ignoreBackdropClick ||
            this.config.backdrop === 'static' ||
            event.target !== this._element.nativeElement) {
            return;
        }
        this.bsModalService.setDismissReason(__WEBPACK_IMPORTED_MODULE_1__modal_options_class__["b" /* DISMISS_REASONS */].BACKRDOP);
        this.hide();
    };
    ModalContainerComponent.prototype.onEsc = function () {
        if (this.config.keyboard &&
            this.level === this.bsModalService.getModalsCount()) {
            this.bsModalService.setDismissReason(__WEBPACK_IMPORTED_MODULE_1__modal_options_class__["b" /* DISMISS_REASONS */].ESC);
            this.hide();
        }
    };
    ModalContainerComponent.prototype.ngOnDestroy = function () {
        if (this.isShown) {
            this.hide();
        }
    };
    ModalContainerComponent.prototype.hide = function () {
        var _this = this;
        if (this.isModalHiding || !this.isShown) {
            return;
        }
        this.isModalHiding = true;
        this._renderer.removeClass(this._element.nativeElement, Object(__WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__["a" /* isBs3 */])() ? __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["a" /* CLASS_NAME */].IN : __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["a" /* CLASS_NAME */].SHOW);
        setTimeout(function () {
            _this.isShown = false;
            if (document &&
                document.body &&
                _this.bsModalService.getModalsCount() === 1) {
                _this._renderer.removeClass(document.body, __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["a" /* CLASS_NAME */].OPEN);
            }
            _this.bsModalService.hide(_this.level);
            _this.isModalHiding = false;
        }, this.isAnimated ? __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["d" /* TRANSITION_DURATIONS */].MODAL : 0);
    };
    ModalContainerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'modal-container',
                    template: "\n    <div [class]=\"'modal-dialog' + (config.class ? ' ' + config.class : '')\" role=\"document\">\n      <div class=\"modal-content\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  ",
                    host: {
                        class: 'modal',
                        role: 'dialog',
                        tabindex: '-1'
                    }
                },] },
    ];
    /** @nocollapse */
    ModalContainerComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["c" /* ModalOptions */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    ]; };
    ModalContainerComponent.propDecorators = {
        'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click', ['$event'],] },],
        'onEsc': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['window:keydown.esc',] },],
    };
    return ModalContainerComponent;
}());

//# sourceMappingURL=modal-container.component.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/modal/modal-options.class.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ModalOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return modalConfigDefaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CLASS_NAME; });
/* unused harmony export SELECTOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TRANSITION_DURATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DISMISS_REASONS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

var ModalOptions = (function () {
    function ModalOptions() {
    }
    ModalOptions.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    ModalOptions.ctorParameters = function () { return []; };
    return ModalOptions;
}());

var modalConfigDefaults = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: '',
    animated: true,
    initialState: {}
};
var CLASS_NAME = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    IN: 'in',
    SHOW: 'show' // bs4
};
var SELECTOR = {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'
};
var TRANSITION_DURATIONS = {
    MODAL: 300,
    BACKDROP: 150
};
var DISMISS_REASONS = {
    BACKRDOP: 'backdrop-click',
    ESC: 'esc'
};
//# sourceMappingURL=modal-options.class.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/modal/modal.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__ = __webpack_require__("../../../../ngx-bootstrap/utils/facade/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__ = __webpack_require__("../../../../ngx-bootstrap/utils/theme-provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_utils_class__ = __webpack_require__("../../../../ngx-bootstrap/utils/utils.class.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_backdrop_component__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal-backdrop.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_options_class__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal-options.class.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_loader_component_loader_factory__ = __webpack_require__("../../../../ngx-bootstrap/component-loader/component-loader.factory.js");
/* tslint:disable:max-file-line-count */
// todo: should we support enforce focus in?
// todo: in original bs there are was a way to prevent modal from showing
// todo: original modal had resize events







var TRANSITION_DURATION = 300;
var BACKDROP_TRANSITION_DURATION = 150;
/** Mark any code with directive to show it's content in modal */
var ModalDirective = (function () {
    function ModalDirective(_element, _viewContainerRef, _renderer, clf) {
        this._element = _element;
        this._renderer = _renderer;
        /** This event fires immediately when the `show` instance method is called. */
        this.onShow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** This event is fired when the modal has been made visible to the user
         * (will wait for CSS transitions to complete)
         */
        this.onShown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** This event is fired immediately when
         * the hide instance method has been called.
         */
        this.onHide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** This event is fired when the modal has finished being
         * hidden from the user (will wait for CSS transitions to complete).
         */
        this.onHidden = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._isShown = false;
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.timerHideModal = 0;
        this.timerRmBackDrop = 0;
        this.isNested = false;
        this._backdrop = clf.createLoader(_element, _viewContainerRef, _renderer);
    }
    Object.defineProperty(ModalDirective.prototype, "config", {
        get: function () {
            return this._config;
        },
        /** allows to set modal configuration via element property */
        set: function (conf) {
            this._config = this.getConfig(conf);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalDirective.prototype, "isShown", {
        get: function () {
            return this._isShown;
        },
        enumerable: true,
        configurable: true
    });
    ModalDirective.prototype.onClick = function (event) {
        if (this.config.ignoreBackdropClick ||
            this.config.backdrop === 'static' ||
            event.target !== this._element.nativeElement) {
            return;
        }
        this.dismissReason = __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["b" /* DISMISS_REASONS */].BACKRDOP;
        this.hide(event);
    };
    // todo: consider preventing default and stopping propagation
    ModalDirective.prototype.onEsc = function () {
        if (this.config.keyboard) {
            this.dismissReason = __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["b" /* DISMISS_REASONS */].ESC;
            this.hide();
        }
    };
    ModalDirective.prototype.ngOnDestroy = function () {
        this.config = void 0;
        if (this._isShown) {
            this._isShown = false;
            this.hideModal();
            this._backdrop.dispose();
        }
    };
    ModalDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._config = this._config || this.getConfig();
        setTimeout(function () {
            if (_this._config.show) {
                _this.show();
            }
        }, 0);
    };
    /* Public methods */
    /** Allows to manually toggle modal visibility */
    ModalDirective.prototype.toggle = function () {
        return this._isShown ? this.hide() : this.show();
    };
    /** Allows to manually open modal */
    ModalDirective.prototype.show = function () {
        var _this = this;
        this.dismissReason = null;
        this.onShow.emit(this);
        if (this._isShown) {
            return;
        }
        clearTimeout(this.timerHideModal);
        clearTimeout(this.timerRmBackDrop);
        this._isShown = true;
        this.checkScrollbar();
        this.setScrollbar();
        if (__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */] && __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body) {
            if (__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body.classList.contains(__WEBPACK_IMPORTED_MODULE_5__modal_options_class__["a" /* CLASS_NAME */].OPEN)) {
                this.isNested = true;
            }
            else {
                this._renderer.addClass(__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["a" /* CLASS_NAME */].OPEN);
            }
        }
        this.showBackdrop(function () {
            _this.showElement();
        });
    };
    /** Allows to manually close modal */
    ModalDirective.prototype.hide = function (event) {
        var _this = this;
        if (event) {
            event.preventDefault();
        }
        this.onHide.emit(this);
        // todo: add an option to prevent hiding
        if (!this._isShown) {
            return;
        }
        clearTimeout(this.timerHideModal);
        clearTimeout(this.timerRmBackDrop);
        this._isShown = false;
        this._renderer.removeClass(this._element.nativeElement, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["a" /* CLASS_NAME */].IN);
        if (!Object(__WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__["a" /* isBs3 */])()) {
            this._renderer.removeClass(this._element.nativeElement, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["a" /* CLASS_NAME */].SHOW);
        }
        // this._addClassIn = false;
        if (this._config.animated) {
            this.timerHideModal = setTimeout(function () { return _this.hideModal(); }, TRANSITION_DURATION);
        }
        else {
            this.hideModal();
        }
    };
    /** Private methods @internal */
    ModalDirective.prototype.getConfig = function (config) {
        return Object.assign({}, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["e" /* modalConfigDefaults */], config);
    };
    /**
     *  Show dialog
     *  @internal
     */
    ModalDirective.prototype.showElement = function () {
        var _this = this;
        // todo: replace this with component loader usage
        if (!this._element.nativeElement.parentNode ||
            this._element.nativeElement.parentNode.nodeType !== Node.ELEMENT_NODE) {
            // don't move modals dom position
            if (__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */] && __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body) {
                __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body.appendChild(this._element.nativeElement);
            }
        }
        this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'false');
        this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
        this._renderer.setProperty(this._element.nativeElement, 'scrollTop', 0);
        if (this._config.animated) {
            __WEBPACK_IMPORTED_MODULE_3__utils_utils_class__["a" /* Utils */].reflow(this._element.nativeElement);
        }
        // this._addClassIn = true;
        this._renderer.addClass(this._element.nativeElement, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["a" /* CLASS_NAME */].IN);
        if (!Object(__WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__["a" /* isBs3 */])()) {
            this._renderer.addClass(this._element.nativeElement, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["a" /* CLASS_NAME */].SHOW);
        }
        var transitionComplete = function () {
            if (_this._config.focus) {
                _this._element.nativeElement.focus();
            }
            _this.onShown.emit(_this);
        };
        if (this._config.animated) {
            setTimeout(transitionComplete, TRANSITION_DURATION);
        }
        else {
            transitionComplete();
        }
    };
    /** @internal */
    ModalDirective.prototype.hideModal = function () {
        var _this = this;
        this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'true');
        this._renderer.setStyle(this._element.nativeElement, 'display', 'none');
        this.showBackdrop(function () {
            if (!_this.isNested) {
                if (__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */] && __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body) {
                    _this._renderer.removeClass(__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["a" /* CLASS_NAME */].OPEN);
                }
                _this.resetScrollbar();
            }
            _this.resetAdjustments();
            _this.focusOtherModal();
            _this.onHidden.emit(_this);
        });
    };
    // todo: original show was calling a callback when done, but we can use
    // promise
    /** @internal */
    ModalDirective.prototype.showBackdrop = function (callback) {
        var _this = this;
        if (this._isShown &&
            this.config.backdrop &&
            (!this.backdrop || !this.backdrop.instance.isShown)) {
            this.removeBackdrop();
            this._backdrop
                .attach(__WEBPACK_IMPORTED_MODULE_4__modal_backdrop_component__["a" /* ModalBackdropComponent */])
                .to('body')
                .show({ isAnimated: this._config.animated });
            this.backdrop = this._backdrop._componentRef;
            if (!callback) {
                return;
            }
            if (!this._config.animated) {
                callback();
                return;
            }
            setTimeout(callback, BACKDROP_TRANSITION_DURATION);
        }
        else if (!this._isShown && this.backdrop) {
            this.backdrop.instance.isShown = false;
            var callbackRemove = function () {
                _this.removeBackdrop();
                if (callback) {
                    callback();
                }
            };
            if (this.backdrop.instance.isAnimated) {
                this.timerRmBackDrop = setTimeout(callbackRemove, BACKDROP_TRANSITION_DURATION);
            }
            else {
                callbackRemove();
            }
        }
        else if (callback) {
            callback();
        }
    };
    /** @internal */
    ModalDirective.prototype.removeBackdrop = function () {
        this._backdrop.hide();
    };
    /** Events tricks */
    // no need for it
    // protected setEscapeEvent():void {
    //   if (this._isShown && this._config.keyboard) {
    //     $(this._element).on(Event.KEYDOWN_DISMISS, (event) => {
    //       if (event.which === 27) {
    //         this.hide()
    //       }
    //     })
    //
    //   } else if (!this._isShown) {
    //     $(this._element).off(Event.KEYDOWN_DISMISS)
    //   }
    // }
    // protected setResizeEvent():void {
    // console.log(this.renderer.listenGlobal('', Event.RESIZE));
    // if (this._isShown) {
    //   $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this))
    // } else {
    //   $(window).off(Event.RESIZE)
    // }
    // }
    ModalDirective.prototype.focusOtherModal = function () {
        if (this._element.nativeElement.parentElement == null)
            return;
        var otherOpenedModals = this._element.nativeElement.parentElement.querySelectorAll('.in[bsModal]');
        if (!otherOpenedModals.length) {
            return;
        }
        otherOpenedModals[otherOpenedModals.length - 1].focus();
    };
    /** @internal */
    ModalDirective.prototype.resetAdjustments = function () {
        this._renderer.setStyle(this._element.nativeElement, 'paddingLeft', '');
        this._renderer.setStyle(this._element.nativeElement, 'paddingRight', '');
    };
    /** Scroll bar tricks */
    /** @internal */
    ModalDirective.prototype.checkScrollbar = function () {
        this.isBodyOverflowing = __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body.clientWidth < __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["b" /* window */].innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    };
    ModalDirective.prototype.setScrollbar = function () {
        if (!__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */]) {
            return;
        }
        this.originalBodyPadding = parseInt(__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["b" /* window */]
            .getComputedStyle(__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body)
            .getPropertyValue('padding-right') || 0, 10);
        if (this.isBodyOverflowing) {
            __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body.style.paddingRight = this.originalBodyPadding +
                this.scrollbarWidth + "px";
        }
    };
    ModalDirective.prototype.resetScrollbar = function () {
        __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body.style.paddingRight = this.originalBodyPadding + 'px';
    };
    // thx d.walsh
    ModalDirective.prototype.getScrollbarWidth = function () {
        var scrollDiv = this._renderer.createElement('div');
        this._renderer.addClass(scrollDiv, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["a" /* CLASS_NAME */].SCROLLBAR_MEASURER);
        this._renderer.appendChild(__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body, scrollDiv);
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this._renderer.removeChild(__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body, scrollDiv);
        return scrollbarWidth;
    };
    ModalDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[bsModal]',
                    exportAs: 'bs-modal'
                },] },
    ];
    /** @nocollapse */
    ModalDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
        { type: __WEBPACK_IMPORTED_MODULE_6__component_loader_component_loader_factory__["a" /* ComponentLoaderFactory */], },
    ]; };
    ModalDirective.propDecorators = {
        'config': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'onShow': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onShown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onHide': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onHidden': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click', ['$event'],] },],
        'onEsc': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['keydown.esc',] },],
    };
    return ModalDirective;
}());

//# sourceMappingURL=modal.directive.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/modal/modal.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_backdrop_component__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal-backdrop.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_directive__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__positioning_index__ = __webpack_require__("../../../../ngx-bootstrap/positioning/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_loader_index__ = __webpack_require__("../../../../ngx-bootstrap/component-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_container_component__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal-container.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bs_modal_service__ = __webpack_require__("../../../../ngx-bootstrap/modal/bs-modal.service.js");







var ModalModule = (function () {
    function ModalModule() {
    }
    ModalModule.forRoot = function () {
        return {
            ngModule: ModalModule,
            providers: [__WEBPACK_IMPORTED_MODULE_6__bs_modal_service__["a" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_4__component_loader_index__["a" /* ComponentLoaderFactory */], __WEBPACK_IMPORTED_MODULE_3__positioning_index__["a" /* PositioningService */]]
        };
    };
    ModalModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    declarations: [
                        __WEBPACK_IMPORTED_MODULE_1__modal_backdrop_component__["a" /* ModalBackdropComponent */],
                        __WEBPACK_IMPORTED_MODULE_2__modal_directive__["a" /* ModalDirective */],
                        __WEBPACK_IMPORTED_MODULE_5__modal_container_component__["a" /* ModalContainerComponent */]
                    ],
                    exports: [__WEBPACK_IMPORTED_MODULE_1__modal_backdrop_component__["a" /* ModalBackdropComponent */], __WEBPACK_IMPORTED_MODULE_2__modal_directive__["a" /* ModalDirective */]],
                    entryComponents: [__WEBPACK_IMPORTED_MODULE_1__modal_backdrop_component__["a" /* ModalBackdropComponent */], __WEBPACK_IMPORTED_MODULE_5__modal_container_component__["a" /* ModalContainerComponent */]]
                },] },
    ];
    /** @nocollapse */
    ModalModule.ctorParameters = function () { return []; };
    return ModalModule;
}());

//# sourceMappingURL=modal.module.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/popover/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__popover_directive__ = __webpack_require__("../../../../ngx-bootstrap/popover/popover.directive.js");
/* unused harmony reexport PopoverDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popover_module__ = __webpack_require__("../../../../ngx-bootstrap/popover/popover.module.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__popover_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover_config__ = __webpack_require__("../../../../ngx-bootstrap/popover/popover.config.js");
/* unused harmony reexport PopoverConfig */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popover_container_component__ = __webpack_require__("../../../../ngx-bootstrap/popover/popover-container.component.js");
/* unused harmony reexport PopoverContainerComponent */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/popover/popover-container.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popover_config__ = __webpack_require__("../../../../ngx-bootstrap/popover/popover.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__ = __webpack_require__("../../../../ngx-bootstrap/utils/theme-provider.js");



var PopoverContainerComponent = (function () {
    function PopoverContainerComponent(config) {
        Object.assign(this, config);
    }
    Object.defineProperty(PopoverContainerComponent.prototype, "isBs3", {
        get: function () {
            return Object(__WEBPACK_IMPORTED_MODULE_2__utils_theme_provider__["a" /* isBs3 */])();
        },
        enumerable: true,
        configurable: true
    });
    PopoverContainerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'popover-container',
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
                    // tslint:disable-next-line
                    host: {
                        '[class]': '"popover in popover-" + placement + " " + "bs-popover-" + placement + " " + placement + " " + containerClass',
                        '[class.show]': '!isBs3',
                        role: 'tooltip',
                        style: 'display:block;'
                    },
                    styles: [
                        "\n    :host.bs-popover-top .arrow, :host.bs-popover-bottom .arrow {\n      left: 50%;\n    }\n    :host.bs-popover-left .arrow, :host.bs-popover-right .arrow {\n      top: 50%;\n    }\n  "
                    ],
                    template: "<div class=\"popover-arrow arrow\"></div> <h3 class=\"popover-title popover-header\" *ngIf=\"title\">{{ title }}</h3> <div class=\"popover-content popover-body\"> <ng-content></ng-content> </div> "
                },] },
    ];
    /** @nocollapse */
    PopoverContainerComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__popover_config__["a" /* PopoverConfig */], },
    ]; };
    PopoverContainerComponent.propDecorators = {
        'placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'title': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return PopoverContainerComponent;
}());

//# sourceMappingURL=popover-container.component.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/popover/popover.config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

/**
 * Configuration service for the Popover directive.
 * You can inject this service, typically in your root component, and customize
 * the values of its properties in order to provide default values for all the
 * popovers used in the application.
 */
var PopoverConfig = (function () {
    function PopoverConfig() {
        /**
         * Placement of a popover. Accepts: "top", "bottom", "left", "right", "auto"
         */
        this.placement = 'top';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'click';
        this.outsideClick = false;
    }
    PopoverConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    PopoverConfig.ctorParameters = function () { return []; };
    return PopoverConfig;
}());

//# sourceMappingURL=popover.config.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/popover/popover.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popover_config__ = __webpack_require__("../../../../ngx-bootstrap/popover/popover.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_loader_index__ = __webpack_require__("../../../../ngx-bootstrap/component-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popover_container_component__ = __webpack_require__("../../../../ngx-bootstrap/popover/popover-container.component.js");




/**
 * A lightweight, extensible directive for fancy popover creation.
 */
var PopoverDirective = (function () {
    function PopoverDirective(_elementRef, _renderer, _viewContainerRef, _config, cis) {
        /**
         * Close popover on outside click
         */
        this.outsideClick = false;
        /**
         * Css class for popover container
         */
        this.containerClass = '';
        this._isInited = false;
        this._popover = cis
            .createLoader(_elementRef, _viewContainerRef, _renderer)
            .provide({ provide: __WEBPACK_IMPORTED_MODULE_1__popover_config__["a" /* PopoverConfig */], useValue: _config });
        Object.assign(this, _config);
        this.onShown = this._popover.onShown;
        this.onHidden = this._popover.onHidden;
        // fix: no focus on button on Mac OS #1795
        if (typeof window !== 'undefined') {
            _elementRef.nativeElement.addEventListener('click', function () {
                try {
                    _elementRef.nativeElement.focus();
                }
                catch (err) {
                    return;
                }
            });
        }
    }
    Object.defineProperty(PopoverDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the popover is currently being shown
         */
        get: function () {
            return this._popover.isShown;
        },
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    PopoverDirective.prototype.show = function () {
        if (this._popover.isShown || !this.popover) {
            return;
        }
        this._popover
            .attach(__WEBPACK_IMPORTED_MODULE_3__popover_container_component__["a" /* PopoverContainerComponent */])
            .to(this.container)
            .position({ attachment: this.placement })
            .show({
            content: this.popover,
            context: this.popoverContext,
            placement: this.placement,
            title: this.popoverTitle,
            containerClass: this.containerClass
        });
        this.isOpen = true;
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    PopoverDirective.prototype.hide = function () {
        if (this.isOpen) {
            this._popover.hide();
            this.isOpen = false;
        }
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    PopoverDirective.prototype.toggle = function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    PopoverDirective.prototype.ngOnInit = function () {
        var _this = this;
        // fix: seems there are an issue with `routerLinkActive`
        // which result in duplicated call ngOnInit without call to ngOnDestroy
        // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
        if (this._isInited) {
            return;
        }
        this._isInited = true;
        this._popover.listen({
            triggers: this.triggers,
            outsideClick: this.outsideClick,
            show: function () { return _this.show(); }
        });
    };
    PopoverDirective.prototype.ngOnDestroy = function () {
        this._popover.dispose();
    };
    PopoverDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[popover]', exportAs: 'bs-popover' },] },
    ];
    /** @nocollapse */
    PopoverDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_1__popover_config__["a" /* PopoverConfig */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__component_loader_index__["a" /* ComponentLoaderFactory */], },
    ]; };
    PopoverDirective.propDecorators = {
        'popover': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'popoverContext': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'popoverTitle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'outsideClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'triggers': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'container': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'containerClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'isOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'onShown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onHidden': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return PopoverDirective;
}());

//# sourceMappingURL=popover.directive.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/popover/popover.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_loader_index__ = __webpack_require__("../../../../ngx-bootstrap/component-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__positioning_index__ = __webpack_require__("../../../../ngx-bootstrap/positioning/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popover_config__ = __webpack_require__("../../../../ngx-bootstrap/popover/popover.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__popover_directive__ = __webpack_require__("../../../../ngx-bootstrap/popover/popover.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__popover_container_component__ = __webpack_require__("../../../../ngx-bootstrap/popover/popover-container.component.js");







var PopoverModule = (function () {
    function PopoverModule() {
    }
    PopoverModule.forRoot = function () {
        return {
            ngModule: PopoverModule,
            providers: [__WEBPACK_IMPORTED_MODULE_4__popover_config__["a" /* PopoverConfig */], __WEBPACK_IMPORTED_MODULE_2__component_loader_index__["a" /* ComponentLoaderFactory */], __WEBPACK_IMPORTED_MODULE_3__positioning_index__["a" /* PositioningService */]]
        };
    };
    PopoverModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_5__popover_directive__["a" /* PopoverDirective */], __WEBPACK_IMPORTED_MODULE_6__popover_container_component__["a" /* PopoverContainerComponent */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_5__popover_directive__["a" /* PopoverDirective */]],
                    entryComponents: [__WEBPACK_IMPORTED_MODULE_6__popover_container_component__["a" /* PopoverContainerComponent */]]
                },] },
    ];
    /** @nocollapse */
    PopoverModule.ctorParameters = function () { return []; };
    return PopoverModule;
}());

//# sourceMappingURL=popover.module.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/utils/utils.class.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_browser__ = __webpack_require__("../../../../ngx-bootstrap/utils/facade/browser.js");

var Utils = (function () {
    function Utils() {
    }
    Utils.reflow = function (element) {
        (function (bs) { return bs; })(element.offsetHeight);
    };
    // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
    Utils.getStyles = function (elem) {
        // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
            view = __WEBPACK_IMPORTED_MODULE_0__facade_browser__["b" /* window */];
        }
        return view.getComputedStyle(elem);
    };
    return Utils;
}());

//# sourceMappingURL=utils.class.js.map

/***/ })

});
//# sourceMappingURL=journey-editor.module.chunk.js.map