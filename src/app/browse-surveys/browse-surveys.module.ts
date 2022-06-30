import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowseSurveysRoutingModule} from './browse-surveys-routing.module';
import {BrowseSurveysComponent} from './browse-surveys/browse-surveys.component';
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {SharedModule} from "../shared/shared.module";
import { DeleteSurveyComponent } from './delete-survey/delete-survey.component';
import {MatDialogModule} from "@angular/material/dialog";
import { TimeFramesEditComponent } from './time-frames-edit/time-frames-edit.component';
import {ReactiveFormsModule} from "@angular/forms";
import { SurveyDetailsComponent } from './survey-details/survey-details.component';


@NgModule({
  declarations: [
    BrowseSurveysComponent,
    DeleteSurveyComponent,
    TimeFramesEditComponent,
    SurveyDetailsComponent
  ],
    imports: [
        CommonModule,
        BrowseSurveysRoutingModule,
        MatTableModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        MatSortModule,
        MatPaginatorModule,
        SharedModule,
        MatDialogModule,
        ReactiveFormsModule
    ],
  entryComponents: [
    DeleteSurveyComponent,
    TimeFramesEditComponent
  ]
})
export class BrowseSurveysModule {
}
