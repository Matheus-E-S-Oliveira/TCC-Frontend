import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayotFooterComponent } from './layot-footer.component';

describe('LayotFooterComponent', () => {
  let component: LayotFooterComponent;
  let fixture: ComponentFixture<LayotFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayotFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayotFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
