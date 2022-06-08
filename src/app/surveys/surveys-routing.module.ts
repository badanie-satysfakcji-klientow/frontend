import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SurveyCreateComponent} from "./survey-create/survey-create.component";

const routes: Routes = [
  {path: '', component: SurveyCreateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveysRoutingModule {
}
