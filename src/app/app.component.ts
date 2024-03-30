import { Component } from '@angular/core';
import { Event } from './event';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EVENTMANAGANGULAR';
  selectedEvent: Event | undefined;

  onEventSelected(event: Event) {
    console.log(event);
    this.selectedEvent = event;
  }
}
