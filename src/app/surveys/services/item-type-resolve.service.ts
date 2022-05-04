import {Injectable} from '@angular/core';
import {SurveyItemLabel} from "../types/survey-item-label";
import {SurveyItemType} from "../types/survey-item-type";


@Injectable({
  providedIn: 'root'
})
export class ItemTypeResolveService {
  getLabel(type: SurveyItemType): SurveyItemLabel {
    switch (type) {
      case "closedMultiple":
      case "closedSingle":
        return 'pytanie zamknięte';
      case 'openShort':
      case "openLong":
      case 'openNumeric':
        return 'pytanie otwarte';
      case 'gridSingle':
      case "gridMultiple":
        return 'siatka pól wyboru';
      case "scale5":
      case "scale10":
      case "scaleNPS":
        return 'skala';
      default:
        return 'lista rozwijana'
    }
  }
}
