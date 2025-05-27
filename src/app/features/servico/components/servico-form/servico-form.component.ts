import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ServicoFormContext } from './servico-form.context';
import { ServicoFormModel } from './servico-form.viewmodel';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import { CategoriaMappingService } from '../../../../shared/services/mapping/servico/categorias-mapping.service';

@Component({
  selector: 'app-servico-form',
  standalone: false,
  templateUrl: './servico-form.component.html',
  styleUrl: './servico-form.component.scss',
  providers: [ServicoFormContext]
})
export class ServicoFormComponent implements AfterViewInit {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  imagemBase64: string | null = null;

  constructor(public context: ServicoFormContext,
     private fb: FormBuilder,
     private categoriaMapping: CategoriaMappingService) { }

  ngOnInit(): void {
    this.context.InitForm(new ServicoFormModel());

    for (let i = 0; i < 5; i++) {
      this.adicionarPergunta(i + 1);
    }
  }

  ngAfterViewInit(): void {
  }

  public adicionarPergunta(numero: number): void {
    const pergunta = this.fb.group({
      numero: [numero],
      question: [''],
    });

    this.perguntas.push(pergunta);
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
    console.log(this.context.formCadastro.value);
  }

  public get perguntas() {
    return this.context.formCadastro.get('perguntas') as FormArray;
  }
  obterLabelIndicador(nota: number): string {
    return this.categoriaMapping.obterLabelIndicador(nota);
  }
}
