import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SessionState } from '../models/measurement.models';

const SESSION_KEY = 'qma_session';
const LEGACY_GUEST_HISTORY_KEY = 'qma_guest_history';

@Injectable({ providedIn: 'root' })
export class SessionService {
  constructor(private readonly router: Router) {}

  private readRaw(): SessionState {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) {
      return { kind: 'guest' };
    }
    try {
      return JSON.parse(raw) as SessionState;
    } catch {
      return { kind: 'guest' };
    }
  }

  getSession(): SessionState {
    return this.readRaw();
  }

  isAuthenticated(): boolean {
    return this.readRaw().kind === 'authenticated' && !!this.readRaw().token;
  }

  isGuest(): boolean {
    return !this.isAuthenticated();
  }

  get token(): string | null {
    return this.readRaw().token ?? null;
  }

  get email(): string | null {
    return this.readRaw().email ?? null;
  }

  get displayName(): string {
    const session = this.readRaw();
    return session.name || session.email || 'Guest';
  }

  get avatarLetter(): string {
    return (this.displayName || 'G').charAt(0).toUpperCase();
  }

  get authHeader(): Record<string, string> {
    const token = this.token;
    return token ? { Authorization: `Bearer ${token}` } : {};
  }

  get googleLoginUrl(): string {
    return 'http://localhost:8080/oauth2/authorization/google';
  }

  storeAuthenticatedSession(session: Pick<SessionState, 'token' | 'email' | 'name' | 'picture'>): void {
    localStorage.setItem(
      SESSION_KEY,
      JSON.stringify({ kind: 'authenticated', ...session } satisfies SessionState)
    );
  }

  storeGuestSession(): void {
    localStorage.removeItem(LEGACY_GUEST_HISTORY_KEY);
    localStorage.setItem(SESSION_KEY, JSON.stringify({ kind: 'guest' } satisfies SessionState));
  }

  logout(): void {
    localStorage.removeItem(SESSION_KEY);
    localStorage.removeItem(LEGACY_GUEST_HISTORY_KEY);
    void this.router.navigateByUrl('/auth');
  }
}
