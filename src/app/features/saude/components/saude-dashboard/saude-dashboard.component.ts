import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-saude-dashboard',
  standalone: false,

  templateUrl: './saude-dashboard.component.html',
  styleUrl: './saude-dashboard.component.scss'
})
export class SaudeDashboardComponent {
  dataServico = [
    { label: 'Criterio #1', value: 1.0 },
    { label: 'Criterio #2', value: 1.4 },
    { label: 'Criterio #3', value: 1.6 },
    { label: 'Criterio #4', value: 1.8 }
  ];
  data = [
    { label: 'Dashboard', value: 3.0, route: 'home' },
    { label: 'Infraestrutura', value: 2.5, route: 'infraestrutura' },
    { label: 'Educação', value: 3.5, route: 'educacao' },
    { label: 'Segurança', value: 4.5, route: 'seguranca' }
  ];
}
