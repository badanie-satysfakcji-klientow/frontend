import {Component} from '@angular/core';
import {SurveyItem} from "../interfaces/survey-item";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-survey-questions',
  templateUrl: './survey-questions.component.html',
  styleUrls: ['./survey-questions.component.scss']
})
export class SurveyQuestionsComponent {
  questions: SurveyItem[] = [
    {label: 'lista rozwijana', value: 'list'},
    {label: "pytanie otwarte", value: 'openShort'},
    {label: "pytanie zamknięte", value: 'closedSingle'},
    {label: 'siatka pól wyboru', value: 'gridSingle'},
    {label: 'skala', value: 'scale5'}
  ]

  newQuestion = new FormControl(null);

  handleItemAction($event: any) {
    if ($event) {
      //todo
    } else {
      this.newQuestion.setValue(null);
    }
  }
}
