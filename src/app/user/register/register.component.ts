import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';
import { ServiceService } from '../../service.service';
import { MatSnackBar } from '@angular/material';


@Component({

  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  list: String;
  destination: String;
  form: FormGroup
  amount: number ;
  seat:String;
  date=new Date().toJSON().slice(0,10).replace(/-/g,'/');
  car_number: String ;
  A: String[] = ["01", "02", "03", "04", "05"];
  B: String[] = ["06", "07", "08", "09", "10"];
  C: String[] = ["11", "12", "13", "14", "15"];
  D: String[] = ["16", "17", "18", "19", "20"];
  E: String[] = ["21", "22", "23", "24", "25"];
  F: String[] = ["26", "27", "28", "29", "30"];
  G: String[] = ["31", "22", "33", "34", "35"];

  constructor(private formBuilder: FormBuilder,private _service: ServiceService, private _router: Router,public snackBar: MatSnackBar) { }

  ngOnInit() {
    console.log(this.date)
    this.list = localStorage.getItem('time');
    this.destination = localStorage.getItem('destination');
    console.log(this.list)
    console.log(this.destination)

    this._service.destinationDetail(this.destination).subscribe((data) => {
      console.log(data);
      this.amount=data.amount;
      this.car_number=data.cars[0].carNumber;
    }, (error) => {
      console.log(error);
    })
  }


  open(lst) {
    console.log(lst);
    this.seat=lst;
  }
  

  onSubmit(value) {
    value.seat=this.seat;
    value.departureTime=this.list;
    value.destination=this.destination;
    value.createdOn=this.date;
    console.log(value);
    
    this._service.createtransation(value).subscribe((data) => {
      console.log(data);
      this._router.navigate(["home"])
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
