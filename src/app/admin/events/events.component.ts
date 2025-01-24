import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEventFormComponent } from '../add-event-form/add-event-form.component';
import { ConfirmBoxComponent } from '../confirm-box/confirm-box.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent {
  constructor(private dialog: MatDialog) {}

  eventForm() {
    this.dialog.open(AddEventFormComponent, {
      disableClose: true,
    });
  }

  delete_application() {
    this.dialog.open(ConfirmBoxComponent, {
      disableClose: true,
    });
  }
}
