import { Component } from '@angular/core';

@Component({
  selector: 'app-infraestrutura-formulario',
  standalone: false,

  templateUrl: './infraestrutura-formulario.component.html',
  styleUrl: './infraestrutura-formulario.component.scss'
})
export class InfraestruturaFormularioComponent {
  questions: { id: number, text: string }[] = [
    { id: 1, text: 'Como você avalia sua satisfação geral com os serviços de infraestrutura pública (como pavimentação, iluminação, saneamento, etc.) na sua região?' },
    { id: 2, text: 'Você ficou satisfeito com o cumprimento dos prazos e compromissos relacionados às obras e serviços de infraestrutura pública?' },
    { id: 3, text: 'Você ficou satisfeito com a quantidade de oportunidades para expressar suas preocupações ou sugestões sobre os serviços de infraestrutura pública?' },
    { id: 4, text: 'Você ficou satisfeito com as ações e melhorias realizadas para aperfeiçoar os serviços de infraestrutura pública?' },
    { id: 5, text: 'Como você avalia sua satisfação com o atendimento recebido ao tratar de questões relacionadas à infraestrutura pública?' }
  ];

}
