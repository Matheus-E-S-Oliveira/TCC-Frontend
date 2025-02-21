import { resolve } from 'node:path';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiResponse, ApiResponseDialog } from '../../../../core/api/structures/base-response.api.service';

@Component({
  selector: 'app-dilog-result-submit',
  standalone: false,

  templateUrl: './dialogo-result-submit.component.html',
  styleUrl: './dialogo-result-submit.component.scss'
})
export class DialogoResultSubmitComponent {

  constructor(public dialogRef: MatDialogRef<DialogoResultSubmitComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ApiResponseDialog
  ) {  }

  onClose(): void {
    this.dialogRef.close();
  }
}
