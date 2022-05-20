import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SurveyIdStateService {
  private surveyId = '';

  getSurveyId() {
    return this.surveyId;
  }

  setSurveyId(id: string) {
    this.surveyId = id;
  }

  clearSurveyId() {
    this.surveyId = '';
  }
}
