import {Component} from '@angular/core';
import {OnDestroy} from "@angular/core";
import {FormBuilder, Validators} from "@angular/forms";
import {SurveyConfigurationFormGroup} from "../interfaces/survey-configuration-form-group";
import {DatesChronological} from "../validators/dates-chronological";
import {ItemsStateService} from "../services/items-state.service";
import {SurveysService} from "../services/surveys.service";
import {pluck} from "rxjs";
import {SurveyIdStateService} from "../services/survey-id-state.service";
import {SectionsStateService} from "../services/sections-state.service";

@Component({
  selector: 'app-survey-create',
  templateUrl: './survey-create.component.html',
  styleUrls: ['./survey-create.component.scss']
})

export class SurveyCreateComponent implements OnDestroy {
  surveyConfiguration: SurveyConfigurationFormGroup;
  creatorId = 'a96152a1-2b1f-4ab9-8b1b-acd0b4d9c3f1';

  constructor(private formBuilder: FormBuilder,
              private datesChronological: DatesChronological,
              public itemsStateService: ItemsStateService,
              private surveysService: SurveysService,
              private surveyIdState: SurveyIdStateService,
              private sectionsState: SectionsStateService
  ) {
    this.surveyConfiguration = this.formBuilder.group({
      surveyName: ['', [Validators.required]],
      description: ['', [Validators.max(255), Validators.required]],
      greeting: ['', [Validators.required]],
      farewell: ['', [Validators.required]],
      anonymous: [false],
      startDate: [new Date().toISOString().substring(0, 16), [Validators.required]],
      endDate: [new Date().toISOString().substring(0, 16), [Validators.required]]
    }, {validators: datesChronological.validate}) as SurveyConfigurationFormGroup;
  }

  ngOnDestroy(): void {
    this.surveyIdState.clearSurveyId();
    this.itemsStateService.clearItems();
    this.sectionsState.clearSections();
  }

  onAddQuestionsClick() {
    if (this.surveyIdState.getSurveyId()){
      return;
    }
    this.surveysService.createSurvey(this.surveyConfiguration.value, this.creatorId)
      .pipe(pluck('survey_id'))
      .subscribe(value => this.surveyIdState.setSurveyId(value));
  }
}
