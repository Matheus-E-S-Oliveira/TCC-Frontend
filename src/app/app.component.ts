import { Component, OnInit } from '@angular/core';
import { ServicoService } from './shared/services/data/servico/servico-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'TCC_FRONTEND';

  constructor(private servicoService: ServicoService) { }

  ngOnInit(): void {
    this.servicoService.loadLicencaData();
  }
}
