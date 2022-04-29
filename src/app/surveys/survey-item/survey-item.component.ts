import {Component, SimpleChanges} from '@angular/core';
import {Input} from "@angular/core";
import {QuestionTypeItem} from "../interfaces/question-type-item";
import {Output} from "@angular/core";
import {EventEmitter} from "@angular/core";
import {SurveyItemAction} from "../types/survey-item-action";
import {FormBuilder, FormControl} from "@angular/forms";
import {OnChanges} from "@angular/core";

@Component({
  selector: 'app-survey-item',
  templateUrl: './survey-item.component.html',
  styleUrls: ['./survey-item.component.scss']
})
export class SurveyItemComponent implements OnChanges {
  @Input() itemType!: QuestionTypeItem;
  @Input() style?: string;
  @Output() itemAction = new EventEmitter<SurveyItemAction>();

  itemForm = this.formBuilder.group({
    questionContent: new FormControl(''),
    type: new FormControl(''),
    multiple: new FormControl(false)
  })

  ngOnChanges(changes: SimpleChanges) {
    this.itemForm.patchValue({type: this.itemType.value});
  }

  constructor(private formBuilder: FormBuilder) {
  }

  onAddClick() {
    console.log(this.itemForm.value)
    this.itemAction.emit('add');
  }

  onCancelClick() {
    this.itemAction.emit('cancel');
  }
}
