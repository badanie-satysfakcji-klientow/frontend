import {Injectable} from '@angular/core';
import {FullSurvey} from "../../interfaces/full-survey";
import {FINISH, QUESTIONS} from "../../constants/section-urls";

@Injectable({
  providedIn: 'root'
})
export class SurveyStateService {
  private survey?: FullSurvey;
  private sectionIds: string[];

  constructor() {
    this.sectionIds = [];
  }

  private static getSectionId(url: string) {
    return url.substring(url.lastIndexOf('/') + 1);
  }

  set(survey: FullSurvey) {
    this.survey = survey;
    if (this.survey.sections) {
      this.survey.sections.forEach((section) => this.sectionIds.push(section.id));
    } else {
      this.sectionIds.push(QUESTIONS);
    }
    this.sectionIds.push(FINISH);
  }

  clear(){
    this.survey = undefined;
    this.sectionIds = [];
  }

  checkSurvey(): boolean {
    return this.survey !== undefined;
  }

  nextSection(url?: string) {
    const {sectionIds} = this;
    return url ? sectionIds[sectionIds.indexOf(SurveyStateService.getSectionId(url)) + 1] : sectionIds[0];
  }

  previousSection(url: string) {
    return this.sectionIds[this.sectionIds.indexOf(SurveyStateService.getSectionId(url)) - 1];
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
    const sectionId = SurveyStateService.getSectionId(url);
    if (sectionId === QUESTIONS) {
      return this.survey?.items;
    }
    const section = this.survey?.sections?.find((section) => section.id === sectionId);
    if (section) {
      const startItem = this.survey?.items.find((item) => item.id === section.start_item);
      const endItem = this.survey?.items.find((item) => item.id === section.end_item);
      if (startItem && endItem) {
        return this.survey?.items.slice(this.survey?.items.indexOf(startItem), this.survey?.items.indexOf(endItem) + 1);
      }
    }
    return [];
  }

  getSection(url: string) {
    const sectionId = SurveyStateService.getSectionId(url);
    if (!this.survey?.sections) {
      return undefined;
    }
    if (sectionId === QUESTIONS) {
      return this.survey.sections[0];
    }
    return this.survey.sections.find(({id}) => id === sectionId);
  }

  onLastSection(url: string) {
    if (!this.survey) {
      return false;
    }
    const sectionId = SurveyStateService.getSectionId(url);
    return sectionId === QUESTIONS ? true : this.sectionIds[this.sectionIds.length - 2] === sectionId;
  }

  onFirstSection(url: string) {
    if (!this.survey) {
      return false;
    }
    const sectionId = SurveyStateService.getSectionId(url);
    return sectionId === QUESTIONS ? true : this.sectionIds[0] === sectionId;
  }
}
