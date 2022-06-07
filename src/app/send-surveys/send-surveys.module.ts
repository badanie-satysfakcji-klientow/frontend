import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SendSurveysRoutingModule } from './send-surveys-routing.module';
import { SendSurveysComponent } from './send-surveys/send-surveys.component';


@NgModule({
  declarations: [
    SendSurveysComponent
  ],
  imports: [
    CommonModule,
    SendSurveysRoutingModule
  ]
})
export class SendSurveysModule { }
