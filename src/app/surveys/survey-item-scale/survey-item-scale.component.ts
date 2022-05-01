import {Component} from '@angular/core';
import {AbstractContent} from '../classes/abstract-content.component';

@Component({
  selector: 'app-survey-item-scale',
  templateUrl: './survey-item-scale.component.html',
  styleUrls: ['./survey-item-scale.component.scss']
})
export class SurveyItemScaleComponent extends AbstractContent {

  constructor() {
    super();
  }

}
