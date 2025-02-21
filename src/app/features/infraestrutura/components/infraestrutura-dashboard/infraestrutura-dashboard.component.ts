import { AvaliacaoApiService } from './../../../../core/api/endpoints/avalicacoes/avaliacao.api.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServicoMappedDto } from '../../../../shared/models/structure/dtos-exibicao/servico-mapped-dto';
import { ServicoService } from '../../../../shared/services/data/servico/servico-data.service';
import { ApiResponse } from '../../../../core/api/structures/base-response.api.service';
import { AvaliacaoResponse } from '../../../../core/api/endpoints/avalicacoes/response/avaliacaos-response.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-infraestrutura-dashboard',
  standalone: false,

  templateUrl: './infraestrutura-dashboard.component.html',
  styleUrl: './infraestrutura-dashboard.component.scss',

})
export class InfraestruturaDashboardComponent implements OnInit {
  result: ServicoMappedDto[] = [];
  media!: number;
  numero!: number;
  id: string = '';
  titulo: string = '';
  avalicaoResult: AvaliacaoResponse[] = [];

  constructor(private servicoService: ServicoService, private avaliacaoApiService: AvaliacaoApiService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.servicoService.ServicoData$.subscribe((response: ApiResponse<ServicoMappedDto>) => {
      if (response.success) {
        this.id = response.data[2].id;
        this.media = response.data[2].value;
        this.numero = response.data[2].numero;
        this.titulo = response.data[2].titulo;
        this.result = response.data.filter((servico, index) => index !== 2);        
      } else {
        console.error('Falha ao carregar serviços:', response.message);
      }
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.cdr) {
        this.cdr.detectChanges();
        this.getAvaliacao();
      }
    }, 0);
  }

  getAvaliacao(): void {
    if (this.id) {
      this.avaliacaoApiService.getAvaliacaoPorId(this.id)
        .pipe(take(1))
        .subscribe((response) => {
          this.avalicaoResult = response.data;
          if (this.cdr) {
            this.cdr.detectChanges();
          }
        });
    }
  }
}
