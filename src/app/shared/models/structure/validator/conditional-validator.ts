import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

export function conditionalValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        let isAdmin = false;

        if (typeof window !== 'undefined' && window.localStorage) {
            isAdmin = localStorage.getItem('userType') === 'master';
        }
        if (isAdmin) {
            control.clearValidators();
            control.updateValueAndValidity();
            return null;
        }
        control.setValidators([Validators.required]);
        control.updateValueAndValidity();
        return control.value ? null : { required: true };
    };
}
