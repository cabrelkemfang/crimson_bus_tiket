import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatSnackBar} from '@angular/material';
import { Router } from '@angular/router';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-view-clients',
  templateUrl: './view-clients.component.html',
  styleUrls: ['./view-clients.component.css']
})
export class ViewClientsComponent implements OnInit {
  displayedColumns = ['id', 'course_code','course_title','course_title1','course_title2', 'course_value', 'course_status', 'course_master','course_master1'];
   ELEMENT_DATA;

  constructor(private _router: Router,public snackBar: MatSnackBar,private _service: ServiceService,) { }

  ngOnInit() {
    this._service.getAlltransation()
    .subscribe((data) => {
      this.ELEMENT_DATA = data;
      console.log(this.ELEMENT_DATA);

    },
      (error) => { console.log(error) })
  }

  printpdf(){
    this._service.pdfReport(this.ELEMENT_DATA).subscribe(blob => {
      var downloadUrl = URL.createObjectURL(blob);
      window.open(downloadUrl);
     }, (error) => {
          console.log(error);
        })

  
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

