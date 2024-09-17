import { Component, OnInit } from '@angular/core';
import { HRService } from '../hr.service';

@Component({
  selector: 'app-work-from-home-approval',
  templateUrl: './work-from-home-approval.component.html',
  styleUrls: ['./work-from-home-approval.component.css']
})
export class WorkFromHomeApprovalComponent implements OnInit {
  requests: any[] = [];
  selectedRequestId: string = '';
  selectedStatus: string = '';

  constructor(private hrService: HRService) { }

  ngOnInit(): void {
    this.loadWorkFromHomeRequests();
  }

  loadWorkFromHomeRequests(): void {
    this.hrService.getWorkFromHomeRequests().subscribe(
      data => this.requests = data,
      error => console.error('Error fetching work-from-home requests', error)
    );
  }

  updateStatus(requestId: string, status: string): void {
    this.hrService.updateWorkFromHomeStatus(requestId, status).subscribe(
      () => {
        alert('Request status updated successfully');
        this.loadWorkFromHomeRequests(); 
      },
      error => console.error('Error updating work-from-home request status', error)
    );
  }

  onStatusChange(requestId: string): void {
    if (this.selectedStatus) {
      this.updateStatus(requestId, this.selectedStatus);
    } else {
      alert('Please select a status');
    }
  }
}
