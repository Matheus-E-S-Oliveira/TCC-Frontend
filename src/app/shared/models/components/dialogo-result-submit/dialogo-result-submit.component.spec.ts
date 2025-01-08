import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoResultSubmitComponent } from './dialogo-result-submit.component';

describe('DialogoResultSubmitComponent', () => {
  let component: DialogoResultSubmitComponent;
  let fixture: ComponentFixture<DialogoResultSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogoResultSubmitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogoResultSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
