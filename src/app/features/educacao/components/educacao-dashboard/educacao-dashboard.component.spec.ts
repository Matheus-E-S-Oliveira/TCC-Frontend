import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacaoDashboardComponent } from './educacao-dashboard.component';

describe('EducacaoDashboardComponent', () => {
  let component: EducacaoDashboardComponent;
  let fixture: ComponentFixture<EducacaoDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EducacaoDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacaoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
