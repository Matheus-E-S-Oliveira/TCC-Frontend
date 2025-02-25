import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  ]
})
export class ReportarComponent {
  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    // Inicializando o formulário com os controles e validações
    this.formGroup = this.fb.group({
      reportType: ['', Validators.required], // Campo para o tipo de reporte
      description: ['', Validators.required], // Campo para a descrição
      errorCategory: [''],
      suggestionCategory: [''],
      contactEmail: [''],
      wantsContact: []
    });
  }

  ngOnInit(): void { }

  // Função chamada quando o formulário é enviado
  submit(): void {
    if (this.formGroup.valid) {
      const formData = this.formGroup.value;
      console.log('Formulário enviado:', formData);

      // Aqui você pode adicionar a lógica para enviar os dados, por exemplo, para uma API
      // Exemplo: this.apiService.sendReport(formData).subscribe(...);

      alert('Obrigado pelo seu feedback!');
      // Limpar o formulário ou redirecionar
      this.formGroup.reset();
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }
}
