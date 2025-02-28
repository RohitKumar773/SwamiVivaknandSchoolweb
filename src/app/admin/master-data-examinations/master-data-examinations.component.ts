import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddexamComponent } from '../addexam/addexam.component';

@Component({
  selector: 'app-master-data-examinations',
  templateUrl: './master-data-examinations.component.html',
  styleUrls: ['./master-data-examinations.component.scss']
})
export class MasterDataExaminationsComponent {

  constructor(
    private dialog:MatDialog
  ){}

  delete_exam(){}


  add_new_exam(){
    this.dialog.open(AddexamComponent, {
      disableClose:true
    })

  }

}
