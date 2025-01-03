import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  ratings = [
    { category: 'Saude', average: 1.0 },
    { category: 'Educação', average: 4.0 },
    { category: 'Infraestrutura', average: 5.0 },
    { category: 'Segurança', average: 3.0 },
  ];

  generalAverage!: number;

  circumference: number = 2 * Math.PI * 50;
  offset: number = 0;
  screenWidth!: number;

  constructor() {}

  ngOnInit(): void {
    this.generalAverage = this.calculateGeneralAverage();
    this.offset = this.circumference - (this.generalAverage / 4) * this.circumference;
  }

  calculateGeneralAverage(): number {
    const total = this.ratings.reduce((acc, rating) => acc + rating.average, 0);
    return total / this.ratings.length;
  }

}
