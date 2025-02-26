import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-question',
  standalone: false,

  templateUrl: './formulario-question.component.html',
  styleUrl: './formulario-question.component.scss',
  animations: [
    trigger('toggleVisibility', [
      state('visible', style({
        opacity: 1,
        height: '*',
        padding: '10px 0',
        overflow: 'hidden',
      })),
      state('hidden', style({
        opacity: 0,
        height: '0px',
        padding: '0',
        overflow: 'hidden',
      })),
      transition('visible <=> hidden', [
        animate('300ms ease-in-out')
      ]),
    ])
  ]
})
export class FormularioQuestionComponent {
  @Input() question!: { id: number, text: string };
  @Output() respostaSelecionada = new EventEmitter<{ id: number, valor: number }>();

  responses: { [key: number]: number } = {};

  onRatingSelected(valor: number) {
    this.respostaSelecionada.emit({ id: this.question.id, valor });
  }

  obterExplicacaoPorId(id: number) {
    const categoria = this.explicacoesCategorias.find(c => c.id === id);
    return categoria ? `${categoria.categoria}: ${categoria.explicacao}` : 'Categoria não encontrada';
  }
  
  isVisivle = false;
  chancgeVisibility(){
    this.isVisivle = !this.isVisivle;
  }

  explicacoesCategorias = [
    {
      id: 1,
      categoria: "Satisfação do Usuário",
      explicacao: "Avalie sua satisfação geral com o serviço prestado. Isso inclui sua experiência como um todo."
    },
    {
      id: 2,
      categoria: "Cumprimento de Compromissos e Prazos",
      explicacao: "Avalie se o serviço cumpriu os prazos e compromissos que foram acordados."
    },
    {
      id: 3,
      categoria: "Quantidade de Manifestações dos Usuários",
      explicacao: "Avalie a quantidade de manifestações ou solicitações feitas pelos usuários e como elas foram tratadas."
    },
    {
      id: 4,
      categoria: "Medidas Adotadas para a Melhoria e Aperfeiçoamento do Serviço",
      explicacao: "Avalie as ações e melhorias implementadas para aperfeiçoar o serviço após feedbacks e sugestões."
    },
    {
      id: 5,
      categoria: "Qualidade do Atendimento",
      explicacao: "Avalie a qualidade do atendimento recebido. Isso inclui a cortesia, competência e resolução de seus problemas."
    },
  ];

}
