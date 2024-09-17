import { Component, OnInit } from '@angular/core';
import { HRService } from '../hr.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  employees: any[] = [];
  leaveRequests: any[] = [];
  workFromHomeRequests: any[] = [];
  clientLocationRequests: any[] = [];

  constructor(private hrService: HRService) { }

  ngOnInit(): void {
    this.loadAllData();
  }

  loadAllData(): void {
    this.hrService.getAllEmployees().subscribe(
      data => this.employees = data,
      error => console.error('Error fetching employees', error)
    );

    this.hrService.getLeaveApplications().subscribe(
      data => this.leaveRequests = data,
      error => console.error('Error fetching leave applications', error)
    );

    this.hrService.getWorkFromHomeRequests().subscribe(
      data => this.workFromHomeRequests = data,
      error => console.error('Error fetching work from home requests', error)
    );

    this.hrService.getClientLocationRequests().subscribe(
      data => this.clientLocationRequests = data,
      error => console.error('Error fetching client location requests', error)
    );
  }
}