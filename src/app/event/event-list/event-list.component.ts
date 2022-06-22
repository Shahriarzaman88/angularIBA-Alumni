import { Component, OnInit } from '@angular/core';
import { Event } from '../../Models/event';
import {EventService} from '../../shared/event.service'


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  constructor(private EventService: EventService) { }

  events: Event[] = [];
  

  ngOnInit(): void {
    //this.events = this.EventService.getEvents();
    console.log(this.events);
  }
}
