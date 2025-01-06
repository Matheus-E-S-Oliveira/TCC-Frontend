import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SegurancaRoutingModule } from './seguranca-routing.module';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';
import { ComponentsStructureModule } from '../../shared/models/components/components-structure.module';

import { SegurancaDashboardComponent } from './components/seguranca-dashboard/seguranca-dashboard.component';


@NgModule({
  declarations: [
    SegurancaDashboardComponent
  ],
  imports: [
    CommonModule,
    SegurancaRoutingModule,
    ComponentsStructureModule,
    AngularMaterialModule,
  ]
})
export class SegurancaModule { }
