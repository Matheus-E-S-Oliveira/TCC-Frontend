import { animate, state, style, transition, trigger } from '@angular/animations';
import { isPlatformBrowser } from '@angular/common';
import { Component, inject, Inject, PLATFORM_ID } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { BottomSheetComponent } from '../../models/components/bottom-sheet/bottom-sheet.component';

@Component({
  selector: 'app-layout-header',
  standalone: false,
  templateUrl: './layout-header.component.html',
  styleUrl: './layout-header.component.scss',
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({
        height: '0px',
        opacity: 0,
        padding: '0px',
      })),
      state('expanded', style({
        height: '*',
        opacity: 1,
        padding: '0px 20px 10px 20px',
      })),
      transition('collapsed <=> expanded', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class LayoutHeaderComponent {

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router) { }
  
  menuOpen = false;
  private _bottomSheet = inject(MatBottomSheet);

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const savedMenuState = localStorage.getItem('menuOpen');
      if (savedMenuState !== null) {
        this.menuOpen = JSON.parse(savedMenuState);
      }
    }
  }

  menu() {
    this.menuOpen = !this.menuOpen;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('menuOpen', JSON.stringify(this.menuOpen));
    }
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetComponent);
  }

  isLoading = false
  onMenuItemClick(route: string): void {
    this.isLoading = true;
    setTimeout(() => {
      this.router.navigate([route])
      this.isLoading = false
    }, 1000);
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }
}
