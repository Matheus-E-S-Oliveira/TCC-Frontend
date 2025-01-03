import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaudeRoutingModule } from './saude-routing.module';
import { SaudeDashboardComponent } from './components/saude-dashboard/saude-dashboard.component';


@NgModule({
  declarations: [
    SaudeDashboardComponent
  ],
  imports: [
    CommonModule,
    SaudeRoutingModule
  ]
})
export class SaudeModule { }
