import { Component } from '@angular/core';

@Component({
  selector: 'app-educacao-formulario',
  standalone: false,

  templateUrl: './educacao-formulario.component.html',
  styleUrl: './educacao-formulario.component.scss'
})
export class EducacaoFormularioComponent {
  questions: { id: number, text: string }[] = [
    { id: 1, text: 'Como você avalia sua satisfação geral com os serviços educacionais oferecidos na sua localidade (como escolas, universidades e cursos públicos)?' },
    { id: 2, text: 'Você ficou satisfeito com o cumprimento dos prazos e compromissos relacionados aos serviços educacionais (como datas de matrícula, exames, entrega de resultados, etc.)?' },
    { id: 3, text: 'Você ficou satisfeito com a quantidade de oportunidades para expressar suas opiniões ou preocupações sobre os serviços educacionais?' },
    { id: 4, text: 'Você ficou satisfeito com as ações e melhorias realizadas para aperfeiçoar os serviços educacionais?' },
    { id: 5, text: 'Como você avalia sua satisfação com o atendimento e suporte oferecido aos alunos (como orientação acadêmica, apoio pedagógico, entre outros)?' }
  ];

}
