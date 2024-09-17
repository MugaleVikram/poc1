import { Component, OnInit } from '@angular/core';
import { HRService } from '../hr.service';

@Component({
  selector: 'app-client-location-approval',
  templateUrl: './client-location-approval.component.html',
  styleUrls: ['./client-location-approval.component.css']
})
export class ClientLocationApprovalComponent implements OnInit {
  clientLocationRequests: any[] = [];

  constructor(private hrService: HRService) { }

  ngOnInit(): void {
    this.loadClientLocationRequests();
  }

  loadClientLocationRequests(): void {
    this.hrService.getClientLocationRequests().subscribe(
      data => this.clientLocationRequests = data,
      error => console.error('Error fetching client location requests', error)
    );
  }

  approveRequest(requestId: string): void {
    this.hrService.updateClientLocationStatus(requestId, 'approved').subscribe(
      () => this.loadClientLocationRequests(),
      error => console.error('Error approving client location request', error)
    );
  }

  rejectRequest(requestId: string): void {
    this.hrService.updateClientLocationStatus(requestId, 'rejected').subscribe(
      () => this.loadClientLocationRequests(),
      error => console.error('Error rejecting client location request', error)
    );
  }
}
