import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../services/event.service';
import { Event } from '../../event';
@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.css'
})
export class EventDetailsComponent implements OnInit{
  @Input() event !:Event;
  eventId!: number;
  /**
   *
   */
  constructor(private route: ActivatedRoute, private eventService: EventService) {
    
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.eventId = +params['id'];
      this.fetchEventDetails();
    });
  }

  fetchEventDetails() {
    this.eventService.getEventById(this.eventId).subscribe((event: any) => {
      this.event = event;
    });
  }

}
