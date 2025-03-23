import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DriverResponse } from 'src/app/interface/driver.interface';
import { Vehicle, VehicleResponse } from 'src/app/interface/vehicle.interface';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-add-driver-form',
  templateUrl: './add-driver-form.component.html',
  styleUrls: ['./add-driver-form.component.scss']
})
export class AddDriverFormComponent implements OnInit {
  driverForm!: FormGroup
  admin = 1;
  imagePreview: string | null = null;
  profile_url: any;
  vehicleList: Vehicle[] = [];

  constructor(
    private _crud: CrudService,
    private _fb: FormBuilder,
    private toastr: ToastrService,
    private matref: MatDialogRef<AddDriverFormComponent>
  ) {
    this.driverForm = this._fb.group({
      id: [''],
      driver_name: ['', Validators.required],
      mobile: ['', Validators.required],
      adhar: ['', Validators.required],
      dl_no: ['', Validators.required],
      experience: ['', Validators.required],
      profile_img: [''],
      vehicle_no: ['', Validators.required],
      admin_id_fk: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.getVehicle()
  }

  getVehicle() {
    this._crud.getTransportVehicle().subscribe(
      (res: VehicleResponse) => {
        console.log(res);
        this.vehicleList = res.data
      }
    )
  }

  onFileSelected(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.profile_url = target.files?.[0];

    if (this.profile_url) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        this.imagePreview = e.target?.result as string;
      };
      reader.readAsDataURL(this.profile_url);
    }
  }
  validateMobile() {
    let mobileControl = this.driverForm.get('mobile');
    if (mobileControl) {
      let value = mobileControl.value;
      mobileControl.setValue(value.replace(/\D/g, ''));
    }
  }

  validateAdhar() {
    let adharControl = this.driverForm.get('adhar');
    if (adharControl) {
      let value = adharControl.value;
      adharControl.setValue(value.replace(/\D/g, ''));
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('driver_name', this.driverForm.get('driver_name')?.value);
    formData.append('mobile', this.driverForm.get('mobile')?.value);
    formData.append('adhar', this.driverForm.get('adhar')?.value);
    formData.append('dl_no', this.driverForm.get('dl_no')?.value);
    formData.append('experience', this.driverForm.get('experience')?.value);
    formData.append('vehicle_no', this.driverForm.get('vehicle_no')?.value);
    formData.append('admin_id_fk', this.driverForm.get('admin_id_fk')?.value);
    formData.append('profile_img', this.profile_url);

    this._crud.addDriver(formData).subscribe(
      (res: DriverResponse) => {
        console.log(res);
        this.toastr.success('Driver added successfully', 'Success')
        this.matref.close();
      },
      (err: Error) => {
        console.log(err);
        this.toastr.error('Please check your connection', 'Internet Error');
      }
    )

  }
  resetForm() {
    this.driverForm.reset()
  }
}
