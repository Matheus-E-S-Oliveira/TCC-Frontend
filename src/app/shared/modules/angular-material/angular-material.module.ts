import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatStepperModule } from '@angular/material/stepper';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatDialogModule,
    MatDividerModule,
    MatStepperModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatMenuModule
  ],
  exports: [
    MatIconModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatDialogModule,
    MatDividerModule,
    MatStepperModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatMenuModule
  ],
  providers: [provideNgxMask()]
})
export class AngularMaterialModule { }
