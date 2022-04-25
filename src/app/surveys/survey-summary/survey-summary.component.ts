import {Component} from '@angular/core';
import {SurveyConfiguration} from "../interfaces/survey-configuration";
import {Input} from "@angular/core";

@Component({
  selector: 'app-survey-summary',
  templateUrl: './survey-summary.component.html',
  styleUrls: ['./survey-summary.component.scss']
})
export class SurveySummaryComponent {
  @Input() surveyConfiguration!: SurveyConfiguration;

  constructor() {
  }

}
