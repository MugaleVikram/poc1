
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-work-from-home',
  templateUrl: './work-from-home.component.html',
  styleUrls: ['./work-from-home.component.css']
})
export class WorkFromHomeComponent {
  workFromHomeForm: FormGroup;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) {
    this.workFromHomeForm = this.fb.group({
      employeeId: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      reason: ['', Validators.required]
    });
  }

  requestWorkFromHome(): void {
    if (this.workFromHomeForm.valid) {
      this.employeeService.requestWorkFromHome(this.workFromHomeForm.value.employeeId,this.workFromHomeForm.value.startDate,this.workFromHomeForm.value.endDate).subscribe(
        response => console.log('Work-from-home request submitted', response),
        error => console.error('Error submitting work-from-home request', error)
      );
    }
  }
}
