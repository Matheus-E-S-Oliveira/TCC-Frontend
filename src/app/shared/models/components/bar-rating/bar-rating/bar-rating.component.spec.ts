import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarRatingComponent } from './bar-rating.component';

describe('BarRatingComponent', () => {
  let component: BarRatingComponent;
  let fixture: ComponentFixture<BarRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BarRatingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
