import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurveysRoutingModule } from './surveys-routing.module';
import { SurveyCreateComponent } from './survey-create/survey-create.component';
import { SurveyBrowseComponent } from './survey-browse/survey-browse.component';


@NgModule({
  declarations: [
    SurveyCreateComponent,
    SurveyBrowseComponent
  ],
  imports: [
    CommonModule,
    SurveysRoutingModule
  ]
})
export class SurveysModule { }
