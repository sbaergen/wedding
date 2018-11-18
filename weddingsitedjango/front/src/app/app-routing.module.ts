import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccomodationsComponent } from './accomodations/accomodations.component';
import { EventComponent } from './event/event.component';
import { PhotosComponent } from './photos/photos.component';
import { RegistryComponent } from './registry/registry.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'accomodations', component: AccomodationsComponent },
    { path: 'event', component: EventComponent },
    { path: 'home', component: HomeComponent },
    { path: 'photos', component: PhotosComponent },
    { path: 'registry', component: RegistryComponent },
    { path: 'rsvp', component: RsvpComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
