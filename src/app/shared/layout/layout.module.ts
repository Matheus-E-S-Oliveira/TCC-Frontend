import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    AngularMaterialModule,
    BrowserAnimationsModule,
  ],
  exports: [
    LayoutPageComponent,
  ]
})
export class LayoutModule { }
