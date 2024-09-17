import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HRService {

  private apiUrl = 'http://localhost:3000/api'; 
  constructor(private http: HttpClient) { }

 
  getAllEmployees(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/employees`);
  }

  getEmployeeById(employeeId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/employees/${employeeId}`);
  }

  createEmployee(employee: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/employees`, employee);
  }

  updateEmployee(employeeId: string, employee: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/employees/${employeeId}`, employee);
  }

  deleteEmployee(employeeId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/employees/${employeeId}`);
  }

 
  getLeaveApplications(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/leaves`);
  }

  getLeaveApplicationById(leaveId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/leaves/${leaveId}`);
  }

  updateLeaveStatus(leaveId: string, status: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/leaves/${leaveId}`, { status });
  }

  
  getWorkFromHomeRequests(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/work-from-home`);
  }

  updateWorkFromHomeStatus(requestId: string, status: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/work-from-home/${requestId}`, { status });
  }

 
  getClientLocationRequests(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/client-locations`);
  }

  updateClientLocationStatus(requestId: string, status: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/client-locations/${requestId}`, { status });
  }

 
  getAttendanceReport(employeeId: string, startDate: string, endDate: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/reports/attendance?employeeId=${employeeId}&startDate=${startDate}&endDate=${endDate}`);
  }

  getTimesheetReport(employeeId: string, startDate: string, endDate: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/reports/timesheets?employeeId=${employeeId}&startDate=${startDate}&endDate=${endDate}`);
  }

  
}
