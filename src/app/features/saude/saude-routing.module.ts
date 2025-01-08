import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaudeDashboardComponent } from './components/saude-dashboard/saude-dashboard.component';
import { SaudeFormularioComponent } from './components/saude-formulario/saude-formulario.component';

const routes: Routes = [
  {
    path: '',
    component: SaudeDashboardComponent
  },
  {
    path: 'form',
    component: SaudeFormularioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaudeRoutingModule { }
