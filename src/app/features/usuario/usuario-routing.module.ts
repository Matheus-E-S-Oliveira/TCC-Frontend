import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroUsuarioComponent } from './components/cadastro-usuario/cadastro-usuario.component';
import { UsuarioInformacaoComponent } from './components/usuario-informacao/usuario-informacao.component';
import { DashboardComponent } from '../home/dashboard/components/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'info',
    component: UsuarioInformacaoComponent
  },
  {
    path: 'create',
    component: CadastroUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
