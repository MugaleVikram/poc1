import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLocationApprovalComponent } from './client-location-approval.component';

describe('ClientLocationApprovalComponent', () => {
  let component: ClientLocationApprovalComponent;
  let fixture: ComponentFixture<ClientLocationApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientLocationApprovalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientLocationApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
