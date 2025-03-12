import { Injectable } from '@angular/core';
import { BaseApiService } from '../base.api.service';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../structures/base-response.api.service';
import { ReportResponseService } from './response/report-response.service';
import { ReportRequest } from './request/report-request.service';


@Injectable({
  providedIn: 'root'
})
export class ReportApiService {

 private endpoint = 'report';
 
   constructor(private api: BaseApiService) {}
 
   getReports(): Observable<ApiResponse<ReportResponseService>> {
     return this.api.get(`${this.endpoint}`);
   }
 
   getReport(id: string): Observable<ApiResponse<ReportResponseService>> {
     return this.api.getById(`${this.endpoint}/${id}`);
   }
 
   sendReport(data: any): Observable<ApiResponse<ReportRequest>> {
     return this.api.post(`${this.endpoint}`, data);
   }
}
