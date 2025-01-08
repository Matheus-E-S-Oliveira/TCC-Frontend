import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoConfirmaEnvioComponent } from './dialogo-confirma-envio.component';

describe('DialogoConfirmaEnvioComponent', () => {
  let component: DialogoConfirmaEnvioComponent;
  let fixture: ComponentFixture<DialogoConfirmaEnvioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogoConfirmaEnvioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogoConfirmaEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
