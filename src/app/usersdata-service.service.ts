import { Injectable } from '@angular/core';
import { Iusersstructure } from '../assets/data/usersstructure';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersdataServiceService {
  // Where is data
  private url: string = '../assets/data/users.json';
  // Injection ฝั่ง service
  constructor(private _http: HttpClient) { }
  // Use GET of HTTPClient Service
  getProducts(): Observable<Iusersstructure[]> {
    return this._http.get<Iusersstructure[]>(this.url);
  }
}
