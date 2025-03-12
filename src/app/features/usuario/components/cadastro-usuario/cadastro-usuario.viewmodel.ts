import { FormControl, Validators } from "@angular/forms";
import { conditionalValidator } from "../../../../shared/models/structure/validator/conditional-validator";

export class FormCadastroUsuario {
  public tituloEleitor: FormControl<string | null>;
  public zonaEleitoral: FormControl<string | null>;
  public secaoEleitoral: FormControl<string | null>;
  public nome: FormControl<string | null>;
  public cpf: FormControl<string | null>;
  public telefone: FormControl<string | null>;
  public userName: FormControl<string | null>;
  public email: FormControl<string | null>;
  public password: FormControl<string | null>;

  public constructor() {
    this.tituloEleitor = new FormControl<string>("");
    this.zonaEleitoral = new FormControl<string>("");
    this.secaoEleitoral = new FormControl<string>("");
    this.nome = new FormControl<string>("");
    this.cpf = new FormControl<string>("");
    this.telefone = new FormControl<string>("");
    this.userName = new FormControl<string>("",
      [Validators.required, Validators.minLength(4), Validators.maxLength(20)]);
    this.email = new FormControl<string>("",
      [Validators.required, Validators.email, Validators.minLength(6), Validators.maxLength(50)]);
    this.password = new FormControl<string>("",
      [Validators.required, Validators.minLength(8), Validators.maxLength(16)]);

  }
}
