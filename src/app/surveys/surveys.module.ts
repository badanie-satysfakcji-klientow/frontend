import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';

import {SurveysRoutingModule} from './surveys-routing.module';
import {SurveyCreateComponent} from './survey-create/survey-create.component';
import {MatStepperModule} from '@angular/material/stepper';
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {SurveyConfigureComponent} from './survey-configure/survey-configure.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {SurveySummaryComponent} from './survey-summary/survey-summary.component';
import {MatIconModule} from "@angular/material/icon";
import {SurveyQuestionsComponent} from './survey-questions/survey-questions.component';
import {SharedModule} from "../shared/shared.module";
import {SurveyItemComponent} from './survey-item/survey-item.component';
import {MatCardModule} from "@angular/material/card";
import {MatTooltipModule} from "@angular/material/tooltip";
import {SurveyItemListComponent} from './survey-item-list/survey-item-list.component';
import {SurveyItemClosedComponent} from './survey-item-closed/survey-item-closed.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";
import {SurveyItemOpenComponent} from './survey-item-open/survey-item-open.component';
import {SurveyItemScaleComponent} from './survey-item-scale/survey-item-scale.component';
import { SurveyItemGridComponent } from './survey-item-grid/survey-item-grid.component';


@NgModule({
  declarations: [
    SurveyCreateComponent,
    SurveyConfigureComponent,
    SurveySummaryComponent,
    SurveyQuestionsComponent,
    SurveyItemComponent,
    SurveyItemListComponent,
    SurveyItemClosedComponent,
    SurveyItemOpenComponent,
    SurveyItemScaleComponent,
    SurveyItemGridComponent
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
    MatTooltipModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  providers: []
})
export class SurveysModule {
}
