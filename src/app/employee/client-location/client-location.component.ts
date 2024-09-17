

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-client-location',
  templateUrl: './client-location.component.html',
  styleUrls: ['./client-location.component.css']
})
export class ClientLocationComponent {
  clientLocationForm: FormGroup;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) {
    this.clientLocationForm = this.fb.group({
      employeeId: ['', Validators.required],
      date: ['', Validators.required],
      clientName: ['', Validators.required],
      location: ['', Validators.required],
      purpose: ['', Validators.required]
    });
  }

  requestClientLocation(): void {
    if (this.clientLocationForm.valid) {
      this.employeeService.requestClientLocation(this.clientLocationForm.value.employeeId,this.clientLocationForm.value.location,this.clientLocationForm.value.date).subscribe(
        response => console.log('Client location request submitted', response),
        error => console.error('Error submitting client location request', error)
      );
    }
  }
}
