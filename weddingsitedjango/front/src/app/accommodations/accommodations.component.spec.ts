import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { accommodationsComponent } from './accommodations.component';

describe('accommodationsComponent', () => {
  let component: accommodationsComponent;
  let fixture: ComponentFixture<accommodationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ accommodationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(accommodationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
