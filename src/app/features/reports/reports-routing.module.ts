import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsLitComponent } from './reports-lit/reports-lit.component';

const routes: Routes = [
  {
    path: '',
    component: ReportsLitComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
