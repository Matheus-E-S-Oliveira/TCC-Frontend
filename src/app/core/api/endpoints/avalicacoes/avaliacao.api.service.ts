import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from '../base.api.service';
import { ApiResponse } from '../../structures/base-response.api.service';
import { AvaliacaoResponse } from './response/avaliacaos-response.service';
import { AvaliacaoRequest } from './request/avaliacao-request.service';

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoApiService {

  private endpoint = 'avaliacao';

  constructor(private api: BaseApiService) {}

  getAvaliacoes(): Observable<any> {
    return this.api.get(`${this.endpoint}`);
  }

  getAvaliacaoPorId(id: string): Observable<ApiResponse<AvaliacaoResponse>> {
    return this.api.getById(`${this.endpoint}/${id}`);
  }

  criarAvaliacao(data: any): Observable<any> {
    return this.api.post(`${this.endpoint}`, data);
  }

  atualizarAvaliacao(id: string, data: any): Observable<ApiResponse<AvaliacaoRequest>>{
    return this.api.put(`${this.endpoint}/${id}`, data);
  }

  deletarAvaliacao(id: string): Observable<any> {
    return this.api.delete(`${this.endpoint}/${id}`);
  }
}
