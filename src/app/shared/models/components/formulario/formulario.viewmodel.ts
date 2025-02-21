import { FormControl } from "@angular/forms";

export class FormCadastroAvalicao {
  public respostas: FormControl<Record<number, number> | null>;

  public constructor() {
    this.respostas = new FormControl<Record<number, number>>({});
  }

}
