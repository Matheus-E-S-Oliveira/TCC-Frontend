import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

const secoesEleitorais = [
    {
        zona: "025", secoes: ["34/112", "025", "079", "103", "035", "022", "026", "078", "092",
            "105", "033", "109", "131", "032", "036", "021", "023", "024"]
    }
];

export function zonaEleitoralValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const zonaValida = secoesEleitorais.some(z => z.zona === control.value);
        return zonaValida ? null : { zonaInvalida: "Zona eleitoral inválida." };
    };
}

export function secaoEleitoralValidator(zonaControlName: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const zonaEncontrada = secoesEleitorais.find(z => z.zona === zonaControlName);

        if (!zonaEncontrada) {
            return { zonaNaoSelecionada: "Selecione uma zona válida antes da seção." };
        }

        const secaoValida = zonaEncontrada.secoes.includes(control.value);
        return secaoValida ? null : { secaoInvalida: "Seção eleitoral inválida para essa zona." };
    };
}

