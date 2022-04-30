import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {SurveyItemType} from "../types/survey-item-type";

export interface SurveyItemGroup extends FormGroup {
  value: {
    questionContent: string;
    type: SurveyItemType;
    options: string[]
  },
  controls: {
    questionContent: FormControl,
    type: FormControl,
    options: FormArray
  }
}
