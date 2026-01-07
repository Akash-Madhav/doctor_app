import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard';
import { AppointmentsComponent } from './appointments/appointments';
import { ManageAppointmentsComponent } from './manage-appointments/manage-appointments';
import { PatientRecordsComponent } from './patient-records/patient-records';
import { ProfileComponent } from './profile/profile';
import { NotificationsComponent } from './notifications/notifications';
import { authGuard } from './auth-guard';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {
        path: 'dashboard',
        component: DoctorDashboardComponent,
        canActivate: [authGuard],
        children: [
            { path: 'appointments', component: AppointmentsComponent },
            { path: 'manage-appointments', component: ManageAppointmentsComponent },
            { path: 'patient-records', component: PatientRecordsComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'notifications', component: NotificationsComponent },
            { path: '', redirectTo: 'appointments', pathMatch: 'full' }
        ]
    }
];