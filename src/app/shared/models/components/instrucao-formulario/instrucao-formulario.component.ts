import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogoInfoFormComponent } from '../dialogo-info-form/dialogo-info-form.component';

@Component({
  selector: 'app-instrucao-formulario',
  standalone: false,

  templateUrl: './instrucao-formulario.component.html',
  styleUrl: './instrucao-formulario.component.scss'
})
export class InstrucaoFormularioComponent {
  constructor(public dialog: MatDialog) { }
  
  openDialog(): void {
    this.dialog.open(DialogoInfoFormComponent,{
      maxWidth: '100%'
    });
  }
}
