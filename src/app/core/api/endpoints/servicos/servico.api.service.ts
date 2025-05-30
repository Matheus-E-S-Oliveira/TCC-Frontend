import { Injectable } from '@angular/core';
import { BaseApiService } from '../base.api.service';
import { Observable } from 'rxjs';
import { ServicoResponseService } from './response/servico-response.service';
import { ApiGetByIdResponse, ApiResponse, ApiResponseDialog } from '../../structures/base-response.api.service';

@Injectable({
  providedIn: 'root'
})
export class ServicoApiService {

  private endpoint = 'servico';

  constructor(private api: BaseApiService) { }

  getServicos(): Observable<ApiResponse<ServicoResponseService>> {
    return this.api.get(`${this.endpoint}`);
  }

  getServicoPorId(id: string): Observable<ApiGetByIdResponse<ServicoResponseService>> {
    return this.api.getById<ApiGetByIdResponse<ServicoResponseService>>(`${this.endpoint}/${id}`)
  }

  createServico(data: any): Observable<ApiResponseDialog> {
    return this.api.post(`${this.endpoint}`, data);
  }

  updateServico(id: string, data: any): Observable<ApiResponseDialog> {
    return this.api.put(`${this.endpoint}/${id}`, data);
  }

  deleteServico(id: string): Observable<ApiResponseDialog> {
    return this.api.delete(`${this.endpoint}/${id}`);
  }
}
