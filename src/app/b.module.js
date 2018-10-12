"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./../polyfills");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/common/http");
var b_component_1 = require("./b.component");
var BModule = /** @class */ (function () {
    function BModule() {
    }
    BModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule,
                        http_1.HttpClientModule
                    ],
                    declarations: [
                        b_component_1.BComponent
                    ],
                    entryComponents: [b_component_1.BComponent]
                },] },
    ];
    return BModule;
}());
exports.default = BModule;
