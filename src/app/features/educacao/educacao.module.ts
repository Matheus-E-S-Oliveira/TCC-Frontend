import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducacaoRoutingModule } from './educacao-routing.module';
import { AngularMaterialModule } from '../../shared/modules/angular-material/angular-material.module';
import { ComponentsStructureModule } from '../../shared/models/components/components-structure.module';

import { EducacaoDashboardComponent } from './components/educacao-dashboard/educacao-dashboard.component';
import { EducacaoFormularioComponent } from './components/educacao-formulario/educacao-formulario.component';


@NgModule({
  declarations: [
    EducacaoDashboardComponent,
    EducacaoFormularioComponent
  ],
  imports: [
    CommonModule,
    EducacaoRoutingModule,
    ComponentsStructureModule,
    AngularMaterialModule,
  ]
})
export class EducacaoModule { }
