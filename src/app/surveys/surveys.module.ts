import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SurveysRoutingModule} from './surveys-routing.module';
import {SurveyCreateComponent} from './survey-create/survey-create.component';
import {SurveyBrowseComponent} from './survey-browse/survey-browse.component';
import {MatStepperModule} from '@angular/material/stepper';
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {SurveyConfigureComponent} from './survey-configure/survey-configure.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {SurveySummaryComponent} from './survey-summary/survey-summary.component';
import {MatIconModule} from "@angular/material/icon";
import {SurveyQuestionsComponent} from './survey-questions/survey-questions.component';
import {SharedModule} from "../shared/shared.module";
import { SurveyItemComponent } from './survey-item/survey-item.component';
import {MatCardModule} from "@angular/material/card";
import {MatTooltipModule} from "@angular/material/tooltip";
import { SurveyItemContentListComponent } from './survey-item-content-list/survey-item-content-list.component';


@NgModule({
  declarations: [
    SurveyCreateComponent,
    SurveyBrowseComponent,
    SurveyConfigureComponent,
    SurveySummaryComponent,
    SurveyQuestionsComponent,
    SurveyItemComponent,
    SurveyItemContentListComponent
  ],
  imports: [
    CommonModule,
    SurveysRoutingModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatIconModule,
    SharedModule,
    MatCardModule,
    MatTooltipModule
  ]
})
export class SurveysModule {
}
