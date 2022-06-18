import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SurveyStateService} from "../services/survey-state/survey-state.service";

@Component({
  selector: 'app-begin-survey',
  templateUrl: './begin-survey.component.html',
  styleUrls: ['./begin-survey.component.scss']
})
export class BeginSurveyComponent {

  constructor(private route: ActivatedRoute,
              public surveyState: SurveyStateService,
              private router: Router
  ) {
    this.surveyState.set(route.snapshot.data['survey']);
    this.route.data.subscribe(({survey}) => this.surveyState.set(survey));
  }

  onBeginClick(){
    //todo: navigate to url /survey/:surveyId/:sectionId
    this.router.navigateByUrl(`/survey/${this.surveyState.getSurveyId()}/finish`).then(Function.prototype());
  }
}
