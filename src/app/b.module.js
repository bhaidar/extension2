import './../polyfills';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BComponent } from './b.component';
var BModule = /** @class */ (function () {
    function BModule() {
    }
    BModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        HttpClientModule
                    ],
                    declarations: [
                        BComponent
                    ],
                    entryComponents: [BComponent]
                },] },
    ];
    return BModule;
}());
export default BModule;
