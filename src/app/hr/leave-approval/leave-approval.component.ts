import { Component, OnInit } from '@angular/core';
import { HRService } from '../hr.service';

@Component({
  selector: 'app-leave-approval',
  templateUrl: './leave-approval.component.html',
  styleUrls: ['./leave-approval.component.css']
})
export class LeaveApprovalComponent implements OnInit {
  leaveApplications: any[] = [];

  constructor(private hrService: HRService) { }

  ngOnInit(): void {
    this.loadLeaveApplications();
  }

  loadLeaveApplications(): void {
    this.hrService.getLeaveApplications().subscribe(
      data => this.leaveApplications = data,
      error => console.error('Error fetching leave applications', error)
    );
  }

  approveLeave(leaveId: string): void {
    this.hrService.updateLeaveStatus(leaveId, 'approved').subscribe(
      () => this.loadLeaveApplications(),
      error => console.error('Error approving leave', error)
    );
  }

  rejectLeave(leaveId: string): void {
    this.hrService.updateLeaveStatus(leaveId, 'rejected').subscribe(
      () => this.loadLeaveApplications(),
      error => console.error('Error rejecting leave', error)
    );
  }
}
