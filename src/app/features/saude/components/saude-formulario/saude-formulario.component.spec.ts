import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaudeFormularioComponent } from './saude-formulario.component';

describe('SaudeFormularioComponent', () => {
  let component: SaudeFormularioComponent;
  let fixture: ComponentFixture<SaudeFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaudeFormularioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaudeFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
