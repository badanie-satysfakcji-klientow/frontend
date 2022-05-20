import {Component} from '@angular/core';
import {AbstractOptions} from "../classes/abstract-options.component";

@Component({
  selector: 'app-survey-item-grid',
  templateUrl: './survey-item-grid.component.html',
  styleUrls: ['./survey-item-grid.component.scss']
})
export class SurveyItemGridComponent extends AbstractOptions {
  constructor() {
    super();
  }
}
