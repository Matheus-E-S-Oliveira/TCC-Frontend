import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { FormReport } from "./reportar.viewmodel";

@Injectable()
export class ReportContext {
    public formCadastro: FormGroup<FormReport>;

    constructor(private formBuilder: FormBuilder) {
        this.formCadastro = this.formBuilder.group(new FormReport());
    }

    public InitForm(form: FormReport) {
        this.formCadastro = this.formBuilder.group(form);
    }
}