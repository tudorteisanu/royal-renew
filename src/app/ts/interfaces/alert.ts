export interface AlertComponentInterface {
  showSuccess(message: string): void;
  showError(message: string): void;
  showInfo(message: string): void;
  showWarning(message: string): void;
}

export interface AlertInterface {
  message: string;
  title: string;
  index?: number;
  type: AlertType;
  withoutClosing?: boolean;
}

export enum AlertType {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
  WARNING = 'warning',
}
