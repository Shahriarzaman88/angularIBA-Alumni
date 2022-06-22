import { Component, OnInit } from '@angular/core';

import { News } from '../../Models/news';
import {NewsService} from '../../shared/news.service'

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

  constructor(private NewsService: NewsService) { }

  newses: News[] = [];
  

  ngOnInit(): void {
    this.newses = this.NewsService.getNews();
    console.log(this.newses);
  }
}
