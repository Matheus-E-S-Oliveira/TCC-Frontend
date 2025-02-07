import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
@Input() title: string = '';
@Input() logo: string = '';
@Input() img: string = '';
@Input() subtitle: string = '';
@Input() url: string = '';
@Input() urlSite: string = '';
@Input() dashboard: boolean = false;
}
