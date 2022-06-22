import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {

  @Input() event?: Event;

  constructor() { }

  ngOnInit(): void {
  }
  createEvent(event: Event)
  {

  }
  updateEvent(event: Event)
  {

  }
  deleteEvent(event: Event)
  {

  }

}
