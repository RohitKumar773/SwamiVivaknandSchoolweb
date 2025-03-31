import { Component } from '@angular/core';
import { Bed, Room } from 'src/app/interface/hostel.interface';

@Component({
  selector: 'app-manage-hostel',
  templateUrl: './manage-hostel.component.html',
  styleUrls: ['./manage-hostel.component.scss']
})
export class ManageHostelComponent {
  hostelroom: boolean = false
  Rooms: Room[] = []
  Bed: Bed[] = []


  onSwitch(str: string) {
    this.hostelroom = true
  }

  addRoom(){
    
  }

}
