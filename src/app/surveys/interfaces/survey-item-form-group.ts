import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {SurveyItemFormValue} from "./survey-item-form-value";

export interface SurveyItemFormGroup extends FormGroup {
  value: SurveyItemFormValue,
  controls: {
    questions: FormArray;
    type: FormControl;
    options: FormArray;
    required: FormControl;
  }
}
