import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CategoriaMappingService {
    obterLabelIndicador(nota: number): string {
        // Verifica se a nota é um número e se está dentro do intervalo esperado
        if (typeof nota !== 'number' || nota < 1 || nota > 5) {
            return 'Valor Desconhecido'; // Retorna um valor padrão para entradas inválidas
        }

        switch (nota) {
            case 1:
                return 'Satisfação do Usuário';
            case 2:
                return 'Qualidade do Atendimento';
            case 3:
                return 'Cumprimento dos Compromissos e Prazos';
            case 4:
                return 'Quantidade de Manifestações de Usuários';
            case 5:
                return 'Medidas Adotadas para a Melhoria e Aperfeiçoamento do Serviço';
            default:
                return 'Valor Desconhecido'; // Nunca deveria ser chamado, mas é bom ter uma segurança
        }
    }
}
