import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SurveyStateService} from "../services/survey-state/survey-state.service";
import {FullSurvey} from "../interfaces/full-survey";
import {SurveyService} from "../services/survey/survey.service";
import {SubmissionService} from "../services/submission/submission.service";

@Component({
  selector: 'app-begin-survey',
  templateUrl: './begin-survey.component.html',
  styleUrls: ['./begin-survey.component.scss']
})
export class BeginSurveyComponent {
  paused: boolean;
  expired: boolean;

  constructor(private route: ActivatedRoute,
              public state: SurveyStateService,
              private router: Router,
              private survey: SurveyService,
              private submission: SubmissionService
  ) {
    const snapshot: FullSurvey = route.snapshot.data['survey'] as FullSurvey;
    this.paused = snapshot.paused;
    this.expired = Date.parse(snapshot.expires_at) < Date.now();
    if (!(this.paused || this.expired)) {
      this.state.set(snapshot);
    }
  }

  onBeginClick() {
    const surveyId = this.state.getSurveyId();
    const firstSection = this.state.nextSection();
    this.router.navigateByUrl(`/survey/${surveyId}/${firstSection}`).then(() => {
      if (surveyId) {
        this.submission.createSubmission(surveyId).subscribe(({submission_id}) => {
          this.submission.setId(submission_id)
        });
      }
    });
  }
}
