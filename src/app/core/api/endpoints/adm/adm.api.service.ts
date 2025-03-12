import { Injectable } from '@angular/core';
import { BaseApiService } from '../base.api.service';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../structures/base-response.api.service';
import { UsuarioResponseService } from './response/adm-response.service';
import { AdmRequest } from './request/adm-request.service';

@Injectable({
  providedIn: 'root'
})
export class AdmApiService {

 private endpoint = 'adm';
 
   constructor(private api: BaseApiService) {}
 
   getUsers(): Observable<ApiResponse<UsuarioResponseService>> {
     return this.api.get(`${this.endpoint}`);
   }
 
   getUser(id: string): Observable<ApiResponse<UsuarioResponseService>> {
     return this.api.getById(`${this.endpoint}/${id}`);
   }
 
   createAdm(data: any): Observable<ApiResponse<AdmRequest>> {
     return this.api.post(`${this.endpoint}`, data);
   }
 
   updateUser(id: string, data: any): Observable<any> {
     return this.api.put(`${this.endpoint}/${id}`, data);
   }
 
   deleteUser(id: string): Observable<any> {
     return this.api.delete(`${this.endpoint}/${id}`);
   }
}
