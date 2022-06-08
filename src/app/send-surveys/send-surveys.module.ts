import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SendSurveysRoutingModule } from './send-surveys-routing.module';
import { SendSurveysComponent } from './send-surveys/send-surveys.component';
import {SharedModule} from "../shared/shared.module";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    SendSurveysComponent
  ],
  imports: [
    CommonModule,
    SendSurveysRoutingModule,
    SharedModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    ReactiveFormsModule
  ]
})
export class SendSurveysModule { }
