import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-user-machines',
  templateUrl: './user-machines.component.html',
  styleUrls: ['./user-machines.component.css']
})
export class UserMachinesComponent implements OnInit {

  constructor(private titleService:Title) { 
    this.titleService.setTitle("Your Machines");
  }

  ngOnInit() {
  }

}
