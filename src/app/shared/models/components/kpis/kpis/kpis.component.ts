import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-kpis',
  standalone: false,
  
  templateUrl: './kpis.component.html',
  styleUrl: './kpis.component.scss'
})
export class KpisComponent  {
  @Input() title: string = '';
  @Input() bandeira: string = '';
  @Input() avaliacao!: number;
  @Input() route: string = '';

}
