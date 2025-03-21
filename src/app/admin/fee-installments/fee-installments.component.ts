import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddFeeInstallmentComponent } from '../add-fee-installment/add-fee-installment.component';
import { CrudService } from 'src/app/Services/crud.service';
import { StudentFeeInstallment, StudentFeeInstallmentRes } from 'src/app/interface/feeInstallment.interface';
import { ConfirmBoxComponent } from '../confirm-box/confirm-box.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-fee-installments',
  templateUrl: './fee-installments.component.html',
  styleUrls: ['./fee-installments.component.scss'],
})
export class FeeInstallmentsComponent implements OnInit {
  installmentList: StudentFeeInstallment[] = [];

  constructor(
    private dialog: MatDialog,
    private _crud: CrudService,
    private toastr:ToastrService
  ) { }

  ngOnInit() {
    this.getFee();
  }

  add_fee_str() {
    const openDig = this.dialog.open(AddFeeInstallmentComponent, {
      disableClose: true
    });

    openDig.afterClosed().subscribe(() => {
      this.getFee()
    }
    )
  }

  getFee() {
    this._crud.getFeeInstallment().subscribe(
      (res: StudentFeeInstallmentRes) => {
        console.log(res);
        this.installmentList = res.data
      },
      (err: Error) => {
        console.log(err);
      }
    )
  }

  delete_str(id:any) {
    const openDig = this.dialog.open(ConfirmBoxComponent, {
      disableClose: true
    });

    openDig.afterClosed().subscribe(
      (res) => {
        console.log(res);

        if (res == 1) {
          this._crud.deleteInstallment(id).subscribe(
            (res:any) => {
              console.log(res);
              if(res.success == 1){
                this.toastr.success('Installment Deleted', 'Success');
                this.getFee();
              }
            }
          )
        }
      }
    )
  }
}
