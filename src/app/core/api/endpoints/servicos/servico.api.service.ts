import { Injectable } from '@angular/core';
import { BaseApiService } from '../base.api.service';
import { Observable } from 'rxjs';
import { ServicoResponseService } from './response/servico-response.service';
import { ApiResponse } from '../../structures/base-response.api.service';

@Injectable({
  providedIn: 'root'
})
export class ServicoApiService {

 private endpoint = 'servico';
 
   constructor(private api: BaseApiService) {}
 
   getServicos(): Observable<ApiResponse<ServicoResponseService>> {
     return this.api.get(`${this.endpoint}`);
   }
 
   getServicoPorId(id: string): Observable<ApiResponse<ServicoResponseService>> {
     return this.api.getById(`${this.endpoint}/${id}`);
   }
 
   createServico(data: any): Observable<any> {
     return this.api.post(`${this.endpoint}`, data);
   }
 
   updateServico(id: string, data: any): Observable<any> {
     return this.api.put(`${this.endpoint}/${id}`, data);
   }
 
   deleteServico(id: string): Observable<any> {
     return this.api.delete(`${this.endpoint}/${id}`);
   }
}
