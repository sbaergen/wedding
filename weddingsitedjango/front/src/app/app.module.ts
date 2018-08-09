import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AccomodationsComponent } from './accomodations/accomodations.component';
import { EventComponent } from './event/event.component';
import { RegistryComponent } from './registry/registry.component';
import { PhotosComponent } from './photos/photos.component';
import { RsvpComponent, DoneDialog } from './rsvp/rsvp.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule, MatCardModule, MatInputModule, MatButtonModule, MatRadioModule, MatSelectModule, MatIconModule, MatDialogModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowErrorsComponent } from './show-errors/show-errors.component';

@NgModule({
  declarations: [
    AppComponent,
    AccomodationsComponent,
    EventComponent,
    RegistryComponent,
    PhotosComponent,
    RsvpComponent,
    HomeComponent,
    ShowErrorsComponent,
    DoneDialog,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatRadioModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
  ],
  entryComponents: [
    DoneDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
