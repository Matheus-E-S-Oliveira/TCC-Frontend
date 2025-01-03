import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bar-rating',
  standalone: false,
  
  templateUrl: './bar-rating.component.html',
  styleUrl: './bar-rating.component.scss'
})
export class BarRatingComponent {
  @Input() data: {label: string, value: number}[] = [];
}
