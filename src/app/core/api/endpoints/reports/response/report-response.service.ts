export interface ReportResponseService {
  id: string;
  reportType: string;
  errorCategory?: string;
  suggestionCategory?: string;
  description: string;
  wantsContact: boolean;
  contactEmail?: string;
  rating: number;
  dataCriacao: Date;
  dataAtualizacao?: Date;
}