import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOpenFormComponent } from './btn-open-form.component';

describe('BtnOpenFormComponent', () => {
  let component: BtnOpenFormComponent;
  let fixture: ComponentFixture<BtnOpenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BtnOpenFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnOpenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
