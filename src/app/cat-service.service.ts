import { Injectable } from '@angular/core';
import { IcatStructure } from '../assets/data/catStructure';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatServiceService {
  // Where is data
  private url: string = 'http://localhost:3000/api/cats';
  // Injection ฝั่ง service
  constructor(private _http: HttpClient) { }
  // Use GET of HTTPClient Service
  getCatsData(): Observable<IcatStructure[]> {
    return this._http.get<IcatStructure[]>(this.url);
  }
}
