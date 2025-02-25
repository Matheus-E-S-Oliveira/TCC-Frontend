import { NgxMaskConfig, NgxMaskOptions } from './../../../../node_modules/ngx-mask/lib/ngx-mask.config.d';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { CadastroUsuarioComponent } from './components/cadastro-usuario/cadastro-usuario.component';
import { UsuarioInformacaoComponent } from './components/usuario-informacao/usuario-informacao.component';
import { AngularMaterialModule } from '../../shared/modules/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { ReportarComponent } from './components/reportar/reportar.component';
import { ComponentsStructureModule } from "../../shared/models/components/components-structure.module";


@NgModule({
  declarations: [
    CadastroUsuarioComponent,
    UsuarioInformacaoComponent,
    ReportarComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    ComponentsStructureModule
]
})
export class UsuarioModule { }
