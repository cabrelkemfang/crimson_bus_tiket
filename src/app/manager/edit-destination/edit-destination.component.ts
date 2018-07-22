import { Component, OnInit } from '@angular/core';
import { Destination } from '../../class/Destination';
import { DepartureTime } from '../../class/Departure-time';
import { Car } from '../../class/Car';
import { ServiceService } from '../../service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-edit-destination',
  templateUrl: './edit-destination.component.html',
  styleUrls: ['./edit-destination.component.css']
})
export class EditDestinationComponent implements OnInit {
  cars: String[] = [];
  times: String[] = [];
  destination: Destination = new Destination();
  car1: Car[] = [];
  time1: DepartureTime[] = [];
  constructor(private _service: ServiceService, private _router: Router, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.destination = JSON.parse(localStorage.getItem('destination'));
    for (var i = 0; i < this.destination.cars.length; i++) {
      this.cars.push(this.destination.cars[i].carNumber);
    }

    for (var i = 0; i < this.destination.departure_times.length; i++) {
      this.times.push(this.destination.departure_times[i].time);
    }
  }

  onSubmittime(value) {
    this.times.push(value.time);
    this.time1.push(value);
    console.log(this.time1)
  }
  onSubmitcar(value) {
    this.cars.push(value.carNumber);
    this.car1.push(value)
    console.log(this.car1)
  }

  save() {
    for (var i = 0; i < this.car1.length; i++) {
      this.destination.cars[i] = this.car1[i];
    }
    for (var i = 0; i < this.time1.length; i++) {
      this.destination.departure_times[i] = this.time1[i];
    }

    console.log(this.destination);

    this._service.updatedestination(this.destination).subscribe((data) => {
      console.log(data);
      this.openSnackBar("Update Destination successfully ..");
      this._router.navigate(['dashboard']);
    }, (error) => {
      console.log(error);
    })
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, " ", {
      duration: 5000,
    });
  }
}
