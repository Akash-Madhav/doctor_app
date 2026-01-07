import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentService } from '../appointment';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-appointments',
  imports: [CommonModule],
  templateUrl: './appointments.html',
  styleUrls: ['./appointments.css']
})
export class AppointmentsComponent implements OnInit {
  appointments$: Observable<any[]> | undefined;
  appointmentService = inject(AppointmentService);

  ngOnInit() {
    this.appointments$ = this.appointmentService.getAppointments();
  }
}