import './../polyfills';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BComponent } from './b.component';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    declarations: [
        BComponent
    ],
    entryComponents: [BComponent]
})
export default class BModule {}