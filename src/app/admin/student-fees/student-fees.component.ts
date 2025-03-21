import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddStdFeeComponent } from '../add-std-fee/add-std-fee.component';

@Component({
  selector: 'app-student-fees',
  templateUrl: './student-fees.component.html',
  styleUrls: ['./student-fees.component.scss']
})
export class StudentFeesComponent {

  constructor(
    private dialog: MatDialog
  ) { }


  add_std_fee() {
    this.dialog.open(AddStdFeeComponent, {
      disableClose: true
    })
  }

}
