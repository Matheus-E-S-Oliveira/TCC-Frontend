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
    { label: 'Saúde', value: 1.5, route: 'saude' },
    { label: 'Infraestrutura', value: 2.5, route: 'infraestrutura' },
    { label: 'Educação', value: 3.5, route: 'educacao' },
    { label: 'Segurança', value: 4.5, route: 'seguranca' }
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
  //função para remover acentos e trocar o ç por c
  removerAcentos(str: string) { 
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ç/g, "c"); 
  }
}