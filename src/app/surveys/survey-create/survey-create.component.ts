import {Component} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {SurveyConfigurationFormGroup} from "../interfaces/survey-configuration-form-group";

@Component({
  selector: 'app-survey-create',
  templateUrl: './survey-create.component.html',
  styleUrls: ['./survey-create.component.scss']
})

export class SurveyCreateComponent {
  surveyConfiguration: SurveyConfigurationFormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.surveyConfiguration = this.formBuilder.group({
      surveyName: [''],
      description: [''],
      greeting: [''],
      farewell: [''],
      anonymous: [false],
      startDate: [new Date().toISOString()],
      endDate: [new Date().toISOString()]
    }) as SurveyConfigurationFormGroup
  }
}
