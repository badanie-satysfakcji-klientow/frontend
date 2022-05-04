import {SurveyItemLabel} from "../types/survey-item-label";
import {SurveyItemType} from "../types/survey-item-type";
import {DropdownItem} from "../../shared/interfaces/dropdown-item";

export interface SurveyItem extends DropdownItem {
  label: SurveyItemLabel;
  value: SurveyItemType;
}
