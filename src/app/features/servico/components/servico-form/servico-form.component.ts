import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServicoFormContext } from './servico-form.context';
import { ServicoFormModel } from './servico-form.viewmodel';
import { FormArray, FormBuilder } from '@angular/forms';
import { CategoriaMappingService } from '../../../../shared/services/mapping/servico/categorias-mapping.service';
import { ServicoApiService } from '../../../../core/api/endpoints/servicos/servico.api.service';
import { Observable, Subscription, take } from 'rxjs';
import { DialogoResultSubmitComponent } from '../../../../shared/models/components/dialogo-result-submit/dialogo-result-submit.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmaEnvioComponent } from '../../../../shared/models/components/dialogo-confirma-envio/dialogo-confirma-envio.component';
import { ActivatedRoute } from '@angular/router';
import { PerguntasApiService } from '../../../../core/api/endpoints/perguntas/perguntas.api.service';
import { Pergunta } from '../../../../core/api/endpoints/servicos/request/servico-request.service';
import { ServicoService } from '../../../../shared/services/data/servico/servico-data.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NavigationBlockService } from '../../../../shared/services/loading/navigation-block.service';

@UntilDestroy()

@Component({
  selector: 'app-servico-form',
  standalone: false,
  templateUrl: './servico-form.component.html',
  styleUrl: './servico-form.component.scss',
  providers: [ServicoFormContext]
})
export class ServicoFormComponent {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  imagemBase64: string | null = null;
  isEdit: boolean = false;
  id: string | null = null;

  constructor(public context: ServicoFormContext,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private servicoService: ServicoService,
    private categoriaMapping: CategoriaMappingService,
    private servicoApiService: ServicoApiService,
    private navigationBlockService: NavigationBlockService,
    private perguntasApiService: PerguntasApiService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.isEdit = !!this.id;
    });
    if (!this.isEdit) {
      this.context.InitForm(new ServicoFormModel());
      this.criarEstruturaDasPerguntas();
    }

    if (this.id) {
      this.getServico()
    }
  }

  getServico() {
    this.servicoApiService.getServicoPorId(this.id!)
      .pipe(take(1))
      .subscribe({
        next: (response) => {
          this.context.formCadastro.patchValue(response.data)
          this.imagemBase64 = response.data.imagem;
          this.getPerguntaByServico();
        },
        error: (err) => {
          console.error('Erro ao buscar serviço:', err);
        }
      });
  }

  getPerguntaByServico() {
    this.perguntasApiService.getServicoPorId(this.context.formCadastro.controls.id.value ?? '')
      .pipe(take(1))
      .subscribe((response) => {
        if (response.data.length === 0) {
          this.criarEstruturaDasPerguntas();
          return;
        }
        response.data.forEach((item: Pergunta) => {
          this.adicionarPergunta(item.numero, item.question, item.id)
        })
      });
  }

  public adicionarPergunta(numero: number, question = '', id: string | null = null): void {
    const pergunta = this.fb.group({
      id: [id],
      numero: [numero],
      question: [question],
    });

    this.perguntas.push(pergunta);
  }

  criarEstruturaDasPerguntas() {
    for (let i = 0; i < 5; i++) {
      this.adicionarPergunta(i + 1);
    }
  }

  selecionarImagem(): void {
    this.fileInput.nativeElement.click();
  }

  carregarImagem(event: Event): void {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      this.imagemBase64 = reader.result as string;
      this.context.formCadastro.get('imagem')?.setValue(this.imagemBase64);
    };
    reader.readAsDataURL(file);
  }

  onSubmit() {
    this.navigationBlockService.bloquearNavegacao();
    const confirmDialogRef = this.dialog.open(DialogoConfirmaEnvioComponent);
    confirmDialogRef.afterClosed()
      .pipe(untilDestroyed(this))
      .subscribe(result => {
        if (result) {
          this.context.formCadastro.controls.id.value === null ? this.onCreate() : this.onUpdate()
        }
      });
  }

  clearInputImage() {
    this.imagemBase64 = null
    this.context.formCadastro.controls.imagem.setValue(null);
    console.log(this.context.formCadastro.controls.imagem.value)
  }

  private handleResponse(response$: Observable<any>) {
    response$.pipe(take(1)).subscribe({
      next: (response) => {
        this.servicoService.atualizarServicos();
        this.dialog.open(DialogoResultSubmitComponent, { data: response });
        this.context.formCadastro.disable();
      },
      error: (error) => {
        this.dialog.open(DialogoResultSubmitComponent, { data: error.error });
      }
    });
  }

  onCreate() {
    this.handleResponse(this.servicoApiService.createServico(this.context.formCadastro.value));
    this.navigationBlockService.liberarNavegacao();
  }

  onUpdate() {
    const id = this.context.formCadastro.get('id')?.value ?? '';
    this.handleResponse(this.servicoApiService.updateServico(id, this.context.formCadastro.value));
    this.navigationBlockService.liberarNavegacao();
  }

  public get perguntas() {
    return this.context.formCadastro.get('perguntas') as FormArray;
  }
  obterLabelIndicador(nota: number): string {
    return this.categoriaMapping.obterLabelIndicador(nota);
  }
}
