import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-formulario-question',
  standalone: false,
  
  templateUrl: './formulario-question.component.html',
  styleUrl: './formulario-question.component.scss'
})
export class FormularioQuestionComponent {
  @Input() question!: {id: number, text: string};
}
