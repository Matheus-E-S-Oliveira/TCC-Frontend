import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dilog-info-form',
  standalone: false,

  templateUrl: './dialogo-info-form.component.html',
  styleUrl: './dialogo-info-form.component.scss'
})
export class DialogoInfoFormComponent {
  
  constructor(public dialog: MatDialog) { }

  close(): void {
    this.dialog.closeAll();
  }
}
