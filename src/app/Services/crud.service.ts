import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegRes } from '../interface/studentReg.interface';
import { StudentResponse } from '../interface/student.interface';
import { addStd } from '../interface/addStudent.interface';
import { facultyResponse } from '../interface/faculty.interface';

@Injectable({
  providedIn:'root'
})

export class CrudService {
  base_url: string = 'http://localhost/sawamivivekanand/'; //local
  // base_url:string = 'https://educatorbox.com/Development/sawamivivekanand/'; //Live 


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

  getAllFaculty():Observable<facultyResponse>{
    return this._http.get<facultyResponse>(`${this.base_url}faculty.php`);
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
