import {Component} from '@angular/core';
import {AbstractContent} from '../classes/abstract-content.component';
import {SurveyScaleItem} from "./survey-scale-item";

@Component({
  selector: 'app-survey-item-scale',
  templateUrl: './survey-item-scale.component.html',
  styleUrls: ['./survey-item-scale.component.scss']
})
export class SurveyItemScaleComponent extends AbstractContent {
  items: SurveyScaleItem[] = [
    {label: '5', value: 'scale5'},
    {label: '10', value: 'scale10'},
    {label: '11 (NPS)', value: 'scaleNPS'}
  ]

  constructor() {
    super();
  }

}
