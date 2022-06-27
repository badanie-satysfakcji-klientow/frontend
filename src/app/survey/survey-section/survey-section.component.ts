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

  constructor(public surveyState: SurveyStateService,
              private router: Router) {
    if (!this.surveyState.checkSurvey()) {
      const [, , surveyId] = this.router.url.split('/');
      this.router.navigateByUrl(`${MODULE_URL}/${surveyId}`).then(Function.prototype());
    } else {
      this.items = this.surveyState.getItems(this.router.url);
      this.section = this.surveyState.getSection(this.router.url);
    }
  }

  onNavigateItems(event?: Item[]) {
    this.items = event;
  }

  onNavigateSection(event?: Section) {
    this.section = event;
  }
}
