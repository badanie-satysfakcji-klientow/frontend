import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_URL} from "../../shared/constants/api-url";
import {SurveyConfiguration} from "../interfaces/survey-configuration";
import {CreateSurveyResponse} from "../interfaces/create-survey-response";

@Injectable({
  providedIn: 'root'
})
export class SurveysService {
  rootURL = `${API_URL}/api/surveys`;

  constructor(private httpClient: HttpClient) {
  }

  createSurvey(surveyConfiguration: SurveyConfiguration, creator_id: string) {
    return this.httpClient.post<CreateSurveyResponse>(this.rootURL, {
      title: surveyConfiguration.surveyName,
      description: surveyConfiguration.description,
      creator_id: creator_id,
      starts_at: new Date(surveyConfiguration.startDate).toISOString(),
      expires_at: new Date(surveyConfiguration.endDate).toISOString(),
      paused: false,
      anonymous: surveyConfiguration.anonymous,
      greeting: surveyConfiguration.greeting,
      farewell: surveyConfiguration.farewell
    });
  }
}
