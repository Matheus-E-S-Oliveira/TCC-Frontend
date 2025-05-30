import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicoFormComponent } from './components/servico-form/servico-form.component';
import { ServicoListComponent } from './components/servico-list/servico-list.component';
import { ConditionalNavigationGuard } from '../../shared/services/routes/bloqueio-navegacao.guard';


const routes: Routes = [
  {
    path: '',
    component: ServicoListComponent,
    canDeactivate: [ConditionalNavigationGuard]
  },
  {
    path: 'create',
    component: ServicoFormComponent,
    canDeactivate: [ConditionalNavigationGuard]
  },
  {
    path: 'edit/:id',
    component: ServicoFormComponent,
    canDeactivate: [ConditionalNavigationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoRoutingModule { }
