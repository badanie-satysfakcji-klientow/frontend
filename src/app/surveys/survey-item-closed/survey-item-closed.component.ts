import {Component, EventEmitter} from '@angular/core';
import {Output} from "@angular/core";
import {SurveyItemType} from "../types/survey-item-type";
import {AbstractOptions} from "../classes/abstract-options.component";
import {SingleMultiple} from "../interfaces/single-multiple";

@Component({
  selector: 'app-survey-item-closed',
  templateUrl: './survey-item-closed.component.html',
  styleUrls: ['./survey-item-closed.component.scss']
})
export class SurveyItemClosedComponent extends AbstractOptions implements SingleMultiple {

  @Output() switchMultiple = new EventEmitter<SurveyItemType>();

  constructor() {
    super();
  }

  onMultipleChange() {
    this.switchMultiple.emit(this.itemForm.value.type)
  }
}
