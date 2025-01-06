import { Component } from '@angular/core';

@Component({
  selector: 'app-seguranca-dashboard',
  standalone: false,
  
  templateUrl: './seguranca-dashboard.component.html',
  styleUrl: './seguranca-dashboard.component.scss'
})
export class SegurancaDashboardComponent {
  commonBandeira: string = 'imgs/bandeira.jpg';
  dataServico = [
    { label: 'Criterio #1', value: 4.0 },
    { label: 'Criterio #2', value: 4.4 },
    { label: 'Criterio #3', value: 4.6 },
    { label: 'Criterio #4', value: 4.8 }
  ];
  data = [
    { label: 'Dashboard', value: 3.0, route: 'home'},
    { label: 'Saúde', value: 1.5, route: 'saude' },
    { label: 'Infraestrutura', value: 2.5, route: 'infraestrutura' },
    { label: 'Educação', value: 3.5, route: 'educacao' },
  ];

  generalAverage!: number;

  constructor() { }

  ngOnInit(): void {
    this.generalAverage = this.calculateGeneralAverage();
  }

  calculateGeneralAverage(): number {
    const total = this.dataServico.reduce((acc, rating) => acc + rating.value, 0);
    return total / this.dataServico.length;
  }
}
