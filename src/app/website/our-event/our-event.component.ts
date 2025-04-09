import { Component, OnInit } from '@angular/core';
import { Events, eventsResponse } from 'src/app/interface/event.interface';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-our-event',
  templateUrl: './our-event.component.html',
  styleUrls: ['./our-event.component.scss']
})
export class OurEventComponent implements OnInit {
  eventList: Events[] = []

  constructor(
    private _crud: CrudService
  ) { }


  ngOnInit() {
    this.getEvent()
  }

  getEvent() {
    this._crud.getAllEvents().subscribe(
      (res: eventsResponse) => {
        console.log(res);
        this.eventList = res.data
      }
    )
  }
}
