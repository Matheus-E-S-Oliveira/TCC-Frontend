import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SegurancaDashboardComponent } from './components/seguranca-dashboard/seguranca-dashboard.component';
import { SegurancaFormularioComponent } from './components/seguranca-formulario/seguranca-formulario.component';
import { AuthGuard } from '../../shared/services/routes/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: SegurancaDashboardComponent
  },
  {
    path: 'form',
    component: SegurancaFormularioComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SegurancaRoutingModule { }
