import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddBatchFormComponent } from '../add-batch-form/add-batch-form.component';

@Component({
  selector: 'app-master-data-batch-selection',
  templateUrl: './master-data-batch-selection.component.html',
  styleUrls: ['./master-data-batch-selection.component.scss'],
})
export class MasterDataBatchSelectionComponent {

  constructor(
    private dialog:MatDialog
  ){}


  add_new_batch() {
    this.dialog.open(AddBatchFormComponent,{
      disableClose:true,
    })
  }
  delete_batch() {}
}
