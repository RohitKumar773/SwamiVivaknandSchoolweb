import { Component, OnInit } from '@angular/core';
import { StudentFeeInstallment, StudentFeeInstallmentRes } from 'src/app/interface/feeInstallment.interface';
import { StudentFee, StudentFeeRes } from 'src/app/interface/studentFees.interface';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-std-fee-structure',
  templateUrl: './std-fee-structure.component.html',
  styleUrls: ['./std-fee-structure.component.scss']
})
export class StdFeeStructureComponent implements OnInit {
  allSalaryRecords: StudentFee[] = []
  FilterSalaryRecords: StudentFee[] = []
  student: any
  studentData: any

  constructor(
    private _crud: CrudService
  ) {
    this.getSalaryRec();
    this.student = localStorage.getItem('studentLoginData')
    this.studentData = JSON.parse(this.student)
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  delete_record() { }

  getSalaryRec() {
    this._crud.getStdFeeByStdId(this.studentData?.id).subscribe(
      (res: StudentFeeRes) => {
        console.log(res);
        this.FilterSalaryRecords = res.data
        this.allSalaryRecords = res.data
      }
    )
  }

}
