import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { ServiceService } from '../../service.service';

@Component({

  templateUrl: './list-destination.component.html',
  styleUrls: ['./list-destination.component.css']
})
export class ListDestinationComponent implements OnInit {
 douala:String[]=["6:00AM","9:00AM","12:00AM","15:00AM","18:00AM","20:00AM"];
 yaounde:String[]=["6:00AM","9:00AM","12:00AM","15:00AM","18:00AM","20:00AM"];
 bafoussam:String[]=["9:00AM"];
 bamenda:String[]=["9:00AM","22:00AM"];
 yaounde1="Yaounde";
 bamenda1="Bamenda";
 bafoussam1="Bafoussam";
 douala1="Daouala";
 ELEMENT_DATA ;
  constructor(private _router: Router,public snackBar: MatSnackBar,private _service: ServiceService,) { }
  ngOnInit() {
    this._service.getAlldestination()
    .subscribe((data) => {
      this.ELEMENT_DATA = data;
      console.log(this.ELEMENT_DATA);

    },
      (error) => { console.log(error) })
  } 
  open(list,value){
    localStorage.setItem('time', list.time);
    localStorage.setItem('destination', value);

    this._router.navigate(['register']);
  }

}

