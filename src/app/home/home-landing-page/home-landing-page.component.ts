import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-landing-page',
  templateUrl: './home-landing-page.component.html',
  styleUrls: ['./home-landing-page.component.scss']
})
export class HomeLandingPageComponent implements OnInit {

  constructor(private readonly router:Router) { }

  ngOnInit(): void {
  }

  navigateOwnerLogin(){
    this.router.navigate([`/ownerLogin`])
  }

  navigateEmployeeLogin(){
    this.router.navigate([`/employeeLogin`])
  }
  navigateAdminLogin(){
    this.router.navigate([`/adminLogin`])
  }
  navigateOwnerReg(){
    this.router.navigate([`/ownerRegister`])
  }
  navigateEmpReg(){
    this.router.navigate([`/employeeRegister`])
  }
  navigateAdminReg(){
    this.router.navigate([`/adminRegister`])
  }

}
