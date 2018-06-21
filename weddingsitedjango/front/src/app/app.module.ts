import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AccomodationsComponent } from './accomodations/accomodations.component';
import { EventComponent } from './event/event.component';
import { RegistryComponent } from './registry/registry.component';
import { PhotosComponent } from './photos/photos.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AccomodationsComponent,
    EventComponent,
    RegistryComponent,
    PhotosComponent,
    RsvpComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
