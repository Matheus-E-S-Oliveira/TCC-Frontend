import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-circle',
  standalone: false,
  
  templateUrl: './rating-circle.component.html',
  styleUrl: './rating-circle.component.scss'
})
export class RatingCircleComponent implements OnInit{
  @Input() avaliacao: number = 0;
  circumference: number = 2 * Math.PI * 50;
  offset: number = 0;

  ngOnInit(): void {
    this.offset = this.circumference - (this.avaliacao / 4) * this.circumference;
  }
}
