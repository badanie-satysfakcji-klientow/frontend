import {Component} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-survey-create',
  templateUrl: './survey-create.component.html',
  styleUrls: ['./survey-create.component.scss']
})

export class SurveyCreateComponent {
  initialPhase = new FormGroup({
      surveyName: new FormControl(''),
      description: new FormControl(''),
      greeting: new FormControl(''),
      farewell: new FormControl(''),
      anonymous: new FormControl(false),
      startDate: new FormControl(new Date()),
      endDate: new FormControl(new Date())
    }
  )


}
