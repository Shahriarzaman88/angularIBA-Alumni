import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../Models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  readonly baseUrl = 'https://localhost:7035/api/';

 public getEvents(url:any) : Observable<any>
 {
  return this.http.get(this.baseUrl + url);
 }

 public getEventsById(url:any) : Observable<any>
 {
  return this.http.get(this.baseUrl + url);
 }

 public updateEvent(event: Event) : Observable<any>
 {
  return this.http.put(this.baseUrl, event);
 }

 public createEvent(event: Event) : Observable<any>
 {
  return this.http.post(this.baseUrl, event);
 }


 //public deleteEvent(event: Event) : Observable<any>
 //{
  //return this.http.delete(this.baseUrl, (event.id));
 //}

 

  
  
}
