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


@NgModule({
  declarations: [
    BrowseSurveysComponent
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
    SharedModule
  ]
})
export class BrowseSurveysModule {
}
