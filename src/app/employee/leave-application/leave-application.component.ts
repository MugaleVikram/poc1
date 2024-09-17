import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.component.html',
  styleUrls: ['./leave-application.component.css']
})
export class LeaveApplicationComponent {

  leaveForm: FormGroup;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) {
    this.leaveForm = this.fb.group({
      employeeId: ['', Validators.required],
      leaveType: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      reason: ['', Validators.required]
    });
  }

  applyLeave(): void {
    if (this.leaveForm.valid) {
      this.employeeService.applyLeave(this.leaveForm.value.employeeId,this.leaveForm.value.startDate,this.leaveForm.value.endDate).subscribe(
        response => console.log('Leave application submitted', response),
        error => console.error('Error applying leave', error)
      );
    }
  }
}


