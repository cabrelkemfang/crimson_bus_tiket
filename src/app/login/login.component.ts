import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { ServiceService } from '../service.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  ELEMENT_DATA;
  constructor(private _router: Router, public snackBar: MatSnackBar, private _service: ServiceService, ) { }

  ngOnInit() {

  }

  onSubmit(value) {
   /* this._service.user(value.Username, value.password)
      .subscribe((data) => {
        console.log(data.present);
        if (data.present) {
         
        } else {
          this._router.navigate(['./dashboard']);
          this.openSnackBar("The have been created successfully");
        }
      },
        (error) => { console.log(error) })
*/
this._router.navigate(['./dashboard']);
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, " ", {
      duration: 5000,
    });
  }
}
