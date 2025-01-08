import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dilog-result-submit',
  standalone: false,

  templateUrl: './dialogo-result-submit.component.html',
  styleUrl: './dialogo-result-submit.component.scss'
})
export class DialogoResultSubmitComponent {

  constructor(public dialogRef: MatDialogRef<DialogoResultSubmitComponent>) { }
  
  onClose(): void {
    this.dialogRef.close();
  }
}
