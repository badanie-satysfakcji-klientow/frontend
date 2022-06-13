import {Component} from '@angular/core';
import {SurveyItem} from "../interfaces/survey-item";
import {FormControl} from "@angular/forms";
import {FormBuilder} from "@angular/forms";
import {ItemsStateService} from "../services/items-state.service";

@Component({
  selector: 'app-survey-questions',
  templateUrl: './survey-questions.component.html',
  styleUrls: ['./survey-questions.component.scss']
})
export class SurveyQuestionsComponent {
  newItemType: FormControl;

  questionItems: SurveyItem[] = [
    {label: 'lista rozwijana', value: 'list'},
    {label: "pytanie otwarte", value: 'openShort'},
    {label: "pytanie zamknięte", value: 'closedSingle'},
    {label: 'siatka pól wyboru', value: 'gridSingle'},
    {label: 'skala', value: 'scale5'}
  ]

  constructor(private formBuilder: FormBuilder,
              public itemsStateService: ItemsStateService
  ) {
    this.newItemType = this.formBuilder.control(null, {initialValueIsDefault: true})
  }

  onItemComplete() {
    this.newItemType.reset();
  }
}
