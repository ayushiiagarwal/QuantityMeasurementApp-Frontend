export type MeasurementCategory = 'length' | 'weight' | 'volume' | 'temperature';
export type MeasurementOperation = 'compare' | 'convert' | 'add' | 'subtract' | 'divide';

export interface QuantityDto {
  value: number;
  unit: string;
}

export interface QuantityInputDto {
  thisQuantityDTO: QuantityDto;
  thatQuantityDTO: QuantityDto;
}

export interface QuantityMeasurementRecord {
  id?: number;
  operation?: string;
  operand1?: string;
  operand2?: string | null;
  result?: string | null;
  error?: string | null;
  userEmail?: string | null;
  createdAt?: string | null;
}

export interface QuantityHistoryDraft {
  operation: string;
  operand1: string;
  operand2: string | null;
  result: string | null;
  error: string | null;
}

export interface SessionState {
  kind: 'guest' | 'authenticated';
  token?: string | null;
  email?: string | null;
  name?: string | null;
  picture?: string | null;
}

export interface UnitOption {
  code: string;
  label: string;
  symbol: string;
}
