import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmBoxComponent } from '../confirm-box/confirm-box.component';

@Component({
  selector: 'app-master-data-subject',
  templateUrl: './master-data-subject.component.html',
  styleUrls: ['./master-data-subject.component.scss'],
})
export class MasterDataSubjectComponent {
  constructor(private dialog: MatDialog) {}

  delete_subject() {
    this.dialog.open(ConfirmBoxComponent, {
      disableClose: true,
    });
  }

  add_new_subject(){}
}
