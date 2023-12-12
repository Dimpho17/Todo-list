import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Items } from '../interfaces/items';
import  {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private apiUrl = `http://localhost:5000/api/auth`;


  constructor(private http: HttpClient) {}

  add(title: string, description: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create`, {title, description});

  }

  read(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/read`);

  }


remove(id: string): Observable<any>{
  return this.http.delete<any>(`${this.apiUrl}/delete/${id}`);

}

update(items: Items, id: string  ): Observable<any> {
  return this.http.put<any>(`${this.apiUrl}"/update/${id}`, items);
}

}