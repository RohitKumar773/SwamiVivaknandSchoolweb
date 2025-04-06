import { Component } from '@angular/core';

@Component({
  selector: 'app-our-event',
  templateUrl: './our-event.component.html',
  styleUrls: ['./our-event.component.scss']
})
export class OurEventComponent {
  events = [
    {
      date: new Date(2025, 3, 10), // April 10, 2025
      title: 'Annual Science Fair',
      description: 'Students will showcase innovative science projects.'
    },
    {
      date: new Date(2025, 3, 20),
      title: 'Sports Day',
      description: 'Full-day sports competitions for all classes.'
    },
    {
      date: new Date(2025, 4, 5),
      title: 'Cultural Program',
      description: 'Dance, drama, and musical performances.'
    }
  ];
}
