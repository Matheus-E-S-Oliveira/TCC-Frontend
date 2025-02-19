import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { ServicoService } from '../../../../shared/services/data/servico/servico-data.service';
import { ServicoMappedDto } from '../../../../shared/models/structure/dtos-exibicao/servico-mapped-dto';
import { ApiResponse } from '../../../../core/api/structures/base-response.api.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,

  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  commonBandeira: string = 'imgs/bandeira.jpg';

  result: ServicoMappedDto[] = [];
  media!: number;
  numero!: number;
  constructor(private servicoService: ServicoService
  ) { }


  ngOnInit() {
    this.servicoService.ServicoData$.subscribe((response: ApiResponse<ServicoMappedDto>) => {
      if (response.success) {
        this.media = response.data[0].value;
        this.numero = response.data[0].numero;
        this.result = response.data.filter((servico, index) => index !== 0);

      }
      else {
        console.error('Falha ao carregar serviços:', response.message);
      }
    });
  }

  ngAfterViewChecked() {

  }
}