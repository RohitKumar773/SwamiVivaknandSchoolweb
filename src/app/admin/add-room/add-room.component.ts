import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.scss']
})
export class AddRoomComponent {
  Room!: FormGroup
  admin = 1;
  profile_url: any;

  constructor(
    private _crud: CrudService,
    private _fb: FormBuilder,
    private toastr: ToastrService,
    private matref: MatDialogRef<AddRoomComponent
    >
  ) {
    this.Room = this._fb.group({
      room_no: ['', Validators.required],
    })
  }

  ngOnInit() {

  }

  onSubmit() {
    this._crud.addRooms(this.Room.value).subscribe(
      (res) => {
        console.log(res);
        this.toastr.success('Room added successfully', 'Success')
        this.matref.close();
      },
      (err: Error) => {
        console.log(err);
        this.toastr.error('Please check your connection', 'Internet Error');
      }
    )

  }

  resetForm() {
    this.Room.reset()
  }

}
