import { MeasurementCategory, UnitOption } from '../models/measurement.models';

export const UNIT_OPTIONS: Record<MeasurementCategory, UnitOption[]> = {
  length: [
    { code: 'FEET', label: 'Feet', symbol: 'ft' },
    { code: 'INCH', label: 'Inch', symbol: 'in' },
    { code: 'YARDS', label: 'Yards', symbol: 'yd' },
    { code: 'CENTIMETER', label: 'Centimeter', symbol: 'cm' }
  ],
  weight: [
    { code: 'KILOGRAM', label: 'Kilogram', symbol: 'kg' },
    { code: 'GRAM', label: 'Gram', symbol: 'g' },
    { code: 'POUND', label: 'Pound', symbol: 'lb' }
  ],
  volume: [
    { code: 'LITRE', label: 'Litre', symbol: 'L' },
    { code: 'MILLILITRE', label: 'Millilitre', symbol: 'mL' },
    { code: 'GALLON', label: 'Gallon', symbol: 'gal' }
  ],
  temperature: [
    { code: 'CELSIUS', label: 'Celsius', symbol: '°C' },
    { code: 'FAHRENHEIT', label: 'Fahrenheit', symbol: '°F' }
  ]
};

export const CATEGORY_LABELS: Record<MeasurementCategory, string> = {
  length: 'Length',
  weight: 'Weight',
  volume: 'Volume',
  temperature: 'Temperature'
};

export const OPERATION_LABELS = {
  compare: 'Compare',
  convert: 'Convert',
  add: 'Add',
  subtract: 'Subtract',
  divide: 'Divide'
} as const;
