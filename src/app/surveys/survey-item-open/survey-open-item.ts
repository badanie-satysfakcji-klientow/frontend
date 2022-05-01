import {DropdownItem} from "../../shared/interfaces/dropdown-item";
import {SurveyItemTypeOpen} from "../types/survey-item-type";

export interface SurveyOpenItem extends DropdownItem {
  label: 'krótka odpowiedź tekstowa' | 'długa odpowiedź tekstowa' | 'wartość liczbowa';
  value: SurveyItemTypeOpen;
}
