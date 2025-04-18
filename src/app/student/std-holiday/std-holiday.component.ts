import { Component } from '@angular/core';
import { Events, eventsResponse } from 'src/app/interface/event.interface';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-std-holiday',
  templateUrl: './std-holiday.component.html',
  styleUrls: ['./std-holiday.component.scss']
})
export class StdHolidayComponent {
  eventList: Events[] = [];
  filterEvent: Events[] = []

  constructor(
    private _crud: CrudService
  ) { }

  ngOnInit(): void {
    this._crud.getAllEvents().subscribe(
      (res: eventsResponse) => {
        console.log(res);
        this.eventList = res.data;
        this.filterEvent = res.data;
      }
    )
  }

  onSearch(event: any) {
    const filter = event.target.value?.toLowerCase() || '';
    this.filterEvent = this.eventList.filter(data => 
      data?.ocassion_name?.toLowerCase().includes(filter)
    )
  }

}
