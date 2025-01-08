import { Component } from '@angular/core';

@Component({
  selector: 'app-saude-formulario',
  standalone: false,
  
  templateUrl: './saude-formulario.component.html',
  styleUrl: './saude-formulario.component.scss'
})
export class SaudeFormularioComponent {
  questions: {id: number, text: string}[] = [
    {id: 1, text: 'Em uma escala de 1 a 5, como você avaliaria a qualidade do atendimento recebido pelos profissionais de saúde?'},
    {id: 2, text: 'Como você classificaria o tempo de espera para ser atendido?'},
    {id: 3, text: 'Em uma escala de 1 a 5, como você avaliaria a clareza das informações fornecidas sobre seu tratamento ou condição?'},
    {id: 4, text: 'Qual a sua avaliação sobre a infraestrutura e o conforto das instalações (salas de espera, consultórios, etc.)?'},
    {id: 5, text: 'De maneira geral, como você avaliaria sua experiência com os serviços de saúde recebidos?'}
  ];  
}
