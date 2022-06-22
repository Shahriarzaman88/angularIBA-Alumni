import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserService } from './shared/user.service';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { AboutComponent } from './about/about.component';
import { QuicklinkComponent } from './quicklink/quicklink.component';
import { NewsComponent } from './news/news.component';
import { EventComponent } from './event/event.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './user/login/login.component';
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { AboutDescriptionComponent } from './about/about-description/about-description.component';
import { QuicklinkDescriptionComponent } from './quicklink/quicklink-description/quicklink-description.component';
import { QuicklinkListComponent } from './quicklink/quicklink-list/quicklink-list.component';
import { SponsorListComponent } from './sponsor/sponsor-list/sponsor-list.component';
import { EventEditComponent } from './event/event-edit/event-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    HomeComponent,
    NavbarComponent,
    SlideshowComponent,
    AboutComponent,
    QuicklinkComponent,
    NewsComponent,
    EventComponent,
    SponsorComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    EventDetailComponent,
    EventListComponent,
    NewsListComponent,
    NewsDetailComponent,
    AboutDescriptionComponent,
    QuicklinkDescriptionComponent,
    QuicklinkListComponent,
    SponsorListComponent,
    EventEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
