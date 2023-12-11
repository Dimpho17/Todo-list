import { Injectable } from '@angular/core';
import { Login } from '../interfaces/login';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {


  //this is the base URL that has all the paths// 

  private apiUrl = `http://localhost:5000/api/auth`

  constructor(private http: HttpClient) { }

  register(user:User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, user);
  }

  login(login:Login): Observable<any> {
    console.log(login)
    return this.http.post<any>(`${this.apiUrl}/login`, login);
  }




}
