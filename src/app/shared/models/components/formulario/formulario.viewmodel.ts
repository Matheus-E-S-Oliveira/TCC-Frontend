import { FormControl } from "@angular/forms";

export class FormCadastroAvalicao {
  public userId: FormControl<string | null>;
  public respostas: FormControl<Record<number, number> | null>;

  public constructor() {
    this.respostas = new FormControl<Record<number, number>>({});
    this.userId = new FormControl<string>("");
  }

}
