import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEventFormComponent } from '../add-event-form/add-event-form.component';
import { ConfirmBoxComponent } from '../confirm-box/confirm-box.component';
import { CrudService } from 'src/app/Services/crud.service';
import { Events, eventsResponse } from 'src/app/interface/event.interface';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit{

  eventList: Events[] = []

  constructor(
    private dialog: MatDialog,
    private _crud:CrudService
  ) {}


  ngOnInit(){
    this.getEvents()
  }

  eventForm() {
    this.dialog.open(AddEventFormComponent, {
      disableClose: true,
    });
  }

  getEvents(){
    this._crud.getAllEvents().subscribe(
      (res:eventsResponse) => {
        if(Array.isArray(res.data)){
          this.eventList = res.data
        }
      }
    )
  }

  delete_application() {
    this.dialog.open(ConfirmBoxComponent, {
      disableClose: true,
    });
  }
}
