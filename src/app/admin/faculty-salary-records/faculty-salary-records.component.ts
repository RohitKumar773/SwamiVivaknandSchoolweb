import { Component } from '@angular/core';
import { FacultySalaryRecordsAddComponent } from '../faculty-salary-records-add/faculty-salary-records-add.component';
import { MatDialog } from '@angular/material/dialog';
import { CrudService } from 'src/app/Services/crud.service';
import { SalaryRecord } from 'src/app/interface/salary.interface';

@Component({
  selector: 'app-faculty-salary-records',
  templateUrl: './faculty-salary-records.component.html',
  styleUrls: ['./faculty-salary-records.component.scss']
})
export class FacultySalaryRecordsComponent {
  allSalaryRecords: SalaryRecord[] = []
  FilterSalaryRecords: SalaryRecord[] = []
  constructor(
    private dialog: MatDialog,
    private _crud: CrudService
  ) {
    this.getSalaryRec()
  }
  delete_record() { }

  getSalaryRec() {
    this._crud.get_salary_record().subscribe(
      (res) => {
        console.log(res);
        this.FilterSalaryRecords = res.data
        this.allSalaryRecords = res.data
      }
    )
  }

  PayNow() {
    const openDig = this.dialog.open(FacultySalaryRecordsAddComponent, {
      disableClose: true
    })

    openDig.afterClosed().subscribe(
      () => {
        this.getSalaryRec();
      }
    )

  }

}
