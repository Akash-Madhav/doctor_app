import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar';

@Component({
  selector: 'app-doctor-dashboard',
  standalone: true,
  imports: [SidebarComponent, RouterOutlet, CommonModule],
  templateUrl: './doctor-dashboard.html',
  styleUrl: './doctor-dashboard.css',
})
export class DoctorDashboard {

}
