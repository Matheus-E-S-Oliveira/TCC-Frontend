import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  standalone: false,

  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss'
})
export class StarRatingComponent implements OnInit{
  @Input() disableTooltip: boolean = false;
  @Input() avaliacao: number = 0;

  star: string[] = [];
  
  ngOnInit(): void {
    this.gerarRating();
  }

  gerarRating() {
    let valor = this.avaliacao;
    let filledStars = Math.floor(valor);
    let hasHalfStar = (valor - filledStars) >= 0.1;
    this.star = ['star_border', 'star_border', 'star_border', 'star_border', 'star_border'];

    for (let i = 0; i < filledStars; i++) {
      this.star[i] = 'star';
    }

    if (hasHalfStar && filledStars < 5) {
      this.star[filledStars] = 'star_half';
    }
  }
}
