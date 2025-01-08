import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmaEnvioComponent } from '../dialogo-confirma-envio/dialogo-confirma-envio.component';
import { DialogoResultSubmitComponent } from '../dialogo-result-submit/dialogo-result-submit.component';

@Component({
  selector: 'app-formulario',
  standalone: false,

  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {
  @Input() question: { id: number, text: string }[] = [];

  routePart!: string;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    const currentUrl = this.router.url;
    const parts = currentUrl.split('/');
    this.routePart = parts[1];
  }

  onSubmit(): void {
    const confirmDialogRef = this.dialog.open(DialogoConfirmaEnvioComponent);
    confirmDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dialog.open(DialogoResultSubmitComponent);
      }
    });
  }
}
