import { AfterViewInit, Component } from '@angular/core';
import { PerguntasApiService } from '../../../../core/api/endpoints/perguntas/perguntas.api.service';

@Component({
  selector: 'app-avaliacao-form',
  standalone: false,
  templateUrl: './avaliacao-form.component.html',
  styleUrl: './avaliacao-form.component.scss'
})
export class AvaliacaoFormComponent {
  questions: { id: number, text: string }[] = [];

  constructor(private perguntasApiService: PerguntasApiService) { }
}
