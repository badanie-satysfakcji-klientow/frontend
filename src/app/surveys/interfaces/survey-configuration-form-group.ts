import {FormControl, FormGroup} from "@angular/forms";
import {SurveyConfiguration} from "./survey-configuration";

export interface SurveyConfigurationFormGroup extends FormGroup {
  value: SurveyConfiguration;
  controls: {
    surveyName: FormControl;
    description: FormControl;
    greeting: FormControl;
    farewell: FormControl;
    anonymous: FormControl;
    startDate: FormControl;
    endDate: FormControl;
  }
}
