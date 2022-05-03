import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {SurveyConfigurationFormGroup} from "../interfaces/survey-configuration-form-group";
import {DatesChronological} from "../validators/dates-chronological";

@Component({
  selector: 'app-survey-create',
  templateUrl: './survey-create.component.html',
  styleUrls: ['./survey-create.component.scss']
})

export class SurveyCreateComponent {
  surveyConfiguration: SurveyConfigurationFormGroup;

  constructor(private formBuilder: FormBuilder,
              private datesChronological: DatesChronological,
  ) {
    this.surveyConfiguration = this.formBuilder.group({
      surveyName: ['', [Validators.required]],
      description: ['', [Validators.max(255)]],
      greeting: ['', [Validators.required]],
      farewell: ['', [Validators.required]],
      anonymous: [false],
      startDate: [new Date().toISOString(), [Validators.required]],
      endDate: [new Date().toISOString(), [Validators.required]]
    }, {validators: datesChronological.validate}) as SurveyConfigurationFormGroup;
  }
}
