import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducacaoDashboardComponent } from './components/educacao-dashboard/educacao-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: EducacaoDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EducacaoRoutingModule { }
