import { Component, OnInit } from '@angular/core';

import { News } from '../../Models/news';
import {NewsService} from '../../shared/news.service'

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  constructor(private NewsService: NewsService) { }

  newses: News[] = [];
  

  ngOnInit(): void {
    this.newses = this.NewsService.getNews();
    console.log(this.newses);
  }

}
