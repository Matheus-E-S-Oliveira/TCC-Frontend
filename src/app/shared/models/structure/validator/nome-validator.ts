import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function nomeValido(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const nomeRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    if (control.value && !nomeRegex.test(control.value)) {
      return { nomeInvalido: true };
    }
    return null;
  };
}
