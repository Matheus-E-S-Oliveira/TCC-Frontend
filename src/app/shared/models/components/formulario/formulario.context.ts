import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { FormCadastroAvalicao } from "./formulario.viewmodel";

@Injectable()
export class CadastroAvalicaoContext {
    public formCadastro: FormGroup<FormCadastroAvalicao>;

    constructor(private formBuilder: FormBuilder) {
        this.formCadastro = this.formBuilder.group(new FormCadastroAvalicao());
    }

    public InitForm(form: FormCadastroAvalicao) {
        this.formCadastro = this.formBuilder.group(form);
    }
}