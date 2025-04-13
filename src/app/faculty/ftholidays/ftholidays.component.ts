import { Component, OnInit } from '@angular/core';
import { Events, eventsResponse } from 'src/app/interface/event.interface';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-ftholidays',
  templateUrl: './ftholidays.component.html',
  styleUrls: ['./ftholidays.component.scss']
})
export class FtholidaysComponent implements OnInit {
  eventList: Events[] = [];

  constructor(
    private _crud: CrudService
  ){}

  ngOnInit(): void {
    this._crud.getAllEvents().subscribe(
      (res: eventsResponse) => {
        console.log(res);
        this.eventList = res.data
      }
    )
    
  }

}
