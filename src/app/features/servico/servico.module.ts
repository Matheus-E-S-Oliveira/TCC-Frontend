import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicoRoutingModule } from './servico-routing.module';
import { AngularMaterialModule } from '../../shared/modules/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms'; // Para usar FormGroup, FormControl

import { MatInputModule } from '@angular/material/input'; // Inputs
import { MatFormFieldModule } from '@angular/material/form-field'; // Form fields
import { MatButtonModule } from '@angular/material/button'; // Botão material
import { ServicoFormComponent } from './components/servico-form/servico-form.component';


@NgModule({
  declarations: [ServicoFormComponent],
  imports: [
    CommonModule,
    ServicoRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ]
})
export class ServicoModule { }
