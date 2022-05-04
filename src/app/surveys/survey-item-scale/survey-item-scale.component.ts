import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {AbstractOptions} from "../classes/abstract-options.component";
import {SurveyScaleItem} from "./survey-scale-item";

@Component({
  selector: 'app-survey-item-scale',
  templateUrl: './survey-item-scale.component.html',
  styleUrls: ['./survey-item-scale.component.scss']
})
export class SurveyItemScaleComponent extends AbstractOptions implements OnInit{
  items: SurveyScaleItem[] = [
    {label: '5', value: 'scale5'},
    {label: '10', value: 'scale10'},
    {label: '11 (NPS)', value: 'scaleNPS'}
  ]

  constructor(private formBuilder: FormBuilder) {
    super();
  }

  ngOnInit() {
    const {length} = this.itemForm.controls.options;
    if (length === 2) return;
    if (length === 1 || length > 2) this.clearOptions();
    this.createOptions();
  }

  private clearOptions() {
    this.itemForm.controls.options.clear();
  }

  private createOptions() {
    for (let i = 0; i < 2; i++) {
      this.itemForm.controls.options.push(this.formBuilder.control(''));
    }
  }
}
