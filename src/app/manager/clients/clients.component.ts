import { Component, OnInit } from '@angular/core';

export interface Destination {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  


  constructor() { }

  ngOnInit() {
  }

}
