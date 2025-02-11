import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { ProfiledialogComponent } from './profiledialog/profiledialog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { FacultiesComponent } from './faculties/faculties.component';
import { FacultiesFormComponent } from './faculties-form/faculties-form.component';
import { AccountRoleComponent } from './account-role/account-role.component';
import { AccountUserComponent } from './account-user/account-user.component';
import { CourseApplcationComponent } from './course-applcation/course-applcation.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { MasterDataModuleComponent } from './master-data-module/master-data-module.component';
import { MasterDataSubjectComponent } from './master-data-subject/master-data-subject.component';
import { MasterDataClassComponent } from './master-data-class/master-data-class.component';
import { MasterDataCourseComponent } from './master-data-course/master-data-course.component';
import { MasterDataExaminationsComponent } from './master-data-examinations/master-data-examinations.component';
import { MasterDataBatchSelectionComponent } from './master-data-batch-selection/master-data-batch-selection.component';
import { FacultyProfileComponent } from './faculty-profile/faculty-profile.component';
import { FacultySalaryRecordsComponent } from './faculty-salary-records/faculty-salary-records.component';
import { FacultyAttendanceComponent } from './faculty-attendance/faculty-attendance.component';
import { FacultyAssignBatchComponent } from './faculty-assign-batch/faculty-assign-batch.component';
import { FeeInstallmentsComponent } from './fee-installments/fee-installments.component';
import { ClassScheduleDayComponent } from './class-schedule-day/class-schedule-day.component';
import { ClassScheduleTimingComponent } from './class-schedule-timing/class-schedule-timing.component';
import { InventoryCategoriesComponent } from './inventory-categories/inventory-categories.component';
import { InventoryProductsComponent } from './inventory-products/inventory-products.component';
import { TransportZoneComponent } from './transport-zone/transport-zone.component';
import { TransportDestinationComponent } from './transport-destination/transport-destination.component';
import { TransportDriversComponent } from './transport-drivers/transport-drivers.component';
import { TransportVehicleComponent } from './transport-vehicle/transport-vehicle.component';
import { AllocateHostelComponent } from './allocate-hostel/allocate-hostel.component';
import { ManageHostelComponent } from './manage-hostel/manage-hostel.component';
import { EventsComponent } from './events/events.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AddEventFormComponent } from './add-event-form/add-event-form.component';
import { ConfirmBoxComponent } from './confirm-box/confirm-box.component';
import { AddTransportZoneFormComponent } from './add-transport-zone-form/add-transport-zone-form.component';
import { AddTrnsptVehicleFormComponent } from './add-trnspt-vehicle-form/add-trnspt-vehicle-form.component';
import { AddDriverFormComponent } from './add-driver-form/add-driver-form.component';
import { AddAccntRoleFormComponent } from './add-accnt-role-form/add-accnt-role-form.component';
import { AddAccntUserFormComponent } from './add-accnt-user-form/add-accnt-user-form.component';
import { AddBatchFormComponent } from './add-batch-form/add-batch-form.component';
import { DashboardStyleComponent } from './dashboard-style/dashboard-style.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MasterDataNoticeComponent } from './master-data-notice/master-data-notice.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddFacultyComponent } from './add-faculty/add-faculty.component';

@NgModule({
  declarations: [
    AdminLoginComponent,
    AdminHomePageComponent,
    ProfiledialogComponent,
    DashboardComponent,
    RegistrationFormComponent,
    FacultiesComponent,
    FacultiesFormComponent,
    AccountRoleComponent,
    AccountUserComponent,
    CourseApplcationComponent,
    AdmissionsComponent,
    MasterDataModuleComponent,
    MasterDataSubjectComponent,
    MasterDataClassComponent,
    MasterDataCourseComponent,
    MasterDataExaminationsComponent,
    MasterDataBatchSelectionComponent,
    FacultyProfileComponent,
    FacultySalaryRecordsComponent,
    FacultyAttendanceComponent,
    FacultyAssignBatchComponent,
    FeeInstallmentsComponent,
    ClassScheduleDayComponent,
    ClassScheduleTimingComponent,
    InventoryCategoriesComponent,
    InventoryProductsComponent,
    TransportZoneComponent,
    TransportDestinationComponent,
    TransportDriversComponent,
    TransportVehicleComponent,
    AllocateHostelComponent,
    ManageHostelComponent,
    EventsComponent,
    AddEventFormComponent,
    ConfirmBoxComponent,
    AddTransportZoneFormComponent,
    AddTrnsptVehicleFormComponent,
    AddDriverFormComponent,
    AddAccntRoleFormComponent,
    AddAccntUserFormComponent,
    AddBatchFormComponent,
    DashboardStyleComponent,
    MasterDataNoticeComponent,
    AddFacultyComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
})
export class AdminModule {}
