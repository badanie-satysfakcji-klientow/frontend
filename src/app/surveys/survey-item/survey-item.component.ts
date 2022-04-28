import {Component} from '@angular/core';
import {Input} from "@angular/core";
import {QuestionTypeItem} from "../interfaces/question-type-item";
import {Output} from "@angular/core";
import {EventEmitter} from "@angular/core";
import {SurveyItemAction} from "../types/survey-item-action";

@Component({
  selector: 'app-survey-item',
  templateUrl: './survey-item.component.html',
  styleUrls: ['./survey-item.component.scss']
})
export class SurveyItemComponent {
  @Input() questionType!: QuestionTypeItem;
  @Input() style?: string;
  @Output() itemAction = new EventEmitter<SurveyItemAction>();


  onAddClick() {
    this.itemAction.emit('add');
  }

  onCancelClick() {
    this.itemAction.emit('cancel');
  }
}
