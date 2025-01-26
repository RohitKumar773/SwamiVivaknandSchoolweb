import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmBoxComponent } from '../confirm-box/confirm-box.component';

@Component({
  selector: 'app-master-data-module',
  templateUrl: './master-data-module.component.html',
  styleUrls: ['./master-data-module.component.scss']
})
export class MasterDataModuleComponent {

  constructor(
    private dialog:MatDialog
  ){}


  delete_module(){
    this.dialog.open(ConfirmBoxComponent,{
      disableClose:true
    })
  }
  add_new_module(){}

}
