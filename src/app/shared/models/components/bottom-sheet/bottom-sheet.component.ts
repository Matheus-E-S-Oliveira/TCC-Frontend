import { Component, inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { TokenService } from '../../../services/tokens/accessToken/token.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogoResultSubmitComponent } from '../dialogo-result-submit/dialogo-result-submit.component';

@Component({
  selector: 'app-bottom-sheet',
  standalone: false,
  templateUrl: './bottom-sheet.component.html',
  styleUrl: './bottom-sheet.component.scss'
})
export class BottomSheetComponent {

  private _bottomSheetRef = inject(MatBottomSheetRef<BottomSheetComponent>);

  constructor(private router: Router,
    private tokenService: TokenService,
    public dialog: MatDialog,
  ) { }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  endSection() {
    if (this.tokenService.getToken() === null) {
      this.dialog.open(DialogoResultSubmitComponent, {
        data: {
          success: false,
          message: ["Não é possível realizar o logout, pois nenhum usuário está logado no momento."],
          statusCode: 400
        }
      });
    }
    else {
      this.tokenService.removeToken();
      this.dialog.open(DialogoResultSubmitComponent, {
        data: {
          success: true,
          message: ["Logout realizado com sucesso. Esperamos seu retorno em breve!"],
          statusCode: 200
        }
      });
      this.dialog.afterAllClosed.subscribe(() => {
        this.router.navigate(['/home']);
      });
    }
  }
}
