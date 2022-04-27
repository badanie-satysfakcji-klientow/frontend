import {Component} from '@angular/core';
import {QuestionTypeItem} from "../interfaces/question-type-item";

@Component({
  selector: 'app-survey-questions',
  templateUrl: './survey-questions.component.html',
  styleUrls: ['./survey-questions.component.scss']
})
export class SurveyQuestionsComponent {
  questions: QuestionTypeItem[] = [
    {viewValue: 'Lista rozwijana', value: 'list'},
    {viewValue: "Pytanie otwarte", value: 'open'},
    {viewValue: "Pytanie zamknięte", value: 'closed'},
    {viewValue: 'Siatka pól wyboru', value: 'grid'},
    {viewValue: 'Skala', value: 'scale'}
  ]
}
