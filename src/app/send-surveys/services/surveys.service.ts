import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_URL} from "../../shared/constants/api-url";

@Injectable({
  providedIn: 'root'
})
export class SurveysService {
  rootUrl = `${API_URL}/api/surveys`;

  constructor(private httpClient: HttpClient) {
  }

  sendRecipients(recipients: string[], surveyId: string) {
    return this.httpClient.post(`${this.rootUrl}/${surveyId}/send`, {interviewees: recipients})
  }
}
