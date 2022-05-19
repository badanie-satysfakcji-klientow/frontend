import {SurveyItemType} from "../types/survey-item-type";

export interface SurveyItemFormValue {
  questions: string[];
  type: SurveyItemType;
  options: string[];
  required: boolean;
}
