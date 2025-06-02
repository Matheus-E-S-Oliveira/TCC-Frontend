import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicoRoutingModule } from './servico-routing.module';
import { AngularMaterialModule } from '../../shared/modules/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms'; // Para usar FormGroup, FormControl

import { MatInputModule } from '@angular/material/input'; // Inputs
import { MatFormFieldModule } from '@angular/material/form-field'; // Form fields
import { MatButtonModule } from '@angular/material/button'; // Botão material
import { ServicoFormComponent } from './components/servico-form/servico-form.component';
import { ServicoListComponent } from './components/servico-list/servico-list.component';
import { ComponentsStructureModule } from "../../shared/models/components/components-structure.module";
import { AdmsListComponent } from './components/adms-list/adms-list.component';


@NgModule({
  declarations: [ServicoFormComponent, ServicoListComponent, AdmsListComponent],
  imports: [
    CommonModule,
    ServicoRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ComponentsStructureModule
]
})
export class ServicoModule { }
