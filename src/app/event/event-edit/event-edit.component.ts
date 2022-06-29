import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventService } from 'src/app/shared/event.service';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {

  @Input() event?: Event;
  @Output () eventsUpdated = new EventEmitter<Event[]>();

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
  }
  createEvent(event: Event)
  {
    //this.eventService.createEvent(event).subscribe((events: Event[]) => this.eventsUpdated.emit(events) );
  }
  updateEvent(event: Event)
  {
    //this.eventService.updateEvent(event).subscribe((events: Event[]) => this.eventsUpdated.emit(events) );
  }
  deleteEvent(event: Event)
  {
    //this.eventService.deleteEvent(event).subscribe((events: Event[]) => this.eventsUpdated.emit(events) );
  }

}
