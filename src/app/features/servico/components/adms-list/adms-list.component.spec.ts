import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmsListComponent } from './adms-list.component';

describe('AdmsListComponent', () => {
  let component: AdmsListComponent;
  let fixture: ComponentFixture<AdmsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdmsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
