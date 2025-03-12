import { FormControl, Validators } from "@angular/forms";

export class FormReport {
  public reportType: FormControl<string | null>;
  public errorCategory: FormControl<string | null>;
  public suggestionCategory: FormControl<string | null>;
  public description: FormControl<string | null>;
  public wantsContact: FormControl<boolean | null>;
  public contactEmail: FormControl<string | null>;
  public rating: FormControl<number | null>;

  public constructor() {
    this.reportType = new FormControl<string | null>("", [Validators.required]);
    this.errorCategory = new FormControl<string | null>("");
    this.suggestionCategory = new FormControl<string | null>("");
    this.description = new FormControl<string | null>("", [Validators.required]);
    this.wantsContact = new FormControl<boolean>(false);
    this.contactEmail = new FormControl<string | null>("");
    this.rating = new FormControl<number>(3);
  }

}
