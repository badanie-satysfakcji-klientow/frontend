import {Component, Inject} from '@angular/core';
import {formatDate} from "@angular/common";
import {Survey} from "../../shared/interfaces/survey";
import {DATE_FORMAT} from "../../shared/constants/date-format";
import {SavedSurveysService} from "../services/saved-surveys.service";
import {LOCALE_ID} from "@angular/core";

type DisplayedColumn = keyof Survey;

@Component({
  selector: 'app-browse-surveys',
  templateUrl: './browse-surveys.component.html',
  styleUrls: ['./browse-surveys.component.scss']
})
export class BrowseSurveysComponent {
  surveys: Survey[] = [];
  creatorId = 'a36c108c-3d99-4b4e-9af0-b210934ab79d';
  displayedColumns: DisplayedColumn[] = ['title', 'description', 'created_at', 'anonymous', 'starts_at', 'expires_at'];
  headerCells = ['Tytuł', 'Opis', 'Utworzono', 'Anonimowa', 'Początek', 'Koniec'];

  constructor(private savedSurveys: SavedSurveysService,
              @Inject(LOCALE_ID) private locale: string
  ) {
    this.savedSurveys.getSurveysByCreatorId(this.creatorId)
      .subscribe((response) => this.surveys = response);
  }

  valueOf(object: object, key: DisplayedColumn) {
    switch (key) {
      case "created_at":
      case "starts_at":
      case "expires_at":
        return formatDate((object as Survey)[key], DATE_FORMAT, this.locale, '-0000')
      case 'anonymous':
        return (object as Survey)[key] ? 'tak' : 'nie';
      default:
        return (object as Survey)[key]
    }
  }

  onEditClick(id: string) {
    console.log(`edit ${id}`)
  }

  onDeleteClick(id: string) {
    console.log(`delete ${id}`)
  }

  onTitleClick(survey: any) {
    console.log(`preview ${(survey as Survey).id}`);
  }

  onPauseClick(index: number) {
    this.surveys[index].paused = !this.surveys[index].paused;
    console.log(`pause/resume ${this.surveys[index].id}`)
  }
}
