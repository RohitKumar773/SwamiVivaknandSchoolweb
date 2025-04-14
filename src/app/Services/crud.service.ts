import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentResponse } from '../interface/student.interface';
import { facultyResponse } from '../interface/faculty.interface';
import { eventsResponse } from '../interface/event.interface';
import { studentApplicationRes } from '../interface/newStdApp.interface';
import { roleRes } from '../interface/role.interface';
import { userRes } from '../interface/users.interface';
import { SubjectRes } from '../interface/subject.interface';
import { ExaminationResponse } from '../interface/examinations.interface';
import { BatchResponse } from '../interface/batches.interface';
import { NoticeResponse } from '../interface/notice.interface';
import { StudentFeeInstallmentRes } from '../interface/feeInstallment.interface';
import { StudentFeeRes } from '../interface/studentFees.interface';
import { VehicleResponse, ZoneRes } from '../interface/vehicle.interface';
import { DriverResponse } from '../interface/driver.interface';
import { ApiResponseForEmp, ApiResponseSalary } from '../interface/salary.interface';
import { InventoryMaterialRes } from '../interface/material.interface';
import { inventoryProductRes } from '../interface/inventoryProduct.interface';
import { AssignHostelRes, BedRes, Room, RoomRes } from '../interface/hostel.interface';
import { AttendentRes, TodayAttendentRes } from '../interface/attendance.interface';
import { AssignmentResponse } from '../interface/assignment.interface';
import { FeedbackApiResponse } from '../interface/feedback.interface';

@Injectable({
  providedIn: 'root',
})
export class CrudService {

  // base_url: string = 'http://localhost/sawamivivekanand/'; //local
  // base_url: string = 'https://mausamstudio.com/Development/sawamivivekanand/'; //Live

  base_url: string = 'http://localhost/sawamivivekanand/'; //local
  // base_url: string = 'https://ud.mausamstudio.com/sawamivivekanand/'; //Live

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

  addRole(data: any): Observable<any> {
    return this._http.post<any>(`${this.base_url}role.php`, data)
  }

  getRole(): Observable<roleRes> {
    return this._http.get<roleRes>(`${this.base_url}role.php`);
  }
  deleteRole(id: number): Observable<any> {
    return this._http.delete<any>(`${this.base_url}role.php?id=${id}`);
  }

  // employee
  addEmployee(data: any): Observable<any> {
    return this._http.post<any>(`${this.base_url}employee.php`, data)
  }

  getUser(): Observable<userRes> {
    return this._http.get<userRes>(`${this.base_url}employee.php`);
  }
  deleteUser(id: number): Observable<any> {
    return this._http.delete<any>(`${this.base_url}employee.php?id=${id}`);
  }

  // subjects
  getSubject(): Observable<SubjectRes> {
    return this._http.get<SubjectRes>(`${this.base_url}subject.php`);
  }

  getSubjectByClass(cls: string): Observable<any> {
    return this._http.get<any>(`${this.base_url}subject.php?class=${cls}`);
  }

  addSubject(data: any): Observable<SubjectRes> {
    return this._http.post<SubjectRes>(`${this.base_url}subject.php`, data);
  }
  deleteSubject(id: number): Observable<any> {
    return this._http.delete<any>(`${this.base_url}subject.php?id=${id}`);
  }

  //examinations

  addExamination(data: any): Observable<any> {
    return this._http.post<any>(`${this.base_url}examination.php`, data);
  }

  getExamination(): Observable<ExaminationResponse> {
    return this._http.get<ExaminationResponse>(`${this.base_url}examination.php`);
  }

  deleteExam(id: number): Observable<any> {
    return this._http.delete<any>(`${this.base_url}examination.php?id=${id}`);
  }

  // for Batches 

  addBatches(data: any) {
    return this._http.post(`${this.base_url}batches.php`, data)
  }

  UpdaetBatches(data: any) {
    return this._http.put(`${this.base_url}batches.php`, data)
  }

  GetBatches(): Observable<BatchResponse> {
    return this._http.get<BatchResponse>(`${this.base_url}batches.php`)
  }

  GetBatchesbyCls(cls: string): Observable<any> {
    return this._http.get<any>(`${this.base_url}batches.php?class=${cls}`);
  }

  deleteBatch(id: number): Observable<any> {
    return this._http.delete<any>(`${this.base_url}batches.php?id=${id}`);
  }

  //Notice section

  addNotice(data: any): Observable<NoticeResponse> {
    return this._http.post<NoticeResponse>(`${this.base_url}notice.php`, data);
  }

  getNotice(): Observable<NoticeResponse> {
    return this._http.get<NoticeResponse>(`${this.base_url}notice.php`);
  }

  deleteNotice(id: number): Observable<any> {
    return this._http.delete<any>(`${this.base_url}notice.php?id=${id}`);
  }

  //fee installment

  getFeeInstallment(): Observable<StudentFeeInstallmentRes> {
    return this._http.get<StudentFeeInstallmentRes>(`${this.base_url}fee_installments.php`);
  }

  addInstallment(data: any): Observable<StudentFeeInstallmentRes> {
    return this._http.post<StudentFeeInstallmentRes>(`${this.base_url}fee_installments.php`, data);
  }

  deleteInstallment(id: number): Observable<any> {
    return this._http.delete<any>(`${this.base_url}fee_installments.php?id=${id}`);
  }

  //student fees

  addStdFee(data: any): Observable<any> {
    return this._http.post<any>(`${this.base_url}studentfee.php`, data);
  }

  getStdFee(): Observable<StudentFeeRes> {
    return this._http.get<StudentFeeRes>(`${this.base_url}studentfee.php`);
  }

  // transport vehicle 

  addVehicle(data: any): Observable<any> {
    return this._http.post<any>(`${this.base_url}vehicle.php`, data);
  }

  getTransportVehicle(): Observable<VehicleResponse> {
    return this._http.get<VehicleResponse>(`${this.base_url}vehicle.php`);
  }
  deleteVehicle(id: number): Observable<any> {
    return this._http.delete<any>(`${this.base_url}vehicle.php?id=${id}`);
  }

  // transport driver

  addDriver(data: any): Observable<any> {
    return this._http.post<any>(`${this.base_url}driver.php`, data)
  }
  getDriver(): Observable<DriverResponse> {
    return this._http.get<DriverResponse>(`${this.base_url}driver.php`);
  }
  deleteDriver(id: any): Observable<any> {
    return this._http.delete<any>(`${this.base_url}driver.php?id=${id}`);
  }

  getempBymob(mobile: number): Observable<ApiResponseForEmp> {
    return this._http.get<ApiResponseForEmp>(`${this.base_url}getEmployee.php?mobile=${mobile}`)
  }
  getemp(): Observable<ApiResponseForEmp> {
    return this._http.get<ApiResponseForEmp>(`${this.base_url}getEmployee.php`)
  }

  add_salary(data: any): Observable<any> {
    return this._http.post<any>(`${this.base_url}salary.php`, data)
  }
  get_salary_record(): Observable<ApiResponseSalary> {
    return this._http.get<ApiResponseSalary>(`${this.base_url}salary.php`)
  }

  // inventory material
  addMaterial(data: any): Observable<any> {
    return this._http.post<any>(`${this.base_url}material.php`, data)
  }
  getMaterial(): Observable<InventoryMaterialRes> {
    return this._http.get<InventoryMaterialRes>(`${this.base_url}material.php`)
  }
  deleteMaterial(id: any): Observable<any> {
    return this._http.delete<any>(`${this.base_url}material.php?id=${id}`);
  }

  //inventory products

  addProduct(data: any): Observable<any> {
    return this._http.post<any>(`${this.base_url}materialProduct.php`, data)
  }
  getProduct(): Observable<inventoryProductRes> {
    return this._http.get<inventoryProductRes>(`${this.base_url}materialProduct.php`)
  }
  deleteProduct(id: any): Observable<any> {
    return this._http.delete<any>(`${this.base_url}materialProduct.php?id=${id}`)
  }


  //inventory products

  addRooms(data: any): Observable<any> {
    return this._http.post<any>(`${this.base_url}room.php`, data)
  }
  getRooms(): Observable<RoomRes> {
    return this._http.get<RoomRes>(`${this.base_url}room.php`)
  }
  deleteRoom(id: any): Observable<any> {
    return this._http.delete<any>(`${this.base_url}room.php?id=${id}`)
  }

  addBed(data: any): Observable<any> {
    return this._http.post<any>(`${this.base_url}bed_api.php`, data)
  }
  getBed(): Observable<BedRes> {
    return this._http.get<BedRes>(`${this.base_url}bed_api.php`)
  }

  getBedByroom(id: string): Observable<BedRes> {
    return this._http.get<BedRes>(`${this.base_url}bed_api.php?room_no=${id}`)
  }
  deleteBed(id: any): Observable<any> {
    return this._http.delete<any>(`${this.base_url}bed_api.php?id=${id}`)
  }

  addAssignHostel(data: any): Observable<any> {
    return this._http.post<any>(`${this.base_url}assignHostel.php`, data)
  }
  getAssignHostel(): Observable<AssignHostelRes> {
    return this._http.get<AssignHostelRes>(`${this.base_url}assignHostel.php`)
  }
  deleteAssignHostel(id: any): Observable<any> {
    return this._http.delete<any>(`${this.base_url}assignHostel.php?id=${id}`)
  }

  addattendance(data: any): Observable<any> {
    return this._http.post<any>(`${this.base_url}attendance.php`, data)
  }

  getattendance(): Observable<AttendentRes> {
    return this._http.get<AttendentRes>(`${this.base_url}attendance.php`)
  }

  getTodayAttendance(): Observable<TodayAttendentRes> {
    return this._http.get<TodayAttendentRes>(`${this.base_url}get_today_attendance.php`)
  }

  getAttendanceReport(emp_id: number, month: number, year: number): Observable<AttendentRes> {
    const params = new HttpParams()
      .set('emp_id', emp_id)
      .set('month', month)
      .set('year', year);

    return this._http.get<AttendentRes>(`${this.base_url}attendance.php`, { params });
  }


  deleteZone_apil(id: any): Observable<any> {
    return this._http.delete<any>(`${this.base_url}zone_api.php?id=${id}`)
  }

  addZone_api(data: any): Observable<any> {
    return this._http.post<any>(`${this.base_url}zone_api.php`, data)
  }

  getZone_api(): Observable<ZoneRes> {
    return this._http.get<ZoneRes>(`${this.base_url}zone_api.php`)
  }

  //assignment

  getAssignment(): Observable<AssignmentResponse> {
    return this._http.get<AssignmentResponse>(`${this.base_url}assignment.php`)
  }

  //feedback
  addFeedback(data: any): Observable<any> {
    return this._http.post<any>(`${this.base_url}feedback.php`, data)
  }
  getFeedback(): Observable<FeedbackApiResponse> {
    return this._http.get<FeedbackApiResponse>(`${this.base_url}feedback.php`)
  }
  deleteFeedback(): Observable<any> {
    return this._http.delete<any>(`${this.base_url}feedback.php`)
  }

  //send email contact form
  sendEmail(data: any): Observable<any> {
    return this._http.post<any>(`${this.base_url}contact.php`, data)
  }

  //send email to new student

  sendEmailStudent(data: any): Observable<any>{
    return this._http.post<any>(`${this.base_url}studentemail.php`, data)
  }

}
