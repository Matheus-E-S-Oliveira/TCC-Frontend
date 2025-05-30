export interface ServicoResponseService {
  id: string;
  nome: string;
  titulo: string;
  numeroDeAvaliacoes: number;
  media: number;
  localizacao: string;
  imagem: string;
  urlSite: string | null
}
