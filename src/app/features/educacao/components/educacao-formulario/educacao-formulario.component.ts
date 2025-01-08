import { Component } from '@angular/core';

@Component({
  selector: 'app-educacao-formulario',
  standalone: false,

  templateUrl: './educacao-formulario.component.html',
  styleUrl: './educacao-formulario.component.scss'
})
export class EducacaoFormularioComponent {
  questions: { id: number, text: string }[] = [
    { id: 1, text: 'Em uma escala de 1 a 5, como você avaliaria a qualidade do ensino recebido pelos alunos?' },
    { id: 2, text: 'Como você classificaria a infraestrutura da escola (salas de aula, bibliotecas, laboratórios, etc.)?' },
    { id: 3, text: 'Em uma escala de 1 a 5, como você avaliaria o apoio oferecido aos alunos (tutoria, aconselhamento, etc.)?' },
    { id: 4, text: 'Como você avaliaria a formação e a capacitação contínua dos professores?' },
    { id: 5, text: 'De maneira geral, como você avaliaria sua experiência com os serviços educacionais oferecidos?' }
  ];

}
