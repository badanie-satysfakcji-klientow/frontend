import {Component} from '@angular/core';
import {QuestionTypeItem} from "../interfaces/question-type-item";
import {QuestionTypeValue} from "../enums/question-type-value";

@Component({
  selector: 'app-survey-questions',
  templateUrl: './survey-questions.component.html',
  styleUrls: ['./survey-questions.component.scss']
})
export class SurveyQuestionsComponent {
  questions: QuestionTypeItem[] = [
    {
      viewValue: 'Lista rozwijana',
      value: QuestionTypeValue.LIST
    },
    {
      viewValue: 'Pytanie otwarte',
      value: QuestionTypeValue.OPEN
    },
    {
      viewValue: 'Pytanie zamknięte',
      value: QuestionTypeValue.CLOSED
    },
    {
      viewValue: 'Siatka pól wyboru',
      value: QuestionTypeValue.GRID
    },
    {
      viewValue: 'Skala',
      value: QuestionTypeValue.SCALE
    }
  ]
}
