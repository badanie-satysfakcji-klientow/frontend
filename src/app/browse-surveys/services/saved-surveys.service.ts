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

  getSurveysByCreatorId(creatorId: string) {
    return this.httpClient.get<Survey[]>(this.rootUrl, {params: {creator_id: creatorId}});
  }

  deleteSurvey(surveyId: string){
    return this.httpClient.delete(`${this.rootUrl}/${surveyId}`)
  }

  pauseSurvey(survey: Survey){
    const url = `http://localhost:8000/ap/surveys/<id _ankiety>`;
    return this.httpClient.patch(
      url , {paused: ! survey.paused }
    )
  }
}
