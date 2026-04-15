import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class AuthApiService {
  constructor(private readonly http: HttpClient) {}

  login(payload: LoginPayload): Observable<string> {
    return this.http.post(`${environment.apiBaseUrl}/auth/login`, payload, { responseType: 'text' });
  }

  register(payload: RegisterPayload): Observable<string> {
    return this.http.post(`${environment.apiBaseUrl}/auth/register`, payload, { responseType: 'text' });
  }
}
