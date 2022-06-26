import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ValidationService } from 'src/app/services/helpers/validation.service';

declare type InputType = 'text' | 'number' | 'password' | 'email';
declare type TagType = 'input' | 'select' | 'textarea';

@Component({
  selector: 'form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FormInputComponent {
  @Input() control: FormControl = new FormControl();

  @Input() inputType: InputType = 'text';

  @Input() value: any;

  @Input() errors: Array<string> = [];

  @Output() valueChange = new EventEmitter();

  @Input() tag: TagType = 'input';

  @Input() items: Array<any> = [];

  @Input() rows: string = '3';

  @Input() label: string = '';

  constructor(private readonly validationService: ValidationService) {}

  get errorMessage(): string {
    if (this.errors?.length) {
      return this.errors.join(', ');
    }

    return this.validationService.parseControlErrors(this.control).join(', ');
  }

  get errorClass(): string {
    if (this.errorMessage && (this.control.touched || this.control.dirty)) {
      return 'error';
    }

    return 'error hidden';
  }

  get inputClass(): { [key: string]: boolean } {
    return {
      'error-input': (this.control.dirty || this.control.touched) && !!this.errorMessage,
    };
  }

  emitInput(event: any): void {
    this.valueChange.emit(event.target.value);
  }

  selectItem(item: any) {
    this.valueChange.emit(item.value);
  }

  get isRequired(): boolean {
    return this.control.hasValidator(Validators.required);
  }

  get text(): string {
    if (this.isRequired && this.label) {
      return `${this.label}*`;
    }
    return this.label;
  }
}
