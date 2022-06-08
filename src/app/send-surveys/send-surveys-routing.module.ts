import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SendSurveysComponent} from "./send-surveys/send-surveys.component";

const routes: Routes = [
  {path: '', component: SendSurveysComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SendSurveysRoutingModule { }
