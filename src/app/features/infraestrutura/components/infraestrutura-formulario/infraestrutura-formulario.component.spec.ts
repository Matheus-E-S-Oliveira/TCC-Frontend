import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraestruturaFormularioComponent } from './infraestrutura-formulario.component';

describe('InfraestruturaFormularioComponent', () => {
  let component: InfraestruturaFormularioComponent;
  let fixture: ComponentFixture<InfraestruturaFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfraestruturaFormularioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfraestruturaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
