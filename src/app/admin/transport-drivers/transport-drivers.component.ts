import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmBoxComponent } from '../confirm-box/confirm-box.component';
import { AddTrnsptVehicleFormComponent } from '../add-trnspt-vehicle-form/add-trnspt-vehicle-form.component';
import { AddDriverFormComponent } from '../add-driver-form/add-driver-form.component';
import { CrudService } from 'src/app/Services/crud.service';
import { Driver, DriverResponse } from 'src/app/interface/driver.interface';

@Component({
  selector: 'app-transport-drivers',
  templateUrl: './transport-drivers.component.html',
  styleUrls: ['./transport-drivers.component.scss'],
})
export class TransportDriversComponent implements OnInit {
  driverList: Driver[] = [];
  filterDriver: Driver[] = [];

  constructor(
    private dialog: MatDialog,
    private _crud: CrudService
  ) { }


  ngOnInit() {
    this.getdriver()
  }

  getdriver() {
    this._crud.getDriver().subscribe(
      (res: DriverResponse) => {
        console.log(res);
        this.driverList = res.data;
        this.filterDriver = res.data;
      },
      (err: Error) => {
        console.log(err);
      }
    )
  }

  onSearch(event: any) {
    const filter = event.target.value?.toLowerCase() || '';
    this.filterDriver = this.driverList.filter(data =>
      data?.driver_name?.toLowerCase().includes(filter) ||
      data?.mobile?.toString().includes(filter)
    )
  }

  delete_application(id: any) {
    const openDig = this.dialog.open(ConfirmBoxComponent, {
      disableClose: true,
    });

    openDig.afterClosed().subscribe(
      (res) => {
        if (res == 1) {
          this._crud.deleteDriver(id).subscribe(
            (res) => {
              console.log(res);
              if (res.success == 1) {
                this.getdriver()
              }
            }
          )
        }
      }
    )
  }

  add_new_zone() {
    const openDig = this.dialog.open(AddDriverFormComponent, {
      disableClose: true,
    });

    openDig.afterClosed().subscribe(() => {
      this.getdriver()
    })
  }
}
