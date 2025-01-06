import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraestruturaDashboardComponent } from './infraestrutura-dashboard.component';

describe('InfraestruturaDashboardComponent', () => {
  let component: InfraestruturaDashboardComponent;
  let fixture: ComponentFixture<InfraestruturaDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfraestruturaDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfraestruturaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
