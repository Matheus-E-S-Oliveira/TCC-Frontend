import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router: Router, private ngZone: NgZone) {
    this.ngZone.runOutsideAngular(() => {
      this.monitorarExpiracao();
    });
  }

  isBrowser(): boolean {
    return typeof window !== 'undefined' && window.localStorage !== undefined;
  }

  getToken(): string | null {
    return this.isBrowser() ? localStorage.getItem('token') : null;
  }

  getDecodedToken(): any {
    const token = this.getToken();
    if (!token) return null;

    try {
      const payload = token.split('.')[1];
      return JSON.parse(atob(payload));
    } catch (error) {
      console.error('Erro ao decodificar token:', error);
      return null;
    }
  }

  removeToken() {
    if (this.isBrowser()) {
      const decoded = this.getDecodedToken();
      if (decoded) {
        Object.keys(decoded).forEach(key => localStorage.removeItem(key));
      }

      localStorage.removeItem('token');
      localStorage.removeItem('servicos_avaliados')
    }
  }

  saveToken(token: string) {
    if (this.isBrowser()) {
      localStorage.setItem('token', token);

      const decoded = this.getDecodedToken();
      if (decoded) {
        Object.keys(decoded).forEach(key => {
          localStorage.setItem(key, decoded[key]);
        });
      }
    }
  }

  saveList (list: any){
    const listString = JSON.stringify(list);

    localStorage.setItem("servicos_avaliados", listString);
  }

  getSub(): string | null {
    return this.isBrowser() ? localStorage.getItem('sub') : null;
  }
  getType(): string | null {
    return this.isBrowser() ? localStorage.getItem('type') : null;
  }

  getServicoAvaliados() {
    return this.isBrowser() ?  JSON.parse(localStorage.getItem('servicos_avaliados') || "{}") : null
  }

  pegarExpiracao(): number | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp ? payload.exp * 1000 : null;
    } catch (error) {
      return null;
    }
  }

  private monitorarExpiracao(): void {
    const exp = this.pegarExpiracao();
    if (!exp) return;

    const agora = Date.now();
    const tempoRestante = exp - agora;

    if (tempoRestante > 0) {
      setTimeout(() => {
        this.removeToken();
        this.router.navigate(['/home']);
      }, tempoRestante);
    } else {
      this.removeToken();
      this.router.navigate(['/home']);
    }
  }
}