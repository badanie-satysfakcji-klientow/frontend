import {Component} from '@angular/core';
import {DatePipe} from "@angular/common";
import {SurveyGeneral} from "../interfaces/survey-general";
import {DATE_FORMAT} from "../../shared/constants/date-format";

type DisplayedColumn = keyof SurveyGeneral;

@Component({
  selector: 'app-browse-surveys',
  templateUrl: './browse-surveys.component.html',
  styleUrls: ['./browse-surveys.component.scss']
})
export class BrowseSurveysComponent {
  surveys: SurveyGeneral[] = [
    {
      id: '0',
      title: 'Ankieta pracownicza',
      description: 'Badanie satysfakcji pracowników',
      created_at: new Date().toISOString(),
      starts_at: new Date().toISOString(),
      expires_at: new Date().toISOString(),
      paused: true,
      anonymous: false
    },
    {
      id: '1',
      title: 'Ankieta o kotkach',
      description: 'Badanie satysfakcji pracowników',
      created_at: new Date().toISOString(),
      starts_at: new Date().toISOString(),
      expires_at: new Date().toISOString(),
      paused: false,
      anonymous: true
    }
  ]

  displayedColumns: DisplayedColumn[] = ['title', 'description', 'created_at', 'anonymous', 'starts_at', 'expires_at'];
  headerCells = ['Tytuł', 'Opis', 'Utworzono', 'Anonimowa', 'Początek', 'Koniec'];

  constructor(private datePipe: DatePipe) {
  }

  valueOf(object: object, key: DisplayedColumn) {
    switch (key) {
      case "created_at":
      case "starts_at":
      case "expires_at":
        return this.datePipe.transform((object as SurveyGeneral)[key], DATE_FORMAT)
      case 'anonymous':
        return (object as SurveyGeneral)[key] ? 'tak' : 'nie';
      default:
        return (object as SurveyGeneral)[key]
    }
  }

  onEditClick(id: string) {
    console.log(`edit ${id}`)
  }

  onDeleteClick(id: string) {
    console.log(`delete ${id}`)
  }

  onTitleClick(survey: any) {
    console.log(`preview ${(survey as SurveyGeneral).id}`);
  }

  onPauseClick(index: number) {
    this.surveys[index].paused = !this.surveys[index].paused;
    console.log(`pause/resume ${this.surveys[index].id}`)
  }
}
