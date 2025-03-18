import { Component, OnInit } from '@angular/core';
import { LoginContext } from './login.context';
import { FormLogin } from './login.viewmodel';
import { AuthApiService } from '../../../../core/api/endpoints/auth/auth.api.service';
import { take } from 'rxjs';
import { DialogoResultSubmitComponent } from '../../../../shared/models/components/dialogo-result-submit/dialogo-result-submit.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from '../../../../shared/services/tokens/accessToken/token.service';
import { ConsultaService } from '../../../../shared/services/data/usuario-ultimas-avaliacoes/consulta-data.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [LoginContext]
})
export class LoginComponent implements OnInit {

  mostrarSenha = false;
  isAdmin = false;

  constructor(public context: LoginContext,
    private authApiService: AuthApiService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private tokenService: TokenService,
    private consultaService: ConsultaService) {
  }
  ngOnInit(): void {
    this.context.InitForm(new FormLogin());
    this.route.url.subscribe((urlSegments) => {
      this.isAdmin = urlSegments.some(segment => segment.path === 'adm');
    });
  }

  ngSubimit() {
    this.isAdmin ? this.loginAdm() : this.login();
  }

  login() {
    this.tokenService.removeToken();
    this.authApiService.login(this.context.formCadastro.value)
      .pipe(take(1))
      .subscribe({
        next: (response) => {
          if (response) {

            this.tokenService.saveToken(response.token)
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

  loginAdm() {
    this.tokenService.removeToken();
    this.authApiService.loginAdm(this.context.formCadastro.value)
      .pipe(take(1))
      .subscribe({
        next: (response) => {
          if (response) {

            this.tokenService.saveToken(response.token)

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
}
