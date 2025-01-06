import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/components/dashboard.component';
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
    AngularMaterialModule,
    FormsModule,
  ]
})
export class HomeModule { }
