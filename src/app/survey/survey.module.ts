import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurveyRoutingModule } from './survey-routing.module';
import { BeginSurveyComponent } from './begin-survey/begin-survey.component';
import {MatButtonModule} from "@angular/material/button";
import { FinishSurveyComponent } from './finish-survey/finish-survey.component';
import { SurveySectionComponent } from './survey-section/survey-section.component';
import {SharedModule} from "../shared/shared.module";
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [
    BeginSurveyComponent,
    FinishSurveyComponent,
    SurveySectionComponent,
    NavigationBarComponent,
    ItemComponent
  ],
    imports: [
        CommonModule,
        SurveyRoutingModule,
        MatButtonModule,
        SharedModule
    ]
})
export class SurveyModule { }
