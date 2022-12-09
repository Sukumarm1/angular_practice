import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLandingPageComponent } from './home/home-landing-page/home-landing-page.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { EmployeeLoginComponent } from './login/employee-login/employee-login.component';
import { LoginComponent } from './login/login.component';
import { OwnerLoginComponent } from './login/owner-login/owner-login.component';
import { AdminRegisterComponent } from './register/admin-register/admin-register.component';
import { EmployeeRegisterComponent } from './register/employee-register/employee-register.component';
import { OwnerRegisterComponent } from './register/owner-register/owner-register.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'adminLogin', component: AdminLoginComponent },
    { path: 'employeeLogin', component: EmployeeLoginComponent},
    { path: 'ownerLogin', component: OwnerLoginComponent},

    { path: 'register', component:RegisterComponent},
    { path: 'adminRegister', component:AdminRegisterComponent},
    { path: 'employeeRegister', component:EmployeeRegisterComponent},
    { path: 'ownerRegister', component:OwnerRegisterComponent},

    { path: 'home', component:HomeComponent},
    { path: 'homeLandingPage', component:HomeLandingPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
