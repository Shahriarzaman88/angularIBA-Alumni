import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../Models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  readonly baseUrl = 'https://localhost:7035/api';

 public getEvents(url:any) : Observable<any>
 {
  return this.http.get(this.baseUrl + url);
 }


  
  
}
