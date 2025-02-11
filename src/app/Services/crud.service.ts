import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegRes } from '../interface/studentReg.interface';
import { StudentResponse } from '../interface/student.interface';
import { addStd } from '../interface/addStudent.interface';

@Injectable({
  providedIn:'root'
})

export class CrudService {
  base_url: string = 'http://localhost/sawamivivekanand/'; //local
  constructor(private _http: HttpClient) {}

  std_self_reg(data: any): Observable<RegRes> {
    return this._http.post<RegRes>(
      `${this.base_url}student_registation.php`,
      data
    );
  }

  getAllStudent(): Observable<StudentResponse> {
    return this._http.get<StudentResponse>(`${this.base_url}student.php`);
  }

  addStudents(data: any): Observable<addStd> {
    return this._http.post<addStd>(`${this.base_url}student.php`, data);
  }
}



// @Injectable({
//   providedIn: 'root',
// })
// export class CrudService {
//   base_url: string = 'http://localhost/sawamivivekanand/'; //local
//   constructor(private _http: HttpClient) {}

//   std_self_reg(data: any): Observable<RegRes> {
//     return this._http.post<RegRes>(
//       `${this.base_url}student_registation.php`,
//       data
//     );
//   }

//   addStudents(data:any) : Observable<addStd>{
//     return this._http.post<addStd>(
//       `${this.base_url}student.php`
//     )
//   }

//   getAllStudent(): Observable<StudentResponse> {
//     return this._http.get<StudentResponse>(`${this.base_url}student.php`);
//   }
// }
