import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenRendererComponent } from './screen-renderer.component';

describe('ScreenRendererComponent', () => {
  let component: ScreenRendererComponent;
  let fixture: ComponentFixture<ScreenRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenRendererComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
