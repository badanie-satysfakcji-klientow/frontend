import {Question} from "./question";
import {Precondition} from "./precondition";

interface Option {
  option_id: string
}

export interface Item {
  id: string;
  section: string;
  header: string;
  questions: Question[];
  options: Option[];
  preconditions: Precondition[]
}
