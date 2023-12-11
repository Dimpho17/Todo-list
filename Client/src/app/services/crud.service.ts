import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Items } from '../interfaces/items';
import  {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private apiUrl = `http://localhost:5000/api/auth`

  constructor(private http: HttpClient) {}

  add(items:Items):
