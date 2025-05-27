import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeModule } from '../../features/home/home.module';
import { AngularMaterialModule } from '../modules/angular-material/angular-material.module';

import { LayoutPageComponent } from './layout-page/layout-page.component';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import { LayoutFooterComponent } from './layout-footer/layout-footer.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    LayoutHeaderComponent,
    LayoutFooterComponent,
  ],
  imports: [
    CommonModule,
    HomeModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  exports: [
    LayoutPageComponent,
  ]
})
export class LayoutModule { }
