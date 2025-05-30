import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoadingService } from './loading.service';


@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  public constructor(private loading: LoadingService) {}

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loading.setLoading(true, request.url);
    return next.handle(request).pipe(finalize(() => this.loading.setLoading(false, request.url)));
  }
}