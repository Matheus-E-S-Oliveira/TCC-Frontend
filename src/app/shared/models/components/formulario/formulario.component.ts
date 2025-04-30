import { Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmaEnvioComponent } from '../dialogo-confirma-envio/dialogo-confirma-envio.component';
import { DialogoResultSubmitComponent } from '../dialogo-result-submit/dialogo-result-submit.component';
import { CadastroAvalicaoContext } from './formulario.context';
import { FormCadastroAvalicao } from './formulario.viewmodel';
import { Location } from '@angular/common';
import { AvaliacaoApiService } from '../../../../core/api/endpoints/avalicacoes/avaliacao.api.service';
import { take } from 'rxjs';
import { TokenService } from '../../../services/tokens/accessToken/token.service';

@Component({
  selector: 'app-formulario',
  standalone: false,

  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss',
  providers: [CadastroAvalicaoContext],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormularioComponent {
  @Input() questions: { id: number, text: string }[] = [];
  routePart: string = '';
  idServico: string = '';
  isButtonDisabled = false;
  isAvaliedIsTrue = true;
  constructor(
    private router: Router,
    public dialog: MatDialog,
    private location: Location,
    private tokenService: TokenService,
    public context: CadastroAvalicaoContext,
    private avaliacaoApiService: AvaliacaoApiService) { }

  ngOnInit(): void {
    this.context.InitForm(new FormCadastroAvalicao());
    const currentUrl = this.router.url;
    const parts = currentUrl.split('/');
    this.routePart = parts[1];

    const navigation = this.location.getState() as { serviceId: string };

    if (navigation && navigation.serviceId) {
      this.idServico = navigation.serviceId;
    }

    if (!this.idServico) {
      this.router.navigate(['/' +  this.routePart]);
    }
  }

  onRespostaSelecionada(event: { id: number, valor: number }) {
    const currentValue = this.context.formCadastro.controls.respostas.value || {}
    if (currentValue) {
      currentValue[event.id] = event.valor;
      this.context.formCadastro.controls.respostas.setValue({ ...currentValue });
    }
  }

  onSubmit(): void {
    if (this.tokenService.getType() !== 'user') {
      this.dialog.open(DialogoResultSubmitComponent, {
        data: {
          success: false,
          message: ["Apenas usuarios podem realizar avaliações"],
          statusCode: 401
        }
      });
    }
    else {
      this.isButtonDisabled = true
      this.context.formCadastro.disable();
      const confirmDialogRef = this.dialog.open(DialogoConfirmaEnvioComponent);
      confirmDialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.updateAvaliacao();
        }
      });
    }
  }

  updateAvaliacao() {
    this.isButtonDisabled = true;

    this.context.formCadastro.controls.token.setValue(this.tokenService.getToken())

    this.avaliacaoApiService.atualizarAvaliacao(this.idServico, this.context.formCadastro.value)
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
          this.isButtonDisabled = false;
        }
      });
  }

  isLoading = false;
  voltarEReload() {
    this.isLoading = true;
    setTimeout(() => {
      window.location.href = '/' + this.routePart;
    }, 1000);
  }

  getAreaFromRouterPath(routerPath: string): string {
    switch (routerPath) {
      case 'saude':
        return 'Saúde';
      case 'educacao':
        return 'Educação';
      case 'seguranca':
        return 'Segurança';
      case 'infraestrutura':
        return 'Infraestrutura';
      default:
        return 'Área não encontrada';
    }
  }

}
