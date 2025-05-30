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
      value: servico.numeroDeAvaliacoes > 0
        ? servico.media / servico.numeroDeAvaliacoes
        : 0,
      route: this.removerAcentos(servico.nome),
      localizacao: servico.localizacao,
      imagem: servico.imagem,
      urlSite: servico.urlSite

    }));

    const dashboard = {
      id: '0',
      label: 'Dashboard',
      titulo: 'Avaliação Geral dos Serviços Prestados na Cidade',
      numero: this.calculateGeneralAverageNumero(servicosMapeados),
      value: this.calculateGeneralAverageValue(servicosMapeados),
      route: 'home',
      localizacao: 'https://maps.app.goo.gl/9y6QfHosYRhZ66pe7',
      imagem: 'imgs/ressaquinha.jpg',
      urlSite: 'https://www.ressaquinha.mg.gov.br/'
    };

    const areaMap: Record<string, string> = {};
    servicos.forEach(servico => {
      const slug = this.removerAcentos(servico.nome);
      areaMap[slug] = servico.nome;
    });

    sessionStorage.setItem('areaMap', JSON.stringify(areaMap));

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

  getNomeAreaBySlug(slug: string): string {
    const map = JSON.parse(sessionStorage.getItem('areaMap') || '{}');
    return map[slug] ?? 'Área não encontrada';
  }
}
