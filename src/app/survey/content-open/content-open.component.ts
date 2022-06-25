import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {InputType} from "../../shared/types/input-type";
import {Item} from "../interfaces/item";

@Component({
  selector: 'app-content-open',
  templateUrl: './content-open.component.html',
  styleUrls: ['./content-open.component.scss']
})
export class ContentOpenComponent implements OnChanges {
  @Input() item?: Item;
  displayAsTextarea: boolean;
  control: FormControl;
  inputType: InputType;

  constructor(private builder: FormBuilder) {
    this.displayAsTextarea = false;
    this.inputType = 'text';
    this.control = this.builder.control('');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.item) {
      this.displayAsTextarea = /Long/.test(this.item.type);
      this.inputType = /Numeric/.test(this.item.type) ? 'number' : 'text';
      if (this.item.required) {
        this.control.setValidators(Validators.required);
        this.control.updateValueAndValidity();
      }
    }
  }

}
