import { take } from 'rxjs';
import { UsuarioServiceAvaliacaoApiService } from './../../../../core/api/endpoints/usuario-servico-avaliacao/usuario-servico-avaliacao.api.service';
import { Injectable, OnInit } from "@angular/core";
import { TokenService } from '../../tokens/accessToken/token.service';

@Injectable({
    providedIn: 'root'
})
export class ConsultaService implements OnInit {
    constructor(private usuarioServiceAvaliacaoApiService: UsuarioServiceAvaliacaoApiService,
        private tokenService: TokenService
    ){}
    
    ngOnInit(): void {
        
    }
    getUltimaAvalicacaoServicosById(id: string){
        this.usuarioServiceAvaliacaoApiService.getUserDateAvalicoes(id)
        .pipe(take(1))
        .subscribe((response) =>{
            this.tokenService.saveList(response.data);
        })
    }

}