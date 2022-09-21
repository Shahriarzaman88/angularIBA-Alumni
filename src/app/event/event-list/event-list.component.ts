import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../../Models/event';
import {EventService} from '../../shared/event.service'


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  

  constructor(private EventService: EventService, private router: Router, private route: ActivatedRoute) { }

  events: Event[] = [];
  eventToEdit?: Event;

  i = 0;
  

  ngOnInit(): void {
    this.getEvents();
    console.log(this.events);
    
  }
  getEvents() {
    this.EventService.getEvents("Event").subscribe(

      (res) => {
        this.events = res
        console.log(this.events, "Event List");
        this.i ++
      },
      (err) => {
        console.log("Error");
      }

    )
  }

  getEventById(id){
    let url= "Event/" + id
    
    this.EventService.getEventsById(url).subscribe(

      (res) => {
        //this.subsUser = res.body
        this.events = res
        console.log(this.events, "Event ID called");
        //console.log(this.subsUser);
      },
      (err) => {
        console.log("Error");
      }
    )
    
    }

  updateEventList(events: Event[]){
    this.events = events;
  }

  initNewEvent(){
    this.eventToEdit = new Event();
    this.router.navigate(['/event/eventEdit']);

  }
  editEvent(event: Event){
    this.eventToEdit = event;
    this.router.navigate(['/event/eventEdit']);
  }

  deleteEvent(event: Event)
  {
    this.EventService.deleteEvent(event.id).subscribe((events: Event[]) => this.getEvents() );
  }

}
