export type GameState = (number | null)[][];

export type Square = { numberIndex: number, groupIndex: number };

export type SelectedSquare = Square | null;

export type Action = {
  type: 'add-number' | 'remove-number';
  square: Square;
  newValue: number | null;
  previousValue: number | null;
};

export type ActionHistory = Action[];

export type ValidationResult = {
  isValid: boolean;
  errorMessage?: string;
};
