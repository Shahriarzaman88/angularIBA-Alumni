import { Component, OnInit } from '@angular/core';

import { Quicklink } from '../Models/quicklink';
import {QuicklinkService} from '../shared/quicklink.service'

@Component({
  selector: 'app-quicklink',
  templateUrl: './quicklink.component.html',
  styleUrls: ['./quicklink.component.css']
})
export class QuicklinkComponent implements OnInit {

  constructor(private QuicklinkService: QuicklinkService) { }

  quicklinks: Quicklink[] = [];
  

  ngOnInit(): void {
    this.quicklinks = this.QuicklinkService.getQuicklink();
    console.log(this.quicklinks);
  }
}
