import { Injectable } from '@angular/core';
import { BaseApiService } from '../base.api.service';
import { Observable } from 'rxjs';
import { ApiGetByIdResponse, ApiResponse, ApiResponseDialog, PaginatedResultSlim } from '../../structures/base-response.api.service';
import { ReportResponseService } from './response/report-response.service';
import { ReportRequest } from './request/report-request.service';


@Injectable({
  providedIn: 'root'
})
export class ReportApiService {

 private endpoint = 'report';
 
   constructor(private api: BaseApiService) {}
 
   getReports(page: number = 1, size: number = 10): Observable<ApiGetByIdResponse<PaginatedResultSlim<ReportResponseService>>> {
     return this.api.getPaged(`${this.endpoint}`, { page, size });
   }
 
   getReport(id: string): Observable<ApiResponse<ReportResponseService>> {
     return this.api.getById(`${this.endpoint}/${id}`);
   }
 
   sendReport(data: any): Observable<ApiResponse<ReportRequest>> {
     return this.api.post(`${this.endpoint}`, data);
   }
}
