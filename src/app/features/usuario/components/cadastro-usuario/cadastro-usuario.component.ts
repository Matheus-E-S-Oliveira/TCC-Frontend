import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';

import { MatDialog } from '@angular/material/dialog';
import { CadastroUsuarioContext } from './cadastro-usuario.context';
import { FormCadastroUsuario } from './cadastro-usuario.viewmodel';
import { UsuarioApiService } from '../../../../core/api/endpoints/usuarios/usuario.api.service';
import { DialogoResultSubmitComponent } from '../../../../shared/models/components/dialogo-result-submit/dialogo-result-submit.component';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from '../../../../shared/services/tokens/accessToken/token.service';
import { AdmApiService } from '../../../../core/api/endpoints/adm/adm.api.service';
import { Validators } from '@angular/forms';
import { nomeValido } from '../../../../shared/models/structure/validator/nome-validator';

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
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.context.InitForm(new FormCadastroUsuario());
    this.isAdmin = this.tokenService.getType() === 'master';
    this.setConditionalValidators();

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
        [Validators.required, Validators.minLength(3), Validators.maxLength(3)]);
      this.context.formCadastro.controls.secaoEleitoral.setValidators(
        [Validators.required, Validators.minLength(3), Validators.maxLength(6)]);
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
