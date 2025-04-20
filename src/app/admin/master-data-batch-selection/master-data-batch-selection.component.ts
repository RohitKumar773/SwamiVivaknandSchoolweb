import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddBatchFormComponent } from '../add-batch-form/add-batch-form.component';
import { CrudService } from 'src/app/Services/crud.service';
import { GroupedBatch } from 'src/app/interface/batches.interface';
import { ToastrService } from 'ngx-toastr';
import { ConfirmBoxComponent } from '../confirm-box/confirm-box.component';

@Component({
  selector: 'app-master-data-batch-selection',
  templateUrl: './master-data-batch-selection.component.html',
  styleUrls: ['./master-data-batch-selection.component.scss'],
})
export class MasterDataBatchSelectionComponent {
  batch_list: GroupedBatch[] = []
  constructor(
    private dialog: MatDialog,
    private _crud: CrudService,
    private toastr: ToastrService
  ) {
    this.getData()
  }

  getData() {
    this._crud.GetBatches().subscribe(
      (res) => {
        console.log(res);
        this.batch_list = res.data
      }
    )
  }

  // onEdit(cls: string) {
  //   console.log(cls)
  //   this.dialog.open(AddBatchFormComponent, {
  //     disableClose: true,
  //     data: cls
  //   })

  // }

  add_new_batch() {
    const addBatch = this.dialog.open(AddBatchFormComponent, {
      disableClose: true,
    })

    addBatch.afterClosed().subscribe(
      (Res) => {
        this.getData()
      }
    )
  }

  delete_batch(id: string) {
    const openDig = this.dialog.open(ConfirmBoxComponent, {
      disableClose: true
    });

    openDig.afterClosed().subscribe(
      (res) => {
        console.log(res);
        if (res == 1) {
          this._crud.deleteBatch(id).subscribe(
            (res: any) => {
              console.log(res);
              if (res.success == 1) {
                this.getData()
                this.toastr.success('batch deleted by Class', 'Success')
              }
            }
          )
        }
      }
    )
  }
}
