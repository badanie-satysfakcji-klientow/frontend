import {Injectable} from '@angular/core';
import {SurveyService} from "../survey/survey.service";
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {FullSurvey} from "../../interfaces/full-survey";

@Injectable({
  providedIn: 'root'
})
export class SurveyResolverService implements Resolve<FullSurvey> {

  constructor(private survey: SurveyService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.survey.getSurvey(route.params['surveyId'])
  }
}
