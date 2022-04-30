import {Component} from '@angular/core';
import {SurveyItem} from "../interfaces/survey-item";
import {SurveyItemAction} from "../types/survey-item-action";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-survey-questions',
  templateUrl: './survey-questions.component.html',
  styleUrls: ['./survey-questions.component.scss']
})
export class SurveyQuestionsComponent {
  questions: SurveyItem[] = [
    {label: 'lista rozwijana', value: 'list'},
    {label: "pytanie otwarte", value: 'open'},
    {label: "pytanie zamknięte", value: 'closed'},
    {label: 'siatka pól wyboru', value: 'grid'},
    {label: 'skala', value: 'scale'}
  ]

  newQuestion = new FormControl(null);

  handleItemAction($event: SurveyItemAction) {
    if ($event === 'cancel') {
      this.newQuestion.setValue(null);
    }
  }
}
