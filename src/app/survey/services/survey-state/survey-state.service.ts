import {Injectable} from '@angular/core';
import {FullSurvey} from "../../interfaces/full-survey";

@Injectable({
  providedIn: 'root'
})
export class SurveyStateService {
  private survey?: FullSurvey;
  private readonly sectionIds: string[];

  constructor() {
    this.sectionIds = [];
  }

  private static extractSectionId(url: string) {
    return url.substring(url.lastIndexOf('/') + 1);
  }

  set(survey: FullSurvey) {
    this.survey = survey;
    if (this.survey.sections) {
      this.survey.sections.forEach((section) => this.sectionIds.push(section.id));
    } else {
      this.sectionIds.push('questions');
    }
    this.sectionIds.push('finish');
  }

  nextSection(url?: string) {
    return url ? this.sectionIds[this.sectionIds.indexOf(SurveyStateService.extractSectionId(url)) + 1] : this.sectionIds[0];
  }

  previousSection(url: string) {
    return this.sectionIds[this.sectionIds.indexOf(SurveyStateService.extractSectionId(url)) - 1];
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

  getItems() {
    return this.survey?.items;
  }

  getSections() {
    return this.survey?.sections;
  }
}
