import { Routes } from '@angular/router';
import { AuthPageComponent } from './features/auth/auth-page.component';
import { GoogleCallbackComponent } from './features/auth/google-callback.component';
import { DashboardPageComponent } from './features/dashboard/dashboard-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  { path: 'auth', component: AuthPageComponent },
  { path: 'auth/callback', component: GoogleCallbackComponent },
  { path: 'dashboard', component: DashboardPageComponent },
  { path: '**', redirectTo: 'auth' }
];
