import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurveysRoutingModule } from './surveys-routing.module';
import { SurveyCreateComponent } from './survey-create/survey-create.component';
import { SurveyBrowseComponent } from './survey-browse/survey-browse.component';
import {MatStepperModule} from '@angular/material/stepper';
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import { SurveyConfigureComponent } from './survey-configure/survey-configure.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";


@NgModule({
  declarations: [
    SurveyCreateComponent,
    SurveyBrowseComponent,
    SurveyConfigureComponent
  ],
  imports: [
    CommonModule,
    SurveysRoutingModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSlideToggleModule
  ]
})
export class SurveysModule { }
