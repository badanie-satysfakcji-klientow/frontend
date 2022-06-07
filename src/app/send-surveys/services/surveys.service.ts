import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_URL} from "../../shared/constants/api-url";
import {Survey} from "../../shared/interfaces/survey";

@Injectable({
  providedIn: 'root'
})
export class SurveysService {
  rootUrl = `${API_URL}/api/surveys`;

  constructor(private httpClient: HttpClient) {
  }

  getSurveys(creatorId: string) {
    return this.httpClient.get<Survey[]>(this.rootUrl, {params: {creator_id: creatorId}});
  }
}
