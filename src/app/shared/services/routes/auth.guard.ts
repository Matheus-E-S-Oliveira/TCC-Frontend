import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token');
    console.log('Token:', token);

    if (!token) {
      console.log('Sem token, redirecionando para home...');
      this.router.navigate(['/login']);
      return false;
    }
    
    return true;
  }
}
