import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoInfoFormComponent } from './dialogo-info-form.component';

describe('DialogoInfoFormComponent', () => {
  let component: DialogoInfoFormComponent;
  let fixture: ComponentFixture<DialogoInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogoInfoFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogoInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
