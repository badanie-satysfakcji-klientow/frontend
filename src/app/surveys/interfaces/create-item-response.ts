import {SurveyItemIdentifier} from "./survey-item-identifier";

export interface CreateItemResponse extends SurveyItemIdentifier {
  status: string;
}
