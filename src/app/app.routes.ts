import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { SignupComponent } from './signup/signup';
import { DoctorDashboard } from './doctor-dashboard/doctor-dashboard';
import { AppointmentsComponent } from './appointments/appointments';
import { ManageAppointments } from './manage-appointments/manage-appointments';
import { PatientRecordsComponent } from './patient-records/patient-records';
import { Profile } from './profile/profile';
import { Notifications } from './notifications/notifications';
import { authGuard } from './auth-guard';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'signup', component: SignupComponent },
    {
        path: 'dashboard',
        component: DoctorDashboard,
        canActivate: [authGuard],
        children: [
            { path: 'appointments', component: AppointmentsComponent },
            { path: 'manage-appointments', component: ManageAppointments },
            { path: 'patient-records', component: PatientRecordsComponent },
            { path: 'profile', component: Profile },
            { path: 'notifications', component: Notifications },
            { path: '', redirectTo: 'appointments', pathMatch: 'full' }
        ]
    }
];