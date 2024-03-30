import { Injectable } from '@angular/core';
import { Event } from '../event';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EventService {
  private events: Event[] = [
    { id: 1, title: 'Football Game', date: new Date('2024-04-15'), location: 'parc des princes', category: 'Sports', teams: ['PSG', 'FCB'] ,availableTickets:200,ticketPrice:50},
    { id: 2, title: 'Movie Screening', date: new Date('2024-04-20'), location: 'Cinema B', category: 'Entertainment', movieName: 'Example Movie' ,availableTickets:100, ticketPrice:60},
    { 
      id: 3, 
      title: 'Concert', 
      date: new Date('2024-04-25'), 
      location: 'Arena Concert Hall', 
      category: 'Music', 
      availableTickets: 150, 
      ticketPrice: 75 
    },
    { 
      id: 4, 
      title: 'Tech Conference', 
      date: new Date('2024-05-01'), 
      location: 'Tech Hub', 
      category: 'Technology', 
      availableTickets: 80, 
      ticketPrice: 100 
    },{ 
      id: 5, 
      title: 'Basketball Match', 
      date: new Date('2024-04-18'), 
      location: 'Madison Square Garden', 
      category: 'Sports', 
      teams: ['Lakers', 'Nets'], 
      availableTickets: 150, 
      ticketPrice: 40 
    },
    { 
      id: 6, 
      title: 'Tennis Tournament', 
      date: new Date('2024-04-22'), 
      location: 'Wimbledon', 
      category: 'Sports', 
      teams: ['Federer', 'Nadal'], 
      availableTickets: 300, 
      ticketPrice: 70 
    },{ 
      id: 7, 
      title: 'Movie Premiere', 
      date: new Date('2024-04-25'), 
      location: 'Hollywood Theater', 
      category: 'Entertainment', 
      movieName: 'New Release Movie', 
      availableTickets: 120, 
      ticketPrice: 65 
    },
    { 
      id: 8, 
      title: 'Classic Film Screening', 
      date: new Date('2024-04-28'), 
      location: 'Retro Cinema', 
      category: 'Entertainment', 
      movieName: 'Classic Movie', 
      availableTickets: 80, 
      ticketPrice: 50 
    },
  ];
  constructor() { }
  // Method to fetch all events
  getEvents(): Observable<Event[]> {
    return of(this.events);
  }

  // Method to fetch event by ID
  getEventById(id: number): Observable<Event| undefined> {
    const event = this.events.find(e => e.id === id);
    return of(event);
  }
  getEventByCategory(Category: string): Observable<Event[] | undefined>{
    const events = this.events.filter(e => e.category == Category)
    return of(events);
  }
  buyEventTicket(id: number, numberTickets: number): void {
    const availableTickets = this.getTicketsNumber(id);
    const event = this.events.find(e => e.id === id);
    if (availableTickets < numberTickets) {
      console.log('Not enough tickets available.');
      return;
    }
    event ? event.availableTickets-= numberTickets: 0;
    console.log(`Successfully purchased ${numberTickets} tickets for event ${id}.`);

  }
  
  getTicketsNumber(id: number): number {
    const event = this.events.find(e => e.id == id);
    return event ? event.availableTickets : 0;
  }
  
}
