import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-screen-renderer',
  standalone: false,

  templateUrl: './screen-renderer.component.html',
  styleUrl: './screen-renderer.component.scss'
})
export class ScreenRendererComponent {
  @Input() dashboard: boolean = false;
  @Input() titulo: string = '';
  @Input() img: string = '';
  @Input() subtitle: string = '';
  @Input() url: string = '';
  @Input() urlSite: string = '';
  @Input() data: { label: string, value: number, route: string }[] = [];
  @Input() dataServico: { label: string, value: number }[] = []

  commonBandeira: string = 'imgs/bandeira.jpg';

  generalAverage!: number;
  currentUrl!: string;
  routeName!: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.generalAverage = this.calculateGeneralAverage();

    this.currentUrl = this.router.url;
    const segments = this.currentUrl.split('/');
    this.routeName = segments[1];

    if (this.dashboard) {
      this.dataServico = this.data.map(m => ({
        label: m.label,
        value: m.value
      }));
    }
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
