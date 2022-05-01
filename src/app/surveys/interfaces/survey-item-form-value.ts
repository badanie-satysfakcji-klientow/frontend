import {SurveyItemType} from "../types/survey-item-type";

export interface SurveyItemFormValue {
  questionContent: string;
  type: SurveyItemType;
  options: string[]
}
