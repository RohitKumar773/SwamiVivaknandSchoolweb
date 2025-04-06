import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmBoxComponent } from '../confirm-box/confirm-box.component';
import { AddTransportZoneFormComponent } from '../add-transport-zone-form/add-transport-zone-form.component';
import { CrudService } from 'src/app/Services/crud.service';
import { Vehicle, Zone, ZoneRes } from 'src/app/interface/vehicle.interface';

@Component({
  selector: 'app-transport-zone',
  templateUrl: './transport-zone.component.html',
  styleUrls: ['./transport-zone.component.scss'],
})
export class TransportZoneComponent {
  Zone_data: Zone[] = []
  allVehicles: Vehicle[] = [];
  selectedZone: any = null;
  selectedVehicles: Vehicle[] = [];
  constructor(
    private dialog: MatDialog,
    private _crud: CrudService

  ) {
    this.getData()
    this._crud.getTransportVehicle().subscribe((res: any) => {
      this.allVehicles = res.data;
    });
  }


  getData() {
    this._crud.getZone_api().subscribe(
      (res: ZoneRes) => {
        if (Array.isArray(res.data)) {
          this.Zone_data = res.data
        }
        console.log(res);

      }
    )
  }


  showVehicles(zone: any) {
    if (this.selectedZone === zone) {
      // toggle off
      this.selectedZone = null;
      this.selectedVehicles = [];
      return;
    }

    const vehicleIds = zone.vechicle_id.split(',').map((id: string) => parseInt(id.trim(), 10));
    this.selectedVehicles = this.allVehicles.filter(v => vehicleIds.includes(v.id));
    this.selectedZone = zone;
  }

  delete_application(id: any) {
    const openDig = this.dialog.open(ConfirmBoxComponent, {
      disableClose: true,
    });

    openDig.afterClosed().subscribe(
      (res) => {
        if (res == 1) {
          this._crud.deleteZone_apil(id).subscribe(
            (res) => {
              console.log(res);
              if (res.success == 1) {
                this.getData()
              }
            }
          )
        }
      }
    )
  }

  add_new_zone() {
    this.dialog.open(AddTransportZoneFormComponent, {
      disableClose: true,
    });
  }
}
