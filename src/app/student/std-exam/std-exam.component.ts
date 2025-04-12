import { Component } from '@angular/core';
import { ExaminationGroup, ExaminationResponse, Examinations } from 'src/app/interface/examinations.interface';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-std-exam',
  templateUrl: './std-exam.component.html',
  styleUrls: ['./std-exam.component.scss']
})
export class StdExamComponent {
  exam_list_group: ExaminationGroup[] = []
  exam_list: Examinations[] = []
  current_class: string = 'class 1'
  stdlogonData: any
  logindata: any

  constructor(
    private _crud: CrudService
  ) {
    this.logindata = localStorage.getItem('studentLoginData')
    this.stdlogonData = JSON.parse(this.logindata)
    console.log(this.stdlogonData);
    

    this._crud.getExamination().subscribe(
      (res: ExaminationResponse) => {
        if (Array.isArray(res.data)) {
          this.exam_list_group = res.data

          // this.exam_list = this.exam_list_group.filter((cls) => cls.class == '')
        }
      }
    )
  }
}
