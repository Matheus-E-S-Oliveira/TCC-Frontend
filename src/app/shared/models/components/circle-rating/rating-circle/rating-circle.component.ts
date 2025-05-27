import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-rating-circle',
  standalone: false,

  templateUrl: './rating-circle.component.html',
  styleUrl: './rating-circle.component.scss'
})
export class RatingCircleComponent {
  @Input() avaliacao: number = 0;
  circumference: number = 2 * Math.PI * 50;
  offset: number = 0;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['avaliacao']) {
      this.offset = this.circumference - (this.avaliacao / 5) * this.circumference;
    }
  }
}
