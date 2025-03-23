import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmBoxComponent } from '../confirm-box/confirm-box.component';
import { AddTrnsptVehicleFormComponent } from '../add-trnspt-vehicle-form/add-trnspt-vehicle-form.component';
import { CrudService } from 'src/app/Services/crud.service';
import { Vehicle, VehicleResponse } from 'src/app/interface/vehicle.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-transport-vehicle',
  templateUrl: './transport-vehicle.component.html',
  styleUrls: ['./transport-vehicle.component.scss']
})
export class TransportVehicleComponent implements OnInit {
  vehicleList: Vehicle[] = [];
  filterVehicle: Vehicle[] = [];


  constructor(
    private dialog: MatDialog,
    private _crud: CrudService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.getVehicle()
  }

  delete_application(id: any) {
    const openDig = this.dialog.open(ConfirmBoxComponent, {
      disableClose: true,
    });

    openDig.afterClosed().subscribe(
      (res) => {
        console.log(res);
        if (res == 1) {
          this._crud.deleteVehicle(id).subscribe(
            (res) => {
              console.log(res);
              if (res.success == 1) {
                this.getVehicle()
                this.toastr.success('Vehicle deleted successfully', 'Success')
              }
            },
            (err:Error) =>{
              console.log(err);
              this.toastr.error('Please Check Your internet', 'Network Error')
            } 
          )
        }
      }
    )
  }

  add_new_zone() {
    const openDig = this.dialog.open(AddTrnsptVehicleFormComponent, {
      disableClose: true,
    });

    openDig.afterClosed().subscribe(() => {
      this.getVehicle();
    })
  }

  getVehicle() {
    this._crud.getTransportVehicle().subscribe(
      (res: VehicleResponse) => {
        console.log(res);
        this.vehicleList = res.data
        this.filterVehicle = res.data
      },
      (err: Error) => {
        console.log(err);
      }
    )
  }

  onSearch(event: any) {
    const filter = event.target.value.toLowerCase() || '';
    this.filterVehicle = this.vehicleList.filter(data =>
      data?.vehicle_name?.toLowerCase().includes(filter) ||
      data?.vehicle_no?.toString().includes(filter)
    )
  }
}
