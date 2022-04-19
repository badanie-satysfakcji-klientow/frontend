import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SurveyCreateComponent} from "./survey-create/survey-create.component";
import {SurveyBrowseComponent} from "./survey-browse/survey-browse.component";

const routes: Routes = [
  {
    path: 'create',
    component: SurveyCreateComponent
  },
  {
    path: 'browse',
    component: SurveyBrowseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveysRoutingModule { }
