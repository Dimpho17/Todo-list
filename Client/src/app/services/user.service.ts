import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  //this is the base URL that has all the paths// 

  private apiUrl = `http://localhost:5000/api/auth`

  constructor(private http: HttpClient) { }


  register(user:User): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/register`,user);
  }
  



}
