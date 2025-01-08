import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfraestruturaDashboardComponent } from './components/infraestrutura-dashboard/infraestrutura-dashboard.component';
import { InfraestruturaFormularioComponent } from './components/infraestrutura-formulario/infraestrutura-formulario.component';

const routes: Routes = [
  {
    path: '',
    component: InfraestruturaDashboardComponent
  },
  {
    path: 'form',
    component: InfraestruturaFormularioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfraestruturaRoutingModule { }
