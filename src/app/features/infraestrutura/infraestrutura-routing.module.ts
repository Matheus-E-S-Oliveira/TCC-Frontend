import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfraestruturaDashboardComponent } from './components/infraestrutura-dashboard/infraestrutura-dashboard.component';
import { InfraestruturaFormularioComponent } from './components/infraestrutura-formulario/infraestrutura-formulario.component';
import { AuthGuard } from '../../shared/services/routes/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: InfraestruturaDashboardComponent
  },
  {
    path: 'form',
    component: InfraestruturaFormularioComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfraestruturaRoutingModule { }
