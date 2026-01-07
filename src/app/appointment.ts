import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor() { }

  getAppointments() {
    return of([
      { id: 1, patientName: 'John Doe', age: 45, time: '10:00 AM', status: 'Approved' },
      { id: 2, patientName: 'Jane Smith', age: 32, time: '10:30 AM', status: 'Pending' },
      { id: 3, patientName: 'Peter Jones', age: 55, time: '11:00 AM', status: 'Cancelled' },
      { id: 4, patientName: 'Mary Johnson', age: 28, time: '11:30 AM', status: 'Approved' }
    ]);
  }

  getPatientRecords() {
    return of([
      { id: 1, name: 'John Doe', age: 45, gender: 'Male', history: 'Hypertension' },
      { id: 2, name: 'Jane Smith', age: 32, gender: 'Female', history: 'Asthma' },
    ]);
  }
}