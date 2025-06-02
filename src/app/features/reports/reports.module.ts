import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsLitComponent } from './reports-lit/reports-lit.component';
import { AngularMaterialModule } from '../../shared/modules/angular-material/angular-material.module';


@NgModule({
  declarations: [
    ReportsLitComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    AngularMaterialModule
  ]
})
export class ReportsModule { }
