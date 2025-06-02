import { Component } from '@angular/core';
import { ServicoMappedDto } from '../../models/structure/dtos-exibicao/servico-mapped-dto';
import { ApiResponse } from '../../../core/api/structures/base-response.api.service';
import { ServicoService } from '../../services/data/servico/servico-data.service';

@Component({
  selector: 'app-layout-footer',
  standalone: false,

  templateUrl: './layout-footer.component.html',
  styleUrl: './layout-footer.component.scss'
})
export class LayoutFooterComponent {
  result: { route: string; label: string }[] = [];

  constructor(private servicoService: ServicoService) { }

  ngOnInit(): void {
    this.servicoService.ServicoData$.subscribe((response: ApiResponse<ServicoMappedDto>) => {
      if (response.success) {
        this.result = response.data
          .map(({ route, label }) => ({ route, label }))
          .sort((a, b) => a.label.localeCompare(b.label));
      } else {
        console.error('Falha ao carregar serviços:', response.message);
      }
    });
  }

}
