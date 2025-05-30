import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicoMappedDto } from '../../structure/dtos-exibicao/servico-mapped-dto';
import { AvaliacaoResponse } from '../../../../core/api/endpoints/avalicacoes/response/avaliacaos-response.service';
import { CategoriaMappingService } from '../../../services/mapping/servico/categorias-mapping.service';
import { TokenService } from '../../../services/tokens/accessToken/token.service';


@Component({
  selector: 'app-screen-renderer',
  standalone: false,

  templateUrl: './screen-renderer.component.html',
  styleUrl: './screen-renderer.component.scss'
})
export class ScreenRendererComponent implements OnInit, OnChanges {
  @Input() site: string | null = null;
  @Input() titulo: string = '';
  @Input() img: string = '';
  @Input() subtitle: string = '';
  @Input() id: string = '';
  @Input() url: string = '';
  @Input() media!: number;
  @Input() numero: number = 0;
  @Input() urlSite: string = '';
  @Input() data: ServicoMappedDto[] = [];
  @Input() dataServico: AvaliacaoResponse[] = []

  dashboard: boolean = false;
  commonBandeira: string = 'imgs/bandeira.jpg';
  currentUrl!: string;
  routeName: string = '';
  barRating!: { label: string, value: number }[]

  constructor(private router: Router, private categoriaMappingService: CategoriaMappingService,
    private tokenService: TokenService, private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.routeName = params.get('route') ?? '';
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && this.data?.length) {
      if (this.id === '0') {
        this.barRating = this.data.map(m => ({
          label: m.label,
          value: m.value
        }));

        this.dashboard = true;
      }
    }
    if (this.id !== '0') {
      if (changes['dataServico'] && this.dataServico?.length) {
        this.barRating = this.dataServico.map(m => {
          const label = this.categoriaMappingService?.obterLabelIndicador(m.categoria);
          return {
            label: label ? label : 'Categoria Desconhecida',
            value: this.numero > 0
              ? m.nota / this.numero : 0
          };
        });
      }

      this.dashboard = false;
    }
  }
}
