import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Event } from '../../Models/event';
import {EventService} from '../../shared/event.service'

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  constructor(private EventService: EventService, private route: ActivatedRoute) { }


  event: Event= new Event()

  ngOnInit(): void {
    //this.events = this.EventService.getEvents();
    this.route.params.subscribe(routeParams => {
      //this.loadUserDetail(routeParams.id);
      //this.getEvents(this.route.snapshot.paramMap.get('id'));
      this.getEvents(routeParams.id);
    });
    
    
  }
  getEvents(id) {
    let url= "Event/" + id
    this.EventService.getEventsById(url).subscribe(

      (res) => {
        this.event = res
        console.log(res, "Event List");
      },
      (err) => {
        console.log("Error");
      }

     
      
    )
  }
  

}
