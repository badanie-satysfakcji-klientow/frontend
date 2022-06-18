import {Component} from '@angular/core';
import {SurveyStateService} from "../services/survey-state/survey-state.service";

@Component({
  selector: 'app-finish-survey',
  templateUrl: './finish-survey.component.html',
  styleUrls: ['./finish-survey.component.scss']
})
export class FinishSurveyComponent {

  constructor(public surveyState: SurveyStateService) {
  }
}
