import {Injectable} from "@angular/core";
import {ValidationErrors, Validator} from "@angular/forms";
import {SurveyConfigurationFormGroup} from "../interfaces/survey-configuration-form-group";

@Injectable({providedIn: "root"})
export class DatesChronological implements Validator {
  validate(control: SurveyConfigurationFormGroup): ValidationErrors | null {
    const {startDate, endDate} = control.value;
    if (Date.parse(startDate) < Date.parse(endDate)) return null;
    return {datesChronological: false}
  }
}
