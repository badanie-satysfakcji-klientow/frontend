import {Component, OnInit} from '@angular/core';
import {OnDestroy} from "@angular/core";
import {FormBuilder, Validators} from "@angular/forms";
import {AbstractOptions} from "../classes/abstract-options.component";
import {DropdownItem} from "../../shared/interfaces/dropdown-item";
import {SurveyItemTypeScale} from "../types/survey-item-type";

interface SurveyScaleItem extends DropdownItem {
  label: '5' | '10' | '11 (NPS)';
  value: SurveyItemTypeScale;
}

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
  ];

  constructor(private formBuilder: FormBuilder) {
    super();
  }

  ngOnInit() {
    const {options} = this.itemForm.controls;
    if (options.length === 0) {
      this.createOptions();
    } else if (options.length === 2) {
      options.controls.forEach((control) => {
        control.clearValidators();
        control.updateValueAndValidity();
      })
    } else {
      this.clearOptions();
      this.createOptions();
    }
  }

  ngOnDestroy(): void {
    this.itemForm.controls.options.controls.forEach((control) => {
      control.setValidators([Validators.required]);
      control.updateValueAndValidity();
    })
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
