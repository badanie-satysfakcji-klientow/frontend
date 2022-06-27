import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SurveyStateService} from "../services/survey-state/survey-state.service";

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
    this.surveyState.set(route.snapshot.data['survey']);
    this.route.data.subscribe(({survey}) => this.surveyState.set(survey));
    this.paused = this.route.snapshot.data['survey'].paused;
  }

  onBeginClick() {
    const surveyId = this.surveyState.getSurveyId();
    const firstSection = this.surveyState.nextSection();
    this.router.navigateByUrl(`/survey/${surveyId}/${firstSection}`).then(Function.prototype());
  }
}
