export interface ConfirmDialogOptions {
  title: string;
  text: string;
  accept: () => void;
  reject: () => void;
  successText: string;
  errorText: string;
  closeOnBackgroundClick: boolean;
}
