import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Student, StudentResponse } from 'src/app/interface/student.interface';
import { CrudService } from 'src/app/Services/crud.service';
import { AddAlocateHostalComponent } from '../add-alocate-hostal/add-alocate-hostal.component';
import { ConfirmBoxComponent } from '../confirm-box/confirm-box.component';
import { AssignHostel, AssignHostelRes } from 'src/app/interface/hostel.interface';

@Component({
  selector: 'app-allocate-hostel',
  templateUrl: './allocate-hostel.component.html',
  styleUrls: ['./allocate-hostel.component.scss']
})
export class AllocateHostelComponent {
  AssignHostel: AssignHostel[] = [];
  filterHostel: AssignHostel[] = [];

  constructor(
    private dialog: MatDialog,
    private _crud: CrudService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.getData()
  }

  getData() {
    this._crud.getAssignHostel().subscribe(
      (res: AssignHostelRes) => {
        console.log(res)
        if (Array.isArray(res.data)) {
          this.AssignHostel = res.data
          this.filterHostel = res.data
        }
      }
    )
  }
  add_new_std() {
    const openDig = this.dialog.open(AddAlocateHostalComponent, {
      disableClose: true,
    });

    openDig.afterClosed().subscribe(() => {
      this.getData();
    });
  }


  delete_application(id: any) {
    console.log(this.filterHostel)
    console.log(id);
    const openDig = this.dialog.open(ConfirmBoxComponent, {
      disableClose: true,

    });

    openDig.afterClosed().subscribe(
      (res) => {
        console.log(res);
        if (res == 1) {
          this._crud.deleteAssignHostel(id).subscribe(
            (res) => {
              console.log(res);
              if (res.success == 1) {
                this.getData()
                this.toastr.success('Allocated Deleted Successfully', 'Success')
              }
            }
          )
        }
      }
    )
  }

  onSearch(event: any) {
    const filter = event.target.value.toLowerCase() || '';
    this.filterHostel = this.AssignHostel.filter(data =>
      (data.std_name?.toLowerCase().includes(filter) || data.std_mobile.toString().includes(filter))
    );
  }

}
