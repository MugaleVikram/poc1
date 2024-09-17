import { Component, OnInit } from '@angular/core';
import { HRService } from '../hr.service';

@Component({
  selector: 'app-attendance-report',
  templateUrl: './attendance-report.component.html',
  styleUrls: ['./attendance-report.component.css']
})
export class AttendanceReportComponent implements OnInit {
  reports: any[] = [];
  employeeId: string = '';
  startDate: string = '';
  endDate: string = '';

  constructor(private hrService: HRService) { }

  ngOnInit(): void {
  }

  generateReport(): void {
    if (this.employeeId && this.startDate && this.endDate) {
      this.hrService.getAttendanceReport(this.employeeId, this.startDate, this.endDate).subscribe(
        data => this.reports = data,
        error => console.error('Error fetching attendance report', error)
      );
    } else {
      alert('Please fill in all fields');
    }
  }
}
