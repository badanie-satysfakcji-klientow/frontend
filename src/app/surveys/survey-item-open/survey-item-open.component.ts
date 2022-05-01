import {Component} from '@angular/core';
import {AbstractContent} from "../classes/abstract-content.component";
import {SurveyItemOpen} from "./survey-item-open";

@Component({
  selector: 'app-survey-item-open',
  templateUrl: './survey-item-open.component.html',
  styleUrls: ['./survey-item-open.component.scss']
})
export class SurveyItemOpenComponent extends AbstractContent {

  constructor() {
    super();
  }

  items: SurveyItemOpen[] = [
    {
      label: 'krótka odpowiedź tekstowa',
      value: 'openShort'
    },
    {
      label: 'długa odpowiedź tekstowa',
      value: 'openLong'
    },
    {
      label: 'wartość liczbowa',
      value: 'openNumeric'
    }
  ]
}
