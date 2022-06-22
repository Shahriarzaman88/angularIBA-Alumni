import { Injectable } from '@angular/core';
import { News } from '../Models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

 public getNews() : News[]{
  let news = new News();
  news.id = 1;
  news.newsHeading = "1st News Head";
  news.newsDescription= "Business Case Competition 2022, Organized by IBA in collaboration with HSBC, came to a successful conclusion on 27th of May at Sheraton Dhaka. Notable attendees included, chief guest of the ceremony, Md. Tofazzel Hossain Miah, Senior Secretary, Prime Minister's Office, special guest Faruque Hassan, President of BGMEA, Md Mahbub ur Rahman, CEO of HSBC Bangladesh and Prof. Mohammad A. Momen, Director, IBA. Upholding the legacy of previous teams from IBA, this year's competition was a clean sweep, with 3 of the winning teams being from IBA. Team Ramen consisting of Afnan Faruk, Syed Shadab Tajwar, Abdullah Azwad Rafeed and Sadman Sakib Pantho from BBA 27th, IBA were announced the meritorious champions, with Team Extra Drill, consisting of Sibbir Riyan, Akibur Rahman, Ferdous Hasan and Faiyaz Uddin Ayeshik bagging the first runners-up position and Felix Felicis, consisting of Sadid Murshed, Rifayat Zafeer Wafee, Tasmim Sultana and Basma Rahman swept the second runners-up position in the grand finale of the competition. This was the 6th national round win for an IBA team at the HSBC-IBA Business Case Competition.";
  news.newsWrittenBy = "Writer of the News"
  news.newsLocation = "News 1st Location";
  news.newsDate = "Date of the News";
  news.newsTime = "Time of the News";

  return [news];

 }


  
  
}
