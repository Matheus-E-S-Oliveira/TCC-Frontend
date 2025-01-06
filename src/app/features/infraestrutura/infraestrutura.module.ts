import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfraestruturaRoutingModule } from './infraestrutura-routing.module';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';
import { ComponentsStructureModule } from '../../shared/models/components/components-structure.module';

import { InfraestruturaDashboardComponent } from './components/infraestrutura-dashboard/infraestrutura-dashboard.component';


@NgModule({
  declarations: [
    InfraestruturaDashboardComponent
  ],
  imports: [
    CommonModule,
    InfraestruturaRoutingModule,
    ComponentsStructureModule,
    AngularMaterialModule,
  ]
})
export class InfraestruturaModule { }
