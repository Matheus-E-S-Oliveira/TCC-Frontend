import { Injectable } from '@angular/core';
import { BaseApiService } from '../base.api.service';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../structures/base-response.api.service';
import { AtuhRequest } from './request/auth-request.service';
import { AuthResponseService } from './response/auth-response.service';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  private endpoint = 'auth';

  constructor(private api: BaseApiService) { }

  login(data: any): Observable<ApiResponse<AuthResponseService>> {
    return this.api.post(`${this.endpoint}`, data);
  }

  loginAdm(data: any): Observable<ApiResponse<AuthResponseService>>{
    return this.api.post("auth/adm", data);
  }

}
