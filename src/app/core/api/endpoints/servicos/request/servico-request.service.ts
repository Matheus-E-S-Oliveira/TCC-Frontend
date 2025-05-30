export interface ServicoRequestService {
  id: string | null;
  nome: string;
  titulo: string;
  numeroDeAvaliacoes: number;
  media: number;
  localizacao: string;
  imagem: string;
  urlSite: string | null
  perguntas: Pergunta[]
}
export interface Pergunta {
  id: string | null;
  numero: number;
  question: string;
}