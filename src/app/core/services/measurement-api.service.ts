import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  QuantityHistoryDraft,
  QuantityInputDto,
  QuantityMeasurementRecord,
  SessionState
} from '../models/measurement.models';

@Injectable({ providedIn: 'root' })
export class MeasurementApiService {
  constructor(private readonly http: HttpClient) {}

  private headers(session: SessionState): { headers?: HttpHeaders } {
    const token = session.token;
    if (!token) {
      return {};
    }
    return { headers: new HttpHeaders({ Authorization: `Bearer ${token}` }) };
  }

  compare(input: QuantityInputDto, session: SessionState): Observable<QuantityMeasurementRecord> {
    return this.http.post<QuantityMeasurementRecord>(`${environment.apiBaseUrl}/api/quantities/compare`, input, this.headers(session));
  }

  convert(input: QuantityInputDto, session: SessionState): Observable<QuantityMeasurementRecord> {
    return this.http.post<QuantityMeasurementRecord>(`${environment.apiBaseUrl}/api/quantities/convert`, input, this.headers(session));
  }

  add(input: QuantityInputDto, session: SessionState): Observable<QuantityMeasurementRecord> {
    return this.http.post<QuantityMeasurementRecord>(`${environment.apiBaseUrl}/api/quantities/add`, input, this.headers(session));
  }

  subtract(input: QuantityInputDto, session: SessionState): Observable<QuantityMeasurementRecord> {
    return this.http.post<QuantityMeasurementRecord>(`${environment.apiBaseUrl}/api/quantities/subtract`, input, this.headers(session));
  }

  divide(input: QuantityInputDto, session: SessionState): Observable<QuantityMeasurementRecord> {
    return this.http.post<QuantityMeasurementRecord>(`${environment.apiBaseUrl}/api/quantities/divide`, input, this.headers(session));
  }

  fetchHistory(session: SessionState): Observable<QuantityMeasurementRecord[]> {
    return this.http.get<QuantityMeasurementRecord[]>(`${environment.apiBaseUrl}/api/quantities/history`, this.headers(session));
  }

  importGuestHistory(entries: QuantityHistoryDraft[], session: SessionState): Observable<QuantityMeasurementRecord[]> {
    return this.http.post<QuantityMeasurementRecord[]>(
      `${environment.apiBaseUrl}/api/quantities/history/import`,
      entries,
      this.headers(session)
    );
  }

  clearHistory(session: SessionState): Observable<void> {
    return this.http.delete<void>(`${environment.apiBaseUrl}/api/quantities/history`, this.headers(session));
  }
}
