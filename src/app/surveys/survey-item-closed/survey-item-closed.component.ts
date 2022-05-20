import {Component} from '@angular/core';
import {AbstractOptions} from "../classes/abstract-options.component";

@Component({
  selector: 'app-survey-item-closed',
  templateUrl: './survey-item-closed.component.html',
  styleUrls: ['./survey-item-closed.component.scss']
})
export class SurveyItemClosedComponent extends AbstractOptions {
  constructor() {
    super();
  }
}
