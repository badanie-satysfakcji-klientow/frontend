import {DropdownItem} from "../../shared/interfaces/dropdown-item";
import {QuestionTypeValue} from "../enums/question-type-value";

export interface QuestionTypeItem extends DropdownItem {
  viewValue: "Lista rozwijana" | "Pytanie otwarte" | "Pytanie zamknięte" | "Siatka pól wyboru" | "Skala";
  value: QuestionTypeValue
}
