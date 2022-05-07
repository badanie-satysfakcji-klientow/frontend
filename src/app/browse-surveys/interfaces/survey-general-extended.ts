import {SurveyGeneral} from "./survey-general";

export interface SurveyGeneralExtended extends SurveyGeneral {
  greeting: string;
  farewell: string;
  creator: string;
}
