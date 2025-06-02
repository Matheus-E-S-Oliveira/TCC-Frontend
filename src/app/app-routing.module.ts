import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'servico/home',
    pathMatch: 'full'
  },
  {
    path: 'usuario',
    loadChildren: () => import('./features/usuario/usuario.module').then(m => m.UsuarioModule),
  },
  {
    path: 'avaliados',
    loadChildren: () => import('./features/servico/servico.module').then(m => m.ServicoModule)
  },
  {
    path: 'servico',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./features/reports/reports.module').then(m => m.ReportsModule)
  },
  {
    path: '**',
    redirectTo: 'servico/home',
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'top'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
