import { NavigationBlockService } from './../../../../services/loading/navigation-block.service';
import { MatDialog } from '@angular/material/dialog';
import { ServicoApiService } from './../../../../../core/api/endpoints/servicos/servico.api.service';
import { Component, Input } from '@angular/core';
import { DialogoConfirmaEnvioComponent } from '../../dialogo-confirma-envio/dialogo-confirma-envio.component';
import { take } from 'rxjs';
import { DialogoResultSubmitComponent } from '../../dialogo-result-submit/dialogo-result-submit.component';
import { ServicoService } from '../../../../services/data/servico/servico-data.service';

@Component({
  selector: 'app-card',
  standalone: false,

  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() title: string = '';
  @Input() logo: string = '';
  @Input() img: string = '';
  @Input() subtitle: string = '';
  @Input() url: string | null = null;
  @Input() urlSite: string = '';
  @Input() site: string | null = null;
  @Input() list: boolean = false;
  @Input() id: string = ''

  constructor(private servicoApiService: ServicoApiService,
    public dialog: MatDialog,
    private servicoService: ServicoService,
    private navigationBlockService: NavigationBlockService) { }

  onDelete() {
    this.navigationBlockService.bloquearNavegacao();
    const confirmDialogRef = this.dialog.open(DialogoConfirmaEnvioComponent, {
      data: {
        success: false,
        message: ["Tem certeza de que deseja excluir este serviço? Essa ação é irreversível e resultará na perda permanente de todos os dados relacionados."],
        statusCode: 204
      }
    });
    confirmDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteServico();
      }
    });
    this.navigationBlockService.liberarNavegacao();
  }

  deleteServico() {
    this.servicoApiService.deleteServico(this.id)
      .pipe(take(1))
      .subscribe({
        next: (response) => {
          if (response) {
            this.servicoService.atualizarServicos();
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
