import { Component, OnInit } from '@angular/core';

import { Quicklink } from '../../Models/quicklink';
import {QuicklinkService} from '../../shared/quicklink.service'

@Component({
  selector: 'app-quicklink-description',
  templateUrl: './quicklink-description.component.html',
  styleUrls: ['./quicklink-description.component.css']
})
export class QuicklinkDescriptionComponent implements OnInit {

  constructor(private QuicklinkService: QuicklinkService) { }

  quicklinks: Quicklink[] = [];
  

  ngOnInit(): void {
    this.quicklinks = this.QuicklinkService.getQuicklink();
    console.log(this.quicklinks);
  }
}
