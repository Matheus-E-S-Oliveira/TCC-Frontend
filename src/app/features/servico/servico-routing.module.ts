import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicoFormComponent } from './components/servico-form/servico-form.component';


const routes: Routes = [
  // {
  //   path: '',
  //   component: 
  // },
  {
    path: 'create',
    component: ServicoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoRoutingModule { }
