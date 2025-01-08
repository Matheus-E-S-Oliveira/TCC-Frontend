import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-infraestrutura-dashboard',
  standalone: false,
  
  templateUrl: './infraestrutura-dashboard.component.html',
  styleUrl: './infraestrutura-dashboard.component.scss'
})
export class InfraestruturaDashboardComponent {
  dataServico = [
    { label: 'Criterio #1', value: 2.0 },
    { label: 'Criterio #2', value: 2.4 },
    { label: 'Criterio #3', value: 2.6 },
    { label: 'Criterio #4', value: 2.8 }
  ];
  data = [
    { label: 'Dashboard', value: 3.0, route: 'home'},
    { label: 'Saúde', value: 1.5, route: "saude" },
    { label: 'Educação', value: 3.5, route: "educacao" },
    { label: 'Segurança', value: 4.5, route: 'seguranca' }
  ];
}
