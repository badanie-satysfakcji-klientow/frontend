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
    const {sectionIds} = this;
    return url ? sectionIds[sectionIds.indexOf(SurveyStateService.extractSectionId(url)) + 1] : sectionIds[0];
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

  getItems(url: string) {
    const sectionId = SurveyStateService.extractSectionId(url);
    if (sectionId === 'questions') {
      return this.survey?.items;
    }
    const section = this.survey?.sections.find((section) => section.id === sectionId);
    if (section) {
      const startItem = this.survey?.items.find((item) => item.id === section.start_item);
      const endItem = this.survey?.items.find((item) => item.id === section.end_item);
      if (startItem && endItem) {
        // @ts-ignore
        console.log(this.survey?.items.indexOf(startItem), this.survey?.items.indexOf(endItem) + 1)
        return this.survey?.items.slice(this.survey?.items.indexOf(startItem), this.survey?.items.indexOf(endItem) + 1);
      }
    }
    return [];
  }

  getSections() {
    return this.survey?.sections;
  }
}
