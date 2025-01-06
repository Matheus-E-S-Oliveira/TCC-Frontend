import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRatingComponent } from './formulario-rating.component';

describe('FormularioRatingComponent', () => {
  let component: FormularioRatingComponent;
  let fixture: ComponentFixture<FormularioRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioRatingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
