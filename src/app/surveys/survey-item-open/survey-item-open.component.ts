import {Component, OnDestroy} from '@angular/core';
import {AbstractContent} from "../classes/abstract-content.component";
import {SurveyOpenItem} from "./survey-open-item";

@Component({
  selector: 'app-survey-item-open',
  templateUrl: './survey-item-open.component.html',
  styleUrls: ['./survey-item-open.component.scss']
})
export class SurveyItemOpenComponent extends AbstractContent implements OnDestroy {

  constructor() {
    super();
  }

  items: SurveyOpenItem[] = [
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
