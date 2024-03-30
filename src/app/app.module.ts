import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { EventListingComponent } from './components/event-listing/event-listing.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { TicketDetailsComponent } from './components/ticket-details/ticket-details.component';
import { TicketListingComponent } from './components/ticket-listing/ticket-listing.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventListingComponent,
    EventDetailsComponent,
    TicketDetailsComponent,
    TicketListingComponent,
    NavigationComponent,
    FooterComponent,
    NotificationsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
