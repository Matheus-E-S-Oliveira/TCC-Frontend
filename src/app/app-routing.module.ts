import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home', 
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule),
    data: { animation: 'home' },
  },
  {
    path: 'saude',
    loadChildren: () => import('./features/saude/saude.module').then(m => m.SaudeModule),
    data: { animation: 'saude' },
  },
  {
    path: 'infraestrutura',
    loadChildren: () => import('./features/infraestrutura/infraestrutura.module').then(m => m.InfraestruturaModule),
    data: { animation: 'infraestrutura' },
  },
  {
    path: 'educacao',
    loadChildren: () => import('./features/educacao/educacao.module').then(m => m.EducacaoModule),
    data: { animation: 'educacao' },
  },
  {
    path: 'seguranca',
    loadChildren: () => import('./features/seguranca/seguranca.module').then(m => m.SegurancaModule),
    data: { animation: 'seguranca' },
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
