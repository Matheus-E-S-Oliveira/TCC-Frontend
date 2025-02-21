import { Component, OnInit } from '@angular/core';
import { ServicoService } from './shared/services/data/servico/servico-data.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ opacity: 0, visibility: 'hidden' }),
        animate('1000ms cubic-bezier(0.4, 0, 0.2, 1)', style({ opacity: 1, visibility: 'visible' })),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  title = 'TCC_FRONTEND';

  constructor(private servicoService: ServicoService) { }

  ngOnInit(): void {
    this.servicoService.loadLicencaData();
  }

  getRouteAnimationState(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
