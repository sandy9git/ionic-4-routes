import { Component, OnInit } from '@angular/core';
import { EventsService, Event } from '../events.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.page.html',
  styleUrls: ['./event-details.page.scss'],
})
export class EventDetailsPage implements OnInit {
  event: Event;

  constructor(public eventsService: EventsService,
    public route: ActivatedRoute) {
    const id = this.route.snapshot.params.id;
    this.event = this.eventsService.getEventById(id);
  }

  ngOnInit() {
  }

}
