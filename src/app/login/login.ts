import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  loginForm: FormGroup;
  loginError = '';
  isLoading = false;
  authService = inject(AuthService);
  router = inject(Router);
  fb = inject(FormBuilder);

  constructor() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.loginError = '';
      const result = await this.authService.login(this.loginForm.value);
      this.isLoading = false;
      if (!result.success) {
        this.loginError = result.error || 'Login failed';
      }
    }
  }
}
