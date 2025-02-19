import { Injectable } from '@angular/core';
import { ServicoResponseService } from '../../../../core/api/endpoints/servicos/response/servico-response.service';

@Injectable({
  providedIn: 'root'
})
export class ServicoMappingService {

    mapearServicos(servicos: ServicoResponseService[]) {
        const servicosMapeados = servicos.map(servico => ({
          id: servico.id,  
          label: servico.nome,
          titulo: servico.titulo,
          numero: servico.numeroDeAvaliacoes,
          value: servico.media,
          route: this.removerAcentos(servico.nome)
        }));
    
        const dashboard = {
          id: '0',
          label: 'Dashboard',
          titulo: 'Avaliação Geral dos Serviços Prestados na Cidade',
          numero: this.calculateGeneralAverageNumero(servicosMapeados),
          value: this.calculateGeneralAverageValue(servicosMapeados),
          route: 'home'
        };

        servicosMapeados.unshift(dashboard);
    
        return servicosMapeados;
      }

  removerAcentos(str: string) { 
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ç/g, "c").toLowerCase(); 
  }

  calculateGeneralAverageValue(servicos: any[]): number {
    const total = servicos.reduce((acc, servico) => acc + servico.value, 0);
    return total / servicos.length;
  }

  calculateGeneralAverageNumero(servicos: any[]): number {
    const total = servicos.reduce((acc, servico) => acc + servico.numero, 0);
    return total / servicos.length;
  }

  formatValue(value: number): string {
    return value.toLocaleString('pt-BR', {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1
    });
  }
}
