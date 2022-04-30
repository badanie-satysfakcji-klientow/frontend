import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {SurveyItemValue} from "../types/survey-item-value";

export interface SurveyItemGroup extends FormGroup {
  value: {
    questionContent: string;
    type: SurveyItemValue;
    options: string[]
  },
  controls: {
    questionContent: FormControl,
    type: FormControl,
    options: FormArray
  }
}
