import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';
import { LeaveApprovalComponent } from './leave-approval/leave-approval.component';
import { WorkFromHomeApprovalComponent } from './work-from-home-approval/work-from-home-approval.component';
import { ClientLocationApprovalComponent } from './client-location-approval/client-location-approval.component';
import { AttendanceReportComponent } from './attendance-report/attendance-report.component';
import { TimesheetReportComponent } from './timesheet-report/timesheet-report.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DashboardComponent,
    ManageEmployeesComponent,
    LeaveApprovalComponent,
    WorkFromHomeApprovalComponent,
    ClientLocationApprovalComponent,
    AttendanceReportComponent,
    TimesheetReportComponent,
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
  ]
})
export class HrModule { }
