import {SurveyGeneral} from "./survey-general";

interface Item {
  id: string;
  section: string;
  header: string;
  questions: Question[];
  options: Option[];
  preconditions: Precondition[]
}

interface Question {
  order: number;
  value: string;
}

interface Option {
  option_id: string
}

interface Precondition {
  expected_option: string;
  next_item: string
}

export interface SurveyGeneralExtended extends SurveyGeneral {
  greeting: string;
  farewell: string;
  creator_id: string;
  items: Item[]
}
