import {Injectable} from '@angular/core';
import {SurveyItemLabel} from "../types/survey-item-label";
import {SurveyItemType} from "../types/survey-item-type";


@Injectable({
  providedIn: 'root'
})
export class ItemTypeResolveService {
  resolveType(type: SurveyItemType): SurveyItemLabel {
    if (/closed/.test(type)) return 'pytanie zamknięte';
    else if (/open/.test(type)) return 'pytanie otwarte';
    else if (/grid/.test(type)) return 'siatka pól wyboru';
    else if (/scale/.test(type)) return 'skala';
    else return 'lista rozwijana';
  }
}
