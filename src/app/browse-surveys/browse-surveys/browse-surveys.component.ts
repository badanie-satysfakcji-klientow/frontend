import {Component} from '@angular/core';
import {AfterViewInit} from "@angular/core";
import {ViewChild} from "@angular/core";
import {Survey} from "../../shared/interfaces/survey";
import {SavedSurveysService} from "../services/saved-surveys.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-browse-surveys',
  templateUrl: './browse-surveys.component.html',
  styleUrls: ['./browse-surveys.component.scss']
})
export class BrowseSurveysComponent implements AfterViewInit {
  displayedColumns = ['title', 'description', 'created_at', 'anonymous', 'starts_at', 'expires_at', 'buttons'];
  pageSizes = [5, 10, 20];
  creatorId = 'a36c108c-3d99-4b4e-9af0-b210934ab79d';
  dataSource = new MatTableDataSource<Survey>([])
  @ViewChild(MatSort) matSort!: MatSort;
  @ViewChild(MatPaginator) matPaginator!: MatPaginator;

  constructor(private savedSurveys: SavedSurveysService) {
    this.savedSurveys.getSurveysByCreatorId(this.creatorId)
      .subscribe((response) => this.dataSource.data = response);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.matSort;
    this.dataSource.paginator = this.matPaginator;
  }

  onEditClick(survey: any) {
    console.log(`edit ${(survey as Survey).id}`)
  }

  onDeleteClick(survey: any) {
    console.log(`delete ${(survey as Survey).id}`)
  }

  onTitleClick(survey: any) {
    console.log(`preview ${(survey as Survey).id}`);
  }

  onPauseClick(survey: any) {
    console.log(`pause/resume ${(survey as Survey).id}`)
  }
}
