import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, ResponseContentType } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpErrorResponse, HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  cpHeaders = new Headers({ 'Content-Type': 'application/json' });
  options = new RequestOptions({ headers: this.cpHeaders });
  constructor(private _http: Http) { }

  
  //destination 
  getAlldestination() {
    return this._http.get('http://192.168.8.105:8080/api/v1/destination', this.options)
      .pipe(map(res => res.json()) // or any other operator
      );
  }

  deletedestination(value) {
    return this._http.delete('http://192.168.8.105:8080/api/v1/destination/'+value, this.options)
      .pipe(map(res => res.json()) // or any other operator
      );
  }

  createdestination(destination) {
    return this._http.post('http://192.168.8.105:8080/api/v1/destination', JSON.stringify(destination), this.options)
      .pipe(map(res => res.json()) // or any other operator
      );
  }
  createuser(user) {
    return this._http.post('http://192.168.8.105:8080/api/v1/user', JSON.stringify(user), this.options)
      .pipe(map(res => res.json()) // or any other operator
      );
  }

  updatedestination(destination) {
    return this._http.put('http://192.168.8.105:8080/api/v1/destination', JSON.stringify(destination), this.options)
    .pipe(map(res => res.json()) // or any other operator
      );
  }

  //transation 
  getAlltransation() {
    return this._http.get('http://192.168.8.105:8080/api/v1/transaction', this.options)
    .pipe(map(res => res.json()) // or any other operator
      );
  }


  destinationDetail(name) {
    return this._http.get('http://192.168.8.105:8080/api/v1/destination/'+name, this.options)
    .pipe(map(res => res.json()) // or any other operator
      );
  }


  user(username,password) {
    return this._http.get('http://192.168.8.105:8080/api/v1/user/'+username+'/'+password, this.options)
    .pipe(map(res => res.json()) // or any other operator
      );
  }

  createtransation(destination) {
    return this._http.post('http://192.168.8.105:8080/api/v1/transaction', JSON.stringify(destination), this.options)
    .pipe(map(res => res.json()) // or any other operator
      );
  }

  updateupdate(destination) {
    return this._http.put('http://192.168.8.105:8080/api/v1/transaction', JSON.stringify(destination), this.options)
    .pipe(map(res => res.json()) // or any other operator
      );
  }


  pdfReport(courses): Observable<Blob> {
    //let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    //cpHeaders.append({responseType: ResponseContentType.Blob});
    //let options = new RequestOptions({ headers: this.cpHeaders });
    //let options = new RequestOptions({responseType: ResponseContentType.Blob});

    let headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/pdf'
    });


    let options = new RequestOptions({ headers: headers });
    // Ensure you set the responseType to Blob.
    options.responseType = ResponseContentType.Blob;

    return this._http.post('http://192.168.8.108:8081/pdfreport', JSON.stringify(courses), options)
      .pipe(map((response: Response) => new Blob([response.blob()], { type: "application/pdf" })) // or any other operator
      );
  }

}
