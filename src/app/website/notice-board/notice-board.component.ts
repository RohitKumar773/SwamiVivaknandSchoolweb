import { Component, OnInit } from '@angular/core';
import { Notice, NoticeResponse } from 'src/app/interface/notice.interface';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-notice-board',
  templateUrl: './notice-board.component.html',
  styleUrls: ['./notice-board.component.scss']
})
export class NoticeBoardComponent implements OnInit {
  notices: Notice[] = []

  constructor(
    private _crud: CrudService
  ) { }

  ngOnInit() {
    this.getAllNotice()
  }

  getAllNotice() {
    this._crud.getNotice().subscribe(
      (res: NoticeResponse) => {
        console.log(res);
        this.notices = res.data
      }
    )
  }



  // notices: string[] = [
  //   'Annual Sports Day on April 20, 2025.',
  //   'Parent-Teacher Meeting scheduled for April 10, 2025.',
  //   'New admissions are open until May 15, 2025.',
  //   'School will remain closed on April 14 for Ambedkar Jayanti.',
  // ];

}
