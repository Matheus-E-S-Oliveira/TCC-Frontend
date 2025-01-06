import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-formulario',
  standalone: false,
  
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {
  @Input() question: {id: number, text: string}[] = [];
}
