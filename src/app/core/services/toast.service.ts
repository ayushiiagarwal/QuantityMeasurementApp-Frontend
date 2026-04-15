import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export type ToastVariant = 'success' | 'error' | 'info';

export interface ToastMessage {
  text: string;
  variant: ToastVariant;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private readonly messagesSubject = new Subject<ToastMessage>();
  readonly messages$ = this.messagesSubject.asObservable();

  success(text: string): void {
    this.messagesSubject.next({ text, variant: 'success' });
  }

  error(text: string): void {
    this.messagesSubject.next({ text, variant: 'error' });
  }

  info(text: string): void {
    this.messagesSubject.next({ text, variant: 'info' });
  }
}
