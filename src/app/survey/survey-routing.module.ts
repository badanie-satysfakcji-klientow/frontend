import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BeginSurveyComponent} from "./begin-survey/begin-survey.component";

const routes: Routes = [
  {path: ':surveyId', component: BeginSurveyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveyRoutingModule {
}
