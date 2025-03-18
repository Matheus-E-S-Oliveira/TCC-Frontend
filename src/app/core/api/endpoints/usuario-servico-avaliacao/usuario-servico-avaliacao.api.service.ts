import { Injectable } from '@angular/core';
import { BaseApiService } from '../base.api.service';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../structures/base-response.api.service';
import { UsuariServicoAvalicaooResponseService } from './response/usuario-servico-avaliacao-reponse.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceAvaliacaoApiService {

 private endpoint = 'usuarioservicoavaliacao';
 
   constructor(private api: BaseApiService) {}
 
   getUsers(): Observable<ApiResponse<UsuariServicoAvalicaooResponseService>> {
     return this.api.get(`${this.endpoint}`);
   }
 
   getUserDateAvalicoes(id: string): Observable<ApiResponse<UsuariServicoAvalicaooResponseService>> {
     return this.api.getById(`${this.endpoint}/${id}`);
   }
 
   createUser(data: any): Observable<ApiResponse<UsuariServicoAvalicaooResponseService>> {
     return this.api.post(`${this.endpoint}`, data);
   }
 
   updateUser(id: string, data: any): Observable<any> {
     return this.api.put(`${this.endpoint}/${id}`, data);
   }
 
   deleteUser(id: string): Observable<any> {
     return this.api.delete(`${this.endpoint}/${id}`);
   }
}
