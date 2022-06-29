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
    //this.getEventById();
    

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


  getEventById(id:any){
    
    this.EventService.getEventsById("Event").subscribe(

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
  

}
