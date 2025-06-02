import { AfterViewInit, Component } from '@angular/core';
import { AdmApiService } from '../../../../core/api/endpoints/adm/adm.api.service';
import { take } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogoResultSubmitComponent } from '../../../../shared/models/components/dialogo-result-submit/dialogo-result-submit.component';
import { Router } from '@angular/router';
import { AdmResponse } from '../../../../core/api/endpoints/adm/response/adm-response.service';
import { DialogoConfirmaEnvioComponent } from '../../../../shared/models/components/dialogo-confirma-envio/dialogo-confirma-envio.component';
import { NavigationBlockService } from '../../../../shared/services/loading/navigation-block.service';

@Component({
  selector: 'app-adms-list',
  standalone: false,
  templateUrl: './adms-list.component.html',
  styleUrl: './adms-list.component.scss'
})
export class AdmsListComponent implements AfterViewInit {
  result: AdmResponse[] = []

  constructor(private admApiService: AdmApiService,
    public dialog: MatDialog,
    private navigationBlockService: NavigationBlockService,
    private router: Router) { }

  ngAfterViewInit(): void {
    this.getAdms();
  }

  getAdms() {
    this.admApiService.getAdms()
      .pipe(take(1))
      .subscribe({
        next: (response) => {
          if (response) {
            this.result = response.data;
          }
        },
        error: (error) => {
          var confirmDialogRef = this.dialog.open(DialogoResultSubmitComponent, {
            data: error.error
          });
          confirmDialogRef.afterClosed().subscribe(() => {
            this.router.navigate(['/servico/home']);
          });
        }
      });
  }

  onDelete(id: string) {
    this.navigationBlockService.bloquearNavegacao();
    const confirmDialogRef = this.dialog.open(DialogoConfirmaEnvioComponent, {
      data: {
        success: false,
        message: ["Deseja realmente excluir este administrador? A exclusão é permanente e removerá todos os acessos vinculados."],
        statusCode: 204
      }
    });
    confirmDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteAdm(id);
      }
    });
    this.navigationBlockService.liberarNavegacao();
  }

  deleteAdm(id: string) {
    this.admApiService.deleteAdm(id)
      .pipe(take(1))
      .subscribe({
        next: (response) => {
          if (response) {
            this.dialog.open(DialogoResultSubmitComponent, {
              data: response
            });
          }
        },
        error: (error) => {
          this.dialog.open(DialogoResultSubmitComponent, {
            data: error.error
          });
        }
      });
  }

}
