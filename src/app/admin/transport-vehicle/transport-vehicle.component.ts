import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmBoxComponent } from '../confirm-box/confirm-box.component';
import { AddTrnsptVehicleFormComponent } from '../add-trnspt-vehicle-form/add-trnspt-vehicle-form.component';

@Component({
  selector: 'app-transport-vehicle',
  templateUrl: './transport-vehicle.component.html',
  styleUrls: ['./transport-vehicle.component.scss']
})
export class TransportVehicleComponent {

  constructor(private dialog: MatDialog) {}

  delete_application() {
    this.dialog.open(ConfirmBoxComponent, {
      disableClose: true,
    });
  }

  add_new_zone() {
    this.dialog.open(AddTrnsptVehicleFormComponent, {
      disableClose: true,
    });
  }

}
