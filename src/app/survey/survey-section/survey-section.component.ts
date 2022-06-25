import {Component} from '@angular/core';
import {SurveyStateService} from "../services/survey-state/survey-state.service";
import {Router} from "@angular/router";
import {Item} from "../interfaces/item";

@Component({
  selector: 'app-survey-section',
  templateUrl: './survey-section.component.html',
  styleUrls: ['./survey-section.component.scss']
})
export class SurveySectionComponent {
  items?: Item[];

  constructor(public surveyState: SurveyStateService,
              private router: Router) {
    if (!this.surveyState.checkSurvey()) {
      const [, , surveyId] = this.router.url.split('/');
      this.router.navigateByUrl(`/survey/${surveyId}`);
    } else {
      this.items = this.surveyState.getItems(this.router.url);
    }
  }

  onNextClick() {
    const nextSection = this.surveyState.nextSection(this.router.url);
    this.router.navigateByUrl(`/survey/${this.surveyState.getSurveyId()}/${nextSection}`)
      .then(() => this.items = this.surveyState.getItems(this.router.url));
  }

  onPreviousClick() {
    const previousSection = this.surveyState.previousSection(this.router.url);
    const targetUrl = `/survey/${this.surveyState.getSurveyId()}`.concat(previousSection ? `/${previousSection}` : '');
    this.router.navigateByUrl(targetUrl).then(() => {
      if (previousSection) {
        this.items = this.surveyState.getItems(this.router.url);
      }
    });
  }
}
