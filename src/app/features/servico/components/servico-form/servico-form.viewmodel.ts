import { FormArray, FormControl, FormGroup } from "@angular/forms";

export class ServicoFormModel {
    public nome = new FormControl<string>('');
    public titulo = new FormControl<string>('');
    public localizacao = new FormControl<string>('');
    public imagem = new FormControl<string>('');
    public urlSite = new FormControl<string>('');
    public perguntas = new FormArray<FormGroup>([]);

    public constructor() {
    }

}
