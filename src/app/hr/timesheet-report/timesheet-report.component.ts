import { Component, OnInit } from '@angular/core';
import { HRService } from '../hr.service';

@Component({
  selector: 'app-timesheet-report',
  templateUrl: './timesheet-report.component.html',
  styleUrls: ['./timesheet-report.component.css']
})
export class TimesheetReportComponent implements OnInit {
  reports: any[] = [];
  employeeId: string = '';
  startDate: string = '';
  endDate: string = '';

  constructor(private hrService: HRService) { }

  ngOnInit(): void {
  }

  generateReport(): void {
    if (this.employeeId && this.startDate && this.endDate) {
      this.hrService.getTimesheetReport(this.employeeId, this.startDate, this.endDate).subscribe(
        data => this.reports = data,
        error => console.error('Error fetching timesheet report', error)
      );
    } else {
      alert('Please fill in all fields');
    }
  }
}
