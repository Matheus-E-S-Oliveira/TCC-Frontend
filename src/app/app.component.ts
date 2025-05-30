import { UsuarioServiceAvaliacaoApiService } from './core/api/endpoints/usuario-servico-avaliacao/usuario-servico-avaliacao.api.service';
import { Component, OnInit } from '@angular/core';
import { ServicoService } from './shared/services/data/servico/servico-data.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { RouterOutlet } from '@angular/router';
import { TokenService } from './shared/services/tokens/accessToken/token.service';
import { ConsultaService } from './shared/services/data/usuario-ultimas-avaliacoes/consulta-data.service';
import { LoadingService } from './shared/services/loading/loading.service';
import { delay, Subscription } from 'rxjs';

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
  showLoading = false;
  public loading: boolean = false;

  constructor(private servicoService: ServicoService,
    private tokenService: TokenService,
    private consultaService: ConsultaService,
    private loadingService: LoadingService
  ) { }

  ngOnInit(): void {
    this.loadingObserver();
    this.servicoService.resetServico();
    this.servicoService.loadLicencaData();
    const sub = this.tokenService.getSub();
    if (sub) {
      this.consultaService.getUltimaAvalicacaoServicosById(sub)
    }
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }

  public loadingObserver(): void {
    this.loadingService.loadingSub.pipe(delay(0)).subscribe(loading => (this.loading = loading));
  }
  //senha master 7heEuS85AvQ8
}
