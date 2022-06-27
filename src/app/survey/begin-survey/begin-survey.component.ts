import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SurveyStateService} from "../services/survey-state/survey-state.service";
import {FullSurvey} from "../interfaces/full-survey";

@Component({
  selector: 'app-begin-survey',
  templateUrl: './begin-survey.component.html',
  styleUrls: ['./begin-survey.component.scss']
})
export class BeginSurveyComponent {
  paused: boolean;

  constructor(private route: ActivatedRoute,
              public surveyState: SurveyStateService,
              private router: Router
  ) {
    const snapshot: FullSurvey = route.snapshot.data['survey'] as FullSurvey
    this.surveyState.set(snapshot);
    this.route.data.subscribe(({survey}) => this.surveyState.set(survey));
    this.paused = snapshot.paused;
  }

  onBeginClick() {
    const surveyId = this.surveyState.getSurveyId();
    const firstSection = this.surveyState.nextSection();
    this.router.navigateByUrl(`/survey/${surveyId}/${firstSection}`).then(Function.prototype());
  }
}
