import { Component } from '@angular/core';
import { EventsService, Event } from '../events.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  events: Event[];

  constructor(public eventsService: EventsService) {
    this.events = eventsService.getAllEvents();
  }
}
