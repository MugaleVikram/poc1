import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashboardData: any;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    this.employeeService.getDashboardData().subscribe(
      data => this.dashboardData = data,
      error => console.error('Error fetching dashboard data', error)
    );
  }
}