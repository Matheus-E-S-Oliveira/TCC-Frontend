import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaudeDashboardComponent } from './components/saude-dashboard/saude-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: SaudeDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaudeRoutingModule { }
