import { Injectable } from '@angular/core';
import { BaseApiService } from '../base.api.service';
import { Observable } from 'rxjs';
import { ApiGetByIdResponse, ApiResponse, ApiResponseDialog } from '../../structures/base-response.api.service';
import { Pergunta } from './response/perguntaResponse.service';

@Injectable({
  providedIn: 'root'
})
export class PerguntasApiService {

  private endpoint = 'pergunta';

  constructor(private api: BaseApiService) { }

  getServicoPorId(id: string): Observable<ApiResponse<Pergunta>> {
    return this.api.getById<ApiResponse<Pergunta>>(`${this.endpoint}/${id}`)
  }
}
