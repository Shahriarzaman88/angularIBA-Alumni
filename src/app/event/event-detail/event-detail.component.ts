import { Component, OnInit } from '@angular/core';

import { Event } from '../../Models/event';
import {EventService} from '../../shared/event.service'

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  constructor(private EventService: EventService) { }

  events: Event[] = [];
  

  ngOnInit(): void {
    //this.events = this.EventService.getEvents();
    this.getEvents();
    console.log(this.events);
  }
  getEvents() {
    this.EventService.getEvents("Event").subscribe(

      (res) => {
        this.events = res
        console.log(this.events, "Event List");
      },
      (err) => {
        console.log("Error");
      }

     
      
    )
  }
  

}
