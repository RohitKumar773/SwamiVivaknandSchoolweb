import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Vehicle, VehicleResponse } from 'src/app/interface/vehicle.interface';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-add-transport-zone-form',
  templateUrl: './add-transport-zone-form.component.html',
  styleUrls: ['./add-transport-zone-form.component.scss']
})
export class AddTransportZoneFormComponent implements OnInit {
  zoneForm!: FormGroup;
  admin = 1

  vehicleList: Vehicle[] = [];

  constructor(
    private _crud: CrudService,
    private _fb: FormBuilder,
    private dialogRef: MatDialogRef<AddTransportZoneFormComponent>,
    private toastr:ToastrService
  ) {
    this.zoneForm = this._fb.group({
      vechicle_id: [[], Validators.required],
      zone_name: ['', Validators.required],
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
    if (this.zoneForm.invalid) {
      this.zoneForm.markAllAsTouched();
      return;
    }

    const formValue = this.zoneForm.value;
    const payload = {
      zone_name: formValue.zone_name,
      vechicle_id: formValue.vechicle_id.join(','), // convert array to string
      // admin_id_fk: formValue.admin_id_fk // if supported in your PHP API
    };
    this._crud.addZone_api(payload).subscribe((res) => {
      console.log(res);
      this.toastr.success('Zone added successfully', 'Success')
      this.dialogRef.close(true); // optionally close dialog on success
    });
  }

  resetForm(){
    this.zoneForm.reset()
  }
}
