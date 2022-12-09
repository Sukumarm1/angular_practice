import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { OwnerLoginComponent } from './owner-login/owner-login.component';



@NgModule({
  declarations: [
    AdminLoginComponent,
    EmployeeLoginComponent,
    OwnerLoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
