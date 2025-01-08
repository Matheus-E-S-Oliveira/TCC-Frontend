import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacaoFormularioComponent } from './educacao-formulario.component';

describe('EducacaoFormularioComponent', () => {
  let component: EducacaoFormularioComponent;
  let fixture: ComponentFixture<EducacaoFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EducacaoFormularioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacaoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
