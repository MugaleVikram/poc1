import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckInCheckOutComponent } from './check-in-out.component';

describe('CheckInOutComponent', () => {
  let component: CheckInCheckOutComponent;
  let fixture: ComponentFixture<CheckInCheckOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckInCheckOutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckInCheckOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
