import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReportContext } from './reportar.context';
import { FormReport } from './reportar.viewmodel';
import { ReportApiService } from '../../../../core/api/endpoints/reports/report.api.service';
import { DialogoResultSubmitComponent } from '../../../../shared/models/components/dialogo-result-submit/dialogo-result-submit.component';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs';
import { DialogoConfirmaEnvioComponent } from '../../../../shared/models/components/dialogo-confirma-envio/dialogo-confirma-envio.component';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-reportar',
  standalone: false,
  templateUrl: './reportar.component.html',
  styleUrl: './reportar.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('500ms ease-in', style({ opacity: 0, transform: 'translateY(-10px)' }))
      ])
    ])
  ],
  providers: [ReportContext]
})
export class ReportarComponent {
  constructor(private router: Router,
    public context: ReportContext,
    private reportApiService: ReportApiService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.context.InitForm(new FormReport());
    this.setConditionalValidators();
    this.setValueRadioButtons();
  }

  onRatingSelected(rating: number): void {
    this.context.formCadastro.controls.rating.setValue(rating);
  }

  onSubmit(): void {
    const confirmDialogRef = this.dialog.open(DialogoConfirmaEnvioComponent);
    confirmDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.sendReport();
      }
    });

  }
  sendReport() {
    this.reportApiService.sendReport(this.context.formCadastro.value)
      .pipe(take(1))
      .subscribe({
        next: (response) => {
          if (response) {
            this.dialog.open(DialogoResultSubmitComponent, {
              data: response
            });
          }
        },
        error: (error) => {
          this.dialog.open(DialogoResultSubmitComponent, {
            data: error.error
          });
        }
      });
  }

  setConditionalValidators() {
    this.context.formCadastro.controls.wantsContact.valueChanges.subscribe(value => {
      if(value){
        this.context.formCadastro.controls.contactEmail.setValidators(
          [Validators.required, Validators.email, Validators.minLength(6), Validators.maxLength(50)]);
      }
      else{
        this.context.formCadastro.controls.contactEmail.clearValidators();
      }
      this.context.formCadastro.controls.contactEmail.updateValueAndValidity();
      this.context.formCadastro.markAsPristine();
      this.context.formCadastro.markAsUntouched();
    });
  }

  setValueRadioButtons() {
    this.context.formCadastro.controls.reportType.valueChanges.subscribe(value => {
      if (value === 'other') {
        this.context.formCadastro.controls.errorCategory.setValue("");
        this.context.formCadastro.controls.suggestionCategory.setValue("");

        this.context.formCadastro.controls.errorCategory.clearValidators();
        this.context.formCadastro.controls.suggestionCategory.clearValidators();
      }
      else if (value === 'error') {
        this.context.formCadastro.controls.suggestionCategory.setValue("");

        this.context.formCadastro.controls.errorCategory.setValidators([Validators.required]);
        this.context.formCadastro.controls.suggestionCategory.clearValidators();
      }
      else if (value === 'suggestion') {
        this.context.formCadastro.controls.errorCategory.setValue("");

        this.context.formCadastro.controls.suggestionCategory.setValidators([Validators.required]);
        this.context.formCadastro.controls.errorCategory.clearValidators();
      }

      this.context.formCadastro.controls.errorCategory.updateValueAndValidity();
      this.context.formCadastro.controls.suggestionCategory.updateValueAndValidity();
    });
  }
}
