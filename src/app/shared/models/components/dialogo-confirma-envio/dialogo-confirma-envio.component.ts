import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dilog-confirma-envio',
  standalone: false,

  templateUrl: './dialogo-confirma-envio.component.html',
  styleUrl: './dialogo-confirma-envio.component.scss'
})
export class DialogoConfirmaEnvioComponent {

  constructor(public dialogRef: MatDialogRef<DialogoConfirmaEnvioComponent>) { }
  
  onConfirm(): void {
    this.dialogRef.close(true);
  }
  onCancel(): void {
    this.dialogRef.close(false);
  }
}
