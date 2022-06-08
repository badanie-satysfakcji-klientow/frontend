import {FormArray, FormControl} from "@angular/forms";
import {FormGroup} from "@angular/forms";

export interface SendFormGroup extends FormGroup{
  value: { surveyId: string, recipients: string[], recipient: string };
  controls: { surveyId: FormControl, recipients: FormArray, recipient: FormControl };
}
