import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BeginSurveyComponent} from "./begin-survey/begin-survey.component";
import {SurveyResolverService} from "./services/survey-resolver/survey-resolver.service";

const routes: Routes = [
  {path: ':surveyId', component: BeginSurveyComponent, resolve: {survey: SurveyResolverService}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveyRoutingModule {
}
