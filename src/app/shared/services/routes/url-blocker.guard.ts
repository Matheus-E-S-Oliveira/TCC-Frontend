import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UrlBlockerGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    return new Observable<boolean>((observer) => {
      // Detecta o início da navegação
      this.router.events.pipe(
        filter(event => event instanceof NavigationStart)
      ).subscribe((event: NavigationStart) => {
        // Permitir navegação interna ou recarregamento da página
        const isInternalNavigation = event.restoredState !== null;
        
        if (isInternalNavigation) {
          observer.next(true); // Permite navegação interna ou reload
        } else {
          this.router.navigate(['/']); // Redireciona se for uma navegação inválida
          observer.next(false); // Bloqueia a navegação
        }
      });
    });
  }
}
