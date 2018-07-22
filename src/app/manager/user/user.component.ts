import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../service.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private _router: Router, private _service: ServiceService,public snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  onSubmit(value){
    console.log(value)
    this._service.createuser(value)
    .subscribe((data) => {
      console.log(data);
      this._router.navigate(["dashboard"])

    },
      (error) => { console.log(error) })
  }
}
