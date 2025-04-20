import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FacultySalaryRecordsAddComponent } from 'src/app/admin/faculty-salary-records-add/faculty-salary-records-add.component';
import { StudentFeeInstallment, StudentFeeInstallmentRes } from 'src/app/interface/feeInstallment.interface';
import { SalaryRecord } from 'src/app/interface/salary.interface';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-ftfeestructure',
  templateUrl: './ftfeestructure.component.html',
  styleUrls: ['./ftfeestructure.component.scss']
})
export class FtfeestructureComponent implements OnInit {
  allSalaryRecords: SalaryRecord[] = []
  FilterSalaryRecords: SalaryRecord[] = []
  faculty: any
  facultyData: any

  constructor(
    private dialog: MatDialog,
    private _crud: CrudService
  ) {
    this.getSalaryRec();
    this.faculty = localStorage.getItem('facultyLoginData')
    this.facultyData = JSON.parse(this.faculty)
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  delete_record() { }

  getSalaryRec() {
    this._crud.get_ftsalary_record(this.facultyData?.id).subscribe(
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

  onSearch(event: any) {
    const filter = event.target.value?.toLowerCase() || '';
    this.FilterSalaryRecords = this.allSalaryRecords.filter(data =>
      data?.contact_no?.toString().includes(filter) ||
      data?.name?.toLowerCase().includes(filter)
    )
  }
}
