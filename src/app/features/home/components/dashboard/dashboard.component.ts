import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicoService } from '../../../../shared/services/data/servico/servico-data.service';
import { ServicoMappedDto } from '../../../../shared/models/structure/dtos-exibicao/servico-mapped-dto';
import { AvaliacaoApiService } from '../../../../core/api/endpoints/avalicacoes/avaliacao.api.service';
import { AvaliacaoResponse } from '../../../../core/api/endpoints/avalicacoes/response/avaliacaos-response.service';
import { ApiResponse } from '../../../../core/api/structures/base-response.api.service';
import { filter, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: false
})
export class DashboardComponent implements OnInit {
  servico!: ServicoMappedDto;
  avaliacoes: AvaliacaoResponse[] = [];
  result: ServicoMappedDto[] = [];

  constructor(
    private route: ActivatedRoute,
    private servicoService: ServicoService,
    private avaliacaoApiService: AvaliacaoApiService
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        filter(params => params.has('route')),
        switchMap(params => {
          const routeParam = params.get('route')!;
          return this.servicoService.ServicoData$.pipe(
            take(1), // só pega uma vez para evitar múltiplos triggers
            switchMap((response: ApiResponse<ServicoMappedDto>) => {
              if (response.success) {
                const servicoSelecionado = response.data.find(s => s.route === routeParam);
                this.result = response.data.filter(s => s.route !== routeParam);

                if (servicoSelecionado) {
                  this.servico = servicoSelecionado;

                  if (routeParam !== 'home') {
                    return this.avaliacaoApiService.getAvaliacaoPorId(servicoSelecionado.id).pipe(
                      take(1)
                    );
                  } else {
                    this.avaliacoes = [];
                    return []; // retorno vazio se for home
                  }
                } else {
                  console.warn('Serviço não encontrado');
                  return [];
                }
              } else {
                console.error('Erro ao carregar serviços');
                return [];
              }
            })
          );
        })
      )
      .subscribe((avaliacaoResponse: any) => {
        if (avaliacaoResponse?.data) {
          this.avaliacoes = avaliacaoResponse.data;
        }
      });
  }

  getAvaliacao(id: string): void {
    this.avaliacaoApiService.getAvaliacaoPorId(id)
      .pipe(take(1))
      .subscribe((response) => {
        this.avaliacoes = response.data;
      });
  }
}