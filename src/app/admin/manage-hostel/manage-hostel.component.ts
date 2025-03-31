import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { Bed, BedRes, Room, RoomRes } from 'src/app/interface/hostel.interface';
import { AddRoomComponent } from '../add-room/add-room.component';
import { AddBedComponent } from '../add-bed/add-bed.component';
import { CrudService } from 'src/app/Services/crud.service';
import { ConfirmBoxComponent } from '../confirm-box/confirm-box.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manage-hostel',
  templateUrl: './manage-hostel.component.html',
  styleUrls: ['./manage-hostel.component.scss']
})
export class ManageHostelComponent {
  hostelRoom: boolean = true;
  rooms: Room[] = [];
  beds: Bed[] = [];

  constructor(
    private dialog: MatDialog,
    private _crud: CrudService,
    private toastr: ToastrService

  ) {
    this.getRooms()
  }

  onSwitch(str: string) {
    this.hostelRoom = !this.hostelRoom;
    if (str == 'room') {
      this.getRooms()
    }
    if (str == 'bed') {
      this.getBeds()
    }
  }

  getRooms() {
    this._crud.getRooms().subscribe(
      (res: RoomRes) => {
        console.log(res);
        if (Array.isArray(res.data)) {
          this.rooms = res.data
        }

      }
    )
  }

  getBeds() {
    this._crud.getBed().subscribe(
      (res: BedRes) => {
        console.log(res);
        if (Array.isArray(res.data)) {
          this.beds = res.data
        }
      }
    )
  }

  addRoom() {
    const dialogRef = this.dialog.open(AddRoomComponent, {
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getRooms();
    });
  }

  addBed() {
    const dialogRef = this.dialog.open(AddBedComponent, {
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getBeds();
    });
  }




  onRoomDelted(id: any) {
    console.log(id);
    const openDig = this.dialog.open(ConfirmBoxComponent, {
      disableClose: true,

    });

    openDig.afterClosed().subscribe(
      (res) => {
        console.log(res);
        if (res == 1) {
          this._crud.deleteRoom(id).subscribe(
            (res) => {
              console.log(res);
              if (res.success == 1) {
                this.getRooms()
                this.toastr.success('Room Deleted Successfully', 'Success')
              }
            }
          )
        }
      }
    )
  }


  onBedDelted(id:number) {
    console.log(id);
    const openDig = this.dialog.open(ConfirmBoxComponent, {
      disableClose: true,

    });

    openDig.afterClosed().subscribe(
      (res) => {
        console.log(res);
        if (res == 1) {
          this._crud.deleteBed(id).subscribe(
            (res) => {
              console.log(res);
              if (res.success == 1) {
                this.getBeds()
                this.toastr.success('Bed Deleted Successfully', 'Success')
              }
            }
          )
        }
      }
    )
  }
}
