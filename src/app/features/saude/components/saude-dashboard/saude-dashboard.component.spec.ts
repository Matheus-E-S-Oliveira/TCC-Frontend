import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaudeDashboardComponent } from './saude-dashboard.component';

describe('SaudeDashboardComponent', () => {
  let component: SaudeDashboardComponent;
  let fixture: ComponentFixture<SaudeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaudeDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaudeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
