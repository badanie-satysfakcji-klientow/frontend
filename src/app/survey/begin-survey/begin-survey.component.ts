import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-begin-survey',
  templateUrl: './begin-survey.component.html',
  styleUrls: ['./begin-survey.component.scss']
})
export class BeginSurveyComponent {
  title: string;
  greeting: string;

  constructor(private route: ActivatedRoute) {
    this.title = route.snapshot.data['survey'].title;
    this.greeting = route.snapshot.data['survey'].greeting;
    this.route.data.subscribe(({survey}) => {
      this.title = survey.title;
      this.greeting = survey.greeting;
    });
  }

}
