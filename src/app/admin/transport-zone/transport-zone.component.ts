import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmBoxComponent } from '../confirm-box/confirm-box.component';
import { AddTransportZoneFormComponent } from '../add-transport-zone-form/add-transport-zone-form.component';

@Component({
  selector: 'app-transport-zone',
  templateUrl: './transport-zone.component.html',
  styleUrls: ['./transport-zone.component.scss'],
})
export class TransportZoneComponent {
  constructor(private dialog: MatDialog) {}

  delete_application() {
    this.dialog.open(ConfirmBoxComponent, {
      disableClose: true,
    });
  }

  add_new_zone() {
    this.dialog.open(AddTransportZoneFormComponent, {
      disableClose: true,
    });
  }
}
