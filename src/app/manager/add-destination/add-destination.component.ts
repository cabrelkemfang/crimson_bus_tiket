import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Destination } from '../../class/Destination';
import { Car } from '../../class/Car';
import { DepartureTime } from '../../class/Departure-time';
export interface Time {
  departure_times: string;
  
}

@Component({
  selector: 'app-add-destination',
  templateUrl: './add-destination.component.html',
  styleUrls: ['./add-destination.component.css']
})
export class AddDestinationComponent implements OnInit {
  

cars:String[]=[];
times:String[]=[];

  destination:Destination = new Destination();
  car1:Car[]=[];
  time1:DepartureTime[]=[];

  constructor(private _service: ServiceService, private _router: Router,public snackBar: MatSnackBar) { }

  ngOnInit() {
  }


  onSubmittime(value){
    this.times.push(value.time);
    this.time1.push(value);
    console.log(this.time1)
  }
  onSubmitcar(value){
   this.cars.push(value.carNumber);
    this.car1.push(value)
    console.log(this.car1) 
  }

  save(){
    for (var i = 0; i < this.car1.length; i++) {
      this.destination.cars[i] = this.car1[i];
    }
    for (var i = 0; i < this.time1.length; i++) {
      this.destination.departure_times[i] = this.time1[i];
    }

    console.log(this.destination);

    this._service.createdestination(this.destination).subscribe((data) => {
      console.log(data);
      this.openSnackBar("Add New Destination successfully ..");
      this._router.navigate(['dashboard']);
    }, (error) => {
      console.log(error);
    })
  }
  /*

this._service.createdestination(value).subscribe((data) => {
      console.log(data);
      this.openSnackBar("Add successfully ..");
      this._router.navigate(['dashboard']);
    }, (error) => {
      console.log(error);
    })
  }*/
  openSnackBar(message: string) {
    this.snackBar.open(message, " ", {
      duration: 5000,
    });
  }
}
