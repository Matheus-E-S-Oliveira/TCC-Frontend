import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card-structure/card/card.component';
import { CardRatingComponent } from './card-rating-structure/card-rating/card-rating.component';
import { RatingCircleComponent } from './circle-rating/rating-circle/rating-circle.component';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { StarRatingComponent } from './star-rating/star-rating/star-rating.component';
import { BarRatingComponent } from './bar-rating/bar-rating/bar-rating.component';
import { KpisComponent } from './kpis/kpis/kpis.component';
import { RouterModule } from '@angular/router';
import { InstrucaoFormularioComponent } from './instrucao-formulario/instrucao-formulario.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormularioQuestionComponent } from './formulario-question/formulario-question.component';
import { FormularioRatingComponent } from './formulario-rating/formulario-rating.component';

@NgModule({
  declarations: [
    CardComponent,
    CardRatingComponent,
    RatingCircleComponent,
    StarRatingComponent,
    BarRatingComponent,
    KpisComponent,
    InstrucaoFormularioComponent,
    FormularioComponent,
    FormularioQuestionComponent,
    FormularioRatingComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule
    
  ],
  exports:[
    CardComponent,
    CardRatingComponent,
    KpisComponent,
    StarRatingComponent,
    FormularioComponent
  ]
})
export class ComponentsStructureModule { }
