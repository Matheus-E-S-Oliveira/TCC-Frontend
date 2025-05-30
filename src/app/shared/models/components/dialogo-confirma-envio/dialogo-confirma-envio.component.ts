import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiResponseDialog } from '../../../../core/api/structures/base-response.api.service';

@Component({
  selector: 'app-dilog-confirma-envio',
  standalone: false,

  templateUrl: './dialogo-confirma-envio.component.html',
  styleUrl: './dialogo-confirma-envio.component.scss'
})
export class DialogoConfirmaEnvioComponent {

  constructor(public dialogRef: MatDialogRef<DialogoConfirmaEnvioComponent>, 
     @Inject(MAT_DIALOG_DATA) public data: ApiResponseDialog
  ) { }
  
  onConfirm(): void {
    this.dialogRef.close(true);
  }
  onCancel(): void {
    this.dialogRef.close(false);
  }
}
