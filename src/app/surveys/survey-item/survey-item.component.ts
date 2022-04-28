import {Component} from '@angular/core';
import {Input} from "@angular/core";
import {QuestionTypeItem} from "../interfaces/question-type-item";

@Component({
  selector: 'app-survey-item',
  templateUrl: './survey-item.component.html',
  styleUrls: ['./survey-item.component.scss']
})
export class SurveyItemComponent {
  @Input() questionType!: QuestionTypeItem;

  constructor() {
  }


}
