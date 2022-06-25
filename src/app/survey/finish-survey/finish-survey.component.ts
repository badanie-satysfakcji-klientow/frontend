import {Component} from '@angular/core';
import {SurveyStateService} from "../services/survey-state/survey-state.service";
import {Router} from "@angular/router";
import {MODULE_URL} from "../constants/module-url";

@Component({
  selector: 'app-finish-survey',
  templateUrl: './finish-survey.component.html',
  styleUrls: ['./finish-survey.component.scss']
})
export class FinishSurveyComponent {
  farewell?: string;

  constructor(public surveyState: SurveyStateService,
              private router: Router) {
    if (!this.surveyState.checkSurvey()){
      const [,,surveyId] = this.router.url.split('/');
      this.router.navigateByUrl(`${MODULE_URL}/${surveyId}`).then(Function.prototype());
    } else {
      this.farewell = this.surveyState.getFarewell();
    }
  }
}
