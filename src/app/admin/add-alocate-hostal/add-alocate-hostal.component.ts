import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { arrow } from '@popperjs/core';
import { ToastrService } from 'ngx-toastr';
import { map, Observable, startWith } from 'rxjs';
import { Bed, BedRes, Room, RoomRes } from 'src/app/interface/hostel.interface';
import { Student, StudentResponse } from 'src/app/interface/student.interface';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-add-alocate-hostal',
  templateUrl: './add-alocate-hostal.component.html',
  styleUrls: ['./add-alocate-hostal.component.scss']
})
export class AddAlocateHostalComponent {
  AssigendHostelForm!: FormGroup
  admin = 1;
  profile_url: any;
  Rooms: Room[] = []
  Bed: Bed[] = []
  std_list: Student[] = [];
  selectedStd: Student = {
    id: '',
    name: '',
    email: '',
    mobile: '',
    adhar: '',
    father_name: '',
    mother_name: '',
    password: '',
    profile: '',
    class: '',
    admin_id_fk: '',
    dob: '',
    gender: '',
    transport: '',
    section: '',
    roll_no: '',
    hostel: '',
    address: '',
    addmission_date: ''
  }
  filterStudent: Student[] = [];

  filteredOptions!: Observable<Student[]>;

  constructor(
    private _crud: CrudService,
    private _fb: FormBuilder,
    private toastr: ToastrService,
    private matref: MatDialogRef<AddAlocateHostalComponent>
  ) {
    this.AssigendHostelForm = this._fb.group({
      room_no: ['', Validators.required],
      bed_no: ['', Validators.required],
      number: ['', Validators.required],

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

    this.filteredOptions = this.AssigendHostelForm.get('number')!.valueChanges.pipe(
      startWith(''),
      map((value: string) => this.filter(value))
    );
    this.getStd()

  }

  private filter(value: string): Student[] {
    const filterValue = value.toLowerCase();
    return this.std_list.filter((option: Student) =>
      option.mobile.toString().toLowerCase().includes(filterValue) ||
      option.name.toLowerCase().includes(filterValue)
    );

  }

  getStd() {
    this._crud.getAllStudent().subscribe((res) => {
      if (Array.isArray(res.data)) {
        this.std_list = res.data;
      }
    });
  }

  onOptionSelected(option: Student) {
    console.log(option)
    this.selectedStd = option;
    this.AssigendHostelForm.patchValue({
      number: `${option.name} - ${option.mobile}`,
    });
  }


  onSubmit() {
    const data = {
      std_id: this.selectedStd.id,
      std_name: this.selectedStd.name,
      std_mobile: this.selectedStd.mobile,
      room_no: this.AssigendHostelForm.get('room_no')?.value,
      bed_no: this.AssigendHostelForm.get('bed_no')?.value,
    }

    if (this.AssigendHostelForm.valid) {
      this._crud.addAssignHostel(data).subscribe(
        (res) => {
          console.log(res);
          if (res.success == 1) {
            this.toastr.success('Assigen Hostel successfully', 'Success')
            this.matref.close();
          } else {
            this.toastr.success(`${res.message}`, 'Warning')
          }

        },
        (err: Error) => {
          console.log(err);
          this.toastr.error('Please check your connection', 'Internet Error');
        }
      )
    } else {
      this.toastr.error('Please Fill all the requred filds', 'Internet Error');

    }

  }

  onGetBed(event: any) {
    const roomNo = event.value;
    console.log(roomNo);

    this._crud.getBedByroom(roomNo).subscribe(
      (res: BedRes) => {
        console.log(res.data);
        if (Array.isArray(res.data)) {
          this.Bed = res.data
        }
      }
    )
  }

  resetForm() {
    this.AssigendHostelForm.reset()
  }

}
