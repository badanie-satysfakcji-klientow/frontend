import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SendSurveysRoutingModule } from './send-surveys-routing.module';
import { SendSurveysComponent } from './send-surveys/send-surveys.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    SendSurveysComponent
  ],
    imports: [
        CommonModule,
        SendSurveysRoutingModule,
        SharedModule
    ]
})
export class SendSurveysModule { }
