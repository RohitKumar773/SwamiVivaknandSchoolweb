import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Vehicle, VehicleResponse } from 'src/app/interface/vehicle.interface';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-add-transport-zone-form',
  templateUrl: './add-transport-zone-form.component.html',
  styleUrls: ['./add-transport-zone-form.component.scss']
})
export class AddTransportZoneFormComponent implements OnInit {
  vehicleList: Vehicle[] = []
  zoneForm!: FormGroup;
  admin = 1

  constructor(
    private _crud: CrudService,
    private _fb: FormBuilder
  ) {
    this.zoneForm = this._fb.group({
      vehicle: ['', Validators.required],
      zone: ['', Validators.required],
      admin_id_fk: ['', Validators.required]
    })
  }

  ngOnInit() {
    this._crud.getTransportVehicle().subscribe(
      (res: VehicleResponse) => {
        console.log(res);
        this.vehicleList = res.data;
      }
    )
  }

  onSubmit() { 
    console.log(this.zoneForm.value);
    
  }

}
