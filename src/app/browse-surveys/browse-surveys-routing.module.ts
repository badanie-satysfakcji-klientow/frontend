import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BrowseSurveysComponent} from "./browse-surveys/browse-surveys.component";
import {SurveyDetailsComponent} from "./survey-details/survey-details.component";

const routes: Routes = [
  {path: '', component: BrowseSurveysComponent},
  {path: ':surveyId', component: SurveyDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrowseSurveysRoutingModule {
}
