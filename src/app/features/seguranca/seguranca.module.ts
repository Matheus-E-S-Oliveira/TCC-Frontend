import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SegurancaRoutingModule } from './seguranca-routing.module';
import { AngularMaterialModule } from '../../shared/modules/angular-material/angular-material.module';
import { ComponentsStructureModule } from '../../shared/models/components/components-structure.module';

import { SegurancaDashboardComponent } from './components/seguranca-dashboard/seguranca-dashboard.component';
import { SegurancaFormularioComponent } from './components/seguranca-formulario/seguranca-formulario.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SegurancaDashboardComponent,
    SegurancaFormularioComponent
  ],
  imports: [
    CommonModule,
    SegurancaRoutingModule,
    ComponentsStructureModule,
    AngularMaterialModule,
    FormsModule
  ]
})
export class SegurancaModule { }
