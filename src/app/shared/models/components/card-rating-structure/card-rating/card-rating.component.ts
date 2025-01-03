import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-rating',
  standalone: false,
  
  templateUrl: './card-rating.component.html',
  styleUrl: './card-rating.component.scss'
})
export class CardRatingComponent {
  @Input() avaliacao: number = 0;
  @Input() data: {label: string, value: number}[] = [];
}
