import {FormControl, FormGroup} from "@angular/forms";

interface SurveyConfiguration {
  surveyName: string;
  description: string;
  greeting: string;
  farewell: string;
  anonymous: boolean;
  startDate: string;
  endDate: string;
}

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
