import {Component, SimpleChanges} from '@angular/core';
import {ContentComponent} from "../classes/content.component";
import {OnChanges} from "@angular/core";
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-content-scale',
  templateUrl: './content-scale.component.html',
  styleUrls: ['./content-scale.component.scss']
})
export class ContentScaleComponent extends ContentComponent implements OnChanges {
  radiosNumber: number;
  minLabel?: string;
  maxLabel?: string;
  control: FormControl;
  indexFromZero: boolean;

  constructor(private builder: FormBuilder) {
    super();
    this.radiosNumber = 5;
    this.control = this.builder.control(null);
    this.indexFromZero = false;
    this.submitType = 'number';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.item) {
      this.minLabel = this.item.options[0].content;
      this.maxLabel = this.item.options[1].content;
      if (/10/.test(this.item?.type)) {
        this.radiosNumber = 10;
      } else if (/NPS/.test(this.item.type)) {
        this.radiosNumber = 11;
        this.indexFromZero = true;
      }
    }
    if (this.item?.required) {
      this.control.setValidators(Validators.required);
      this.control.updateValueAndValidity();
    }
  }
}
