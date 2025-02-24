import { NgxMaskConfig, NgxMaskOptions } from './../../../../node_modules/ngx-mask/lib/ngx-mask.config.d';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { CadastroUsuarioComponent } from './components/cadastro-usuario/cadastro-usuario.component';
import { UsuarioInformacaoComponent } from './components/usuario-informacao/usuario-informacao.component';
import { AngularMaterialModule } from '../../shared/modules/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';


@NgModule({
  declarations: [
    CadastroUsuarioComponent,
    UsuarioInformacaoComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    NgxMaskDirective
  ]
})
export class UsuarioModule { }
