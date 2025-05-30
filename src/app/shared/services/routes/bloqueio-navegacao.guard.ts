// conditional-navigation.guard.ts
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { NavigationBlockService } from '../loading/navigation-block.service';

export interface ComponenteQualquer { }

@Injectable({ providedIn: 'root' })
export class ConditionalNavigationGuard implements CanDeactivate<ComponenteQualquer> {
    constructor(private navigationBlock: NavigationBlockService) { }

    canDeactivate(): Observable<boolean> {
        if (this.navigationBlock.bloqueado) {
            return of(false); // impede
        }
        return of(true); // permite
    }
}
