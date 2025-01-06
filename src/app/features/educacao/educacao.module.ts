import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducacaoRoutingModule } from './educacao-routing.module';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';
import { ComponentsStructureModule } from '../../shared/models/components/components-structure.module';

import { EducacaoDashboardComponent } from './components/educacao-dashboard/educacao-dashboard.component';


@NgModule({
  declarations: [
    EducacaoDashboardComponent
  ],
  imports: [
    CommonModule,
    EducacaoRoutingModule,
    ComponentsStructureModule,
    AngularMaterialModule,
  ]
})
export class EducacaoModule { }
