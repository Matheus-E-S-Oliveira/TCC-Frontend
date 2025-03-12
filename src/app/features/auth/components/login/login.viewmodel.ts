import { FormControl, Validators } from "@angular/forms";

export class FormLogin {

  public userIdentify: FormControl<string | null>;
  public password: FormControl<string | null>;

  public constructor() {
    this.userIdentify = new FormControl<string>("", [Validators.required, Validators.minLength(4), Validators.maxLength(50)]);
    this.password = new FormControl<string>("",[Validators.required, Validators.minLength(8), Validators.maxLength(16)]);
  }

}
