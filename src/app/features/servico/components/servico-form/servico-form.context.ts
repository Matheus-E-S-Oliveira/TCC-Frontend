import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ServicoFormModel } from "./servico-form.viewmodel";

@Injectable()
export class ServicoFormContext {
    public formCadastro: FormGroup<ServicoFormModel>;

    constructor(private formBuilder: FormBuilder) {
        this.formCadastro = this.formBuilder.group(new ServicoFormModel());
    }

    public InitForm(form: ServicoFormModel) {
        this.formCadastro = this.formBuilder.group(form);
    }
}