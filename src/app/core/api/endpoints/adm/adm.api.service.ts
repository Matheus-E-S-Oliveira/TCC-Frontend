import { Injectable } from '@angular/core';
import { BaseApiService } from '../base.api.service';
import { Observable } from 'rxjs';
import { ApiResponse, ApiResponseDialog } from '../../structures/base-response.api.service';
import { AdmResponse } from './response/adm-response.service';
import { AdmRequest } from './request/adm-request.service';

@Injectable({
  providedIn: 'root'
})
export class AdmApiService {

 private endpoint = 'adm';
 
   constructor(private api: BaseApiService) {}
 
   getAdms(): Observable<ApiResponse<AdmResponse>> {
     return this.api.get<ApiResponse<AdmResponse>>(`${this.endpoint}`);
   }
 
   getAdm(id: string): Observable<ApiResponse<AdmResponse>> {
     return this.api.getById(`${this.endpoint}/${id}`);
   }
 
   createAdm(data: any): Observable<ApiResponse<AdmRequest>> {
     return this.api.post(`${this.endpoint}`, data);
   }
 
   updateUser(id: string, data: any): Observable<any> {
     return this.api.put(`${this.endpoint}/${id}`, data);
   }
 
   deleteAdm(id: string): Observable<ApiResponseDialog> {
     return this.api.delete(`${this.endpoint}/${id}`);
   }
}
