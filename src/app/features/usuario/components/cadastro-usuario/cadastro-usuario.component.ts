import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro-usuario',
  standalone: false,
  templateUrl: './cadastro-usuario.component.html',
  styleUrl: './cadastro-usuario.component.scss'
})
export class CadastroUsuarioComponent {
senha: any;
  submit() {
    console.log('Formulário enviado!');
    // Aqui você pode capturar os dados ou enviar a requisição.
  }
}
