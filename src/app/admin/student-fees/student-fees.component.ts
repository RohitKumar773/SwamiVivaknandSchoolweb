import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddStdFeeComponent } from '../add-std-fee/add-std-fee.component';
import { CrudService } from 'src/app/Services/crud.service';
import { StudentFee, StudentFeeRes } from 'src/app/interface/studentFees.interface';

@Component({
  selector: 'app-student-fees',
  templateUrl: './student-fees.component.html',
  styleUrls: ['./student-fees.component.scss']
})
export class StudentFeesComponent implements OnInit {
  studentFeeList: StudentFee[] = [];
  constructor(
    private dialog: MatDialog,
    private _crud: CrudService,
  ) { }

  ngOnInit() {
    this.getStdFee()
  }


  add_std_fee() {
    const openDig = this.dialog.open(AddStdFeeComponent, {
      disableClose: true,
    });

    openDig.afterClosed().subscribe(() => {
      this.getStdFee()
    })
  }

  onUpdate(data: any) {
    this.dialog.open(AddStdFeeComponent, {
      disableClose: true,
      data: data
    })
  }

  getStdFee() {
    this._crud.getStdFee().subscribe(
      (res: StudentFeeRes) => {
        console.log(res);
        this.studentFeeList = res.data
      },
      (err: Error) => {
        console.log(err);
      }
    )
  }

}
