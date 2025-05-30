import { ChangeDetectorRef, Component } from '@angular/core';
import { ApiResponse } from '../../../../core/api/structures/base-response.api.service';
import { AvaliacaoApiService } from '../../../../core/api/endpoints/avalicacoes/avaliacao.api.service';
import { ServicoMappedDto } from '../../../../shared/models/structure/dtos-exibicao/servico-mapped-dto';
import { ServicoService } from '../../../../shared/services/data/servico/servico-data.service';

@Component({
  selector: 'app-servico-list',
  standalone: false,
  templateUrl: './servico-list.component.html',
  styleUrl: './servico-list.component.scss'
})
export class ServicoListComponent {
  result: ServicoMappedDto[] = [];
  commonBandeira: string = 'imgs/bandeira.jpg';
  constructor(private servicoService: ServicoService) { }

  ngOnInit(): void {
    this.servicoService.ServicoData$.subscribe((response: ApiResponse<ServicoMappedDto>) => {
      if (response.success) {
        this.result = response.data.filter(item => item.id !== '0');
      } else {
        console.error('Falha ao carregar serviços:', response.message);
      }
    });
  }
}
