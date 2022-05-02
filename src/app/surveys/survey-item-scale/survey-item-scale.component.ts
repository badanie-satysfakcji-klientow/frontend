import {Component, OnInit} from '@angular/core';
import {OnDestroy} from "@angular/core";
import {FormBuilder} from "@angular/forms";
import {AbstractOptions} from "../classes/abstract-options.component";
import {SurveyScaleItem} from "./survey-scale-item";

@Component({
  selector: 'app-survey-item-scale',
  templateUrl: './survey-item-scale.component.html',
  styleUrls: ['./survey-item-scale.component.scss']
})
export class SurveyItemScaleComponent extends AbstractOptions implements OnInit, OnDestroy {
  items: SurveyScaleItem[] = [
    {label: '5', value: 'scale5'},
    {label: '10', value: 'scale10'},
    {label: '11 (NPS)', value: 'scaleNPS'}
  ]

  constructor(private formBuilder: FormBuilder) {
    super();
  }

  private clearOptions(){
    this.itemForm.controls.options.clear();
  }

  ngOnInit() {
    this.clearOptions();
    for (let i = 0; i < 2; i++) {
      this.itemForm.controls.options.push(this.formBuilder.control(''));
    }
  }

  ngOnDestroy() {
    this.clearOptions();
  }
}
