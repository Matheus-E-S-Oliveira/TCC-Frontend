import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrucaoFormularioComponent } from './instrucao-formulario.component';

describe('InstrucaoFormularioComponent', () => {
  let component: InstrucaoFormularioComponent;
  let fixture: ComponentFixture<InstrucaoFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstrucaoFormularioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstrucaoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
