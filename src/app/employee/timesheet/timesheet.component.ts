import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent  {

  timesheetForm: FormGroup;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) {
    this.timesheetForm = this.fb.group({
      employeeId: ['', Validators.required],
      date: ['', Validators.required],
      hoursWorked: ['', [Validators.required, Validators.min(0)]],
      description: ['', Validators.required]
    });
  }

  submitTimesheet(): void {
    if (this.timesheetForm.valid) {
      this.employeeService.submitTimesheet(this.timesheetForm.value.employeeId,this.timesheetForm.value.date,this.timesheetForm.value.hoursWorked).subscribe(
        response => console.log('Timesheet submitted', response),
        error => console.error('Error submitting timesheet', error)
      );
    }
  }
}
