import {Component} from '@angular/core';
import {SurveyItem} from "../interfaces/survey-item";
import {FormArray, FormControl} from "@angular/forms";
import {FormBuilder} from "@angular/forms";
import {SurveyItemFormGroup} from "../interfaces/survey-item-form-group";
import {Input} from "@angular/core";

@Component({
  selector: 'app-survey-questions',
  templateUrl: './survey-questions.component.html',
  styleUrls: ['./survey-questions.component.scss']
})
export class SurveyQuestionsComponent {
  @Input() questionsArray!: FormArray;
  newItemType: FormControl;

  questions: SurveyItem[] = [
    {label: 'lista rozwijana', value: 'list'},
    {label: "pytanie otwarte", value: 'openShort'},
    {label: "pytanie zamknięte", value: 'closedSingle'},
    {label: 'siatka pól wyboru', value: 'gridSingle'},
    {label: 'skala', value: 'scale5'}
  ]

  constructor(private formBuilder: FormBuilder) {
    this.newItemType = this.formBuilder.control(null, {initialValueIsDefault: true})
  }

  handleItemAction($event: SurveyItemFormGroup | null) {
    if ($event) this.questionsArray.push(this.formBuilder.group($event.controls));
    this.newItemType.reset();
  }
}
