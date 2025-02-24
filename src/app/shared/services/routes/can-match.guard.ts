import { Injectable } from '@angular/core';
import { CanMatch, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanMatchGuard implements CanMatch {
  constructor(private router: Router) {}

  canMatch(
    route: Route,
    segments: UrlSegment[]
  ): boolean | Observable<boolean> {
    // Lista de rotas permitidas
    const allowedPaths = ['info', 'create', 'dashboard'];

    // Verifica se a rota acessada está na lista permitida
    const isValidPath = segments.length === 0 || allowedPaths.includes(segments[0].path);

    if (!isValidPath) {
      this.router.navigate(['/dashboard']); // Redireciona para a página principal
      return false;
    }
    return true;
  }
}
