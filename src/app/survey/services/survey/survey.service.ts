import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_URL} from "../../../shared/constants/api-url";
import {FullSurvey} from "../../interfaces/full-survey";

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  rootUrl = `${API_URL}/api/surveys`;

  constructor(private httpClient: HttpClient) {
  }

  getSurvey(surveyId: string) {
    return this.httpClient.get<FullSurvey>(`${this.rootUrl}/${surveyId}`);
  }
}
