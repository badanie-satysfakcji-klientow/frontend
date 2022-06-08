import {Component} from '@angular/core';
import {Input} from "@angular/core";
import {SurveyConfiguration} from "../interfaces/survey-configuration";
import {QuestionsStateService} from "../services/questions-state.service";
import {DATE_FORMAT} from "../../shared/constants/date-format";

@Component({
  selector: 'app-survey-summary',
  templateUrl: './survey-summary.component.html',
  styleUrls: ['./survey-summary.component.scss']
})
export class SurveySummaryComponent {
  @Input() surveyConfiguration!: SurveyConfiguration;
  dateFormat = DATE_FORMAT;

  constructor(public questionsState: QuestionsStateService
  ) {
  }
}
