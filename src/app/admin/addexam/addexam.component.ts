import { Component } from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-addexam',
  templateUrl: './addexam.component.html',
  styleUrls: ['./addexam.component.scss']
})
export class AddexamComponent {

  class: any[] = [];


  constructor(
    private _shared: SharedService
  ) {
    this._shared.classList.subscribe(
      (cls) => {
        this.class = cls;
      }
    )
  }


  resetForm() { }

}
