import { Component } from '@angular/core';
import { FacultySalaryRecordsAddComponent } from '../faculty-salary-records-add/faculty-salary-records-add.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-faculty-salary-records',
  templateUrl: './faculty-salary-records.component.html',
  styleUrls: ['./faculty-salary-records.component.scss']
})
export class FacultySalaryRecordsComponent {

  constructor(
    private dialog: MatDialog
  ) { }
  delete_record() { }

  getSalaryRec() {

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
