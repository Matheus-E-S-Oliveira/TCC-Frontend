import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ComponentsStructureModule } from '../../shared/models/components/components-structure.module';
import { AngularMaterialModule } from '../../shared/modules/angular-material/angular-material.module';
import { AvaliacaoFormComponent } from './components/avaliacao-form/avaliacao-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AvaliacaoFormComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsStructureModule,
    AngularMaterialModule,
    FormsModule,
  ]
})
export class HomeModule { }
