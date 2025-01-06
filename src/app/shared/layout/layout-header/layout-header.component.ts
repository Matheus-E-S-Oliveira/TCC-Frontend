import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

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
      })),
      state('expanded', style({
        height: '*',  // '*' faz o elemento crescer conforme o conteúdo
        opacity: 1,
        padding: '0px 20px 10px 20px',
      })),
      transition('collapsed <=> expanded', [
        animate('300ms ease-in-out')  // Animação suave
      ])
    ])
  ]
})
export class LayoutHeaderComponent {
  menuOpen = false;
  activeButtonIndex: number | null = 0;

  menu() {
    this.menuOpen = !this.menuOpen;
  }
  setActiveButton(index: number): void {
    if (this.activeButtonIndex === index) {
      this.activeButtonIndex = null;
    } else {
      this.activeButtonIndex = index;

    }
  }
}
