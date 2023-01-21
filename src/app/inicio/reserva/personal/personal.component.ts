import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  personalInformation: any;

  submitted: boolean = false;

  constructor() { }

  ngOnInit(): void {
    // this.personalInformation = this.ticketService.getTicketInformation().personalInformation;
  }



}
