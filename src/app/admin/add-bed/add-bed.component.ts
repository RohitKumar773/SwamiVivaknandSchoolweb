import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Room, RoomRes } from 'src/app/interface/hostel.interface';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-add-bed',
  templateUrl: './add-bed.component.html',
  styleUrls: ['./add-bed.component.scss']
})
export class AddBedComponent {
  Bed!: FormGroup
  admin = 1;
  profile_url: any;
  Rooms: Room[] = []

  constructor(
    private _crud: CrudService,
    private _fb: FormBuilder,
    private toastr: ToastrService,
    private matref: MatDialogRef<AddBedComponent
    >
  ) {
    this.Bed = this._fb.group({
      room_no: ['', Validators.required],
      bed_no: ['', Validators.required],
    })
  }

  ngOnInit() {

    this._crud.getRooms().subscribe(
      (res: RoomRes) => {
        if (Array.isArray(res.data)) {
          this.Rooms = res.data
        }
      }
    )
  }

  onSubmit() {
    this._crud.addBed(this.Bed.value).subscribe(
      (res) => {
        console.log(res);
        this.toastr.success('Bed added successfully', 'Success')
        this.matref.close();
      },
      (err: Error) => {
        console.log(err);
        this.toastr.error('Please check your connection', 'Internet Error');
      }
    )

  }

  resetForm() {
    this.Bed.reset()
  }

}
