import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthApiService } from '../../core/services/auth-api.service';
import { SessionService } from '../../core/services/session.service';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css'
})
export class AuthPageComponent implements OnInit {
  activeTab: 'login' | 'signup' = 'login';
  submitting = false;
  loginError = '';
  signupError = '';
  private readonly fb = inject(FormBuilder);
  private readonly authApi = inject(AuthApiService);
  private readonly session = inject(SessionService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly toast = inject(ToastService);

  readonly loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  readonly signupForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor() {}

  ngOnInit(): void {
    const oauth = this.route.snapshot.queryParamMap.get('oauth');
    const message = this.route.snapshot.queryParamMap.get('message');

    if (oauth === 'failed') {
      this.loginError = message || 'Google sign-in failed. Please try again.';
    }
  }

  switchTab(tab: 'login' | 'signup'): void {
    this.activeTab = tab;
    this.loginError = '';
    this.signupError = '';
  }

  signInWithGoogle(): void {
    window.location.href = this.session.googleLoginUrl;
  }

  continueAsGuest(): void {
    this.session.storeGuestSession();
    this.toast.info('You are continuing as a guest. History stays on this device until sign-in.');
    void this.router.navigateByUrl('/dashboard');
  }

  login(): void {
    this.loginError = '';
    if (this.loginForm.invalid) {
      this.loginError = 'Please enter a valid email and password.';
      return;
    }

    this.submitting = true;
    const { email, password } = this.loginForm.getRawValue();
    this.authApi.login({ email: email ?? '', password: password ?? '' }).pipe(
      finalize(() => {
        this.submitting = false;
      })
    ).subscribe({
      next: (token) => {
        this.session.storeAuthenticatedSession({
          token,
          email: email ?? '',
          name: email?.split('@')[0] ?? 'User'
        });
        this.toast.success('Signed in successfully.');
        void this.router.navigateByUrl('/dashboard');
      },
      error: () => {
        this.loginError = 'Login failed. Please check your credentials.';
        this.toast.error('Login failed. Please check your credentials.');
      }
    });
  }

  signup(): void {
    this.signupError = '';
    if (this.signupForm.invalid) {
      this.signupError = 'Please complete all signup fields.';
      return;
    }

    this.submitting = true;
    const { name, email, password } = this.signupForm.getRawValue();
    this.authApi.register({ name: name ?? '', email: email ?? '', password: password ?? '' }).pipe(
      finalize(() => {
        this.submitting = false;
      })
    ).subscribe({
      next: () => {
        this.toast.success('Account created. You can sign in now.');
        this.switchTab('login');
        this.loginForm.patchValue({ email: email ?? '', password: password ?? '' });
      },
      error: () => {
        this.signupError = 'Signup failed. Try a different email address.';
        this.toast.error('Signup failed. Try a different email address.');
      }
    });
  }
}
