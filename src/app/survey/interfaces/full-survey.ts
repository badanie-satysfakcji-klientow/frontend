import {Survey} from "../../shared/interfaces/survey";
import {Item} from "./item";
import {Section} from "./section";

export interface FullSurvey extends Survey {
  items: Item[];
  sections?: Section[];
}
