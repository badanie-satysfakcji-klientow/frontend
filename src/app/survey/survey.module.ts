import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurveyRoutingModule } from './survey-routing.module';
import { BeginSurveyComponent } from './begin-survey/begin-survey.component';
import {MatButtonModule} from "@angular/material/button";
import { FinishSurveyComponent } from './finish-survey/finish-survey.component';
import { SurveySectionComponent } from './survey-section/survey-section.component';
import {SharedModule} from "../shared/shared.module";
import { ItemComponent } from './item/item.component';
import { ContentOpenComponent } from './content-open/content-open.component';
import { ContentClosedComponent } from './content-closed/content-closed.component';
import { ContentScaleComponent } from './content-scale/content-scale.component';
import { ContentGridComponent } from './content-grid/content-grid.component';
import { ContentListComponent } from './content-list/content-list.component';
import {MatRadioModule} from "@angular/material/radio";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { SectionLabelComponent } from './section-label/section-label.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  declarations: [
    BeginSurveyComponent,
    FinishSurveyComponent,
    SurveySectionComponent,
    ItemComponent,
    ContentOpenComponent,
    ContentClosedComponent,
    ContentScaleComponent,
    ContentGridComponent,
    ContentListComponent,
    SectionLabelComponent,
  ],
  imports: [
    CommonModule,
    SurveyRoutingModule,
    MatButtonModule,
    SharedModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatCheckboxModule,
    FormsModule,
    MatProgressSpinnerModule
  ]
})
export class SurveyModule { }
