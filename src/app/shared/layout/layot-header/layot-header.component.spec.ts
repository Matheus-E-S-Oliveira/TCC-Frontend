import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayotHeaderComponent } from './layot-header.component';

describe('LayotHeaderComponent', () => {
  let component: LayotHeaderComponent;
  let fixture: ComponentFixture<LayotHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayotHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayotHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
