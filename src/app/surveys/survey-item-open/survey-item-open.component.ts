import {Component} from '@angular/core';
import {OnInit} from "@angular/core";
import {OnDestroy} from "@angular/core";
import {AbstractContent} from "../classes/abstract-content.component";
import {ValidatorFn} from "@angular/forms";
import {DropdownItem} from "../../shared/interfaces/dropdown-item";
import {SurveyItemTypeOpen} from "../types/survey-item-type";

interface SurveyOpenItem extends DropdownItem {
  label: 'krótka odpowiedź tekstowa' | 'długa odpowiedź tekstowa' | 'wartość liczbowa';
  value: SurveyItemTypeOpen;
}

@Component({
  selector: 'app-survey-item-open',
  templateUrl: './survey-item-open.component.html',
  styleUrls: ['./survey-item-open.component.scss']
})
export class SurveyItemOpenComponent extends AbstractContent implements OnInit, OnDestroy {
  items: SurveyOpenItem[] = [
    {label: 'krótka odpowiedź tekstowa', value: 'openShort'},
    {label: 'długa odpowiedź tekstowa', value: 'openLong'},
    {label: 'wartość liczbowa', value: 'openNumeric'}
  ]

  validatorFunction: ValidatorFn | null = null;

  constructor() {
    super();
  }

  ngOnInit() {
    let {options} = this.itemForm.controls;
    this.validatorFunction = options.validator;
    options.clearValidators();
    options.updateValueAndValidity();
    if (options.length) options.clear();
  }

  ngOnDestroy() {
    let {options} = this.itemForm.controls;
    options.setValidators(this.validatorFunction);
    options.updateValueAndValidity();
  }
}
