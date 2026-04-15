import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../../core/services/session.service';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-google-callback',
  standalone: true,
  template: `
    <main class="callback-shell">
      <section class="callback-card">
        <p class="callback-kicker">Signing you in</p>
        <h1>Connecting your Google account</h1>
        <p>{{ message }}</p>
      </section>
    </main>
  `,
  styles: [`
    .callback-shell {
      min-height: 100vh;
      display: grid;
      place-items: center;
      padding: 24px;
    }

    .callback-card {
      width: min(100%, 540px);
      padding: 28px;
      border-radius: var(--radius-xl);
      border: 1px solid var(--border);
      background: rgba(21, 21, 30, 0.92);
      box-shadow: 0 28px 72px rgba(0, 0, 0, 0.45);
    }

    .callback-kicker {
      margin: 0 0 10px;
      text-transform: uppercase;
      letter-spacing: 0.22em;
      color: var(--muted);
      font-size: 10px;
    }

    h1 {
      margin: 0 0 12px;
      font-family: 'Space Grotesk', sans-serif;
    }

    p {
      margin: 0;
      color: var(--muted);
      line-height: 1.6;
    }
  `]
})
export class GoogleCallbackComponent implements OnInit {
  message = 'Please wait while we finish the secure login flow.';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly session: SessionService,
    private readonly toast: ToastService
  ) {}

  ngOnInit(): void {
    const token = this.route.snapshot.queryParamMap.get('token');
    const email = this.route.snapshot.queryParamMap.get('email');
    const name = this.route.snapshot.queryParamMap.get('name') || undefined;

    if (!token || !email) {
      this.message = 'Google sign-in did not return the expected session data.';
      this.toast.error('Google sign-in could not be completed.');
      void this.router.navigateByUrl('/auth');
      return;
    }

    this.session.storeAuthenticatedSession({ token, email, name: name || email.split('@')[0] });
    this.message = 'Login complete. Redirecting to your dashboard.';
    this.finishLogin(email);
  }

  private finishLogin(email: string): void {
    this.toast.success(`Welcome back, ${email}.`);
    void this.router.navigateByUrl('/dashboard');
  }
}
