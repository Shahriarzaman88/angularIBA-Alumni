import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutDescriptionComponent } from './about/about-description/about-description.component';
import { AboutComponent } from './about/about.component';
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { EventEditComponent } from './event/event-edit/event-edit.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { EventComponent } from './event/event.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { NewsComponent } from './news/news.component';
import { QuicklinkDescriptionComponent } from './quicklink/quicklink-description/quicklink-description.component';
import { QuicklinkComponent } from './quicklink/quicklink.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { SponsorListComponent } from './sponsor/sponsor-list/sponsor-list.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  //{path:'', redirectTo:'/user/registration', pathMatch:'full'},
  {
    path: 'user', component: UserComponent,
    children:
      [
        { path: 'registration', component: RegistrationComponent }
      ]
  },
  {
    path: 'user', component: UserComponent,
    children:
      [
        { path: 'login', component: LoginComponent }
      ]
  },

  { path: 'nav', component: NavbarComponent },
  { path: 'slideshow', component: SlideshowComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'about', component: AboutComponent,
    children:
      [
        { path: 'description', component: AboutDescriptionComponent }
      ]
  },

  
  { path: 'quicklink', component: QuicklinkComponent },


  {
    path: 'quicklink', component: QuicklinkComponent,
    children:
      [
        { path: 'quicklinkDetail', component: QuicklinkDescriptionComponent }
      ]
  },

  { path: 'news', component: NewsComponent },


  {
    path: 'news', component: NewsComponent,
    children:
      [
        { path: 'newsDetail', component: NewsDetailComponent }
      ]
  },

  {
    path: 'news', component: NewsComponent,
    children:
      [
        { path: 'newsList', component: NewsListComponent }
      ]
  },

  { path: 'event', component: EventComponent },



  {
    path: 'event', component: EventComponent,
    children:
      [
        { path: 'eventDetail/:id', component: EventDetailComponent }
      ]
  },


  {
    path: 'event', component: EventComponent,
    children:
      [
        { path: 'eventList', component: EventListComponent }
      ]
  },
  {
    path: 'event', component: EventComponent,
    children:
      [
        { path: 'eventEdit', component: EventEditComponent }
      ]
  },
  { path: 'sponsor', component: SponsorComponent },
  {
    path: 'sponsor', component: SponsorComponent,
    children:
      [
        { path: 'sponsorList', component: SponsorListComponent }
      ]
  },



  { path: 'footer', component: FooterComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
