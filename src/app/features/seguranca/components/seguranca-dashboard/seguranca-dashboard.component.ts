import { AvaliacaoApiService } from './../../../../core/api/endpoints/avalicacoes/avaliacao.api.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicoMappedDto } from '../../../../shared/models/structure/dtos-exibicao/servico-mapped-dto';
import { ServicoService } from '../../../../shared/services/data/servico/servico-data.service';
import { ApiResponse } from '../../../../core/api/structures/base-response.api.service';
import { take } from 'rxjs';
import { AvaliacaoResponse } from '../../../../core/api/endpoints/avalicacoes/response/avaliacaos-response.service';

@Component({
  selector: 'app-seguranca-dashboard',
  standalone: false,

  templateUrl: './seguranca-dashboard.component.html',
  styleUrl: './seguranca-dashboard.component.scss'
})
export class SegurancaDashboardComponent implements OnInit {
  result: ServicoMappedDto[] = [];
  media!: number;
  numero!: number;
  id!: string;
  avalicaoResult: AvaliacaoResponse[] = [];
  constructor(private servicoService: ServicoService, private avaliacaoApiService: AvaliacaoApiService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.servicoService.ServicoData$.subscribe((response: ApiResponse<ServicoMappedDto>) => {
      if (response.success) {
        this.id = response.data[4].id;
        this.media = response.data[4].value;
        this.numero = response.data[4].numero;
        this.result = response.data.filter((servico, index) => index !== 4);        
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
