import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectorRef, Component } from '@angular/core';
import { TokenService } from '../../services/tokens/accessToken/token.service';

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
  isOpen = false;

  constructor(private tokenService: TokenService) {}
  
  footerState = 'hidden';
  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
      this.footerState = 'visible'; 
    }, 1000);
  }

  menuVisibilit(): boolean{
    if(this.tokenService.getType() === 'master' || this.tokenService.getType() === 'adm'){
      return true
    }
    return false
  }
}
