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
import {TimeFramesData} from "../interfaces/time-frames-data";
import {TimeFramesEditComponent} from "../time-frames-edit/time-frames-edit.component";

@Component({
  selector: 'app-browse-surveys',
  templateUrl: './browse-surveys.component.html',
  styleUrls: ['./browse-surveys.component.scss']
})
export class BrowseSurveysComponent implements AfterViewInit {
  displayedColumns = ['title', 'description', 'created_at', 'anonymous', 'starts_at', 'expires_at', 'buttons'];
  pageSizes = [5, 10, 20];
  creatorId = 'a36c108c-3d99-4b4e-9af0-b210934ab79d';
  dateFormat = DATE_FORMAT;
  dataSource = new MatTableDataSource<Survey>([]);
  dialogConfig: MatDialogConfig;
  @ViewChild(MatSort) matSort!: MatSort;
  @ViewChild(MatPaginator) matPaginator!: MatPaginator;

  constructor(private savedSurveys: SavedSurveysService,
              private matDialog: MatDialog
  ) {
    this.savedSurveys.getSurveysByCreatorId(this.creatorId)
      .subscribe((response) => this.dataSource.data = response);
    this.dialogConfig = {
      autoFocus: true,
      maxWidth: 1012,
      // maxHeight: 377,
      // height: '100%',
      width: '100%'
    }
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.matSort;
    this.dataSource.paginator = this.matPaginator;
  }

  onEditClick(survey: any) {
    console.log(`edit ${(survey as Survey).id}`)
  }

  onTitleClick(survey: any) {
    console.log(`preview ${(survey as Survey).id}`);
  }

  onPauseClick(survey: any) {
    console.log(`pause/resume ${(survey as Survey).id}`)
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

  onEditTimeFramesClick(surveyData: TimeFramesData) {
    this.dialogConfig.data = {
      id: surveyData.id,
      starts_at: surveyData.starts_at,
      expires_at: surveyData.expires_at
    }
    this.matDialog.open(TimeFramesEditComponent, this.dialogConfig);
    this.clearConfigData();
  }
}
