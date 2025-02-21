import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kpis',
  standalone: false,

  templateUrl: './kpis.component.html',
  styleUrl: './kpis.component.scss'
})
export class KpisComponent {
  @Input() title: string = '';
  @Input() bandeira: string = '';
  @Input() avaliacao!: number;
  @Input() route: string = '';

  constructor(private router: Router) { }

  isLoading = false;
  isReloaded = false
  voltarEReload() {
    this.isLoading = true
    setTimeout(() => {
      window.location.href = '/' + this.route;
    }, 1000);
  }
}
