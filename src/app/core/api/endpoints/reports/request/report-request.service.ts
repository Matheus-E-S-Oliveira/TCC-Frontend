export interface ReportRequest {
  reportType: string | null;
  errorCategory: string | null;
  suggestionCategory: string | null;
  description: string | null;
  wantsContact: boolean | null;
  contactEmail: string | null;
  rating: number | null;
}