import {Component, EventEmitter} from '@angular/core';
import {Output} from "@angular/core";
import {SurveyItemType} from "../types/survey-item-type";
import {AbstractOptions} from "../classes/abstract-options.component";
import {TypeChange} from "../interfaces/type-change";

@Component({
  selector: 'app-survey-item-closed',
  templateUrl: './survey-item-closed.component.html',
  styleUrls: ['./survey-item-closed.component.scss']
})
export class SurveyItemClosedComponent extends AbstractOptions implements TypeChange {

  @Output() changeType = new EventEmitter<SurveyItemType>();

  constructor() {
    super();
  }

  onTypeChange() {
    this.changeType.emit(this.itemForm.value.type)
  }
}
