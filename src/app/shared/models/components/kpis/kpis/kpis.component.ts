import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-kpis',
  standalone: false,
  
  templateUrl: './kpis.component.html',
  styleUrl: './kpis.component.scss'
})
export class KpisComponent {
  @Input() title: string = '';
  @Input() bandeira: string = '';
  @Input() avaliacao: number = 0;
  @Input() link: string = '';
}
