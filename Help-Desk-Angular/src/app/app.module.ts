import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AllTicketsComponent } from './all-tickets/all-tickets.component';
import { CompletedTicketsComponent } from './completed-tickets/completed-tickets.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TicketUpdateComponent } from './ticket-update/ticket-update.component';
import { NewRequestFormComponent } from './new-request-form/new-request-form.component';
import { TickethomeComponent } from './tickethome/tickethome.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AllTicketsComponent,
    CompletedTicketsComponent,
    FavoriteComponent,
    TicketUpdateComponent,
    NewRequestFormComponent,
    TickethomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
