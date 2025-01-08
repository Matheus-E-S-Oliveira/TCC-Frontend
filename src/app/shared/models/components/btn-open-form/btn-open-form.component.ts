import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-open-form',
  standalone: false,

  templateUrl: './btn-open-form.component.html',
  styleUrl: './btn-open-form.component.scss'
})
export class BtnOpenFormComponent {
  @Input() routePath: string = ''
}
