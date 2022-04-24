import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

interface ISurvey {
  surveyName: string;
  description: string;
  greeting: string;
  farewell: string;
  anonymous: boolean;
  startDate: Date;
  endDate: Date
}

export interface ISurveyFormGroup extends FormGroup {
  value: ISurvey,
  controls: {
    surveyName: FormControl;
    description: FormControl;
    greeting: FormControl;
    farewell: FormControl;
    anonymous: FormControl;
    startDate: FormControl;
    endDate: FormControl;
  }
}

@Component({
  selector: 'app-survey-create',
  templateUrl: './survey-create.component.html',
  styleUrls: ['./survey-create.component.scss']
})

export class SurveyCreateComponent {
  form: ISurveyFormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      surveyName: [''],
      description: [''],
      greeting: [''],
      farewell: [''],
      anonymous: [false],
      startDate: [new Date().toISOString()],
      endDate: [new Date().toISOString()]
    }) as ISurveyFormGroup
  }

  onClick(){
    console.log(this.form.value);
  }
}
