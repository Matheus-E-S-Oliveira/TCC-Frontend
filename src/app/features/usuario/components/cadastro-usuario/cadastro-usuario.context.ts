import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { FormCadastroUsuario } from "./cadastro-usuario.viewmodel";

@Injectable()
export class CadastroUsuarioContext {
    public formCadastro: FormGroup<FormCadastroUsuario>;

    constructor(private formBuilder: FormBuilder) {
        this.formCadastro = this.formBuilder.group(new FormCadastroUsuario());
    }

    public InitForm(form: FormCadastroUsuario) {
        this.formCadastro = this.formBuilder.group(form);
    }
}