import { Component, OnInit } from '@angular/core';
import { Event } from '../Models/event';
import {EventService} from '../shared/event.service'

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  

  constructor(private EventService: EventService) { }
  
  events: Event[] = [];
  

  ngOnInit(): void {
    
    console.log(this.events);

    this.getEvents();
    

  }
  getEvents() {
    this.EventService.getEvents("Event").subscribe(

      (res) => {
        this.events = res
        console.log("Get User List Called");
        console.log(this.events, "User List");
      },
      (err) => {
        console.log("Error");
      }

     
      
    )
  }
  

}
