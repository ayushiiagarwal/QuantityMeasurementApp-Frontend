import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ToastMessage, ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-toast-host',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast-host.component.html',
  styleUrl: './toast-host.component.css'
})
export class ToastHostComponent implements OnInit, OnDestroy {
  message: ToastMessage | null = null;
  visible = false;

  private readonly subscriptions = new Subscription();
  private timer: number | undefined;

  constructor(private readonly toastService: ToastService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.toastService.messages$.subscribe((message) => {
        this.message = message;
        this.visible = true;
        window.clearTimeout(this.timer);
        this.timer = window.setTimeout(() => {
          this.visible = false;
        }, 2500);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    window.clearTimeout(this.timer);
  }
}
