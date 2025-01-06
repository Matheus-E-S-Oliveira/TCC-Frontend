import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegurancaFormularioComponent } from './seguranca-formulario.component';

describe('SegurancaFormularioComponent', () => {
  let component: SegurancaFormularioComponent;
  let fixture: ComponentFixture<SegurancaFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SegurancaFormularioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegurancaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
