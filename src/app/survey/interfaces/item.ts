import {Question} from "./question";
import {Option} from "./option";
import {SurveyItemType} from "../../surveys/types/survey-item-type";

export interface Item {
  id: string;
  required: boolean;
  questions: Question[];
  options: Option[];
  type: SurveyItemType;
}
