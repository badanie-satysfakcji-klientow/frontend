import {Component} from '@angular/core';
import {Input} from "@angular/core";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() control: FormControl | any;
  @Input() inputType = '';
  @Input() controlType = '';
  @Input() type = '';
  @Input() placeholder!: string;

  constructor() {
  }

  showErrors() {
    const {dirty, touched, errors} = this.control;
    return dirty && touched && errors;
  }

}