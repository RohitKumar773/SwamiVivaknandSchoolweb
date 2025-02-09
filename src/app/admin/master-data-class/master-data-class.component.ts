import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/Services/shared.service';
import { ConfirmBoxComponent } from '../confirm-box/confirm-box.component';

@Component({
  selector: 'app-master-data-class',
  templateUrl: './master-data-class.component.html',
  styleUrls: ['./master-data-class.component.scss'],
})
export class MasterDataClassComponent {
  class_list: any;
  constructor(
    private _shared: SharedService,
    private dialog:MatDialog
  ) {
    this._shared.classList.subscribe((res) => {
      console.log(res);
      this.class_list = res;
    });
  }

  
  delete_class() {
    this.dialog.open(ConfirmBoxComponent,{
      disableClose:true
    })
  }

  add_new_class() {}
}
