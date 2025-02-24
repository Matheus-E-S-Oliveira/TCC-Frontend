import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducacaoDashboardComponent } from './components/educacao-dashboard/educacao-dashboard.component';
import { EducacaoFormularioComponent } from './components/educacao-formulario/educacao-formulario.component';
import { AuthGuard } from '../../shared/services/routes/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: EducacaoDashboardComponent
  },
  {
    path: 'form',
    component: EducacaoFormularioComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EducacaoRoutingModule { }
