import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioQuestionComponent } from './formulario-question.component';

describe('FormularioQuestionComponent', () => {
  let component: FormularioQuestionComponent;
  let fixture: ComponentFixture<FormularioQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioQuestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
