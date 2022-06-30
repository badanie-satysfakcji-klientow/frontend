import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BeginSurveyComponent} from "./begin-survey/begin-survey.component";
import {SurveyResolverService} from "./services/survey-resolver/survey-resolver.service";
import {FinishSurveyComponent} from "./finish-survey/finish-survey.component";
import {SurveySectionComponent} from "./survey-section/survey-section.component";
import {FINISH, QUESTIONS} from "./constants/section-urls";


const routes: Routes = [
  {path: `:surveyId/${FINISH}`, component: FinishSurveyComponent},
  {path: `:surveyId/${QUESTIONS}`, component: SurveySectionComponent},
  {path: ':surveyId/:sectionId', component: SurveySectionComponent},
  {path: ':surveyId', component: BeginSurveyComponent, resolve: {survey: SurveyResolverService}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveyRoutingModule {
}
