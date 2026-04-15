import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { CATEGORY_LABELS, OPERATION_LABELS, UNIT_OPTIONS } from '../../core/data/units';
import { HistoryService } from '../../core/services/history.service';
import { MeasurementApiService } from '../../core/services/measurement-api.service';
import { QuantityMeasurementRecord, SessionState, MeasurementCategory } from '../../core/models/measurement.models';
import { SessionService } from '../../core/services/session.service';
import { ToastService } from '../../core/services/toast.service';
import { SectionCardComponent } from '../../shared/components/section-card/section-card.component';

type PanelKey = 'convert' | 'compare' | 'arithmetic' | 'reference' | 'history';
type ArithmeticOp = 'add' | 'subtract' | 'divide';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SectionCardComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent implements OnInit {
  readonly categoryLabels = CATEGORY_LABELS;
  readonly unitOptions = UNIT_OPTIONS;
  readonly operationLabels = OPERATION_LABELS;
  readonly panels: PanelKey[] = ['convert', 'compare', 'arithmetic', 'reference', 'history'];
  readonly arithmeticOps: ArithmeticOp[] = ['add', 'subtract', 'divide'];
  readonly categoryKeys: MeasurementCategory[] = ['length', 'weight', 'volume', 'temperature'];
  readonly themeIcons = {
    dark: '☀',
    light: '☾'
  };
  private readonly fb = inject(FormBuilder);
  private readonly api = inject(MeasurementApiService);
  private readonly history = inject(HistoryService);
  private readonly sessionService = inject(SessionService);
  private readonly toast = inject(ToastService);

  activePanel: PanelKey = 'convert';
  session: SessionState = this.sessionService.getSession();
  loadingHistory = false;
  submitting = false;
  theme: 'dark' | 'light' = 'dark';
  historyRecords: QuantityMeasurementRecord[] = [];
  convertResult: QuantityMeasurementRecord | null = null;
  compareResult: QuantityMeasurementRecord | null = null;
  arithmeticResult: QuantityMeasurementRecord | null = null;

  readonly convertForm = this.fb.group({
    category: ['length' as MeasurementCategory, Validators.required],
    value: [null as number | null, [Validators.required]],
    fromUnit: ['FEET', Validators.required],
    toUnit: ['INCH', Validators.required]
  });

  readonly compareForm = this.fb.group({
    category: ['length' as MeasurementCategory, Validators.required],
    leftValue: [null as number | null, Validators.required],
    leftUnit: ['FEET', Validators.required],
    rightValue: [null as number | null, Validators.required],
    rightUnit: ['INCH', Validators.required]
  });

  readonly arithmeticForm = this.fb.group({
    category: ['length' as MeasurementCategory, Validators.required],
    operation: ['add' as ArithmeticOp, Validators.required],
    leftValue: [null as number | null, Validators.required],
    leftUnit: ['FEET', Validators.required],
    rightValue: [null as number | null, Validators.required],
    rightUnit: ['INCH', Validators.required],
    resultUnit: ['FEET', Validators.required]
  });

  constructor() {}

  ngOnInit(): void {
    this.initTheme();
    this.setupCategoryDefaults('length');
    this.refreshSession();
    this.loadHistory();

    this.convertForm.controls.category.valueChanges.subscribe((category) => {
      if (category) {
        this.setupCategoryDefaults(category);
      }
    });

    this.compareForm.controls.category.valueChanges.subscribe((category) => {
      if (category) {
        this.setupCompareDefaults(category);
      }
    });

    this.arithmeticForm.controls.category.valueChanges.subscribe((category) => {
      if (category) {
        this.setupArithmeticDefaults(category);
      }
    });
  }

  refreshSession(): void {
    this.session = this.sessionService.getSession();
  }

  openPanel(panel: PanelKey): void {
    this.activePanel = panel;
  }

  signOut(): void {
    this.sessionService.logout();
  }

  loginWithGoogle(): void {
    window.location.href = this.sessionService.googleLoginUrl;
  }

  toggleTheme(): void {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    this.applyTheme();
  }

  get currentHistory(): QuantityMeasurementRecord[] {
    return this.historyRecords;
  }

  get isGuest(): boolean {
    return this.session.kind === 'guest';
  }

  get displayName(): string {
    return this.session.name || this.session.email || 'Guest';
  }

  get avatarLetter(): string {
    return this.displayName.charAt(0).toUpperCase();
  }

  get convertUnits(): string[] {
    return this.unitOptions[this.convertForm.controls.category.value ?? 'length'].map((u) => u.code);
  }

  get compareUnits(): string[] {
    return this.unitOptions[this.compareForm.controls.category.value ?? 'length'].map((u) => u.code);
  }

  get arithmeticUnits(): string[] {
    return this.unitOptions[this.arithmeticForm.controls.category.value ?? 'length'].map((u) => u.code);
  }

  getUnitLabel(category: MeasurementCategory, code: string): string {
    return this.unitOptions[category].find((unit) => unit.code === code)?.label || code;
  }

  getUnitSymbol(category: MeasurementCategory, code: string): string {
    return this.unitOptions[category].find((unit) => unit.code === code)?.symbol || code;
  }

  submitConvert(): void {
    if (this.convertForm.invalid) {
      this.toast.error('Please fill all converter fields.');
      return;
    }

    const { value, fromUnit, toUnit } = this.convertForm.getRawValue();
    const payload = this.buildInputPayload(value ?? 0, fromUnit ?? 'FEET', 1, toUnit ?? 'INCH');
    this.submitting = true;
    this.api
      .convert(payload, this.session)
      .pipe(finalize(() => (this.submitting = false)))
      .subscribe({
        next: (response) => {
          this.convertResult = response;
          this.captureHistory(response);
          if (response.error) {
            this.toast.error(response.error);
            return;
          }
          this.toast.success('Conversion complete.');
        },
        error: () => this.toast.error('Conversion failed. Please check the selected units.')
      });
  }

  submitCompare(): void {
    if (this.compareForm.invalid) {
      this.toast.error('Please fill both quantities before comparing.');
      return;
    }

    const { leftValue, leftUnit, rightValue, rightUnit } = this.compareForm.getRawValue();
    const payload = this.buildInputPayload(leftValue ?? 0, leftUnit ?? 'FEET', rightValue ?? 0, rightUnit ?? 'INCH');
    this.submitting = true;
    this.api
      .compare(payload, this.session)
      .pipe(finalize(() => (this.submitting = false)))
      .subscribe({
        next: (response) => {
          this.compareResult = response;
          this.captureHistory(response);
          if (response.error) {
            this.toast.error(response.error);
            return;
          }
          this.toast.success('Comparison complete.');
        },
        error: () => this.toast.error('Comparison failed. Please verify the input units.')
      });
  }

  submitArithmetic(): void {
    if (this.arithmeticForm.invalid) {
      this.toast.error('Please fill all arithmetic fields.');
      return;
    }

    const { leftValue, leftUnit, rightValue, rightUnit, operation } = this.arithmeticForm.getRawValue();
    const payload = this.buildInputPayload(leftValue ?? 0, leftUnit ?? 'FEET', rightValue ?? 0, rightUnit ?? 'INCH');
    this.submitting = true;

    const request$ = operation === 'add'
      ? this.api.add(payload, this.session)
      : operation === 'subtract'
        ? this.api.subtract(payload, this.session)
        : this.api.divide(payload, this.session);

    request$
      .pipe(finalize(() => (this.submitting = false)))
      .subscribe({
        next: (response) => {
          this.arithmeticResult = response;
          this.captureHistory(response);
          if (response.error) {
            this.toast.error(response.error);
            return;
          }
          this.toast.success('Calculation complete.');
        },
        error: () => this.toast.error('Calculation failed. Please review the selected units.')
      });
  }

  clearHistory(): void {
    if (this.isGuest) {
      this.historyRecords = [];
      this.toast.info('Guest sessions do not store history.');
      return;
    }

    this.api.clearHistory(this.session).subscribe({
      next: () => {
        this.toast.success('History cleared.');
        this.loadHistory();
      },
      error: () => this.toast.error('Could not clear remote history.')
    });
  }

  private loadHistory(): void {
    if (this.session.kind === 'guest') {
      this.historyRecords = [];
      return;
    }

    this.fetchRemoteHistory();
  }

  private fetchRemoteHistory(): void {
    this.loadingHistory = true;
    this.api
      .fetchHistory(this.session)
      .pipe(finalize(() => (this.loadingHistory = false)))
      .subscribe({
        next: (records) => {
          this.historyRecords = this.history.mergeHistory(this.session, records);
        },
        error: () => {
          this.historyRecords = [];
          this.toast.error('Unable to load history right now.');
        }
      });
  }

  private captureHistory(record: QuantityMeasurementRecord): void {
    if (this.session.kind === 'guest') {
      return;
    }

    this.historyRecords = [record, ...this.historyRecords].slice(0, 40);
  }

  private initTheme(): void {
    const stored = localStorage.getItem('qma_theme');
    this.theme = stored === 'light' ? 'light' : 'dark';
    this.applyTheme();
  }

  private applyTheme(): void {
    document.body.classList.toggle('light-theme', this.theme === 'light');
    localStorage.setItem('qma_theme', this.theme);
  }

  private setupCategoryDefaults(category: MeasurementCategory): void {
    const units = this.unitOptions[category];
    this.convertForm.patchValue({
      fromUnit: units[0]?.code,
      toUnit: units[1]?.code ?? units[0]?.code
    }, { emitEvent: false });
  }

  private setupCompareDefaults(category: MeasurementCategory): void {
    const units = this.unitOptions[category];
    this.compareForm.patchValue({
      leftUnit: units[0]?.code,
      rightUnit: units[1]?.code ?? units[0]?.code
    }, { emitEvent: false });
  }

  private setupArithmeticDefaults(category: MeasurementCategory): void {
    const units = this.unitOptions[category];
    this.arithmeticForm.patchValue({
      leftUnit: units[0]?.code,
      rightUnit: units[1]?.code ?? units[0]?.code,
      resultUnit: units[0]?.code
    }, { emitEvent: false });
  }

  private buildInputPayload(leftValue: number, leftUnit: string, rightValue: number, rightUnit: string) {
    return {
      thisQuantityDTO: {
        value: Number(leftValue),
        unit: leftUnit
      },
      thatQuantityDTO: {
        value: Number(rightValue),
        unit: rightUnit
      }
    };
  }

  formatRecord(record: QuantityMeasurementRecord): string {
    if (record.error) {
      return record.error;
    }

    const left = record.operand1 || '';
    const right = record.operand2 ? ` and ${record.operand2}` : '';
    const result = record.result || '';
    return `${record.operation || 'OP'}: ${left}${right} = ${result}`;
  }

  formatTime(record: QuantityMeasurementRecord): string {
    if (!record.createdAt) {
      return 'Saved locally';
    }
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      month: 'short',
      day: 'numeric'
    }).format(new Date(record.createdAt));
  }

  get verdictLabel(): string {
    const value = this.compareResult?.result?.toLowerCase();
    if (value === 'true') {
      return 'Equal';
    }
    if (value === 'false') {
      return 'Not Equal';
    }
    return 'Ready to compare';
  }
}
