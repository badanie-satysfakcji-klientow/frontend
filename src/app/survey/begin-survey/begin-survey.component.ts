import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FullSurvey} from "../interfaces/full-survey";

@Component({
  selector: 'app-begin-survey',
  templateUrl: './begin-survey.component.html',
  styleUrls: ['./begin-survey.component.scss']
})
export class BeginSurveyComponent {
  survey: FullSurvey;

  constructor(private route: ActivatedRoute) {
    this.survey = route.snapshot.data['survey'];
    this.route.data.subscribe(({survey}) => this.survey = survey);
  }

}
