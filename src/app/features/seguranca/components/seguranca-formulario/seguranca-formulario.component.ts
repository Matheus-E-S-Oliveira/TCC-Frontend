import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-seguranca-formulario',
  standalone: false,

  templateUrl: './seguranca-formulario.component.html',
  styleUrl: './seguranca-formulario.component.scss'
})
export class SegurancaFormularioComponent {
  questions: { id: number, text: string }[] = [
    { id: 1, text: 'Como você avalia sua satisfação geral com os serviços de segurança pública oferecidos na sua localidade (como policiamento, atendimento a emergências, etc.)?' },
    { id: 2, text: 'Você ficou satisfeito com o cumprimento dos prazos e compromissos relacionados aos serviços de segurança pública (como resposta a ocorrências, prazos de investigação, etc.)?' },
    { id: 3, text: 'Você ficou satisfeito com a quantidade de oportunidades para expressar suas preocupações ou sugestões sobre os serviços de segurança pública?' },
    { id: 4, text: 'Você ficou satisfeito com as ações e melhorias realizadas para aperfeiçoar os serviços de segurança pública (como aumento do patrulhamento, novas tecnologias, etc.)' },
    { id: 5, text: 'Como você avalia sua satisfação com o atendimento prestado pelos profissionais de segurança pública (como policiais, bombeiros e equipes de resgate)?' }
  ];
}
