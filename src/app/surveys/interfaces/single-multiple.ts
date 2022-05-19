import {EventEmitter} from "@angular/core";
import {SurveyItemType} from "../types/survey-item-type";

export interface SingleMultiple {
  switchMultiple: EventEmitter<SurveyItemType>;

  onMultipleChange(): void;
}
