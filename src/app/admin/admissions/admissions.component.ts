import { AbstractType, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationFormComponent } from '../registration-form/registration-form.component';
import { ConfirmBoxComponent } from '../confirm-box/confirm-box.component';
import { CrudService } from 'src/app/Services/crud.service';
import { Student, StudentResponse } from 'src/app/interface/student.interface';
import { RegistrationViewComponent } from '../registration-view/registration-view.component';

@Component({
  selector: 'app-admissions',
  templateUrl: './admissions.component.html',
  styleUrls: ['./admissions.component.scss'],
})
export class AdmissionsComponent implements OnInit {
  studentList: Student[] = [];
  filterStudent: Student[] = [];
  searchValue: string = '';

  constructor(private dialog: MatDialog, private _crud: CrudService) { }

  ngOnInit() {
    this.getAllStudent();
  }

  add_new_std() {
    const openDig = this.dialog.open(RegistrationFormComponent, {
      disableClose: true,
    });

    openDig.afterClosed().subscribe(() => {
      this.getAllStudent();
    });
  }

  viewStd(std: any) {
    this.dialog.open(RegistrationViewComponent, {
      disableClose: true,
      data: std,
    })
  }

  onUpdate(data: any) {
    const openDig = this.dialog.open(RegistrationFormComponent, {
      disableClose: true,
      data: data,
    });

    openDig.afterClosed().subscribe(() => {
      this.getAllStudent();
    });
  }

  delete_application(id: any) {
    console.log(id);

    const openDig = this.dialog.open(ConfirmBoxComponent, {
      disableClose: true,

    });

    openDig.afterClosed().subscribe(
      (res) => {
        console.log(res);
        if (res == 1) {
          this._crud.StudentDelete(id).subscribe(
            (res) => {
              console.log(res);
              if (res.success == 1) {
                this.getAllStudent()
              }
            }
          )
        }
      }
    )
  }
  getAllStudent() {
    this._crud.getAllStudent().subscribe((res: StudentResponse) => {
      console.log(res.data);
      if (Array.isArray(res.data)) {
        this.studentList = res.data;
        this.filterStudent = res.data;
      }
    });
  }

  onSearch(event:any){
    const filter = event.target.value.toLowerCase() || '';
    console.log(filter);
    
    this.filterStudent = this.studentList.filter(data => (data.name.toLowerCase().includes(filter) || data.mobile.includes(filter))
      // data.name.toLowerCase().includes(filter) ||
      // data.father_name.toLowerCase().includes(filter) ||
      // data.roll_no.toLowerCase().includes(filter);
    )
    console.log(this.filterStudent);
    
  }
}