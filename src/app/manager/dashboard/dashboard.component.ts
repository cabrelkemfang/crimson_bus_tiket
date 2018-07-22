import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ELEMENT_DATA:String[];
  displayedColumns: string[] = [ 'name', 'surname', 'sit'];
  dataSource = ELEMENT_DATA;

  constructor(private _router: Router,public snackBar: MatSnackBar,private _service: ServiceService,) { }

  ngOnInit() {
    this._service.getAlldestination()
    .subscribe((data) => {
      this.ELEMENT_DATA = data;
      console.log(this.ELEMENT_DATA);

    },
      (error) => { console.log(error) })

   // this.ELEMENT_DATA=["Yaounde","Douala","Bafoussam","Bamenda"];
  }
  edit(element){
    localStorage.setItem('destination', JSON.stringify(element));
    this._router.navigate(['/edit-destination']);
  }
  delete(element){
    console.log(element);
    this._service.deletedestination(element.id).subscribe((data) => {
      this.ELEMENT_DATA.splice(this.ELEMENT_DATA.indexOf(element), 1);
      //
    }, ((error) => {
      console.log((error));
    }))

    setTimeout(() => {
      this._service.getAlldestination()
    .subscribe((data) => {
      this.ELEMENT_DATA = data;
      console.log(this.ELEMENT_DATA);

    },
      (error) => { console.log(error) })
    },
      2000);
    
    console.log(this.ELEMENT_DATA.indexOf(element));
    this.ELEMENT_DATA.splice(this.ELEMENT_DATA.indexOf(element), 1);

  }


}
export interface PeriodicElement {
  id: string;
  name: number;
  surname: number;
  sit: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  
];
