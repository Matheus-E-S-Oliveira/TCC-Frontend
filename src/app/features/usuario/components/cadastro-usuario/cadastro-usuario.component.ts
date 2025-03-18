import { take } from 'rxjs';
import { Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { FormCadastroUsuario } from './cadastro-usuario.viewmodel';
import { CadastroUsuarioContext } from './cadastro-usuario.context';
import { AdmApiService } from '../../../../core/api/endpoints/adm/adm.api.service';
import { nomeValido } from '../../../../shared/models/structure/validator/nome-validator';
import { TokenService } from '../../../../shared/services/tokens/accessToken/token.service';
import { UsuarioApiService } from '../../../../core/api/endpoints/usuarios/usuario.api.service';
import { DialogoResultSubmitComponent } from '../../../../shared/models/components/dialogo-result-submit/dialogo-result-submit.component';
import { secaoEleitoralValidator, zonaEleitoralValidator } from '../../../../shared/models/structure/validator/secao-eleitoral.validator';
import { ConsultaService } from '../../../../shared/services/data/usuario-ultimas-avaliacoes/consulta-data.service';

@Component({
  selector: 'app-cadastro-usuario',
  standalone: false,
  templateUrl: './cadastro-usuario.component.html',
  styleUrl: './cadastro-usuario.component.scss',
  providers: [CadastroUsuarioContext]
})
export class CadastroUsuarioComponent implements OnInit {
  isAdmin = false;

  public constructor(public context: CadastroUsuarioContext,
    private usuarioApiService: UsuarioApiService,
    private admApiService: AdmApiService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private tokenService: TokenService,
    private consultaService: ConsultaService
  ) { }

  ngOnInit() {
    this.context.InitForm(new FormCadastroUsuario());
    this.isAdmin = this.tokenService.getType() === 'master';
    this.setConditionalValidators();

    if (!this.isAdmin) {
      this.context.formCadastro.controls.zonaEleitoral.valueChanges.subscribe(() => {
        this.context.formCadastro.controls.secaoEleitoral.setValidators(
          [secaoEleitoralValidator(this.context.formCadastro.controls.zonaEleitoral.value ?? "")]);

        this.context.formCadastro.controls.secaoEleitoral.updateValueAndValidity();
      });
    }

  }

  ngSubmit() {
    this.isAdmin ? this.createAdm() : this.createUser();
  }

  createUser() {
    this.tokenService.removeToken();

    this.usuarioApiService.createUser(this.context.formCadastro.value)
      .pipe(take(1))
      .subscribe({
        next: (response) => {
          if (response) {

            this.tokenService.saveToken(response.token);
            const sub = this.tokenService.getSub();
            if (sub !== null) {
              this.consultaService.getUltimaAvalicacaoServicosById(sub);
            }
            this.dialog.open(DialogoResultSubmitComponent, {
              data: response
            });

            this.dialog.afterAllClosed.subscribe(() => {
              const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
              this.router.navigate([returnUrl]);
            })
          }
        },
        error: (error) => {
          this.dialog.open(DialogoResultSubmitComponent, {
            data: error.error
          });
        }
      });
  }

  createAdm() {
    const partialFormValue = {
      userName: this.context.formCadastro.controls.userName.value,
      email: this.context.formCadastro.controls.email.value,
      password: this.context.formCadastro.controls.password.value,
      token: this.tokenService.getToken()
    };

    this.admApiService.createAdm(partialFormValue)
      .pipe(take(1))
      .subscribe({
        next: (response) => {
          if (response) {
            this.dialog.open(DialogoResultSubmitComponent, {
              data: response
            });
          }
        },
        error: (error) => {
          this.dialog.open(DialogoResultSubmitComponent, {
            data: error.error
          });
        }
      });
  }

  setConditionalValidators() {
    if (this.isAdmin) {
      this.context.formCadastro.controls.tituloEleitor.clearValidators();
      this.context.formCadastro.controls.zonaEleitoral.clearValidators();
      this.context.formCadastro.controls.secaoEleitoral.clearValidators();
      this.context.formCadastro.controls.nome.clearValidators();
      this.context.formCadastro.controls.cpf.clearValidators();
      this.context.formCadastro.controls.telefone.clearValidators();
    } else {
      this.context.formCadastro.controls.tituloEleitor.setValidators(
        [Validators.required, Validators.minLength(12), Validators.maxLength(12)]);
      this.context.formCadastro.controls.zonaEleitoral.setValidators(
        [Validators.required, Validators.minLength(3), Validators.maxLength(3), zonaEleitoralValidator()]);
      this.context.formCadastro.controls.secaoEleitoral.setValidators(
        [Validators.required, Validators.minLength(3), Validators.maxLength(6),
        secaoEleitoralValidator(this.context.formCadastro.controls.zonaEleitoral.value ?? "")]);
      this.context.formCadastro.controls.nome.setValidators(
        [Validators.required, Validators.minLength(4), Validators.maxLength(100), nomeValido()]);
      this.context.formCadastro.controls.cpf.setValidators(
        [Validators.required, Validators.minLength(11), Validators.maxLength(11)]);
      this.context.formCadastro.controls.telefone.setValidators(
        [Validators.required, Validators.minLength(11), Validators.maxLength(11)]);
    }
    this.context.formCadastro.updateValueAndValidity();
    this.context.formCadastro.markAsPristine();
    this.context.formCadastro.markAsUntouched();
  }
}
