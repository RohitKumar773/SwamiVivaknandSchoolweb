import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNoticeComponent } from '../add-notice/add-notice.component';
import { CrudService } from 'src/app/Services/crud.service';
import { Notice, NoticeResponse } from 'src/app/interface/notice.interface';
import { ConfirmBoxComponent } from '../confirm-box/confirm-box.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-master-data-notice',
  templateUrl: './master-data-notice.component.html',
  styleUrls: ['./master-data-notice.component.scss']
})
export class MasterDataNoticeComponent implements OnInit{

  noticeList: Notice[] = []

  constructor(
    private dialog: MatDialog,
    private _crud: CrudService,
    private toastr:ToastrService
  ) { }

  ngOnInit() {
    this.getAllNotice()
  }

  delete_notice(id:any) { 
    const openDig = this.dialog.open(ConfirmBoxComponent,{
      disableClose:true
    })

    openDig.afterClosed().subscribe(
      (res) => {
        if(res == 1){
          this._crud.deleteNotice(id).subscribe(
            (res) => {
              console.log(res);
              if(res.success == 1){
                this.toastr.success('Notice deleted successfully', 'Success')
                this.getAllNotice()
              }
            }
          )
        }
      }
    )
  }

  noticeForm() {
   const openDig = this.dialog.open(AddNoticeComponent, {
      disableClose: true
    });

    openDig.afterClosed().subscribe(
      () => {
        this.getAllNotice()
      }
    )
  }

  getAllNotice() {
    this._crud.getNotice().subscribe((res: NoticeResponse) => {
      console.log(res);
      if (Array.isArray(res.data)) {
        this.noticeList = res.data
      }
    })
  }
}
