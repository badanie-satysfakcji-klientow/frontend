import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurveyRoutingModule } from './survey-routing.module';
import { BeginSurveyComponent } from './begin-survey/begin-survey.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    BeginSurveyComponent
  ],
    imports: [
        CommonModule,
        SurveyRoutingModule,
        MatButtonModule
    ]
})
export class SurveyModule { }
