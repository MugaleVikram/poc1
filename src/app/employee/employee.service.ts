

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = `http://localhost:3000/api/employees`; 

  constructor(private http: HttpClient) { }

  // Get employee dashboard data
  getDashboardData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/dashboard`);
  }

  // Check-in
  checkIn(employeeId: string, checkInTime: Date, location: string): Observable<any> {
    return this.http.post(`http://localhost:3000/api/attendance/check-in`, { employeeId, checkInTime, location });
  }

  // Check-out
  checkOut(employeeId: string, checkOutTime: Date, location: string): Observable<any> {
    return this.http.post(`http://localhost:3000/api/attendance/check-out`, { employeeId, checkOutTime, location });
  }

  // Apply for leave
  applyLeave(employeeId: string, startDate: Date, endDate: Date): Observable<any> {
    return this.http.post(`$http://localhost:3000/api/leaves`, { employeeId, startDate, endDate });
  }

  // Submit timesheet
  submitTimesheet(employeeId: string, date: Date, hoursWorked: number): Observable<any> {
    return this.http.post(`http://localhost:3000/api/timesheets`, { employeeId, date, hoursWorked });
  }

  // Request work from home
  requestWorkFromHome(employeeId: string, startDate: Date, endDate: Date): Observable<any> {
    return this.http.post(`http://localhost:3000/api/work-from-home`, { employeeId, startDate, endDate });
  }

  // Request client location
  requestClientLocation(employeeId: string, clientLocation: string, date: Date): Observable<any> {
    return this.http.post(`http://localhost:3000/api/client-locations`, { employeeId, clientLocation,date });
  }
}
