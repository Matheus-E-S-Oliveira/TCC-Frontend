import { ActivatedRoute, Router } from '@angular/router';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmaEnvioComponent } from '../dialogo-confirma-envio/dialogo-confirma-envio.component';
import { DialogoResultSubmitComponent } from '../dialogo-result-submit/dialogo-result-submit.component';
import { CadastroAvalicaoContext } from './formulario.context';
import { FormCadastroAvalicao } from './formulario.viewmodel';
import { Location } from '@angular/common';
import { AvaliacaoApiService } from '../../../../core/api/endpoints/avalicacoes/avaliacao.api.service';
import { take } from 'rxjs';

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
  constructor(
    private router: Router,
    public dialog: MatDialog,
    private location: Location,
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
  }

  onRespostaSelecionada(event: { id: number, valor: number }) {
    const currentValue = this.context.formCadastro.controls.respostas.value || {}
    if (currentValue) {
      currentValue[event.id] = event.valor;
      this.context.formCadastro.controls.respostas.setValue({ ...currentValue });
    }
  }

  onSubmit(): void {
    const confirmDialogRef = this.dialog.open(DialogoConfirmaEnvioComponent);
    confirmDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateAvaliacao();
      }
    });
  }

  updateAvaliacao() {
    this.avaliacaoApiService.atualizarAvaliacao(this.idServico, this.context.formCadastro.value)
      .pipe(take(1))
      .subscribe((response) => {
        if (response) {
          this.dialog.open(DialogoResultSubmitComponent, {
            data: response
          });
        }
      })
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
