import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from '../../shared/services/routes/auth.guard';
import { AvaliacaoFormComponent } from './components/avaliacao-form/avaliacao-form.component';

const routes: Routes = [
  {
    path: ":route",
    component: DashboardComponent
  },
  {
    path: ":route/form",
    component: AvaliacaoFormComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
