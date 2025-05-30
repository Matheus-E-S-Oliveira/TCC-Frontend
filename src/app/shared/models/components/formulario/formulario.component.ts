import { NavigationBlockService } from './../../../services/loading/navigation-block.service';
import { ServicoMappingService } from './../../../services/mapping/servico/servico-mapping.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmaEnvioComponent } from '../dialogo-confirma-envio/dialogo-confirma-envio.component';
import { DialogoResultSubmitComponent } from '../dialogo-result-submit/dialogo-result-submit.component';
import { CadastroAvalicaoContext } from './formulario.context';
import { FormCadastroAvalicao } from './formulario.viewmodel';
import { AvaliacaoApiService } from '../../../../core/api/endpoints/avalicacoes/avaliacao.api.service';
import { take } from 'rxjs';
import { TokenService } from '../../../services/tokens/accessToken/token.service';
import { PerguntasApiService } from '../../../../core/api/endpoints/perguntas/perguntas.api.service';
import { Pergunta } from '../../../../core/api/endpoints/perguntas/response/perguntaResponse.service';
import { ServicoService } from '../../../services/data/servico/servico-data.service';

@Component({
  selector: 'app-formulario',
  standalone: false,

  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss',
  providers: [CadastroAvalicaoContext]
})
export class FormularioComponent implements OnInit {
  questions: { id: number, text: string }[] = [];
  routePart: string = '';
  idServico: string | null = null;
  isButtonDisabled = false;
  isAvaliedIsTrue = true;
  constructor(
    private router: Router,
    public dialog: MatDialog,
    private tokenService: TokenService,
    public context: CadastroAvalicaoContext,
    private route: ActivatedRoute,
    private servicoService: ServicoService,
    private navigationBlockService: NavigationBlockService,
    private servicoMappingService: ServicoMappingService,
    private perguntasApiService: PerguntasApiService,
    private avaliacaoApiService: AvaliacaoApiService) { }


  ngOnInit(): void {
    this.context.InitForm(new FormCadastroAvalicao());

    this.route.paramMap.subscribe(params => {
      this.routePart = params.get('route') ?? '';
    });

    this.route.queryParamMap.subscribe(params => {
      this.idServico = params.get('serviceId') ?? null;

      if (this.idServico) {
        this.getPerguntaByServico();
      } else {
        this.router.navigate(['/servico' + this.routePart]);
      }
    });
  }

  getPerguntaByServico() {
    this.perguntasApiService.getServicoPorId(this.idServico ?? '')
      .pipe(take(1))
      .subscribe((response) => {
        if (response.data.length === 0) {
          this.dialog.open(DialogoResultSubmitComponent, {
            data: {
              success: false,
              message: ["Esse serviço está indisponível para avaliação no momento"],
              statusCode: 503
            }
          });
          return;
        }
        this.questions = response.data.map((item: Pergunta) => ({
          id: item.numero,
          text: item.question
        }));
      });
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
          statusCode: 201
        }
      });
    }
    else {
      this.navigationBlockService.bloquearNavegacao();
      const confirmDialogRef = this.dialog.open(DialogoConfirmaEnvioComponent);
      confirmDialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.updateAvaliacao();
        }
      });
      this.navigationBlockService.liberarNavegacao();
    }
  }

  updateAvaliacao() {
    this.context.formCadastro.controls.token.setValue(this.tokenService.getToken())
    this.avaliacaoApiService.atualizarAvaliacao(this.idServico ?? '', this.context.formCadastro.value)
      .pipe(take(1))
      .subscribe({
        next: (response) => {
          if (response) {
            this.isButtonDisabled = true;
            this.context.formCadastro.disable();
            this.servicoService.atualizarServicos();
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

  getAreaFromRouterPath(routerPath: string): string {
    return this.servicoMappingService.getNomeAreaBySlug(routerPath);
  }
}
