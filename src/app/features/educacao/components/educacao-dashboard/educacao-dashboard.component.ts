import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-educacao-dashboard',
  standalone: false,

  templateUrl: './educacao-dashboard.component.html',
  styleUrl: './educacao-dashboard.component.scss'
})
export class EducacaoDashboardComponent {
  dataServico = [
    { label: 'Criterio #1', value: 3.0 },
    { label: 'Criterio #2', value: 3.4 },
    { label: 'Criterio #3', value: 3.6 },
    { label: 'Criterio #4', value: 3.8 }
  ];
  data = [
    { label: 'Dashboard', value: 3.0, route: 'home' },
    { label: 'Saúde', value: 1.5, route: 'saude' },
    { label: 'Infraestrutura', value: 2.5, route: 'infraestrutura' },
    { label: 'Segurança', value: 4.5, route: 'seguranca' }
  ];
}
