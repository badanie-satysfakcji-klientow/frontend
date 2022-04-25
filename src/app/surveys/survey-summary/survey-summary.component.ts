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

  getStartEndDateFormatted() {
    const {startDate, endDate} = this.surveyConfiguration;
    return `${SurveySummaryComponent.getDateFormatted(startDate)} - ${SurveySummaryComponent.getDateFormatted(endDate)}`
  }

  private static getDateFormatted(dateRepresentation: string) {
    const date = new Date(Date.parse(dateRepresentation));
    const dateString = date.toLocaleDateString().length < 10 ? `0${date.toLocaleDateString()}` : `${date.toLocaleDateString()}`;

    return `${dateString}, godz. ${SurveySummaryComponent.getHourMinutesFormatted(date)}`;
  }

  private static getHourMinutesFormatted(date: Date) {
    const minutes = date.getMinutes();
    const hours = date.getHours();
    return `${SurveySummaryComponent.getTimeFormatted(hours)}:${SurveySummaryComponent.getTimeFormatted(minutes)}`;
  }

  private static getTimeFormatted(value: number) {
    return `${value < 10 ? '0' : ''}${value}`;
  }

  getAnonymity(){
    return this.surveyConfiguration.anonymous ? 'tak' : 'nie';
  }

}
