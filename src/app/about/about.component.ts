import { Component, OnInit } from '@angular/core';

import { About } from '../Models/about';
import { AboutService } from '../shared/about.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private AboutService: AboutService) { }

  about: About[] = [];
  

  ngOnInit(): void {
    this.about = this.AboutService.getAbout();
    console.log(this.about);
  }

}
