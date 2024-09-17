import { Component, OnInit } from '@angular/core';
import { HRService } from '../hr.service';

@Component({
  selector: 'app-manage-employees',
  templateUrl: './manage-employees.component.html',
  styleUrls: ['./manage-employees.component.css']
})
export class ManageEmployeesComponent implements OnInit {
  employees: any[] = [];

  constructor(private hrService: HRService) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.hrService.getAllEmployees().subscribe((data: any) => {
      this.employees = data;
    });
  }

  deleteEmployee(employeeId: string): void {
    this.hrService.deleteEmployee(employeeId).subscribe(() => {
      this.loadEmployees();
    });
  }
}
