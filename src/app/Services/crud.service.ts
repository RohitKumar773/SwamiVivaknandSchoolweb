import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentResponse } from '../interface/student.interface';
import { facultyResponse } from '../interface/faculty.interface';
import { eventsResponse } from '../interface/event.interface';
import { studentApplicationRes } from '../interface/newStdApp.interface';
import { roleRes } from '../interface/role.interface';
import { userRes } from '../interface/users.interface';
import { SubjectRes } from '../interface/subject.interface';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
<<<<<<< HEAD
  base_url: string = 'http://localhost/sawamivivekanand/'; //local
  // base_url: string = 'https://mausamstudio.com/Development/sawamivivekanand/'; //Live
=======
  // base_url: string = 'http://localhost/sawamivivekanand/'; //local
  base_url: string = 'https://ud.mausamstudio.com/sawamivivekanand/'; //Live
>>>>>>> de9c369b0f318530590d929b05807d583d2e8b98

  constructor(private _http: HttpClient) { }

  adminLogin(data: any): Observable<any> {
    return this._http.post<any>(`${this.base_url}admin_login.php`, data)
  }

  facultyLogin(data: any): Observable<any> {
    return this._http.post<any>(`${this.base_url}faculty_login.php`, data)
  }

  studentLogin(data: any): Observable<any> {
    return this._http.post<any>(`${this.base_url}student_login.php`, data)
  }

  std_self_reg(data: any): Observable<studentApplicationRes> {
    return this._http.post<studentApplicationRes>(
      `${this.base_url}std_self_reg.php`,
      data
    );
  }

  getAllStudent(): Observable<StudentResponse> {
    return this._http.get<StudentResponse>(`${this.base_url}student.php`);
  }

  addStudents(data: any): Observable<any> {
    return this._http.post<any>(`${this.base_url}student.php`, data);
  }

  StudentDelete(id: number): Observable<any> {
    return this._http.delete<any>(`${this.base_url}student.php?id=${id}`);
  }

  getStdApplications(): Observable<studentApplicationRes> {
    return this._http.get<studentApplicationRes>(`${this.base_url}std_self_reg.php`)
  }
  deleteApplication(id: number): Observable<any> {
    return this._http.delete<any>(`${this.base_url}std_self_reg.php?id=${id}`)
  }

  addFaculty(data: any): Observable<any> {
    return this._http.post<any>(`${this.base_url}faculty.php`, data);
  }

  getFaculty(): Observable<facultyResponse> {
    return this._http.get<facultyResponse>(`${this.base_url}faculty.php`);
  }

  deleteFaculty(id: number): Observable<any> {
    return this._http.delete<any>(`${this.base_url}faculty.php?id=${id}`);
  }

  addEvent(data: any): Observable<any> {
    return this._http.post<any>(`${this.base_url}events.php`, data);
  }

  getAllEvents(): Observable<eventsResponse> {
    return this._http.get<eventsResponse>(`${this.base_url}events.php`);
  }

  deleteEvent(id: number): Observable<any> {
    console.log(id);
    return this._http.delete<any>(`${this.base_url}events.php?id=${id}`);
  }

  addRole(data:any):Observable<any>{
    return this._http.post<any>(`${this.base_url}role.php`, data)
  }

  getRole(): Observable<roleRes> {
    return this._http.get<roleRes>(`${this.base_url}role.php`);
  }
  deleteRole(id: number): Observable<any> {
    return this._http.delete<any>(`${this.base_url}role.php?id=${id}`);
  }
  getUser():Observable<userRes>{
    return this._http.get<userRes>(`${this.base_url}users.php`);
  }
  deleteUser(id:number):Observable<any>{
    return this._http.delete<any>(`${this.base_url}users.php?id=${id}`);
  }

  // subjects
  getSubject():Observable<SubjectRes>{
    return this._http.get<SubjectRes>(`${this.base_url}subject.php`);
  }

  addSubject(data:any):Observable<SubjectRes>{
    return this._http.post<SubjectRes>(`${this.base_url}subject.php`,data);
  }
  deleteSubject(id:number):Observable<any>{
    return this._http.delete<any>(`${this.base_url}subject.php?id=${id}`);
  }
}
