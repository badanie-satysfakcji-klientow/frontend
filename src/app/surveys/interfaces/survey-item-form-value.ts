import {SurveyItemType} from "../types/survey-item-type";

export interface SurveyItemFormValue {
  content: string;
  type: SurveyItemType;
  options: string[]
}
