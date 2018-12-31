import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { user } from '../user.model';
import { loginUser } from '../loginUser.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  form: FormGroup = new FormGroup({
    id:new FormControl(null),
    firstName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('', Validators.required),
    mobile: new FormControl('', [Validators.required, Validators.minLength(8)])   
  });

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  initializeFormGroup() {
    this.form.setValue({
      id:null,
      firstName: '',
      email: '',
      password: '',
      mobile: '',
    });
  }
  baseUrl = 'http://localhost:81/angularauth';
  constructor(private http: HttpClient) { }

  addUser(user: user){
    console.log(user);
    
    return this.http.post(`${this.baseUrl}/registration`, { data: user })
    // return this.http.post(`http://localhost:3000/users`, { data: user })
      // .pipe(map((res) => {
      //   // this.cars.push(res['data']);
      //   return this.cars;
      // }),
      // catchError(this.handleError));
  }

  loginUser(loginUser: loginUser){
    return this.http.post(`${this.baseUrl}/login`, { data: loginUser })
  }
}
