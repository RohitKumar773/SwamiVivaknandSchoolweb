import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountUserComponent } from './account-user/account-user.component';
import { AccountRoleComponent } from './account-role/account-role.component';
import { CourseApplcationComponent } from './course-applcation/course-applcation.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { MasterDataModuleComponent } from './master-data-module/master-data-module.component';
import { MasterDataClassComponent } from './master-data-class/master-data-class.component';
import { MasterDataBatchSelectionComponent } from './master-data-batch-selection/master-data-batch-selection.component';
import { MasterDataCourseComponent } from './master-data-course/master-data-course.component';
import { MasterDataExaminationsComponent } from './master-data-examinations/master-data-examinations.component';
import { MasterDataSubjectComponent } from './master-data-subject/master-data-subject.component';
import { FacultyProfileComponent } from './faculty-profile/faculty-profile.component';
import { FacultySalaryRecordsComponent } from './faculty-salary-records/faculty-salary-records.component';
import { FacultyAssignBatchComponent } from './faculty-assign-batch/faculty-assign-batch.component';
import { FacultyAttendanceComponent } from './faculty-attendance/faculty-attendance.component';
import { FeeInstallmentsComponent } from './fee-installments/fee-installments.component';
import { ClassScheduleDayComponent } from './class-schedule-day/class-schedule-day.component';
import { ClassScheduleTimingComponent } from './class-schedule-timing/class-schedule-timing.component';
import { InventoryProductsComponent } from './inventory-products/inventory-products.component';
import { InventoryCategoriesComponent } from './inventory-categories/inventory-categories.component';
import { TransportZoneComponent } from './transport-zone/transport-zone.component';
import { TransportDriversComponent } from './transport-drivers/transport-drivers.component';
import { TransportDestinationComponent } from './transport-destination/transport-destination.component';
import { TransportVehicleComponent } from './transport-vehicle/transport-vehicle.component';
import { AllocateHostelComponent } from './allocate-hostel/allocate-hostel.component';
import { ManageHostelComponent } from './manage-hostel/manage-hostel.component';
import { EventsComponent } from './events/events.component';
import { MasterDataNoticeComponent } from './master-data-notice/master-data-notice.component';
import { StudentFeesComponent } from './student-fees/student-fees.component';
import { FacultyAttendanceReportComponent } from './faculty-attendance-report/faculty-attendance-report.component';
import { StudentsFeedbackComponent } from './students-feedback/students-feedback.component';

const routes: Routes = [
  { path: '', component: AdminLoginComponent },
  { path: 'admin_login', component: AdminLoginComponent },

  {
    path: 'home',
    component: AdminHomePageComponent,

    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'account_role', component: AccountRoleComponent },
      { path: 'account_user', component: AccountUserComponent },
      { path: 'course_application', component: CourseApplcationComponent },
      { path: 'course_admission', component: AdmissionsComponent },
      { path: 'events', component: EventsComponent },
      { path: 'master_data_module', component: MasterDataModuleComponent },
      { path: 'master_data_class', component: MasterDataClassComponent },
      {
        path: 'master_data_batch',
        component: MasterDataBatchSelectionComponent,
      },
      { path: 'master_data_course', component: MasterDataCourseComponent },
      { path: 'master_data_exam', component: MasterDataExaminationsComponent },
      { path: 'master_data_notice', component: MasterDataNoticeComponent },
      { path: 'master_Data_subj', component: MasterDataSubjectComponent },
      { path: 'faculty_profile', component: FacultyProfileComponent },
      { path: 'faculty_salary', component: FacultySalaryRecordsComponent },
      { path: 'faculty_assign_btch', component: FacultyAssignBatchComponent },
      { path: 'faculty_attendance', component: FacultyAttendanceComponent },
      { path: 'faculty_attendance_report', component: FacultyAttendanceReportComponent },
      { path: 'fee_installments', component: FeeInstallmentsComponent },
      { path: 'student_fees', component: StudentFeesComponent },
      { path: 'class_days', component: ClassScheduleDayComponent },
      { path: 'class_timing', component: ClassScheduleTimingComponent },
      { path: 'inventory_products', component: InventoryProductsComponent },
      { path: 'inventory_categories', component: InventoryCategoriesComponent },
      { path: 'transport_zone', component: TransportZoneComponent },
      { path: 'transport_drivers', component: TransportDriversComponent },
      {
        path: 'transport_destination',
        component: TransportDestinationComponent,
      },
      { path: 'transport_vehicle', component: TransportVehicleComponent },
      { path: 'allocate_hostel', component: AllocateHostelComponent },
      { path: 'manage_hostel', component: ManageHostelComponent },
      { path: 'student_feedback', component: StudentsFeedbackComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
