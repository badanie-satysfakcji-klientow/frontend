import {Component, EventEmitter, Output} from '@angular/core';
import {AbstractOptions} from "../classes/abstract-options.component";
import {SingleMultiple} from "../interfaces/single-multiple";
import {SurveyItemType} from "../types/survey-item-type";

@Component({
  selector: 'app-survey-item-grid',
  templateUrl: './survey-item-grid.component.html',
  styleUrls: ['./survey-item-grid.component.scss']
})
export class SurveyItemGridComponent extends AbstractOptions implements SingleMultiple{
  @Output() switchMultiple: EventEmitter<SurveyItemType>;

  constructor() {
    super();
    this.switchMultiple = new EventEmitter<SurveyItemType>();
  }


  onMultipleChange(): void {
    this.switchMultiple.emit(this.itemForm.value.type);
  }

}
