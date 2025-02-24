import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from '../../modules/angular-material/angular-material.module';

import { KpisComponent } from './kpis/kpis/kpis.component';
import { CardComponent } from './card-structure/card/card.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BtnOpenFormComponent } from './btn-open-form/btn-open-form.component';
import { BarRatingComponent } from './bar-rating/bar-rating/bar-rating.component';
import { StarRatingComponent } from './star-rating/star-rating/star-rating.component';
import { FormularioRatingComponent } from './formulario-rating/formulario-rating.component';
import { RatingCircleComponent } from './circle-rating/rating-circle/rating-circle.component';
import { CardRatingComponent } from './card-rating-structure/card-rating/card-rating.component';
import { FormularioQuestionComponent } from './formulario-question/formulario-question.component';
import { InstrucaoFormularioComponent } from './instrucao-formulario/instrucao-formulario.component';
import { DialogoInfoFormComponent } from './dialogo-info-form/dialogo-info-form.component';
import { DialogoConfirmaEnvioComponent } from './dialogo-confirma-envio/dialogo-confirma-envio.component';
import { DialogoResultSubmitComponent } from './dialogo-result-submit/dialogo-result-submit.component';
import { ScreenRendererComponent } from './screen-renderer/screen-renderer.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';

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
    FormularioRatingComponent,
    BtnOpenFormComponent,
    DialogoInfoFormComponent,
    DialogoConfirmaEnvioComponent,
    DialogoResultSubmitComponent,
    ScreenRendererComponent,
    BottomSheetComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule
    
  ],
  exports:[
    FormularioComponent,
    ScreenRendererComponent
  ]
})
export class ComponentsStructureModule { }
