import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/shared/event.service';
import { Event } from '../../Models/event';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {

  event: Event= new Event()
  @Output () eventsUpdated = new EventEmitter<Event[]>();

  constructor(private eventService: EventService, private route: ActivatedRoute, private router: Router) { }

  

  ngOnInit(): void {
    if(this.route.snapshot.paramMap.get('type') == 'Edit'){
      this.getEventById(this.route.snapshot.paramMap.get('id'));
    }
  }



  updateEventList(event: Event[]){
    //this.event = event;
  }

  getEventById(id){
    let url= "Event/" + id
    
    this.eventService.getEventsById(url).subscribe(

      (res) => {
        //this.subsUser = res.body
        this.event = res
        console.log(this.event, "Event ID called");
        //console.log(this.subsUser);
      },
      (err) => {
        console.log("Error");
      }
    )
    
    }


  createEvent(event: Event)
  {
    this.eventService.createEvent(event).subscribe((events: Event[]) => this.eventsUpdated.emit(events) );
    
  }
  updateEvent(event: Event)
  {
    this.eventService.updateEvent(event).subscribe((events: Event[]) => this.eventsUpdated.emit(events) );
    console.log("Update called")
  }
  deleteEvent(event: Event)
  {
    this.eventService.deleteEvent(event.id).subscribe((events: Event[]) => this.eventsUpdated.emit(events) );
  }
  //this.router.navigate(['/event/eventList']);
}
