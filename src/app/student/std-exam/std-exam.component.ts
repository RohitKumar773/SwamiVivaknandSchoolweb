import { Component } from '@angular/core';
import { ExaminationGroup, ExaminationResponse, Examinations } from 'src/app/interface/examinations.interface';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-std-exam',
  templateUrl: './std-exam.component.html',
  styleUrls: ['./std-exam.component.scss']
})
export class StdExamComponent {
  exam_list: ExaminationGroup[] = []
  current_class: string = 'class 1'
  stdlogonData: any
  logindata: any

  constructor(
    private _crud: CrudService
  ) {
    this.logindata = localStorage.getItem('studentLoginData')
    this.stdlogonData = JSON.parse(this.logindata)
    this.current_class = this.stdlogonData.class

    this._crud.getAllStudent()
    console.log(this.current_class)
    this._crud.getExamination().subscribe(
      (res: ExaminationResponse) => {
        if (Array.isArray(res.data)) {
          this.exam_list = res.data.filter((cls) => cls.class == this.current_class)
          console.log(this.exam_list);
        }
      }
    )
  }
}
