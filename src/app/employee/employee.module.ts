import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CheckInCheckOutComponent } from './check-in-out/check-in-out.component';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { WorkFromHomeComponent } from './work-from-home/work-from-home.component';
import { ClientLocationComponent } from './client-location/client-location.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
   CheckInCheckOutComponent,
    LeaveApplicationComponent,
    TimesheetComponent,
    WorkFromHomeComponent,
    ClientLocationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    DashboardComponent,
   CheckInCheckOutComponent,
    LeaveApplicationComponent,
    TimesheetComponent,
    WorkFromHomeComponent,
    ClientLocationComponent
  ]
})
export class EmployeeModule { }
