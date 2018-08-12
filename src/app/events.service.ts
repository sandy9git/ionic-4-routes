import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EventsService {
  events: Event[];

  constructor() {
    this.events = [
      {
        id: '1',
        name: 'JSConf AU 2018',
        location: 'Melbourne',
        country: 'Australia',
        time: '12th Monday'
      },
      {
        id: '2',
        name: 'Ionic Conference',
        location: 'San Francisco',
        country: 'USA',
        time: '10th Wednesday'
      }
    ];
  }

  getAllEvents() {
    return this.events;
  }

  getEventById(id) {
    return this.events.find((event) => (event.id === id));
  }
}

export interface Event {
  id: string;
  name: string;
  location: string;
  country: string;
  time: string;
}
