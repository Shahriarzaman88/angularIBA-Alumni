import { Component, OnInit } from '@angular/core';

import { Quicklink } from '../../Models/quicklink';
import {QuicklinkService} from '../../shared/quicklink.service'

@Component({
  selector: 'app-quicklink-list',
  templateUrl: './quicklink-list.component.html',
  styleUrls: ['./quicklink-list.component.css']
})
export class QuicklinkListComponent implements OnInit {

  constructor(private QuicklinkService: QuicklinkService) { }

  quicklinks: Quicklink[] = [];
  

  ngOnInit(): void {
    this.quicklinks = this.QuicklinkService.getQuicklink();
    console.log(this.quicklinks);
  }

}
