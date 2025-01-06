import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home', 
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'saude',
    loadChildren: () => import('./features/saude/saude.module').then(m => m.SaudeModule)

  },
  {
    path: 'infraestrutura',
    loadChildren: () => import('./features/infraestrutura/infraestrutura.module').then(m => m.InfraestruturaModule)
  },
  {
    path: 'educacao',
    loadChildren: () => import('./features/educacao/educacao.module').then(m => m.EducacaoModule)
  },
  {
    path: 'seguranca',
    loadChildren: () => import('./features/seguranca/seguranca.module').then(m => m.SegurancaModule)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
