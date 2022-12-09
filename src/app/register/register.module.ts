import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { OwnerRegisterComponent } from './owner-register/owner-register.component';



@NgModule({
  declarations: [
    AdminRegisterComponent,
    EmployeeRegisterComponent,
    OwnerRegisterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RegisterModule { }
