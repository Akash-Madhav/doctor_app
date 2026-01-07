import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentService } from '../appointment';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-patient-records',
  imports: [CommonModule],
  templateUrl: './patient-records.html',
  styleUrls: ['./patient-records.css']
})
export class PatientRecordsComponent implements OnInit {
  patients$: Observable<any[]> | undefined;
  appointmentService = inject(AppointmentService);

  ngOnInit() {
    this.patients$ = this.appointmentService.getPatientRecords();
  }
}