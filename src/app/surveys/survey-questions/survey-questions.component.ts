import {Component} from '@angular/core';
import {QuestionTypeItem} from "../interfaces/question-type-item";
import {DropdownItem} from "../../shared/interfaces/dropdown-item";
import {SurveyItemAction} from "../types/survey-item-action";

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

  selected?: QuestionTypeItem | null;

  handleItemSelection(selection: DropdownItem | null) {
    this.selected = selection as QuestionTypeItem | null;
  }

  handleItemAction($event: SurveyItemAction) {
    if ($event === 'cancel') {
      this.selected = null;
    }
  }
}
