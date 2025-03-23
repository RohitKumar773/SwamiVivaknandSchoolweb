import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { VehicleResponse } from 'src/app/interface/vehicle.interface';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-add-trnspt-vehicle-form',
  templateUrl: './add-trnspt-vehicle-form.component.html',
  styleUrls: ['./add-trnspt-vehicle-form.component.scss']
})
export class AddTrnsptVehicleFormComponent implements OnInit {
  vehicleForm!: FormGroup
  admin = 1;

  constructor(
    private _fb: FormBuilder,
    private _crud:CrudService,
    private matref:MatDialogRef<AddTrnsptVehicleFormComponent>,
    private toastr:ToastrService
  ) {
    this.vehicleForm = this._fb.group({
      id: [''],
      vehicle_name: ['', Validators.required],
      vehicle_no: ['', Validators.required],
      admin_id_fk: ['', Validators.required]
    })
  }

  ngOnInit() { }

  onSubmit() {
    this._crud.addVehicle(this.vehicleForm.value).subscribe(
      (res:VehicleResponse) => {
        console.log(res);
        this.matref.close()
        this.toastr.success('Vehicle added successfully', 'Success');
      },
      (err:Error) => {
        console.log(err);
        this.toastr.error('Please Check your internet connection', 'Network Error')
      }
    )

  }

  resetForm() { }

}
