import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  standalone: false,
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.scss',
  animations: [
    trigger('footerAnimation', [
      state('visible', style({
        opacity: 1,
        visibility: 'visible',
      })),
      state('hidden', style({
        opacity: 0,
        visibility: 'hidden',
      })),
      transition('visible => hidden', [
        animate('500ms ease-in')
      ]),
      transition('hidden => visible', [
        animate('500ms ease-out')
      ]),
    ])
  ]
})
export class LayoutPageComponent {
  isLoading = false;
  
  footerState = 'hidden';
  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
      this.footerState = 'visible'; 
    }, 1000);
  }
}
