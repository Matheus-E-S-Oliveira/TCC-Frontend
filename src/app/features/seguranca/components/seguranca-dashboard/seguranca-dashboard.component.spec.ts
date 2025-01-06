import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegurancaDashboardComponent } from './seguranca-dashboard.component';

describe('SegurancaDashboardComponent', () => {
  let component: SegurancaDashboardComponent;
  let fixture: ComponentFixture<SegurancaDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SegurancaDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegurancaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
