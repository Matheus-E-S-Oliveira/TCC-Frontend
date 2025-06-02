import { AfterViewInit, Component } from '@angular/core';
import { ReportApiService } from '../../../core/api/endpoints/reports/report.api.service';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs';
import { ReportResponseService } from '../../../core/api/endpoints/reports/response/report-response.service';
import { DialogoResultSubmitComponent } from '../../../shared/models/components/dialogo-result-submit/dialogo-result-submit.component';

@Component({
  selector: 'app-reports-lit',
  standalone: false,
  templateUrl: './reports-lit.component.html',
  styleUrl: './reports-lit.component.scss'
})
export class ReportsLitComponent implements AfterViewInit {
  result: ReportResponseService[] = [];
  currentPage = 1;
  pageSize = 5;
  hasMore = true;

  constructor(private reportApiService: ReportApiService, public dialog: MatDialog) { }

  ngAfterViewInit() {
    this.getReports(); // Carrega a primeira página
  }

  getReports() {
    if (!this.hasMore) return;

    this.reportApiService.getReports(this.currentPage, this.pageSize)
      .pipe(take(1))
      .subscribe({
        next: (response) => {
          const items = response.data.items;

          if (!items || items.length === 0) {
            this.hasMore = false;
            return;
          }

          const novosItens = items.filter(i => !this.result.some(r => r.id === i.id));
          if (novosItens.length === 0) {
            this.hasMore = false;
            return;
          }

          this.result = [...this.result, ...novosItens];
          
          if (this.result.length >= response.data.totalItems) {
            this.hasMore = false;
          } else {
            this.currentPage++;
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
