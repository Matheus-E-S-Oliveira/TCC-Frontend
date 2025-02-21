import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-formulario-rating',
  standalone: false,

  templateUrl: './formulario-rating.component.html',
  styleUrl: './formulario-rating.component.scss'
})
export class FormularioRatingComponent {

  @Input() rating: number = 3;
  @Input() maxRating: number = 5;
  @Output() ratingSelected = new EventEmitter<number>()
  

  ngOnInit() {
    this.getStars();
    this.ratingSelected.emit(3)
  }

  getStars(): any[] {
    return Array(this.maxRating).fill(0);
  }
  onStarClick(rating: number) {
    this.rating = rating;
    this.ratingSelected.emit(rating);
  }
  getTooltipText(rating: number): string {
    switch (rating) {
      case 1: return 'Muito insatisfeito';
      case 2: return 'Insatisfeito';
      case 3: return 'Normal';
      case 4: return 'Satisfeito';
      case 5: return 'Muito satisfeito';
      default: return '';
    }
  }
}
