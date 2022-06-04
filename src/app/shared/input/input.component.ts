import {Component} from '@angular/core';
import {Input} from "@angular/core";
import {FormControl} from "@angular/forms";
import {InputType} from "../types/input-type";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() control: FormControl | any;
  @Input() displayAsTextarea = false;
  @Input() type: InputType = 'text';
  @Input() placeholder!: string;
  @Input() errorMessage?: string = 'Pole nie może być puste';

  constructor() {
  }
}
