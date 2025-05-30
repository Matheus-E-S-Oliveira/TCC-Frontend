// navigation-block.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NavigationBlockService {
  private isBlocked$ = new BehaviorSubject<boolean>(false);

  bloquearNavegacao() {
    this.isBlocked$.next(true);
  }

  liberarNavegacao() {
    this.isBlocked$.next(false);
  }

  get bloqueado() {
    return this.isBlocked$.value;
  }
}
