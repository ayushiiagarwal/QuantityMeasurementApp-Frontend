import { Injectable } from '@angular/core';
import { QuantityMeasurementRecord, SessionState } from '../models/measurement.models';

@Injectable({ providedIn: 'root' })
export class HistoryService {
  mergeHistory(session: SessionState, remote: QuantityMeasurementRecord[]): QuantityMeasurementRecord[] {
    if (session.kind === 'guest') {
      return [];
    }

    return remote.slice().sort((a, b) => {
      const aTime = a.createdAt ? Date.parse(a.createdAt) : 0;
      const bTime = b.createdAt ? Date.parse(b.createdAt) : 0;
      return bTime - aTime;
    });
  }
}
