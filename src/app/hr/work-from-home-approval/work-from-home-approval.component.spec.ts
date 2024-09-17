import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkFromHomeApprovalComponent } from './work-from-home-approval.component';

describe('WorkFromHomeApprovalComponent', () => {
  let component: WorkFromHomeApprovalComponent;
  let fixture: ComponentFixture<WorkFromHomeApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkFromHomeApprovalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkFromHomeApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
