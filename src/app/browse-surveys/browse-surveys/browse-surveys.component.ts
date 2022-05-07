import {Component} from '@angular/core';
import {SurveyGeneral} from "../interfaces/survey-general";

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
      paused: false,
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

  getKeyByName(object: object, name: DisplayedColumn) {
    switch (name) {
      case "created_at":
      case "starts_at":
      case "expires_at":
        return new Date((object as SurveyGeneral)[name]).toLocaleDateString();
      case 'anonymous':
        return (object as SurveyGeneral)[name] ? 'TAK' : 'NIE';
      default:
        return (object as SurveyGeneral)[name]
    }
  }

  onEditClick(id: string) {
    console.log(`edit ${id}`)
  }

  onDeleteClick(id: string) {
    console.log(`delete ${id}`)
  }
}
