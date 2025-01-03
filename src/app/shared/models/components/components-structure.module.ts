import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card-structure/card/card.component';
import { CardRatingComponent } from './card-rating-structure/card-rating/card-rating.component';

@NgModule({
  declarations: [
    CardComponent,
    CardRatingComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports:[
    CardComponent
  ]
})
export class ComponentsStructureModule { }
