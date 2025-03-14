import { Injectable } from '@angular/core';
import { firstValueFrom, ReplaySubject, shareReplay } from 'rxjs';
import { ServicoResponseService } from '../../../../core/api/endpoints/servicos/response/servico-response.service';
import { ServicoApiService } from '../../../../core/api/endpoints/servicos/servico.api.service';
import { ApiResponse } from '../../../../core/api/structures/base-response.api.service';
import { ServicoMappingService } from '../../mapping/servico/servico-mapping.service';
import { ServicoMappedDto } from '../../../models/structure/dtos-exibicao/servico-mapped-dto';

@Injectable({
    providedIn: 'root'
})
export class ServicoService {
    private ServicoSubject = new ReplaySubject<ApiResponse<ServicoMappedDto>>(1);
    ServicoData$ = this.ServicoSubject.asObservable().pipe(shareReplay(1));
    private loading = false;

    constructor(private servicoApiService: ServicoApiService,
        private servicoMappingService: ServicoMappingService) { }

    async loadLicencaData() {
        try {
            if (this.loading) {
                return;
            }

            this.loading = true;
            const response = await firstValueFrom(this.servicoApiService.getServicos());

            if (response.data && response.data.length > 0) {
                // Criando uma nova instância de dados mapeados
                const servicosMapeados = this.servicoMappingService.mapearServicos(response.data);

                // Atualizando o ReplaySubject com uma nova referência
                this.ServicoSubject.next({
                    success: true,
                    data: [...servicosMapeados], // Garantindo nova referência
                    message: ['Serviços carregados com sucesso']
                });
            } else {
                console.warn('Nenhum serviço disponível na resposta da API');
            }

        } catch (error) {
            console.error('Erro ao buscar licenças:', error);
        } finally {
            this.loading = false;
        }
    }
}
