import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmBoxComponent } from '../confirm-box/confirm-box.component';
import { AddTrnsptVehicleFormComponent } from '../add-trnspt-vehicle-form/add-trnspt-vehicle-form.component';
import { AddDriverFormComponent } from '../add-driver-form/add-driver-form.component';

@Component({
  selector: 'app-transport-drivers',
  templateUrl: './transport-drivers.component.html',
  styleUrls: ['./transport-drivers.component.scss'],
})
export class TransportDriversComponent {
  constructor(private dialog: MatDialog) {}

  delete_application() {
    this.dialog.open(ConfirmBoxComponent, {
      disableClose: true,
    });
  }

  add_new_zone() {
    this.dialog.open(AddDriverFormComponent, {
      disableClose: true,
    });
  }
}
