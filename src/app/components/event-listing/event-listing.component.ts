import { Component, EventEmitter, OnInit ,Output} from '@angular/core';
import { Event } from '../../event';
import { EventService } from '../../services/event.service';
@Component({
  selector: 'app-event-listing',
  templateUrl: './event-listing.component.html',
  styleUrl: './event-listing.component.css'
})
export class EventListingComponent implements OnInit{
  @Output() eventSelected = new EventEmitter<Event>();
  public events!:Event[];
  ticketQuantities: { [eventId: number]: number } = {};
  constructor(private eventService: EventService) {
   
  }
  onEventClick(event: Event) {
    this.eventSelected.emit(event);
  }
  ngOnInit(): void {
      this.fetchEvents();
  }

  fetchEvents() {
    this.eventService.getEvents().subscribe((events: Event[]) => {
      this.events = events;
    });
  }
  buyEventTicket(eventId: number): void {
    const numberTickets = this.ticketQuantities[eventId] || 1; // Default to 1 ticket if no quantity specified
    const event = this.events.find(e => e.id === eventId);
    if (!event) {
      console.error('Event not found');
      return;
    }
    if (event.availableTickets < numberTickets) {
      console.error('Not enough tickets available.');
      return;
    }
    // Subtract the number of tickets from availableTickets
    event.availableTickets -= numberTickets;
    // Call a service method to save the updated event data
    //this.eventService.updateEvent(event).subscribe(() => {
      console.log(`Successfully purchased ${numberTickets} tickets for event ${eventId}`);
    
  }
  

}
