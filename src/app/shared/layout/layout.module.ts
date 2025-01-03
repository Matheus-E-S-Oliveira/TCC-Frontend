import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutRoutingModule } from './layout-routing.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

import { LayoutPageComponent } from './layout-page/layout-page.component';
import { LayotHeaderComponent } from './layot-header/layot-header.component';
import { LayotFooterComponent } from './layot-footer/layot-footer.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    LayotHeaderComponent,
    LayotFooterComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule
  ],
  exports: [
    LayoutPageComponent,
  ]
})
export class LayoutModule { }
