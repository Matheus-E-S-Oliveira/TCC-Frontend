import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-question',
  standalone: false,

  templateUrl: './formulario-question.component.html',
  styleUrl: './formulario-question.component.scss'
})
export class FormularioQuestionComponent {
  @Input() question!: { id: number, text: string };
  @Output() respostaSelecionada = new EventEmitter<{ id: number, valor: number }>();

  responses: { [key: number]: number } = {};

  onRatingSelected(valor: number) {
    this.respostaSelecionada.emit({ id: this.question.id, valor });
  }
}
