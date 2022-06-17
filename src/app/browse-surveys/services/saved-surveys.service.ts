import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_URL} from "../../shared/constants/api-url";
import {Survey} from "../../shared/interfaces/survey";

@Injectable({
  providedIn: 'root'
})
export class SavedSurveysService {
  rootUrl = `${API_URL}/api/surveys`;

  constructor(private httpClient: HttpClient) {
  }

  getSurveys() {
    return this.httpClient.get<Survey[]>(this.rootUrl);
  }

  deleteSurvey(surveyId: string) {
    return this.httpClient.delete(`${this.rootUrl}/${surveyId}`);
  }

  updateTimeFrames(surveyId: string, startsAt: string, expiresAt: string) {
    return this.httpClient.patch(`${this.rootUrl}/${surveyId}`, {
      starts_at: startsAt,
      expires_at: expiresAt
    });
  }

  pauseSurvey(survey: Survey){
    return this.httpClient.patch(`${this.rootUrl}/${survey.id}`, {paused: ! survey.paused});
  }
}
