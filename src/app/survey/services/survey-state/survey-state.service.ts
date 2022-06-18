import {Injectable} from '@angular/core';
import {FullSurvey} from "../../interfaces/full-survey";

@Injectable({
  providedIn: 'root'
})
export class SurveyStateService {
  private survey?: FullSurvey;

  constructor() {
  }

  set(survey: FullSurvey) {
    console.log('setting survey')
    this.survey = survey;
  }

  getTitle() {
    return this.survey?.title;
  }

  getGreeting() {
    return this.survey?.greeting;
  }

  getFarewell() {
    return this.survey?.farewell;
  }

  getSurveyId() {
    return this.survey?.id;
  }
}
