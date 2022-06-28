import {Component} from '@angular/core';
import {SurveyStateService} from "../services/survey-state/survey-state.service";
import {Router} from "@angular/router";
import {Item} from "../interfaces/item";
import {MODULE_URL} from "../constants/module-url";
import {Section} from "../interfaces/section";

@Component({
  selector: 'app-survey-section',
  templateUrl: './survey-section.component.html',
  styleUrls: ['./survey-section.component.scss']
})
export class SurveySectionComponent {
  items?: Item[];
  section?: Section;
  onLastSection?: boolean
  onFirstSection?: boolean;
  surveyId?: string;

  private setContent(url: string) {
    this.items = this.surveyState.getItems(url);
    this.section = this.surveyState.getSection(url);
    this.onLastSection = this.surveyState.onLastSection(url);
    this.onFirstSection = this.surveyState.onFirstSection(url);
    this.surveyId = this.surveyState.getSurveyId();
  }

  constructor(public surveyState: SurveyStateService,
              private router: Router) {
    if (!this.surveyState.checkSurvey()) {
      console.log(this.router.url.split('/').slice(0, 3).join('/'));
      this.router.navigateByUrl(this.router.url.split('/').slice(0, 3).join('/')).then(Function.prototype());
    } else {
      this.setContent(this.router.url);
    }
  }

  onPreviousClick() {
    const previousSection = this.surveyState.previousSection(this.router.url);
    const targetUrl = `${MODULE_URL}/${this.surveyId}`.concat(previousSection ? `/${previousSection}` : '');
    this.router.navigateByUrl(targetUrl).then(() => this.setContent(this.router.url));
  }

  onNextClick() {
    const nextSection = this.surveyState.nextSection(this.router.url);
    this.router.navigateByUrl(`${MODULE_URL}/${this.surveyId}/${nextSection}`)
      .then(() => this.onLastSection ? this.surveyState.clear() : this.setContent(this.router.url));
  }
}
