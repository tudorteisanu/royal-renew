import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

const localizedErrors = {
  required: 'This is required field',
  email: 'Invalid email format',
  minLength: 'Min length MIN_LENGTH',
  maxLength: 'Min length MAX_LENGTH',
  password: 'Passwords not match',
};

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  constructor() {}

  public parseControlErrors(control: FormControl): Array<string> {
    const messages = [];

    if (control.hasError('required')) {
      messages.push(localizedErrors.required);
    }

    if (control.hasError('minlength')) {
      const error = control.getError('minlength');
      messages.push(localizedErrors.minLength.replace('MIN_LENGTH', error.requiredLength));
    }

    if (control.hasError('maxlength')) {
      const error = control.getError('maxlength');
      messages.push(localizedErrors.maxLength.replace('MAX_LENGTH', error.requiredLength));
    }

    if (control.hasError('email')) {
      messages.push(localizedErrors.email);
    }

    if (control.hasError('passwordMismatch')) {
      messages.push(localizedErrors.password);
    }

    return messages;
  }
}
