import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsLitComponent } from './reports-lit.component';

describe('ReportsLitComponent', () => {
  let component: ReportsLitComponent;
  let fixture: ComponentFixture<ReportsLitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportsLitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsLitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
