import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SegurancaDashboardComponent } from './components/seguranca-dashboard/seguranca-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: SegurancaDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SegurancaRoutingModule { }
