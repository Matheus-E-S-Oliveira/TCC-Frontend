import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducacaoDashboardComponent } from './components/educacao-dashboard/educacao-dashboard.component';
import { EducacaoFormularioComponent } from './components/educacao-formulario/educacao-formulario.component';

const routes: Routes = [
  {
    path: '',
    component: EducacaoDashboardComponent
  },
  {
    path: 'form',
    component: EducacaoFormularioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EducacaoRoutingModule { }
