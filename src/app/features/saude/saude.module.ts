import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaudeRoutingModule } from './saude-routing.module';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';
import { ComponentsStructureModule } from '../../shared/models/components/components-structure.module';

import { SaudeDashboardComponent } from './components/saude-dashboard/saude-dashboard.component';
import { SaudeFormularioComponent } from './components/saude-formulario/saude-formulario.component';


@NgModule({
  declarations: [
    SaudeDashboardComponent,
    SaudeFormularioComponent
  ],
  imports: [
    CommonModule,
    ComponentsStructureModule,
    AngularMaterialModule,
    SaudeRoutingModule
  ]
})
export class SaudeModule { }
