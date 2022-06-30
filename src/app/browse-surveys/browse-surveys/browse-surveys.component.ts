import {Component} from '@angular/core';
import {AfterViewInit} from "@angular/core";
import {ViewChild} from "@angular/core";
import {Survey} from "../../shared/interfaces/survey";
import {SavedSurveysService} from "../services/saved-surveys.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {DATE_FORMAT} from "../../shared/constants/date-format";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DeleteSurveyComponent} from "../delete-survey/delete-survey.component";
import {DeleteData} from "../interfaces/delete-data";
import {TimeFramesEditComponent} from "../time-frames-edit/time-frames-edit.component";

@Component({
  selector: 'app-browse-surveys',
  templateUrl: './browse-surveys.component.html',
  styleUrls: ['./browse-surveys.component.scss']
})
export class BrowseSurveysComponent implements AfterViewInit {
  displayedColumns = ['title', 'description', 'created_at', 'anonymous', 'starts_at', 'expires_at', 'buttons'];
  creatorId = 'a96152a1-2b1f-4ab9-8b1b-acd0b4d9c3f1';
  pageSizes = [5, 10, 20];
  dateFormat = DATE_FORMAT;
  dataSource = new MatTableDataSource<Survey>([]);
  dialogConfig: MatDialogConfig;
  @ViewChild(MatSort) matSort!: MatSort;
  @ViewChild(MatPaginator) matPaginator!: MatPaginator;

  constructor(private savedSurveys: SavedSurveysService,
              private matDialog: MatDialog
  ) {
    this.savedSurveys.getSurveys(this.creatorId)
      .subscribe((response) => this.dataSource.data = response);
    this.dialogConfig = {
      autoFocus: true,
      maxWidth: 1012,
      width: '100%'
    }
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.matSort;
    this.dataSource.paginator = this.matPaginator;
  }

  onTitleClick(survey: any) {
    console.log(`preview ${(survey as Survey).id}`);
  }

  onPauseClick(survey: any) {
    this.savedSurveys.pauseSurvey(survey)
      .subscribe(() => this.dataSource.data.find((s) => s === survey, survey.paused = !survey.paused));
  }

  clearConfigData() {
    this.dialogConfig.data = {};
  }

  onDeleteClick(surveyData: DeleteData) {
    this.dialogConfig.data = {
      id: surveyData.id,
      title: surveyData.title,
      dataSource: this.dataSource
    }
    this.matDialog.open(DeleteSurveyComponent, this.dialogConfig);
    this.clearConfigData();
  }

  onEditTimeFramesClick(survey: Survey) {
    this.dialogConfig.data = survey;
    this.matDialog.open(TimeFramesEditComponent, this.dialogConfig);
    this.clearConfigData();
  }

  onGetResultsClick(survey: Survey) {
    this.savedSurveys.getResultsXLSX(survey.id)
      .subscribe((response)=>{
        const blob = new Blob([response], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      })
  }
}
