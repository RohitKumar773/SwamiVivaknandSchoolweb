import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddBatchFormComponent } from '../add-batch-form/add-batch-form.component';
import { CrudService } from 'src/app/Services/crud.service';
import { GroupedBatch } from 'src/app/interface/batches.interface';

@Component({
  selector: 'app-master-data-batch-selection',
  templateUrl: './master-data-batch-selection.component.html',
  styleUrls: ['./master-data-batch-selection.component.scss'],
})
export class MasterDataBatchSelectionComponent {
  batch_list: GroupedBatch[] = []
  constructor(
    private dialog: MatDialog,
    private _crud: CrudService
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

  add_new_batch() {
    this.dialog.open(AddBatchFormComponent, {
      disableClose: true,
    })
  }
  delete_batch() { }
}
