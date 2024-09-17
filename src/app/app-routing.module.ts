import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { EmployeeModule } from './employee/employee.module';
import { HrModule } from './hr/hr.module';

// Define routes here
const routes: Routes = [
  // Add your routes here
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthModule, EmployeeModule, HrModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
