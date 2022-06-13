import {Component} from '@angular/core';
import {Input} from "@angular/core";
import {SurveyConfiguration} from "../interfaces/survey-configuration";
import {ItemsStateService} from "../services/items-state.service";
import {DATE_FORMAT} from "../../shared/constants/date-format";

@Component({
  selector: 'app-survey-summary',
  templateUrl: './survey-summary.component.html',
  styleUrls: ['./survey-summary.component.scss']
})
export class SurveySummaryComponent {
  @Input() surveyConfiguration!: SurveyConfiguration;
  dateFormat = DATE_FORMAT;

  constructor(public questionsState: ItemsStateService
  ) {
  }
}
