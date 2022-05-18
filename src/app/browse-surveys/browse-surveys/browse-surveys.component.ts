import {Component} from '@angular/core';
import {AfterViewInit} from "@angular/core";
import {ViewChild} from "@angular/core";
import {Survey} from "../../shared/interfaces/survey";
import {SavedSurveysService} from "../services/saved-surveys.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-browse-surveys',
  templateUrl: './browse-surveys.component.html',
  styleUrls: ['./browse-surveys.component.scss']
})
export class BrowseSurveysComponent implements AfterViewInit {
  displayedColumns = ['title', 'description', 'created_at', 'anonymous', 'starts_at', 'expires_at', 'buttons'];
  creatorId = 'a36c108c-3d99-4b4e-9af0-b210934ab79d';
  dataSource = new MatTableDataSource<Survey>([])
  @ViewChild(MatSort) matSort!: MatSort;

  constructor(private savedSurveys: SavedSurveysService) {
    this.savedSurveys.getSurveysByCreatorId(this.creatorId)
      .subscribe((response) => this.dataSource.data = response);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.matSort
  }

  onEditClick(title: string) {
    console.log(`edit ${title}`)
  }

  onDeleteClick() {
    console.log(`delete`)
  }

  onTitleClick() {
    console.log(`preview`);
  }

  onPauseClick() {
    console.log(`pause/resume`)
  }
}
