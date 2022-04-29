import {Component} from '@angular/core';
import {QuestionTypeItem} from "../interfaces/question-type-item";
import {SurveyItemAction} from "../types/survey-item-action";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-survey-questions',
  templateUrl: './survey-questions.component.html',
  styleUrls: ['./survey-questions.component.scss']
})
export class SurveyQuestionsComponent {
  questions: QuestionTypeItem[] = [
    {viewValue: 'lista rozwijana', value: 'list'},
    {viewValue: "pytanie otwarte", value: 'open'},
    {viewValue: "pytanie zamknięte", value: 'closed'},
    {viewValue: 'siatka pól wyboru', value: 'grid'},
    {viewValue: 'skala', value: 'scale'}
  ]

  newQuestion = new FormControl(null);

  handleItemAction($event: SurveyItemAction) {
    if ($event === 'cancel') {
      this.newQuestion.setValue(null);
    }
  }
}
