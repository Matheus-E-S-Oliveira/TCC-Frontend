import { CetegoriaAvalicao } from "../enums/categorias-avaliacao";

export const CategoriaAvalicaoConstant: { [key: number]: string } = {
      [CetegoriaAvalicao.SATISFACAO_USUARIO]: 'Satisfação do Usuário',
      [CetegoriaAvalicao.QUALIDADE_ATENDIMENTO]: 'Qualidade do Atendimento',
      [CetegoriaAvalicao.CUMPRIMENTO_COMPROMISSOS_PRAZOS]: 'Cumprimento dos Compromissos e Prazos',
      [CetegoriaAvalicao.QUANTIDADE_MANIFESTACOES_USUARIOS]: 'Quantidade de Manifestações de Usuários',
      [CetegoriaAvalicao.MEDIDAS_MELHORIA_APERFEICOAMENTO]: 'Medidas Adotadas para a Melhoria e Aperfeiçoamento do Serviço'
};


