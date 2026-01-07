import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class SignupComponent {
  signupForm: FormGroup;
  signupError = '';
  isLoading = false;
  fb = inject(FormBuilder);
  router = inject(Router);
  authService = inject(AuthService);

  constructor() {
    this.signupForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  async onSubmit() {
    if (this.signupForm.valid) {
      if (this.signupForm.value.password !== this.signupForm.value.confirmPassword) {
        this.signupError = 'Passwords do not match';
        return;
      }
      this.isLoading = true;
      this.signupError = '';
      const result = await this.authService.signup({
        fullName: this.signupForm.value.fullName,
        email: this.signupForm.value.email,
        password: this.signupForm.value.password
      });
      this.isLoading = false;
      if (result.success) {
        this.router.navigate(['/login']);
      } else {
        this.signupError = result.error || 'Signup failed';
      }
    }
  }
}
