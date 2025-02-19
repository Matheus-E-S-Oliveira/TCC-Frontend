import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ServicoMappedDto } from '../../structure/dtos-exibicao/servico-mapped-dto';
import { AvaliacaoResponse } from '../../../../core/api/endpoints/avalicacoes/response/avaliacaos-response.service';
import { CategoriaMappingService } from '../../../services/mapping/servico/categorias-mapping.service';


@Component({
  selector: 'app-screen-renderer',
  standalone: false,

  templateUrl: './screen-renderer.component.html',
  styleUrl: './screen-renderer.component.scss'
})
export class ScreenRendererComponent implements OnInit, OnChanges {
  @Input() dashboard: boolean = false;
  @Input() titulo: string = '';
  @Input() img: string = '';
  @Input() subtitle: string = '';
  @Input() url: string = '';
  @Input() media!: number;
  @Input() numero: number = 0;
  @Input() urlSite: string = '';
  @Input() data: ServicoMappedDto[] = [];
  @Input() dataServico: AvaliacaoResponse[] = []

  commonBandeira: string = 'imgs/bandeira.jpg';
  currentUrl!: string;
  routeName!: string;
  barRating!: { label: string, value: number }[]

  constructor(private router: Router, private categoriaMappingService: CategoriaMappingService) { }

  ngOnInit(): void {
    this.currentUrl = this.router.url;
    const segments = this.currentUrl.split('/');
    this.routeName = segments[1];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && this.data?.length) {
      if (this.dashboard) {
        this.barRating = this.data.map(m => ({
          label: m.label,
          value: m.value
        }));
      }
    }
    if (!this.dashboard) {
      if (changes['dataServico'] && this.dataServico?.length) {
        this.barRating = this.dataServico.map(m => {
          const label = this.categoriaMappingService?.obterLabelIndicador(m.categoria);
          return {
            label: label ? label : 'Categoria Desconhecida',
            value: m.nota,
          };
        });
      }
    }
  }
}
