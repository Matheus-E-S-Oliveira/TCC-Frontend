import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,

  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  commonBandeira: string = 'imgs/bandeira.jpg';
  data = [
    { label: 'Saúde', value: 2.0 },
    { label: 'Infraestrutura', value: 5.0 },
    { label: 'Educação', value: 4.0 },
    { label: 'Segurança', value: 3.0 }
  ];

  generalAverage!: number;

  constructor() { }

  ngOnInit(): void {
    this.generalAverage = this.calculateGeneralAverage();
  }

  calculateGeneralAverage(): number {
    const total = this.data.reduce((acc, rating) => acc + rating.value, 0);
    return total / this.data.length;
  }
}