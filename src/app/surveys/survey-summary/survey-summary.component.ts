import {Component} from '@angular/core';
import {Input} from "@angular/core";
import {DatePipe} from "@angular/common";
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

  constructor(public questionsState: QuestionsStateService,
              private datePipe: DatePipe
  ) {
  }

  getStartEndDateFormatted() {
    const {startDate, endDate} = this.surveyConfiguration;
    return `${this.datePipe.transform(startDate, DATE_FORMAT)} - ${this.datePipe.transform(endDate, DATE_FORMAT)}`
  }

  getAnonymity() {
    return `ankieta ${this.surveyConfiguration.anonymous ? 'anonimowa' : 'jawna'}`;
  }
}
