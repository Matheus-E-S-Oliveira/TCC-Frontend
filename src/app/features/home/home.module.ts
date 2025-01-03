import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentsStructureModule } from '../../shared/models/components/components-structure.module';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsStructureModule,
    AngularMaterialModule
  ]
})
export class HomeModule { }
