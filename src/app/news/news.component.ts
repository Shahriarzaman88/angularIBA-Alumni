import { Component, OnInit } from '@angular/core';

import { News } from '../Models/news';
import {NewsService} from '../shared/news.service'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private NewsService: NewsService) { }

  newses: News[] = [];
  

  ngOnInit(): void {
    this.newses = this.NewsService.getNews();
    console.log(this.newses);
  }

}
