import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {SurveyConfigurationFormGroup} from "../interfaces/survey-configuration-form-group";
import {DatesChronological} from "../validators/dates-chronological";
import {QuestionsStateService} from "../services/questions-state.service";
import {SurveysService} from "../services/surveys.service";
import {pluck} from "rxjs";

@Component({
  selector: 'app-survey-create',
  templateUrl: './survey-create.component.html',
  styleUrls: ['./survey-create.component.scss']
})

export class SurveyCreateComponent {
  surveyConfiguration: SurveyConfigurationFormGroup;
  creatorId = 'a36c108c-3d99-4b4e-9af0-b210934ab79d';
  surveyId?: string;

  constructor(private formBuilder: FormBuilder,
              private datesChronological: DatesChronological,
              public questionsState: QuestionsStateService,
              private surveysService: SurveysService
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

  onAddQuestionsClick() {
    this.surveysService.createSurvey(this.surveyConfiguration.value, this.creatorId)
      .pipe(pluck('survey_id'))
      .subscribe(value => this.surveyId = value);
  }
}
