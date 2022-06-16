import {FormControl, FormGroup} from "@angular/forms";
import {SectionFormValue} from "./section-form-value";

export interface SectionFormGroup extends FormGroup {
  value: SectionFormValue;
  controls: {
    name: FormControl;
    description: FormControl;
  }
}
