import { Component } from '@angular/core';

@Component({
  selector: 'app-infraestrutura-formulario',
  standalone: false,

  templateUrl: './infraestrutura-formulario.component.html',
  styleUrl: './infraestrutura-formulario.component.scss'
})
export class InfraestruturaFormularioComponent {
  questions: { id: number, text: string }[] = [
    { id: 1, text: 'Em uma escala de 1 a 5, como você avaliaria a qualidade das estradas e calçadas na sua área?' },
    { id: 2, text: 'Como você classificaria a disponibilidade e a eficácia do transporte público em sua região?' },
    { id: 3, text: 'Em uma escala de 1 a 5, como você avaliaria a manutenção de serviços públicos, como água, esgoto e eletricidade?' },
    { id: 4, text: 'Como você avaliaria a qualidade das instalações públicas, como parques, bibliotecas e centros comunitários?' },
    { id: 5, text: 'Em sua opinião, como você avaliaria a acessibilidade da infraestrutura para pessoas com mobilidade reduzida?' }
  ];

}
