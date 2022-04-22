import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurveysRoutingModule } from './surveys-routing.module';
import { SurveyCreateComponent } from './survey-create/survey-create.component';
import { SurveyBrowseComponent } from './survey-browse/survey-browse.component';
import {MatStepperModule} from '@angular/material/stepper';
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    SurveyCreateComponent,
    SurveyBrowseComponent
  ],
  imports: [
    CommonModule,
    SurveysRoutingModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class SurveysModule { }
