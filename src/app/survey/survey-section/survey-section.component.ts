import {Component} from '@angular/core';
import {SurveyStateService} from "../services/survey-state/survey-state.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-survey-section',
  templateUrl: './survey-section.component.html',
  styleUrls: ['./survey-section.component.scss']
})
export class SurveySectionComponent {

  constructor(public surveyState: SurveyStateService,
              private router: Router) {
  }

  onNextClick() {
    const nextSection = this.surveyState.nextSection(this.router.url);
    this.router.navigateByUrl(`/survey/${this.surveyState.getSurveyId()}/${nextSection}`).then(Function.prototype());
  }

  onPreviousClick() {
    const previousSection = this.surveyState.previousSection(this.router.url);
    const targetUrl = `/survey/${this.surveyState.getSurveyId()}`.concat(previousSection ? `/${previousSection}` : '');
    this.router.navigateByUrl(targetUrl).then(Function.prototype());
  }
}
