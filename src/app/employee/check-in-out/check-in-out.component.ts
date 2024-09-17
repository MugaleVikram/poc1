// src/app/employee/check-in-out/check-in-out.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-check-in-out',
  templateUrl: './check-in-out.component.html',
  styleUrls: ['./check-in-out.component.css']
})
export class CheckInCheckOutComponent {
  checkInForm: FormGroup;
  checkOutForm: FormGroup;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) {
    this.checkInForm = this.fb.group({
      employeeId: ['', Validators.required],
      checkInTime: ['', Validators.required],
      location: ['', Validators.required]
    });

    this.checkOutForm = this.fb.group({
      employeeId: ['', Validators.required],
      checkOutTime: ['', Validators.required],
      location: ['', Validators.required]
    });
  }

  checkIn(): void {
    if (this.checkInForm.valid) {
      this.employeeService.checkIn(
        this.checkInForm.value.employeeId,
        this.checkInForm.value.checkInTime,
        this.checkInForm.value.location
      ).subscribe(
        response => console.log('Check-in successful', response),
        error => console.error('Error during check-in', error)
      );
    }
  }

  checkOut(): void {
    if (this.checkOutForm.valid) {
      this.employeeService.checkOut(
        this.checkOutForm.value.employeeId,
        this.checkOutForm.value.checkOutTime,
        this.checkOutForm.value.location
      ).subscribe(
        response => console.log('Check-out successful', response),
        error => console.error('Error during check-out', error)
      );
    }
  }
}
