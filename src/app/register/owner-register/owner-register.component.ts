import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-owner-register',
  templateUrl: './owner-register.component.html',
  styleUrls: ['./owner-register.component.scss']
})
export class OwnerRegisterComponent implements OnInit {

  title ='my-angular';
  firstName = new FormControl('abc@gmail.com');

  constructor() { }

  ngOnInit(): void {
  }

}
