import {DropdownItem} from "../../shared/interfaces/dropdown-item";
import {SurveyItemTypeScale} from "../types/survey-item-type";

export interface SurveyScaleItem extends DropdownItem {
  label: '5' | '10' | '11 (NPS)';
  value: SurveyItemTypeScale;
}
