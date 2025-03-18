import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { TokenService } from '../tokens/accessToken/token.service';
import { Location } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class AvaliacaoGuard implements CanActivate {
    idServico: string = '';
    constructor(
        private tokenService: TokenService,
        private router: Router,
        private location: Location
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        const navigation = this.location.getState() as { serviceId: string };
        if (navigation && navigation.serviceId) {
            this.idServico = navigation.serviceId;
        }

        if (this.idServico) {
            const servicosAvaliados = this.tokenService.getServicoAvaliados();
            if (servicosAvaliados[this.idServico]) {
                const ultimaAvaliacao = new Date(servicosAvaliados[this.idServico]);
                const currentDate = new Date();

                if (ultimaAvaliacao.getMonth() === currentDate.getMonth() &&
                    ultimaAvaliacao.getFullYear() === currentDate.getFullYear()) {
                    // Bloqueia o acesso e redireciona
                    this.router.navigate(['/erro-acao'], { queryParams: { message: 'Você já avaliou este serviço neste mês.' } });
                    return false;  // Bloqueia o acesso
                }
            }
        }

        return true;  // Permite o acesso
    }
}
