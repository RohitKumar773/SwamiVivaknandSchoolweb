import { Component } from '@angular/core';
import { Batch, GroupedBatch } from 'src/app/interface/batches.interface';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-assign-btch',
  templateUrl: './assign-btch.component.html',
  styleUrls: ['./assign-btch.component.scss']
})
export class AssignBtchComponent {
  batch_list: Batch[] = []
  facult: any
  facultyData: any

  constructor(
    private _crud: CrudService,
  ) {

    this.facult = localStorage.getItem('facultyLoginData')
    this.facultyData = JSON.parse(this.facult)
    this.getData();

  }

  getData() {
    this._crud.GetBatchesbyFtId(this.facultyData?.id).subscribe(
      (res) => {
        console.log(res);
        this.batch_list = res.data
      }
    )
  }
}
