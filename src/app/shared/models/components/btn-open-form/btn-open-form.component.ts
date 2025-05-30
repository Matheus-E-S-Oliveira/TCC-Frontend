import { Component, Input, OnInit } from '@angular/core';
import { TokenService } from '../../../services/tokens/accessToken/token.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogoResultSubmitComponent } from '../dialogo-result-submit/dialogo-result-submit.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btn-open-form',
  standalone: false,

  templateUrl: './btn-open-form.component.html',
  styleUrl: './btn-open-form.component.scss'
})
export class BtnOpenFormComponent {
  @Input() routePath: string = '';
  @Input() idServico: string = '';

  constructor(private tokenService: TokenService,
    public dialog: MatDialog,
    private router: Router
  ) { }

  verificaUltimaAvaliacao() {
    if (this.tokenService.getToken() === null) {
      const currentUrl = this.router.url;
      this.router.navigate(['/login'], {
        queryParams: { returnUrl: currentUrl }
      });
      return;
    }
    var servicosAaliados = this.tokenService.getServicoAvaliados();

    if (servicosAaliados[this.idServico]) {
      const ultimaAvaliacao = new Date(servicosAaliados[this.idServico]);
      const currentDate = new Date();

      if (ultimaAvaliacao.getMonth() === currentDate.getMonth() &&
        ultimaAvaliacao.getFullYear() === currentDate.getFullYear()) {
        this.dialog.open(DialogoResultSubmitComponent, {
          data: {
            success: false,
            message: ["Você já avaliou este serviço neste mês. Não é possível avaliar novamente. Tente no próximo mês."],
            statusCode: 401
          }
        });
      }
      else {
        this.router.navigate(['/servico', this.routePath, 'form'], {
          queryParams: { serviceId: this.idServico }
        });
      }
    }
    else {
      this.dialog.open(DialogoResultSubmitComponent, {
        data: {
          success: false,
          message: ["Dados corrompidos. Por favor, recarregue a página ou realize o login novamente."],
          statusCode: 401
        }
      });
    }

  }

}
