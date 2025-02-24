import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlBlockerGuard } from './shared/services/routes/url-blocker.guard';

const routes: Routes = [
  {
    path: 'home', 
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule),
    // canActivate:[UrlBlockerGuard],
    data: { animation: 'home' },
  },
  {
    path: 'saude',
    loadChildren: () => import('./features/saude/saude.module').then(m => m.SaudeModule),
    // canActivate:[UrlBlockerGuard],
    data: { animation: 'saude' },
  },
  {
    path: 'infraestrutura',
    loadChildren: () => import('./features/infraestrutura/infraestrutura.module').then(m => m.InfraestruturaModule),
    // canActivate:[UrlBlockerGuard],
    data: { animation: 'infraestrutura' },
  },
  {
    path: 'educacao',
    loadChildren: () => import('./features/educacao/educacao.module').then(m => m.EducacaoModule),
    // canActivate:[UrlBlockerGuard],
    data: { animation: 'educacao' },
  },
  {
    path: 'seguranca',
    loadChildren: () => import('./features/seguranca/seguranca.module').then(m => m.SegurancaModule),
    // canActivate:[UrlBlockerGuard],
    data: { animation: 'seguranca' },
  },
  {
    path: 'usuario',
    loadChildren: () => import('./features/usuario/usuario.module').then(m => m.UsuarioModule),
    // canActivate:[UrlBlockerGuard],
  },
  {
    path: 'login',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
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
