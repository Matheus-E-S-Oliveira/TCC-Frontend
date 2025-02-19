import { AvaliacaoApiService } from './../../../../core/api/endpoints/avalicacoes/avaliacao.api.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServicoMappedDto } from '../../../../shared/models/structure/dtos-exibicao/servico-mapped-dto';
import { ServicoService } from '../../../../shared/services/data/servico/servico-data.service';
import { ApiResponse } from '../../../../core/api/structures/base-response.api.service';
import { AvaliacaoResponse } from '../../../../core/api/endpoints/avalicacoes/response/avaliacaos-response.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-educacao-dashboard',
  standalone: false,
  templateUrl: './educacao-dashboard.component.html',
  styleUrl: './educacao-dashboard.component.scss',
})
export class EducacaoDashboardComponent implements OnInit {
  result: ServicoMappedDto[] = [];
  avalicaoResult: AvaliacaoResponse[] = [];
  media!: number;
  numero!: number;
  id!: string;

  constructor(
    private servicoService: ServicoService,
    private avaliacaoApiService: AvaliacaoApiService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.servicoService.ServicoData$.subscribe((response: ApiResponse<ServicoMappedDto>) => {
      if (response.success) {
        this.id = response.data[3].id;
        this.media = response.data[3].value;
        this.numero = response.data[3].numero;
        this.result = response.data.filter((servico, index) => index !== 3);

        this.getAvaliacao();
      } else {
        console.error('Falha ao carregar serviços:', response.message);
      }
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.cdr) {
        this.cdr.detectChanges();
      }
    }, 0);
  }

  getAvaliacao(): void {
    if (this.id) {
      this.avaliacaoApiService.getAvaliacaoPorId(this.id)
        .pipe(take(1))
        .subscribe((response) => {
          this.avalicaoResult = response.data;
          if(this.cdr){
            this.cdr.detectChanges();
          }
        });
    }
  }
}
