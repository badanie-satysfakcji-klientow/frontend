import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_URL} from "../../shared/constants/api-url";
import {SurveyGeneralExtended} from "../interfaces/survey-general-extended";

@Injectable({
  providedIn: 'root'
})
export class SavedSurveysService {
  rootUrl = `${API_URL}/api/v1/surveys`;

  constructor(private httpClient: HttpClient) {
  }

  getSurveysByCreatorId(creatorId: string) {

    return this.httpClient.get<SurveyGeneralExtended[]>(this.rootUrl, {params: {creator_id: creatorId}});
  }
}
