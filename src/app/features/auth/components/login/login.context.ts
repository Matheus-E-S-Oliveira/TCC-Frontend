import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { FormLogin } from "./login.viewmodel";

@Injectable()
export class LoginContext {
    public formCadastro: FormGroup<FormLogin>;

    constructor(private formBuilder: FormBuilder) {
        this.formCadastro = this.formBuilder.group(new FormLogin());
    }

    public InitForm(form: FormLogin) {
        this.formCadastro = this.formBuilder.group(form);
    }
}