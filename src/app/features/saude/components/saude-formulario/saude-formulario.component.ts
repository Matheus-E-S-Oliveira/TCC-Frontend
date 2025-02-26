import { Component } from '@angular/core';

@Component({
  selector: 'app-saude-formulario',
  standalone: false,
  
  templateUrl: './saude-formulario.component.html',
  styleUrl: './saude-formulario.component.scss'
})
export class SaudeFormularioComponent {
  questions: {id: number, text: string}[] = [
    {id: 1, text: 'Como você avalia sua satisfação geral com os serviços de saúde oferecidos na sua localidade?'},
    {id: 2, text: 'Você ficou satisfeito com a forma como os prazos e compromissos estabelecidos pelos serviços de saúde foram cumpridos?'},
    {id: 3, text: 'Você ficou satisfeito com a quantidade de oportunidades para expressar suas opiniões ou preocupações sobre os serviços de saúde?'},
    {id: 4, text: 'Você ficou satisfeito com as ações ou mudanças implementadas para melhorar os serviços de saúde?'},
    {id: 5, text: 'Como você avalia sua satisfação com a qualidade do atendimento médico e de enfermagem recebido?'}
  ];
}
